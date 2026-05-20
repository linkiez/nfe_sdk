# Implementation Plan: NFC-e UF Promotion

**Branch**: `015-nfce-uf-promotion` | **Date**: 2026-05-20 | **Spec**: [/home/linkiez/Projetos/nfe_sdk/specs/015-nfce-uf-promotion/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/015-nfce-uf-promotion/spec.md)

**Input**: Feature specification from `/specs/015-nfce-uf-promotion/spec.md`

## Summary

Promover `PR` como a primeira `UF` adicional alem de `SP` no slice operacional de `NFC-e`, preservando o contrato root additive ja publicado pela spec `010`. A implementacao deve permanecer em superficies manuais de runtime, reutilizar a mesma operacao publica `authorizeNFCe`, ampliar apenas a selecao de perfil estadual e o roteamento necessario, e manter `CSC`, `QR Code`, `DANFE NFC-e`, contingencia `offline`, consulta do consumidor, `EPEC NFC-e` e cancelamento por substituicao explicitamente fora do recorte de runtime.

## Technical Context

**Language/Version**: TypeScript 6.x em Node.js >= 18.18; Markdown para artefatos de planejamento

**Primary Dependencies**: TypeScript, Jest, ESLint, Prettier, `@xmldom/xmldom`, `xml-crypto`, `node-forge`, facades manuais em `src/canonical/facade/`, nucleo `NFC-e` em `src/canonical/nfce/`, transporte em `src/canonical/transport/`, contrato publicado em `src/public-contract.ts`

**Storage**: N/A em runtime; artefatos mantidos em `src/`, `tests/`, `docs/` e `specs/015-nfce-uf-promotion/`

**Testing**: Jest para contrato, unidade e integracao; validacao com `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball`

**Target Platform**: Linux local e CI para pacote npm ESM consumido por Node.js

**Project Type**: Pacote npm ESM com inventario gerado de XSD e camadas manuais incrementais para facades operacionais

**Performance Goals**: Preservar o comportamento local de boundary antes do transporte para `UF` fora do lote promovido; nao introduzir round-trips extras alem do fluxo homologado ja existente; manter a promocao de `PR` com latencia e superficie equivalentes ao slice atual de `SP`

**Constraints**: Slice restrito ao lote inicial `SP` + `PR`; nenhuma promessa nova para `CSC`, `QR Code`, `DANFE NFC-e`, contingencia `offline`, consulta do consumidor, `EPEC NFC-e` ou cancelamento por substituicao; nenhuma alteracao na arvore gerada de schemas; `package.json#exports["."]` permanece a unica superficie runtime estavel

**Scale/Scope**: Ampliacao pequena de um contrato root existente, com ajuste concentrado em selecao de perfil estadual, possivel roteamento de autorizador, fixtures de `PR`, testes focados de regressao `SP` + `PR` e atualizacao documental da taxonomia `runtime` versus backlog

**Knowledge Sources**: Fontes primarias: `specs/015-nfce-uf-promotion/spec.md`, `docs/roadmap/proximas-iteracoes-recomendadas.md`, `docs/roadmap/recortes-funcionais-prioritarios.md`, `docs/roadmap/nfce-operacional-promovivel.md`, `docs/roadmap/criterios-promocao.md`, `docs/roadmap/ufs-ambientes.md`, `specs/010-nfce-national-core/spec.md`, `specs/010-nfce-national-core/plan.md`, `specs/014-expand-signing-coverage/spec.md`, Manual de boas praticas `NFC-e`, `NT 2023.002 v1.01`, `NT 2018.001`, `NT 2018.004`, manual de `DANFE NFC-e` e `QR Code`; trilha normativa: `RFL-006`, `RTM-007`, `RTM-011`, `RTM-012`; referencias secundarias aprovadas: apenas as listadas pela constituicao quando houver lacuna de leitura operacional; decisao fechada: `PR` usa identificador dedicado de servico de transporte com reuso do endpoint homologado compartilhado

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **ESM-only package impact**: A feature permanece additive sobre o import raiz e nao introduz novo subpath publico. A mesma facade `authorizeNFCe` continua sendo a entrada estavel, com escopo expandido de `SP` para `SP` + `PR`. ✅
- **Affected schema families and normalization**: Nenhuma familia gerada de schema precisa mudar. O trabalho permanece em superficies manuais de runtime sob `src/canonical/nfce/`, `src/canonical/transport/`, `src/canonical/facade/` e `tests/`. ✅
- **Primary sources and provenance**: As fontes normativas e editoriais da promocao de `PR` e das boundaries deferidas foram registradas separadamente, com destaque para o critério conservador de promocao do roadmap. ✅
- **Source boundaries**: O design separa claramente codigo manual, contratos publicos, testes e documentacao do inventario gerado. Nenhuma excecao de strict typing esta planejada. ✅
- **Validation commands**: O plano define validacao com Jest, lint, formatacao, typecheck, build e tarball, com foco adicional em regressao de `SP`, promocao de `PR` e boundary de `UF` nao promovida. ✅
- **npm package surface / release impact**: O impacto esperado e additive sobre a superficie publicada; qualquer mudanca de identificador, shape de outcome ou regra de `UF` continua sujeita a avaliacao semver se escapar deste recorte. ✅

**Constitution Check result**: PASS — nenhuma violacao encontrada.

_Post-Phase 1 re-check_: O design continua em conformidade. O trabalho permanece em runtime manuscrito, preserva a superficie ESM additive, explicita as fontes normativas e mantem backlog auxiliar fora do contrato publico. ✅

## Project Structure

### Documentation (this feature)

```text
specs/015-nfce-uf-promotion/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── public-nfce-uf-promotion-facade.md
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
    ├── facade/
    │   └── authorize-nfce.ts
    ├── nfce/
    │   ├── authorize-nfce.ts
    │   ├── contracts.ts
    │   ├── coverage-boundary.ts
    │   ├── select-nfce-profile.ts
    │   └── sp-pilot-profile.ts
    └── transport/
        ├── supported-services.ts
        ├── service-catalog.ts
        └── catalog-provenance.ts

tests/
├── contract/
├── integration/
│   └── nfce/
└── unit/
    └── nfce/

tests/fixtures/
└── nfce/

docs/
└── roadmap/
    ├── coverage-matrix.md
    ├── nfce-operacional-promovivel.md
    ├── specs-implementacao.md
    └── ufs-ambientes.md
```

**Structure Decision**: Manter a topologia de pacote unico e ampliar apenas o slice manual de `NFC-e` e suas dependencias imediatas. O fluxo continua centrado em `authorizeNFCe`, com selecao de perfil estadual e routing de transporte encapsulados internamente. O inventario gerado sob `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/` permanece inalterado e nao vira superficie contratual adicional.

## Complexity Tracking

Nenhuma violacao da constituicao precisa ser justificada nesta fase.
