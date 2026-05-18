# src/canonical/facade/query-nfe-service-status.ts

## Visao geral

Expõe a consulta estruturada de status do servico de NFe no root import.

## Responsabilidades

- Receber o request estruturado do integrador.
- Delegar a consulta para a camada operacional.
- Preservar a fronteira entre facade publica e implementacao interna.

## Entradas e saidas

- Entradas: `NFeServiceStatusRequest`.
- Saidas: `Promise<ServiceStatusSnapshot>`.

## Fluxo principal

```mermaid
sequenceDiagram
  participant Consumer as Consumer
  participant Facade as facade/query-nfe-service-status.ts
  participant Domain as nfe/query-nfe-service-status.ts
  Consumer->>Facade: queryNFeServiceStatus(input)
  Facade->>Domain: queryNFeServiceStatus(input)
  Domain-->>Facade: ServiceStatusSnapshot
  Facade-->>Consumer: ServiceStatusSnapshot
```

## Tratamento de erros e casos-limite

- O wrapper nao adiciona validacoes novas.
- O dominio operacional concentra classificacao e evidencia.

## Exemplos

```ts
import { queryNFeServiceStatus } from './query-nfe-service-status.js';
```

## Dependencias e integracoes

- `../nfe/contracts.js`
- `../nfe/query-nfe-service-status.js`