import {
  createRecipientManifestationPayloadXml,
  getRecipientManifestationEventCode,
  validateRecipientManifestationRequest,
} from '../../src/canonical/recipient/recipient-manifestation-validation';

describe('recipient manifestation validation', () => {
  it('requires justification only for operacao-nao-realizada', () => {
    expect(
      validateRecipientManifestationRequest({
        accessKey: '35190500000000000000550010000000011000000010',
        actor: {
          documentNumber: '12345678909',
          documentType: 'cpf',
        },
        environment: 'homologation',
        eventType: 'operacao-nao-realizada',
        justification: 'curta',
        signingContext: {
          certificateIdentity: 'fixture',
          sourceMetadata: { type: 'in-memory-content' },
          supportedAlgorithms: [
            'http://www.w3.org/2001/04/xmldsig-more#rsa-sha256',
          ],
        },
      }),
    ).toContain('requires a justification');

    expect(
      validateRecipientManifestationRequest({
        accessKey: '35190500000000000000550010000000011000000010',
        actor: {
          documentNumber: '12345678909',
          documentType: 'cpf',
        },
        environment: 'homologation',
        eventType: 'ciencia-da-operacao',
        justification: 'Justificativa indevida para o evento',
        signingContext: {
          certificateIdentity: 'fixture',
          sourceMetadata: { type: 'in-memory-content' },
          supportedAlgorithms: [
            'http://www.w3.org/2001/04/xmldsig-more#rsa-sha256',
          ],
        },
      }),
    ).toContain('accepts justification only');
  });

  it('creates event payloads with the expected manifestation code', () => {
    expect(getRecipientManifestationEventCode('confirmacao-da-operacao')).toBe(
      '210200',
    );

    const payloadXml = createRecipientManifestationPayloadXml({
      accessKey: '35190500000000000000550010000000011000000010',
      actor: {
        documentNumber: '12345678909',
        documentType: 'cpf',
      },
      environment: 'homologation',
      eventType: 'confirmacao-da-operacao',
      signingContext: {
        certificateIdentity: 'fixture',
        sourceMetadata: { type: 'in-memory-content' },
        supportedAlgorithms: [
          'http://www.w3.org/2001/04/xmldsig-more#rsa-sha256',
        ],
      },
    });

    expect(payloadXml).toContain('<tpEvento>210200</tpEvento>');
    expect(payloadXml).toContain('<CPF>12345678909</CPF>');
  });
});
