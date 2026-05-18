# Quickstart: Add NFe Operational MVP

## 1. Confirm the current root contract and current feature scope

Antes de abrir o MVP operacional, confirme o baseline do pacote e das fases anteriores:

```bash
sed -n '1,220p' package.json
sed -n '1,220p' src/index.ts
sed -n '1,260p' src/public-contract.ts
sed -n '1,260p' specs/007-nfe-operational-mvp/spec.md
sed -n '1,260p' specs/007-nfe-operational-mvp/plan.md
```

O objetivo desta fase e manter o import raiz como unico entrypoint runtime estavel e acrescentar apenas o primeiro conjunto operacional de NFe em homologacao.

## 2. Keep operational facades above canonical, signing, and transport layers

Implemente o MVP como orquestracao sobre camadas ja existentes:

- use `src/canonical/nfe/` para composicao de entradas, resultados e mapeadores operacionais
- use `src/canonical/facade/` apenas para wrappers publicos do import raiz
- reutilize serializacao, assinatura e transporte como detalhes internos
- preserve `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/` como inventario interno
- mantenha producao, multi-UF e contingencias especiais fora do escopo inicial

## 3. Start with the public root operations and expected input shape

O contrato desta fase deve permanecer orientado a dados canonicos e a resultados de aplicacao:

```ts
import {
  authorizeNFe,
  cancelNFe,
  queryNFeServiceStatus,
  queryNFeDocumentSituation,
  submitNFeCorrectionLetter,
  submitNFeInutilization,
} from 'nfe-sdk';

const authorization = await authorizeNFe({
  environment: 'homologation',
  documents: {
    kind: 'single-document',
    payload: {
      documentId: 'NFE-123',
      environment: 'homologation',
      version: '4.00',
    },
  },
  signingContext,
  timeoutMs: 5000,
  requestExecutor,
});

const serviceStatus = await queryNFeServiceStatus({
  environment: 'homologation',
  requestExecutor,
});

const documentSituation = await queryNFeDocumentSituation({
  accessKey: '35190500000000000000550010000000011000000010',
  environment: 'homologation',
  requestExecutor,
});

const inutilization = await submitNFeInutilization({
  canonicalPayload: {
    ano: '2025',
    cnpj: '00000000000000',
    nNFFin: '10',
    nNFIni: '10',
    serie: '1',
    xJust: 'Numeracao nao utilizada em homologacao',
  },
  environment: 'homologation',
  requestExecutor,
});

const cancellation = await cancelNFe({
  accessKey: '35190500000000000000550010000000011000000010',
  canonicalPayload: {
    nSeqEvento: '1',
    tpEvento: '110111',
    xJust: 'Cancelamento homologado',
  },
  environment: 'homologation',
  requestExecutor,
});

const correctionLetter = await submitNFeCorrectionLetter({
  accessKey: '35190500000000000000550010000000011000000010',
  canonicalPayload: {
    nSeqEvento: '1',
    tpEvento: '110110',
    xCorrecao: 'Correcao homologada do campo complementar',
  },
  environment: 'homologation',
  requestExecutor,
});
```

Nesta fase, a entrada principal nao deve exigir XML bruto e a consulta de situacao deve usar apenas a chave de acesso.
As tres manutencoes obrigatorias tambem devem permanecer explicitas na superficie root e devolver resultados estruturados para o recorte homologado.

## 4. Model authorization to support single document and batch without splitting the public contract

Comece pelo fluxo testavel de autorizacao que aceita os dois formatos:

- uma NFe unica deve poder seguir pela mesma facade publica da autorizacao
- um lote deve reutilizar `enviNFe` internamente sem virar um contrato publico separado
- resultados intermediarios devem ser devolvidos de forma observavel, sem polling automatico inicial
- o acompanhamento posterior deve ser resolvido pela consulta de situacao por chave de acesso

## 5. Keep maintenance operations explicit and operation-specific

As tres manutencoes obrigatorias deste MVP devem ficar explicitas na superficie publica:

- inutilizacao
- cancelamento
- carta de correcao

Mesmo quando compartilharem assinatura e transporte, cada uma deve manter entradas e saidas legiveis para o integrador.

## 6. Reuse the transport taxonomy instead of inventing a second error language

O MVP so fica coerente quando a camada operacional reutiliza a evidencia e a classificacao do transporte:

- preserve `TransportOutcome` como evidencia subjacente
- traduza para resultados de aplicacao apenas o necessario para uso da operacao
- mantenha separado erro de transporte, indisponibilidade e rejeicao funcional
- evite introduzir retry, polling ou circuit-breakers neste primeiro slice

## 7. Validate the feature with focused package gates

Execute o gate minimo desta feature:

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
npm run validate:tarball
```

Se alguma mudanca excepcional atingir a arvore gerada, rode tambem:

```bash
npm run generate
```

## 8. Review scope limits before moving to `/speckit.tasks`

Antes de gerar tarefas, confirme que:

- o import raiz continua sendo a superficie runtime estavel
- a entrada publica usa dados canonicos e nao XML bruto como contrato principal
- a autorizacao cobre NFe unica e lote sem duplicar a facade publica
- a consulta inicial de situacao usa apenas chave de acesso
- inutilizacao, cancelamento e carta de correcao permanecem obrigatorias neste MVP
- producao, multi-UF, polling automatico e contingencias especiais continuam deferidos
