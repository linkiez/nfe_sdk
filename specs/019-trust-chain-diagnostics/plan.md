# Implementation Plan: Trust Chain Diagnostics

**Branch**: `main` | **Date**: 2026-05-21 | **Spec**: [/home/linkiez/Projetos/nfe_sdk/specs/019-trust-chain-diagnostics/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/019-trust-chain-diagnostics/spec.md)

**Input**: Feature specification from `/specs/019-trust-chain-diagnostics/spec.md`

## Summary

Transformar `RTM-018` e o recorte `RFL-007` em uma slice conservadora de `tooling` + `documentacao`, criando um novo artefato canonico em `docs/roadmap/` para a trilha diagnostica de trust chain e downloads auxiliares, acompanhado de um runbook/checklist humano curto. A implementacao deve atualizar primeiro esse novo artefato canonico, depois alinhar apenas os anexos de roadmap que sustentam `RTM-003` e `RTM-018`, e por fim manter os artefatos locais da spec como pesquisa, modelo conceitual e guia de execucao para destravar a geracao de tasks sem introduzir nova CLI, nova API publica ou dependencia de runtime.

## Technical Context

**Language/Version**: Markdown para roadmap, runbook e artefatos da spec; Node.js >= 18.18 com TypeScript 6.x para scripts de validacao existentes

**Primary Dependencies**: Spec Kit, Prettier, scripts `docs:links*`, `tsx`, anexos de `docs/roadmap/` e o contexto documental ja absorvido pelas specs `005`, `013` e `014`

**Storage**: N/A; trabalho restrito a artefatos Markdown em `docs/roadmap/`, `specs/019-trust-chain-diagnostics/` e `.github/copilot-instructions.md`

**Testing**: Validacao focada em formatacao e coerencia documental com `npx prettier --check specs/019-trust-chain-diagnostics/*.md specs/019-trust-chain-diagnostics/contracts/*.md docs/roadmap/diagnostico-trust-chain.md docs/roadmap/checklist-diagnostico-trust-chain.md docs/roadmap/proximas-iteracoes-recomendadas.md docs/roadmap/rtm-cobertura-oficial.md docs/roadmap/criterios-promocao.md docs/roadmap/portal-documentos-vigentes.md docs/roadmap/portal-nacional-inventario.md .github/copilot-instructions.md`, `npm run docs:links`, e `SPECIFY_FEATURE=019-trust-chain-diagnostics .specify/scripts/bash/setup-tasks.sh --json` para confirmar que o pacote de planejamento esta completo. Para aderir a constituicao, os comandos canonicos nomeados para Jest, lint, format e type/build continuam sendo `npm test`, `npm run lint`, `npm run format:check`, `npm run typecheck` e `npm run build`; nesta slice documental eles so devem ser executados se as edicoes revelarem drift fora do escopo de roadmap.

**Target Platform**: Linux local e CI do pacote npm ESM

**Project Type**: Biblioteca npm ESM com roadmap documental, acervo oficial internalizado e slices do Spec Kit

**Performance Goals**: Nenhuma meta nova de performance de runtime; a meta operacional do slice e permitir que um revisor localize a trilha diagnostica principal e seus limites em uma leitura curta, sem navegar por anexos concorrentes

**Constraints**: Nao criar ou alterar export publico, contrato de runtime, schema gerado, normalizacao, CLI nova, dependencia de binarios oficiais, automacao de trust chain ou validacao executavel adicional; o novo artefato canonico e o runbook devem permanecer em `docs/roadmap/` e usar `SVAN`, `SVRS`, `WSDL` e `SSL` apenas como evidencias de apoio e boundary de interoperabilidade

**Scale/Scope**: Slice pequena e tooling-first limitada a um novo artefato canonico, um runbook/checklist humano curto, quatro a cinco anexos de roadmap alinhados e os artefatos locais da spec usados como evidencia e guia

**Knowledge Sources**: Fontes primarias internas do slice: [docs/roadmap/proximas-iteracoes-recomendadas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md), [docs/roadmap/recortes-funcionais-prioritarios.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/recortes-funcionais-prioritarios.md), [docs/roadmap/rtm-cobertura-oficial.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/rtm-cobertura-oficial.md), [docs/roadmap/criterios-promocao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/criterios-promocao.md), [docs/roadmap/portal-documentos-vigentes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-documentos-vigentes.md), [docs/roadmap/portal-nacional-inventario.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-nacional-inventario.md), [specs/005-add-digital-signing/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/005-add-digital-signing/spec.md), [specs/013-release-hardening/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/013-release-hardening/spec.md) e [specs/014-expand-signing-coverage/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/014-expand-signing-coverage/spec.md); referencias secundarias aprovadas nao sao necessarias nesta fase; gaps conhecidos de proveniencia permanecem onde o portal nao explicita revogacao, data de substituicao ou dependencia de ambiente autenticado

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **ESM-only package impact**: nenhuma mudanca planejada em `exports`, entrypoints, imports publicos ou forma de publicacao. O slice e estritamente documental/tooling. ✅
- **Affected schema families and normalization**: nenhuma familia de schema, layout gerado ou regra de normalizacao sera alterada. Trust chain e downloads auxiliares ficam como diagnostico documental, nao como surface de runtime. ✅
- **Primary sources and provenance**: o plano depende de anexos de roadmap que ja consolidam `RTM-018`, `RFL-007` e a leitura de downloads oficiais; o novo artefato canonico centraliza a interpretacao diagnostica sem substituir a proveniencia dos anexos existentes. ✅
- **Source boundaries**: o trabalho fica restrito a `docs/roadmap/`, `specs/019-trust-chain-diagnostics/` e `.github/copilot-instructions.md`, sem tocar `src/`, `tests/`, `tools/` ou `xsd/`. ✅
- **Validation commands**: o plano nomeia `npm test`, `npm run lint`, `npm run format:check`, `npm run typecheck` e `npm run build`, mas executa por padrao apenas checks focados de Markdown, links e bootstrap de task generation porque a slice nao altera comportamento do pacote. ✅
- **npm package surface / release impact**: nao ha impacto de release esperado alem de tornar `RTM-018` auditavel como trilha diagnostica e runbook reutilizavel. ✅

**Constitution Check result**: PASS — nenhuma violacao encontrada.

_Post-Phase 1 re-check_: o design permanece aderente porque continua sem surface publica nova, sem alteracao de schema e sem ampliar o escopo alem de governanca documental e tooling diagnostico. ✅

## Project Structure

### Documentation (this feature)

```text
specs/019-trust-chain-diagnostics/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── diagnostic-documentation-deliverables.md
├── checklists/
└── tasks.md
```

### Source Code (repository root)

```text
.github/
└── copilot-instructions.md

docs/
└── roadmap/
    ├── diagnostico-trust-chain.md
    ├── checklist-diagnostico-trust-chain.md
    ├── proximas-iteracoes-recomendadas.md
    ├── rtm-cobertura-oficial.md
    ├── criterios-promocao.md
    ├── portal-documentos-vigentes.md
    └── portal-nacional-inventario.md

specs/
└── 019-trust-chain-diagnostics/
    ├── spec.md
    ├── plan.md
    ├── research.md
    ├── data-model.md
    ├── quickstart.md
    └── contracts/
```

**Structure Decision**: manter a feature como um slice de governanca documental em torno de um novo artefato canonico [docs/roadmap/diagnostico-trust-chain.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/diagnostico-trust-chain.md) e de um runbook humano curto [docs/roadmap/checklist-diagnostico-trust-chain.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/checklist-diagnostico-trust-chain.md). O trabalho implementavel se organiza em tres passos explicitos: criar e preencher o artefato canonico da trilha diagnostica, publicar o checklist operacional curto sem CLI, e alinhar apenas os anexos de roadmap que sustentam `RTM-003` e `RTM-018`.

## Complexity Tracking

Nenhuma violacao da constituicao precisa ser justificada nesta fase.
