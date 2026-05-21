# Implementation Plan: Recipient Continuity

**Branch**: `022-recipient-continuity` | **Date**: 2026-05-21 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/022-recipient-continuity/spec.md`

## Summary

Promover a proxima slice de runtime do lado do destinatario acima do MVP da spec `008`, sem reabrir `consNSU` nem `consChNFe` como contrato principal. O plano amplia `distributeRecipientDFe` com sinais mais explicitos de continuidade, preserva `manifestRecipientOperation` como passo separado e adiciona uma facade dedicada para recuperar o documento liberado em etapa posterior, sempre em homologacao, sempre como extensao additive do import raiz e sempre mantendo polling agressivo, producao, credenciamento automatizado e backoffice assistido fora do recorte.

## Technical Context

**Language/Version**: TypeScript 6.0.3 em modo estrito sobre Node.js >=18.18 LTS; Markdown para artefatos de planning

**Primary Dependencies**: pacote ESM TypeScript com Jest 30 / ts-jest, ESLint 9, Prettier 3, `@xmldom/xmldom`, `xml-crypto`, `node-forge`; runtime manual em `src/canonical/recipient/`, `src/canonical/facade/` e transporte SOAP compartilhado em `src/canonical/transport/`

**Storage**: N/A; o slice permanece stateless e opera apenas com XML oficial em memoria, sem persistencia local, fila ou cache

**Testing**: Jest para contrato, integracao e unidade; validacao focada com `npx jest tests/contract/root-recipient-continuity-facade.test.ts --runInBand`, `npx jest tests/integration/recipient-continuity.test.ts --runInBand`, `npx jest tests/unit/canonical/recipient/retrieve-recipient-document.test.ts --runInBand`; gates canônicos `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build`, `npm run validate:tarball`

**Target Platform**: consumidores Node.js do pacote npm ESM em Linux/macOS/Windows; sem browser, mobile ou servico remoto proprio

**Project Type**: biblioteca npm ESM com superficie root additive sobre inventario gerado de XSD e camadas manuais de runtime

**Performance Goals**: manter cada passo de continuidade em uma unica chamada oficial por tentativa, sem loops internos, sem polling agressivo e sem round-trips extras fora do fluxo oficial `distNSU`; devolver classificacao deterministica para continuidade e documento posterior em memoria

**Constraints**: nenhuma remocao ou rename de export publico; sem promover `consNSU`, `consChNFe`, producao, automacao de credenciamento, sincronizacao recorrente de carteira ou polling agressivo; sem alterar `src/{classes,interfaces,types,enums}` nem o layout gerado

**Scale/Scope**: um novo fechamento de runtime sobre a baseline da spec `008`, concentrado em facades do destinatario, contratos manuais, envelopes/resultados de continuidade, fixtures homologadas, documentacao contratual e testes focados; a feature deve explicitar o fluxo entre resumo, manifestacao e documento liberado sem virar orquestrador completo do ciclo do destinatario

**Knowledge Sources**: Fontes primarias: [docs/roadmap/ROADMAP.md](../../docs/roadmap/ROADMAP.md), [docs/roadmap/proximas-iteracoes-recomendadas.md](../../docs/roadmap/proximas-iteracoes-recomendadas.md), [docs/roadmap/recortes-funcionais-prioritarios.md](../../docs/roadmap/recortes-funcionais-prioritarios.md), [docs/roadmap/rtm-cobertura-oficial.md](../../docs/roadmap/rtm-cobertura-oficial.md), [docs/roadmap/coverage-matrix.md](../../docs/roadmap/coverage-matrix.md), `NT 2020.001`, `NT 2014.002` e o fluxo oficial do Ambiente Nacional para distribuicao/manifestacao; fontes internas complementares: [specs/008-recipient-dfe-mvp/spec.md](../008-recipient-dfe-mvp/spec.md), [specs/008-recipient-dfe-mvp/research.md](../008-recipient-dfe-mvp/research.md), [specs/008-recipient-dfe-mvp/contracts/public-recipient-dfe-facade.md](../008-recipient-dfe-mvp/contracts/public-recipient-dfe-facade.md), [src/public-contract.ts](../../src/public-contract.ts), [src/canonical/recipient/recipient-shared.ts](../../src/canonical/recipient/recipient-shared.ts), [src/canonical/recipient/distribute-recipient-dfe.ts](../../src/canonical/recipient/distribute-recipient-dfe.ts); referencias secundarias aprovadas permanecem opcionais e nao normativas; gaps de proveniencia deferidos: rollout em producao, politicas de polling recorrente e promocao de `consNSU` / `consChNFe`

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **ESM-only package impact**: o slice permanece additive sobre `package.json#exports["."]`, `src/index.ts`, `src/canonical/index.ts`, `src/canonical/facade/` e `src/public-contract.ts`, sem novo subpath publico e sem migracao semver planejada. ✅
- **Affected schema families and normalization**: nenhuma regra de normalizacao do inventario gerado muda; o trabalho reutiliza apenas o runtime manual do fluxo do destinatario, envelopes distribuidos e classificacoes sobre respostas ja cobertas pela familia de distribuicao DFe. ✅
- **Primary sources and provenance**: o plano separa roadmap, docs oficiais, baseline da spec `008` e evidencias internas do runtime atual; qualquer lacuna permanece como boundary explicita em vez de contrato implicito. ✅
- **Source boundaries**: o design preserva a separacao entre codigo manual em `src/canonical/recipient/` e a arvore gerada sob `src/{classes,interfaces,types,enums}`; nao ha excecao planejada de strict typing. ✅
- **Validation commands**: o plano nomeia testes focados do slice e os gates `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball`; nao ha comando de regeneracao previsto porque a arvore gerada nao muda. ✅
- **npm package surface / release impact**: o impacto esperado e additive, concentrado em enriquecimento do contrato do destinatario e em uma nova facade root dedicada para recuperacao posterior, sem reposicionar exports existentes. ✅

**Constitution Check result**: PASS — nenhuma violacao encontrada.

_Post-Phase 1 re-check_: o design continua aderente. A feature preserva o import raiz como superficie estavel, mantem o inventario gerado intacto, ancora todas as conclusoes em fontes primarias e deixa fora do recorte qualquer dependencia de `consNSU`, `consChNFe`, producao ou polling agressivo. ✅

## Project Structure

### Documentation (this feature)

```text
specs/022-recipient-continuity/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── public-recipient-continuity-facade.md
├── checklists/
│   └── requirements.md
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── index.ts                                           UPDATE
├── public-contract.ts                                 UPDATE
└── canonical/
    ├── index.ts                                       UPDATE
    ├── facade/
    │   ├── index.ts                                   UPDATE
    │   └── retrieve-recipient-document.ts             NEW
    └── recipient/
        ├── index.ts                                   UPDATE
        ├── distribute-recipient-dfe.ts                UPDATE
        ├── recipient-distribution-outcome.ts          UPDATE
        ├── recipient-document-envelope.ts             UPDATE
        ├── recipient-shared.ts                        UPDATE
        ├── retrieve-recipient-document.ts             NEW
        └── recipient-follow-up.ts                     NEW

tests/
├── contract/
│   └── root-recipient-continuity-facade.test.ts      NEW
├── integration/
│   └── recipient-continuity.test.ts                  NEW
├── unit/
│   └── canonical/recipient/retrieve-recipient-document.test.ts NEW
└── fixtures/
    └── recipient/
        ├── distnsu-summary-after-manifestation.xml   NEW
        ├── distnsu-full-document-released.xml        NEW
        ├── distnsu-no-new-documents.xml              NEW
        └── distnsu-dependency-limited.xml            NEW

README.md                                              UPDATE
```

**Structure Decision**: manter a topologia de pacote unico e ampliar o dominio manual do destinatario ja existente. `distributeRecipientDFe` continua sendo a entrada estavel para distribuicao e ganha sinais additive de continuidade, enquanto a recuperacao posterior nasce em uma facade root dedicada que reutiliza o runtime manual do destinatario sem promover `consNSU` ou `consChNFe` como contrato principal. A arvore gerada permanece apenas como inventario normativo.

## Complexity Tracking

Nenhuma violacao da constituicao precisa ser justificada nesta fase.
