# Quickstart: NFe State Operations

## 1. Confirm the active planning context on `main`

Trabalhe no branch atual `main` usando o override do Spec Kit:

```bash
git branch --show-current
sed -n '1,260p' specs/020-nfe-state-operations/spec.md
sed -n '1,260p' specs/020-nfe-state-operations/plan.md
```

Se algum script validar branch, use `SPECIFY_FEATURE=020-nfe-state-operations` em vez de abrir branch dedicada.

## 2. Read the existing operational slice before editing

Antes de implementar, confirme a superficie ja publicada e os contratos atuais:

```bash
sed -n '1,220p' src/canonical/nfe/contracts.ts
sed -n '1,220p' src/canonical/nfe/query-nfe-document-situation.ts
sed -n '1,220p' src/canonical/nfe/maintenance-outcome.ts
sed -n '1,220p' tests/contract/root-nfe-operational-facade.test.ts
```

O objetivo desta feature nao e inventar uma nova facade root concorrente; e consolidar leitura de estado e manutencao sobre a superficie ja existente.

## 3. Start with focused failing tests

Abra primeiro os testes de contrato e integracao do slice antes da implementacao:

```bash
npm test -- --runInBand tests/contract/root-nfe-operational-facade.test.ts
```

Depois adicione/regra novos testes focados para:

- leitura de estado por chave de acesso
- conciliacao de protocolo e pendencia
- estados `authorized`, `rejected`, `canceled`, `inutilized`, `pending`, `unavailable` e `inconclusive`
- cancelamento, carta de correcao e inutilizacao alinhados ao estado compartilhado
- boundaries de `nRec`, polling generico e multi-documento fora do recorte

## 4. Consolidate state and evidence in the domain layer first

Implemente a maior parte do comportamento em `src/canonical/nfe/`, com um modelo compartilhado de estado/evidencia antes de ajustar a facade root.

Prioridade tecnica:

1. contratos compartilhados em `src/canonical/nfe/contracts.ts`
2. mapeamento e normalizacao de estado em `src/canonical/nfe/operational-state.ts`
3. ajuste de `query-nfe-document-situation.ts`
4. ajuste de `maintenance-outcome.ts` e manutencoes especificas
5. alinhamento final de facade, `src/index.ts`, README e `src/public-contract.ts`

## 5. Keep the slice small and explicit

Durante a implementacao:

- mantenha consulta inicial apenas por chave de acesso
- nao introduza `nRec` nem polling generico
- nao abra reconciliacao multi-documento, persistencia local ou filas de retentativa
- preserve variacoes por `UF` e ambiente como boundary explicita
- use `publicPackageContract.operationalBoundaries` como referencia publica das fronteiras declaradas do slice

## 6. Run focused validation and then the full package gate

Comece por checks focados do slice:

```bash
npm test -- --runInBand tests/contract/root-nfe-operational-facade.test.ts tests/integration/query-nfe-document-situation.test.ts tests/unit/nfe-operational-state.test.ts
```

Depois feche com os gates canônicos:

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
npm run validate:tarball
```

## 7. Completion criteria

O slice esta pronto para task generation quando:

- `plan.md`, `research.md`, `data-model.md`, `quickstart.md` e `contracts/` estiverem preenchidos
- o contrato operacional da feature estiver definido sem ambiguidades de identificador publico
- a referencia em `.github/copilot-instructions.md` apontar para esta plan
- os gates focados e os comandos canônicos estiverem nomeados no plano
