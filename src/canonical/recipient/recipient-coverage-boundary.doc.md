# src/canonical/recipient/recipient-coverage-boundary.ts

## Visao geral

Materializa a fronteira explicita do MVP recipient, incluindo escopo suportado, escopo excluido e dependencias externas.

## Responsabilidades

- Declarar os limites publicados do slice recipient.
- Produzir mensagens estaveis de `unsupported-scope`.
- Detectar sinais de dependencia externa, uso indevido e backoff recomendado.

## Entradas e saidas

- Entradas: codigos e mensagens observados nas respostas operacionais.
- Saidas: boundary tipado, diagnosticos e sugestoes de backoff.

## Tratamento de erros e casos-limite

- Trata `656` como indicio de consumo indevido com backoff de uma hora.
- Trata `137` como lote vazio com backoff curto.
- Explicita certificado, habilitacao e disponibilidade nacional como dependencias fora do SDK.

## Dependencias e integracoes

- `../transport/contracts.js`
- `../transport/supported-services.js`
- `./recipient-shared.js`