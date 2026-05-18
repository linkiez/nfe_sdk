# Implementation Plan: Add NFe Operational MVP

**Branch**: `007-nfe-operational-mvp` | **Date**: 2026-05-18 | **Spec**: [/home/linkiez/Projetos/nfe_sdk/specs/007-nfe-operational-mvp/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/007-nfe-operational-mvp/spec.md)

**Input**: Feature specification from `/specs/007-nfe-operational-mvp/spec.md`

## Summary

Entregar o primeiro MVP operacional de NFe em homologacao como ampliacao additive do import raiz do pacote, escondendo serializacao XML, assinatura digital e transporte SOAP atras de facades orientadas a aplicacao. A implementacao deve aceitar dados canonicos para autorizacao de NFe unica ou em lote, expor consultas estruturadas de status do servico e situacao do documento por chave de acesso, suportar inutilizacao, cancelamento e carta de correcao como operacoes obrigatorias do slice e reaproveitar a taxonomia de transporte e as camadas manuais ja estabilizadas nas features 004, 005 e 006.

## Technical Context

**Language/Version**: TypeScript 6.x em Node.js >= 18.18; Markdown para artefatos de planejamento

**Primary Dependencies**: TypeScript, Jest, ESLint, Prettier, tsx, xsd2ts, `@xmldom/xmldom`, APIs nativas `fetch` e `AbortController` do Node.js 18, e as camadas manuais ja existentes em `src/canonical/nfe/`, `src/canonical/signing/` e `src/canonical/transport/`

**Storage**: Arquivos do pacote em `src/`, `tests/`, `docs/`, `specs/007-nfe-operational-mvp/` e metadados em `package.json`

**Testing**: Jest para testes de contrato, integracao e unidade; validacao com `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball`

**Target Platform**: Linux local e CI para pacote npm ESM consumido por Node.js

**Project Type**: Pacote npm ESM com arvore gerada derivada de XSD e camadas manuais incrementais para facades operacionais

**Performance Goals**: Orquestrar cada operacao do MVP dentro do timeout controlado pelo chamador, manter montagem e classificacao deterministicas em memoria, evitar polling automatico de recibo no slice inicial e preservar evidencias operacionais suficientes para diagnostico sem inspeção manual de XML cru

**Constraints**: O import raiz continua como unica superficie runtime estavel; a entrada publica inicial usa dados canonicos em vez de XML bruto; homologacao e o unico ambiente suportado neste slice; a consulta inicial de situacao usa apenas chave de acesso; a autorizacao deve aceitar NFe unica e lote; inutilizacao, cancelamento e carta de correcao sao obrigatorios; producao, variacoes por UF, contingencias especiais, polling automatico de recibo e cobertura operacional completa permanecem deferidos

**Scale/Scope**: Seis operacoes publicas additive no import raiz, um ambiente suportado, expansao incremental do catalogo nacional compartilhado para os servicos do MVP, reutilizacao da familia `PL_010c_NT2022_002v1.30` e das familias de eventos e consultas ja presentes no inventario gerado, e suites focadas em contrato root, autorizacao, consultas e manutencoes operacionais prioritarias

**Knowledge Sources**: Fontes primarias: `docs/roadmap-implantacao.md`, `docs/nfe/emissao-nfe.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/Manual de Orientacao ao Contribuinte - MOC - versao 7.0 - NF-e e NFC-e.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/webservices-24c8f3a1fb.md`, `package.json`, `src/index.ts`, `src/public-contract.ts`, `src/canonical/shared/contracts.ts`, `specs/007-nfe-operational-mvp/spec.md`, `.specify/memory/constitution.md`, `xsd/PL_010c_NT2022_002v1.30/`, `xsd/ConSitNFe/`, `xsd/Evento_Canc_PL_v1.01/` e `xsd/Evento_CCe_PL_v1.01/`; referencias secundarias aprovadas: `docs/capacidades-sdk.md`, `docs/nfe/capacidades-sdk.md` e repositorios pre-aprovados pela constituicao quando houver lacuna operacional; gaps de proveniencia deferidos: mapeamento completo por UF, contingencias estaduais e estrategia de polling de recibo continuam fora do recorte inicial

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- ESM-only package impact is documented, including affected entrypoints, exports, and any compatibility or migration notes.
- Affected schema families and normalization rules are identified, with explicit note when emitted identifiers, shapes, or file layout may change.
- Primary normative sources are identified for any domain-driven conclusion, and approved secondary references are listed separately when they supplement a source gap.
- The plan separates handwritten source boundaries from generated output boundaries and lists any strict-type exceptions that require justification.
- Focused validation commands are listed for Jest, lint, format, and type or build verification, plus regeneration commands when generated output changes.
- Any release or publishing impact on the npm package surface is captured before design is considered complete.

Post-design re-check: PASS.

- ESM-only package impact is documented: o MVP operacional entra de forma additive pelo import raiz e preserva `package.json#exports["."]` como fonte normativa do contrato publicado.
- Affected schema families and normalization rules are identified: a feature continua ancorada na familia `PL_010c_NT2022_002v1.30` para NFe e `enviNFe`, amplia o uso das familias de consulta e eventos ja presentes no inventario e nao reabre a estrategia de normalizacao do output gerado, salvo novas fachadas manuais e contratos estruturados.
- Primary normative sources are identified: roadmap, MOC 7.0, relacao oficial de web services e os XSD internalizados sustentam operacoes, limites e formas de request e response; os dossies editoriais internos permanecem explicitamente secundarios.
- Handwritten versus generated boundaries are explicit: a nova orquestracao ficara em camadas manuais sob `src/canonical/nfe/`, `src/canonical/facade/` e `src/canonical/transport/`, enquanto `src/classes/`, `src/interfaces/`, `src/types/`, `src/enums/` e `xsd/` permanecem como inventario gerado ou normativo.
- Focused validation commands are defined: `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball` compoem o gate minimo; `npm run generate` permanece reservado a qualquer mudanca excepcional na arvore gerada.
- Release and package-surface impact is captured: a expectativa e de ampliacao additive com novas funcoes root para o MVP operacional; qualquer impacto breaking em nomes exportados, formatos de retorno ou semantica de lote devera registrar nota de migracao e impacto semver proprio.

## Project Structure

### Documentation (this feature)

```text
specs/007-nfe-operational-mvp/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── public-nfe-operational-facade.md
└── tasks.md
```

### Source Code (repository root)

```text
package.json
README.md
jest.config.ts
tsconfig.json
tsconfig.build.json

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
    ├── shared/
    ├── signing/
    └── transport/

tests/
├── config/
├── contract/
├── fixtures/
│   ├── signing/
│   └── transport/
├── integration/
└── unit/

docs/
├── nfe/
└── notas-fiscais/
```

**Structure Decision**: Manter a topologia de pacote unico e ampliar a camada manual existente. As novas facades root ficarao em `src/canonical/facade/`; a orquestracao operacional, os mapeamentos de entrada e saida e os helpers de composicao ficarao em `src/canonical/nfe/`; a infraestrutura de assinatura e transporte existente sera reutilizada com expansoes pontuais em `src/canonical/signing/` e `src/canonical/transport/`; a arvore gerada segue como inventario interno e fonte normativa, sem promovê-la a contrato operacional principal.

## Complexity Tracking

Nenhuma violacao da constituicao precisa ser justificada nesta fase.
