# src/canonical/shared/document-id-rule.ts

## Visao geral

Normaliza o identificador inicial de documento da camada canonica.

## Responsabilidades

- Validar obrigatoriedade de `documentId`.
- Reaproveitar a normalizacao base de identificadores.

## Entradas e saidas

- Entradas: string `documentId`.
- Saidas: `documentId` normalizado.

## Fluxo principal

```mermaid
sequenceDiagram
  participant Caller as Caller
  participant Rule as document-id-rule
  participant Contracts as contracts
  Caller->>Rule: normalizeDocumentId(documentId)
  Rule->>Contracts: normalizeRequiredIdentifier(documentId, 'documentId')
  Contracts-->>Rule: normalized identifier
  Rule-->>Caller: normalized identifier
```

## Tratamento de erros e casos-limite

- Lanca erro quando o identificador chega vazio.

## Exemplos

```ts
const documentId = normalizeDocumentId('  NFe001  ');
```

## Dependencias e integracoes

- `./contracts`