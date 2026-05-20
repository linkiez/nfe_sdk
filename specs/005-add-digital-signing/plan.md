# Implementation Plan: Add Digital Signing

**Branch**: `005-add-digital-signing` | **Date**: 2026-05-18 | **Spec**: [/home/linkiez/Projetos/nfe_sdk/specs/005-add-digital-signing/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/005-add-digital-signing/spec.md)

**Input**: Feature specification from `/specs/005-add-digital-signing/spec.md`

## Summary

Adicionar o primeiro slice de assinatura digital do SDK acima da camada canonica entregue na feature 004, preservando o pacote ESM com import raiz como superficie publica principal. A implementacao deve preparar um contexto reutilizavel de assinatura a partir de certificado A1, assinar XML nao assinado de `NFe`, verificar localmente a assinatura antes do retorno e manter `enviNFe`, eventos, NFC-e, transporte e autorizacao fora do escopo desta fase.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript 6.x em Node.js >= 18.18; Markdown para os artefatos de planejamento

**Primary Dependencies**: TypeScript, Jest, ESLint, Prettier, tsx, xsd2ts, alem de uma dependencia dedicada para PKCS#12/A1 e outra para XMLDSig nesta feature. A selecao deve priorizar bibliotecas com manutencao ativa, suporte comprovado a Node.js ESM, API compativel com TypeScript estrito e capacidade de operar sem exigir transporte SOAP ou runtime externo fora do processo Node.js.

**Storage**: Arquivos do pacote em `src/`, `tests/`, `tools/`, `xsd/`, `package.json` e `specs/005-add-digital-signing/`

**Testing**: Jest para testes de contrato, integracao e unidade; validacao com `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball`

**Target Platform**: Linux local e CI para pacote npm ESM consumido por Node.js

**Project Type**: Pacote npm ESM com pipeline gerador derivado de XSD e camada manual incremental para operacoes fiscais

**Performance Goals**: Assinar e verificar localmente uma `NFe` pequena dentro de latencia adequada para uso interativo de desenvolvimento; manter o contexto reutilizavel para evitar reprocessamento de certificado a cada chamada; preservar previsibilidade do XML assinado para regressao automatizada

**Constraints**: Sem transporte SOAP, autorizacao real, assinatura de eventos, assinatura de `enviNFe` ou cobertura NFC-e nesta fase; sem promover subpaths a contrato principal; sem expor material sensivel do certificado no contrato publico; manter separacao entre codigo manual e inventario gerado; preservar compatibilidade additive sobre as features 003 e 004

**Scale/Scope**: Slice inicial restrito a `NFe` assinada da familia `PL_010c_NT2022_002v1.30`, com contexto A1 reutilizavel, operacao publica XML-in/XML-out, verificacao local obrigatoria e evidencias reutilizaveis de regressao

**Knowledge Sources**: Fontes primarias: `docs/roadmap/ROADMAP.md`, `xsd/PL_010c_NT2022_002v1.30/leiauteNFe_v4.00.xsd`, `xsd/PL_010c_NT2022_002v1.30/nfe_v4.00.xsd`, `xsd/PL_010c_NT2022_002v1.30/xmldsig-core-schema_v1.01.xsd`, `docs/_sources/markdown/official/sefaznet.ac.gov.br/nfe/duvidas-3b87d3bdaf.md`, `package.json`, `src/index.ts`, `src/public-contract.ts`, `specs/005-add-digital-signing/spec.md`, `.specify/memory/constitution.md`; fontes secundarias: `docs/_sources/markdown/official/extracted/www.nfe.fazenda.gov.br/portal/PL_004/Alteração de Schemas PL_004.md`; lacunas de proveniencia: os detalhes finais do perfil criptografico e dos algoritmos concretos da implementacao serao confirmados na execucao tecnica mantendo os schemas e fontes oficiais como base normativa

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- ESM-only package impact is documented, including affected entrypoints, exports, and any
  compatibility or migration notes.
- Affected schema families and normalization rules are identified, with explicit note when
  emitted identifiers, shapes, or file layout may change.
- Primary normative sources are identified for any domain-driven conclusion, and approved
  secondary references are listed separately when they supplement a source gap.
- The plan separates handwritten source boundaries from generated output boundaries and
  lists any strict-type exceptions that require justification.
- Focused validation commands are listed for Jest, lint, format, and type or build
  verification, plus regeneration commands when generated output changes.
- Any release or publishing impact on the npm package surface is captured before design is
  considered complete.

Post-design re-check: PASS.

- ESM-only package impact is documented: a capacidade de assinatura entra de forma additive pelo import raiz e preserva `package.json#exports["."]` como fonte normativa do contrato publicado.
- Affected schema families and normalization rules are identified: a feature permanece ancorada em `PL_010c_NT2022_002v1.30` e adiciona a preocupacao com `xmldsig-core-schema_v1.01.xsd`, sem reabrir a normalizacao da camada canonica entregue na fase anterior.
- Primary normative sources are identified: roadmap, schemas da familia `PL_010c_NT2022_002v1.30`, schema XMLDSig e FAQ oficial sobre validade juridica e uso de certificado A1 sustentam as decisoes desta fase; a nota extraida sobre alteracao de schema de assinatura permanece secundaria.
- Handwritten versus generated boundaries are explicit: a nova logica de assinatura ficara em superficie manual sob `src/`, enquanto `src/classes`, `src/interfaces`, `src/types`, `src/enums` e `xsd/` permanecem como inventario gerado ou normativo de apoio.
- Focused validation commands are defined: `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball` compoem o gate minimo; `npm run generate` fica reservado apenas para eventual necessidade excepcional de sincronizacao com a arvore gerada.
- Any release or publishing impact on the npm package surface is captured: a mudanca esperada e additive no import raiz, sem expectativa de quebra; qualquer desvio exigira nota de migracao e revisao semver.

## Project Structure

### Documentation (this feature)

```text
specs/005-add-digital-signing/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
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
├── config/
├── contract/
├── fixtures/
├── integration/
└── unit/

tools/
xsd/
```

**Structure Decision**: Manter a topologia de pacote unico e ampliar a camada manual existente sob `src/canonical/` com um slice de assinatura digital orientado a root facade, contexto reutilizavel, assinatura XML de `NFe` e verificacao local, sem promover a arvore gerada como contrato publico principal.

## Complexity Tracking

Nenhuma violacao da constituicao precisa ser justificada nesta fase.
