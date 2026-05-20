# Implementation Plan: Contingency Boundaries

**Branch**: `016-contingency-boundaries` (active feature context resolved via `.specify/feature.json` while the repository stays on `main`) | **Date**: 2026-05-20 | **Spec**: [/home/linkiez/Projetos/nfe_sdk/specs/016-contingency-boundaries/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/016-contingency-boundaries/spec.md)

**Input**: Feature specification from `/specs/016-contingency-boundaries/spec.md`

## Summary

Introduzir um slice additive de contingencia por ambiente que torne `SVC-AN` e `SVC-RS` observaveis como diagnostico estruturado nas facades operacionais ja publicadas, preservando os fluxos normais de autorizacao e mantendo `EPEC` e `offline` explicitamente como boundaries deferidas. A implementacao deve permanecer em superficies manuais de runtime, concentrar o comportamento em classificacao e contrato observavel, e evitar qualquer promessa de emissor embutido, recuperacao assistida completa ou automacao de credenciamento.

## Technical Context

**Language/Version**: TypeScript 6.x em Node.js >= 18.18; Markdown para artefatos de planejamento

**Primary Dependencies**: TypeScript, Jest, ESLint, Prettier, facades operacionais em `src/canonical/nfe/` e `src/canonical/nfce/`, catalogo de transporte em `src/canonical/transport/`, contrato publicado em `src/public-contract.ts`

**Storage**: N/A em runtime; artefatos mantidos em `src/`, `tests/`, `docs/` e `specs/016-contingency-boundaries/`

**Testing**: Jest para contrato, unidade e integracao; validacao com `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball`

**Target Platform**: Linux local e CI para pacote npm ESM consumido por Node.js

**Project Type**: Pacote npm ESM com inventario gerado de XSD e camadas manuais incrementais para facades operacionais

**Performance Goals**: Preservar a ausencia de round-trips extras no fluxo normal; classificar contingencia antes de fallback silencioso; manter o diagnostico de contingencia como extensao leve sobre as facades existentes

**Constraints**: Slice restrito a classificacao observavel de contingencia por ambiente; nenhum novo subpath publico; nenhuma alteracao na arvore gerada de schemas; `EPEC`, `offline`, persistencia local e recuperacao assistida permanecem fora do runtime promovido

**Scale/Scope**: Ampliacao pequena e additive das facades operacionais, com ajuste concentrado em boundaries, catalogo de transporte, contrato publico, testes focados e alinhamento editorial do roadmap para `RFL-005`

**Knowledge Sources**: Fontes primarias: `docs/roadmap/ROADMAP.md`, `docs/roadmap/proximas-iteracoes-recomendadas.md`, `docs/roadmap/recortes-funcionais-prioritarios.md`, `docs/roadmap/rtm-cobertura-oficial.md`, `docs/roadmap/topicos-oficiais.md`, `docs/roadmap/portal-documentos-vigentes.md`, `docs/roadmap/ufs-ambientes.md`, `docs/roadmap/hosts-oficiais.md`, Anexo III e Anexo IV do `MOC`, manual de contingencia `NF-e`, manual de contingencia `offline` da `NFC-e`, superficies `AgendamentoSVC` e materiais de `EPEC`; referencias secundarias aprovadas: apenas as listadas pela constituicao quando houver lacuna operacional; decisao ativa deste corte: a primeira promocao observavel de contingencia nasce em `authorizeNFe`, enquanto `authorizeNFCe` permanece restrita ao boundary explicito de escopo ja publicado

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **ESM-only package impact**: A feature permanece additive sobre o import raiz e nao introduz novo entrypoint publico. As facades operacionais existentes continuam sendo a superficie estavel, com classificacao observavel de contingencia adicionada sem subpaths novos. ✅
- **Affected schema families and normalization**: Nenhuma familia gerada de schema precisa mudar. O trabalho permanece em superficies manuais de runtime sob `src/canonical/nfe/`, `src/canonical/nfce/`, `src/canonical/transport/`, `src/public-contract.ts` e `tests/`. ✅
- **Primary sources and provenance**: As fontes normativas de contingencia por ambiente e as evidencias estaduais relevantes foram registradas separadamente, com a fronteira entre guidance normativa e leitura operacional explicita. ✅
- **Source boundaries**: O design separa claramente codigo manual, contratos publicos, testes e documentacao do inventario gerado. Nenhuma excecao de strict typing esta planejada. ✅
- **Validation commands**: O plano define validacao com Jest, lint, formatacao, typecheck, build e tarball, com foco adicional em regressao do fluxo normal, classificacao de `SVC`, e boundaries de `EPEC`/`offline`. ✅
- **npm package surface / release impact**: O impacto esperado e additive sobre a superficie publicada; qualquer nova classificacao observavel deve preservar o contrato root e a semantica atual quando nao houver contingencia ativa. ✅

**Constitution Check result**: PASS — nenhuma violacao encontrada.

_Post-Phase 1 re-check_: O design continua em conformidade. O trabalho permanece em runtime manuscrito, preserva a superficie ESM additive, explicita as fontes normativas e mantem `EPEC`/`offline` fora do recorte promoted. ✅

## Project Structure

### Documentation (this feature)

```text
specs/016-contingency-boundaries/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── public-contingency-boundaries-facade.md
└── tasks.md
```

### Source Code (repository root)

```text
package.json
README.md
src/
├── index.ts
├── public-contract.ts
└── canonical/
    ├── nfe/
    │   ├── authorize-nfe.ts
    │   └── contracts.ts
    ├── nfce/
    │   ├── authorize-nfce.ts
    │   ├── contracts.ts
    │   └── coverage-boundary.ts
    └── transport/
        ├── contracts.ts
        ├── errors.ts
        ├── service-catalog.ts
        ├── supported-services.ts
        └── catalog-provenance.ts

tests/
├── contract/
├── config/
├── fixtures/
│   └── nfe/
├── integration/
│   ├── nfce/
│   └── *.test.ts
└── unit/

docs/
└── roadmap/
    ├── coverage-matrix.md
    ├── recortes-funcionais-prioritarios.md
    ├── rtm-cobertura-oficial.md
    ├── topicos-oficiais.md
    └── ufs-ambientes.md
```

**Structure Decision**: Manter a topologia de pacote unico e ampliar apenas o slice manual de facades operacionais e transporte. O diagnostico de contingencia nasce primeiro em `authorizeNFe`, enquanto `authorizeNFCe` continua limitado a boundaries de escopo ja publicadas; fixtures e helpers de regressao ficam em `tests/fixtures/nfe/` e `tests/config/` sem tocar o inventario gerado sob `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/`.

## Complexity Tracking

Nenhuma violacao da constituicao precisa ser justificada nesta fase.
