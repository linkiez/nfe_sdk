import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('package contract documentation', () => {
  it('documents the same root facade surface that the package contract probes expect', () => {
    const readme = readFileSync(resolve(process.cwd(), 'README.md'), 'utf8');
    const rootImportExpression = /import\s*\{([\s\S]*?)\}\s*from 'nfe-sdk';/;
    const rootImportMatch = rootImportExpression.exec(readme);

    expect(rootImportMatch).not.toBeNull();

    const documentedExports = rootImportMatch?.[1]
      .split(',')
      .map((entry) => entry.trim())
      .filter((entry) => entry.length > 0)
      .sort((left, right) => left.localeCompare(right));

    expect(documentedExports).toEqual([
      'authorizeNFe',
      'cancelNFe',
      'createEnviNFe',
      'createNFe',
      'createSigningContext',
      'executeNFeSoapService',
      'publicPackageContract',
      'queryNFeDocumentSituation',
      'queryNFeServiceStatus',
      'resolveNFeServiceEndpoint',
      'serializeEnviNFeXml',
      'serializeNFeXml',
      'signNFeXml',
      'submitNFeCorrectionLetter',
      'submitNFeInutilization',
    ]);
    expect(readme).toContain('`authorizeNFe`');
    expect(readme).toContain('`cancelNFe`');
    expect(readme).toContain('`publicPackageContract`');
    expect(readme).toContain('`createNFe`');
    expect(readme).toContain('`createEnviNFe`');
    expect(readme).toContain('`createSigningContext`');
    expect(readme).toContain('`executeNFeSoapService`');
    expect(readme).toContain('`queryNFeDocumentSituation`');
    expect(readme).toContain('`queryNFeServiceStatus`');
    expect(readme).toContain('`serializeNFeXml`');
    expect(readme).toContain('`serializeEnviNFeXml`');
    expect(readme).toContain('`resolveNFeServiceEndpoint`');
    expect(readme).toContain('`signNFeXml`');
    expect(readme).toContain('`submitNFeCorrectionLetter`');
    expect(readme).toContain('`submitNFeInutilization`');
    expect(readme).toContain('`manifest.json` permanece interno');
    expect(readme).toContain(
      '`enviNFe` permanece como envelope de transporte nao assinado',
    );
    expect(readme).not.toContain('export * from');
  });
});
