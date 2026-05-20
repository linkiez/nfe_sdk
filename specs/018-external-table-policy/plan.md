# Implementation Plan: External Table Policy

**Branch**: `main` | **Date**: 2026-05-20 | **Spec**: [/home/linkiez/Projetos/nfe_sdk/specs/018-external-table-policy/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/018-external-table-policy/spec.md)

**Input**: Feature specification from `/specs/018-external-table-policy/spec.md`

## Summary

Transformar `RTM-010` em uma slice conservadora de governanca documental e de tooling, mantendo [docs/roadmap/politica-tabelas-externas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/politica-tabelas-externas.md) como artefato canonico da politica e usando os artefatos da spec apenas como evidencia, pesquisa e guia de execucao. A implementacao deve atualizar primeiro a politica canonica, depois alinhar referencias de roadmap e proveniencia que sustentam `RTM-010`, e por fim validar apenas consistencia documental, formatacao e rastreabilidade suficiente para destravar a geracao de tasks sem abrir nova superficie de runtime.

## Technical Context

**Language/Version**: Markdown para roadmap e artefatos da spec; Node.js >= 18.18 com TypeScript 6.x para scripts de validacao existentes

**Primary Dependencies**: Spec Kit, Prettier, scripts `docs:links*`, `tsx`, acervo documental em `docs/roadmap/`

**Storage**: N/A; trabalho restrito a artefatos Markdown em `docs/roadmap/`, `specs/018-external-table-policy/` e `.github/copilot-instructions.md`

**Testing**: Validacao focada em formatacao e consistencia documental com `npx prettier --check specs/018-external-table-policy/*.md docs/roadmap/politica-tabelas-externas.md docs/roadmap/proximas-iteracoes-recomendadas.md docs/roadmap/rtm-cobertura-oficial.md docs/roadmap/portal-documentos-vigentes.md .github/copilot-instructions.md`, `npm run docs:links`, e `SPECIFY_FEATURE=018-external-table-policy .specify/scripts/bash/setup-tasks.sh --json` para confirmar que o pacote de planejamento esta completo. Para aderir a constituicao, os comandos canonicos nomeados para Jest, lint, format e type/build continuam sendo `npm test`, `npm run lint`, `npm run format:check`, `npm run typecheck` e `npm run build`; nesta slice documental eles so devem ser executados se as edicoes revelarem drift inesperado fora do escopo de roadmap.

**Target Platform**: Linux local e CI do pacote npm ESM

**Project Type**: Biblioteca npm ESM com roadmap documental e slices do Spec Kit

**Performance Goals**: Nenhuma meta nova de performance; o objetivo e preservar zero impacto de runtime e manter a validacao limitada ao escopo documental desta slice

**Constraints**: Nao criar ou alterar export publico, contrato de runtime, schema gerado, sincronizacao automatica, politica canonica paralela ou nova promessa implicita de API; [docs/roadmap/politica-tabelas-externas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/politica-tabelas-externas.md) permanece como unica fonte canonica da feature; a classificacao continua conservadora em `tooling` por padrao

**Scale/Scope**: Slice pequena e tooling-first sobre `RTM-010`, limitada a um artefato canonico de roadmap, tres a quatro referencias de apoio no roadmap e os artefatos locais da spec usados como evidencia e guia

**Knowledge Sources**: Fontes primarias internas do slice: [docs/roadmap/politica-tabelas-externas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/politica-tabelas-externas.md), [docs/roadmap/proximas-iteracoes-recomendadas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md), [docs/roadmap/criterios-promocao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/criterios-promocao.md), [docs/roadmap/rtm-cobertura-oficial.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/rtm-cobertura-oficial.md), [docs/roadmap/portal-documentos-vigentes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-documentos-vigentes.md) e a propria spec; fontes oficiais externas continuam registradas via esses anexos e nao exigem nova coleta para concluir o planejamento

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **ESM-only package impact**: nenhuma mudanca planejada em `exports`, entrypoints, imports publicos ou forma de publicacao. O slice e estritamente documental/tooling. ✅
- **Affected schema families and normalization**: nenhuma familia de schema, layout gerado ou normalizacao sera alterada. A politica governa dados externos e sua classificacao, nao a geracao de tipos. ✅
- **Primary sources and provenance**: a feature depende de anexos de roadmap que ja consolidam a proveniencia de `RTM-010`; o plano preserva [docs/roadmap/politica-tabelas-externas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/politica-tabelas-externas.md) como artefato canonico e trata os arquivos da spec apenas como apoio. ✅
- **Source boundaries**: o trabalho fica restrito a `docs/roadmap/`, `specs/018-external-table-policy/` e `.github/copilot-instructions.md`, sem tocar `src/`, `tests/`, `tools/` ou `xsd/`. ✅
- **Validation commands**: o plano nomeia os comandos canonicos `npm test`, `npm run lint`, `npm run format:check`, `npm run typecheck` e `npm run build`, mas executa por padrao apenas os checks focados de Markdown, links e bootstrap de task generation porque a slice nao altera comportamento do pacote. ✅
- **npm package surface / release impact**: nao ha impacto de release esperado alem de tornar `RTM-010` auditavel como governanca executavel. ✅

**Constitution Check result**: PASS — nenhuma violacao encontrada.

_Post-Phase 1 re-check_: o design permanece aderente porque continua sem surface publica nova, sem alteracao de schema e sem ampliar o escopo alem de governanca documental e tooling. ✅

## Project Structure

### Documentation (this feature)

```text
specs/018-external-table-policy/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── checklists/
└── tasks.md
```

### Source Code (repository root)

```text
.github/
└── copilot-instructions.md

docs/
└── roadmap/
    ├── politica-tabelas-externas.md
    ├── proximas-iteracoes-recomendadas.md
    ├── criterios-promocao.md
    ├── rtm-cobertura-oficial.md
    └── portal-documentos-vigentes.md

specs/
└── 018-external-table-policy/
    ├── spec.md
    ├── plan.md
    ├── research.md
    ├── data-model.md
    └── quickstart.md
```

**Structure Decision**: manter a feature como um slice de governanca documental em torno de [docs/roadmap/politica-tabelas-externas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/politica-tabelas-externas.md). O trabalho implementavel se organiza em tres passos explicitos: atualizar o artefato canonico da politica, alinhar as referencias de roadmap que sustentam `RTM-010`, e registrar nos artefatos locais da spec apenas a pesquisa, o modelo conceitual e o quickstart operacional necessarios para a execucao e a geracao de tasks.

## Complexity Tracking

Nenhuma violacao da constituicao precisa ser justificada nesta fase.
