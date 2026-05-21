# Data Model: Recipient Continuity

## RootRecipientContinuityFacade

- **Purpose**: Representa a extensao additive da superficie publica do pacote para a continuidade do fluxo do destinatario acima do MVP da spec `008`.
- **Fields**:
  - `publishedExports`: nomes das funcoes root envolvidas no fluxo, incluindo a nova recuperacao posterior.
  - `stableDistributionEntry`: referencia a `distributeRecipientDFe` como entrada estavel de continuidade do cursor.
  - `followUpRetrievalEntry`: referencia a facade dedicada de recuperacao posterior.
  - `excludedCapabilities`: lista o que continua fora da slice.
- **Relationships**:
  - Consome `RecipientDistributionQuery` enriquecida e `RecipientDocumentRetrievalRequest`.
  - Devolve `RecipientDistributionOutcome` enriquecido e `RecipientDocumentRetrievalOutcome`.

## RecipientContinuationState

- **Purpose**: Representa a leitura operacional da continuidade do destinatario apos uma distribuicao.
- **Fields**:
  - `nextAction`: indica se o integrador deve consumir documentos, aguardar backoff, retomar com novo cursor ou seguir para recuperacao posterior.
  - `cursorAdvanced`: indica se `ultNSU` realmente avancou em relacao ao cursor de entrada.
  - `recommendedBackoffMs`: espelha o intervalo sugerido quando nao ha novidades imediatas.
  - `reason`: explica por que o proximo passo foi recomendado.
- **Relationships**:
  - E agregado por `RecipientDistributionOutcome`.
  - Pode alimentar `RecipientDocumentRetrievalRequest`.

## RecipientDistributionQuery

- **Purpose**: Mantem a solicitacao estruturada de distribuicao via `distNSU`, agora lida explicitamente como ponto de retomada do fluxo.
- **Fields**:
  - `environment`: permanece limitado a homologacao.
  - `actor`: destinatario PJ ou PF.
  - `ultNSU`: cursor de continuidade informado pelo integrador.
  - `requestExecutor`: executor opcional de rede.
  - `timeoutMs`: timeout operacional opcional.
- **Relationships**:
  - Produz `RecipientDistributionOutcome` enriquecido.

## RecipientDistributionOutcome

- **Purpose**: Representa o resultado estruturado da distribuicao, agora com semantica explicita de continuidade.
- **Fields**:
  - `classification`: classificacao publica ja existente do fluxo.
  - `actor`: destinatario observado.
  - `cursor`: continuidade observavel retornada pela distribuicao.
  - `documents`: envelopes estruturados retornados.
  - `continuation`: novo bloco `RecipientContinuationState` com orientacao da proxima acao.
  - `transportOutcome`: evidencia subjacente de transporte.
  - `failureReason`: motivo sintetico quando aplicavel.
- **Relationships**:
  - Pode alimentar `RecipientDocumentRetrievalRequest` quando houver um documento esperado apos manifestacao.

## RecipientFollowUpTarget

- **Purpose**: Representa o criterio funcional usado para encontrar o documento posterior liberado ao destinatario.
- **Fields**:
  - `accessKey`: chave de acesso esperada para o documento liberado.
  - `documentKinds`: tipos de envelope aceitaveis para considerar a recuperacao concluida.
  - `sourceEventType`: evento de manifestacao relacionado, quando disponivel.
- **Relationships**:
  - E parte de `RecipientDocumentRetrievalRequest`.
  - E comparado com `RecipientDocumentEnvelope` retornado pela distribuicao.

## RecipientDocumentRetrievalRequest

- **Purpose**: Representa a chamada dedicada e separada para recuperar o documento posterior ao evento do destinatario.
- **Fields**:
  - `environment`: homologacao.
  - `actor`: destinatario interessado.
  - `startingCursor`: cursor conhecido a partir do qual a continuidade sera observada.
  - `target`: criterio funcional do documento esperado.
  - `requestExecutor`: executor opcional de rede.
  - `timeoutMs`: timeout opcional.
- **Relationships**:
  - Reutiliza o fluxo de distribuicao do destinatario.
  - Produz `RecipientDocumentRetrievalOutcome`.

## RecipientDocumentRetrievalOutcome

- **Purpose**: Representa o resultado estruturado da recuperacao posterior do documento.
- **Fields**:
  - `classification`: indica `document-available`, `document-pending`, `no-new-documents`, `dependency-limited`, `usage-error`, `unsupported-scope`, `unavailable` ou `protocol-error`.
  - `matchedDocument`: envelope estruturado do documento encontrado, quando houver.
  - `distributionOutcome`: evidencia de continuidade que sustentou a busca.
  - `failureReason`: motivo sintetico quando a recuperacao nao fecha.
- **Relationships**:
  - Depende de uma `RecipientDistributionOutcome` observavel.
  - Pode ser usada pelo integrador para decidir nova tentativa posterior.

## RecipientDocumentEnvelope

- **Purpose**: Continua representando cada item retornado pela distribuicao, mas agora precisa sustentar a deteccao de documento liberado posterior.
- **Fields**:
  - `kind`: `summary`, `full-document` ou `other`.
  - `nsu`: NSU do item.
  - `schemaType`: familia normativa do envelope.
  - `compressedPayload`: conteudo original compactado.
  - `accessKey`: chave de acesso extraida quando disponivel.
  - `normalizedPayload`: projeção minima do envelope.
  - `isManifestationFollowUpCandidate`: indicador derivado para envelopes capazes de satisfazer uma recuperacao posterior.
- **Relationships**:
  - Pode satisfazer um `RecipientFollowUpTarget`.

## DeferredRecipientContinuityBoundary

- **Purpose**: Representa as capacidades explicitamente mantidas fora do primeiro corte de continuidade.
- **Fields**:
  - `excludedQueries`: `consNSU` e `consChNFe` como consultas auxiliares nao promovidas.
  - `excludedAutomation`: polling agressivo, sincronizacao recorrente de carteira e credenciamento automatizado.
  - `excludedEnvironments`: producao.
  - `externalDependencies`: certificado digital, habilitacao externa e disponibilidade oficial.
- **Relationships**:
  - E refletido no contrato publico, quickstart e `src/public-contract.ts`.
