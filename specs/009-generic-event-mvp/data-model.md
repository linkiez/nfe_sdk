# Data Model: Generic Event MVP

## RootGenericEventFacade

- **Purpose**: Representa a ampliação additive da superfície pública do pacote para a recepção genérica de eventos pós-autorização.
- **Fields**:
  - `publishedExports`: nomes das operações públicas novas e das dependências root reaproveitadas.
  - `supportedEnvironment`: ambiente operacional suportado neste MVP.
  - `supportedFamilies`: lista das famílias e códigos cobertos pela facade.
  - `excludedCapabilities`: lista do que permanece fora do escopo do MVP.
- **Relationships**:
  - Consome `GenericEventBatchRequest`.
  - Devolve `GenericEventBatchOutcome`.

## GenericEventBatchRequest

- **Purpose**: Representa a entrada estruturada de submissão genérica de um lote de eventos.
- **Fields**:
  - `environment`: ambiente alvo suportado.
  - `batchId`: identificador lógico do lote informado pelo integrador.
  - `items`: lista de eventos do lote, limitada a 20 elementos.
  - `signingContext`: contexto reutilizável de assinatura para o lote.
  - `requestExecutor`: executor opcional para configuração externa de rede.
  - `timeoutMs`: timeout operacional opcional.
- **Relationships**:
  - Agrega `GenericEventItemInput`.
  - Produz `GenericEventBatchOutcome`.

## GenericEventItemInput

- **Purpose**: Representa cada evento individual informado pelo consumidor antes da montagem do `envEvento`.
- **Fields**:
  - `family`: família operacional suportada pelo MVP.
  - `eventCode`: código oficial do evento correspondente à família.
  - `accessKey`: chave de acesso da NF-e associada.
  - `sequenceNumber`: número sequencial do evento para a chave.
  - `occurredAt`: data e hora do evento.
  - `author`: ator responsável pelo evento e seu documento fiscal.
  - `payload`: dados complementares específicos da família.
- **Relationships**:
  - Pertence a `GenericEventBatchRequest`.
  - Pode gerar `GenericEventValidationFailure` antes do transporte.
  - Pode gerar `GenericEventItemOutcome` após o processamento remoto.

## GenericEventFamilyBoundary

- **Purpose**: Representa a lista formal de famílias cobertas e excluídas neste MVP.
- **Fields**:
  - `includedFamilies`: comprovante de entrega, ator interessado transportador, insucesso na entrega e ECONF.
  - `excludedFamilies`: EPEC, eventos do destinatário já cobertos por facade própria, variações regionais ainda não estabilizadas e cancelamentos não incluídos neste recorte.
  - `normativeSources`: fontes primárias que justificam a presença ou ausência de cada família.
- **Relationships**:
  - Orienta a validação de `GenericEventItemInput`.
  - É refletido em `RootGenericEventFacade` e `GenericEventBatchOutcome`.

## GenericEventValidationFailure

- **Purpose**: Representa uma falha local que impede o lote de ser transmitido.
- **Fields**:
  - `reason`: categoria resumida da falha local.
  - `itemIndex`: posição do item que provocou a rejeição, quando aplicável.
  - `fieldPath`: campo ou regra violada.
  - `message`: explicação legível da falha.
- **Relationships**:
  - É agregado por `GenericEventBatchOutcome` quando a operação falha antes do transporte.
  - Pode ser provocado por `GenericEventItemInput` ou por `GenericEventFamilyBoundary`.

## GenericEventBatchOutcome

- **Purpose**: Representa o resultado agregado da submissão genérica do lote.
- **Fields**:
  - `classification`: estado operacional agregado da operação.
  - `batchId`: identificador do lote observado no processamento.
  - `acceptedForTransport`: indica se houve envio ao serviço remoto.
  - `transportOutcome`: evidência completa da troca quando existir transporte.
  - `validationFailures`: lista de falhas locais quando o lote for rejeitado antes do transporte.
  - `itemOutcomes`: outcomes estruturados por item quando houver processamento remoto.
- **Relationships**:
  - É produzido por `GenericEventBatchRequest`.
  - Agrega `GenericEventValidationFailure` e `GenericEventItemOutcome`.

## GenericEventItemOutcome

- **Purpose**: Representa o resultado estruturado de um item após o processamento remoto do lote.
- **Fields**:
  - `itemIndex`: posição original do item no lote.
  - `family`: família do evento processado.
  - `eventCode`: código oficial observado.
  - `classification`: classificação operacional do item.
  - `applicationStatusCode`: `cStat` do item.
  - `applicationStatusMessage`: mensagem retornada pelo processamento.
  - `protocolNumber`: protocolo do item quando disponível.
  - `receiptTimestamp`: data ou hora de processamento quando informada.
- **Relationships**:
  - Pertence a `GenericEventBatchOutcome`.
  - Corresponde a um `GenericEventItemInput` específico.

## GenericEventTransportEnvelope

- **Purpose**: Representa a ponte interna entre o contrato público batch-first e os envelopes normativos `envEvento` e `retEnvEvento`.
- **Fields**:
  - `serviceName`: serviço normativo utilizado.
  - `requestXml`: XML gerado para envio.
  - `responseXml`: XML bruto retornado.
  - `synchronous`: indicador de processamento síncrono.
- **Relationships**:
  - É refletido parcialmente em `transportOutcome`.
  - Alimenta `GenericEventBatchOutcome` e `GenericEventItemOutcome`.
