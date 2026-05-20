export interface BuildAuthorizeNFeFixtureOptions {
  readonly cUF?: string;
  readonly documentId?: string;
  readonly environment?: 'homologation' | 'production';
}

export function buildAuthorizeNFeSingleInput<
  TEnvironment extends 'homologation' | 'production' = 'production',
>(
  options: BuildAuthorizeNFeFixtureOptions & {
    readonly environment?: TEnvironment;
  } = {},
): {
  readonly environment: TEnvironment;
  readonly documents: {
    readonly kind: 'single-document';
    readonly payload: {
      readonly documentId: string;
      readonly environment: TEnvironment;
      readonly payload: {
        readonly cUF: string;
      };
      readonly version: '4.00';
    };
  };
} {
  const environment = (options.environment ?? 'production') as TEnvironment;

  return {
    documents: {
      kind: 'single-document',
      payload: {
        documentId:
          options.documentId ?? 'NFE-CONTINGENCY-BOUNDARY-000000000000001',
        environment,
        payload: {
          cUF: options.cUF ?? '33',
        },
        version: '4.00',
      },
    },
    environment,
  };
}
