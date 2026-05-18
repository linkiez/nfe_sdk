# src/canonical/recipient/recipient-document-envelope.ts

## Visao geral

Transforma itens `docZip` da distribuicao em envelopes estruturados observaveis pelo contrato publico.

## Responsabilidades

- Decodificar payload compactado em base64.
- Identificar tipo de envelope entre resumo, documento completo ou outro.
- Extrair metadados minimos como chave, NSU e tag raiz.

## Entradas e saidas

- Entradas: XML de resposta da distribuicao.
- Saidas: `readonly RecipientDocumentEnvelope[]`.

## Tratamento de erros e casos-limite

- Tenta `gunzip` antes de cair para leitura direta do buffer.
- Mantem payload original compactado para rastreabilidade.
- Classifica envelopes desconhecidos como `other` sem falhar o fluxo.

## Dependencias e integracoes

- `node:zlib`
- `./recipient-shared.js`