import { resolveNFeServiceEndpoint } from '../../src/index';
import { ResolveNFeServiceEndpointError } from '../../src/canonical/transport/errors';

describe('resolveNFeServiceEndpoint errors', () => {
  it('fails with explicit unsupported-combination diagnostics before any transport attempt', () => {
    const resolveUnsupportedCombination = (): ReturnType<
      typeof resolveNFeServiceEndpoint
    > =>
      resolveNFeServiceEndpoint({
        environment: 'staging',
        service: 'nfe-status-service',
      });

    expect(resolveUnsupportedCombination).toThrow(
      ResolveNFeServiceEndpointError,
    );

    try {
      resolveUnsupportedCombination();
    } catch (error) {
      expect(error).toBeInstanceOf(ResolveNFeServiceEndpointError);
      expect((error as Error).message).toContain(
        'Unsupported transport combination: environment "staging", service "nfe-status-service".',
      );
      expect((error as Error).message).toContain(
        'Supported environment: "homologation, production".',
      );
      expect((error as Error).message).toContain('"nfce-authorization-sp"');
      expect((error as Error).message).toContain('"nfce-authorization-pr"');
      return;
    }

    throw new Error('Expected resolveNFeServiceEndpoint to throw');
  });

  it('fails closed when the requested production authorizer has no catalog route', () => {
    const resolveWithAuthorizer = (
      input: Parameters<typeof resolveNFeServiceEndpoint>[0] & {
        authorizer: string;
      },
    ) => resolveNFeServiceEndpoint(input);

    expect(() =>
      resolveWithAuthorizer({
        authorizer: 'SVCRS',
        environment: 'production',
        service: 'nfe-authorization',
      }),
    ).toThrow(ResolveNFeServiceEndpointError);
  });
});
