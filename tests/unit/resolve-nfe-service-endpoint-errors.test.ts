import { resolveNFeServiceEndpoint } from '../../src/index';
import { ResolveNFeServiceEndpointError } from '../../src/canonical/transport/errors';

describe('resolveNFeServiceEndpoint errors', () => {
  it('fails with explicit unsupported-combination diagnostics before any transport attempt', () => {
    expect(() =>
      resolveNFeServiceEndpoint({
        environment: 'staging',
        service: 'nfe-status-service',
      }),
    ).toThrow(ResolveNFeServiceEndpointError);
    expect(() =>
      resolveNFeServiceEndpoint({
        environment: 'staging',
        service: 'nfe-status-service',
      }),
    ).toThrow(
      'Unsupported transport combination: environment "staging", service "nfe-status-service". Supported environment: "homologation, production". Supported services: "nfe-status-service", "nfe-authorization", "nfe-authorization-batch", "nfce-authorization-sp", "nfe-inutilization", "nfe-cancellation", "nfe-correction-letter", "nfe-generic-event", "nfe-document-situation", "nfe-recipient-distribution", "nfe-recipient-manifestation", "nfe-contributor-registration".',
    );
  });
});
