import {
  createEnviNFe,
  createNFe,
  serializeEnviNFeXml,
  serializeNFeXml,
} from '../../src/index';
import {
  loadCanonicalJsonFixture,
  loadCanonicalTextFixture,
} from '../fixtures/canonical-nfe/load-canonical-fixture';
import { expectXmlToBeEquivalent } from '../config/xml-equivalence';

describe('canonical nfe serialization', () => {
  it('serializes a canonical NFe into deterministic XML', () => {
    const input = loadCanonicalJsonFixture<{
      documentId: string;
      environment: string;
      version: string;
    }>('nfe-minimal-input.json');
    const expectedXml = loadCanonicalTextFixture('nfe-minimal.xml');
    const document = createNFe(input);

    expectXmlToBeEquivalent(serializeNFeXml(document), expectedXml);
  });

  it('serializes a canonical enviNFe into deterministic XML', () => {
    const input = loadCanonicalJsonFixture<{
      batchId: string;
      documents: Array<{
        documentId: string;
        environment: string;
        version: string;
      }>;
      environment: string;
      version: string;
    }>('envi-nfe-minimal-input.json');
    const expectedXml = loadCanonicalTextFixture('envi-nfe-minimal.xml');
    const batch = createEnviNFe(input);

    expectXmlToBeEquivalent(serializeEnviNFeXml(batch), expectedXml);
  });
});
