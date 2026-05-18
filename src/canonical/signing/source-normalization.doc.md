# src/canonical/signing/source-normalization.ts

## Visao geral

Normaliza e discrimina as origens aceitas de certificado A1 para o slice de assinatura.

## Responsabilidades

- Identificar se a origem e arquivo ou conteudo em memoria.
- Materializar `sourceMetadata` estavel no `SigningContext`.

## Entradas e saidas

- Entradas: `SigningSourceInput`.
- Saidas: guards de tipo e `SigningSourceMetadata`.

## Fluxo principal

```mermaid
flowchart TD
  A[SigningSourceInput] --> B{type}
  B -->|in-memory-content| C[metadata without file path]
  B -->|file-path| D[metadata with file path]
```

## Tratamento de erros e casos-limite

- Lanca erro quando o discriminador nao corresponde a um tipo suportado.

## Exemplos

```ts
const metadata = normalizeSigningSourceMetadata(source);
```

## Dependencias e integracoes

- `contracts.ts`
- `errors.ts`
- `create-signing-context.ts`