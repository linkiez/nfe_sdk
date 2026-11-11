/**
 * Generates the NF-e 4.00 document layout used by `buildNFeDocument` from the official
 * XSD (`xsd/PL_010c_NT2022_002v1.30/leiauteNFe_v4.00.xsd`).
 *
 * Outputs (committed):
 * - src/canonical/nfe/builder/nfe-layout.generated.ts: ordered particles, occurrences and
 *   attributes for every element of `NFe/infNFe`, resolved from named and inline types.
 * - src/canonical/nfe/builder/nfe-document-input.generated.ts: TypeScript input types that
 *   mirror the layout (decimals stay strings; attributes use an `@` prefix).
 *
 * Run: `npx tsx tools/generate-nfe-builder-layout.ts`
 */
import { DOMParser } from '@xmldom/xmldom';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const XSD_PATH = resolve('xsd/PL_010c_NT2022_002v1.30/leiauteNFe_v4.00.xsd');
const OUT_DIR = resolve('src/canonical/nfe/builder');
const XS = 'http://www.w3.org/2001/XMLSchema';

type Max = number | 'unbounded';
type Particle =
  | {
      kind: 'element';
      name: string;
      min: number;
      max: Max;
      /** Reference to `types` for complex elements; absent for leaves. */
      type?: string;
    }
  | { kind: 'choice'; min: number; max: Max; options: Particle[][] }
  | { kind: 'sequence'; min: number; max: Max; items: Particle[] };
type Attribute = { name: string; required: boolean };
type TypeLayout = { attributes: Attribute[]; content: Particle[] };

function childElements(node: Element, localName?: string): Element[] {
  const out: Element[] = [];
  for (let child = node.firstChild; child; child = child.nextSibling) {
    if (child.nodeType === 1) {
      const element = child as Element;
      if (
        element.namespaceURI === XS &&
        (!localName || element.localName === localName)
      ) {
        out.push(element);
      }
    }
  }
  return out;
}

const namedComplex = new Map<string, Element>();
const SCHEMA_FILES = [
  'leiauteNFe_v4.00.xsd',
  'tiposBasico_v4.00.xsd',
  'DFeTiposBasicos_v1.00.xsd',
];
for (const file of SCHEMA_FILES) {
  const schema = new DOMParser().parseFromString(
    readFileSync(resolve(dirname(XSD_PATH), file), 'utf8'),
    'text/xml',
  ).documentElement as unknown as Element;
  for (const complexType of childElements(schema, 'complexType')) {
    namedComplex.set(complexType.getAttribute('name') ?? '', complexType);
  }
}

const types: Record<string, TypeLayout> = {};

function occurs(node: Element): { min: number; max: Max } {
  const min = Number(node.getAttribute('minOccurs') ?? '1');
  const rawMax = node.getAttribute('maxOccurs') ?? '1';
  return { min, max: rawMax === 'unbounded' ? 'unbounded' : Number(rawMax) };
}

function sanitize(path: string): string {
  return path.replaceAll(/[^A-Za-z0-9_]/g, '_');
}

function parseComplexType(complexType: Element, typeId: string): void {
  if (types[typeId]) return;
  const layout: TypeLayout = { attributes: [], content: [] };
  types[typeId] = layout; // reserve to allow recursion guards
  for (const attribute of childElements(complexType, 'attribute')) {
    layout.attributes.push({
      name: attribute.getAttribute('name') ?? '',
      required: attribute.getAttribute('use') === 'required',
    });
  }
  for (const group of [
    ...childElements(complexType, 'sequence'),
    ...childElements(complexType, 'choice'),
  ]) {
    layout.content.push(parseGroup(group, typeId));
  }
}

function members(group: Element): Element[] {
  return childElements(group).filter(
    (member) => member.localName !== 'annotation',
  );
}

function parseGroup(group: Element, typeId: string): Particle {
  const { min, max } = occurs(group);
  if (group.localName === 'choice') {
    const options: Particle[][] = members(group).map((member) => [
      parseMember(member, typeId),
    ]);
    return { kind: 'choice', min, max, options };
  }
  return {
    kind: 'sequence',
    min,
    max,
    items: members(group).map((m) => parseMember(m, typeId)),
  };
}

function parseMember(member: Element, typeId: string): Particle {
  if (member.localName === 'sequence' || member.localName === 'choice') {
    return parseGroup(member, typeId);
  }
  if (member.localName !== 'element') {
    throw new Error(
      `Unsupported XSD particle <${member.localName}> in ${typeId}`,
    );
  }
  const { min, max } = occurs(member);
  const name = member.getAttribute('name');
  if (!name) {
    // Only ds:Signature is referenced; the signer adds it.
    throw new Error(
      `Unsupported element reference ${member.getAttribute('ref')} in ${typeId}`,
    );
  }
  const typeName = member.getAttribute('type');
  const inline = childElements(member, 'complexType')[0];
  if (typeName && namedComplex.has(typeName)) {
    parseComplexType(namedComplex.get(typeName)!, typeName);
    return { kind: 'element', name, min, max, type: typeName };
  }
  if (inline) {
    const inlineId = `${typeId}_${sanitize(name)}`;
    parseComplexType(inline, inlineId);
    return { kind: 'element', name, min, max, type: inlineId };
  }
  return { kind: 'element', name, min, max };
}

// Entry: NFe element → TNFe → infNFe (inline) — Signature is excluded (added by the signer).
const tnfe = namedComplex.get('TNFe');
if (!tnfe) throw new Error('TNFe not found');
const infNFe = childElements(
  childElements(tnfe, 'sequence')[0],
  'element',
).find((element) => element.getAttribute('name') === 'infNFe');
if (!infNFe) throw new Error('infNFe not found');
const infComplex = childElements(infNFe, 'complexType')[0];
parseComplexType(infComplex, 'infNFe');

// --- layout file --------------------------------------------------------------------------
const layoutSource = `// Generated by tools/generate-nfe-builder-layout.ts from leiauteNFe_v4.00.xsd. Do not edit.
/* eslint-disable */
export type LayoutMax = number | 'unbounded';
export type LayoutParticle =
  | { readonly kind: 'element'; readonly name: string; readonly min: number; readonly max: LayoutMax; readonly type?: string }
  | { readonly kind: 'choice'; readonly min: number; readonly max: LayoutMax; readonly options: readonly (readonly LayoutParticle[])[] }
  | { readonly kind: 'sequence'; readonly min: number; readonly max: LayoutMax; readonly items: readonly LayoutParticle[] };
export interface LayoutAttribute { readonly name: string; readonly required: boolean }
export interface LayoutType { readonly attributes: readonly LayoutAttribute[]; readonly content: readonly LayoutParticle[] }

export const NFE_LAYOUT_ROOT_TYPE = 'infNFe';
export const NFE_LAYOUT_TYPES: Readonly<Record<string, LayoutType>> = ${JSON.stringify(types)};
`;
writeFileSync(resolve(OUT_DIR, 'nfe-layout.generated.ts'), layoutSource);

// --- input types file ---------------------------------------------------------------------
const typeNames = new Map<string, string>();
const nameFor = (typeId: string): string => {
  let name = typeNames.get(typeId);
  if (!name) {
    name = `NFe_${sanitize(typeId)}`;
    typeNames.set(typeId, name);
  }
  return name;
};

function particleTs(particle: Particle): string {
  if (particle.kind === 'element') {
    const base = particle.type ? nameFor(particle.type) : 'string';
    const many = particle.max === 'unbounded' || particle.max > 1;
    const optional = particle.min === 0 ? '?' : '';
    return `  readonly ${particle.name}${optional}: ${many ? `readonly ${base}[]` : base};`;
  }
  return '';
}

function particleType(particle: Particle): string {
  if (particle.kind === 'element') {
    return `{\n${particleTs(particle)}\n}`;
  }
  if (particle.kind === 'sequence') {
    const sequence = particle.items.map(particleType).join(' & ') || '{}';

    return particle.min === 0 ? `((${sequence}) | {})` : sequence;
  }
  const alternatives = particle.options.map(
    (option) => option.map(particleType).join(' & ') || '{}',
  );
  const union = alternatives.map((a) => `(${a})`).join(' | ');
  return particle.min === 0 ? `(${union} | {})` : `(${union})`;
}

const typeSource: string[] = [
  '// Generated by tools/generate-nfe-builder-layout.ts from leiauteNFe_v4.00.xsd. Do not edit.',
  '// Decimal and date values are strings (no numeric coercion); attributes use an "@" prefix.',
  '/* eslint-disable */',
];
const emitted = new Set<string>();
function emitType(typeId: string): void {
  if (emitted.has(typeId)) return;
  emitted.add(typeId);
  const layout = types[typeId];
  const attributes = layout.attributes.map(
    (attribute) =>
      `{\n  readonly '@${attribute.name}'${attribute.required ? '' : '?'}: string;\n}`,
  );
  const parts = [...attributes, ...layout.content.map(particleType)];
  typeSource.push(
    `export type ${nameFor(typeId)} = ${parts.join(' & ') || '{}'};`,
  );
}
const queue = Object.keys(types);
for (const typeId of queue) emitType(typeId);
typeSource.push('');
writeFileSync(
  resolve(OUT_DIR, 'nfe-document-input.generated.ts'),
  typeSource.join('\n'),
);

console.log(`Generated ${Object.keys(types).length} types.`);
