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
- A Feature `030-mdfe-source-schema-baseline` concluiu `15/15` tasks de pesquisa documental. A Feature `031` permanece bloqueada; specs `032`-`040` decompoem as proximas fatias, sem promover schemas ou runtime.

## Spec `005` - Add Digital Signing

| Item                      | Conteudo                   |
| ------------------------- | -------------------------- |
| Fase do roadmap impactada | Fase 3                     |
| Tema principal            | `RTM-003`                  |
| Status atual              | `37/37` tasks fechadas     |
| Tipo de pendencia         | Nenhuma; spec implementada |

As tasks de assinatura estao fechadas. A continuidade de eventos e precondicoes esta rastreada nas specs `014` e `019`, sem pendencia nesta spec.

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

| Item                      | Conteudo                                    |
| ------------------------- | ------------------------------------------- |
| Fase do roadmap impactada | Fase 7                                      |
| Tema principal            | `RFL-006`, `RTM-007`, `RTM-011` e `RTM-012` |
| Status atual              | `25/25` tasks fechadas                      |
| Tipo de pendencia         | Nenhuma; slice implementada                 |

O cohort `SP + PR` esta implementado com boundaries para UFs e capacidades fora do recorte; sua validacao ampla remanescente pertence a spec `015`.

## Trilha MDF-e SP - Features `030`-`040`

- `030` concluiu `15/15` tasks de curadoria, inspecao de arquivos e matriz de escopo. A fonte canonica e [research.md](../../specs/030-mdfe-source-schema-baseline/research.md); nenhum XSD ou runtime foi adicionado.
- `031` e a spec guarda-chuva de aceite ponta a ponta e permanece bloqueada pelos gates de identidade/aplicabilidade do pacote, elegibilidade e permissoes do cohort paulista e rollout por ambiente.
- Specs `032`-`039` detalham resolucao da baseline, codegen, contrato do documento, autorizacao homologada, consultas, eventos, distribuicao e promocao individual para producao, nessa ordem de dependencia.
- `040` pesquisa somente se existe contingencia MDF-e aplicavel a SP; sem evidencia primaria e spec de implementacao separada, nao existe runtime de contingencia.
- O proximo passo e executar `032` para resolver os gates; nao selecionar os arquivos de schema conflitantes nem contar qualquer operacao MDF-e como cobertura implementada.

## Sintese executiva

| Spec  | Natureza real da abertura                         | Melhor proximo passo                                                       |
| ----- | ------------------------------------------------- | -------------------------------------------------------------------------- |
| `015` | slice quase fechada, pendente so de validacao     | executar `T027` e promover para `implementada` se o gate final passar      |
| `021` | continuidade runtime de `NF-e` ainda em execucao  | fechar o MVP de recibo/protocolo com facade dedicada e contrato observavel |
| `031` | runtime MDF-e SP bloqueado por gates de evidencia | executar `032` e liberar as dependencias somente com fontes verificadas    |
