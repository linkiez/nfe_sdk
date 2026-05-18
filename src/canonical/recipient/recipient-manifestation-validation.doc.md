# src/canonical/recipient/recipient-manifestation-validation.ts

## Visao geral

Concentra o mapeamento dos eventos basicos e as validacoes de entrada da manifestacao do destinatario.

## Responsabilidades

- Resolver o codigo oficial de evento para cada `eventType` publico.
- Validar ator, chave de acesso, contexto de assinatura e justificativa.
- Montar o XML minimo do evento homologado.

## Entradas e saidas

- Entradas: `RecipientManifestationRequest` ou `RecipientManifestationEventType`.
- Saidas: codigo de evento, mensagem de validacao ou payload XML.

## Tratamento de erros e casos-limite

- Aceita justificativa apenas em `operacao-nao-realizada`.
- Exige no minimo 15 caracteres para a justificativa quando aplicavel.
- Mantem nomes e descricoes alinhados ao leiaute oficial dos quatro eventos suportados.

## Dependencias e integracoes

- `./recipient-shared.js`