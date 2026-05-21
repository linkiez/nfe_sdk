# Implementation Plan: NFe State Operations

**Branch**: `020-nfe-state-operations` | **Date**: 2026-05-21 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/020-nfe-state-operations/spec.md`

## Summary

Implementar `RFL-002` como um slice de reconciliacao operacional por documento sobre a superficie root ja publicada para `NF-e`. O foco tecnico e consolidar a leitura de estado em torno de `queryNFeDocumentSituation` e alinhar cancelamento, carta de correcao e inutilizacao a um modelo compartilhado de estado e evidencias, sem abrir `nRec`, polling generico, persistencia local, multi-documento ou novo backoffice embutido.

## Technical Context

**Language/Version**: TypeScript 6.0.3 em modo estrito sobre Node.js >=18.18 LTS; Markdown para artefatos de planejamento

**Primary Dependencies**: TypeScript 6, Jest 30 / ts-jest, ESLint 9, Prettier 3, facades operacionais sob `src/canonical/nfe/`, transporte SOAP sob `src/canonical/transport/`, contrato root em `src/index.ts` e `src/public-contract.ts`

**Storage**: N/A; slice restrita a contratos runtime, fixtures, testes e documentacao

**Testing**: Jest para contrato, integracao e unidade; gates canônicos `npm test`, `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run build`, `npm run validate:tarball`

**Target Platform**: Consumidores Node.js do pacote ESM em Linux/macOS/Windows; sem browser, mobile ou servico remoto proprio

**Project Type**: Pacote npm ESM / biblioteca TypeScript com runtime manuscrito additive sobre inventario gerado de XSD

**Performance Goals**: Reaproveitar a infraestrutura de transporte existente sem round-trips extras alem das operacoes oficiais exigidas; manter consultas e manutencoes no envelope de latencia do autorizador, com mapeamento local deterministico de estado e evidencias

**Constraints**: Nenhuma remocao ou rename de export publico; sem alteracao em `src/{classes,interfaces,types,enums}` ou no layout gerado; sem `nRec`, polling generico, distribuicao, persistencia local, sincronizacao multi-documento ou variacoes dominantes por `UF` nesta fase

**Scale/Scope**: Um novo modelo operacional compartilhado para estado/evidencias, atualizacoes localizadas em `query-nfe-document-situation.ts`, `maintenance-outcome.ts`, `cancel-nfe.ts`, `submit-nfe-correction-letter.ts`, `submit-nfe-inutilization.ts`, contratos root e testes focados

**Knowledge Sources**: Fontes primarias: [docs/roadmap/ROADMAP.md](../../docs/roadmap/ROADMAP.md), [docs/roadmap/proximas-iteracoes-recomendadas.md](../../docs/roadmap/proximas-iteracoes-recomendadas.md), [docs/roadmap/recortes-funcionais-prioritarios.md](../../docs/roadmap/recortes-funcionais-prioritarios.md), [docs/roadmap/rtm-cobertura-oficial.md](../../docs/roadmap/rtm-cobertura-oficial.md), `MOC 7.0`, Anexo I, consultas e servicos oficiais de `NF-e` e os schemas internalizados; fontes internas complementares: [specs/006-add-soap-transport/spec.md](../006-add-soap-transport/spec.md), [specs/007-nfe-operational-mvp/spec.md](../007-nfe-operational-mvp/spec.md), [src/canonical/nfe/contracts.ts](../../src/canonical/nfe/contracts.ts); referencias secundarias aprovadas nao sao necessarias nesta fase; gaps de proveniencia permanecem quando a resposta oficial nao permitir concluir estado final ou elegibilidade por `UF`

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **ESM-only package impact**: O slice permanece additive sobre `package.json#exports["."]`, `src/index.ts` e `src/public-contract.ts`, sem novo subpath publico nem mudanca breaking planejada. ✅
- **Affected schema families and normalization**: Nenhum artefato gerado ou regra de normalizacao de schema deve mudar; o trabalho fica em contratos e mapeadores manuais sob `src/canonical/nfe/` e `src/canonical/facade/`. ✅
- **Primary sources and provenance**: O plano identifica separadamente roadmap, specs anteriores e fontes normativas de consulta/manutencao, mantendo eventuais lacunas de estado final como boundary explicita. ✅
- **Source boundaries**: O design mantem separacao entre codigo manual, arvore gerada, fixtures e documentacao; nao ha excecoes de strict typing previstas. ✅
- **Validation commands**: O plano nomeia `npm test`, `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run build` e `npm run validate:tarball`, com foco adicional em suites Jest de contrato, integracao e unidade para consulta e manutencoes. ✅
- **npm package surface / release impact**: O impacto esperado e additive e concentrado em contratos operacionais existentes ou tipos complementares; qualquer ampliacao do contrato root deve permanecer sem renomear a superficie publicada atual. ✅

**Constitution Check result**: PASS — nenhuma violacao encontrada.

_Post-Phase 1 re-check_: O design continua aderente. A feature preserva o inventario gerado, explicita fontes normativas, mantem o contrato ESM additive e define gates completos de validacao sem exigir regeneracao de schemas. ✅

## Project Structure

### Documentation (this feature)

```text
specs/020-nfe-state-operations/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── public-nfe-state-operations-facade.md
├── checklists/
│   └── requirements.md
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── index.ts                                 UPDATE
├── public-contract.ts                       UPDATE
└── canonical/
    ├── facade/
    │   ├── index.ts                         UPDATE
    │   ├── query-nfe-document-situation.ts  UPDATE
    │   ├── cancel-nfe.ts                    UPDATE
    │   ├── submit-nfe-correction-letter.ts  UPDATE
    │   └── submit-nfe-inutilization.ts      UPDATE
    └── nfe/
        ├── contracts.ts                     UPDATE
        ├── query-nfe-document-situation.ts  UPDATE
        ├── maintenance-outcome.ts           UPDATE
        ├── cancel-nfe.ts                    UPDATE
        ├── submit-nfe-correction-letter.ts  UPDATE
        ├── submit-nfe-inutilization.ts      UPDATE
        └── operational-state.ts             NEW

tests/
├── contract/
│   └── root-nfe-operational-facade.test.ts  UPDATE
├── integration/
│   ├── query-nfe-document-situation.test.ts NEW
│   ├── cancel-nfe.test.ts                   UPDATE
│   ├── submit-nfe-correction-letter.test.ts UPDATE
│   └── submit-nfe-inutilization.test.ts     UPDATE
├── unit/
│   ├── nfe-operational-state.test.ts        NEW
│   ├── nfe-operational-query-results.test.ts UPDATE
│   └── nfe-operational-maintenance-results.test.ts UPDATE
└── fixtures/
    └── nfe-operational/
        ├── document-situation/              UPDATE
        ├── cancellation/                    UPDATE
        ├── correction-letter/               UPDATE
        ├── inutilization/                   UPDATE
        └── maintenance/                     UPDATE

README.md                                     UPDATE
docs/roadmap/rtm-cobertura-oficial.md         UPDATE
```

**Structure Decision**: Reutilizar a estrutura de pacote unico e os entrypoints operacionais ja publicados. O slice sera implementado ampliando contratos e mapeadores manuais existentes em `src/canonical/nfe/` e `src/canonical/facade/`, sem criar pacote paralelo, sem tocar a arvore gerada e sem abrir um novo fluxo root redundante quando as funcoes `queryNFeDocumentSituation`, `cancelNFe`, `submitNFeCorrectionLetter` e `submitNFeInutilization` ja cobrem o recorte publico.

## Complexity Tracking

Nenhuma violacao da constituicao precisa ser justificada nesta fase.
