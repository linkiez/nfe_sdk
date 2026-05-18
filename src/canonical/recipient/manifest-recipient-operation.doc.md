# src/canonical/recipient/manifest-recipient-operation.ts

## Visao geral

Executa o registro homologado dos quatro eventos basicos de Manifestacao do Destinatario.

## Responsabilidades

- Validar o request publico de manifestacao.
- Montar o payload do evento e envia-lo pela camada SOAP.
- Mapear o retorno para um `RecipientManifestationOutcome` estruturado.

## Entradas e saidas

- Entradas: `RecipientManifestationRequest`.
- Saidas: `Promise<RecipientManifestationOutcome>`.

## Tratamento de erros e casos-limite

- Retorna `unsupported-scope` fora de `homologation`.
- Retorna `usage-error` para chave, ator ou justificativa fora do contrato.
- Mantem `downloadRemainsSeparate` como marcador contratual do slice.

## Dependencias e integracoes

- `../transport/execute-nfe-soap-service.js`
- `./recipient-coverage-boundary.js`
- `./recipient-manifestation-outcome.js`
- `./recipient-manifestation-validation.js`