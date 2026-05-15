import * as fs from 'node:fs';
import * as path from 'node:path';
import * as ts from 'typescript';
import { generateTemplateClassesFromXSD } from 'xsd2ts';

type DeclarationKind = 'class' | 'enum' | 'interface' | 'typeAlias';

const DECLARATION_PREFIXES: Record<DeclarationKind, string> = {
  class: 'C',
  enum: 'E',
  interface: 'I',
  typeAlias: 'T',
};

/**
 * Stores the generated declaration and its derived artifacts.
 */
interface DeclarationRecord {
  name: string;
  kind: DeclarationKind;
  references: string[];
  statementText: string;
  interfaceText?: string;
  enumText?: string;
}

/**
 * Stores one emitted module after declaration companions are split into dedicated files.
 */
interface OutputModuleRecord {
  kind: DeclarationKind;
  name: string;
  references: string[];
  statementText: string;
}

/**
 * Tracks generation outcomes per source folder.
 */
interface FolderResult {
  collisions: string[];
  files: number;
  retriesWithSanitizedPatterns: string[];
}

interface SchemaDocumentationContext {
  declarationDocs: Map<string, string>;
  memberDocs: Map<string, Map<string, string>>;
}

const ROOT_DIR = process.cwd();
const INPUT_ROOT = path.join(ROOT_DIR, 'xsd');
const OUTPUT_ROOT = path.join(ROOT_DIR, 'src');
const TEMP_ROOT = path.join(ROOT_DIR, '.xsd2ts-work');
const SKIPPED_DIRECTORIES = new Set(['node_modules', '.git', 'src', 'dist', '.xsd2ts-work']);
const OUTPUT_KIND_DIRECTORIES: Record<DeclarationKind, string> = {
  class: 'classes',
  enum: 'enums',
  interface: 'interfaces',
  typeAlias: 'types',
};

/**
 * Runs the XSD to TypeScript conversion for all XSD files or a filtered subtree.
 *
 * @example
 * npm run generate -- PL_010c_NT2022_002v1.30
 */
function main(): void {
  const filterPath = resolveFilterPath(process.argv[2]);

  ensureDirectory(OUTPUT_ROOT);
  ensureDirectory(TEMP_ROOT);

  const xsdFiles = collectXsdFiles(INPUT_ROOT, filterPath);

  if (xsdFiles.length === 0) {
    throw new Error('No XSD files found for conversion.');
  }

  const resultsByFolder = new Map<string, FolderResult>();

  for (const xsdFile of xsdFiles) {
    const relativeFilePath = path.relative(INPUT_ROOT, xsdFile);
    const relativeFolderPath = path.dirname(relativeFilePath);
    const folderResult = getOrCreateFolderResult(resultsByFolder, relativeFolderPath);

    console.log(`Generating ${relativeFilePath}`);

    const generatedSource = generateSourceFromXsd(xsdFile, folderResult);
    const declarations = extractDeclarations(generatedSource, xsdFile);
    const modules = declarations.flatMap(expandDeclarationModules);
    const modulePathMap = buildModulePathMap(relativeFolderPath, modules);

    for (const moduleRecord of modules) {
      const targetFilePath = path.join(OUTPUT_ROOT, modulePathMap.get(moduleRecord.name) ?? getModuleRelativePath(relativeFolderPath, moduleRecord));
      const collisionKey = path.relative(OUTPUT_ROOT, targetFilePath);
      const nextContent = renderModuleFile(moduleRecord, targetFilePath, modulePathMap);

      ensureDirectory(path.dirname(targetFilePath));

      if (fs.existsSync(targetFilePath)) {
        const currentContent = fs.readFileSync(targetFilePath, 'utf8');

        if (currentContent !== nextContent) {
          folderResult.collisions.push(collisionKey);
        }

        continue;
      }

      fs.writeFileSync(targetFilePath, nextContent, 'utf8');
      folderResult.files += 1;
    }
  }

  writeIndexFiles(OUTPUT_ROOT);
  postProcessGeneratedModules();
  writeManifest(resultsByFolder);

  console.log(`Converted ${xsdFiles.length} XSD files into ${OUTPUT_ROOT}`);
}

/**
 * Resolves an optional CLI filter to an absolute path inside the xsd tree.
 */
function resolveFilterPath(filterArgument?: string): string | undefined {
  if (!filterArgument) {
    return undefined;
  }

  const directPath = path.resolve(ROOT_DIR, filterArgument);

  if (fs.existsSync(directPath)) {
    return directPath;
  }

  const xsdRelativePath = path.resolve(INPUT_ROOT, filterArgument);

  if (fs.existsSync(xsdRelativePath)) {
    return xsdRelativePath;
  }

  return directPath;
}

/**
 * Gets an existing folder result or creates a fresh one.
 */
function getOrCreateFolderResult(resultsByFolder: Map<string, FolderResult>, folderPath: string): FolderResult {
  const existingResult = resultsByFolder.get(folderPath);

  if (existingResult) {
    return existingResult;
  }

  const nextResult: FolderResult = {
    collisions: [],
    files: 0,
    retriesWithSanitizedPatterns: [],
  };

  resultsByFolder.set(folderPath, nextResult);

  return nextResult;
}

/**
 * Recursively collects XSD files from the repository, excluding generated and dependency folders.
 */
function collectXsdFiles(currentPath: string, filterPath?: string): string[] {
  const entries = fs.readdirSync(currentPath, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    if (SKIPPED_DIRECTORIES.has(entry.name)) {
      continue;
    }

    const fullPath = path.join(currentPath, entry.name);

    if (filterPath && !isPathRelevant(fullPath, filterPath)) {
      continue;
    }

    if (entry.isDirectory()) {
      files.push(...collectXsdFiles(fullPath, filterPath));
      continue;
    }

    if (entry.isFile() && fullPath.endsWith('.xsd')) {
      files.push(fullPath);
    }
  }

  return files.sort((left, right) => left.localeCompare(right));
}

/**
 * Checks whether the current path belongs to the requested subtree.
 */
function isPathRelevant(candidatePath: string, filterPath: string): boolean {
  return candidatePath.startsWith(filterPath) || filterPath.startsWith(candidatePath);
}

/**
 * Converts one XSD into a normalized TypeScript source string.
 */
function generateSourceFromXsd(xsdFilePath: string, folderResult: FolderResult): string {
  const generatedFileName = path.basename(xsdFilePath).replace(/\.xsd$/i, '.ts');

  try {
    return normalizeGeneratedSource(runXsd2Ts(xsdFilePath, generatedFileName), xsdFilePath);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const sanitizedFilePath = createSanitizedRetryFile(xsdFilePath);
    folderResult.retriesWithSanitizedPatterns.push(path.relative(INPUT_ROOT, xsdFilePath));
    console.warn(`Retrying ${path.relative(INPUT_ROOT, xsdFilePath)} without pattern restrictions: ${errorMessage}`);
    return normalizeGeneratedSource(runXsd2Ts(sanitizedFilePath, generatedFileName), xsdFilePath);
  }
}

/**
 * Executes xsd2ts in an isolated working directory and returns the generated TypeScript source.
 */
function runXsd2Ts(inputFilePath: string, generatedFileName: string): string {
  const previousDirectory = process.cwd();
  const workDirectory = path.join(TEMP_ROOT, 'run');

  fs.rmSync(workDirectory, { force: true, recursive: true });
  ensureDirectory(workDirectory);
  ensureDirectory(path.join(workDirectory, 'src'));

  try {
    process.chdir(workDirectory);
    generateTemplateClassesFromXSD(inputFilePath);
    return fs.readFileSync(path.join(workDirectory, 'src', 'generated', generatedFileName), 'utf8');
  } finally {
    process.chdir(previousDirectory);
  }
}

/**
 * Removes pattern restrictions from the original schema to work around unsupported regex branches.
 */
function createSanitizedRetryFile(sourceFilePath: string): string {
  const retryDirectory = path.join(TEMP_ROOT, 'retry-inputs');
  const relativeSourcePath = path.relative(INPUT_ROOT, sourceFilePath);
  const sourceDirectoryPath = path.dirname(sourceFilePath);
  const relativeDirectoryPath = path.dirname(relativeSourcePath);
  const targetDirectoryPath = path.join(retryDirectory, relativeDirectoryPath === '.' ? '' : relativeDirectoryPath);
  const targetFilePath = path.join(retryDirectory, relativeSourcePath);
  const xsdContent = fs.readFileSync(sourceFilePath, 'utf8');
  const sanitizedContent = xsdContent
    .replace(/<xs:pattern\b[^>]*\/>\s*/g, '')
    .replace(/<xs:pattern\b[\s\S]*?<\/xs:pattern>\s*/g, '');

  fs.rmSync(targetDirectoryPath, { force: true, recursive: true });
  ensureDirectory(retryDirectory);
  fs.cpSync(sourceDirectoryPath, targetDirectoryPath, { recursive: true });
  fs.chmodSync(targetFilePath, 0o600);
  fs.writeFileSync(targetFilePath, sanitizedContent, 'utf8');

  return targetFilePath;
}

/**
 * Makes the generated TypeScript easier to parse and split.
 */
function normalizeGeneratedSource(sourceText: string, xsdFilePath: string): string {
  const normalizedSource = sourceText
    .replace(/^\/\*{11}[\s\S]*?\*{11}\/\s*/u, '')
    .replace(/:\s*([A-Za-z_]\w*)\.([A-Za-z_]\w*)/g, ': $2')
    .replace(/new\s+([A-Za-z_]\w*)\.([A-Za-z_]\w*)/g, 'new $2')
    .trim();

  return rewriteExportNames(augmentSimpleTypeDeclarations(normalizedSource, xsdFilePath), xsdFilePath);
}

/**
 * Appends fallback simple type aliases parsed directly from the XSD when xsd2ts does not emit them.
 */
function augmentSimpleTypeDeclarations(sourceText: string, xsdFilePath: string): string {
  const existingExportNames = collectRawExportNames(sourceText);
  const xsdContent = fs.readFileSync(xsdFilePath, 'utf8');
  const simpleTypePattern = /<(?:xs:)?simpleType\b[^>]*name="([^"]+)"[^>]*>([\s\S]*?)<\/(?:xs:)?simpleType>/g;
  const fallbackDeclarations: string[] = [];
  let match: RegExpExecArray | null = simpleTypePattern.exec(xsdContent);

  while (match) {
    const simpleTypeName = match[1];
    const simpleTypeBody = match[2];

    if (existingExportNames.has(simpleTypeName)) {
      match = simpleTypePattern.exec(xsdContent);
      continue;
    }

    const enumerationValues = [...simpleTypeBody.matchAll(/<(?:xs:)?enumeration\b[^>]*value="([^"]*)"\s*\/>/g)].map((valueMatch) => valueMatch[1]);
    const typeBody = enumerationValues.length > 0
      ? enumerationValues.map((value) => JSON.stringify(value)).join(' | ')
      : 'string';

    fallbackDeclarations.push(`export type ${simpleTypeName} = ${typeBody};`);
    existingExportNames.add(simpleTypeName);
    match = simpleTypePattern.exec(xsdContent);
  }

  if (fallbackDeclarations.length === 0) {
    return sourceText;
  }

  return `${sourceText}\n\n${fallbackDeclarations.join('\n\n')}`;
}

/**
 * Collects raw exported symbol names before hierarchical rewriting.
 */
function collectRawExportNames(sourceText: string): Set<string> {
  const exportNamePattern = /export\s+(?:class|type)\s+([^\s<{=]+)/g;
  const exportNames = new Set<string>();
  let match: RegExpExecArray | null = exportNamePattern.exec(sourceText);

  while (match) {
    exportNames.add(match[1]);
    match = exportNamePattern.exec(sourceText);
  }

  return exportNames;
}

/**
 * Rewrites exported identifiers to stable hierarchical names derived from the source schema path.
 */
function rewriteExportNames(sourceText: string, xsdFilePath: string): string {
  const exportNamePattern = /export\s+(class|type)\s+([^\s<{=]+)/g;
  const renameMap = new Map<string, string>();
  let match: RegExpExecArray | null = exportNamePattern.exec(sourceText);

  while (match) {
    const kind: DeclarationKind = match[1] === 'class' ? 'class' : 'typeAlias';
    const rawName = match[2];

    renameMap.set(rawName, buildHierarchicalIdentifier(xsdFilePath, rawName, kind));

    match = exportNamePattern.exec(sourceText);
  }

  let rewrittenSource = sourceText;

  for (const [rawName, nextName] of renameMap.entries()) {
    rewrittenSource = replaceIdentifier(rewrittenSource, rawName, nextName);
  }

  return rewrittenSource;
}

/**
 * Builds a stable hierarchical identifier from the schema path and original export name.
 */
function buildHierarchicalIdentifier(xsdFilePath: string, rawName: string, kind: DeclarationKind): string {
  const relativeSchemaPath = path.relative(INPUT_ROOT, xsdFilePath).replace(/\.xsd$/i, '');
  const hierarchicalPrefix = toPascalCaseIdentifier(relativeSchemaPath);
  const normalizedRawName = toPascalCaseIdentifier(stripSchemaTypePrefix(rawName));
  const hierarchicalName = hierarchicalPrefix.endsWith(normalizedRawName)
    ? hierarchicalPrefix
    : `${hierarchicalPrefix}${normalizedRawName}`;

  return `${DECLARATION_PREFIXES[kind]}${hierarchicalName}`;
}

/**
 * Converts schema names and file fragments into a PascalCase identifier.
 */
function toPascalCaseIdentifier(value: string): string {
  const normalizedValue = value
    .replace(/[^A-Za-z0-9]+/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .replace(/([A-Za-z])(\d)/g, '$1 $2')
    .replace(/(\d)([A-Za-z])/g, '$1 $2')
    .trim();

  if (normalizedValue.length === 0) {
    return 'Generated';
  }

  return normalizedValue
    .split(/\s+/)
    .filter((part) => part.length > 0)
    .map((part) => `${part[0].toUpperCase()}${part.slice(1).toLowerCase()}`)
    .join('');
}

/**
 * Removes the schema's conventional leading T marker so output prefixes remain singular.
 */
function stripSchemaTypePrefix(rawName: string): string {
  if (/^T[A-Z]/.test(rawName)) {
    return rawName.slice(1);
  }

  return rawName;
}

/**
 * Replaces the leading declaration prefix while preserving the hierarchical PascalCase suffix.
 */
function replaceDeclarationPrefix(name: string, kind: 'enum' | 'interface'): string {
  const suffix = name.slice(1);
  return `${DECLARATION_PREFIXES[kind]}${suffix}`;
}

/**
 * Replaces identifier occurrences without touching longer adjacent identifiers.
 */
function replaceIdentifier(sourceText: string, currentName: string, nextName: string): string {
  const escapedName = escapeRegExp(currentName);
  const identifierPattern = new RegExp(`(?<![A-Za-z0-9_$])${escapedName}(?![A-Za-z0-9_$])`, 'g');
  return sourceText.replace(identifierPattern, nextName);
}

/**
 * Escapes a string so it can be interpolated into a regular expression safely.
 */
function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
}

/**
 * Splits the generated monolithic source into one declaration record per export.
 */
function extractDeclarations(sourceText: string, xsdFilePath: string): DeclarationRecord[] {
  const sourceFile = ts.createSourceFile('generated.ts', sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const exportedStatements = sourceFile.statements.filter(isSupportedExportedStatement);
  const exportedNames = new Set<string>(exportedStatements.map(getStatementName));
  const documentationContext = extractSchemaDocumentationContext(xsdFilePath);

  return exportedStatements.map((statement) => {
    const name = getStatementName(statement);
    const kind = ts.isClassDeclaration(statement) ? 'class' : 'typeAlias';
    const declarationDoc = documentationContext.declarationDocs.get(name);
    const memberDocs = documentationContext.memberDocs.get(name) ?? new Map<string, string>();

    return {
      name,
      kind,
      references: collectReferences(statement, exportedNames, name),
      statementText: ts.isClassDeclaration(statement)
        ? createStrictSafeClassText(statement, sourceFile, declarationDoc, memberDocs, documentationContext.declarationDocs)
        : createTypeAliasText(statement, sourceFile, declarationDoc),
      interfaceText: ts.isClassDeclaration(statement)
        ? createInterfaceFromClass(statement, sourceFile, declarationDoc, memberDocs, documentationContext.declarationDocs)
        : undefined,
      enumText: ts.isTypeAliasDeclaration(statement) ? createEnumFromTypeAlias(statement, declarationDoc) : undefined,
    };
  });
}

/**
 * Splits declaration companions into dedicated output modules by kind.
 */
function expandDeclarationModules(declaration: DeclarationRecord): OutputModuleRecord[] {
  const modules: OutputModuleRecord[] = [
    {
      kind: declaration.kind,
      name: declaration.name,
      references: declaration.references,
      statementText: declaration.statementText,
    },
  ];

  if (declaration.interfaceText) {
    modules.push({
      kind: 'interface',
      name: replaceDeclarationPrefix(declaration.name, 'interface'),
      references: declaration.references,
      statementText: declaration.interfaceText,
    });
  }

  if (declaration.enumText) {
    modules.push({
      kind: 'enum',
      name: replaceDeclarationPrefix(declaration.name, 'enum'),
      references: declaration.references,
      statementText: declaration.enumText,
    });
  }

  return modules;
}

/**
 * Maps each emitted symbol name to its relative output module path.
 */
function buildModulePathMap(relativeFolderPath: string, modules: OutputModuleRecord[]): Map<string, string> {
  const modulePathMap = new Map<string, string>();

  for (const moduleRecord of modules) {
    modulePathMap.set(moduleRecord.name, getModuleRelativePath(relativeFolderPath, moduleRecord));
  }

  return modulePathMap;
}

/**
 * Builds the output module path for one emitted declaration.
 */
function getModuleRelativePath(relativeFolderPath: string, moduleRecord: OutputModuleRecord): string {
  const basePath = relativeFolderPath === '.' ? '' : relativeFolderPath;

  return path.join(OUTPUT_KIND_DIRECTORIES[moduleRecord.kind], basePath, `${moduleRecord.name}.ts`);
}

/**
 * Extracts declaration and member documentation from one schema file.
 */
function extractSchemaDocumentationContext(xsdFilePath: string): SchemaDocumentationContext {
  const xsdContent = fs.readFileSync(xsdFilePath, 'utf8');
  const declarationDocs = new Map<string, string>();
  const memberDocs = new Map<string, Map<string, string>>();
  const schemaBlocks: Array<{ kind: 'class' | 'typeAlias'; blocks: SchemaDeclarationBlock[] }> = [
    { kind: 'class', blocks: [...findNamedSchemaBlocks(xsdContent, 'complexType'), ...findNamedSchemaBlocks(xsdContent, 'element')] },
    { kind: 'typeAlias', blocks: findNamedSchemaBlocks(xsdContent, 'simpleType') },
  ];

  for (const { kind, blocks } of schemaBlocks) {
    collectDocumentationEntries(xsdFilePath, kind, blocks, declarationDocs, memberDocs);
  }

  return { declarationDocs, memberDocs };
}

interface SchemaDeclarationBlock {
  name: string;
  xml: string;
}

/**
 * Collects documentation entries for one schema declaration pattern.
 */
function collectDocumentationEntries(
  xsdFilePath: string,
  kind: 'class' | 'typeAlias',
  blocks: SchemaDeclarationBlock[],
  declarationDocs: Map<string, string>,
  memberDocs: Map<string, Map<string, string>>,
): void {
  for (const block of blocks) {
    const declarationName = buildHierarchicalIdentifier(xsdFilePath, block.name, kind);
    registerDeclarationDocumentation(declarationName, kind, block.xml, declarationDocs, memberDocs);
  }
}

/**
 * Finds full named XSD declaration blocks for one tag type.
 */
function findNamedSchemaBlocks(xsdContent: string, tagName: 'complexType' | 'element' | 'simpleType'): SchemaDeclarationBlock[] {
  const blocks: SchemaDeclarationBlock[] = [];
  const openingTagPattern = new RegExp(String.raw`<(?:xs:)?${tagName}\b[^>]*name="([^"]+)"[^>]*>`, 'g');
  let match: RegExpExecArray | null = openingTagPattern.exec(xsdContent);

  while (match) {
    const blockStart = match.index;
    const openingTag = match[0];
    const blockEnd = findSchemaBlockEnd(xsdContent, tagName, blockStart + openingTag.length);

    if (blockEnd !== undefined) {
      blocks.push({
        name: match[1],
        xml: xsdContent.slice(blockStart, blockEnd),
      });
    }

    match = openingTagPattern.exec(xsdContent);
  }

  return blocks;
}

/**
 * Locates the end offset for one named XSD block, accounting for nested blocks of the same tag.
 */
function findSchemaBlockEnd(xsdContent: string, tagName: 'complexType' | 'element' | 'simpleType', searchStart: number): number | undefined {
  const tokenPattern = new RegExp(String.raw`<(?:xs:)?${tagName}\b[^>]*>|</(?:xs:)?${tagName}>`, 'g');
  tokenPattern.lastIndex = searchStart;
  let depth = 1;
  let tokenMatch: RegExpExecArray | null = tokenPattern.exec(xsdContent);

  while (tokenMatch) {
    const token = tokenMatch[0];

    if (token.startsWith('</')) {
      depth -= 1;

      if (depth === 0) {
        return tokenMatch.index + token.length;
      }
    } else if (!token.endsWith('/>')) {
      depth += 1;
    }

    tokenMatch = tokenPattern.exec(xsdContent);
  }

  return undefined;
}

/**
 * Stores declaration and member documentation for one parsed schema declaration.
 */
function registerDeclarationDocumentation(
  declarationName: string,
  kind: 'class' | 'typeAlias',
  schemaBody: string,
  declarationDocs: Map<string, string>,
  memberDocs: Map<string, Map<string, string>>,
): void {
  const summary = extractDocumentationText(schemaBody);

  if (summary) {
    declarationDocs.set(declarationName, summary);

    if (kind === 'class') {
      declarationDocs.set(replaceDeclarationPrefix(declarationName, 'interface'), summary);
    }
  }

  if (kind !== 'class') {
    return;
  }

  const members = extractMemberDocumentation(schemaBody);

  if (members.size === 0) {
    return;
  }

  memberDocs.set(declarationName, members);
  memberDocs.set(replaceDeclarationPrefix(declarationName, 'interface'), members);
}

/**
 * Extracts member-level documentation from element and attribute declarations.
 */
function extractMemberDocumentation(schemaBody: string): Map<string, string> {
  const docs = new Map<string, string>();
  const memberPattern = /<(?:xs:)?(?:element|attribute)\b[^>]*name="([^"]+)"[^>]*>\s*<(?:xs:)?annotation>\s*<(?:xs:)?documentation>([\s\S]*?)<\/(?:xs:)?documentation>\s*<\/(?:xs:)?annotation>/g;
  const anyPattern = /<(?:xs:)?any\b[^>]*>\s*<(?:xs:)?annotation>\s*<(?:xs:)?documentation>([\s\S]*?)<\/(?:xs:)?documentation>\s*<\/(?:xs:)?annotation>/g;
  let match: RegExpExecArray | null = memberPattern.exec(schemaBody);

  while (match) {
    const memberName = match[1];
    const memberSummary = normalizeDocumentationText(match[2]);

    if (memberSummary) {
      docs.set(memberName, memberSummary);
    }

    match = memberPattern.exec(schemaBody);
  }

  match = anyPattern.exec(schemaBody);

  while (match) {
    const memberSummary = normalizeDocumentationText(match[1]);

    if (memberSummary) {
      docs.set('unknown', memberSummary);
    }

    match = anyPattern.exec(schemaBody);
  }

  return docs;
}

/**
 * Reads and normalizes xs:documentation blocks into a compact summary.
 */
function extractDocumentationText(xmlFragment: string): string | undefined {
  const firstMatch = /<(?:xs:)?documentation>([\s\S]*?)<\/(?:xs:)?documentation>/u.exec(xmlFragment);

  if (!firstMatch) {
    return undefined;
  }

  return normalizeDocumentationText(firstMatch[1]);
}

/**
 * Normalizes raw documentation content extracted from XSD annotations.
 */
function normalizeDocumentationText(rawText: string): string | undefined {
  const normalizedText = rawText
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return normalizedText.length > 0 ? normalizedText : undefined;
}

/**
 * Checks whether the statement is a supported exported declaration.
 */
function isSupportedExportedStatement(statement: ts.Statement): statement is ts.ClassDeclaration | ts.TypeAliasDeclaration {
  const modifiers = ts.canHaveModifiers(statement) ? ts.getModifiers(statement) ?? [] : [];
  const hasExportModifier = modifiers.some(
    (modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword,
  );
  return hasExportModifier && (ts.isClassDeclaration(statement) || ts.isTypeAliasDeclaration(statement));
}

/**
 * Gets the declared name from a supported exported statement.
 */
function getStatementName(statement: ts.ClassDeclaration | ts.TypeAliasDeclaration): string {
  if (!statement.name) {
    throw new Error('Encountered an unnamed exported declaration.');
  }

  return statement.name.text;
}

/**
 * Collects local declaration dependencies required as sibling imports.
 */
function collectReferences(statement: ts.Node, exportedNames: Set<string>, selfName: string): string[] {
  const references = new Set<string>();

  const visit = (node: ts.Node): void => {
    if (ts.isTypeReferenceNode(node)) {
      const referenceName = getEntityNameText(node.typeName);
      maybeAddReference(referenceName, exportedNames, selfName, references);
    }

    if (ts.isNewExpression(node) && ts.isIdentifier(node.expression)) {
      maybeAddReference(node.expression.text, exportedNames, selfName, references);
    }

    ts.forEachChild(node, visit);
  };

  visit(statement);

  return [...references].sort((left, right) => left.localeCompare(right));
}

/**
 * Reads the right-most identifier from an entity name.
 */
function getEntityNameText(entityName: ts.EntityName): string {
  return ts.isIdentifier(entityName) ? entityName.text : entityName.right.text;
}

/**
 * Adds a reference if it points to a sibling exported declaration.
 */
function maybeAddReference(name: string, exportedNames: Set<string>, selfName: string, references: Set<string>): void {
  if (name !== selfName && exportedNames.has(name)) {
    references.add(name);
  }
}

/**
 * Creates a companion interface from the public properties of a generated class.
 */
function createInterfaceFromClass(
  statement: ts.ClassDeclaration,
  sourceFile: ts.SourceFile,
  declarationDoc?: string,
  memberDocs: Map<string, string> = new Map<string, string>(),
  declarationDocs: Map<string, string> = new Map<string, string>(),
): string {
  const className = getStatementName(statement);
  const interfaceName = replaceDeclarationPrefix(className, 'interface');
  const seenProperties = new Set<string>();
  const propertyLines = statement.members
    .filter(ts.isPropertyDeclaration)
    .map((member) => {
      const propertyName = member.name.getText(sourceFile);

      if (seenProperties.has(propertyName)) {
        return undefined;
      }

      seenProperties.add(propertyName);
      const typeText = member.type ? member.type.getText(sourceFile) : 'unknown';
      const propertyDoc = resolvePropertyDocumentation(member, sourceFile, memberDocs, declarationDocs);

      return [
        indentJsDoc(createJsDoc(propertyDoc), '  '),
        `  ${propertyName}?: ${typeText};`,
      ].join('\n');
    })
    .filter((line): line is string => typeof line === 'string');

  return [
    createJsDoc(declarationDoc ?? `Type contract for ${interfaceName}.`),
    `export interface ${interfaceName} {`,
    indentJsDoc(createJsDoc('Runtime class discriminator.'), '  '),
    '  "@class"?: string;',
    ...propertyLines,
    '}',
  ].join('\n');
}

/**
 * Makes the generated class declarations compatible with strict mode.
 */
function createStrictSafeClassText(
  statement: ts.ClassDeclaration,
  sourceFile: ts.SourceFile,
  declarationDoc?: string,
  memberDocs: Map<string, string> = new Map<string, string>(),
  declarationDocs: Map<string, string> = new Map<string, string>(),
): string {
  const classText = statement.getText(sourceFile);

  if (!classText.includes('{')) {
    return createFallbackClassText(getStatementName(statement), declarationDoc);
  }

  return enrichClassTextWithJsDoc(
    sanitizeClassImplementation(
      deduplicateClassMembers(
      classText
      .replace(/(export\s+class\s+[A-Za-z_$][\w$]*\s*\{\n)/u, `$1    public "@class"?: string;\n\n`)
      .replace(/^(\s*public\s+)([A-Za-z_$][\w$]*)(\s*:\s*[^;]+;\s*)$/gmu, '$1$2?$3'),
      ),
    ),
    declarationDoc ?? `Runtime class for ${getStatementName(statement)}.`,
    memberDocs,
    declarationDocs,
  );
}

/**
 * Creates a minimal strict-safe class when the parser only recovered a truncated class declaration.
 */
function createFallbackClassText(className: string, declarationDoc?: string): string {
  return [
    createJsDoc(declarationDoc ?? `Runtime class for ${className}.`),
    `export class ${className} {`,
    indentJsDoc(createJsDoc('Runtime class discriminator.'), '    '),
    '    public "@class"?: string;',
    '',
    indentJsDoc(createConstructorJsDoc(className, declarationDoc), '    '),
    `    public constructor(props?: ${className}) {`,
    `        this["@class"] = ".${className}";`,
    '    }',
    '}',
  ].join('\n');
}

/**
 * Adds JSDoc blocks to generated class declarations, members and helper methods.
 */
function enrichClassTextWithJsDoc(
  classText: string,
  declarationDoc: string,
  memberDocs: Map<string, string>,
  declarationDocs: Map<string, string>,
): string {
  const lines = classText.split('\n');
  const enrichedLines: string[] = [];
  const sourceFile = ts.createSourceFile('class.ts', classText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const propertyDocumentation = buildClassPropertyDocumentationMap(sourceFile, memberDocs, declarationDocs);

  for (const line of lines) {
    if (line.startsWith('export class ')) {
      appendLineWithOptionalJsDoc(enrichedLines, line, createJsDoc(declarationDoc));
      continue;
    }

    const propertyName = getPropertyDeclarationName(line);

    if (propertyName) {
      const normalizedPropertyName = propertyName.replace(/^"|"$/g, '');
      const summary = normalizedPropertyName === '@class'
        ? 'Runtime class discriminator.'
        : propertyDocumentation.get(normalizedPropertyName) ?? createPropertyFallbackDocumentation(normalizedPropertyName);
      appendLineWithOptionalJsDoc(enrichedLines, line, indentJsDoc(createJsDoc(summary), '    '));
      continue;
    }

    const constructorMatch = /^\s*public constructor\(/u.exec(line);

    if (constructorMatch) {
      appendLineWithOptionalJsDoc(
        enrichedLines,
        line,
        indentJsDoc(createConstructorJsDoc(extractClassNameFromClassText(classText), declarationDoc), '    '),
      );
      continue;
    }

    const methodMatch = /^\s*public\s+([A-Za-z_$][\w$]*)\(/u.exec(line);

    if (methodMatch) {
      const methodName = methodMatch[1];
      const summary = memberDocs.get(methodName) ?? `Updates the ${methodName} branch for this schema choice.`;
      appendLineWithOptionalJsDoc(enrichedLines, line, indentJsDoc(createChoiceMethodJsDoc(methodName, summary), '    '));
      continue;
    }

    enrichedLines.push(line);
  }

  return enrichedLines.join('\n');
}

/**
 * Builds a property-to-documentation map for one generated class.
 */
function buildClassPropertyDocumentationMap(
  sourceFile: ts.SourceFile,
  memberDocs: Map<string, string>,
  declarationDocs: Map<string, string>,
): Map<string, string> {
  const propertyDocs = new Map<string, string>();

  for (const statement of sourceFile.statements) {
    if (!ts.isClassDeclaration(statement)) {
      continue;
    }

    for (const member of statement.members) {
      if (!ts.isPropertyDeclaration(member)) {
        continue;
      }

      const propertyName = member.name.getText(sourceFile).replace(/^"|"$/g, '');
      propertyDocs.set(propertyName, resolvePropertyDocumentation(member, sourceFile, memberDocs, declarationDocs));
    }
  }

  return propertyDocs;
}

/**
 * Resolves documentation for one generated property.
 */
function resolvePropertyDocumentation(
  member: ts.PropertyDeclaration,
  sourceFile: ts.SourceFile,
  memberDocs: Map<string, string>,
  declarationDocs: Map<string, string>,
): string {
  const propertyName = member.name.getText(sourceFile).replace(/^"|"$/g, '');
  const directDoc = memberDocs.get(propertyName);

  if (directDoc) {
    return directDoc;
  }

  const referencedDeclarationDoc = resolveReferencedDeclarationDocumentation(member.type, declarationDocs);

  if (referencedDeclarationDoc) {
    return referencedDeclarationDoc;
  }

  return createPropertyFallbackDocumentation(propertyName);
}

/**
 * Creates a readable fallback description for properties without schema documentation.
 */
function createPropertyFallbackDocumentation(propertyName: string): string {
  const normalizedPropertyName = propertyName.replace(/^"|"$/g, '').replace(/[?.]+$/g, '');

  if (normalizedPropertyName === 'unknown') {
    return 'Referenced or wildcard schema content not fully resolved by the generator.';
  }

  if (normalizedPropertyName.startsWith('$')) {
    return `Schema attribute ${humanizeIdentifier(normalizedPropertyName.slice(1)).toLowerCase()}.`;
  }

  return `Schema property ${humanizeIdentifier(normalizedPropertyName)}.`;
}

/**
 * Resolves declaration documentation from a property type reference when available.
 */
function resolveReferencedDeclarationDocumentation(
  typeNode: ts.TypeNode | undefined,
  declarationDocs: Map<string, string>,
): string | undefined {
  if (!typeNode) {
    return undefined;
  }

  if (ts.isArrayTypeNode(typeNode)) {
    return resolveReferencedDeclarationDocumentation(typeNode.elementType, declarationDocs);
  }

  if (ts.isTypeReferenceNode(typeNode)) {
    return declarationDocs.get(getEntityNameText(typeNode.typeName));
  }

  return undefined;
}

/**
 * Appends one source line and an optional leading JSDoc block.
 */
function appendLineWithOptionalJsDoc(targetLines: string[], sourceLine: string, jsDoc?: string): void {
  if (jsDoc) {
    targetLines.push(jsDoc);
  }

  targetLines.push(sourceLine);
}

/**
 * Extracts the generated class name from the full class text.
 */
function extractClassNameFromClassText(classText: string): string {
  const classMatch = /export\s+class\s+([A-Za-z_$][\w$]*)/u.exec(classText);

  if (!classMatch) {
    return 'GeneratedClass';
  }

  return classMatch[1];
}

/**
 * Builds constructor JSDoc with declaration context and parameter details.
 */
function createConstructorJsDoc(className: string, declarationDoc?: string): string {
  const summary = declarationDoc
    ? `Creates a new schema-backed ${className} instance.\nSchema context: ${declarationDoc}`
    : `Creates a new schema-backed ${className} instance.`;

  return createJsDoc(summary, ['@param props - Initial schema-backed values used to populate the instance.']);
}

/**
 * Builds JSDoc for generated choice helper methods.
 */
function createChoiceMethodJsDoc(methodName: string, summary: string): string {
  const normalizedSummary = summary.startsWith('Updates the ')
    ? `Selects the ${humanizeIdentifier(methodName).toLowerCase()} branch for this schema choice.`
    : summary;

  return createJsDoc(normalizedSummary, [`@param arg - Branch value assigned to ${methodName}.`]);
}

/**
 * Converts an identifier into a human-readable label.
 */
function humanizeIdentifier(identifier: string): string {
  return identifier
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replaceAll('_', ' ')
    .trim();
}

/**
 * Creates a documented type alias block.
 */
function createTypeAliasText(
  statement: ts.TypeAliasDeclaration,
  sourceFile: ts.SourceFile,
  declarationDoc?: string,
): string {
  return [
    createJsDoc(declarationDoc ?? `Type alias for ${statement.name.text}.`),
    statement.getText(sourceFile),
  ].join('\n');
}

/**
 * Removes duplicate property declarations and duplicate constructor assignments emitted by xsd2ts.
 */
function deduplicateClassMembers(classText: string): string {
  const lines = classText.split('\n');
  const seenProperties = new Set<string>();
  const seenAssignments = new Set<string>();
  const deduplicatedLines: string[] = [];

  for (const line of lines) {
    const propertyName = getPropertyDeclarationName(line);

    if (propertyName) {
      if (seenProperties.has(propertyName)) {
        continue;
      }

      seenProperties.add(propertyName);
      deduplicatedLines.push(line);
      continue;
    }

    const assignmentName = getAssignmentPropertyName(line);

    if (assignmentName) {
      if (seenAssignments.has(assignmentName)) {
        continue;
      }

      seenAssignments.add(assignmentName);
    }

    deduplicatedLines.push(line);
  }

  return deduplicatedLines.join('\n');
}

/**
 * Fixes recurring syntax defects emitted by xsd2ts in class bodies.
 */
function sanitizeClassImplementation(classText: string): string {
  return classText
    .replace(/public\s+([A-Za-z_$][\w$]*)\?\(/g, 'public $1(')
    .replace(/public\s+(?!constructor)([A-Za-z_$][\w$]*)\(arg:\s*[^)]+\)\s*\{/g, 'public $1(arg: unknown) {')
    .replace(/(\(this as any\)\.[A-Za-z_$][\w$]*)\?/g, '$1')
    .replace(
      /this\.(\$?[A-Za-z_$][\w$]*)\s*=\s*\(props\.\1\)\s*\?\s*new\s+([A-Za-z_$][\w$]*)\[\]\(props\.\1\):\s*undefined;/g,
      'this.$1 = props.$1?.map((item) => new $2(item));',
    );
}

/**
 * Extracts the property name from a generated public property declaration line.
 */
function getPropertyDeclarationName(line: string): string | undefined {
  const propertyPattern = /^\s*public\s+("[^"]+"|[A-Za-z_$][\w$]*)(\??):/u;
  const propertyMatch = propertyPattern.exec(line);
  return propertyMatch?.[1];
}

/**
 * Extracts the assigned property name from a constructor assignment line.
 */
function getAssignmentPropertyName(line: string): string | undefined {
  const assignmentPattern = /^\s*this(?:\["([^"]+)"\]|\.([A-Za-z_$][\w$]*))\s*=/u;
  const assignmentMatch = assignmentPattern.exec(line);

  if (!assignmentMatch) {
    return undefined;
  }

  return assignmentMatch[1] ? `"${assignmentMatch[1]}"` : assignmentMatch[2];
}

/**
 * Creates a companion enum for finite literal unions.
 */
function createEnumFromTypeAlias(statement: ts.TypeAliasDeclaration, declarationDoc?: string): string | undefined {
  if (!ts.isUnionTypeNode(statement.type)) {
    return undefined;
  }

  const members = statement.type.types
    .map((typeNode) => {
      if (!ts.isLiteralTypeNode(typeNode)) {
        return undefined;
      }

      if (ts.isStringLiteral(typeNode.literal) || ts.isNumericLiteral(typeNode.literal)) {
        return typeNode.literal.getText().replace(/^['"]|['"]$/g, '');
      }

      return undefined;
    })
    .filter((member): member is string => typeof member === 'string');

  if (members.length !== statement.type.types.length || members.length === 0 || members.length > 50) {
    return undefined;
  }

  const usedNames = new Set<string>();
  const enumName = replaceDeclarationPrefix(statement.name.text, 'enum');
  const enumLines = members.map((member, index) => {
    const baseName = sanitizeEnumMemberName(member) || `Value${index + 1}`;
    const uniqueName = getUniqueEnumMemberName(baseName, usedNames);
    return `  ${uniqueName} = ${JSON.stringify(member)},`;
  });

  return [
    createJsDoc(declarationDoc ?? `Enumerates allowed values for ${statement.name.text}.`),
    `export enum ${enumName} {`,
    ...enumLines,
    '}',
  ].join('\n');
}

/**
 * Builds a compact JSDoc block from a one-line or multi-line summary.
 */
function createJsDoc(summary: string, tags: string[] = []): string {
  const lines = summary
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return ['/**', ...lines.map((line) => ` * ${line}`), ...tags.map((line) => ` * ${line}`), ' */'].join('\n');
}

/**
 * Applies indentation to every line of a JSDoc block.
 */
function indentJsDoc(jsDoc: string, indentation: string): string {
  return jsDoc
    .split('\n')
    .map((line) => `${indentation}${line}`)
    .join('\n');
}

/**
 * Normalizes a literal value into a valid enum member name.
 */
function sanitizeEnumMemberName(value: string): string {
  const cleanedValue = toPascalCaseIdentifier(value);

  if (cleanedValue.length === 0) {
    return '';
  }

  if (/^\d/.test(cleanedValue)) {
    return `Value${cleanedValue}`;
  }

  return cleanedValue;
}

/**
 * Ensures enum member names stay unique in the generated enum.
 */
function getUniqueEnumMemberName(baseName: string, usedNames: Set<string>): string {
  if (!usedNames.has(baseName)) {
    usedNames.add(baseName);
    return baseName;
  }

  let suffix = 2;
  let candidate = `${baseName}_${suffix}`;

  while (usedNames.has(candidate)) {
    suffix += 1;
    candidate = `${baseName}_${suffix}`;
  }

  usedNames.add(candidate);
  return candidate;
}

/**
 * Renders one emitted module into its own TypeScript file.
 */
function renderModuleFile(moduleRecord: OutputModuleRecord, moduleFilePath: string, modulePathMap: Map<string, string>): string {
  const imports = moduleRecord.references
    .map((reference) => buildModuleImportLine(reference, moduleFilePath, modulePathMap))
    .filter((line): line is string => typeof line === 'string')
    .sort((left, right) => left.localeCompare(right));
  const segments = [
    ...imports,
    moduleRecord.statementText,
  ].filter((segment): segment is string => typeof segment === 'string' && segment.length > 0);

  return normalizeGenericPropertyJsDoc(`${segments.join('\n\n')}\n`);
}

/**
 * Builds an import line for one referenced symbol when its output module is known.
 */
function buildModuleImportLine(referenceName: string, moduleFilePath: string, modulePathMap: Map<string, string>): string | undefined {
  const targetRelativePath = modulePathMap.get(referenceName);

  if (!targetRelativePath) {
    return undefined;
  }

  const targetFilePath = path.join(OUTPUT_ROOT, targetRelativePath);
  const importPath = toImportSpecifier(moduleFilePath, targetFilePath);

  return `import { ${referenceName} } from '${importPath}';`;
}

/**
 * Rewrites generic property JSDoc blocks using the declared property name.
 */
function normalizeGenericPropertyJsDoc(sourceText: string): string {
  return sourceText.replace(
    /(\n\s*\/\*\*\n\s*\* )Schema property [^.]+\.(\n\s*\*\/\n\s*[^\n]*:\s*[^;]+;)/g,
    (match, prefix: string, suffix: string) => {
      const propertyMatch = /(?:public\s+)?((?:"[^"]+")|[A-Za-z_$][\w$]*)\??:\s*[^;]+;/u.exec(suffix);

      if (!propertyMatch) {
        return match;
      }

      const normalizedPropertyName = propertyMatch[1].replace(/^"|"$/g, '');
      return `${prefix}${createPropertyFallbackDocumentation(normalizedPropertyName)}${suffix}`;
    },
  );
}

/**
 * Resolves cross-file references across the generated output tree after all modules are written.
 */
function postProcessGeneratedModules(): void {
  const moduleFiles = collectGeneratedModuleFiles(OUTPUT_ROOT);

  if (moduleFiles.length === 0) {
    return;
  }

  const exportMap = buildDirectoryExportMap(moduleFiles);

  for (const moduleFilePath of moduleFiles) {
    const sourceText = fs.readFileSync(moduleFilePath, 'utf8');
    const nextSourceText = normalizeGenericPropertyJsDoc(rewriteCrossFileReferences(moduleFilePath, sourceText, exportMap));

    if (nextSourceText !== sourceText) {
      fs.writeFileSync(moduleFilePath, nextSourceText, 'utf8');
    }
  }
}

/**
 * Recursively collects generated module files excluding barrel indexes.
 */
function collectGeneratedModuleFiles(directoryPath: string): string[] {
  const entries = fs.readdirSync(directoryPath, { withFileTypes: true });
  const moduleFiles: string[] = [];

  for (const entry of entries) {
    const entryPath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      moduleFiles.push(...collectGeneratedModuleFiles(entryPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.ts') && entry.name !== 'index.ts') {
      moduleFiles.push(entryPath);
    }
  }

  return moduleFiles;
}

/**
 * Collects exported symbols for all generated modules in one directory.
 */
function buildDirectoryExportMap(moduleFilePaths: string[]): Map<string, string[]> {
  const exportMap = new Map<string, string[]>();

  for (const moduleFilePath of moduleFilePaths) {
    const sourceText = fs.readFileSync(moduleFilePath, 'utf8');
    const sourceFile = ts.createSourceFile(moduleFilePath, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
    const exportedNames = sourceFile.statements
      .filter((statement) => ts.isClassDeclaration(statement) || ts.isTypeAliasDeclaration(statement) || ts.isInterfaceDeclaration(statement) || ts.isEnumDeclaration(statement))
      .filter((statement) => ts.canHaveModifiers(statement) && (ts.getModifiers(statement) ?? []).some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword))
      .map((statement) => {
        if (!statement.name) {
          return undefined;
        }

        return statement.name.text;
      })
      .filter((name): name is string => typeof name === 'string');

    exportMap.set(moduleFilePath, exportedNames);
  }

  return exportMap;
}

/**
 * Rewrites unresolved raw references to the unique hierarchical export available in the same folder.
 */
function rewriteCrossFileReferences(moduleFilePath: string, sourceText: string, exportMap: Map<string, string[]>): string {
  const sourceFile = ts.createSourceFile(moduleFilePath, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const localExports = new Set(exportMap.get(moduleFilePath) ?? []);
  const importedNames = collectImportedNames(sourceFile);
  const referencedNames = collectReferencedNames(sourceFile);

  let nextSourceText = sourceText;
  const importLines = new Set<string>();

  for (const referenceName of referencedNames) {
    if (localExports.has(referenceName) || importedNames.has(referenceName)) {
      continue;
    }

    const primitiveTypeName = XML_SCHEMA_TYPE_MAP[referenceName];

    if (primitiveTypeName) {
      nextSourceText = replaceIdentifier(nextSourceText, referenceName, primitiveTypeName);
      continue;
    }

    const candidate = resolveExportCandidate(referenceName, moduleFilePath, exportMap);

    if (!candidate) {
      if (/^[A-Z]/.test(referenceName)) {
        nextSourceText = replaceIdentifier(nextSourceText, referenceName, 'unknown');
      }

      continue;
    }

    nextSourceText = replaceIdentifier(nextSourceText, referenceName, candidate.exportName);
    importLines.add(`import { ${candidate.exportName} } from './${candidate.importPath}';`);
  }

  if (importLines.size === 0) {
    return nextSourceText;
  }

  return mergeImportLines(nextSourceText, importLines);
}

const XML_SCHEMA_TYPE_MAP: Record<string, string> = {
  ID: 'string',
  AnyURI: 'string',
  anyURI: 'string',
  base64Binary: 'string',
  boolean: 'boolean',
  date: 'string',
  dateTime: 'string',
  decimal: 'string',
  integer: 'number',
  string: 'string',
};

/**
 * Collects all names imported into a generated source file.
 */
function collectImportedNames(sourceFile: ts.SourceFile): Set<string> {
  const importedNames = new Set<string>();

  for (const statement of sourceFile.statements) {
    if (!ts.isImportDeclaration(statement) || !statement.importClause) {
      continue;
    }

    if (statement.importClause.name) {
      importedNames.add(statement.importClause.name.text);
    }

    const namedBindings = statement.importClause.namedBindings;

    if (namedBindings && ts.isNamedImports(namedBindings)) {
      for (const element of namedBindings.elements) {
        importedNames.add(element.name.text);
      }
    }
  }

  return importedNames;
}

/**
 * Collects referenced type and constructor names from a generated source file.
 */
function collectReferencedNames(sourceFile: ts.SourceFile): Set<string> {
  const referencedNames = new Set<string>();

  const visit = (node: ts.Node): void => {
    if (ts.isTypeReferenceNode(node)) {
      referencedNames.add(getEntityNameText(node.typeName));
    }

    if (ts.isNewExpression(node) && ts.isIdentifier(node.expression)) {
      referencedNames.add(node.expression.text);
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);

  return referencedNames;
}

/**
 * Merges newly discovered import lines into the top import block of a source file.
 */
function mergeImportLines(sourceText: string, importLines: Set<string>): string {
  const currentLines = sourceText.split('\n');
  const bodyLines = currentLines.filter((line) => !importLines.has(line));
  const existingImportLines = bodyLines.filter((line) => line.startsWith('import '));
  const nonImportLines = bodyLines.filter((line) => !line.startsWith('import '));
  const mergedImportLines = [...new Set([...existingImportLines, ...importLines])].sort((left, right) => left.localeCompare(right));

  return `${[...mergedImportLines, ...nonImportLines].join('\n')}\n`;
}

/**
 * Resolves a raw symbol name to one unique exported symbol in the same generated folder.
 */
function resolveExportCandidate(referenceName: string, moduleFilePath: string, exportMap: Map<string, string[]>): { exportName: string; importPath: string } | undefined {
  const candidates: Array<{ exportName: string; filePath: string; score: number }> = [];
  const moduleBaseName = path.basename(moduleFilePath, '.ts');

  for (const [candidateFilePath, exportedNames] of exportMap.entries()) {
    if (candidateFilePath === moduleFilePath) {
      continue;
    }

    for (const exportName of exportedNames) {
      if (exportName === referenceName || exportName.endsWith(`_${referenceName}`)) {
        candidates.push({
          exportName,
          filePath: candidateFilePath,
          score: scoreExportCandidate(moduleBaseName, path.basename(candidateFilePath, '.ts'), referenceName),
        });
      }
    }
  }

  if (candidates.length === 0) {
    return undefined;
  }

  candidates.sort((left, right) => right.score - left.score || left.exportName.localeCompare(right.exportName));

  if (candidates.length > 1 && candidates[0].score === candidates[1].score) {
    return undefined;
  }

  return {
    exportName: candidates[0].exportName,
      importPath: toImportSpecifier(moduleFilePath, candidates[0].filePath),
  };
}

  /**
   * Converts two module file paths into a relative TypeScript import specifier.
   */
  function toImportSpecifier(fromFilePath: string, toFilePath: string): string {
    const relativeImportPath = path.relative(path.dirname(fromFilePath), toFilePath).replaceAll('\\', '/').replace(/\.ts$/i, '');

    return relativeImportPath.startsWith('.') ? relativeImportPath : `./${relativeImportPath}`;
  }

/**
 * Scores candidate exports by how much hierarchical prefix they share with the current module.
 */
function scoreExportCandidate(moduleBaseName: string, candidateBaseName: string, referenceName: string): number {
  const moduleParts = moduleBaseName.split('_');
  const candidateParts = candidateBaseName.split('_');

  let sharedPrefixLength = 0;

  for (let index = 0; index < Math.min(moduleParts.length, candidateParts.length); index += 1) {
    if (moduleParts[index] !== candidateParts[index]) {
      break;
    }

    sharedPrefixLength += 1;
  }

  const exactSuffixBonus = candidateBaseName.endsWith(`_${referenceName}`) ? 1 : 0;

  return sharedPrefixLength * 10 + exactSuffixBonus;
}

/**
 * Writes index barrels recursively for the generated hierarchy.
 */
function writeIndexFiles(directoryPath: string): void {
  const entries = fs.readdirSync(directoryPath, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      writeIndexFiles(path.join(directoryPath, entry.name));
    }
  }

  const exportLines = entries
    .filter((entry) => entry.name !== 'index.ts')
    .map((entry) => entry.name.replace(/\.ts$/i, ''))
    .sort((left, right) => left.localeCompare(right))
    .map((name) => `export * from './${name}';`);

  if (exportLines.length > 0) {
    fs.writeFileSync(path.join(directoryPath, 'index.ts'), `${exportLines.join('\n')}\n`, 'utf8');
  }
}

/**
 * Writes a compact manifest with retries and collisions.
 */
function writeManifest(resultsByFolder: Map<string, FolderResult>): void {
  const manifest = [...resultsByFolder.entries()].map(([folderPath, result]) => ({
    collisions: result.collisions,
    files: result.files,
    folderPath,
    retriesWithSanitizedPatterns: result.retriesWithSanitizedPatterns,
  }));

  fs.writeFileSync(path.join(OUTPUT_ROOT, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');
}

/**
 * Creates a directory path when it does not exist yet.
 */
function ensureDirectory(directoryPath: string): void {
  fs.mkdirSync(directoryPath, { recursive: true });
}

main();