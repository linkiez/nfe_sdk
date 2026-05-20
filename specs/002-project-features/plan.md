# Implementation Plan: Especificacao das Features do Projeto

**Branch**: `002-project-features` | **Date**: 2026-05-16 | **Spec**: [/home/linkiez/Projetos/nfe_sdk/specs/002-project-features/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/002-project-features/spec.md)

**Input**: Feature specification from `/specs/002-project-features/spec.md`

## Summary

Consolidar um catalogo rastreavel das features do projeto com foco em capacidades visiveis ao usuario do SDK, mantendo `docs/capacidades-sdk.md` como fonte canonica, usando granularidade hibrida para evitar inflacao do catalogo e preservando esta etapa como trabalho estritamente documental, sem nova superficie estruturada obrigatoria para consumo automatizado.

## Technical Context

**Language/Version**: TypeScript 5.x on Node.js >= 18 para o repositorio; Markdown para os artefatos desta feature

**Primary Dependencies**: TypeScript, Jest, ESLint, Prettier, xsd2ts, dossies existentes em `docs/`

**Storage**: Arquivos Markdown em `docs/` e `specs/002-project-features/`

**Testing**: Validacao documental focada com verificacoes de consistencia e, se codigo mantido for tocado, `npm run lint`, `npm run format:check`, `npm run typecheck` e `npm test`

**Target Platform**: Ambiente local Linux e CI para pacote npm ESM

**Project Type**: Pacote npm ESM com gerador de artefatos TypeScript derivados de XSD

**Performance Goals**: Permitir que um integrador identifique cobertura principal do SDK em menos de 5 minutos e que revisoes ocorram via diff normal de Markdown

**Constraints**: Sem alterar entrypoints do pacote; sem criar arquivo estruturado adicional obrigatorio; sem mudar pipeline de geracao nesta fase; detalhes NFC-e por UF permanecem em matriz auxiliar

**Scale/Scope**: Um catalogo principal em `docs/capacidades-sdk.md`, navegacao consolidada em `docs/index.md`, alinhamento de dossies por dominio e referencia auxiliar para NFC-e por UF

**Knowledge Sources**: README do repositorio, superficie publicada em `src/`, dossies consolidados em `docs/`, spec clarificada desta feature e fontes oficiais ja registradas no repositorio; referencias secundarias apenas como complemento nao normativo quando necessario

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Post-design re-check: PASS.

- ESM-only package impact is documented: esta feature nao altera imports, exports ou entrypoints publicados; apenas formaliza entendimento e navegacao das capacidades do projeto.
- Affected schema families and normalization rules are identified as referenced scope only: o catalogo cobre geracao, normalizacao, compatibilidade e dominios fiscais, mas nao altera identificadores emitidos nem layout de arquivos gerados nesta fase.
- Primary normative sources are identified: a evidencia principal vem do README, dos artefatos em `src/` e dos dossies em `docs/`; fontes oficiais previamente consolidadas seguem separadas de referencias secundarias.
- Handwritten versus generated boundaries are explicit: a implementacao desta feature se limita a `docs/`, `specs/002-project-features/` e referencia em `.github/copilot-instructions.md`, sem editar `src/` gerado nem `tools/`.
- Focused validation commands are defined: verificacoes de consistencia documental, `find specs/002-project-features -maxdepth 2 -type f | sort`, e baseline de `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test` apenas se codigo mantido ou metadata for alterado.
- Release impact on the npm package surface is captured as none for this phase; qualquer risco breaking futuro permanece apenas registrado como backlog ou nota de compatibilidade.

## Project Structure

### Documentation (this feature)

```text
specs/002-project-features/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── feature-catalog-deliverables.md
└── tasks.md
```

### Source Code (repository root)

```text
docs/
├── capacidades-sdk.md
├── index.md
├── nfe/
├── nfce/
├── manifestacao-destinatario/
└── _meta/

specs/
├── 001-research-sefaz-docs/
└── 002-project-features/

src/
├── classes/
├── enums/
├── interfaces/
├── types/
└── manifest.json

tools/
├── generate.ts
└── official-docs/

xsd/
```

**Structure Decision**: Manter a estrutura atual de pacote unico. Esta feature atua somente sobre artefatos documentais, com `docs/capacidades-sdk.md` como catalogo canonico, `docs/index.md` como navegacao, anexos do roadmap como evidencia e `docs/roadmap/ufs-ambientes.md` como detalhamento auxiliar por UF.

## Complexity Tracking

Nenhuma violacao da constituicao precisa ser justificada nesta fase.
