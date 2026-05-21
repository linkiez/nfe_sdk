# Pendencias das Specs Abertas e Documentos Direcionadores

## Objetivo

Explicitar, para as specs ainda abertas, quais tasks permanecem em aberto, qual fase do roadmap elas seguram e quais documentos oficiais sustentam a necessidade tecnica dessa continuidade.

## Regra de leitura

- Este anexo nao reabre backlog paralelo: ele apenas traduz as tasks abertas das specs em execucao para a linguagem do roadmap.
- Quando a task remanescente for apenas de validacao ou formalizacao de proxima slice, isso fica marcado explicitamente.

## Anexo complementar

- [Proximas iteracoes recomendadas](./proximas-iteracoes-recomendadas.md)

## Fechamento recente relevante

- A spec `015-nfce-uf-promotion` ficou reduzida a uma unica task de validacao final (`T027`) depois que a promocao de `PR`, a rastreabilidade `RFL-006` / `RTM-007` / `RTM-011` / `RTM-012` e a coerencia do cohort `SP + PR` foram aterradas.
- A spec `016-contingency-boundaries` foi implementada como fechamento additive de `RFL-005`, consolidando `authorizeNFe` como primeira facade com `contingency-boundary` observavel para `SVC-AN` e `SVC-RS` e removendo esse slice do conjunto de specs abertas.
- As specs `017-close-operational-specs`, `018-external-table-policy`, `019-trust-chain-diagnostics` e `020-nfe-state-operations` foram implementadas e absorvidas pelo roadmap, respectivamente como reconciliacao editorial, politica canonica de `RTM-010`, trilha diagnostica de `RTM-018` e leitura additive de estado para `NF-e`.
- A spec `021-nfe-receipt-protocol` segue em execucao como a principal continuidade runtime de `NF-e`, ainda aberta em torno de scaffolds de fixture/teste, contrato root e reconciliacao dedicada por `nRec`.
- A spec `022-recipient-continuity` foi implementada como fechamento additive de continuidade do destinatario sobre `distNSU`, com recuperacao posterior via `retrieveRecipientDocument` e boundaries explicitas para `consNSU`, `consChNFe`, producao e polling agressivo.
- A spec `023-nfce-pr-promotion` foi implementada como corte menor de promocao runtime para `PR` acima do baseline `SP`, fechando o primeiro cohort `SP + PR` sem promover `CSC`, `QR Code`, consulta do consumidor ou contingencia offline.

## Spec `005` - Add Digital Signing

| Item                      | Conteudo                                                              |
| ------------------------- | --------------------------------------------------------------------- |
| Fase do roadmap impactada | Fase 3                                                                |
| Tema principal            | `RTM-003`                                                             |
| Status atual              | `33/37` tasks fechadas                                                |
| Tipo de pendencia         | Planejamento da proxima slice, nao defeito do slice `NFe` ja entregue |

### Tasks ainda abertas

| Task   | O que ainda falta                                                                            | Impacto no roadmap                                                       |
| ------ | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `T033` | Definir a proxima slice de assinatura para `evento` XML                                      | Mantem `RTM-003` sem fechamento completo para eventos                    |
| `T034` | Definir a proxima slice para assinatura de `NFC-e` e boundaries com `QR Code`                | Segura a ponte entre Fase 3 e Fase 7                                     |
| `T035` | Definir o empilhamento entre assinatura, transporte `SOAP` e submissao de documento assinado | Segura a conexao formal entre Fase 3 e Fase 4                            |
| `T036` | Definir calculos adiados de chave completa, `DV` e `hashCSRT`                                | Mantem parte das precondicoes tecnicas fora do fechamento formal da fase |

`T037` foi atendida pela abertura de [specs/014-expand-signing-coverage](../../specs/014-expand-signing-coverage/spec.md).

### Documentos oficiais que puxam essa continuidade

| Documento oficial                      | Por que ainda importa                                                               |
| -------------------------------------- | ----------------------------------------------------------------------------------- |
| `MOC 7.0` e Anexo I                    | Mantem a base de assinatura e montagem do documento que precisa continuar coerente  |
| `NT 2026.001 v1.00` (`PAA`)            | Empurra a necessidade de amadurecer assinatura e autorizacao como conjunto coerente |
| Cadeias de certificados `www` e `www1` | Sustentam trust chain e precondicoes de conexao segura                              |
| Manual `SVAN` e manual `SVRS`          | Exigem leitura de interoperabilidade segura em ambientes compartilhados             |
| Manual `DANFE NFC-e` e `QR Code`       | Justificam a task aberta sobre boundaries de assinatura em `NFC-e`                  |

### Fechamento minimo recomendado

- Executar `T033` a `T036` dentro da spec `014` para que a continuidade da assinatura deixe de ser apenas planejamento formal.

## Spec `015` - NFC-e UF Promotion

| Item                      | Conteudo                                                                |
| ------------------------- | ----------------------------------------------------------------------- |
| Fase do roadmap impactada | Fase 7                                                                  |
| Tema principal            | `RFL-006`, `RTM-007`, `RTM-011` e `RTM-012`                             |
| Status atual              | `26/27` tasks fechadas                                                  |
| Tipo de pendencia         | Validacao final do slice ja implementado, nao falta funcional dominante |

### Tasks ainda abertas

| Task   | O que ainda falta                                                                                                                                                              | Impacto no roadmap                                                                                     |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `T027` | Rodar o fluxo final de validacao da feature sobre runtime, contrato, `README`, testes focados de `SP` + `PR` e `quickstart` com lint, format, typecheck, test, build e tarball | Mantem a trilha ampla de promocao por `UF` aberta, mas sem bloquear o cohort `SP + PR` ja implementado |

### Documentos oficiais que puxam essa continuidade

| Documento oficial ou anexo canonico                             | Por que ainda importa                                                          |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [nfce-operacional-promovivel](./nfce-operacional-promovivel.md) | Mantem o recorte promovivel e a fronteira do cohort `SP + PR`                  |
| [ufs-ambientes](./ufs-ambientes.md)                             | Sustenta a justificativa estadual de `PR` e as exclusoes das demais `UFs`      |
| Manual de boas praticas `NFC-e`                                 | Reforca as boundaries de `CSC`, `QR Code` e homologacao                        |
| `NT 2023.002 v1.01`                                             | Sustenta o nucleo operacional nacional reaproveitado pela promocao de `PR`     |
| Manual de `DANFE NFC-e` e `QR Code`                             | Mantem claras as capacidades auxiliares que continuam fora do runtime imediato |

### Fechamento minimo recomendado

- Executar `T027`, registrar qualquer ajuste residual e, nao havendo regressao, mover a spec para `implementada` no roadmap.

## Spec `021` - NFe Receipt Protocol

| Item                      | Conteudo                                                       |
| ------------------------- | -------------------------------------------------------------- |
| Fase do roadmap impactada | Fase 5                                                         |
| Tema principal            | `RFL-001`, `RTM-004` e `RTM-006`                               |
| Status atual              | `16/30` tasks fechadas                                         |
| Tipo de pendencia         | Slice runtime em execucao com backlog ainda concentrado no MVP |

### Tasks ainda abertas

| Task(s)     | O que ainda falta                                                                                                   | Impacto no roadmap                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `T001-T004` | Criar scaffolds de fixtures e suites focadas de contrato, integracao e unidade para respostas de recibo e protocolo | Sem essas bases, o slice ainda nao consegue provar o comportamento novo         |
| `T005-T008` | Fechar tipos, roteamento e baseline do contrato root para a promocao por recibo                                     | Segura a publicacao coerente da facade dedicada e do `receiptNumber` observavel |
| `T009-T014` | Tornar observavel o retorno assincrono com `nRec` em `authorizeNFe`, alinhar fixtures e documentacao do fluxo       | Mantem a trilha de recibo/protocolo fora do runtime estabilizado completo       |

### Documentos oficiais que puxam essa continuidade

| Documento oficial ou anexo canonico                                       | Por que ainda importa                                                                    |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `MOC 7.0`, Anexo I                                                        | Sustenta o fluxo oficial de autorizacao, recibo e protocolo                              |
| Servicos `NfeAutorizacao4` e `NfeRetAutorizacao4`                         | Delimitam o recorte oficial minimo de submissao assincrona e consulta por `nRec`         |
| [recortes-funcionais-prioritarios](./recortes-funcionais-prioritarios.md) | Localiza `RFL-001` como o proximo corte runtime para recibo e protocolo                  |
| [coverage-matrix](./coverage-matrix.md)                                   | Mantem visivel o gap entre a superficie root atual e a reconciliacao dedicada por recibo |

### Fechamento minimo recomendado

- Fechar `T001` a `T014`, publicar a facade dedicada de reconciliacao por `nRec` com contrato observavel e so entao rerodar o gate completo do pacote.

## Spec `023` - NFC-e PR Promotion

| Item                      | Conteudo                                                                  |
| ------------------------- | ------------------------------------------------------------------------- |
| Fase do roadmap impactada | Fase 7                                                                    |
| Tema principal            | `RFL-006`, `RTM-007`, `RTM-011` e `RTM-012`                               |
| Status atual              | `0/25` tasks fechadas                                                     |
| Tipo de pendencia         | Slice runtime menor ainda em planejamento, derivada da trilha maior `015` |

### Tasks ainda abertas

| Task(s)     | O que ainda falta                                                                                     | Impacto no roadmap                                                            |
| ----------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `T001-T006` | Alinhar runbook, fixtures, superfices de teste e metadados compartilhados do cohort `SP + PR`         | Mantem a slice sem baseline tecnica formal para comecar                       |
| `T007-T012` | Implementar a promocao de `PR` no runtime existente e estabilizar a regressao de `SP`                 | Sem isso, `PR` continua apenas como intencao editorial                        |
| `T013-T017` | Preservar `unsupported-state` e `unsupported-scope` para `UFs` fora do cohort e capacidades deferidas | Evita que a promocao pequena de `PR` vire promessa implicita de suporte amplo |
| `T018-T022` | Publicar o cohort final, sua proveniencia e a razao de exclusao das `UFs` vizinhas                    | Sem essa camada, o roadmap volta a depender de contexto oral                  |
| `T023-T025` | Reconciliar notas de open spec/proveniencia e executar validacoes focadas + gate final do pacote      | Segura o fechamento formal da slice e sua entrada no resumo de progresso      |

### Documentos oficiais que puxam essa continuidade

| Documento oficial ou anexo canonico                                     | Por que ainda importa                                                              |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [nfce-operacional-promovivel](./nfce-operacional-promovivel.md)         | Define o corte conservador de promocao runtime para `NFC-e`                        |
| [ufs-ambientes](./ufs-ambientes.md)                                     | Sustenta a razao de promocao de `PR` e a exclusao de `PB`, `GO`, `SC`, `CE` e `MS` |
| [proximas-iteracoes-recomendadas](./proximas-iteracoes-recomendadas.md) | Mantem `NFC-e` como prioridade runtime ainda aberta                                |
| Manual de boas praticas `NFC-e`                                         | Reforca homologaçao, `CSC`, `QR Code` e dependencias auxiliares                    |
| `NT 2023.002 v1.01` e manual de `DANFE NFC-e`/`QR Code`                 | Sustentam o nucleo nacional e as boundaries auxiliares que ainda nao entram        |

### Fechamento minimo recomendado

- Executar a slice focada ate publicar `PR` em `authorizeNFCe` com regressao de `SP`, boundary explicita para `UF` fora do cohort e alinhamento do roadmap/contrato root.

## Sintese executiva

| Spec  | Natureza real da abertura                        | Melhor proximo passo                                                              |
| ----- | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| `005` | backlog formal de proxima slice                  | converter pendencias em planejamento de continuidade fechado                      |
| `015` | slice quase fechada, pendente so de validacao    | executar `T027` e promover para `implementada` se o gate final passar             |
| `021` | continuidade runtime de `NF-e` ainda em execucao | fechar o MVP de recibo/protocolo com facade dedicada e contrato observavel        |
| `023` | promocao runtime menor ainda apenas planejada    | iniciar a implementacao focada de `PR` com boundaries explicitas e regressao `SP` |
