# Implementation Plan: Inicio do Desenvolvimento Funcional do SDK

**Branch**: `004-iniciar-sdk` | **Date**: 2026-05-18 | **Spec**: [/home/linkiez/Projetos/nfe_sdk/specs/004-iniciar-sdk/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/004-iniciar-sdk/spec.md)

**Input**: Feature specification from `/specs/004-iniciar-sdk/spec.md`

## Summary

Inaugurar a primeira camada funcional do SDK acima da arvore gerada, mantendo o pacote ESM com import raiz como superficie publica principal e adicionando uma facade enxuta para montagem e serializacao de `NFe` e `enviNFe`. A implementacao deve se apoiar na familia `PL_010c_NT2022_002v1.30`, reutilizar os artefatos gerados como fundacao interna, produzir XML deterministico, normalizar `ambiente`, `versao` e identificadores iniciais de lote/documento, e validar o slice com fixtures estruturais e regressao automatizada sem bloquear a entrega em validacao XSD completa nesta fase.

## Technical Context

**Language/Version**: TypeScript 6.x em Node.js >= 18.18; Markdown para os artefatos de planejamento

**Primary Dependencies**: TypeScript, Jest, ESLint, Prettier, tsx, xsd2ts

**Storage**: Arquivos do pacote em `src/`, `tests/`, `tools/`, `xsd/`, `package.json` e `specs/004-iniciar-sdk/`

**Testing**: Jest para contract, unit e integration tests; validacao com `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test` e `npm run build`; `npm run generate` somente quando a implementacao exigir regeneracao ou reconciliacao com a arvore derivada

**Target Platform**: Linux local e CI para pacote npm ESM consumido por Node.js

**Project Type**: Pacote npm ESM com pipeline gerador derivado de XSD e camada funcional manual incremental

**Performance Goals**: XML deterministico para entradas equivalentes; montagem inicial do fluxo `NFe`/`enviNFe` consumivel pelo integrador em menos de 10 minutos usando apenas o import raiz; regressao estrutural reproduzivel em execucoes locais e CI

**Constraints**: Sem assinatura digital, SOAP, autorizacao real ou cobertura multi-documento nesta fase; sem promover subpaths a contrato principal; sem exigir validacao XSD automatizada completa; manter separacao entre codigo manual e arvore gerada; preservar compatibilidade aditiva sobre o contrato minimo da fase 003

**Scale/Scope**: Slice inicial restrito a `NFe` e `enviNFe` da familia `PL_010c_NT2022_002v1.30`, com normalizacao de `ambiente`, `versao` e identificadores iniciais de lote/documento, facade funcional no import raiz, serializacao XML deterministica e fixtures de regressao estrutural

**Knowledge Sources**: Fontes primarias: `docs/roadmap-implantacao.md`, `xsd/PL_010c_NT2022_002v1.30/nfe_v4.00.xsd`, `xsd/PL_010c_NT2022_002v1.30/leiauteNFe_v4.00.xsd`, `src/classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400EnviNFe.ts`, `src/interfaces/PL_010c_NT2022_002v1.30/IPl010CNt2022002V130LeiauteNFeV400EnviNFe.ts`, `package.json`, `src/index.ts`, `src/public-contract.ts`, `specs/004-iniciar-sdk/spec.md`, `.specify/memory/constitution.md`; fontes secundarias: nenhuma necessaria nesta fase; lacunas de proveniencia: a validacao XSD automatizada completa e a chave de acesso completa ficam explicitamente adiadas para backlog posterior

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

Post-design re-check: PASS.

- ESM-only package impact is documented: a nova capacidade entra pelo import raiz do pacote como ampliacao aditiva sobre o contrato minimo estabilizado na fase 003, sem introduzir subpaths publicos como superficie principal.
- Affected schema families and normalization rules are identified: o plano ancora a slice inicial em `PL_010c_NT2022_002v1.30`, com foco em `NFe` e `enviNFe`, e delimita a normalizacao inicial a `ambiente`, `versao` e identificadores de lote/documento.
- Primary normative sources are identified: roadmap, spec ativa, XSDs da familia `PL_010c_NT2022_002v1.30`, package metadata e artefatos gerados rastreados no repositorio sustentam as decisoes desta fase; nao ha dependencia normativa de fontes secundarias.
- Handwritten versus generated boundaries are explicit: a facade, serializacao, normalizacao e fixtures ficam em superfícies mantidas sob `src/` e `tests/`, enquanto `src/classes`, `src/interfaces`, `src/types`, `src/enums` e `xsd/` continuam como inventario gerado ou de origem.
- Focused validation commands are defined: `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test` e `npm run build` formam o gate minimo; `npm run generate` entra apenas se a implementacao demandar sincronizacao com o output gerado.
- Release impact on the npm package surface is captured: a fase e additive por padrao, mantendo `publicPackageContract` e acrescentando a facade funcional no root import; qualquer desvio dessa estrategia exigira revisao semver e nota de migracao.

## Project Structure

### Documentation (this feature)

```text
specs/004-iniciar-sdk/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── public-functional-facade.md
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
├── interfaces/
├── types/
├── manifest.json
├── public-contract.ts
├── index.ts
└── canonical/
  ├── facade/
  ├── nfe/
  ├── serialization/
  └── shared/

tests/
├── contract/
├── fixtures/
├── integration/
└── unit/

tools/
xsd/
```

**Structure Decision**: Manter a topologia de pacote unico e abrir a camada funcional manual sob `src/canonical/`, separando fachada publica, adaptadores de documento, serializacao e regras compartilhadas do inventario gerado. A superficie publicada continua entrando por `src/index.ts`, enquanto a arvore derivada em `src/classes`, `src/interfaces`, `src/types` e `src/enums` permanece como fundacao interna e evidencia de proveniencia.

## Complexity Tracking

Nenhuma violacao da constituicao precisa ser justificada nesta fase.
