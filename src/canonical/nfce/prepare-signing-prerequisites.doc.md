# src/canonical/nfce/prepare-signing-prerequisites.ts

## Visao geral

Prepara os identificadores de assinatura de `NFC-e` sem abrir transporte, `QR Code` ou autorizacao completa.

## Responsabilidades

- Validar o boundary minimo de `NFC-e` (`mod` igual a `65`).
- Exigir `CSC` e `CSRT` nao vazios antes do calculo.
- Reaproveitar os helpers de `chNFe`, `cDV` e `hashCSRT` para montar um bundle preparatorio coerente.
- Permanecer coerente com o cohort operacional `SP + PR` sem transformar precondicoes em promessa de autorizacao completa.

## Entradas e saidas

- Entradas: `NFCeSigningPrerequisitesInput`.
- Saidas: `NFCeSigningPrerequisitesResult`.

## Fluxo principal

```mermaid
flowchart TD
  A[NFCeSigningPrerequisitesInput] --> B[validate mod 65]
  B --> C[validate CSC]
  C --> D[compute access key]
  D --> E[compute hashCSRT]
  E --> F[shape prerequisite bundle]
```

## Tratamento de erros e casos-limite

- Rejeita modelos diferentes de `65`.
- Falha quando `cscId` ou `cscToken` chegam vazios.
- Propaga a validacao do helper de `hashCSRT` quando `CSRT` ou `CNPJ` sao invalidos.
- Nao sugere que o bundle retornado equivalha a autorizacao, `QR Code` ou `DANFE NFC-e` concluido.
- Continua servindo tanto ao piloto `SP` quanto ao cohort promovido `PR`, sem alterar a lista de dependencias deferidas.

## Exemplos

```ts
const prerequisites = prepareNFCeSigningPrerequisites({
  accessKeyFields,
  csc,
  hashCsrtInput,
});
```

## Dependencias e integracoes

- `../nfe/access-key.js`
- `../nfe/hash-csrt.js`
- `./contracts.js`
- `./errors.js`