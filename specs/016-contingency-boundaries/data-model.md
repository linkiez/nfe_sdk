# Data Model: Contingency Boundaries

## Contingency Environment Boundary

- **Purpose**: Representa a classificacao observavel que diferencia autorizacao normal de um fluxo degradado por ambiente.
- **Fields**:
  - `classification`: classe observavel do resultado, como `contingency-boundary` ou equivalente additive.
  - `environment`: ambiente relevante para a classificacao, como `SVC-AN`, `SVC-RS`, `EPEC` ou `offline`.
  - `code`: identificador estavel da boundary publicada.
  - `message`: descricao curta e publica do motivo da degradacao ou do deferimento.
  - `retryable`: indicador de reexecucao segura sem implicar suporte automatico.
- **Validation rules**:
  - Deve existir apenas para fluxos que saem da autorizacao normal neste slice.
  - Nao pode implicar sucesso operacional silencioso nem transporte automatico quando a contingencia estiver fora do recorte.

## Supported Contingency Diagnostic

- **Purpose**: Modela o recorte promovido de contingencia que entra agora como diagnostico observavel sem emissor embutido.
- **Fields**:
  - `transportFallback`: fallback compartilhado suportado pelo slice, limitado a `SVC-AN` ou `SVC-RS`.
  - `documentFamily`: familia operacional afetada, como `NF-e` ou `NFC-e`.
  - `entrypoint`: facade publica que preserva o contrato root.
  - `dominantStateSignals`: evidencias estaduais que sustentam a promocao, limitadas neste corte a `SP` e `PR`.
  - `provenance`: referencias normativas e editoriais que sustentam a classificacao.
- **Validation rules**:
  - O primeiro corte promoted deve restringir o conjunto a ambientes compartilhados observaveis.
  - Nao pode depender de persistencia local, UI de emissor ou credenciamento automatizado.

## Deferred Contingency Path

- **Purpose**: Classifica trilhas de contingencia reais, mas ainda fora do runtime promoted.
- **Fields**:
  - `path`: item deferido, como `epec` ou `offline-nfce`.
  - `deliveryClass`: classificacao alvo atual, como `runtime-backlog`, `tooling` ou `documentation`.
  - `dominantStateSignals`: estados cuja evidencia ainda e insuficiente ou enviesada, como `RJ` e `CE`.
  - `dominantDependency`: motivo dominante do deferimento, como conciliacao pendente, dependencia local ou delta estadual forte.
  - `futurePromotionSignal`: condicao minima para futura promocao.
- **Validation rules**:
  - Todo caminho deferido deve permanecer nomeado no contrato e no roadmap.
  - Nenhum caminho deferido pode parecer implicitamente suportado em runtime.

## Normal Flow Baseline

- **Purpose**: Representa o comportamento operacional atual que nao pode regredir enquanto a contingencia ganha visibilidade.
- **Fields**:
  - `entrypoint`: facade publica ja estabilizada.
  - `environment`: ambiente normal da operacao.
  - `acceptedForTransport`: resultado esperado na ausencia de contingencia.
  - `transportOutcome`: evidencia de transporte preservada.
- **Validation rules**:
  - Deve continuar equivalente ao baseline atual quando nenhum criterio de contingencia estiver ativo.
  - Toda nova classificacao de contingencia deve provar nao regressao desse baseline.