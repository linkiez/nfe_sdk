# Data Model: Add SOAP Transport

## RootTransportFacade

- **Purpose**: Representa a ampliacao additive da superficie publica do pacote para resolver endpoints e executar transporte SOAP suportado sem expor a pilha interna de protocolo.
- **Fields**:
  - `publishedExports`: nomes das novas funcoes publicas expostas no import raiz.
  - `supportedServices`: servicos cobertos no primeiro slice.
  - `supportedEnvironment`: ambiente suportado nesta fase.
  - `excludedCapabilities`: lista o que continua fora do escopo desta entrega.
- **Relationships**:
  - Resolve `ServiceCatalogEntry` para uma combinacao suportada.
  - Executa `TransportRequest` e devolve `TransportOutcome`.

## SupportedNFeSoapService

- **Purpose**: Representa a definicao tipada de cada servico SOAP coberto na primeira entrega.
- **Fields**:
  - `serviceId`: identificador estavel do servico no SDK.
  - `documentFamily`: familia documental associada.
  - `requestElementName`: nome do elemento que encapsula o payload no body SOAP.
  - `responseElementName`: nome esperado do elemento de retorno.
  - `successStatusCodes`: codigos aplicacionais tratados como sucesso.
  - `unavailabilityStatusCodes`: codigos aplicacionais tratados como indisponibilidade.
- **Relationships**:
  - E referenciado por `ServiceCatalogEntry`.
  - Dirige a classificacao de `TransportOutcome`.

## ServiceCatalogEntry

- **Purpose**: Representa uma entrada versionada de endpoint suportado para o catalogo compartilhado inicial.
- **Fields**:
  - `serviceId`: servico suportado pela entrada.
  - `environment`: ambiente da entrada.
  - `provider`: autorizador compartilhado escolhido para o slice.
  - `endpointUrl`: URL resolvida para chamada.
  - `layoutVersion`: versao de leiaute transportada.
  - `catalogVersion`: versao do catalogo publicada pelo SDK.
  - `provenance`: evidencias oficiais usadas para consolidar a entrada.
- **Relationships**:
  - E retornado por `resolveNFeServiceEndpoint`.
  - Alimenta a montagem de `TransportRequest`.

## TransportRequest

- **Purpose**: Representa a solicitacao pronta para transporte apos validacao de servico, ambiente e endpoint.
- **Fields**:
  - `service`: servico escolhido pelo integrador.
  - `environment`: ambiente alvo normalizado.
  - `payloadXml`: XML aplicacional informado pelo chamador.
  - `timeoutMs`: timeout operacional escolhido para a chamada.
  - `requestExecutor`: porta opcional para execucao HTTP customizada.
- **Relationships**:
  - Usa uma `ServiceCatalogEntry` para montar o envelope SOAP.
  - Produz `SoapExchangeEvidence` e `TransportOutcome`.

## SoapExchangeEvidence

- **Purpose**: Representa a evidencia minima observavel da troca de transporte.
- **Fields**:
  - `endpointUrl`: endpoint efetivamente utilizado.
  - `provider`: autorizador compartilhado usado na chamada.
  - `requestEnvelopeXml`: envelope SOAP emitido pelo SDK.
  - `responseEnvelopeXml`: envelope SOAP recebido, quando houver.
  - `httpStatus`: status HTTP observado, quando houver resposta.
  - `durationMs`: duracao observada da troca.
- **Relationships**:
  - E embutido em `TransportOutcome`.
  - Sustenta regressao de fixtures e diagnostico do integrador.

## TransportOutcome

- **Purpose**: Representa o resultado estruturado da chamada SOAP, separado entre transporte, classificacao e evidencia.
- **Fields**:
  - `classification`: categoria observavel do resultado entre `success`, `timeout`, `usage-error`, `unavailable`, `functional-rejection` e `protocol-error`.
  - `service`: servico que originou a chamada.
  - `environment`: ambiente alvo da chamada.
  - `applicationStatusCode`: `cStat` ou equivalente extraido do retorno, quando houver.
  - `applicationStatusMessage`: texto aplicacional associado ao retorno, quando houver.
  - `evidence`: evidencia crua da troca.
  - `failureReason`: motivo sintetico da falha, obrigatorio quando a classificacao representa timeout, erro de uso ou erro protocolar.
- **Relationships**:
  - E produzido a partir de `TransportRequest`.
  - Reflete regras de classificacao definidas por `SupportedNFeSoapService`.
  - Reaproveita `SoapExchangeEvidence` mesmo quando a tentativa termina sem `responseEnvelopeXml`.

## TransportCoverageBoundary

- **Purpose**: Representa os limites formais da cobertura deste slice de transporte.
- **Fields**:
  - `includedScope`: homologacao, SVAN compartilhada, consulta de status e autorizacao.
  - `excludedScope`: producao, SVRS, SVC, diferenciacao por UF, outros servicos e dominio fiscal fim a fim.
  - `deferredCapabilities`: mTLS gerenciado pelo SDK, polling de recibo, consulta de protocolo, politicas de retry e roteamento por autorizador.
- **Relationships**:
  - E refletido no contrato publico e nas notas de compatibilidade.
  - Dialoga com o backlog da fase 5 do roadmap.