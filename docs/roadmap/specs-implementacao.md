# Implementacao e Cobertura por Spec

## Objetivo

Registrar quais specs do repositorio ja foram implementadas, quais seguem abertas e como elas se encaixam nas fases do roadmap.

## Criterio de leitura

- `Implementada`: `tasks.md` sem itens abertos.
- `Em execucao`: existe `tasks.md`, mas ainda ha itens nao concluídos.
- `Papel no roadmap`: fase principal e temas do `ROADMAP.md` mais diretamente cobertos.

## Anexo complementar

- [Pendencias das specs abertas e documentos direcionadores](./specs-pendencias-abertas.md)

## Status por spec

| Spec | Nome resumido | Status | Tasks fechadas | Tasks abertas | Papel no roadmap |
| --- | --- | --- | --- | --- | --- |
| `001` | Research Sefaz Docs | `implementada` | `28` | `0` | Fase 1, `RTM-014`, `RTM-015`, base dos dossies e da matriz por UF |
| `002` | Project Features | `implementada` | `28` | `0` | Fase 1, catalogacao de capacidades e linguagem de cobertura |
| `003` | Public Package Contract | `implementada` | `30` | `0` | Fase 1, `RTM-001` |
| `004` | Iniciar SDK | `implementada` | `30` | `0` | Fase 2, `RTM-002` |
| `005` | Add Digital Signing | `em execucao` | `32` | `5` | Fase 3, `RTM-003` |
| `006` | Add SOAP Transport | `implementada` | `33` | `0` | Fase 4, `RTM-004` |
| `007` | NFe Operational MVP | `em execucao` | `36` | `1` | Fase 5, `RTM-006` e parte de `RTM-007` |
| `008` | Recipient DFe MVP | `implementada` | `37` | `0` | Fase 6, `RTM-008` |
| `009` | Generic Event MVP | `implementada` | `33` | `0` | Fase 6, `RTM-008` |
| `010` | NFC-e National Core | `em execucao` | `31` | `1` | Fase 7, `RTM-011` e parte de `RTM-005` |
| `011` | Roadmap Gap Audit | `implementada` | `29` | `0` | Fase 1, fechamento analitico de gaps e governanca do backlog |
| `012` | Implement Audit Gaps | `implementada` | `59` | `0` | Fechamento transversal das Fases 2 a 7 |
| `013` | Release Hardening | `implementada` | `27` | `0` | Fase 8, `RTM-013`, `RTM-014`, `RTM-018` |

## Leitura por fase do roadmap

| Fase | Specs com implementacao fechada | Specs ainda abertas ligadas a fase | Observacao |
| --- | --- | --- | --- |
| Fase 1 | `001`, `002`, `003`, `011` | _Nenhuma_ | Base documental, contrato publico e governanca ja estao fechados |
| Fase 2 | `004`, `012` | _Nenhuma_ | Camada canonica e fechamento das gaps principais de modelagem |
| Fase 3 | `012` | `005` | Assinatura avancou, mas ainda nao esta formalmente `100%` fechada pela spec dedicada |
| Fase 4 | `006`, `012` | _Nenhuma_ | Transporte `SOAP` e catalogo de servicos com slice implementado |
| Fase 5 | `012` | `007` | MVP operacional de `NFe` quase fechado, com uma validacao/task remanescente |
| Fase 6 | `008`, `009`, `012` | _Nenhuma_ | Eventos e manifestacao com slices implementados |
| Fase 7 | `012` | `010` | Nucleo nacional de `NFC-e` avancado, mas ainda com fechamento remanescente |
| Fase 8 | `013` | _Nenhuma_ | Release hardening e artefatos de adocao fechados |

## Pontos de atencao atuais

- `005` continua sendo o principal marcador de risco para declarar a Fase 3 totalmente estabilizada pela spec dedicada.
- `007` e `010` estao tecnicamente muito avancadas, mas ainda nao devem ser tratadas como specs fechadas sem resolver as tasks remanescentes.
- `012` fecha boa parte das gaps transversais, mas nao substitui a necessidade de concluir formalmente as specs dedicadas ainda abertas.