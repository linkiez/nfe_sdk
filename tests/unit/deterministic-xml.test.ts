import {
  createEnviNFe,
  createNFe,
  serializeEnviNFeXml,
  serializeNFeXml,
} from '../../src/index';
import { loadCanonicalJsonFixture } from '../fixtures/canonical-nfe/load-canonical-fixture';
import { expectXmlToBeEquivalent } from '../config/xml-equivalence';

describe('deterministic xml serialization', () => {
  it('keeps NFe output stable for equivalent inputs', () => {
    const input = loadCanonicalJsonFixture<{
      documentId: string;
      environment: string;
      version: string;
    }>('nfe-minimal-input.json');

    const firstXml = serializeNFeXml(createNFe(input));
    const secondXml = serializeNFeXml(createNFe(input));

    expectXmlToBeEquivalent(firstXml, secondXml);
  });

  it('keeps enviNFe output stable for equivalent inputs', () => {
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

    const firstXml = serializeEnviNFeXml(createEnviNFe(input));
    const secondXml = serializeEnviNFeXml(createEnviNFe(input));

    expectXmlToBeEquivalent(firstXml, secondXml);
  });
});
