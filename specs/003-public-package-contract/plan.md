# Implementation Plan: Fundacao do Contrato Publico do Pacote

**Branch**: `003-public-package-contract` | **Date**: 2026-05-16 | **Spec**: [/home/linkiez/Projetos/nfe_sdk/specs/003-public-package-contract/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/003-public-package-contract/spec.md)

**Input**: Feature specification from `/specs/003-public-package-contract/spec.md`

## Summary

Redesenhar e estabilizar o import raiz publicado do pacote, alinhando `src/index.ts`, `package.json`/exports, build para `dist/` e o tarball gerado por `npm pack` a um contrato publico minimo explicito. `manifest.json` permanece artefato interno de auditoria e validacao, enquanto README e docs funcionam como explicacao humana do contrato definido normativamente pelo pacote publicado.

## Technical Context

**Language/Version**: TypeScript 6.x em Node.js >= 18.18; Markdown para os artefatos de planejamento

**Primary Dependencies**: TypeScript, Jest, ESLint, Prettier, tsx, xsd2ts

**Storage**: Arquivos do pacote em `src/`, `dist/`, `package.json`, `README.md` e `specs/003-public-package-contract/`

**Testing**: Jest para smoke/contract checks; `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm pack`

**Target Platform**: Linux local e CI para pacote npm ESM

**Project Type**: Pacote npm ESM com pipeline gerador derivado de XSD

**Performance Goals**: Um integrador deve identificar e consumir o import raiz em menos de 5 minutos; o tarball deve ser gerado e validado sem depender do workspace aberto

**Constraints**: Sem promover subpaths a contrato publico; sem tornar `manifest.json` artefato contratual; sem introduzir fluxos fiscais operacionais completos; manter separacao entre codigo mantido e arvore gerada

**Scale/Scope**: Redesenho do import raiz, contrato minimo do pacote, build e empacotamento repetiveis, smoke validation por tarball, documentacao e auditoria de lacunas do manifesto

**Knowledge Sources**: Fontes primarias: `docs/roadmap/ROADMAP.md`, `package.json`, `src/index.ts`, `src/manifest.json`, `README.md`, constituicao em `.specify/memory/constitution.md`; fontes secundarias: nenhuma necessaria nesta fase; lacuna atual: o manifesto ajuda auditoria, mas nao define sozinho o limite do contrato publicado

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Post-design re-check: PASS.

- ESM-only package impact is documented: a feature altera e estabiliza o import raiz publicado, mantendo o pacote como ESM-only e deixando subpaths fora do contrato minimo.
- Affected schema families and normalization rules are identified: a feature nao redefine schemas especificos, mas pode reorganizar a exposicao raiz sobre a arvore gerada e deve registrar qualquer impacto em identificadores ou layout publicado.
- Primary normative sources are identified: `package.json`/exports e o import raiz publicado sao a fonte normativa; roadmap, README, `src/index.ts` e `src/manifest.json` sustentam a leitura humana e de auditoria.
- Handwritten versus generated boundaries are explicit: `src/index.ts`, `package.json`, `README.md` e testes de smoke sao superfícies mantidas; `src/classes`, `src/interfaces`, `src/types`, `src/enums` e `src/manifest.json` permanecem majoritariamente derivados do pipeline.
- Focused validation commands are defined: `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build`, `npm pack`, e smoke validation consumindo o tarball gerado.
- Release impact on the npm package surface is captured: a feature pode redesenhar o import raiz, exigindo nota de compatibilidade interna no plano e avaliacao semver antes de publicacao.

## Project Structure

### Documentation (this feature)

```text
specs/003-public-package-contract/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── public-package-contract.md
└── tasks.md
```

### Source Code (repository root)

```text
package.json
README.md
tsconfig.build.json
jest.config.ts

src/
├── classes/
├── enums/
├── index.ts
├── interfaces/
├── manifest.json
└── types/

dist/
tests/
tools/
xsd/
```

**Structure Decision**: Manter a estrutura atual de pacote unico. Esta feature atua no contrato do pacote e na distribuicao publicada, concentrando o redesenho em `src/index.ts`, `package.json`, `README.md`, testes e artefatos de build, sem mover a arvore gerada para outra topologia nesta fase.

## Complexity Tracking

Nenhuma violacao da constituicao precisa ser justificada nesta fase.
