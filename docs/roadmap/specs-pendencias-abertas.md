# Pendencias das Specs Abertas e Documentos Direcionadores

## Objetivo

Explicitar, para as specs ainda abertas, quais tasks permanecem em aberto, qual fase do roadmap elas seguram e quais documentos oficiais sustentam a necessidade tecnica dessa continuidade.

## Regra de leitura

- Este anexo nao reabre backlog paralelo: ele apenas traduz as tasks abertas das specs em execucao para a linguagem do roadmap.
- Quando a task remanescente for apenas de validacao ou formalizacao de proxima slice, isso fica marcado explicitamente.

## Anexo complementar

- [Proximas iteracoes recomendadas](./proximas-iteracoes-recomendadas.md)

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

## Sintese executiva

| Spec  | Natureza real da abertura              | Melhor proximo passo                                         |
| ----- | -------------------------------------- | ------------------------------------------------------------ |
| `005` | backlog formal de proxima slice        | converter pendencias em planejamento de continuidade fechado |
| `015` | promocao operacional ainda em execucao | concluir o cohort `SP + PR` sem promover escopo deferido     |
| `016` | slice funcional em andamento           | seguir fechando boundaries documentadas e validacoes         |
