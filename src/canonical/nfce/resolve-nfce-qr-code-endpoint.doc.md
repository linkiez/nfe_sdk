# src/canonical/nfce/resolve-nfce-qr-code-endpoint.ts

## Visao geral

Fonte unica do endereco oficial de consulta publica (`QR Code`) da `NFC-e` por `UF` e ambiente. Hoje so `SP` tem evidencia oficial na matriz; qualquer outra `UF` devolve `undefined`.

## Responsabilidades

- Exportar `SP_QR_CODE_BASE_URLS` para `generateNFCeSPQRCode`, `renderNFCeSPDANFE` e `prepareNFCeSPOffline`, que antes repetiam a tabela.
- Resolver `resolveNFCeQRCodeEndpoint(uf, environment)` com `baseUrl`, `qrCodeVersion` (`3`), `tpAmb` (`1` producao, `2` homologacao) e `composeOnlineUrl(accessKey)`.
- Expor `consultationUrl`, a URL de consulta por chave de acesso de SP (`https://www.nfce.fazenda.sp.gov.br/consulta` em producao e `https://www.homologacao.nfce.fazenda.sp.gov.br/consulta` em homologacao, tabela oficial da ENCAT), usada como `urlChave`.
- Compor a URL online da versao `3` apenas com chave, versao e `tpAmb`; o `CSC` nunca participa.

## Entradas e saidas

- Entrada: `uf` (duas letras, resolvida da chave) e `environment` normalizado.
- Saida: `NFCeQRCodeEndpoint` ou `undefined` para `UF` sem evidencia oficial; quem chama decide devolver a fronteira `unsupported-state`.

## Fluxo principal

```mermaid
flowchart TD
  A[uf + environment] --> B{uf = SP?}
  B -- nao --> C[undefined]
  B -- sim --> D[baseUrl + tpAmb]
  D --> E[composeOnlineUrl chave|3|tpAmb]
```

## Tratamento de erros e casos-limite

Nao lanca excecao: a decisao de recusar uma `UF` fica no chamador. Novas `UF` entram aqui somente com fonte oficial datada na matriz (`docs/roadmap/ufs-ambientes.md`).

## Exemplos

```ts
const endpoint = resolveNFCeQRCodeEndpoint('SP', 'production');
endpoint?.composeOnlineUrl('35...'); // ...ConsultaQRCode.aspx?p=35...|3|1
```

## Dependencias e integracoes

`CanonicalEnvironment`; consumido por `generate-nfce-sp-qr-code.ts`, `render-nfce-sp-danfe.ts` e `prepare-nfce-sp-offline.ts`.
