# Implementation Plan: NFe Receipt Protocol

**Branch**: `021-nfe-receipt-protocol` | **Date**: 2026-05-21 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/021-nfe-receipt-protocol/spec.md`

## Summary

Promover o gap de runtime `RFL-001` como um slice additive sobre a superficie root atual de `NF-e`: a submissao continua usando `authorizeNFe`, mas passa a expor de forma observavel quando o retorno ficar assincrono com `nRec`; um novo fluxo publico e dedicado de reconciliacao por recibo conhecido fecha o protocolo final com classificacoes `authorized`, `rejected`, `denied`, `unavailable`, `inconclusive` ou `pending`, e tambem com boundaries operacionais explicitas `not-found`, `protocol-error` e `usage-error` quando a consulta oficial ou o contrato local nao sustentarem um desfecho documental mais forte, sempre exigindo contexto explicito de roteamento do autorizador/ambiente e mantendo polling generico, consulta direta por chave sem recibo, persistencia local e recuperacao multi-documento fora do contrato.

## Technical Context

**Language/Version**: TypeScript 6.0.3 em modo estrito sobre Node.js >=18.18 LTS; Markdown para artefatos de planejamento

**Primary Dependencies**: TypeScript 6, Jest 30 / ts-jest, ESLint 9, Prettier 3, runtime manuscrito em `src/canonical/nfe/`, transporte SOAP em `src/canonical/transport/`, contrato root em `src/index.ts` e `src/public-contract.ts`

**Storage**: N/A; o slice permanece stateless e nao depende de cache, banco ou persistencia local

**Testing**: Jest para contrato, integracao e unidade; gates canônicos `npm test`, `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run build`, `npm run validate:tarball`

**Target Platform**: Consumidores Node.js do pacote ESM em Linux/macOS/Windows; sem browser, mobile ou servico remoto proprio

**Project Type**: Pacote npm ESM / biblioteca TypeScript com runtime manuscrito additive sobre inventario gerado de XSD

**Performance Goals**: Reaproveitar o transporte existente sem round-trips extras fora do fluxo oficial de `NfeAutorizacao4` + `NfeRetAutorizacao4`; manter o parse e a reconciliacao em memoria, com classificacao deterministica do recibo em uma unica chamada dedicada por tentativa

**Constraints**: Nenhuma remocao ou rename de export publico; sem heuristica de roteamento, sem polling generico, sem consulta direta por chave sem `nRec`, sem persistencia local, sem reconciliacao multi-documento, sem alterar a arvore gerada `src/{classes,interfaces,types,enums}`

**Scale/Scope**: Um novo fluxo publico dedicado para reconciliar um `nRec` por vez, mais ajustes localizados em `authorize-nfe.ts`, `contracts.ts`, facade root, testes focados e documentacao contratual; a feature promove capacidades sobre o helper interno `async-batch-retrieval.ts` sem abrir orquestracao ampla

**Knowledge Sources**: Fontes primarias: [docs/roadmap/ROADMAP.md](../../docs/roadmap/ROADMAP.md), [docs/roadmap/proximas-iteracoes-recomendadas.md](../../docs/roadmap/proximas-iteracoes-recomendadas.md), [docs/roadmap/recortes-funcionais-prioritarios.md](../../docs/roadmap/recortes-funcionais-prioritarios.md), [docs/roadmap/rtm-cobertura-oficial.md](../../docs/roadmap/rtm-cobertura-oficial.md), [docs/roadmap/coverage-matrix.md](../../docs/roadmap/coverage-matrix.md), `MOC 7.0`, Anexo I e a relacao oficial de servicos `NfeAutorizacao4` / `NfeRetAutorizacao4`; fontes internas complementares: [specs/006-add-soap-transport/spec.md](../006-add-soap-transport/spec.md), [specs/007-nfe-operational-mvp/spec.md](../007-nfe-operational-mvp/spec.md), [specs/020-nfe-state-operations/spec.md](../020-nfe-state-operations/spec.md), [src/canonical/nfe/async-batch-retrieval.ts](../../src/canonical/nfe/async-batch-retrieval.ts); nesta fase, a regra planejada de classificacao e: `pending` apenas para processamento oficial ainda em curso, `unavailable` apenas para indisponibilidade oficial/de transporte sem evidencia terminal suficiente, e `inconclusive` apenas para resposta oficial concluida sem estado pendente mas tambem sem evidencia normativa bastante para uma conclusao terminal confiavel

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **ESM-only package impact**: O slice permanece additive sobre `package.json#exports["."]`, `src/index.ts`, `src/canonical/index.ts`, `src/canonical/facade/` e `src/public-contract.ts`, sem novo subpath publico nem mudanca breaking planejada. ✅
- **Affected schema families and normalization**: Nenhum artefato gerado ou regra de normalizacao muda; o trabalho reutiliza schemas ja internalizados de `retEnviNFe` e `retConsReciNFe` apenas via runtime manual sob `src/canonical/nfe/`. ✅
- **Primary sources and provenance**: O plano separa roadmap, specs anteriores, helper interno existente e fontes normativas de autorizacao/recibo, mantendo lacunas de classificacao final como boundary explicita quando a evidencia oficial for insuficiente. ✅
- **Source boundaries**: O design mantem separacao entre codigo manual, arvore gerada, fixtures e documentacao; nao ha relaxamento de strict typing planejado. ✅
- **Validation commands**: O plano nomeia testes focados de contrato/integracao/unidade e os gates `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball`. ✅
- **npm package surface / release impact**: O impacto esperado e additive e concentrado em uma nova operacao root dedicada de reconciliacao por recibo, sem alterar o significado das APIs existentes de consulta por chave. ✅

**Constitution Check result**: PASS — nenhuma violacao encontrada.

_Post-Phase 1 re-check_: O design continua aderente. A feature promove um helper interno ja existente para contrato publico additive, preserva o inventario gerado, explicita fontes normativas e mantem fora do recorte qualquer dependencia de cache local, heuristica de roteamento ou polling generico. ✅

## Project Structure

### Documentation (this feature)

```text
specs/021-nfe-receipt-protocol/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── public-nfe-receipt-protocol-facade.md
├── checklists/
│   └── requirements.md
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── index.ts                                      UPDATE
├── public-contract.ts                            UPDATE
└── canonical/
    ├── index.ts                                  UPDATE
    ├── facade/
    │   ├── index.ts                              UPDATE
    │   └── reconcile-nfe-receipt.ts              NEW
    └── nfe/
        ├── contracts.ts                          UPDATE
        ├── authorize-nfe.ts                      UPDATE
        ├── async-batch-retrieval.ts              UPDATE
        ├── index.ts                              UPDATE
        ├── reconcile-nfe-receipt.ts              NEW
        └── operational-state.ts                  UPDATE

tests/
├── contract/
│   └── root-nfe-receipt-facade.test.ts           NEW
├── integration/
│   ├── authorize-nfe-batch.test.ts               UPDATE
│   └── reconcile-nfe-receipt.test.ts             NEW
├── unit/
│   ├── canonical/nfe/async-batch-retrieval.test.ts UPDATE
│   └── nfe-receipt-reconciliation.test.ts        NEW
└── fixtures/
    └── nfe-operational/
        └── authorization/
            ├── batch-response-received.xml       UPDATE
            ├── receipt-response-authorized.xml   NEW
            ├── receipt-response-rejected.xml     NEW
            ├── receipt-response-denied.xml       NEW
            ├── receipt-response-unavailable.xml  NEW
            ├── receipt-response-inconclusive.xml NEW
            └── receipt-response-processing.xml   NEW

README.md                                          UPDATE
```

**Structure Decision**: Reutilizar a estrutura de pacote unico e as facades operacionais ja publicadas. O slice sera implementado promovendo o comportamento em `src/canonical/nfe/async-batch-retrieval.ts` e adicionando um wrapper publico dedicado em `src/canonical/nfe/reconcile-nfe-receipt.ts` e `src/canonical/facade/reconcile-nfe-receipt.ts`, sem criar pacote paralelo, sem tocar a arvore gerada e sem sobrecarregar `queryNFeDocumentSituation` com semantica opcional concorrente.

## Complexity Tracking

Nenhuma violacao da constituicao precisa ser justificada nesta fase.
