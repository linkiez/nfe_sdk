# nfe-sdk

SDK em TypeScript para evoluir de uma base gerada a partir de XSDs da NF-e, NFC-e e Manifestacao do Destinatario para um pacote npm ESM com contrato publico controlado.

## Contrato publico minimo desta fase

Nesta fase, o pacote publica somente o import raiz e uma superficie funcional enxuta para a slice canonica inicial, o primeiro slice aditivo de assinatura digital e o primeiro slice aditivo de transporte SOAP:

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
  manifestRecipientOperation,
  prepareNFCeSigningPrerequisites,
  publicPackageContract,
  queryContributorRegistration,
  queryNFeByAccessKey,
  queryNFeByNSU,
  queryNFeDocumentSituation,
  queryNFeServiceStatus,
  resolveNFeServiceEndpoint,
  resolveUFAutorizador,
  retrieveNFeAuthorizationBatch,
  serializeEnviNFeXml,
  serializeNFeXml,
  signEventXml,
  signNFeXml,
  submitEPECEvent,
  submitGenericEvents,
  submitNFeCorrectionLetter,
  submitNFeInutilization,
  validateNFeXsd,
  submitICMSDeferralEvent,
} from 'nfe-sdk';
```

`publicPackageContract` descreve o contrato publicado e serve como ancora estavel para as proximas fases funcionais.

`authorizeNFe` orquestra a autorizacao operacional inicial para uma NFe unica ou um lote suportado a partir de dados canonicos, devolvendo um resultado estruturado com classificacao, recibo ou protocolo e evidencia de transporte.

`authorizeNFCe` inicia a facade root additive de NFC-e em homologacao para um unico documento, reaproveitando o pipeline operacional existente com o cohort promovido `SP + PR`, retornando `unsupported-state` para UFs fora desse cohort e `unsupported-scope` quando a aplicacao explicita superficies deferidas por `requestedCapabilities`.

`createNFe` monta o documento canonico inicial de `NFe` sem exigir importacao direta da arvore gerada.

`createEnviNFe` monta o lote canonico inicial de `enviNFe` com base no mesmo recorte funcional.

`createSigningContext` prepara um contexto reutilizavel de assinatura digital a partir de um certificado A1 em arquivo `.pfx` ou em memoria.

`computeNFeAccessKey` calcula `chNFe` e `cDV` a partir dos campos canonicos ja normalizados do documento.

`computeHashCSRT` calcula o `hashCSRT` com base em `CNPJ`, `idCSRT` e `CSRT`, preservando esse passo como helper deterministico de raiz.

`serializeNFeXml` e `serializeEnviNFeXml` produzem XML deterministico para o mesmo recorte inicial.

`signEventXml` assina um `evento` suportado com base no mesmo contexto reutilizavel de assinatura, valida localmente o XMLDSig e falha explicitamente quando o `infEvento Id` ou o payload saem do boundary publicado.

`signNFeXml` recebe um XML nao assinado de `NFe`, aplica XMLDSig, valida localmente a assinatura antes do retorno e devolve o XML assinado correspondente.

`prepareNFCeSigningPrerequisites` prepara `chNFe`, `cDV` e `hashCSRT` para `NFC-e` a partir de insumos estruturados, validando `CSC` e `CSRT` sem apresentar esse passo como autorizacao completa.

`resolveNFeServiceEndpoint` resolve a entrada versionada do catalogo inicial de transporte para `homologation`, `nfe-status-service` e `nfe-authorization` usando os endpoints compartilhados da SVAN publicados no catalogo inicial `2026-05-18-initial-draft`.

`resolveUFAutorizador` determina o autorizador SEFAZ publicado para a UF e o modelo fiscal dentro do recorte atual.

`retrieveNFeAuthorizationBatch` consulta o lote de autorizacao ja enviado e devolve o estado estruturado do processamento assíncrono.

`executeNFeSoapService` monta o envelope SOAP 1.2, escolhe o endpoint homologado suportado, executa a chamada com executor injetado ou default e devolve `TransportOutcome` com classificacao e evidencia minima da troca.

No slice inicial, `TransportOutcome.classification` distingue pelo menos `success`, `timeout`, `usage-error`, `unavailable`, `functional-rejection` e `protocol-error`, sem misturar transporte com orquestracao de dominio fiscal.

`queryNFeServiceStatus` devolve um retrato estruturado do status operacional do servico em homologacao sem exigir leitura manual do XML de retorno.

`queryNFeDocumentSituation` consulta a situacao do documento por chave de acesso e devolve um resultado estruturado, inclusive quando a resposta ainda e inconclusiva do ponto de vista operacional.

`submitNFeInutilization` executa a manutencao de inutilizacao em homologacao e devolve um resultado estruturado com classificacao operacional, protocolo quando disponivel e evidencia de transporte.

`cancelNFe` executa o fluxo homologado de cancelamento sobre a chave de acesso informada e preserva a evidencia do transporte no resultado operacional.

`submitNFeCorrectionLetter` executa a carta de correcao homologada com resultado estruturado e boundary explicita quando o ambiente solicitado fica fora do escopo publicado.

`submitEPECEvent` publica o fluxo root minimo para emissao em contingencia EPEC dentro do boundary operacional atualmente estabilizado.

`distributeRecipientDFe` executa a distribuicao DFe do lado do destinatario via `distNSU`, em homologacao, com cursor observavel e envelopes estruturados que distinguem resumo, documento completo e outros payloads retornados em `docZip`.

`manifestRecipientOperation` registra um dos quatro eventos basicos de Manifestacao do Destinatario (`210200`, `210210`, `210220` e `210240`) e devolve classificacao operacional, protocolo quando houver e a marca contratual de que o download posterior permanece separado.

`submitGenericEvents` registra, por uma facade unica, os eventos genericos homologados suportados nesta fase (`110130`, `110150`, `110192` e `110750`) e devolve resultado estruturado de lote com rastreabilidade por item.

`validateNFeXsd` valida um XML de NF-e contra o XSD oficial (PL_010c NT2022.002 v1.30) usando `xmllint` quando disponivel no ambiente e devolve classificacao estruturada: `valid`, `invalid`, `xmllint-unavailable`, `schema-not-found` ou `execution-error`.

`submitICMSDeferralEvent` submete um evento de pedido de prorrogacao de ICMS industrial (codigo `110764`, familia `prorrogacao-icms`) como lote unitario via `submitGenericEvents`, simplificando a integracao para o caso de uso mais comum.

No recorte atual, a facade generica rejeita o lote inteiro antes do transporte quando houver mais de 20 itens, qualquer familia fora do escopo publicado ou falha obrigatoria de validacao local, mantendo EPEC, producao e variantes ainda nao estabilizadas fora do contrato.

No recorte atual de NFC-e, `requestedCapabilities` serve apenas para explicitar uma tentativa de uso sobre QR Code, DANFE NFC-e, administracao de CSC, credenciamento automatizado ou contingencia offline. Quando esse campo e informado, a facade responde com `unsupported-scope` antes do transporte.

No recorte atual de expansao de assinatura, trust chain automatizada, aquisicao de certificado, suporte a `A3`, `QR Code`, `DANFE NFC-e` e rollout operacional multi-UF permanecem explicitamente fora do contrato publicado.

## Exemplo rapido da autorizacao operacional

```ts
import { authorizeNFe, createSigningContext } from 'nfe-sdk';

const signingContext = await createSigningContext({
  passphrase: '***',
  source: {
    contentBase64: 'BASE64_PFX',
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

## Exemplo rapido do slice NFC-e

```ts
import { authorizeNFCe, createSigningContext } from 'nfe-sdk';

const signingContext = await createSigningContext({
  passphrase: '***',
  source: {
    contentBase64: 'BASE64_PFX',
    type: 'in-memory-content',
  },
});

const nfceAuthorization = await authorizeNFCe({
  document: {
    documentId: '35190500000000000000550010000000011000000010',
    environment: 'homologation',
    version: '4.00',
  },
  environment: 'homologation',
  requestExecutor,
  signingContext,
  timeoutMs: 5000,
});

const deferredScope = await authorizeNFCe({
  document: {
    documentId: '35190500000000000000550010000000011000000010',
    environment: 'homologation',
    version: '4.00',
  },
  environment: 'homologation',
  requestedCapabilities: ['qr-code'],
  requestExecutor,
  signingContext,
});

console.log(nfceAuthorization.classification, nfceAuthorization.protocolNumber);
console.log(deferredScope.classification, deferredScope.coverageBoundary?.code);
```

O contrato normativo continua sendo `package.json`/exports. O README apenas explica o que foi estabilizado.

`manifest.json` permanece interno e nao integra a superficie publica estavel.

`enviNFe` permanece como envelope de transporte nao assinado do documento ja assinado nesta fase.

## Exemplo rapido do slice recipient

```ts
import {
  createSigningContext,
  distributeRecipientDFe,
  manifestRecipientOperation,
  submitGenericEvents,
} from 'nfe-sdk';

const signingContext = await createSigningContext({
  passphrase: '***',
  source: {
    contentBase64: 'BASE64_PFX',
    type: 'in-memory-content',
  },
});

const distribution = await distributeRecipientDFe({
  actor: {
    documentNumber: '12345678909',
    documentType: 'cpf',
  },
  environment: 'homologation',
  requestExecutor,
  timeoutMs: 5000,
  ultNSU: '000000000000000',
});

const manifestation = await manifestRecipientOperation({
  accessKey: '35190500000000000000550010000000011000000010',
  actor: {
    documentNumber: '12345678909',
    documentType: 'cpf',
  },
  environment: 'homologation',
  eventType: 'ciencia-da-operacao',
  requestExecutor,
  signingContext,
  timeoutMs: 5000,
});

console.log(distribution.classification, distribution.cursor.ultNSU);
console.log(
  manifestation.classification,
  manifestation.downloadRemainsSeparate,
);

const genericEventBatch = await submitGenericEvents({
  batchId: '000000000000001',
  environment: 'homologation',
  items: [
    {
      accessKey: '35190500000000000000550010000000011000000010',
      author: {
        documentNumber: '12345678000195',
        documentType: 'cnpj',
      },
      eventCode: '110130',
      family: 'delivery-confirmation',
      occurredAt: '2026-05-18T10:00:00-03:00',
      payload: {
        deliveredAt: '2026-05-18T09:55:00-03:00',
        deliveryHash: 'comprovante-hash',
        recipientDocument: '12345678909',
        recipientName: 'Jose da Silva',
      },
      sequenceNumber: 1,
    },
  ],
  requestExecutor,
  signingContext,
  timeoutMs: 5000,
});

console.log(
  genericEventBatch.classification,
  genericEventBatch.itemOutcomes.length,
);
```

O slice recipient permanece limitado a `homologation`, suporta apenas `distNSU`, aceita atores `cpf` e `cnpj`, e mantem `consNSU`, `consChNFe`, producao e download automatico apos a manifestacao fora do contrato publico atual.

## Exemplo rapido do slice SOAP

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

## O que fica fora do contrato publico

Os seguintes itens continuam fora da promessa de compatibilidade desta fase:

- arvore gerada em `src/classes/`
- arvore gerada em `src/interfaces/`
- arvore gerada em `src/types/`
- arvore gerada em `src/enums/`
- `src/manifest.json`
- qualquer subpath ou importacao profunda

Esses artefatos seguem existindo como inventario tecnico e evidencia de cobertura, mas nao devem ser consumidos como API publica estavel.

## Requisitos

- Node.js `>=18.18`
- npm

## Instalação

```bash
npm install
```

## Scripts principais

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

## Validação da fundação do pacote

O baseline desta fase exige validar o pacote publicado, não apenas o workspace:

```bash
npm run lint
npm run docs:check
npm run format:check
npm run typecheck
npm test
npm run build
npm run validate:tarball
```

O smoke validation do tarball deve confirmar que o import raiz continua utilizavel sem depender do workspace aberto.

## CI e onboarding de homologação

O workflow de CI desta fase fica em [.github/workflows/ci.yml](./.github/workflows/ci.yml) e executa, em ordem, `build`, `lint`, `typecheck`, `test` e `docs:check` para `pull_request` e pushes na branch padrão do repositório.

O cenário manual de verificação continua sendo:

1. introduzir um erro proposital de typecheck em uma branch de PR;
2. confirmar que o workflow falha na etapa `Typecheck gate`;
3. remover o erro e confirmar que o mesmo PR volta a ficar verde sem publicar artefatos.

## Exemplos de homologação

Os exemplos desta fase consomem o pacote compilado via import raiz `nfe-sdk`. Execute primeiro o build local e depois o exemplo do fluxo desejado:

```bash
npm run build
npx tsx examples/validation/validate-xsd.ts
npx tsx examples/nfe/authorize.ts
npx tsx examples/recipient/manifest.ts
```

Variáveis esperadas:

- `examples/nfe/authorize.ts`: `NFE_CERT_PFX_PATH`, `NFE_CERT_PASSPHRASE`, `NFE_DOCUMENT_ID`
- `examples/recipient/manifest.ts`: `NFE_CERT_PFX_PATH`, `NFE_CERT_PASSPHRASE`, `NFE_ACCESS_KEY`, `NFE_ACTOR_DOCUMENT_NUMBER`
- `examples/validation/validate-xsd.ts`: `NFE_XML_PATH` e `NFE_XSD_DIR` são opcionais

## Geração de schemas

O repositório mantém o pipeline de geração em [tools/generate.ts](./tools/generate.ts), usando os XSDs em `xsd/` para atualizar a árvore gerada em `src/`.

Os identificadores gerados seguem `PascalCase` com prefixos por categoria:

- `C...` para classes
- `I...` para interfaces
- `T...` para type aliases
- `E...` para enums

## Documentação de apoio

- [docs/capacidades-sdk.md](./docs/capacidades-sdk.md): catalogo documental de capacidades e lacunas.
- [docs/roadmap/coverage-matrix.md](./docs/roadmap/coverage-matrix.md): matriz viva da superficie publicada, status atual e lacunas visiveis do roadmap.
- [docs/index.md](./docs/index.md): indice documental consolidado.
- [docs/roadmap/proximas-iteracoes-recomendadas.md](./docs/roadmap/proximas-iteracoes-recomendadas.md): trilha atual de continuidade, fechamento e proximas iteracoes recomendadas.
- [specs/003-public-package-contract/contracts/public-package-contract.md](./specs/003-public-package-contract/contracts/public-package-contract.md): contrato de referência desta fase.

## Diretrizes de compatibilidade

- mudancas no import raiz exigem revisao explicita de compatibilidade
- promocao de subpaths ou artefatos gerados depende de decisao contratual futura
- evidencias do contrato devem permanecer rastreáveis em `package.json`, `src/index.ts`, README e nos artefatos da feature

## Licença

Este projeto está licenciado sob a Apache License 2.0. Veja [LICENSE](./LICENSE).
