# src/canonical/nfe/authorize-nfe.ts

## Visao geral

Orquestra a autorizacao operacional de NFe sobre as camadas canonica e de transporte.

## Responsabilidades

- Validar ambiente e identidade emissora antes da autorizacao.
- Exigir executor injetado para producao SP.
- Normalizar o envio como lote operacional.
- Gerar o payload XML e acionar a autorizacao SOAP.
- Traduzir o resultado do transporte para um outcome operacional.

## Entradas e saidas

- Entradas: `NFeAuthorizationRequest`.
- Saidas: `Promise<NFeAuthorizationOutcome>`.

## Fluxo principal

```mermaid
flowchart TD
  A[NFeAuthorizationRequest] --> B[authorize-nfe.ts]
  B --> C[buildNFeAuthorizationBatch]
  C --> D[createAuthorizationPayloadXml]
  D --> E[executeNFeSoapService]
  E --> F[mapAuthorizationTransportOutcome]
```

## Tratamento de erros e casos-limite

- Sem `signingContext`, a operacao falha com `NFeOperationalUsageError`.
- Em producao, todos os documentos precisam resolver consistentemente para SP por `cUF` e/ou chave de acesso de 44 digitos.
- Producao exige `requestExecutor` configurado pelo integrador para mTLS; outras UFs suportadas pela contingencia continuam retornando boundary explicita.
- Homologacao preserva o executor default e o comportamento anterior.
- Falhas de transporte seguem no resultado estruturado quando a camada SOAP consegue classifica-las.

## Exemplos

```ts
import { authorizeNFe } from './authorize-nfe.js';
```

## Dependencias e integracoes

- `../transport/execute-nfe-soap-service.js`
- `./authorization-batch.js`
- `./authorization-outcome.js`
- `./authorization-payload.js`
- `./errors.js`