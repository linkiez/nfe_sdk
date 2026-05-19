# Quickstart: NFC-e National Core

## 1. Confirm the active baseline before implementing the slice

Antes de codificar, confirme o contrato root atual, a spec clarificada e o plano desta feature:

```bash
sed -n '1,260p' package.json
sed -n '1,260p' src/index.ts
sed -n '1,260p' src/public-contract.ts
sed -n '1,260p' specs/010-nfce-national-core/spec.md
sed -n '1,260p' specs/010-nfce-national-core/plan.md
sed -n '1,260p' specs/010-nfce-national-core/research.md
```

O objetivo desta fase e acrescentar um primeiro fluxo operacional de NFC-e em homologacao, ancorado em um nucleo nacional compartilhado e em um unico piloto estadual, sem abrir QR Code, DANFE NFC-e ou CSC.

## 2. Keep the new public facade above a dedicated manual NFC-e layer

Implemente o slice como orquestracao sobre as camadas manuais ja existentes:

- use `src/canonical/facade/` para a nova operacao publica root
- concentre a logica nova em `src/canonical/nfce/`
- reutilize serializacao, assinatura e transporte como detalhes internos
- preserve `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/` como inventario normativo interno
- nao introduza subpath publico para NFC-e nesta fase

## 3. Start from the target root contract and infer the UF from the document

A superficie publica planejada para este slice e:

```ts
import { authorizeNFCe, createSigningContext } from 'nfe-sdk';

const outcome = await authorizeNFCe({
  document: nfceDocument,
  environment: 'homologation',
  requestExecutor,
  signingContext: createSigningContext({
    passphrase: '***',
    source: { kind: 'pfx-file', path: '/secure/certificate.pfx' },
  }),
  timeoutMs: 5000,
});

console.log(
  outcome.classification,
  outcome.acceptedForTransport,
  outcome.protocolNumber,
);
```

Nesta fase:

- a operacao deve inferir a UF diretamente do documento
- a operacao aceita apenas `homologation`
- Sao Paulo e a unica UF operacional promovida
- QR Code, DANFE NFC-e, CSC e contingencia offline nao fazem parte do fluxo
- `requestedCapabilities` pode ser usado apenas para tornar explicita uma tentativa sobre superficies deferidas; quando presente, o SDK deve responder com `unsupported-scope` antes do transporte

## 4. Make boundaries explicit before transport

Implemente os gates locais antes de chamar o autorizador:

- falhe com erro local se a UF nao puder ser inferida do documento
- falhe com boundary explicita se a UF inferida nao for `SP`
- falhe com boundary `unsupported-scope` se a aplicacao pedir QR Code, DANFE NFC-e, CSC, credenciamento automatizado ou contingencia offline neste slice
- falhe com erro local se o documento nao satisfizer as validacoes nacionais obrigatorias do slice
- so produza `transportOutcome` quando a request realmente for enviada

Exemplo minimo de boundary esperada para uma UF fora do piloto:

```ts
const blockedOutcome = await authorizeNFCe({
  document: nfceFromAnotherState,
  environment: 'homologation',
  requestExecutor,
  signingContext,
});

console.log(
  blockedOutcome.classification,
  blockedOutcome.acceptedForTransport,
  blockedOutcome.coverageBoundary?.code,
);
```

Exemplo minimo de boundary esperada para uma capacidade deferida:

```ts
const deferredOutcome = await authorizeNFCe({
  document: nfceDocument,
  environment: 'homologation',
  requestedCapabilities: ['qr-code'],
  requestExecutor,
  signingContext,
});

console.log(
  deferredOutcome.classification,
  deferredOutcome.acceptedForTransport,
  deferredOutcome.coverageBoundary?.code,
);
```

## 5. Keep the pilot surface intentionally narrow

O comportamento esperado neste slice e:

- suportar autorizacao homologada para NFC-e com UF resolvida como `SP`
- preservar uma taxonomia observavel para sucesso, rejeicao funcional, indisponibilidade, dependencia externa, erro local e boundary por cobertura
- manter a selecao de perfil estadual fora da API publica
- impedir qualquer tentativa operacional para UFs ainda nao promovidas
- bloquear explicitamente superficies deferidas quando a aplicacao as declarar via `requestedCapabilities`

## 6. Update the public contract evidence together with the implementation

Ao introduzir a nova facade:

- atualize `src/index.ts` com o novo export root
- atualize `src/public-contract.ts` com a nova superficie documentada e a nota de compatibilidade do slice 010
- documente o contrato planejado em `specs/010-nfce-national-core/contracts/public-nfce-operational-facade.md`
- mantenha `package.json#exports["."]` como fonte normativa da superficie publicada

## 7. Validate the feature with focused package gates

Execute o gate minimo do slice:

```bash
npm run lint
npx prettier --check specs/010-nfce-national-core/*.md specs/010-nfce-national-core/contracts/*.md .github/copilot-instructions.md
npm run typecheck
npm test
npm run build
npm run validate:tarball
```

Checks focados esperados durante a implementacao:

```bash
npm test -- tests/contract/public-nfce-operational-facade.test.ts
npm test -- tests/unit/nfce/resolve-nfce-uf.test.ts
npm test -- tests/unit/nfce/authorize-nfce-boundaries.test.ts
npm test -- tests/integration/nfce/authorize-nfce-sp-homologation.test.ts
```

Se algum ajuste excepcional tocar a arvore gerada, rode tambem:

```bash
npm run generate
```

## 8. Review scope limits before moving to `/speckit.tasks`

Antes de gerar tarefas, confirme que:

- o import raiz continua sendo a unica superficie runtime estavel
- a UF e inferida do documento, sem override manual
- SP continua como unico piloto operacional do slice
- UFs nao piloto sao bloqueadas antes do transporte
- superficies deferidas declaradas pela aplicacao retornam `unsupported-scope` antes do transporte
- QR Code, DANFE NFC-e, CSC e contingencia offline continuam deferidos
- a nova facade e additive sobre o contrato publico existente
