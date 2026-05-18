# Data Model: Recipient DFe MVP

## RootRecipientDFeFacade

- **Purpose**: Representa a ampliacao additive da superficie publica do pacote para as operacoes iniciais do lado do destinatario.
- **Fields**:
  - `publishedExports`: nomes das funcoes publicas expostas no import raiz para distribuicao e manifestacao.
  - `supportedEnvironment`: ambiente operacional suportado nesta fase.
  - `supportedDistributionModes`: lista o modo de distribuicao suportado pelo MVP.
  - `supportedManifestationEvents`: lista os quatro eventos basicos suportados.
  - `excludedCapabilities`: lista o que permanece fora do escopo deste MVP.
- **Relationships**:
  - Consome `RecipientDistributionQuery` e `RecipientManifestationRequest`.
  - Devolve `RecipientDistributionOutcome` e `RecipientManifestationOutcome`.

## RecipientDistributionQuery

- **Purpose**: Representa a entrada estruturada da distribuicao DFe via `distNSU` para destinatario PJ ou PF.
- **Fields**:
  - `environment`: ambiente alvo suportado pelo slice.
  - `actor`: identifica o destinatario interessado, PJ ou PF, e seu documento fiscal.
  - `ultNSU`: cursor inicial ou de continuidade informado pelo integrador.
  - `requestExecutor`: executor opcional de request para configuracao externa de rede.
  - `timeoutMs`: timeout operacional opcional.
- **Relationships**:
  - Produz `RecipientDistributionOutcome`.
  - Reaproveita `TransportOutcome` como evidencia subjacente da chamada.

## RecipientDistributionCursor

- **Purpose**: Representa a continuidade observavel do fluxo de distribuicao retornado pelo Ambiente Nacional.
- **Fields**:
  - `ultNSU`: ultimo NSU efetivamente observado na interacao.
  - `maxNSU`: maior NSU conhecido no momento da resposta.
  - `hasMoreDocumentsNow`: indicacao derivada da relacao entre `ultNSU` e `maxNSU`.
  - `recommendedBackoffMs`: sugestao operacional de espera quando nao houver novos documentos.
- **Relationships**:
  - E parte de `RecipientDistributionOutcome`.
  - Orienta a proxima `RecipientDistributionQuery`.

## RecipientDocumentEnvelope

- **Purpose**: Representa cada item estruturado retornado pela distribuicao em formato utilizavel pela aplicacao.
- **Fields**:
  - `kind`: distingue `summary`, `full-document` ou outra categoria operacional reconhecida pelo contrato.
  - `nsu`: NSU associado ao item distribuido.
  - `schemaType`: familia normativa identificada para o item.
  - `compressedPayload`: conteudo bruto compactado quando relevante para rastreabilidade.
  - `normalizedPayload`: representacao estruturada derivada do item, quando disponivel no slice.
  - `accessKey`: chave de acesso associada, quando aplicavel.
- **Relationships**:
  - E agregado por `RecipientDistributionOutcome`.
  - Pode motivar uma `RecipientManifestationRequest` posterior.

## RecipientDistributionOutcome

- **Purpose**: Representa o resultado estruturado da distribuicao DFe para o destinatario.
- **Fields**:
  - `classification`: estado operacional resumido da consulta.
  - `actor`: destinatario PJ ou PF observado pela operacao.
  - `cursor`: continuidade observavel retornada pelo fluxo.
  - `documents`: lote estruturado de envelopes retornados.
  - `transportOutcome`: evidencia completa da troca.
  - `failureReason`: motivo sintetico quando a distribuicao nao puder ser concluida.
- **Relationships**:
  - E produzido por `RecipientDistributionQuery`.
  - Pode alimentar `RecipientDownloadFollowUp` ou `RecipientManifestationRequest`.

## RecipientManifestationRequest

- **Purpose**: Representa a entrada estruturada para registrar manifestacao do destinatario sobre uma NF-e.
- **Fields**:
  - `environment`: ambiente suportado.
  - `actor`: destinatario PJ ou PF que registra o evento.
  - `accessKey`: chave de acesso da NF-e manifestada.
  - `eventType`: um dos quatro eventos basicos suportados.
  - `justification`: justificativa complementar quando exigida pela regra do evento.
  - `signingContext`: contexto reutilizavel de assinatura para o evento.
  - `requestExecutor`: executor opcional.
  - `timeoutMs`: timeout operacional opcional.
- **Relationships**:
  - Produz `RecipientManifestationOutcome`.
  - Pode habilitar `RecipientDownloadFollowUp` via distribuicao posterior.

## RecipientManifestationOutcome

- **Purpose**: Representa o resultado estruturado do processamento do evento de manifestacao.
- **Fields**:
  - `classification`: estado operacional resumido do evento.
  - `eventType`: tipo basico registrado.
  - `protocolNumber`: protocolo do evento quando houver.
  - `applicationStatusCode`: `cStat` observado.
  - `applicationStatusMessage`: mensagem retornada pelo processamento.
  - `transportOutcome`: evidencia completa da troca.
  - `downloadRemainsSeparate`: flag contratual indicando que o download nao ocorre automaticamente.
  - `failureReason`: motivo sintetico da falha quando aplicavel.
- **Relationships**:
  - E produzido por `RecipientManifestationRequest`.
  - Pode levar a um `RecipientDownloadFollowUp` posterior via nova distribuicao.

## RecipientDownloadFollowUp

- **Purpose**: Representa a recuperacao posterior da NF-e liberada por manifestacao, explicitamente separada do registro inicial do evento.
- **Fields**:
  - `triggeringEventType`: evento que pode ter habilitado o download posterior.
  - `accessKey`: chave de acesso da NF-e esperada.
  - `retrievalMode`: sempre distribuicao posterior neste slice.
  - `retrievalState`: pendente, disponivel ou nao observada ainda.
- **Relationships**:
  - Depende de `RecipientManifestationOutcome` e de uma nova `RecipientDistributionQuery`.

## RecipientCoverageBoundary

- **Purpose**: Representa os limites formais deste MVP do lado do destinatario.
- **Fields**:
  - `includedScope`: homologacao, distribuicao via `distNSU`, envelopes tipados, destinatario PJ ou PF e os quatro eventos basicos de manifestacao.
  - `excludedScope`: producao, `consNSU`, `consChNFe`, eventos genericos, EPEC, download automatico e variacoes regionais de maior abrangencia.
  - `externalDependencies`: certificado digital, habilitacao operacional e disponibilidade dos servicos nacionais.
- **Relationships**:
  - E refletido no contrato publico, na documentacao do pacote e nas notas de compatibilidade.
