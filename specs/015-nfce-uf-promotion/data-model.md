# Data Model: NFC-e UF Promotion

## Promoted NFC-e UF Cohort

- **Purpose**: Representa o conjunto pequeno e deterministico de `UFs` cujo fluxo operacional de `NFC-e` e suportado pelo contrato root nesta feature.
- **Fields**:
  - `supportedUfs`: lista fechada de `UFs` promovidas neste corte, limitada a `SP` e `PR`.
  - `defaultRuntimeState`: classificacao que identifica o cohort como `runtime` promovido.
  - `excludedUfRationales`: mapa resumido das `UFs` nao promovidas e da razao dominante da exclusao.
- **Excluded-UF rationale map**:
  - `PB` -> `csc-consumer-query-dominant`
  - `MS` -> `nfce-slice-not-yet-consolidated`
  - `GO` -> `qr-code-delta-dominant`
  - `SC` -> `auth-download-infra-dominant`
  - `CE` -> `noisy-state-evidence`
- **Validation rules**:
  - Deve existir uma unica fonte manual de verdade para o cohort suportado.
  - Nenhuma `UF` alem de `SP` e `PR` pode entrar implicitamente por roteamento generico.

## NFC-e Operational Profile

- **Purpose**: Modela o perfil estadual efetivamente escolhido para uma `UF` promovida antes do transporte.
- **Fields**:
  - `uf`: sigla da `UF` resolvida a partir do documento.
  - `environment`: ambiente suportado, restrito a `homologation` neste slice.
  - `serviceKey`: identificador de servico necessario para transporte e roteamento.
  - `boundaryNotes`: explicacoes sobre capacidades auxiliares que permanecem fora do runtime.
- **Validation rules**:
  - So pode ser criado para `SP` ou `PR`.
  - Deve manter shape compatível com o fluxo ja usado por `SP`.

## Supported NFC-e Authorization Request

- **Purpose**: Representa a entrada publica ja existente em `authorizeNFCe`, agora com suporte ao cohort promovido `SP` + `PR`.
- **Fields**:
  - `document`: NFC-e canonica suficiente para serializacao, assinatura e inferencia da `UF`.
  - `environment`: ambiente alvo, mantido como `homologation`.
  - `signingContext`: contexto reutilizavel de assinatura.
  - `requestExecutor`: executor opcional para o request remoto.
  - `requestedCapabilities`: sinalizacao opcional de superficies deferidas.
- **Validation rules**:
  - `environment` deve continuar limitado a `homologation`.
  - `requestedCapabilities` deve produzir `unsupported-scope` para `CSC`, `QR Code`, `DANFE NFC-e`, consulta do consumidor, contingencia `offline`, `EPEC NFC-e` e cancelamento por substituicao.

## Supported NFC-e Authorization Outcome

- **Purpose**: Representa o resultado observavel do contrato root para `SP` e `PR`.
- **Fields**:
  - `classification`: classificacao operacional do resultado.
  - `acceptedForTransport`: indicador de envio remoto efetivo.
  - `coverageBoundary`: boundary explicita quando a `UF` ou a capability fica fora do recorte.
  - `transportOutcome`: evidencia de transporte quando o envio remoto acontece.
  - `protocolNumber`: protocolo funcional, quando aplicavel.
  - `validationFailures`: falhas locais ou fiscais antes do transporte.
- **Validation rules**:
  - Para `UF` fora do cohort, `acceptedForTransport` deve permanecer `false`.
  - Para `PR`, o shape do outcome deve continuar equivalente ao de `SP`.

## Deferred NFC-e Auxiliary Boundary

- **Purpose**: Classifica as superficies auxiliares que continuam fora da promocao imediata.
- **Fields**:
  - `capability`: item deferido, como `CSC`, `qr-code`, `danfe-nfce`, `consumer-query`, `offline-contingency`, `epec-nfce` ou `substitution-cancellation`.
  - `deliveryClass`: classificacao alvo atual (`tooling`, `example`, `documentation`, `runtime-backlog`).
  - `rationale`: motivo dominante para permanecer fora do runtime atual.
  - `futurePromotionSignal`: condicao minima para futura promocao.
- **Validation rules**:
  - Nenhuma capability deferida pode aparecer como runtime implicito em `PR`.
  - A mesma taxonomia deve ser repetivel entre spec, contrato e roadmap.
  - O racional dominante das `UFs` excluidas deve continuar coerente com `RFL-006`, `RTM-007`, `RTM-011` e `RTM-012`.