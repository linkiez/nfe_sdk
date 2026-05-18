# src/canonical/recipient/recipient-manifestation-outcome.ts

## Visao geral

Projeta a resposta SOAP de manifestacao para o contrato publico do destinatario.

## Responsabilidades

- Extrair status e protocolo do lote/evento.
- Diferenciar sucesso funcional, rejeicao, dependencia externa e uso indevido.
- Preservar a classificacao bruta do transporte quando o erro ocorre abaixo da camada fiscal.

## Entradas e saidas

- Entradas: `RecipientManifestationRequest` e `TransportOutcome`.
- Saidas: `RecipientManifestationOutcome`.

## Tratamento de erros e casos-limite

- Trata `135`, `136` e `128` como sucesso do slice.
- Reclassifica respostas por certificado/habilitacao como `dependency-limited`.
- Reclassifica consumo indevido e erros de justificativa como `usage-error`.

## Dependencias e integracoes

- `../transport/contracts.js`
- `./recipient-coverage-boundary.js`
- `./recipient-shared.js`