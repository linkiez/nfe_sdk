import * as path from 'node:path';
import * as ts from 'typescript';

/**
 * Replaces repeated generated property copies with the shared schema initializer.
 *
 * @param moduleFilePath - Absolute path of the generated class module.
 * @param sourceText - Generated TypeScript module contents.
 * @param helperFilePath - Absolute path of the shared runtime helper module.
 * @returns The module with direct constructor copies consolidated.
 */
export function consolidateGeneratedConstructorAssignments(
  moduleFilePath: string,
  sourceText: string,
  helperFilePath: string,
): string {
  const sourceFile = ts.createSourceFile(
    moduleFilePath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const edits: Array<{ start: number; end: number; text: string }> = [];

  for (const statement of sourceFile.statements) {
    if (!ts.isClassDeclaration(statement)) {
      continue;
    }

    const constructor = statement.members.find(ts.isConstructorDeclaration);

    if (!constructor?.body) {
      continue;
    }

    for (const constructorStatement of constructor.body.statements) {
      if (
        !ts.isIfStatement(constructorStatement) ||
        !isPropsCheck(constructorStatement.expression) ||
        !ts.isBlock(constructorStatement.thenStatement)
      ) {
        continue;
      }

      const statements = constructorStatement.thenStatement.statements;

      for (let index = 0; index < statements.length; ) {
        const firstCopy = getDirectPropertyCopy(statements[index]);

        if (!firstCopy) {
          index += 1;
          continue;
        }

        const copies = [firstCopy];
        let lastCopy = statements[index];
        index += 1;

        while (index < statements.length) {
          const nextCopy = getDirectPropertyCopy(statements[index]);

          if (
            !nextCopy ||
            sourceText
              .slice(lastCopy.end, statements[index].getStart(sourceFile))
              .trim().length > 0
          ) {
            break;
          }

          copies.push(nextCopy);
          lastCopy = statements[index];
          index += 1;
        }

        const firstCopyStatement = statements[index - copies.length];
        const firstLine = getStatementLine(sourceText, firstCopyStatement);
        const lastLine = getStatementLine(sourceText, lastCopy);
        const propertyNames = copies
          .map(({ propertyName }) => JSON.stringify(propertyName))
          .join(', ');
        const indentation = firstLine.indentation.replaceAll('\t', '    ');
        const call = `${indentation}assignSchemaProperties(this, props, [${propertyNames}]);`;

        if (
          firstLine.indentation.trim().length > 0 ||
          sourceText.slice(firstCopyStatement.end, firstLine.lineEnd).trim()
            .length > 0 ||
          sourceText.slice(lastCopy.end, lastLine.lineEnd).trim().length > 0
        ) {
          edits.push({
            start: firstCopyStatement.getStart(sourceFile),
            end: lastCopy.end,
            text: call.trimStart(),
          });
          continue;
        }

        edits.push({
          start: firstLine.lineStart,
          end: lastLine.lineEnd,
          text: call,
        });
      }
    }
  }

  if (edits.length === 0) {
    return sourceText;
  }

  let transformedSource = edits
    .sort((left, right) => right.start - left.start)
    .reduce(
      (text, edit) =>
        `${text.slice(0, edit.start)}${edit.text}${text.slice(edit.end)}`,
      sourceText,
    );

  const helperSpecifier = toImportSpecifier(moduleFilePath, helperFilePath);
  transformedSource = `import { assignSchemaProperties } from '${helperSpecifier}';\n${transformedSource}`;

  return transformedSource;
}

function isPropsCheck(expression: ts.Expression): boolean {
  return ts.isIdentifier(expression) && expression.text === 'props';
}

function getDirectPropertyCopy(
  statement: ts.Statement,
): { propertyName: string } | undefined {
  if (
    !ts.isExpressionStatement(statement) ||
    !ts.isBinaryExpression(statement.expression)
  ) {
    return undefined;
  }

  const assignment = statement.expression;

  if (assignment.operatorToken.kind !== ts.SyntaxKind.EqualsToken) {
    return undefined;
  }

  const { left, right } = assignment;
  const leftName = getMemberName(left, ts.SyntaxKind.ThisKeyword);
  const rightName = getMemberName(right, ts.SyntaxKind.Identifier, 'props');

  return leftName && leftName === rightName
    ? { propertyName: leftName }
    : undefined;
}

function getMemberName(
  expression: ts.Expression,
  ownerKind: ts.SyntaxKind,
  ownerName?: string,
): string | undefined {
  if (ts.isPropertyAccessExpression(expression)) {
    if (expression.expression.kind !== ownerKind) {
      return undefined;
    }

    if (
      ownerName &&
      (!ts.isIdentifier(expression.expression) ||
        expression.expression.text !== ownerName)
    ) {
      return undefined;
    }

    return expression.name.text;
  }

  if (
    ts.isElementAccessExpression(expression) &&
    expression.argumentExpression &&
    ts.isStringLiteral(expression.argumentExpression)
  ) {
    const owner = expression.expression;

    if (
      owner.kind !== ownerKind ||
      (ownerName && (!ts.isIdentifier(owner) || owner.text !== ownerName))
    ) {
      return undefined;
    }

    return expression.argumentExpression.text;
  }

  return undefined;
}

function getStatementLine(
  sourceText: string,
  statement: ts.Statement,
): {
  lineStart: number;
  lineEnd: number;
  lineEndWithBreak: number;
  indentation: string;
} {
  const lineStart = sourceText.lastIndexOf('\n', statement.getStart() - 1) + 1;
  const nextLineBreak = sourceText.indexOf('\n', statement.end);
  const lineEnd = nextLineBreak === -1 ? sourceText.length : nextLineBreak;

  return {
    lineStart,
    lineEnd,
    lineEndWithBreak: nextLineBreak === -1 ? lineEnd : nextLineBreak + 1,
    indentation: sourceText.slice(lineStart, statement.getStart()),
  };
}

function toImportSpecifier(fromFilePath: string, toFilePath: string): string {
  const relativeImportPath = path
    .relative(path.dirname(fromFilePath), toFilePath)
    .replaceAll('\\', '/')
    .replace(/\.ts$/iu, '');

  return relativeImportPath.startsWith('.')
    ? relativeImportPath
    : `./${relativeImportPath}`;
}
