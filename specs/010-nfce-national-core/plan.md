# Implementation Plan: NFC-e National Core

**Branch**: `010-nfce-national-core` | **Date**: 2026-05-18 | **Spec**: [/home/linkiez/Projetos/nfe_sdk/specs/010-nfce-national-core/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/010-nfce-national-core/spec.md)

**Input**: Feature specification from `/specs/010-nfce-national-core/spec.md`

## Summary

Entregar a primeira facade root additive de NFC-e em homologacao, sustentada por um nucleo nacional compartilhado e por um unico perfil operacional piloto para Sao Paulo. A implementacao deve reutilizar a infraestrutura manual de serializacao, assinatura e transporte ja existente, inferir a UF a partir da propria NFC-e, falhar localmente quando a UF nao puder ser resolvida e bloquear qualquer tentativa operacional fora do piloto por meio de boundary explicita antes de ampliar o pacote para outras UFs, DANFE NFC-e, QR Code ou administracao de CSC.

## Technical Context

**Language/Version**: TypeScript 6.x em Node.js >= 18.18; Markdown para artefatos de planejamento

**Primary Dependencies**: TypeScript, Jest, ESLint, Prettier, tsx, xsd2ts, `@xmldom/xmldom`, `xml-crypto`, `node-forge`, camadas manuais existentes em `src/canonical/facade/`, `src/canonical/serialization/`, `src/canonical/signing/`, `src/canonical/transport/` e o inventario gerado sob `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/`

**Storage**: N/A em runtime; artefatos mantidos em `src/`, `tests/`, `docs/` e `specs/010-nfce-national-core/`

**Testing**: Jest para contrato, unidade e integracao; validacao com `npm run lint`, `npx prettier --check specs/010-nfce-national-core/*.md specs/010-nfce-national-core/contracts/*.md .github/copilot-instructions.md`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball`

**Target Platform**: Linux local e CI para pacote npm ESM consumido por Node.js

**Project Type**: Pacote npm ESM com inventario gerado de XSD e camadas manuais incrementais para facades operacionais

**Performance Goals**: Falhar antes do transporte para UF nao inferivel, UF fora do piloto, validacao nacional obrigatoria ausente e superficies fora do slice; reutilizar o pipeline de assinatura e transporte sem round-trips extras; manter a nova operacao additive no import raiz sem aumentar a superficie publica alem do necessario

**Constraints**: Slice restrito a homologacao; Sao Paulo como unica UF piloto; inferencia automatica da UF a partir do proprio documento; nenhuma tentativa operacional para UFs nao promovidas; DANFE NFC-e, QR Code, CSC, credenciamento automatico e contingencia offline permanecem fora do recorte; `package.json#exports["."]` continua como unica superficie runtime estavel; a arvore gerada continua inventario interno

**Scale/Scope**: Uma nova operacao publica root para autorizacao NFC-e, uma nova camada manual dedicada para NFC-e, um unico piloto estadual, um conjunto focado de validacoes locais, fixtures de homologacao para sucesso e boundaries e atualizacao additive do contrato publico do pacote

**Knowledge Sources**: Fontes primarias: `specs/010-nfce-national-core/spec.md`, `docs/ROADMAP.md`, `docs/nfce/emissao-nfce.md`, `docs/nfce/capacidades-sdk.md`, `docs/nfce/uf-matrix.md`, `docs/documentos-oficiais-portal-nfe.md`, `docs/notas-fiscais/manuais-e-esquemas.md`, `docs/_meta/source-registry.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/Manual de Orientação ao Contribuinte - MOC - versão 7.0 - NF-e e NFC-e.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/Manual de Boas Práticas NFC-e - BP 2018.001 - versão 1 0.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/20250324 - Manual_de_Especificações_Técnicas_do_DANFE_NFC-e_QR_Code.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/principal-3994d2e8a8.md`, `docs/_sources/markdown/official/portal.fazenda.sp.gov.br/servicos/nfe/paginas/sobre-0c30916ab2.md`, `docs/_sources/markdown/official/www.sefaz.pb.gov.br/component/wrapper/index-c26904b952.md`, `package.json`, `src/index.ts`, `src/public-contract.ts` e `.specify/memory/constitution.md`; referências secundarias aprovadas: somente as listadas pela constituição em caso de lacuna nao coberta por fonte primaria; gaps deferidos: cobertura multi-UF, QR Code, DANFE, CSC, credenciamento automatizado e contingencia offline

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- ESM-only package impact is documented, including affected entrypoints, exports, and any compatibility or migration notes.
- Affected schema families and normalization rules are identified, with explicit note when emitted identifiers, shapes, or file layout may change.
- Primary normative sources are identified for any domain-driven conclusion, and approved secondary references are listed separately when they supplement a source gap.
- The plan separates handwritten source boundaries from generated output boundaries and lists any strict-type exceptions that require justification.
- Focused validation commands are listed for Jest, lint, format, and type or build verification, plus regeneration commands when generated output changes.
- Any release or publishing impact on the npm package surface is captured before design is considered complete.

Post-design re-check: PASS.

- ESM-only package impact is documented: a feature entra de forma additive no import raiz, preserva `package.json#exports["."]` e nao introduz subpath publico para NFC-e.
- Affected schema families and normalization rules are identified: a implementacao consumira inventario gerado de NFC-e ja presente em `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/`, sem promover a arvore gerada como contrato publico.
- Primary normative sources are identified: o recorte foi ancorado em MOC 7.0, Manual de Boas Praticas NFC-e, manual tecnico de DANFE/QR Code, pagina principal do portal nacional, documentacao editorial do repositorio e evidencias estaduais de SP; referencias secundarias permanecem apenas complementares e nao normativas.
- Handwritten versus generated boundaries are explicit: a nova orquestracao ficara em `src/canonical/nfce/` e `src/canonical/facade/`, com reuso de `src/canonical/serialization/`, `src/canonical/signing/` e `src/canonical/transport/`; a arvore gerada permanece como inventario normativo interno.
- Focused validation commands are defined: `npm run lint`, `npx prettier --check specs/010-nfce-national-core/*.md specs/010-nfce-national-core/contracts/*.md .github/copilot-instructions.md`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball`; `npm run generate` fica reservado para qualquer ajuste excepcional na arvore gerada.
- Release and package-surface impact is captured: a expectativa e de uma ampliacao additive com nova operacao root, novos tipos publicos e atualizacao de `src/public-contract.ts`; qualquer quebra de naming, shape de outcome ou politica de UF exigira avaliacao semver e nota de migracao.

## Project Structure

### Documentation (this feature)

```text
specs/010-nfce-national-core/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── public-nfce-operational-facade.md
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
    ├── generic-event/
    ├── nfe/
    ├── recipient/
    ├── serialization/
    ├── shared/
    ├── signing/
    ├── transport/
    └── nfce/

tests/
├── config/
├── contract/
├── fixtures/
├── integration/
└── unit/

docs/
├── _meta/
├── _sources/
├── nfce/
└── notas-fiscais/
```

**Structure Decision**: Manter a topologia de pacote unico e acrescentar uma camada manual dedicada em `src/canonical/nfce/` para resolucao de UF, validacao local, montagem de pedido de autorizacao, classificacao de boundary e conversao do retorno em outcome orientado a aplicacao. A facade publica ficara em `src/canonical/facade/` e sera reexportada por `src/canonical/index.ts` e `src/index.ts`; assinatura, serializacao e transporte continuam como detalhes internos reaproveitados; a arvore gerada de NFC-e continua interna e nao vira API publica primária.

## Complexity Tracking

Nenhuma violação da constituição precisa ser justificada nesta fase.
