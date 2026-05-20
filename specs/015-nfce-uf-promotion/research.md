# Research: NFC-e UF Promotion

## Decision 1: Promote only `PR` beyond `SP` in the first cohort

- **Decision**: Limitar o primeiro corte promoted de `NFC-e` alem de `SP` a `PR`.
- **Rationale**: `PR` e a `UF` com evidencia estadual mais forte e operacionalmente coerente no roadmap atual, incluindo sinais de `homologacao`, `producao`, web services, contingencia, `CSC` e `QR Code`. Isso permite promover a extensao estadual do runtime sem abrir um lote amplo e ambíguo de `UFs`.
- **Alternatives considered**:
  - Promover `PR` e `PB` juntas: rejeitado porque `PB` ainda concentra sinais fortes em `CSC` e consulta do consumidor, o que arrasta backlog auxiliar para dentro do mesmo corte.
  - Promover `PR`, `PB` e `MS`: rejeitado porque o lote inicial deixaria de ser pequeno e aumentaria o risco de roteamento e documentação divergentes.
  - Deixar a `UF` em aberto para o plano: rejeitado porque manteria ambiguidade material sobre fixtures, testes, routing e cobertura.

## Decision 2: Keep the same root facade and expand only its supported cohort

- **Decision**: Reutilizar `authorizeNFCe` como superficie publica unica, ampliando apenas o lote suportado de `UFs` e a selecao de perfil estadual.
- **Rationale**: A spec `010` ja estabeleceu o contrato root additive para `NFC-e`. Criar outra operacao publica para promocao de `UF` aumentaria sem valor real a superficie do pacote e quebraria a linguagem de boundary ja estabilizada.
- **Alternatives considered**:
  - Expor uma nova facade dedicada a `PR`: rejeitado porque fragmentaria o contrato root e transformaria diferenca de `UF` em escolha de API.
  - Expor subpath publico para perfis estaduais: rejeitado porque conflita com a politica ESM additive do pacote e com a ocultacao de detalhes internos.

## Decision 3: Keep `CSC`, `QR Code`, `DANFE NFC-e`, consumer query, and `offline` contingency deferred

- **Decision**: Manter `CSC`, `QR Code`, `DANFE NFC-e`, consulta do consumidor, contingencia `offline`, `EPEC NFC-e` e cancelamento por substituicao fora da promocao imediata de runtime.
- **Rationale**: O roadmap separa explicitamente esses assuntos entre backlog de runtime, tooling e exemplo. Em `PR`, eles aparecem como prova de backlog rico, nao como sinal de promocao integral automatica. Preservar essa fronteira evita que a promocao de uma `UF` vire promessa silenciosa de ecossistema completo.
- **Alternatives considered**:
  - Incluir `CSC` e `QR Code` porque `PR` tem evidencia forte: rejeitado porque isso reabre a fronteira entre emissao, pos-autorizacao e delta estadual.
  - Incluir `DANFE NFC-e` como API auxiliar: rejeitado porque o proprio roadmap o trata como `exemplo` + `documentacao`, nao como contrato runtime imediato.

## Decision 4: Keep the implementation inside handwritten runtime boundaries only

- **Decision**: Restringir a implementacao a `src/canonical/nfce/`, `src/canonical/transport/`, `src/canonical/facade/`, `src/public-contract.ts`, `README.md`, testes e docs do roadmap.
- **Rationale**: A resolucao de `UF`, a selecao de perfil, os outcomes operacionais e o routing de transporte ja existem como codigo manual. Nao ha necessidade de tocar schemas gerados nem o pipeline de geracao para promover `PR`.
- **Alternatives considered**:
  - Alterar classes/interfaces geradas de `NFC-e`: rejeitado porque a estrutura documental da `NFC-e` nao muda por `UF` neste recorte.
  - Introduzir nova camada de configuracao externa para perfis: rejeitado porque o primeiro corte precisa permanecer pequeno, deterministico e focado no contrato existente.

## Decision 5: Validate by SP regression, PR success, and unsupported-UF boundary

- **Decision**: O gate minimo da feature deve provar tres coisas: `SP` continua funcionando, `PR` entra no cohort promovido e `UFs` fora do lote continuam bloqueadas antes do transporte.
- **Rationale**: Esse e o menor conjunto de checks capaz de falsificar regressao no piloto atual, falha na promocao nova ou vazamento de cobertura implicita para outras `UFs`.
- **Alternatives considered**:
  - Validar apenas `PR`: rejeitado porque nao prova ausencia de regressao em `SP`.
  - Validar um lote maior de `UFs`: rejeitado porque conflita com o recorte pequeno da feature e aumenta o custo de fixture e de provenance antes da hora.

## Decision 6: Record dominant exclusion rationale for nearby UFs

- **Decision**: Registrar explicitamente por que `PB`, `MS`, `GO`, `SC` e `CE` permanecem fora do cohort inicial `SP` + `PR`.
- **Rationale**: A feature deriva de `RFL-006` e precisa ser auditavel contra `RTM-007`, `RTM-011` e `RTM-012`. Sem o racional dominante por `UF`, a proxima promocao fica sujeita a inferencia editorial e nao a criterio reproduzivel.
- **Dominant excluded-UF rationale**:
  - `PB`: backlog auxiliar dominado por `CSC` e consulta do consumidor.
  - `MS`: leitura estadual forte, mas ainda sem consolidacao especifica do recorte operacional de `NFC-e`.
  - `GO`: delta estadual mais forte concentrado em `QR Code`.
  - `SC`: sinais mais fortes em autenticacao, download e infraestrutura compartilhada do que em autorizacao estadual fechada.
  - `CE`: evidencia operacional promissora, mas ainda ruidosa pela captura parcial do acervo estadual.
- **Alternatives considered**:
  - Nao registrar exclusoes nomeadas: rejeitado porque enfraquece a auditabilidade da slice.
  - Registrar apenas um grupo generico de UFs nao promovidas: rejeitado porque perde o motivo dominante de cada exclusao.

## Traceability

- `RFL-006`: define a necessidade de promover `NFC-e` alem do piloto mono-`UF` sem declarar cobertura nacional implicita.
- `RTM-007`: sustenta a necessidade de manter a linguagem operacional additive do contrato root.
- `RTM-011`: ancora a leitura por `UF` e o criterio de promocao conservador do runtime.
- `RTM-012`: reforca que `CSC`, `QR Code`, contingencia e demais deltas auxiliares devem continuar fora da promocao imediata quando ainda nao possuirem boundary estavel.