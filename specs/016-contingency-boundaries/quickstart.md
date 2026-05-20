# Quickstart: Contingency Boundaries

## 1. Confirm the active baseline before implementing the slice

Antes de codificar, confirme as facades operacionais atuais, o contrato root e a baseline da spec `015`:

```bash
sed -n '1,220p' src/public-contract.ts
sed -n '1,260p' src/canonical/nfe/authorize-nfe.ts
sed -n '1,260p' src/canonical/nfce/authorize-nfce.ts
sed -n '1,260p' src/canonical/transport/service-catalog.ts
sed -n '1,260p' specs/015-nfce-uf-promotion/spec.md
sed -n '1,260p' specs/016-contingency-boundaries/spec.md
```

O objetivo desta fase nao e criar uma nova API de contingencia, mas tornar a degradacao por ambiente observavel dentro do contrato root ja publicado.

Neste corte, a primeira facade promovida e `authorizeNFe`; `authorizeNFCe` continua servindo apenas para boundaries explicitas de escopo e estado.

## 2. Keep the implementation inside the existing handwritten runtime layers

Implemente o slice sobre as camadas manuais ja existentes:

- concentre a logica nova em `src/canonical/nfe/`, `src/canonical/nfce/` e `src/canonical/transport/`
- preserve `src/public-contract.ts` como fonte documental do contrato root
- ajuste `README.md` e `docs/roadmap/` somente para refletir a classificacao promoted versus deferred
- nao introduza novo subpath publico para contingencia
- nao altere `src/classes/`, `src/interfaces/`, `src/types/` ou `src/enums/`

## 3. Treat `SVC` as the only promoted contingency diagnostic in this slice

O cohort promoted desta feature fica restrito a diagnostico observavel de `SVC-AN` e `SVC-RS` quando o fluxo estiver dentro do recorte suportado.

Isso implica:

- o fluxo normal continua como regressao obrigatoria
- `SVC-AN` e `SVC-RS` entram como classificacao observavel, nao como emissor alternativo completo
- `EPEC` e `offline` continuam devolvendo boundary explicita
- nenhuma dependencia local ou assistida pode entrar por inferencia automatica

## 4. Keep `EPEC` and `offline` explicitly deferred

Durante a implementacao, mantenha fora do runtime promoted:

- `EPEC` como fluxo completo com conciliacao
- contingencia `offline` da `NFC-e`
- persistencia local obrigatoria
- recuperacao assistida completa
- automacao de credenciamento
- emissor embutido ou renderer operacional

Esses itens podem aparecer apenas como boundary documentada, capability deferida ou apoio de roadmap.

## 5. Start from the expected runtime behavior

Comportamento esperado de fluxo normal preservado:

```ts
const outcome = await authorizeNFe({
  document: nfeDocument,
  environment: 'homologation',
  requestExecutor,
  signingContext,
});

console.log(outcome.classification, outcome.acceptedForTransport);
```

Boundary esperada de contingencia suportada:

```ts
const outcome = await authorizeNFe({
  document: nfeDocument,
  environment: 'production',
  requestExecutor,
  signingContext,
});

console.log(outcome.classification, outcome.coverageBoundary?.code);
```

Boundary esperada para caminho ainda deferido:

```ts
const outcome = await authorizeNFCe({
  document: nfceDocument,
  environment: 'homologation',
  requestExecutor,
  signingContext,
  requestedCapabilities: ['offline-contingency'],
});

console.log(outcome.classification, outcome.coverageBoundary?.code);
```

## 6. Add the smallest fixture and test set that can falsify the slice

O conjunto minimo esperado para esta feature e:

- regressao de fluxo normal sem contingencia
- teste unitario de classificacao de `SVC-AN` e `SVC-RS`
- regressao de boundary explicita para `EPEC`
- regressao de boundary explicita para `offline`
- atualizacao de contrato root e de documentacao observavel

Se a classificacao promoted se aplicar primeiro a apenas uma facade operacional, documente isso explicitamente e prove a nao-regressao da outra.

## 7. Update contract and roadmap evidence together

Ao implementar a classificacao de contingencia:

- atualize `src/public-contract.ts`
- ajuste `README.md` se o contrato publicado citar contingencia apenas como backlog generico
- atualize `docs/roadmap/coverage-matrix.md`, `docs/roadmap/rtm-cobertura-oficial.md`, `docs/roadmap/topicos-oficiais.md`, `docs/roadmap/ufs-ambientes.md` e `docs/roadmap/specs-implementacao.md`
- registre tambem a rastreabilidade em `docs/roadmap/proximas-iteracoes-recomendadas.md` e `docs/_meta/source-registry.md`
- mantenha a linguagem coerente entre `runtime`, `tooling`, `example` e backlog

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
npm test -- tests/contract/root-contract-boundary.test.ts
npm test -- tests/contract/package-contract-docs.test.ts
npm test -- tests/unit/resolve-nfe-service-endpoint-errors.test.ts
npm test -- tests/integration/query-nfe-service-status.test.ts
```

Se houver novo teste dedicado de contingencia em `NF-e` ou `NFC-e`, ele deve entrar no mesmo ciclo focado antes da validacao ampla.

## 9. Review scope discipline before moving to `/speckit.tasks`

Antes de gerar tarefas, confirme que:

- o import raiz continua sendo a unica superficie runtime estavel
- `SVC-AN` e `SVC-RS` sao os unicos ambientes de contingencia que entram como diagnostico observavel neste corte
- o fluxo normal continua coberto sem regressao
- `EPEC` e `offline` continuam bloqueados como boundary explicita
- nenhuma mudanca foi feita em arquivos gerados