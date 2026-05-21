# Quickstart: NFe Receipt Protocol

## 1. Confirm the planning context on `main`

Trabalhe no branch atual `main` usando o override do Spec Kit:

```bash
git branch --show-current
sed -n '1,260p' specs/021-nfe-receipt-protocol/spec.md
sed -n '1,260p' specs/021-nfe-receipt-protocol/plan.md
```

Se algum script validar branch, use `SPECIFY_FEATURE=021-nfe-receipt-protocol` em vez de abrir branch dedicada.

## 2. Read the existing async receipt surface before editing

Antes de implementar, confirme o helper interno ja existente e os contratos atuais:

```bash
sed -n '1,220p' src/canonical/nfe/async-batch-retrieval.ts
sed -n '1,260p' src/canonical/nfe/contracts.ts
sed -n '1,220p' src/canonical/nfe/authorize-nfe.ts
sed -n '1,220p' tests/unit/canonical/nfe/async-batch-retrieval.test.ts
```

O objetivo desta feature nao e reinventar o parse de `retConsReciNFe`; e promovê-lo para uma operacao root additive e dedicada.

## 3. Start with focused failing tests

Abra primeiro os testes de contrato e unidade do slice antes da implementacao:

```bash
npm test -- --runInBand tests/unit/canonical/nfe/async-batch-retrieval.test.ts
```

Depois adicione/regra novos testes focados para:

- operacao publica dedicada de reconciliacao por `nRec`
- exigencia de contexto explicito de roteamento
- resultados `authorized`, `rejected`, `denied`, `unavailable`, `inconclusive` e `pending`
- boundary de `not-found`, `protocol-error` e `usage-error`
- permanencia de polling generico, consulta por chave sem recibo e persistencia local fora do recorte

O fluxo publico implementado neste slice fica ancorado em `reconcileNFeReceipt`, enquanto `retrieveNFeAuthorizationBatch` permanece como helper de lote mais bruto para quem precisa apenas do parse estruturado da consulta `consReciNFe`.

## 4. Promote the domain behavior before wiring the root facade

Implemente a maior parte do comportamento em `src/canonical/nfe/` antes de ajustar a facade root.

Prioridade tecnica:

1. contratos compartilhados em `src/canonical/nfe/contracts.ts`
2. ampliacao controlada de `src/canonical/nfe/async-batch-retrieval.ts`
3. nova operacao dedicada em `src/canonical/nfe/reconcile-nfe-receipt.ts`
4. ajuste de `authorize-nfe.ts` para manter coerencia com o retorno `received`
5. alinhamento final de facade, `src/index.ts`, README e `src/public-contract.ts`

## 5. Keep the slice small and explicit

Durante a implementacao:

- exija `nRec` conhecido e contexto explicito de autorizador/ambiente
- nao introduza polling generico nem loops automáticos de retry
- nao abra consulta direta por chave sem recibo
- nao dependa de cache local da submissao anterior
- nao abra recuperacao multi-documento, filas ou persistencia local
- preserve a integracao com o modelo de estado da spec `020` apenas quando houver evidencia suficiente

## 6. Run focused validation and then the full package gate

Comece por checks focados do slice:

```bash
npm test -- --runInBand tests/contract/root-nfe-receipt-facade.test.ts tests/integration/reconcile-nfe-receipt.test.ts tests/unit/canonical/nfe/async-batch-retrieval.test.ts tests/unit/nfe-receipt-reconciliation.test.ts
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
- o contrato publico da operacao dedicada de recibo estiver definido sem conflito com `queryNFeDocumentSituation`
- a referencia em `.github/copilot-instructions.md` apontar para esta plan
- os gates focados e os comandos canônicos estiverem nomeados no plano
