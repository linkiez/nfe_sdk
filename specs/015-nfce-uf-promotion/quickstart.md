# Quickstart: NFC-e UF Promotion

## 1. Confirm the active baseline before implementing the slice

Antes de codificar, confirme o contrato root atual, a spec desta feature e a baseline das specs `010` e `014`:

```bash
sed -n '1,260p' src/index.ts
sed -n '1,260p' src/public-contract.ts
sed -n '1,260p' specs/010-nfce-national-core/spec.md
sed -n '1,260p' specs/010-nfce-national-core/plan.md
sed -n '1,260p' specs/014-expand-signing-coverage/spec.md
sed -n '1,260p' specs/015-nfce-uf-promotion/spec.md
```

O objetivo desta fase nao e criar uma nova API de `NFC-e`, mas promover `PR` alem de `SP` dentro do mesmo contrato root já publicado.

## 2. Keep the implementation inside the existing manual NFC-e layer

Implemente o slice sobre as camadas manuais ja existentes:

- concentre a logica nova em `src/canonical/nfce/`
- exponha o comportamento apenas por `src/canonical/facade/authorize-nfce.ts`
- ajuste `src/canonical/transport/` somente se `PR` exigir definicao de servico ou roteamento dedicados
- preserve `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/` como inventario normativo interno
- nao introduza novo subpath publico para `NFC-e`

## 3. Treat PR as the only new promoted UF in this slice

O cohort promoted desta feature fica restrito a `SP` e `PR`.

Isso implica:

- `SP` continua como regressao obrigatoria do slice atual
- `PR` entra como a unica `UF` adicional promovida
- qualquer outra `UF` continua falhando antes do transporte com boundary explicita
- o cohort nao deve crescer por inferencia automatica, alias, arrays ou mapas implicitamente abertos
- `PB`, `MS`, `GO`, `SC` e `CE` permanecem fora por racional dominante ja registrado na feature e no roadmap

## 4. Keep auxiliary NFC-e capabilities explicitly deferred

Durante a implementacao, mantenha fora do runtime imediato:

- `CSC`
- `QR Code`
- `DANFE NFC-e`
- consulta publica do consumidor
- contingencia `offline`
- `EPEC NFC-e`
- cancelamento por substituicao

Esses itens podem aparecer apenas como boundary documentada, `requestedCapabilities` bloqueada ou apoio de roadmap, nunca como promessa operacional embutida no cohort `SP` + `PR`.

## 5. Start from the expected runtime behavior

O comportamento runtime esperado para `PR` deve continuar passando pela mesma facade root:

```ts
import { authorizeNFCe, createSigningContext } from 'nfe-sdk';

const outcome = await authorizeNFCe({
  document: prDocument,
  environment: 'homologation',
  requestExecutor,
  signingContext: createSigningContext({
    passphrase: '***',
    source: { kind: 'pfx-file', path: '/secure/certificate.pfx' },
  }),
});

console.log(
  outcome.classification,
  outcome.acceptedForTransport,
  outcome.protocolNumber,
);
```

Boundary esperada para `UF` fora do cohort:

```ts
const blockedOutcome = await authorizeNFCe({
  document: unsupportedUfDocument,
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

## 6. Add the smallest fixture and test set that can falsify the cohort change

O conjunto minimo esperado para esta feature e:

- fixture valida de `PR` em homologacao
- fixture de resposta autorizada de `PR`
- regressao de sucesso para `PR`
- regressao de nao-regressao para `SP`
- regressao de boundary para `UF` fora do cohort
- teste unitario de selecao de perfil para `SP` e `PR`

Se o roteamento de transporte de `PR` exigir servico dedicado, inclua tambem fixture e teste focados nessa escolha.

## 7. Update contract and roadmap evidence together

Ao implementar a promocao de `PR`:

- atualize `src/public-contract.ts`
- ajuste `README.md` se o contrato publicado citar explicitamente `SP` como unico piloto
- atualize `docs/roadmap/coverage-matrix.md`, `docs/roadmap/nfce-operacional-promovivel.md`, `docs/roadmap/ufs-ambientes.md` e `docs/roadmap/specs-implementacao.md` para refletir o cohort `SP` + `PR`
- mantenha o anexo de roadmap coerente com a classificacao entre `runtime`, `tooling`, `example` e backlog

## 8. Validate the feature with focused gates

Execute o gate minimo da feature:

```bash
npm run lint
npm run format:check
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
npm test -- tests/integration/nfce/authorize-nfce-sp-pilot-profile.test.ts
```

Se houver teste dedicado para `PR`, ele deve entrar no mesmo ciclo focado antes da validacao ampla.

## 9. Review scope discipline before moving to `/speckit.tasks`

Antes de gerar tarefas, confirme que:

- o import raiz continua sendo a unica superficie runtime estavel
- `PR` e a unica `UF` nova promovida neste corte
- `SP` continua coberta sem regressao
- outras `UFs` continuam bloqueadas antes do transporte
- `CSC`, `QR Code`, `DANFE NFC-e`, consulta do consumidor e contingencia `offline` continuam fora do runtime imediato
- nenhum arquivo gerado precisou ser alterado