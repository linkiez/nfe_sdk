# Implementation Plan: Roadmap Gap Audit

**Branch**: `011-generic-event-mvp` | **Date**: 2026-05-19 | **Spec**: [/home/linkiez/Projetos/nfe_sdk/specs/011-roadmap-gap-audit/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/011-roadmap-gap-audit/spec.md)

**Input**: Feature specification from `/specs/011-roadmap-gap-audit/spec.md`

## Summary

Entregar uma auditoria documental rastreavel que compare formalmente as specs 001 a 008 com o acervo oficial internalizado do projeto, use 009 e 010 apenas como contexto de nao-duplicacao e gere tres artefatos coesos em `specs/011-roadmap-gap-audit/`: matriz de cobertura, relatorio de gaps e backlog priorizado. O plano favorece impacto operacional e risco normativo sobre baixo esforco, preserva fronteiras de proveniencia e evita promover conclusoes transitórias diretamente para `docs/` antes da estabilizacao editorial.

## Technical Context

**Language/Version**: Markdown para artefatos de planejamento; contexto do repositorio em TypeScript 6.x sobre Node.js >= 18.18

**Primary Dependencies**: Speckit templates e scripts locais, `package.json` do pacote ESM, corpus oficial internalizado sob `docs/_sources/markdown/official/`, registro de fontes em `docs/_meta/source-registry.md`, roteiro editorial em `docs/ROADMAP.md`

**Storage**: N/A em runtime; artefatos versionados em `specs/011-roadmap-gap-audit/`, com leitura de apoio em `docs/` e specs anteriores

**Testing**: Validacao focada por formatacao e consistencia documental com `npx prettier --check specs/011-roadmap-gap-audit/*.md specs/011-roadmap-gap-audit/contracts/*.md .github/copilot-instructions.md`; guardrails mais amplos disponiveis no repositorio com `npm run lint`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball`

**Target Platform**: Linux local e CI do repositorio; consumo humano por mantenedores e revisores do roadmap

**Project Type**: Pacote npm ESM em TypeScript com feature documental de auditoria e planejamento

**Performance Goals**: Produzir tres artefatos auditaveis que permitam localizar cobertura, gap e prioridade em menos de 10 minutos sem reler todo o corpus oficial bruto; zero impacto no runtime publicado do pacote

**Constraints**: Escopo formal limitado as specs 001 a 008; specs 009 e 010 entram apenas como contexto de nao-duplicacao; artefatos principais permanecem inicialmente em `specs/011-roadmap-gap-audit/`; a auditoria deve separar gaps de runtime, documentais, estaduais, de dependencia externa e de proveniencia; nenhuma mudanca em `src/`, `package.json#exports` ou familias geradas

**Scale/Scope**: Oito specs auditadas formalmente, duas specs usadas como contexto auxiliar, tres artefatos finais, um contrato documental interno, e cruzamento com o corpus oficial nacional e estadual ja internalizado

**Knowledge Sources**: Fontes primarias: `specs/001-research-sefaz-docs/spec.md`, `specs/002-project-features/spec.md`, `specs/003-public-package-contract/spec.md`, `specs/004-iniciar-sdk/spec.md`, `specs/005-add-digital-signing/spec.md`, `specs/006-add-soap-transport/spec.md`, `specs/007-nfe-operational-mvp/spec.md`, `specs/008-recipient-dfe-mvp/spec.md`, `docs/ROADMAP.md`, `docs/_meta/source-registry.md`, `docs/documentos-oficiais-portal-nfe.md`, `docs/matriz-tematica-roadmap.md` e `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/`; contexto auxiliar: `specs/009-generic-event-mvp/spec.md` e `specs/010-nfce-national-core/spec.md`; gaps de proveniencia remanescentes: conversoes oficiais com falha registradas para CE, SE, RJ e AP, alem de superfícies oficiais com acesso restrito ou cobertura estadual incompleta

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- ESM-only package impact is documented: a feature nao altera `package.json#exports["."]`, `dist/`, entrypoints ou compatibilidade ESM; o impacto e exclusivamente documental e de planejamento.
- Affected schema families and normalization rules are identified: a auditoria cruza temas que afetam NFe, NFC-e, Manifestacao do Destinatario, eventos, contingencia e artefatos auxiliares, mas nao altera identificadores emitidos, shape de runtime nem layout da arvore gerada nesta fase.
- Primary normative sources are identified: o plano usa corpus oficial internalizado, roadmap e registro de fontes como base normativa; referencias posteriores 009 e 010 ficam explicitamente separadas como contexto auxiliar de nao-duplicacao.
- Handwritten versus generated boundaries are explicit: o trabalho fica confinado a `specs/011-roadmap-gap-audit/` e `.github/copilot-instructions.md`; `src/`, `xsd/`, `tools/` e o output gerado permanecem fora do recorte.
- Focused validation commands are defined: `npx prettier --check specs/011-roadmap-gap-audit/*.md specs/011-roadmap-gap-audit/contracts/*.md .github/copilot-instructions.md`; comandos amplos disponiveis se a feature evoluir para impactar fluxo geral: `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, `npm run validate:tarball`; `npm run generate` nao e necessario nesta fase.
- Release and publishing impact is captured: nao ha alteracao no pacote publicado, em exports, em tipos publicos nem em distribuicao; qualquer promocao futura dos artefatos para `docs/` permanece editorial e posterior.

Post-design re-check: PASS.

- O design manteve a feature restrita a artefatos em `specs/011-roadmap-gap-audit/`, sem impacto no pacote npm publicado.
- O contrato documental separa matriz de cobertura, relatorio de gaps e backlog priorizado, preservando rastreabilidade e sem tocar a arvore gerada.
- As fontes primarias e os gaps de proveniencia permaneceram explicitamente delimitados, inclusive falhas de conversao e fontes estaduais incompletas.
- O plano preserva as fronteiras entre conclusao documental, possivel backlog futuro de runtime e dependencias operacionais externas.

## Project Structure

### Documentation (this feature)

```text
specs/011-roadmap-gap-audit/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── audit-artifacts-contract.md
└── tasks.md
```

### Source Code (repository root)

```text
package.json
.github/
└── copilot-instructions.md

specs/
├── 001-research-sefaz-docs/
├── 002-project-features/
├── 003-public-package-contract/
├── 004-iniciar-sdk/
├── 005-add-digital-signing/
├── 006-add-soap-transport/
├── 007-nfe-operational-mvp/
├── 008-recipient-dfe-mvp/
├── 009-generic-event-mvp/
├── 010-nfce-national-core/
└── 011-roadmap-gap-audit/

docs/
├── ROADMAP.md
├── matriz-tematica-roadmap.md
├── documentos-oficiais-portal-nfe.md
├── _meta/
│   ├── source-registry.md
│   ├── official-download-manifest.json
│   └── official-conversion-manifest.json
└── _sources/
    └── markdown/
        └── official/

src/
├── canonical/
├── public-contract.ts
└── index.ts

tests/
├── contract/
├── integration/
└── unit/
```

**Structure Decision**: Esta e uma feature documental de auditoria. O trabalho principal fica isolado em `specs/011-roadmap-gap-audit/`, lendo specs anteriores e o corpus oficial sob `docs/` como entrada, sem alterar `src/` nem a superficie publicada do pacote. O unico arquivo fora do diretorio da feature atualizado por este plano e `.github/copilot-instructions.md`, para apontar o contexto corrente do Speckit.

## Complexity Tracking

Nenhuma violacao da constituicao precisa ser justificada nesta fase.
