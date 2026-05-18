import { resolveNFeServiceEndpoint } from '../../src/index';
import { ResolveNFeServiceEndpointError } from '../../src/canonical/transport/errors';

describe('resolveNFeServiceEndpoint errors', () => {
  it('fails with explicit unsupported-combination diagnostics before any transport attempt', () => {
    expect(() =>
      resolveNFeServiceEndpoint({
        environment: 'production',
        service: 'nfe-status-service',
      }),
    ).toThrow(ResolveNFeServiceEndpointError);
    expect(() =>
      resolveNFeServiceEndpoint({
        environment: 'production',
        service: 'nfe-status-service',
      }),
    ).toThrow(
      'Unsupported transport combination: environment "production", service "nfe-status-service". Supported environment: "homologation". Supported services: "nfe-status-service", "nfe-authorization", "nfe-inutilization", "nfe-cancellation", "nfe-correction-letter", "nfe-document-situation", "nfe-recipient-distribution", "nfe-recipient-manifestation".',
    );
  });
});
