# Data Model: Add NFe Operational MVP

## RootNFeOperationalFacade

- **Purpose**: Representa a ampliacao additive da superficie publica do pacote para as operacoes operacionais de NFe do MVP.
- **Fields**:
  - `publishedExports`: nomes das funcoes publicas expostas no import raiz para o MVP.
  - `supportedEnvironment`: ambiente operacional suportado nesta fase.
  - `supportedOperations`: autorizacao, status do servico, consulta de situacao, inutilizacao, cancelamento e carta de correcao.
  - `excludedCapabilities`: lista o que continua fora do escopo deste MVP.
- **Relationships**:
  - Consome `NFeOperationalRequest`, `NFeServiceStatusRequest`, `DocumentSituationRequest` e `OperationalMaintenanceRequest`.
  - Devolve `NFeAuthorizationOutcome`, `ServiceStatusSnapshot`, `DocumentSituationResult` e `OperationalMaintenanceOutcome`.

## NFeOperationalRequest

- **Purpose**: Representa a entrada orientada a aplicacao para autorizacao de NFe no MVP.
- **Fields**:
  - `environment`: ambiente alvo informado pelo integrador.
  - `documents`: dados canonicos de uma unica NFe ou de um lote suportado.
  - `signingContext`: contexto de assinatura reutilizavel preparado anteriormente.
  - `requestExecutor`: executor opcional de request para configuracao externa de rede.
  - `timeoutMs`: timeout operacional opcional.
- **Relationships**:
  - Reaproveita a montagem canonica e a serializacao XML ja existentes.
  - Pode gerar internamente uma `NFeAuthorizationBatch` antes do transporte.
  - Produz `NFeAuthorizationOutcome`.

## NFeAuthorizationBatch

- **Purpose**: Representa o conjunto de documentos submetidos numa autorizacao unica do MVP.
- **Fields**:
  - `batchId`: identificador do lote quando a autorizacao usar `enviNFe`.
  - `documents`: NFe canonicas normalizadas que integram a chamada.
  - `documentCount`: quantidade de documentos no envio.
  - `submissionMode`: indica `single-document` ou `batch`.
- **Relationships**:
  - E derivado de `NFeOperationalRequest`.
  - Alimenta assinatura, serializacao e transporte.

## NFeAuthorizationOutcome

- **Purpose**: Representa o resultado estruturado da autorizacao da NFe ou do lote.
- **Fields**:
  - `classification`: estado operacional resumido da autorizacao.
  - `receiptNumber`: identificador de recibo quando houver processamento assíncrono observado.
  - `protocolNumber`: protocolo final quando disponivel na mesma interacao.
  - `documentStatuses`: estados por documento para lote ou para NFe unica.
  - `transportOutcome`: evidencia e classificacao herdadas da camada de transporte.
  - `failureReason`: motivo sintetico da falha quando o fluxo nao puder ser concluido.
- **Relationships**:
  - E produzido a partir de `NFeAuthorizationBatch`.
  - Pode levar a uma `DocumentSituationRequest` quando o resultado permanecer intermediario.

## NFeServiceStatusRequest

- **Purpose**: Representa a entrada estruturada da consulta de status do servico.
- **Fields**:
  - `environment`: ambiente suportado.
  - `requestExecutor`: executor opcional.
  - `timeoutMs`: timeout operacional opcional.
- **Relationships**:
  - Resolve um `ServiceCatalogEntry` apropriado.
  - Produz `ServiceStatusSnapshot`.

## ServiceStatusSnapshot

- **Purpose**: Representa o retrato estruturado do estado operacional do autorizador consultado.
- **Fields**:
  - `classification`: estado observavel da operacao.
  - `applicationStatusCode`: `cStat` observado.
  - `applicationStatusMessage`: mensagem observada.
  - `observedAt`: marca temporal da observacao.
  - `transportOutcome`: evidencia completa da chamada.
- **Relationships**:
  - E produzido por `NFeServiceStatusRequest`.
  - Reaproveita `TransportOutcome` como evidencia subjacente.

## DocumentSituationRequest

- **Purpose**: Representa a entrada estruturada da consulta de situacao ou protocolo por chave de acesso.
- **Fields**:
  - `accessKey`: chave de acesso da NFe.
  - `environment`: ambiente suportado.
  - `requestExecutor`: executor opcional.
  - `timeoutMs`: timeout operacional opcional.
- **Relationships**:
  - Produz `DocumentSituationResult`.
  - Pode ser disparado a partir de `NFeAuthorizationOutcome` intermediario.

## DocumentSituationResult

- **Purpose**: Representa a resposta estruturada de situacao ou protocolo da NFe por chave de acesso.
- **Fields**:
  - `accessKey`: identificador consultado.
  - `classification`: estado operacional resumido da consulta.
  - `protocolNumber`: protocolo encontrado, quando houver.
  - `documentStatusCode`: codigo aplicacional do documento.
  - `documentStatusMessage`: mensagem operacional associada.
  - `transportOutcome`: evidencia completa da chamada.
- **Relationships**:
  - E produzido por `DocumentSituationRequest`.
  - Fecha o acompanhamento de autorizacoes intermediarias.

## OperationalMaintenanceRequest

- **Purpose**: Representa a entrada estruturada para inutilizacao, cancelamento ou carta de correcao.
- **Fields**:
  - `operation`: manutencao operacional solicitada.
  - `environment`: ambiente suportado.
  - `accessKey`: chave de acesso quando aplicavel.
  - `canonicalPayload`: dados canonicos especificos da manutencao.
  - `signingContext`: contexto de assinatura reutilizavel quando a operacao exigir assinatura.
  - `requestExecutor`: executor opcional.
  - `timeoutMs`: timeout operacional opcional.
- **Relationships**:
  - Produz `OperationalMaintenanceOutcome`.
  - Reaproveita transporte e assinatura conforme a natureza da manutencao.

## OperationalMaintenanceOutcome

- **Purpose**: Representa o resultado estruturado de inutilizacao, cancelamento ou carta de correcao.
- **Fields**:
  - `operation`: manutencao executada.
  - `classification`: estado operacional resumido.
  - `protocolNumber`: protocolo retornado, quando houver.
  - `applicationStatusCode`: codigo aplicacional observado.
  - `applicationStatusMessage`: mensagem associada.
  - `transportOutcome`: evidencia subjacente da troca.
  - `failureReason`: motivo sintetico da falha quando aplicavel.
- **Relationships**:
  - E produzido por `OperationalMaintenanceRequest`.
  - Reaproveita `TransportOutcome` como evidencia e classificacao de comunicacao.

## OperationalCoverageBoundary

- **Purpose**: Representa os limites formais deste MVP operacional de NFe.
- **Fields**:
  - `includedScope`: homologacao, autorizacao, status do servico, consulta por chave de acesso, inutilizacao, cancelamento e carta de correcao.
  - `excludedScope`: producao, variacao por UF, contingencias especiais, polling automatico de recibo e cobertura operacional completa nacional.
  - `deferredCapabilities`: roteamento por autorizador, multi-UF, consulta por protocolo como contrato principal, automacao de credenciamento e politicas amplas de retry ou backoff.
- **Relationships**:
  - E refletido no contrato publico, na documentacao do pacote e nas notas de compatibilidade.
