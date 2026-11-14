import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('package contract documentation', () => {
  it('documents the same root facade surface that the package contract probes expect', () => {
    const readme = readFileSync(resolve(process.cwd(), 'README.md'), 'utf8');
    const rootImportExpression =
      /import\s*\{([\s\S]*?)\}\s*from '@linkiez\/nfe-sdk';/;
    const rootImportMatch = rootImportExpression.exec(readme);

    expect(rootImportMatch).not.toBeNull();

    const documentedExports = rootImportMatch?.[1]
      .split(',')
      .map((entry) => entry.trim())
      .filter((entry) => entry.length > 0)
      .sort((left, right) => left.localeCompare(right));

    expect(documentedExports).toEqual([
      'assertRuntimeDependencies',
      'authorizeNFCe',
      'authorizeNFe',
      'buildNFCeDocument',
      'BuildNFCeDocumentError',
      'buildNFeDocument',
      'BuildNFeDocumentError',
      'cancelNFe',
      'changeManifestRecipientOperation',
      'checkRuntimeDependencies',
      'computeHashCSRT',
      'computeNFeAccessKey',
      'createEnviNFe',
      'createMutualTlsRequestExecutor',
      'createNFe',
      'createSigningContext',
      'distributeMDFe',
      'distributeRecipientDFe',
      'executeNFeSoapService',
      'generateNFCeSPQRCode',
      'getNFCeAcceptedFiscalCodes',
      'isNFCeResendWindowOpen',
      'manifestRecipientOperation',
      'MDFeDamdfeUsageError',
      'MDFeParseError',
      'MDFeTransportError',
      'parseMDFeXml',
      'prepareNFCeSigningPrerequisites',
      'prepareNFCeSPOffline',
      'publicPackageContract',
      'queryContributorRegistration',
      'queryMDFeByAccessKey',
      'queryMDFeNotClosed',
      'queryMDFeServiceStatus',
      'queryNFeByAccessKey',
      'queryNFeByNSU',
      'queryNFeDocumentSituation',
      'queryNFeServiceStatus',
      'reconcileNFCeSPOffline',
      'reconcileNFeReceipt',
      'remountNFCeDocument',
      'renderDAMDFE',
      'renderNFCeSPDANFE',
      'renderNFeDANFE',
      'resolveNFeServiceEndpoint',
      'resolveUFAutorizador',
      'retrieveNFeAuthorizationBatch',
      'retrieveRecipientDocument',
      'RuntimeDependencyError',
      'serializeEnviNFeXml',
      'serializeNFeXml',
      'signEventXml',
      'signNFeXml',
      'submitEPECEvent',
      'submitGenericEvents',
      'submitICMSDeferralEvent',
      'submitNFeCorrectionLetter',
      'submitNFeInutilization',
      'validateMDFeXml',
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
    expect(readme).toContain('`generateNFCeSPQRCode`');
    expect(readme).toContain('`renderNFCeSPDANFE`');
    expect(readme).toContain('`prepareNFCeSPOffline`');
    expect(readme).toContain('`reconcileNFCeSPOffline`');
    expect(readme).toContain('`manifestRecipientOperation`');
    expect(readme).toContain('`retrieveRecipientDocument`');
    expect(readme).toContain('`prepareNFCeSigningPrerequisites`');
    expect(readme).toContain('`distributeMDFe`');
    expect(readme).toContain('`renderDAMDFE`');
    expect(readme).toContain('`queryNFeDocumentSituation`');
    expect(readme).toContain('`reconcileNFeReceipt`');
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
    expect(readme).toContain('`contingency-boundary`');
    expect(readme).toContain('`SVC-AN`');
    expect(readme).toContain('`SVC-RS`');
    expect(readme).toContain('`requestedCapabilities`');
    expect(readme).toContain('`consNSU`');
    expect(readme).toContain('`consChNFe`');
    expect(readme).toContain('SP + PR');
    expect(readme).toContain('`SP`');
    expect(readme).toContain('`PR`');
    expect(readme).toContain('`homologation`');
    expect(readme).toContain('`production`');
    expect(readme).toContain('`RFL-006`');
    expect(readme).toContain('`RTM-007`');
    expect(readme).toContain('`RTM-011`');
    expect(readme).toContain('`RTM-012`');
    expect(readme).toContain('`PB`');
    expect(readme).toContain('`GO`');
    expect(readme).toContain('`SC`');
    expect(readme).toContain('`CE`');
    expect(readme).toContain('`MS`');
    expect(readme).toContain('`manifest.json` permanece interno');
    expect(readme).toContain(
      '`enviNFe` permanece como envelope de transporte nao assinado',
    );
    expect(readme).not.toContain('export * from');
  });
});
