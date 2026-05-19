# Data Model: NFC-e National Core

## Overview

A feature 010 introduz um modelo de aplicacao pequeno e explicito para representar a entrada publica de autorizacao NFC-e, a resolucao operacional de cobertura por UF, as falhas locais obrigatorias e o outcome observado apos a orquestracao sobre serializacao, assinatura e transporte.

## Entity 1: NFCeAuthorizationRequest

### Purpose

Representa a entrada publica da operacao root de autorizacao NFC-e em homologacao.

### Fields

| Field                   | Type                                                        | Required | Description                                                                                   |
| ----------------------- | ----------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------- |
| `document`              | canonical NFC-e payload or XML input accepted by the facade | yes      | Documento que contem os dados necessarios para inferir a UF e montar a requisicao operacional |
| `environment`           | `'homologation'`                                            | yes      | Ambiente unico suportado neste slice                                                          |
| `signingContext`        | signing context                                             | yes      | Contexto reutilizavel de certificado para assinatura                                          |
| `requestExecutor`       | transport request executor                                  | no       | Adaptador opcional para controle externo da chamada SOAP                                      |
| `timeoutMs`             | number                                                      | no       | Timeout opcional para a chamada remota                                                        |
| `correlationId`         | string                                                      | no       | Identificador opcional para rastreabilidade da operacao                                       |
| `requestedCapabilities` | deferred capability[]                                       | no       | Marcadores explicitos de superficies ainda deferidas no slice                                 |

### Validation rules

- `environment` deve ser exatamente `homologation`.
- `document` deve conter dados suficientes para identificar a NFC-e e inferir a UF operacional.
- `signingContext` deve ser compativel com o pipeline ja exposto pelo pacote.
- A request nao pode introduzir selecao manual de UF neste slice.
- `requestedCapabilities`, quando presente, deve usar apenas marcadores publicados para QR Code, DANFE NFC-e, administracao de CSC, credenciamento automatizado ou contingencia offline.

## Entity 2: NFCeOperationalUFResolution

### Purpose

Captura a inferencia deterministica da UF operacional a partir do proprio documento.

### Fields

| Field        | Type                      | Required | Description                                              |
| ------------ | ------------------------- | -------- | -------------------------------------------------------- |
| `status`     | `'resolved' \| 'invalid'` | yes      | Resultado da inferencia de UF                            |
| `uf`         | string                    | no       | UF inferida quando a resolucao for bem-sucedida          |
| `source`     | string                    | yes      | Evidencia de onde a UF foi inferida no documento         |
| `reasonCode` | string                    | no       | Codigo de diagnostico quando a UF nao puder ser inferida |
| `message`    | string                    | no       | Mensagem de validacao para consumidores e testes         |

### Validation rules

- `status: 'resolved'` exige `uf` preenchida.
- `status: 'invalid'` exige `reasonCode` e `message`.
- A resolucao nao pode produzir fallback silencioso para UF nao inferivel.

## Entity 3: NFCeCoverageBoundary

### Purpose

Representa um limite operacional conhecido do slice 010 sem classificar o caso como defeito de entrada.

### Fields

| Field            | Type                                         | Required | Description                                                                             |
| ---------------- | -------------------------------------------- | -------- | --------------------------------------------------------------------------------------- |
| `classification` | `'unsupported-state' \| 'unsupported-scope'` | yes      | Categoria da boundary observada                                                         |
| `uf`             | string                                       | no       | UF inferida que caiu fora do piloto                                                     |
| `code`           | string                                       | yes      | Codigo estavel de boundary para testes e contrato                                       |
| `message`        | string                                       | yes      | Explicacao orientada a uso sobre o motivo do bloqueio                                   |
| `retryable`      | boolean                                      | yes      | Indica se repetir a mesma chamada pode mudar o resultado sem alterar input ou cobertura |

### Validation rules

- Para `unsupported-state`, `uf` deve estar preenchida.
- Para `unsupported-scope`, `uf` nao deve ser obrigatoria.
- O slice 010 nao deve converter boundary em tentativa operacional remota.

## Entity 4: NFCeValidationFailure

### Purpose

Representa falha local obrigatoria detectada antes de serializacao completa ou transporte.

### Fields

| Field      | Type      | Required | Description                               |
| ---------- | --------- | -------- | ----------------------------------------- |
| `code`     | string    | yes      | Codigo estavel de erro local              |
| `path`     | string    | yes      | Caminho logico do campo invalido no input |
| `message`  | string    | yes      | Explicacao objetiva do motivo da falha    |
| `severity` | `'error'` | yes      | Severidade fixa neste slice               |

### Validation rules

- Deve existir pelo menos uma falha quando a operacao terminar como erro local.
- Falhas locais impedem o envio ao transporte.

## Entity 5: NFCePilotProfile

### Purpose

Descreve o unico perfil operacional promovido na feature 010.

### Fields

| Field                  | Type             | Required | Description                                    |
| ---------------------- | ---------------- | -------- | ---------------------------------------------- |
| `uf`                   | `'SP'`           | yes      | UF piloto promovida                            |
| `environment`          | `'homologation'` | yes      | Ambiente suportado                             |
| `services`             | string[]         | yes      | Lista dos servicos NFC-e habilitados no piloto |
| `deferredCapabilities` | string[]         | yes      | Capacidades explicitamente fora do slice       |
| `documentationSources` | string[]         | yes      | Fontes normativas que justificam o perfil      |

### Validation rules

- O perfil permanece singleton no slice 010.
- `deferredCapabilities` deve incluir QR Code, DANFE NFC-e, CSC e contingencia offline.

## Entity 6: NFCeAuthorizationOutcome

### Purpose

Representa o resultado final observado pelo consumidor da facade root.

### Fields

| Field                      | Type                                                                                                                                    | Required | Description                                             |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------- |
| `classification`           | `'success' \| 'rejected' \| 'unavailable' \| 'external-dependency' \| 'validation-error' \| 'unsupported-state' \| 'unsupported-scope'` | yes      | Classificacao final da operacao                         |
| `acceptedForTransport`     | boolean                                                                                                                                 | yes      | Indica se a request chegou a ser enviada remotamente    |
| `validationFailures`       | `NFCeValidationFailure[]`                                                                                                               | no       | Falhas locais quando houver                             |
| `coverageBoundary`         | `NFCeCoverageBoundary`                                                                                                                  | no       | Boundary explicitada quando a UF estiver fora do piloto |
| `transportOutcome`         | transport outcome                                                                                                                       | no       | Evidencia de baixo nivel quando houve tentativa remota  |
| `applicationStatusCode`    | string                                                                                                                                  | no       | Codigo funcional retornado pelo autorizador             |
| `applicationStatusMessage` | string                                                                                                                                  | no       | Mensagem funcional retornada pelo autorizador           |
| `protocolNumber`           | string                                                                                                                                  | no       | Protocolo de autorizacao quando houver sucesso          |
| `receiptNumber`            | string                                                                                                                                  | no       | Numero de recibo quando o fluxo remoto o expuser        |
| `uf`                       | string                                                                                                                                  | no       | UF resolvida para a operacao                            |

### Validation rules

- `acceptedForTransport: false` exige ao menos `validationFailures` ou `coverageBoundary`.
- `classification: 'success'` exige `acceptedForTransport: true`.
- `coverageBoundary` e `validationFailures` nao devem coexistir no mesmo outcome final.
- `classification: 'unsupported-scope'` exige `acceptedForTransport: false`.

## Relationships

- `NFCeAuthorizationRequest` produz exatamente um `NFCeOperationalUFResolution`.
- `NFCeOperationalUFResolution` invalida a request com `NFCeValidationFailure` quando a UF nao puder ser inferida.
- `NFCeOperationalUFResolution` mapeia para `NFCeCoverageBoundary` quando a UF for diferente de `SP`.
- `NFCeAuthorizationRequest.requestedCapabilities` mapeia diretamente para `NFCeCoverageBoundary` com `classification: 'unsupported-scope'`.
- `NFCePilotProfile` governa a validacao de cobertura do slice.
- `NFCeAuthorizationOutcome` agrega o resultado do pipeline local e remoto.

## State transitions

```text
received
  -> unsupported-scope
  -> invalid-input
  -> unsupported-state
  -> ready-for-serialization
ready-for-serialization
  -> signed
signed
  -> transported
transported
  -> success
  -> rejected
  -> unavailable
  -> external-dependency
```

## Mapping notes

- Validacoes nacionais compartilhadas devem ocorrer antes de qualquer decisao de cobertura por servico.
- A resolucao de UF e parte do contrato observavel e precisa de codigos estaveis para testes.
- O outcome publico deve preservar a taxonomia ja usada pelas facades operacionais anteriores sempre que possivel, introduzindo apenas o que for indispensavel para boundary estadual explicita.
