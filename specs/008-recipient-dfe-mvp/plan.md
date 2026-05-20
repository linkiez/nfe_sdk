# Implementation Plan: Recipient DFe MVP

**Branch**: `008-next-roadmap-slice` | **Date**: 2026-05-18 | **Spec**: [/home/linkiez/Projetos/nfe_sdk/specs/008-recipient-dfe-mvp/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/008-recipient-dfe-mvp/spec.md)

**Input**: Feature specification from `/specs/008-recipient-dfe-mvp/spec.md`

## Summary

Entregar o primeiro MVP do lado do destinatario como ampliacao additive do import raiz do pacote, em homologacao apenas, combinando distribuicao DFe via `distNSU` e Manifestacao do Destinatario para os quatro eventos basicos. A implementacao deve manter o fluxo nacional no Ambiente Nacional, devolver envelopes estruturados que distingam resumo e documento completo, preservar a separacao entre manifestacao e download posterior, explicitar dependencias externas como certificado digital e reutilizar as camadas manuais de assinatura e transporte ja estabilizadas nas features anteriores.

## Technical Context

**Language/Version**: TypeScript 6.x em Node.js >= 18.18; Markdown para artefatos de planejamento

**Primary Dependencies**: TypeScript, Jest, ESLint, Prettier, tsx, xsd2ts, `@xmldom/xmldom`, `xml-crypto`, `node-forge` e as camadas manuais existentes em `src/canonical/`, especialmente `transport/`, `signing/` e facades root

**Storage**: Arquivos do pacote em `src/`, `tests/`, `docs/`, `specs/008-recipient-dfe-mvp/` e metadados em `package.json`

**Testing**: Jest para testes de contrato, integracao e unidade; validacao com `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball`

**Target Platform**: Linux local e CI para pacote npm ESM consumido por Node.js

**Project Type**: Pacote npm ESM com arvore gerada derivada de XSD e camadas manuais incrementais para facades operacionais

**Performance Goals**: Orquestrar distribuicao e manifestacao dentro do timeout controlado pelo chamador, manter classificacao e montagem deterministicas em memoria, descompactar `docZip` sem exigir parsing bruto no contrato publico e evitar polling agressivo que aproxime consumo indevido

**Constraints**: O import raiz continua como unica superficie runtime estavel; o slice cobre apenas homologacao; distribuicao fica limitada a `distNSU`; manifestacao cobre apenas `210200`, `210210`, `210220` e `210240`; PJ e PF entram no recorte; download posterior permanece separado do registro do evento; producao, `consNSU`, `consChNFe`, eventos genericos, EPEC e variacoes por UF permanecem deferidos

**Scale/Scope**: Duas familias publicas additive no import raiz, um ambiente suportado, um modo de distribuicao suportado, quatro eventos basicos de manifestacao, envelopes tipados para itens distribuidos, expansao do catalogo nacional compartilhado e suites focadas em contrato root, distribuicao e manifestacao homologadas

**Knowledge Sources**: Fontes primarias: `docs/ROADMAP.md`, `docs/roadmap/rtm-cobertura-oficial.md`, `docs/roadmap/topicos-oficiais.md`, `docs/_meta/source-registry.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/Manual de Orientação ao Contribuinte - MOC - versão 7.0 - NF-e e NFC-e.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/webservices-9bfd6ee423.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/disponibilidade-30f1e6a455.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/manifestacaodestinatario-8ed6ca3f3f.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/perguntasfrequentes-329052b510.md`, `package.json`, `src/index.ts`, `src/public-contract.ts`, `specs/008-recipient-dfe-mvp/spec.md`, `specs/008-recipient-dfe-mvp/research.md` e `.specify/memory/constitution.md`; referencias secundarias aprovadas: apenas repositórios pre-aprovados pela constituicao se surgir lacuna operacional especifica; gaps de proveniencia deferidos: producao, políticas mais amplas de retry, contratos de `consNSU` ou `consChNFe` e automacao de credenciamento permanecem fora do recorte

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- ESM-only package impact is documented, including affected entrypoints, exports, and any compatibility or migration notes.
- Affected schema families and normalization rules are identified, with explicit note when emitted identifiers, shapes, or file layout may change.
- Primary normative sources are identified for any domain-driven conclusion, and approved secondary references are listed separately when they supplement a source gap.
- The plan separates handwritten source boundaries from generated output boundaries and lists any strict-type exceptions that require justification.
- Focused validation commands are listed for Jest, lint, format, and type or build verification, plus regeneration commands when generated output changes.
- Any release or publishing impact on the npm package surface is captured before design is considered complete.

Post-design re-check: PASS.

- ESM-only package impact is documented: o MVP do destinatario entra de forma additive pelo import raiz e preserva `package.json#exports["."]` como fonte normativa do contrato publicado.
- Affected schema families and normalization rules are identified: a feature reutiliza a família `PL_NFeDistDFe_103` para distribuicao DFe e a família `Evento_ManifestaDest_PL_v1.01` para os eventos basicos, sem reabrir a estrategia de normalizacao da arvore gerada, salvo novas fachadas e envelopes manuais do contrato root.
- Primary normative sources are identified: roadmap, MOC 7.0, páginas nacionais convertidas, relacao oficial de web services e dossies internos com proveniencia sustentam o recorte e as fronteiras operacionais; referencias secundarias permanecem apenas complementares.
- Handwritten versus generated boundaries are explicit: a nova orquestracao ficara em camadas manuais sob `src/canonical/recipient/` e `src/canonical/facade/`, com possiveis expansoes pontuais em `src/canonical/transport/`; `src/classes/`, `src/interfaces/`, `src/types/`, `src/enums/` e `xsd/` permanecem como inventario gerado ou normativo.
- Focused validation commands are defined: `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball` compoem o gate minimo; `npm run generate` permanece reservado a qualquer mudanca necessaria na arvore gerada.
- Release and package-surface impact is captured: a expectativa e de ampliacao additive com novas funcoes root e novos formatos de resultado do lado do destinatario; qualquer impacto breaking em nomes exportados, envelopes ou semantica de continuidade exigira nota de migracao e analise semver propria.

## Project Structure

### Documentation (this feature)

```text
specs/008-recipient-dfe-mvp/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── public-recipient-dfe-facade.md
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
├── contract/
├── fixtures/
├── integration/
└── unit/

docs/
├── _meta/
├── _sources/
└── manifestacao-destinatario/
```

**Structure Decision**: Manter a topologia de pacote unico e ampliar a camada manual existente. As novas facades root do destinatario ficarao em `src/canonical/facade/`; a orquestracao de distribuicao, os envelopes de resultado e os fluxos de manifestacao serao introduzidos em uma camada manual dedicada sob `src/canonical/recipient/`, com fronteira explicita de ownership; a infraestrutura de assinatura e transporte existente sera reutilizada com expansoes pontuais em `src/canonical/signing/` e `src/canonical/transport/`; a arvore gerada segue como inventario interno e fonte normativa, sem promovê-la a contrato operacional principal.

## Complexity Tracking

Nenhuma violacao da constituicao precisa ser justificada nesta fase.
