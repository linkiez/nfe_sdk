# nfe-sdk

SDK em TypeScript para evoluir de uma base gerada a partir de XSDs da NF-e, NFC-e e Manifestacao do Destinatario para um pacote npm ESM com contrato publico controlado.

## Contrato publico minimo desta fase

Nesta fase, o pacote publica somente o import raiz e uma superficie funcional enxuta para a slice canonica inicial, o primeiro slice aditivo de assinatura digital e o primeiro slice aditivo de transporte SOAP:

```ts
import {
  authorizeNFe,
  cancelNFe,
  createEnviNFe,
  createNFe,
  createSigningContext,
  distributeRecipientDFe,
  executeNFeSoapService,
  manifestRecipientOperation,
  publicPackageContract,
  queryNFeDocumentSituation,
  queryNFeServiceStatus,
  resolveNFeServiceEndpoint,
  serializeEnviNFeXml,
  serializeNFeXml,
  signNFeXml,
  submitGenericEvents,
  submitNFeCorrectionLetter,
  submitNFeInutilization,
} from 'nfe-sdk';
```

`publicPackageContract` descreve o contrato publicado e serve como ancora estavel para as proximas fases funcionais.

`authorizeNFe` orquestra a autorizacao operacional inicial para uma NFe unica ou um lote suportado a partir de dados canonicos, devolvendo um resultado estruturado com classificacao, recibo ou protocolo e evidencia de transporte.

`createNFe` monta o documento canonico inicial de `NFe` sem exigir importacao direta da arvore gerada.

`createEnviNFe` monta o lote canonico inicial de `enviNFe` com base no mesmo recorte funcional.

`createSigningContext` prepara um contexto reutilizavel de assinatura digital a partir de um certificado A1 em arquivo `.pfx` ou em memoria.

`serializeNFeXml` e `serializeEnviNFeXml` produzem XML deterministico para o mesmo recorte inicial.

`signNFeXml` recebe um XML nao assinado de `NFe`, aplica XMLDSig, valida localmente a assinatura antes do retorno e devolve o XML assinado correspondente.

`resolveNFeServiceEndpoint` resolve a entrada versionada do catalogo inicial de transporte para `homologation`, `nfe-status-service` e `nfe-authorization` usando os endpoints compartilhados da SVAN publicados no catalogo inicial `2026-05-18-initial-draft`.

`executeNFeSoapService` monta o envelope SOAP 1.2, escolhe o endpoint homologado suportado, executa a chamada com executor injetado ou default e devolve `TransportOutcome` com classificacao e evidencia minima da troca.

No slice inicial, `TransportOutcome.classification` distingue pelo menos `success`, `timeout`, `usage-error`, `unavailable`, `functional-rejection` e `protocol-error`, sem misturar transporte com orquestracao de dominio fiscal.

`queryNFeServiceStatus` devolve um retrato estruturado do status operacional do servico em homologacao sem exigir leitura manual do XML de retorno.

`queryNFeDocumentSituation` consulta a situacao do documento por chave de acesso e devolve um resultado estruturado, inclusive quando a resposta ainda e inconclusiva do ponto de vista operacional.

`submitNFeInutilization` executa a manutencao de inutilizacao em homologacao e devolve um resultado estruturado com classificacao operacional, protocolo quando disponivel e evidencia de transporte.

`cancelNFe` executa o fluxo homologado de cancelamento sobre a chave de acesso informada e preserva a evidencia do transporte no resultado operacional.

`submitNFeCorrectionLetter` executa a carta de correcao homologada com resultado estruturado e boundary explicita quando o ambiente solicitado fica fora do escopo publicado.

`distributeRecipientDFe` executa a distribuicao DFe do lado do destinatario via `distNSU`, em homologacao, com cursor observavel e envelopes estruturados que distinguem resumo, documento completo e outros payloads retornados em `docZip`.

`manifestRecipientOperation` registra um dos quatro eventos basicos de Manifestacao do Destinatario (`210200`, `210210`, `210220` e `210240`) e devolve classificacao operacional, protocolo quando houver e a marca contratual de que o download posterior permanece separado.

`submitGenericEvents` registra, por uma facade unica, os eventos genericos homologados suportados nesta fase (`110130`, `110150`, `110192` e `110750`) e devolve resultado estruturado de lote com rastreabilidade por item.

No recorte atual, a facade generica rejeita o lote inteiro antes do transporte quando houver mais de 20 itens, qualquer familia fora do escopo publicado ou falha obrigatoria de validacao local, mantendo EPEC, producao e variantes ainda nao estabilizadas fora do contrato.

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
npm run format:check
npm test
npm run validate:tarball
```

## Validação da fundação do pacote

O baseline desta fase exige validar o pacote publicado, não apenas o workspace:

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
npm run validate:tarball
```

O smoke validation do tarball deve confirmar que o import raiz continua utilizavel sem depender do workspace aberto.

## Geração de schemas

O repositório mantém o pipeline de geração em [tools/generate.ts](/home/linkiez/Projetos/nfe_sdk/tools/generate.ts), usando os XSDs em [xsd](/home/linkiez/Projetos/nfe_sdk/xsd) para atualizar a árvore gerada em [src](/home/linkiez/Projetos/nfe_sdk/src).

Os identificadores gerados seguem `PascalCase` com prefixos por categoria:

- `C...` para classes
- `I...` para interfaces
- `T...` para type aliases
- `E...` para enums

## Documentação de apoio

- [docs/capacidades-sdk.md](/home/linkiez/Projetos/nfe_sdk/docs/capacidades-sdk.md): catalogo documental de capacidades e lacunas.
- [docs/index.md](/home/linkiez/Projetos/nfe_sdk/docs/index.md): indice documental consolidado.
- [specs/003-public-package-contract/contracts/public-package-contract.md](/home/linkiez/Projetos/nfe_sdk/specs/003-public-package-contract/contracts/public-package-contract.md): contrato de referência desta fase.

## Diretrizes de compatibilidade

- mudancas no import raiz exigem revisao explicita de compatibilidade
- promocao de subpaths ou artefatos gerados depende de decisao contratual futura
- evidencias do contrato devem permanecer rastreáveis em `package.json`, `src/index.ts`, README e nos artefatos da feature
