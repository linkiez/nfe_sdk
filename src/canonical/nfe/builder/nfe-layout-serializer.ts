import {
  NFE_LAYOUT_TYPES,
  type LayoutParticle,
} from './nfe-layout.generated.js';

type PlainObject = Readonly<Record<string, unknown>>;

function isPlainObject(value: unknown): value is PlainObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Escapes the five XML special characters.
 *
 * @param value - Raw text.
 * @returns Text safe for element content and double-quoted attributes.
 */
export function escapeXmlText(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

/** Names of the element particles reachable without descending into elements. */
function particleKeys(particles: readonly LayoutParticle[]): string[] {
  return particles.flatMap((particle) => {
    if (particle.kind === 'element') return [particle.name];
    if (particle.kind === 'sequence') return particleKeys(particle.items);
    return particle.options.flatMap(particleKeys);
  });
}

function canBeEmpty(particles: readonly LayoutParticle[]): boolean {
  return particles.every((particle) => {
    if (particle.kind === 'element') return particle.min === 0;
    if (particle.kind === 'sequence') return particle.min === 0 || canBeEmpty(particle.items);
    return particle.min === 0 || particle.options.some(canBeEmpty);
  });
}

function leafText(value: unknown, path: string, issues: string[]): string | undefined {
  if (typeof value === 'number') {
    if (Number.isSafeInteger(value)) return String(value);
    issues.push(`${path}: numero nao inteiro e proibido; informe decimais como texto`);
    return undefined;
  }
  if (typeof value !== 'string') {
    issues.push(`${path}: esperado texto`);
    return undefined;
  }
  if (value === '') {
    issues.push(`${path}: valor vazio`);
    return undefined;
  }
  if (value !== value.trim() || /[\r\n\t]/u.test(value)) {
    issues.push(`${path}: espacos nas pontas ou quebras de linha nao sao permitidos`);
    return undefined;
  }
  return value;
}

function serializeLeaf(name: string, value: unknown, path: string, issues: string[]): string {
  const text = leafText(value, path, issues);

  return text === undefined ? '' : `<${name}>${escapeXmlText(text)}</${name}>`;
}

function serializeOccurrences(
  particle: Extract<LayoutParticle, { kind: 'element' }>,
  raw: unknown,
  path: string,
  issues: string[],
): string {
  const itemPath = `${path}.${particle.name}`;
  const many = particle.max === 'unbounded' || particle.max > 1;

  if (!many) {
    if (Array.isArray(raw)) {
      issues.push(`${itemPath}: esperado um unico valor, recebida lista`);
      return '';
    }
    return serializeOne(particle, raw, itemPath, issues);
  }
  if (!Array.isArray(raw)) {
    issues.push(`${itemPath}: esperada lista`);
    return '';
  }
  if (raw.length < particle.min) {
    issues.push(`${itemPath}: minimo de ${particle.min} ocorrencia(s), recebidas ${raw.length}`);
  }
  if (particle.max !== 'unbounded' && raw.length > particle.max) {
    issues.push(`${itemPath}: ate ${particle.max} ocorrencias, recebidas ${raw.length}`);
    return '';
  }
  return raw.map((entry, index) => serializeOne(particle, entry, `${itemPath}[${index}]`, issues)).join('');
}

function serializeOne(
  particle: Extract<LayoutParticle, { kind: 'element' }>,
  value: unknown,
  path: string,
  issues: string[],
): string {
  return particle.type
    ? serializeComplex(particle.name, particle.type, value, path, issues)
    : serializeLeaf(particle.name, value, path, issues);
}

function emitParticles(
  particles: readonly LayoutParticle[],
  data: PlainObject,
  path: string,
  issues: string[],
  consumed: Set<string>,
): string {
  let out = '';

  for (const particle of particles) {
    if (particle.kind === 'element') {
      consumed.add(particle.name);
      const raw = data[particle.name];
      if (raw === undefined || raw === null) {
        if (particle.min > 0) issues.push(`${path}.${particle.name}: campo obrigatorio ausente`);
        continue;
      }
      out += serializeOccurrences(particle, raw, path, issues);
    } else if (particle.kind === 'sequence') {
      const keys = particleKeys(particle.items);
      keys.forEach((key) => consumed.add(key));
      if (particle.min === 0 && !keys.some((key) => data[key] !== undefined)) continue;
      out += emitParticles(particle.items, data, path, issues, consumed);
    } else {
      out += emitChoice(particle, data, path, issues, consumed);
    }
  }

  return out;
}

function emitChoice(
  choice: Extract<LayoutParticle, { kind: 'choice' }>,
  data: PlainObject,
  path: string,
  issues: string[],
  consumed: Set<string>,
): string {
  const allKeys = [...new Set(choice.options.flatMap(particleKeys))];
  allKeys.forEach((key) => consumed.add(key));
  const presentKeys = allKeys.filter((key) => data[key] !== undefined);

  if (presentKeys.length === 0) {
    if (choice.min === 0 || choice.options.some(canBeEmpty)) return '';
    issues.push(`${path}: informe um de ${allKeys.join(', ')}`);
    return '';
  }

  // Alternatives may share optional members (e.g. IPI in imposto): use the first
  // alternative that can hold every informed key; none means conflicting alternatives.
  const chosen = choice.options.find((option) => {
    const keys = particleKeys(option);

    return presentKeys.every((key) => keys.includes(key));
  });

  if (!chosen) {
    issues.push(`${path}: informe apenas um de ${presentKeys.join(', ')}`);
    return '';
  }

  return emitParticles(chosen, data, path, issues, new Set(allKeys));
}

/**
 * Serializes one element of the NF-e layout from plain input data.
 *
 * Children are emitted in the XSD sequence order regardless of the input key order.
 * Missing required content, unknown fields, conflicting choices, occurrence limits and
 * non-text decimals are reported in `issues` (with the offending path) rather than
 * silently coerced or dropped.
 *
 * @param name - Element name.
 * @param typeId - Layout type identifier from `NFE_LAYOUT_TYPES`.
 * @param value - Input object for the element.
 * @param path - Dotted path used in messages.
 * @param issues - Mutable list receiving every problem found.
 * @returns The element XML (empty when `value` is not usable).
 */
export function serializeComplex(
  name: string,
  typeId: string,
  value: unknown,
  path: string,
  issues: string[],
): string {
  if (!isPlainObject(value)) {
    issues.push(`${path}: esperado objeto`);
    return '';
  }
  const layout = NFE_LAYOUT_TYPES[typeId];
  const consumed = new Set<string>();
  let attributes = '';

  for (const attribute of layout.attributes) {
    const key = `@${attribute.name}`;
    consumed.add(key);
    const raw = value[key];
    if (raw === undefined) {
      if (attribute.required) issues.push(`${path}.${key}: atributo obrigatorio ausente`);
      continue;
    }
    const text = leafText(raw, `${path}.${key}`, issues);
    if (text !== undefined) attributes += ` ${attribute.name}="${escapeXmlText(text)}"`;
  }

  const body = emitParticles(layout.content, value, path, issues, consumed);

  for (const key of Object.keys(value)) {
    if (!consumed.has(key) && value[key] !== undefined) {
      issues.push(`${path}.${key}: campo nao suportado pelo layout 4.00`);
    }
  }

  return `<${name}${attributes}>${body}</${name}>`;
}
