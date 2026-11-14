# @linkiez/nfe-sdk

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
- autorizacao de NFC-e em homologacao para o cohort `SP + PR` e autorizacao normal de producao para NFC-e modelo 65 de SP
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

O pacote e publicado no GitHub Packages (registro privado do escopo `@linkiez`).
Configure o registro e o token de leitura (`read:packages`) por variavel de ambiente,
nunca em arquivo versionado:

```ini
# .npmrc do consumidor
@linkiez:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_PACKAGES_TOKEN}
```

```bash
npm install @linkiez/nfe-sdk
```

## Desenvolvimento local sem publicar

O unico consumidor e o `JCMserver3` (repositorio irmao `../JCMserver3`, com `node_modules`
instalado). Para ver uma alteracao do SDK no servidor sem publicar uma versao:

```bash
npm run sync:local             # build + copia para ../JCMserver3/node_modules/@linkiez/nfe-sdk
npm run sync:local:skip-build  # reaproveita o dist atual
npm run sync:local:revert      # remove a copia local e restaura a versao publicada
```

- A copia grava `.local-sync.json` (versao, commit, arvore suja, data/hora, origem) e o
  script imprime `modo local ativo`; o servidor registra um aviso na inicializacao.
- `package.json` e `yarn.lock` do consumidor nao sao alterados.
- `yarn check:no-local-sdk` (JCMserver3, pre-commit, pre-push e CI) falha enquanto o
  marcador existir: reverta antes de commitar ou entregar.
- Saidas: `0` sucesso, `1` falha de build/contrato/reversao (nada aplicado), `2` argumentos
  invalidos, `3` consumidor ou `node_modules` ausente.
- Ferramenta de desenvolvimento: nunca use em builds de entrega, imagens ou producao.

## Comece por aqui

1. crie um `signingContext` com seu certificado A1
2. escolha o fluxo principal: autorizacao, consulta, evento ou distribuicao
3. injete um `requestExecutor` para controlar HTTP, timeout e observabilidade
4. trate `classification` e `coverageBoundary` como parte do contrato de integracao

## Uso rapido

O pacote publica apenas o import raiz:

```ts
import {
  assertRuntimeDependencies,
  authorizeNFCe,
  authorizeNFe,
  buildNFCeDocument,
  BuildNFCeDocumentError,
  buildNFeDocument,
  BuildNFeDocumentError,
  cancelNFe,
  changeManifestRecipientOperation,
  checkRuntimeDependencies,
  computeHashCSRT,
  computeNFeAccessKey,
  createEnviNFe,
  createMutualTlsRequestExecutor,
  createNFe,
  createSigningContext,
  distributeRecipientDFe,
  executeNFeSoapService,
  generateNFCeSPQRCode,
  getNFCeAcceptedFiscalCodes,
  isNFCeResendWindowOpen,
  manifestRecipientOperation,
  prepareNFCeSigningPrerequisites,
  prepareNFCeSPOffline,
  reconcileNFCeSPOffline,
  remountNFCeDocument,
  renderNFCeSPDANFE,
  renderNFeDANFE,
  distributeMDFe,
  MDFeDamdfeUsageError,
  MDFeParseError,
  MDFeTransportError,
  parseMDFeXml,
  queryMDFeByAccessKey,
  queryMDFeNotClosed,
  queryMDFeServiceStatus,
  renderDAMDFE,
  validateMDFeXml,
  RuntimeDependencyError,
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
} from '@linkiez/nfe-sdk';
```

`publicPackageContract` continua sendo a ancora estavel para inspecionar o contrato publicado nesta fase.

## Primeiros passos

### 1. Criar o contexto de assinatura

```ts
import { createSigningContext } from '@linkiez/nfe-sdk';

const signingContext = await createSigningContext({
  passphrase: process.env.NFE_CERT_PASSPHRASE ?? '',
  source: {
    contentBase64: process.env.NFE_CERT_PFX_BASE64 ?? '',
    type: 'in-memory-content',
  },
});
```

### 1.1. Montar o documento da NF-e

```ts
import {
  buildNFeDocument,
  createSigningContext,
  signNFeXml,
  validateNFeXsd,
} from '@linkiez/nfe-sdk';

const built = buildNFeDocument(draft); // nomes do XSD; decimais como texto
const signedXml = await signNFeXml({ signingContext, unsignedXml: built.xml });
validateNFeXsd(signedXml); // exige xmllint
```

`buildNFeDocument` deriva `cNF`, `cDV`, a chave de acesso (`built.accessKey`), o `Id` e a numeracao dos itens, emite na ordem do layout 4.00 e recusa, antes de assinar, entrada incompleta ou nao suportada (`BuildNFeDocumentError.issues`). Para autorizar, use `authorizeNFe({ documents: { kind: 'built-document', payload: built }, ... })`.

#### Montar o documento da NFC-e (modelo 65)

```ts
import { buildNFCeDocument } from '@linkiez/nfe-sdk';

const built = buildNFCeDocument(draft); // mesmos nomes do XSD; mod 65, tpImp 4 ou 5
```

`buildNFCeDocument` reaproveita o construtor da NF-e (mesmo XSD, chave e serializacao) e antes confere o que so a NFC-e fixa: modelo 65, saida, operacao interna, consumidor final, emissao normal ou contingencia offline (com `dhCont` e `xJust`, so presencial), sem transporte, cobranca nem entrega, e com pagamento. O consumidor (`dest`) e opcional. Problemas voltam todos juntos em `BuildNFCeDocumentError.issues`. Alem da identidade, aplica as regras de validacao do modelo 65 (MOC 7.0 Anexo I), cada uma com o codigo de rejeicao que antecipa: CFOP, CST e CSOSN aceitos, grupos vedados (IPI, II, PIS ST, COFINS ST, exportacao, compra, cana), pagamento coerente com o total e com troco, consumidor obrigatorio acima de R$ 10.000,00, total ate R$ 200.000,00 e a descricao do primeiro item em homologacao. `isNFCeResendWindowOpen` e `remountNFCeDocument` apoiam o reenvio: o mesmo XML assinado so pode ser reenviado em ate 5 minutos da emissao; depois, consulte pela chave e, se a nota nao constar, remonte com nova data de emissao e novo `cNF` (mesmo numero e serie). `getNFCeAcceptedFiscalCodes()` devolve as listas de CFOP, CST e CSOSN aceitos para o cliente restringir as escolhas sem repetir a regra.

### 1.2. DANFE da NF-e autorizada

```ts
import { renderNFeDANFE } from '@linkiez/nfe-sdk';

const pdf = await renderNFeDANFE({ authorizedXml: outcome.authorizedXml }); // Uint8Array
```

`renderNFeDANFE` desenha o DANFE (PDF, via `node-sped-pdf`) a partir do `nfeProc` exato de uma NF-e modelo 55 autorizada (`cStat` 100 ou 150); recusa XML malformado, de outro modelo ou sem autorizacao (`NFeDanfeUsageError`). O renderizador e carregado sob demanda e depende do modulo nativo `canvas`.

### MDF-e (somente consumo)

O SDK le MDF-e de terceiros do autorizador nacional (SVRS); nao emite, encerra nem cancela MDF-e. Os esquemas usados sao os pacotes `PL_MDFe_300b_NT012025_1.05` (documentos, eventos e consultas) e `PL_MDFeDistDFe_100` (distribuicao), adotados por decisao do mantenedor (registro em `specs/032-mdfe-baseline-resolution/research.md`).

- `parseMDFeXml(xml)` le `mdfeProc`/`MDFe` e `procEventoMDFe`/`eventoMDFe` (chave, emitente, rota, totais, protocolo, evento) e recusa XML invalido, raiz desconhecida ou versao diferente de `3.00` (`MDFeParseError`).
- `validateMDFeXml(xml)` valida pelo XSD com `xmllint` (documentos, eventos, mensagens de consulta e de distribuicao); raiz ou versao desconhecida devolve `schema-not-found`.
- `queryMDFeServiceStatus`, `queryMDFeByAccessKey` (situacao, protocolo e eventos) e `queryMDFeNotClosed` (MDF-e nao encerrados do emitente) usam SOAP 1.2 com `mdfeDadosMsg` e exigem um `requestExecutor` com TLS mutuo.
- `distributeMDFe` busca documentos e eventos de interesse por `ultNSU` (`distNSU`) ou por um NSU (`consNSU`), descompacta os `docZip` e devolve o cursor; impoe `nextAllowedAt` de 1 hora com `ultNSU = maxNSU` e classifica a rejeicao 678 como `misuse`.
- `renderDAMDFE` (entrada `{ authorizedXml }`) desenha um resumo em PDF (chave com codigo de barras Code 128C, protocolo, emitente, rota, totais e chaves dos documentos) so a partir do XML autorizado; nao e o leiaute oficial completo (sem QR Code).

Producao (feature 039): `queryMDFeServiceStatus`, `queryMDFeNotClosed` e `distributeMDFe` foram promovidas e consultam a rota de producao da SVRS; `queryMDFeByAccessKey` segue respondendo `unsupported` em producao ate ter evidencia de homologacao com uma chave real. O registro por operacao esta em `specs/039-mdfe-sp-production/research.md`.

### 1.3. Dependências de execução

```ts
import { assertRuntimeDependencies } from '@linkiez/nfe-sdk';

assertRuntimeDependencies(); // lança RuntimeDependencyError se faltar xmllint ou o Node for < 18.18
```

`assertRuntimeDependencies` falha na inicialização, com todas as pendências em `RuntimeDependencyError.problems`, quando o host não tem Node.js 18.18+ ou `xmllint` (libxml2), usado por `validateNFeXsd` para validar o XML contra o XSD oficial. `checkRuntimeDependencies` devolve o mesmo diagnóstico sem lançar.

### 2. Autorizar uma NF-e

```ts
import { authorizeNFe, createSigningContext } from '@linkiez/nfe-sdk';

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
import {
  executeNFeSoapService,
  resolveNFeServiceEndpoint,
} from '@linkiez/nfe-sdk';

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

- `authorizeNFCe` preserva homologacao para `SP + PR` e aceita producao somente para NFC-e modelo 65 de SP
- a producao exige `unsignedXml` com chave, `cUF`, modelo e `tpAmb` coerentes, `SigningContext` do SDK, `RequestExecutor` configurado pelo integrador para mTLS e CSC provisionado externamente
- a chamada de producao assina o XML, envia um unico documento com `indSinc=1` ao autorizador normal de SP e nao tenta novamente, consulta recibo ou usa SVC-AN como fallback
- quando a resposta confirma autorizacao e o CSC foi informado, `authorizeNFCe` inclui `qrCodeUrl` v3 vinculado a chave e ambiente; rejeicoes e resultados incertos nao incluem URL, e o token CSC nao e retornado
- `prepareNFCeSigningPrerequisites` prepara `chNFe`, `cDV` e `hashCSRT` a partir de insumos estruturados
- `generateNFCeSPQRCode` gera a URL oficial paulista de `QR Code` no import raiz para `SP`, com semantica distinta de `homologation` e `production`, retornando `qrCodeUrl`, `baseUrl`, `accessKey`, `cscId` e `uf` sem expor o token bruto
- `renderNFCeSPDANFE` aceita evidencia autorizada correlacionada ou registro offline assinado da NFC-e SP e gera HTML autocontido; o QR permanece inline, o estado pendente nao exibe protocolo e homologacao recebe o aviso sem valor fiscal
- `renderNFCeSPDANFE({ authorizedXml })` desenha o DANFE a partir do `nfeProc` autorizado guardado pelo integrador (sem a evidencia SOAP): confere chave, SP, modelo 65, ambiente, protocolo (`cStat` 100 ou 150) e o QR v3 da chave, e devolve o SHA-256 do XML desenhado
- ciclo de vida da NFC-e de SP: a chave de modelo 65 faz `queryNFeDocumentSituation` e `cancelNFe` usarem os servicos `nfce-document-situation` e `nfce-event` (hosts `nfce.fazenda.sp.gov.br` e `homologacao.nfce.fazenda.sp.gov.br`); `queryNFeServiceStatus({ documentModel: 65 })` consulta o `nfce-status-service`; `cancelNFe` com `signedEvent.substituteAccessKey` e `applicationVersion` envia o cancelamento por substituicao (110112, valido contra o XSD oficial); a carta de correcao e recusada para a NFC-e; `submitNFeInutilization` com `inutilization.model = '65'` usa `nfce-inutilization` e e recusada sem requisicao para SP, AC e BA (dispensada desde 2026-11-01). Todos esses campos sao opcionais e nao alteram o comportamento da NF-e
- `prepareNFCeSPOffline` valida e assina localmente NFC-e SP com `tpEmis=9`, devolve o XML exato, SHA-256, prazo e URL offline QR v2 em estado `pending-reconciliation`; a preparacao nao transmite nem representa autorizacao
- o integrador calcula o prazo ate o fim do primeiro dia util seguinte com o calendario aplicavel, persiste com seguranca o XML/DANFE e controla concorrencia e reenvios; o SDK valida o instante informado e nao oferece persistencia nem retry automatico
- `renderNFCeSPDANFE({ offlineRecord })` imprime `EMITIDA EM CONTINGÊNCIA Pendente de autorização`, usa o QR v2 do registro e omite protocolo de autorizacao
- `reconcileNFCeSPOffline` faz uma unica submissao explicita do XML retido; somente protocolo `100` correlacionado autoriza, `103` permanece recebido e duplicidade, timeout ou resposta ambigua exigem tratamento do integrador
- o renderer aceita apenas evidencias autorizadas coerentes, imprime todos os itens, e suporta papel de 56 a 210 mm; nao autoriza documentos nem produz PDF ou layouts de outras UFs
- o helper de `QR Code` e propositalmente menor que o cohort de autorizacao: `PR` continua fora deste recorte e recebe `unsupported-state` antes de qualquer composicao bem-sucedida
- quando `requestedCapabilities` informa QR Code, DANFE NFC-e, administracao de CSC, credenciamento automatizado ou contingencia offline, `authorizeNFCe` responde com `unsupported-scope` antes do transporte; o fluxo offline SP usa a facade dedicada
- UFs fora do cohort publicado retornam `unsupported-state`
- a promocao atual segue a trilha editorial `RFL-006`, `RTM-007`, `RTM-011` e `RTM-012` sem abrir novo entrypoint ou importar superfices profundas
- `PB`, `GO`, `SC`, `CE` e `MS` continuam fora deste corte porque ainda concentram gaps estaduais dominantes em `CSC`, `QR Code`, politicas de acesso, fechamento de captura ou consolidacao especifica de `NFC-e`

Exemplo rapido do helper paulista:

```ts
import { generateNFCeSPQRCode } from '@linkiez/nfe-sdk';

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

Fluxo offline SP e independente da autorizacao normal e deve ser iniciado somente quando a contingencia oficial se aplicar:

```ts
const offlineRecord = await prepareNFCeSPOffline({
  csc: {
    cscId: process.env.NFCE_SP_CSC_ID ?? '',
    cscToken: process.env.NFCE_SP_CSC_TOKEN ?? '',
  },
  businessCalendarEvidence: officialBusinessCalendarEvidence,
  environment: 'production',
  signingContext,
  submissionDeadline: officialSubmissionDeadline,
  unsignedXml,
});

const pendingDanfe = await renderNFCeSPDANFE({ offlineRecord });
const reconciliation = await reconcileNFCeSPOffline({
  offlineRecord,
  requestExecutor,
});
```

Armazene o XML assinado e o resultado de cada tentativa de forma duravel. `officialBusinessCalendarEvidence` deve registrar a fonte/calendario, o fuso IANA e cada data avaliada ate o primeiro dia util seguinte; o SDK verifica a sequencia e o prazo, mas nao autentica a fonte. Nao repita uma chamada ambigua sem conciliar antes seu estado local.

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
- trust chain automatizada, aquisicao de certificado, suporte a `A3`, `QR Code` fora do helper paulista de `SP`, expansao do renderer DANFE para outros recortes, consulta do consumidor, administracao de `CSC`, contingencias offline fora do fluxo SP modelo 65 e rollout operacional multi-UF
- `consNSU`, `consChNFe`, producao, polling agressivo e automacao assistida de backoffice para continuidade do destinatario

## Exemplos do repositório

Os exemplos abaixo consomem o pacote compilado via import raiz `@linkiez/nfe-sdk`:

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
