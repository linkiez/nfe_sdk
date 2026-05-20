# Implementacao e Cobertura por Spec

## Objetivo

Registrar quais specs do repositorio ja foram implementadas, quais seguem abertas e como elas se encaixam nas fases do roadmap.

## Criterio de leitura

- `Implementada`: `tasks.md` sem itens abertos.
- `Em execucao`: existe `tasks.md`, mas ainda ha itens nao concluídos.
- `Planejada`: spec e `tasks.md` existem, mas a execucao ainda nao comecou.
- `Papel no roadmap`: fase principal e temas do `docs/roadmap/ROADMAP.md` mais diretamente cobertos.

## Anexo complementar

- [Pendencias das specs abertas e documentos direcionadores](./specs-pendencias-abertas.md)

## Status por spec

| Spec  | Nome resumido           | Status         | Tasks fechadas | Tasks abertas | Papel no roadmap                                                  |
| ----- | ----------------------- | -------------- | -------------- | ------------- | ----------------------------------------------------------------- |
| `001` | Research Sefaz Docs     | `implementada` | `28`           | `0`           | Fase 1, `RTM-014`, `RTM-015`, base dos dossies e da matriz por UF |
| `002` | Project Features        | `implementada` | `28`           | `0`           | Fase 1, catalogacao de capacidades e linguagem de cobertura       |
| `003` | Public Package Contract | `implementada` | `30`           | `0`           | Fase 1, `RTM-001`                                                 |
| `004` | Iniciar SDK             | `implementada` | `30`           | `0`           | Fase 2, `RTM-002`                                                 |
| `005` | Add Digital Signing     | `em execucao`  | `33`           | `4`           | Fase 3, `RTM-003`                                                 |
| `006` | Add SOAP Transport      | `implementada` | `33`           | `0`           | Fase 4, `RTM-004`                                                 |
| `007` | NFe Operational MVP     | `em execucao`  | `36`           | `1`           | Fase 5, `RTM-006` e parte de `RTM-007`                            |
| `008` | Recipient DFe MVP       | `implementada` | `37`           | `0`           | Fase 6, `RTM-008`                                                 |
| `009` | Generic Event MVP       | `implementada` | `33`           | `0`           | Fase 6, `RTM-008`                                                 |
| `010` | NFC-e National Core     | `em execucao`  | `31`           | `1`           | Fase 7, `RTM-011` e parte de `RTM-005`                            |
| `011` | Roadmap Gap Audit       | `implementada` | `29`           | `0`           | Fase 1, fechamento analitico de gaps e governanca do backlog      |
| `012` | Implement Audit Gaps    | `implementada` | `59`           | `0`           | Fechamento transversal das Fases 2 a 7                            |
| `013` | Release Hardening       | `implementada` | `27`           | `0`           | Fase 8, `RTM-013`, `RTM-014`, `RTM-018`                           |
| `014` | Expand Signing Coverage | `implementada` | `27`           | `0`           | Fase 3, `RTM-003`, com ponte implementada para Fase 4 e Fase 7    |
| `015` | NFC-e UF Promotion      | `em execucao`  | `0`            | `27`          | Fase 7, `RFL-006`, `RTM-007`, `RTM-011` e `RTM-012`               |
| `016` | Contingency Boundaries  | `em execucao`  | `14`           | `12`          | Fase 5/Fase 7, `RFL-005`, `RTM-005` e `RTM-012`                   |

## Leitura por fase do roadmap

| Fase   | Specs com implementacao fechada | Specs ainda abertas ligadas a fase | Observacao                                                                                                                                                                                                      |
| ------ | ------------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fase 1 | `001`, `002`, `003`, `011`      | _Nenhuma_                          | Base documental, contrato publico e governanca ja estao fechados                                                                                                                                                |
| Fase 2 | `004`, `012`                    | _Nenhuma_                          | Camada canonica e fechamento das gaps principais de modelagem                                                                                                                                                   |
| Fase 3 | `012`, `014`                    | `005`                              | A base de assinatura ja cobre `NFe` e `evento` XML no root import, com a extensao preparatoria de `NFC-e` formalmente implementada                                                                              |
| Fase 4 | `006`, `012`                    | _Nenhuma_                          | Transporte `SOAP` e catalogo de servicos com slice implementado                                                                                                                                                 |
| Fase 5 | `012`                           | `007`                              | MVP operacional de `NFe` quase fechado, com uma validacao/task remanescente                                                                                                                                     |
| Fase 6 | `008`, `009`, `012`             | _Nenhuma_                          | Eventos e manifestacao com slices implementados                                                                                                                                                                 |
| Fase 7 | `012`, `014`                    | `010`, `015`                       | `NFC-e` segue com fechamento remanescente na spec dedicada, enquanto a `014` ja estabilizou a preparacao de `chNFe`, `cDV` e `hashCSRT` e a `015` promove o primeiro cohort `SP + PR` com boundaries explicitas |
| Fase 8 | `013`                           | _Nenhuma_                          | Release hardening e artefatos de adocao fechados                                                                                                                                                                |

## Pontos de atencao atuais

- `005` continua aberta por `4` tasks de continuidade, mas a governanca da proxima slice deixou de ser abstrata com a abertura da `014`.
- `014` esta fechada com assinatura de `evento`, preparacao de precondicoes de `NFC-e` e boundary documental explicitada entre assinatura, `SOAP`, trust chain, `QR Code` e rollout multi-UF.
- `015` concretiza o corte `RFL-006` com a promocao controlada de `PR` alem de `SP`, amarrando a trilha editorial a `RTM-007`, `RTM-011` e `RTM-012` sem promover `CSC`, `QR Code` ou contingencia para runtime.
- `016` inaugura o recorte `RFL-005` com `authorizeNFe` como primeira facade a devolver `contingency-boundary` observavel para `SVC-AN` e `SVC-RS`, mantendo `EPEC` e `offline` como boundaries explicitamente deferidas.
- `007` e `010` estao tecnicamente muito avancadas, mas ainda nao devem ser tratadas como specs fechadas sem resolver as tasks remanescentes.
- `012` fecha boa parte das gaps transversais, mas nao substitui a necessidade de concluir formalmente as specs dedicadas ainda abertas.
