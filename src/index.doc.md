# src/index.ts

## Visao geral

Agrega a superficie publica estavel do pacote no import raiz `nfe-sdk`.

## Responsabilidades

- Reexportar o contrato publico minimo herdado da fase 003.
- Publicar a facade funcional inicial para criacao canonica de `NFe` e `enviNFe`.
- Publicar o slice inicial de assinatura digital com `createSigningContext` e `signNFeXml`.
- Publicar o slice inicial de transporte SOAP com resolucao de endpoint e execucao suportada.
- Evitar exposicao acidental da arvore gerada como contrato principal.

## Entradas e saidas

- Entradas: nenhuma.
- Saidas: exportacoes publicas consumidas por integradores.

## Fluxo principal

```mermaid
flowchart TD
  A[Consumer importa nfe-sdk] --> B[src/index.ts]
  B --> C[publicPackageContract]
  B --> D[createNFe]
  B --> E[createEnviNFe]
  B --> F[createSigningContext]
  B --> G[resolveNFeServiceEndpoint]
  B --> H[executeNFeSoapService]
  B --> I[serializeNFeXml]
  B --> J[serializeEnviNFeXml]
  B --> K[signNFeXml]
```

## Tratamento de erros e casos-limite

- O arquivo apenas reexporta simbolos.
- Validacoes de entrada ficam nos modulos da facade canonica.

## Exemplos

```ts
import {
  createEnviNFe,
  createNFe,
  createSigningContext,
  executeNFeSoapService,
  publicPackageContract,
  resolveNFeServiceEndpoint,
  serializeEnviNFeXml,
  serializeNFeXml,
  signNFeXml,
} from 'nfe-sdk';
```

## Dependencias e integracoes

- `./public-contract.js`
- `./canonical/index.js`