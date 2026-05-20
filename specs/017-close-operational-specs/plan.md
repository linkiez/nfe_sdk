# Implementation Plan: Close Operational Specs

**Branch**: `017-close-operational-specs` | **Date**: 2026-05-20 | **Spec**: [/home/linkiez/Projetos/nfe_sdk/specs/017-close-operational-specs/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/017-close-operational-specs/spec.md)

**Input**: Feature specification from `/specs/017-close-operational-specs/spec.md`

## Summary

Reconciliar formalmente o status editorial das specs `007` e `010` sem abrir backlog funcional novo. O plano primeiro audita o delta entre os artefatos de origem e o roadmap, depois confirma ou consolida a evidencia canonica de fechamento de `010` e `007` apenas quando necessario, e por ultimo atualiza o roadmap para refletir o estado real de cada spec, mantendo qualquer falha remanescente como bloqueio local documentado.

## Technical Context

**Language/Version**: TypeScript 6.x em Node.js >= 18.18; Markdown para artefatos de roadmap e spec

**Primary Dependencies**: npm package ESM, TypeScript, Jest, ESLint, Prettier, Spec Kit, scripts canonicos em `package.json`

**Storage**: N/A em runtime; trabalho limitado a arquivos em `specs/`, `docs/roadmap/`, `tests/` e possivelmente `.gitkeep`

**Testing**: Jest e gate completo do pacote com `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball`

**Target Platform**: Linux local e CI para pacote npm ESM consumido por Node.js

**Project Type**: Biblioteca npm ESM com inventario gerado de XSD e camadas manuais de runtime e documentacao

**Performance Goals**: Nenhuma meta nova de performance; o objetivo e nao introduzir regressao funcional nem alargar o tempo do gate alem do fluxo completo ja canonico do pacote

**Constraints**: Nao alterar `exports`, facades publicas, familias de schema, artefatos gerados ou backlog funcional; tratar falha de `007` como defeito local; tratar `010` como verificacao de redundancia ou confirmacao de scaffold ja satisfeito antes de qualquer recriacao

**Scale/Scope**: Slice pequeno de fechamento sobre 2 specs, 2 registros do roadmap e o minimo de evidencias auxiliares necessario para auditoria de status

**Knowledge Sources**: Fontes primarias: `docs/roadmap/proximas-iteracoes-recomendadas.md`, `docs/roadmap/specs-pendencias-abertas.md`, `docs/roadmap/checklist-fechamento-007-010.md`, `docs/roadmap/specs-implementacao.md`, `docs/roadmap/ROADMAP.md`, `specs/007-nfe-operational-mvp/tasks.md`, `specs/010-nfce-national-core/tasks.md`; referencias secundarias: nenhuma necessaria para a reconciliacao; gap conhecido: o roadmap ainda pode carregar status stale mesmo quando os artefatos de origem ja foram fechados

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **ESM-only package impact**: nao ha mudanca planejada em import raiz, `exports`, entrypoints ou identificadores publicados. O slice so confirma fechamento formal de specs existentes. ✅
- **Affected schema families and normalization**: nenhuma familia de schema, normalizacao ou layout gerado sera alterado. Qualquer edicao em `tests/fixtures/nfce/.gitkeep` e apenas scaffolding. ✅
- **Primary sources and provenance**: todas as decisoes dependem de fontes internas normativas do proprio roadmap e das tasks oficiais das specs `007` e `010`; nenhuma fonte secundaria e necessaria. ✅
- **Source boundaries**: o trabalho fica restrito a documentacao, registro de evidencias e scaffolding residual, sem tocar arvore gerada nem abrir excecoes de strict typing. ✅
- **Validation commands**: o gate obrigatorio de `007` so precisa ser reexecutado se a evidencia de origem estiver ausente, stale ou nao reproduzivel; `010` exige primeiro verificacao/registro da redundancia editorial. ✅
- **npm package surface / release impact**: nao existe impacto de release esperado alem da remocao de backlog residual artificial do roadmap. ✅

**Constitution Check result**: PASS — nenhuma violacao encontrada.

_Post-Phase 1 re-check_: o design continua aderente a todas as restricoes: nao ha nova superficie publica, nao ha alteracao de schema, e a rastreabilidade do fechamento residual esta documentada. ✅

## Project Structure

### Documentation (this feature)

```text
specs/017-close-operational-specs/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
└── tasks.md
```

### Source Code (repository root)

```text
package.json
README.md
docs/
└── roadmap/
    ├── checklist-fechamento-007-010.md
    ├── specs-implementacao.md
    ├── specs-pendencias-abertas.md
    └── proximas-iteracoes-recomendadas.md

specs/
├── 007-nfe-operational-mvp/
│   ├── tasks.md
│   ├── quickstart.md
│   └── contracts/
└── 010-nfce-national-core/
    ├── tasks.md
    ├── quickstart.md
    └── contracts/

tests/
├── contract/
├── fixtures/
│   └── nfce/
├── integration/
│   └── nfce/
└── unit/
    └── nfce/
```

**Structure Decision**: manter a topologia de pacote unico e tratar `017` como slice de reconciliacao editorial. O trabalho principal acontece sobre os artefatos das specs `007` e `010`, o checklist do roadmap e os registros editoriais de status; mudancas de codigo produtivo nao fazem parte do plano a menos que a evidencia de origem de `007` precise ser refeita e revele um defeito local real.

## Complexity Tracking

Nenhuma violacao da constituicao precisa ser justificada nesta fase.
