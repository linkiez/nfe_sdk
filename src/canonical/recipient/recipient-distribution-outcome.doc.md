# src/canonical/recipient/recipient-distribution-outcome.ts

## Visao geral

Mapeia o retorno bruto do transporte para o contrato estruturado de distribuicao do destinatario.

## Responsabilidades

- Extrair `cStat`, `xMotivo`, `ultNSU` e `maxNSU` da resposta.
- Projetar documentos distribuidos em envelopes tipados.
- Classificar cenarios como documentos disponiveis, lote vazio, indisponibilidade, uso indevido e dependencia externa.

## Entradas e saidas

- Entradas: `RecipientDistributionQuery` e `TransportOutcome`.
- Saidas: `RecipientDistributionOutcome`.

## Tratamento de erros e casos-limite

- Trata `137` e resposta sem `docZip` como `no-new-documents`.
- Sugere backoff para lote vazio e `656` por consumo indevido.
- Reaproveita classificacoes de transporte para timeout, indisponibilidade e erro protocolar.

## Dependencias e integracoes

- `../transport/contracts.js`
- `./recipient-coverage-boundary.js`
- `./recipient-document-envelope.js`
- `./recipient-shared.js`