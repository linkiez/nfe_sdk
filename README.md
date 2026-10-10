# nfe-sdk

SDK em TypeScript para integracoes com NF-e, NFC-e e Manifestacao do Destinatario, publicado como pacote ESM com contrato publico controlado no import raiz.

O foco desta fase e oferecer uma base utilizavel para fluxos operacionais homologados, assinatura digital, transporte SOAP e validacao estrutural de XML sem expor a arvore gerada por XSD como API estavel.

> Para quem precisa integrar documentos fiscais eletrônicos com uma API mais previsivel, tipada e orientada a fluxos reais de SEFAZ, sem depender diretamente da arvore gerada por XSD.

## Por que usar

- pacote ESM com import raiz unico e contrato publico controlado
- superficie tipada para os fluxos promovidos do roadmap atual
- helpers de assinatura, serializacao e transporte sem misturar detalhes internos gerados
- boundaries explicitas quando um fluxo ainda nao faz parte do contrato estabilizado

## Onde ele ajuda

| Cenario               | O que o SDK oferece                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| Emissao e autorizacao | Montagem canonica, serializacao, assinatura e envio inicial de NF-e e NFC-e no recorte promovido  |
| Consultas SEFAZ       | Status de servico, situacao do documento, lote assíncrono, consultas por chave e NSU              |
| Eventos fiscais       | Cancelamento, carta de correcao, inutilizacao, EPEC, manifestacao e eventos genericos homologados |
| Integracao recipient  | Distribuicao DFe e manifestacao com cursor observavel e retorno estruturado                       |
| Validacao local       | Cálculo de chave, hash CSRT, XMLDSig e validacao XSD com classificacao consistente                |

## O que este pacote entrega hoje

- autorizacao inicial de NF-e em homologacao e autorizacao normal de producao para emissores SP identificados, com boundary explicita para outras rotas de contingencia
- facade inicial de NFC-e em homologacao para o cohort publicado de UFs
- assinatura digital de NF-e e eventos com validacao local de XMLDSig
- transporte SOAP 1.2 com classificacao estruturada de resultado
- consulta de status, situacao do documento, lote assíncrono e inscricao de contribuinte
- distribuicao DFe e Manifestacao do Destinatario no recorte homologado atual
- recuperacao posterior de documento do destinatario via continuidade observavel de `distNSU`
- submissao de eventos suportados, incluindo EPEC, carta de correcao, inutilizacao e pedido de prorrogacao de ICMS
- validacao XSD local com classificacao estruturada

## Requisitos

- Node.js `>=18.18`
- npm

## Instalacao

```bash
npm install nfe-sdk
```

## Comece por aqui

1. crie um `signingContext` com seu certificado A1
2. escolha o fluxo principal: autorizacao, consulta, evento ou distribuicao
3. injete um `requestExecutor` para controlar HTTP, timeout e observabilidade
4. trate `classification` e `coverageBoundary` como parte do contrato de integracao

## Uso rapido

O pacote publica apenas o import raiz:

```ts
import {
  authorizeNFCe,
  authorizeNFe,
  cancelNFe,
  changeManifestRecipientOperation,
  computeHashCSRT,
  computeNFeAccessKey,
  createEnviNFe,
  createNFe,
  createSigningContext,
  distributeRecipientDFe,
  executeNFeSoapService,
  generateNFCeSPQRCode,
  manifestRecipientOperation,
  prepareNFCeSigningPrerequisites,
  publicPackageContract,
  queryContributorRegistration,
  queryNFeByAccessKey,
  queryNFeByNSU,
  queryNFeDocumentSituation,
  queryNFeServiceStatus,
  reconcileNFeReceipt,
  resolveNFeServiceEndpoint,
  resolveUFAutorizador,
  retrieveNFeAuthorizationBatch,
  retrieveRecipientDocument,
  serializeEnviNFeXml,
  serializeNFeXml,
  signEventXml,
  signNFeXml,
  submitEPECEvent,
  submitGenericEvents,
  submitICMSDeferralEvent,
  submitNFeCorrectionLetter,
  submitNFeInutilization,
  validateNFeXsd,
} from 'nfe-sdk';
```

`publicPackageContract` continua sendo a ancora estavel para inspecionar o contrato publicado nesta fase.

## Primeiros passos

### 1. Criar o contexto de assinatura

```ts
import { createSigningContext } from 'nfe-sdk';

const signingContext = await createSigningContext({
  passphrase: process.env.NFE_CERT_PASSPHRASE ?? '',
  source: {
    contentBase64: process.env.NFE_CERT_PFX_BASE64 ?? '',
    type: 'in-memory-content',
  },
});
```

### 2. Autorizar uma NF-e

```ts
import { authorizeNFe, createSigningContext } from 'nfe-sdk';

const signingContext = await createSigningContext({
  passphrase: process.env.NFE_CERT_PASSPHRASE ?? '',
  source: {
    contentBase64: process.env.NFE_CERT_PFX_BASE64 ?? '',
    type: 'in-memory-content',
  },
});

const authorization = await authorizeNFe({
  documents: {
    kind: 'single-document',
    payload: {
      documentId: 'NFE-123',
      environment: 'homologation',
      version: '4.00',
    },
  },
  environment: 'homologation',
  requestExecutor,
  signingContext,
  timeoutMs: 5000,
});

console.log(authorization.classification, authorization.protocolNumber);
```

Quando a chamada em `production` informar uma UF emissora que delega para `SVC-AN` ou `SVC-RS`, `authorizeNFe` devolve `contingency-boundary` explicita em vez de executar fallback silencioso.

Para autorizar uma NF-e SP em producao, informe `environment: 'production'`, identifique cada documento por `payload.cUF: '35'` e/ou chave de acesso de 44 digitos, e injete um `requestExecutor` configurado com certificado cliente para mTLS. O executor `fetch` padrao nao configura certificado cliente. Identidades ausentes, inconsistentes, mistas ou de outra UF sao recusadas antes do transporte. Respostas com `tpAmb` inesperado ou sem `nProt`/`nRec` obrigatorio retornam `protocol-error`; a evidencia de envelopes remove valores de credenciais e material de certificado/chave, preservando metadados de diagnostico.

Uma autorizacao que retorna `nRec` continua pelo fluxo existente `reconcileNFeReceipt` com `routingContext: { authorizer: 'SP', environment: 'production' }`. A reconciliacao faz uma unica consulta do recibo conhecido: nao reenvia a NF-e nem inicia polling automatico. Homologacao mantem seu comportamento anterior.

### 3. Executar uma consulta SOAP direta

```ts
import { executeNFeSoapService, resolveNFeServiceEndpoint } from 'nfe-sdk';

const endpoint = resolveNFeServiceEndpoint({
  environment: 'homologation',
  service: 'nfe-status-service',
});

const outcome = await executeNFeSoapService({
  environment: 'homologation',
  payloadXml: '<consStatServNFe versao="4.00">...</consStatServNFe>',
  requestExecutor: async () => ({
    headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
    responseXml: '<soap:Envelope>...</soap:Envelope>',
    status: 200,
  }),
  service: 'nfe-status-service',
  timeoutMs: 5000,
});

console.log(endpoint.endpointUrl, outcome.classification);
```

## Guias por fluxo

### NF-e

- `createNFe` monta o documento canonico inicial sem exigir consumo direto da arvore gerada
- `createEnviNFe` monta o lote canonico inicial para transporte
- `serializeNFeXml` e `serializeEnviNFeXml` produzem XML deterministico
- `signNFeXml` aplica XMLDSig e valida localmente antes de retornar
- `authorizeNFe` orquestra a autorizacao operacional inicial para documento unico ou lote suportado
- `reconcileNFeReceipt` promove a reconciliacao dedicada de `nRec` conhecido com classificacoes operacionais como `authorized`, `rejected`, `denied`, `pending`, `unavailable` e `inconclusive`
- `retrieveNFeAuthorizationBatch` consulta o processamento assíncrono do lote enviado
- `queryNFeServiceStatus` e `queryNFeDocumentSituation` devolvem resultados estruturados de consulta; `queryNFeDocumentSituation` agora publica `state.primaryState`, `state.evidence` e `pendingReason` quando aplicavel
- `submitNFeInutilization`, `cancelNFe` e `submitNFeCorrectionLetter` cobrem manutencoes homologadas do recorte atual e agora devolvem `updatedState` coerente com a leitura operacional do documento
- `publicPackageContract.operationalBoundaries` explicita que polling generico, reconciliacao multi-documento, persistencia local e variacoes dominantes por `UF` continuam fora do recorte atual, mesmo apos a promocao de `nRec` conhecido

### NFC-e

- `authorizeNFCe` publica a facade inicial de NFC-e em homologacao para o cohort promovido `SP + PR`
- `prepareNFCeSigningPrerequisites` prepara `chNFe`, `cDV` e `hashCSRT` a partir de insumos estruturados
- `generateNFCeSPQRCode` gera a URL oficial paulista de `QR Code` no import raiz para `SP`, com semantica distinta de `homologation` e `production`, retornando `qrCodeUrl`, `baseUrl`, `accessKey`, `cscId` e `uf` sem expor o token bruto
- o helper de `QR Code` e propositalmente menor que o cohort de autorizacao: `PR` continua fora deste recorte e recebe `unsupported-state` antes de qualquer composicao bem-sucedida
- quando `requestedCapabilities` informa QR Code, DANFE NFC-e, administracao de CSC, credenciamento automatizado ou contingencia offline, a facade responde com `unsupported-scope` antes do transporte
- UFs fora do cohort publicado retornam `unsupported-state`
- a promocao atual segue a trilha editorial `RFL-006`, `RTM-007`, `RTM-011` e `RTM-012` sem abrir novo entrypoint ou importar superfices profundas
- `PB`, `GO`, `SC`, `CE` e `MS` continuam fora deste corte porque ainda concentram gaps estaduais dominantes em `CSC`, `QR Code`, politicas de acesso, fechamento de captura ou consolidacao especifica de `NFC-e`

Exemplo rapido do helper paulista:

```ts
import { generateNFCeSPQRCode } from 'nfe-sdk';

const qrCode = generateNFCeSPQRCode({
  accessKey: '35260512345678000123650010000001231123456781',
  csc: {
    cscId: '000001',
    cscToken: process.env.NFCE_SP_CSC_TOKEN ?? '',
  },
  environment: 'homologation',
  uf: 'SP',
});

if ('classification' in qrCode) {
  console.log(qrCode.classification, qrCode.uf);
} else {
  console.log(qrCode.qrCodeUrl, qrCode.baseUrl);
}
```

### Assinatura digital

- `createSigningContext` suporta certificado A1 em arquivo `.pfx` ou em memoria
- `signEventXml` assina eventos suportados e falha explicitamente quando o payload sai do boundary publicado
- `computeNFeAccessKey` e `computeHashCSRT` permanecem helpers determinísticos de raiz

### Transporte e consultas

- `resolveUFAutorizador` ajuda a inspecionar o autorizador inferido antes de subir uma chamada operacional mais sensivel
- `resolveNFeServiceEndpoint` resolve endpoints publicados para o catalogo inicial de transporte
- `executeNFeSoapService` devolve `TransportOutcome` com classificacoes como `success`, `timeout`, `usage-error`, `unavailable`, `functional-rejection` e `protocol-error`
- `queryContributorRegistration`, `queryNFeByAccessKey` e `queryNFeByNSU` expõem consultas adicionais do recorte atual

### Recipient e eventos

- `distributeRecipientDFe` executa distribuicao DFe via `distNSU` com cursor observavel
- `manifestRecipientOperation` registra os quatro eventos basicos de Manifestacao do Destinatario
- `retrieveRecipientDocument` executa a recuperacao posterior do documento esperado sem acoplar o download ao registro do evento
- `changeManifestRecipientOperation` ajusta a operacao da facade de manifestacao conforme o boundary publicado
- `submitGenericEvents` cobre os eventos homologados suportados nesta fase
- `submitEPECEvent` publica o fluxo root minimo para contingencia EPEC
- `submitICMSDeferralEvent` simplifica o lote unitario do evento `110764`

### Validacao estrutural

- `validateNFeXsd` valida XML de NF-e contra o XSD oficial com classificacao `valid`, `invalid`, `xmllint-unavailable`, `schema-not-found` ou `execution-error`

## Limites do contrato publico

O contrato normativo desta fase continua sendo `package.json`/`exports`. O README explica a superficie publicada, mas nao substitui o metadata do pacote.

Ficam fora da promessa de compatibilidade desta fase:

- `manifest.json` permanece interno e nao faz parte da superficie root estavel
- `enviNFe` permanece como envelope de transporte nao assinado nesta fase
- a arvore gerada em `src/classes/`
- a arvore gerada em `src/interfaces/`
- a arvore gerada em `src/types/`
- a arvore gerada em `src/enums/`
- `src/manifest.json`
- qualquer subpath ou importacao profunda
- trust chain automatizada, aquisicao de certificado, suporte a `A3`, `QR Code` fora do helper paulista de `SP`, renderer `DANFE NFC-e`, consulta do consumidor, administracao de `CSC`, contingencia `offline` e rollout operacional multi-UF
- `consNSU`, `consChNFe`, producao, polling agressivo e automacao assistida de backoffice para continuidade do destinatario

## Exemplos do repositório

Os exemplos abaixo consomem o pacote compilado via import raiz `nfe-sdk`:

```bash
npm run build
npx tsx examples/validation/validate-xsd.ts
npx tsx examples/nfe/authorize.ts
npx tsx examples/recipient/manifest.ts
```

Variaveis esperadas:

- `examples/nfe/authorize.ts`: `NFE_CERT_PFX_PATH`, `NFE_CERT_PASSPHRASE`, `NFE_DOCUMENT_ID`
- `examples/recipient/manifest.ts`: `NFE_CERT_PFX_PATH`, `NFE_CERT_PASSPHRASE`, `NFE_ACCESS_KEY`, `NFE_ACTOR_DOCUMENT_NUMBER`
- `examples/validation/validate-xsd.ts`: `NFE_XML_PATH` e `NFE_XSD_DIR` sao opcionais

## Desenvolvimento local

Scripts principais:

```bash
npm run generate
npm run build
npm run typecheck
npm run lint
npm run docs:check
npm run format:check
npm test
npm run validate:tarball
```

Baseline recomendado para validar o pacote publicado:

```bash
npm run lint
npm run docs:check
npm run format:check
npm run typecheck
npm test
npm run build
npm run validate:tarball
```

## Documentacao adicional

- [docs/capacidades-sdk.md](./docs/capacidades-sdk.md): catalogo documental de capacidades e lacunas
- [docs/index.md](./docs/index.md): indice documental consolidado
- [docs/roadmap/coverage-matrix.md](./docs/roadmap/coverage-matrix.md): matriz viva da superficie publicada e lacunas visiveis do roadmap
- [docs/roadmap/proximas-iteracoes-recomendadas.md](./docs/roadmap/proximas-iteracoes-recomendadas.md): trilha atual de continuidade do produto
- [specs/003-public-package-contract/contracts/public-package-contract.md](./specs/003-public-package-contract/contracts/public-package-contract.md): contrato de referencia desta fase

## Compatibilidade

- mudancas no import raiz exigem revisao explicita de compatibilidade
- promocao de subpaths ou artefatos gerados depende de decisao contratual futura
- evidencias do contrato devem permanecer rastreaveis em `package.json`, `src/index.ts`, README e nos artefatos da feature

## Licenca

Este projeto esta licenciado sob a Apache License 2.0. Veja [LICENSE](./LICENSE).
