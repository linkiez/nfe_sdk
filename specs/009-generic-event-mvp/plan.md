# Implementation Plan: Generic Event MVP

**Branch**: `009-next-roadmap-slice` | **Date**: 2026-05-18 | **Spec**: [/home/linkiez/Projetos/nfe_sdk/specs/009-generic-event-mvp/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/009-generic-event-mvp/spec.md)

**Input**: Feature specification from `/specs/009-generic-event-mvp/spec.md`

## Summary

Entregar uma facade publica additive no import raiz para recepcao generica de eventos pos-autorizacao em homologacao, reutilizando o Web Service nacional `NFeRecepcaoEvento`, a infraestrutura manual de assinatura e transporte e a arvore gerada ja presente no repositório. O MVP cobre comprovante de entrega, ator interessado transportador, insucesso na entrega e conciliacao financeira, com contrato orientado a lote pequeno, rejeicao integral pre-transporte para violações locais e resultado estruturado por lote e por item quando a chamada for efetivamente enviada.

## Technical Context

**Language/Version**: TypeScript 6.x em Node.js >= 18.18; Markdown para artefatos de planejamento

**Primary Dependencies**: TypeScript, Jest, ESLint, Prettier, tsx, xsd2ts, `@xmldom/xmldom`, `xml-crypto`, `node-forge` e as camadas manuais existentes em `src/canonical/facade/`, `src/canonical/signing/`, `src/canonical/transport/`, `src/canonical/nfe/` e `src/canonical/recipient/`

**Storage**: N/A em runtime; artefatos mantidos em `src/`, `tests/`, `docs/` e `specs/009-generic-event-mvp/`

**Testing**: Jest para contrato, unidade e integração; validação com `npm run lint`, `npx prettier --check specs/009-generic-event-mvp/*.md specs/009-generic-event-mvp/contracts/*.md .github/copilot-instructions.md`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball`

**Target Platform**: Linux local e CI para pacote npm ESM consumido por Node.js

**Project Type**: Pacote npm ESM com inventário gerado de XSD e camadas manuais incrementais para facades operacionais

**Performance Goals**: Montar e validar em memória lotes síncronos de até 20 eventos sem fragmentação automática, preservar rastreabilidade por item a partir de uma única resposta `retEnvEvento` e evitar round-trips adicionais quando a entrada já for localmente inválida

**Constraints**: O import raiz continua como única superfície runtime estável; o slice cobre apenas homologação; o Web Service de eventos é único e síncrono; o lote não pode exceder 20 eventos; qualquer família fora do recorte, violação de validação local obrigatória ou excesso de lote deve rejeitar integralmente a operação antes do transporte; EPEC, produção, eventos regionais ainda não estabilizados e facades dedicadas já existentes permanecem fora do recorte desta nova facade

**Scale/Scope**: Uma nova operação pública additive no import raiz, quatro famílias oficiais suportadas, um serviço nacional compartilhado, lotes heterogêneos pequenos de até 20 itens, um contrato de resultado por lote e por item e fixtures ou exemplos por família e por lote misto

**Knowledge Sources**: Fontes primárias: `docs/ROADMAP.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/MOC NFe ABI Visão Geral - v1.00 - minuta.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/disponibilidade-30f1e6a455.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/listaconteudo-f0fdfae921.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/listaconteudo-b62dcde362.md`, `docs/_sources/extracted/official/www.nfe.fazenda.gov.br/portal/Evento_EntregaNFe_PL_v1.01/`, `docs/_sources/extracted/official/www.nfe.fazenda.gov.br/portal/Evento_AtorInteressado_PL_v1.02/`, `docs/_sources/extracted/official/www.nfe.fazenda.gov.br/portal/Evento_InsucessoNFe_PL_v1.02/`, `docs/_sources/extracted/official/www.nfe.fazenda.gov.br/portal/Evento_Econf_v1.00/`, `package.json`, `src/index.ts`, `src/public-contract.ts`, `src/canonical/index.ts`, `specs/009-generic-event-mvp/spec.md` e `.specify/memory/constitution.md`; referências secundárias aprovadas: apenas os repositórios já aprovados pela constituição se surgir lacuna operacional não coberta por fonte primária; gaps de proveniência deferidos: produção, EPEC, cancelamentos dessas famílias, políticas amplas de retry e qualquer abertura posterior para eventos regionais ou novos pacotes oficiais além das quatro famílias selecionadas

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- ESM-only package impact is documented, including affected entrypoints, exports, and any compatibility or migration notes.
- Affected schema families and normalization rules are identified, with explicit note when emitted identifiers, shapes, or file layout may change.
- Primary normative sources are identified for any domain-driven conclusion, and approved secondary references are listed separately when they supplement a source gap.
- The plan separates handwritten source boundaries from generated output boundaries and lists any strict-type exceptions that require justification.
- Focused validation commands are listed for Jest, lint, format, and type or build verification, plus regeneration commands when generated output changes.
- Any release or publishing impact on the npm package surface is captured before design is considered complete.

Post-design re-check: PASS.

- ESM-only package impact is documented: o slice entra de forma additive no import raiz e preserva `package.json#exports["."]` como superfície normativa do pacote.
- Affected schema families and normalization rules are identified: a feature reutiliza as famílias `Evento_EntregaNFe_PL_v1.01`, `Evento_AtorInteressado_PL_v1.02`, `Evento_InsucessoNFe_PL_v1.02` e `Evento_Econf_v1.00`, sem reabrir a normalização da árvore gerada além da criação de mapeamentos manuais de payload e outcomes.
- Primary normative sources are identified: roadmap, MOC ABI, disponibilidade nacional, listagens oficiais do portal e XSDs extraídos sustentam o recorte; referências secundárias permanecem apenas complementares e não normativas.
- Handwritten versus generated boundaries are explicit: a nova orquestração ficará em `src/canonical/generic-event/` e `src/canonical/facade/`, com reuso pontual de `src/canonical/signing/` e `src/canonical/transport/`; `src/classes/`, `src/interfaces/`, `src/types/`, `src/enums/` e `xsd/` permanecem como inventário gerado ou normativo.
- Focused validation commands are defined: `npm run lint`, `npx prettier --check specs/009-generic-event-mvp/*.md specs/009-generic-event-mvp/contracts/*.md .github/copilot-instructions.md`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball` compõem o gate mínimo; `npm run generate` fica reservado para qualquer ajuste excepcional na árvore gerada.
- Release and package-surface impact is captured: a expectativa é de ampliação additive com uma nova operação root e atualizações de evidência em `src/public-contract.ts`; qualquer quebra de nome público, formato de outcome ou semântica de lote exigirá análise semver e nota de migração.

## Project Structure

### Documentation (this feature)

```text
specs/009-generic-event-mvp/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── public-generic-event-facade.md
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
    └── transport/

tests/
├── config/
├── contract/
├── fixtures/
├── integration/
└── unit/

docs/
├── _meta/
├── _sources/
└── notas-fiscais/
```

**Structure Decision**: Manter a topologia de pacote único e acrescentar uma camada manual dedicada em `src/canonical/generic-event/` para validação de lote, mapeamento por família, montagem de `envEvento`, leitura de `retEnvEvento` e classificação de outcomes. A fachada pública ficará em `src/canonical/facade/` e será reexportada por `src/canonical/index.ts` e `src/index.ts`; assinatura, serialização e transporte continuam como detalhes internos reaproveitados; a árvore gerada permanece como inventário interno, não como contrato operacional primário.

## Complexity Tracking

Nenhuma violação da constituição precisa ser justificada nesta fase.
