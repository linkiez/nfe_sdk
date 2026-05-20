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
      'authorizeNFCe',
      'authorizeNFe',
      'cancelNFe',
      'changeManifestRecipientOperation',
      'computeHashCSRT',
      'computeNFeAccessKey',
      'createEnviNFe',
      'createNFe',
      'createSigningContext',
      'distributeRecipientDFe',
      'executeNFeSoapService',
      'manifestRecipientOperation',
      'prepareNFCeSigningPrerequisites',
      'publicPackageContract',
      'queryContributorRegistration',
      'queryNFeByAccessKey',
      'queryNFeByNSU',
      'queryNFeDocumentSituation',
      'queryNFeServiceStatus',
      'resolveNFeServiceEndpoint',
      'resolveUFAutorizador',
      'retrieveNFeAuthorizationBatch',
      'serializeEnviNFeXml',
      'serializeNFeXml',
      'signEventXml',
      'signNFeXml',
      'submitEPECEvent',
      'submitGenericEvents',
      'submitICMSDeferralEvent',
      'submitNFeCorrectionLetter',
      'submitNFeInutilization',
      'validateNFeXsd',
    ]);
    expect(readme).toContain('`authorizeNFe`');
    expect(readme).toContain('`authorizeNFCe`');
    expect(readme).toContain('`cancelNFe`');
    expect(readme).toContain('`publicPackageContract`');
    expect(readme).toContain('`createNFe`');
    expect(readme).toContain('`createEnviNFe`');
    expect(readme).toContain('`createSigningContext`');
    expect(readme).toContain('`computeNFeAccessKey`');
    expect(readme).toContain('`computeHashCSRT`');
    expect(readme).toContain('`distributeRecipientDFe`');
    expect(readme).toContain('`executeNFeSoapService`');
    expect(readme).toContain('`manifestRecipientOperation`');
    expect(readme).toContain('`prepareNFCeSigningPrerequisites`');
    expect(readme).toContain('`queryNFeDocumentSituation`');
    expect(readme).toContain('`queryNFeServiceStatus`');
    expect(readme).toContain('`resolveUFAutorizador`');
    expect(readme).toContain('`retrieveNFeAuthorizationBatch`');
    expect(readme).toContain('`serializeNFeXml`');
    expect(readme).toContain('`serializeEnviNFeXml`');
    expect(readme).toContain('`resolveNFeServiceEndpoint`');
    expect(readme).toContain('`signEventXml`');
    expect(readme).toContain('`signNFeXml`');
    expect(readme).toContain('`submitEPECEvent`');
    expect(readme).toContain('`submitGenericEvents`');
    expect(readme).toContain('`submitNFeCorrectionLetter`');
    expect(readme).toContain('`submitNFeInutilization`');
    expect(readme).toContain('`validateNFeXsd`');
    expect(readme).toContain('`submitICMSDeferralEvent`');
    expect(readme).toContain('`unsupported-state`');
    expect(readme).toContain('`unsupported-scope`');
    expect(readme).toContain('`requestedCapabilities`');
    expect(readme).toContain('SP + PR');
    expect(readme).toContain('`manifest.json` permanece interno');
    expect(readme).toContain(
      '`enviNFe` permanece como envelope de transporte nao assinado',
    );
    expect(readme).not.toContain('export * from');
  });
});
