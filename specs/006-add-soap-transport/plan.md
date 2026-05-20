# Implementation Plan: Add SOAP Transport

**Branch**: `006-add-soap-transport` | **Date**: 2026-05-18 | **Spec**: [/home/linkiez/Projetos/nfe_sdk/specs/006-add-soap-transport/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/006-add-soap-transport/spec.md)

**Input**: Feature specification from `/specs/006-add-soap-transport/spec.md`

## Summary

Adicionar o primeiro slice de transporte SOAP do SDK acima das camadas canonica e de assinatura ja estabilizadas, preservando o pacote ESM com import raiz como superficie publica principal. A implementacao deve entregar um catalogo versionado de endpoints nacionais compartilhados para homologacao, resolver consulta de status e autorizacao de uso sem montagem manual de SOAP, devolver um `TransportOutcome` estruturado com evidencia observavel da troca e manter producao, diferenciacao por UF, WSDL client automatico e interpretacao de regras de dominio fora do escopo desta fase.

## Technical Context

**Language/Version**: TypeScript 6.x em Node.js >= 18.18; Markdown para os artefatos de planejamento

**Primary Dependencies**: TypeScript, Jest, ESLint, Prettier, tsx, xsd2ts, `@xmldom/xmldom` para leitura estrutural de XML e as APIs nativas `fetch` e `AbortController` do Node.js 18 como baseline do executor padrao de transporte

**Storage**: Arquivos do pacote em `src/`, `tests/`, `docs/`, `specs/006-add-soap-transport/` e metadados em `package.json`

**Testing**: Jest para testes de contrato, integracao e unidade; validacao com `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball`

**Target Platform**: Linux local e CI para pacote npm ESM consumido por Node.js

**Project Type**: Pacote npm ESM com arvore gerada derivada de XSD e camadas manuais incrementais para facades operacionais

**Performance Goals**: Resolver endpoint em memoria de forma deterministica, executar uma troca SOAP unica dentro do timeout controlado pelo chamador, evitar bootstrap de WSDL em runtime e preservar evidencias cruas de request e response sem estado global compartilhado

**Constraints**: SOAP 1.2 `Document/Literal`; para NF-e 4.00 o header SOAP nao e obrigatorio; cobertura inicial limitada a homologacao, consulta de status e autorizacao de uso; catalogo inicial restrito a endpoints nacionais compartilhados; o contrato publico deste slice expoe apenas timeout e injecao opcional de executor de request como parametros operacionais; credenciais de mTLS e detalhes de dispatcher permanecem externos ao contrato principal; nenhum subpath novo pode virar entrypoint estavel; producao, diferenciacao por UF, SVRS/SVC e orquestracao de dominio fim a fim permanecem deferidos

**Scale/Scope**: Dois servicos suportados, um ambiente suportado, um provedor compartilhado inicial no catalogo, dois novos pontos de entrada runtime no import raiz e suites de regressao focadas em sucesso, timeout, indisponibilidade, erro de uso, rejeicao funcional e resposta SOAP invalida

**Knowledge Sources**: Fontes primarias: `docs/ROADMAP.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/Manual de Orientacao ao Contribuinte - MOC - versao 7.0 - NF-e e NFC-e.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/webservices-24c8f3a1fb.md`, `package.json`, `src/index.ts`, `src/public-contract.ts`, `src/canonical/shared/contracts.ts`, `specs/006-add-soap-transport/spec.md`, `.specify/memory/constitution.md`; referencias secundarias aprovadas: `docs/roadmap/topicos-oficiais.md` e `docs/roadmap/portal-documentos-vigentes.md` como consolidacao editorial de fontes oficiais; gap de proveniencia deferido: SVRS, SVC e roteamento por UF permanecem fora do catalogo inicial ate que exista uma dimensao explicita de autorizador no contrato publico

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- ESM-only package impact is documented, including affected entrypoints, exports, and any compatibility or migration notes.
- Affected schema families and normalization rules are identified, with explicit note when emitted identifiers, shapes, or file layout may change.
- Primary normative sources are identified for any domain-driven conclusion, and approved secondary references are listed separately when they supplement a source gap.
- The plan separates handwritten source boundaries from generated output boundaries and lists any strict-type exceptions that require justification.
- Focused validation commands are listed for Jest, lint, format, and type or build verification, plus regeneration commands when generated output changes.
- Any release or publishing impact on the npm package surface is captured before design is considered complete.

Post-design re-check: PASS.

- ESM-only package impact is documented: o slice de transporte entra de forma additive pelo import raiz e preserva `package.json#exports["."]` como fonte normativa do contrato publicado.
- Affected schema families and normalization rules are identified: a feature continua ancorada na familia `PL_010c_NT2022_002v1.30` e adiciona envelope SOAP manual ao redor de payloads XML ja prontos, sem reabrir a normalizacao da camada canonica ou a arvore gerada.
- Primary normative sources are identified: roadmap, MOC 7.0 e tabela oficial de web services sustentam o formato da troca, os servicos priorizados e o catalogo inicial; os dossies editoriais internos permanecem explicitamente secundarios.
- Handwritten versus generated boundaries are explicit: a nova logica ficara em uma camada manual planejada sob `src/canonical/transport/`, enquanto `src/classes/`, `src/interfaces/`, `src/types/`, `src/enums/` e `xsd/` permanecem como inventario gerado ou normativo.
- Focused validation commands are defined: `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball` compoem o gate minimo; `npm run generate` permanece reservado a mudancas excepcionais na arvore gerada.
- Any release or publishing impact on the npm package surface is captured: a expectativa e de mudanca additive no import raiz, sem impacto breaking; se um segundo autorizador compartilhado exigir nova dimensao publica de selecao, isso devera ser tratado em feature posterior com avaliacao semver propria.

## Project Structure

### Documentation (this feature)

```text
specs/006-add-soap-transport/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── public-soap-transport-facade.md
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
    ├── serialization/
    ├── shared/
    ├── signing/
    └── transport/

tests/
├── config/
├── contract/
├── fixtures/
│   └── transport/
├── integration/
└── unit/

docs/
└── notas-fiscais/

tools/
xsd/
```

**Structure Decision**: Manter a topologia de pacote unico e ampliar a camada manual existente com um slice planejado em `src/canonical/transport/` para catalogo, montagem de envelope SOAP, execucao desacoplada por dispatcher e classificacao de resultado. O import raiz continua sendo a unica superficie runtime estavel; a arvore gerada segue como inventario interno.

## Complexity Tracking

Nenhuma violacao da constituicao precisa ser justificada nesta fase.
