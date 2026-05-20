# Pendencias das Specs Abertas e Documentos Direcionadores

## Objetivo

Explicitar, para as specs ainda abertas, quais tasks permanecem em aberto, qual fase do roadmap elas seguram e quais documentos oficiais sustentam a necessidade tecnica dessa continuidade.

## Regra de leitura

- Este anexo nao reabre backlog paralelo: ele apenas traduz as tasks abertas das specs em execucao para a linguagem do roadmap.
- Quando a task remanescente for apenas de validacao ou formalizacao de proxima slice, isso fica marcado explicitamente.

## Anexo complementar

- [Proximas iteracoes recomendadas](./proximas-iteracoes-recomendadas.md)

## Spec `005` - Add Digital Signing

| Item | Conteudo |
| --- | --- |
| Fase do roadmap impactada | Fase 3 |
| Tema principal | `RTM-003` |
| Status atual | `32/37` tasks fechadas |
| Tipo de pendencia | Planejamento da proxima slice, nao defeito do slice `NFe` ja entregue |

### Tasks ainda abertas

| Task | O que ainda falta | Impacto no roadmap |
| --- | --- | --- |
| `T033` | Definir a proxima slice de assinatura para `evento` XML | Mantem `RTM-003` sem fechamento completo para eventos |
| `T034` | Definir a proxima slice para assinatura de `NFC-e` e boundaries com `QR Code` | Segura a ponte entre Fase 3 e Fase 7 |
| `T035` | Definir o empilhamento entre assinatura, transporte `SOAP` e submissao de documento assinado | Segura a conexao formal entre Fase 3 e Fase 4 |
| `T036` | Definir calculos adiados de chave completa, `DV` e `hashCSRT` | Mantem parte das precondicoes tecnicas fora do fechamento formal da fase |
| `T037` | Criar a proxima feature spec para expansao da assinatura | Segura a governanca da proxima iteracao, nao o slice atual entregue |

### Documentos oficiais que puxam essa continuidade

| Documento oficial | Por que ainda importa |
| --- | --- |
| `MOC 7.0` e Anexo I | Mantem a base de assinatura e montagem do documento que precisa continuar coerente |
| `NT 2026.001 v1.00` (`PAA`) | Empurra a necessidade de amadurecer assinatura e autorizacao como conjunto coerente |
| Cadeias de certificados `www` e `www1` | Sustentam trust chain e precondicoes de conexao segura |
| Manual `SVAN` e manual `SVRS` | Exigem leitura de interoperabilidade segura em ambientes compartilhados |
| Manual `DANFE NFC-e` e `QR Code` | Justificam a task aberta sobre boundaries de assinatura em `NFC-e` |

### Fechamento minimo recomendado

- Fechar `T033` a `T037` como artefato de planejamento de continuidade para que a spec deixe de ficar em aberto por governanca futura.

## Spec `007` - NFe Operational MVP

| Item | Conteudo |
| --- | --- |
| Fase do roadmap impactada | Fase 5 |
| Temas principais | `RTM-006` e parte de `RTM-007` |
| Status atual | `36/37` tasks fechadas |
| Tipo de pendencia | Validacao final da feature |

### Task ainda aberta

| Task | O que ainda falta | Impacto no roadmap |
| --- | --- | --- |
| `T037` | Rodar e registrar o fluxo completo de validacao da feature | Impede tratar a Fase 5 como formalmente fechada pela spec dedicada |

### Documentos oficiais que puxam essa continuidade

| Documento oficial | Por que ainda importa |
| --- | --- |
| `MOC 7.0` | Sustenta o fluxo operacional basico de autorizacao, consulta e manutencao |
| Anexo II do `MOC` | Mantem vivo o backlog de `DANFE` como apoio pos-autorizacao |
| Manual do emissor de `NF-e` | Justifica import/export, recuperacao e acompanhamento operacional |
| Manual de contingencia `NF-e` | Segura a leitura de contingencia como continuidade obrigatoria da fase |
| Consulta de disponibilidade e servicos web do portal nacional | Sustentam diagnostico operacional e catalogo tecnico |

### Fechamento minimo recomendado

- Executar e registrar a validacao final da spec, alinhando o status documental ao fato de que o slice tecnico ja esta praticamente concluido.

## Spec `010` - NFC-e National Core

| Item | Conteudo |
| --- | --- |
| Fase do roadmap impactada | Fase 7 |
| Temas principais | `RTM-011` e parte de `RTM-005` |
| Status atual | `31/32` tasks fechadas |
| Tipo de pendencia | Scaffolding residual de testes/fixtures |

### Task ainda aberta

| Task | O que ainda falta | Impacto no roadmap |
| --- | --- | --- |
| `T002` | Criar scaffolding de testes e fixtures `NFC-e` | Mantem a spec formalmente aberta mesmo com as historias principais fechadas |

### Documentos oficiais que puxam essa continuidade

| Documento oficial | Por que ainda importa |
| --- | --- |
| Manual de boas praticas `NFC-e` | Sustenta a organizacao do slice inicial e a expectativa de solucao sistêmica |
| Manual `DANFE NFC-e` e `QR Code` | Mantem backlog vivo para `QR Code`, consulta do consumidor e boundary visual |
| Manual de contingencia `offline` `NFC-e` | Sustenta a parte ainda adiada da contingencia estadual |
| `NT 2023.002 v1.01` | Justifica produtor rural, eliminacao de denegacao e lote em `NFC-e` |
| `NT 2018.001`, `NT 2018.004`, `NT NFC-e 2014.001`, `NT NFC-e 2014.003` | Mantem os deltas de `CSC`, `QR Code`, `EPEC` e cancelamento por substituicao no horizonte da fase |
| Informe `2025.003` de `GO` | Reforca que `QR Code` continua sensivel a delta por `UF` |

### Fechamento minimo recomendado

- Fechar o scaffolding residual para que a spec deixe de aparecer como aberta apenas por formalidade de setup.

## Sintese executiva

| Spec | Natureza real da abertura | Melhor proximo passo |
| --- | --- | --- |
| `005` | backlog formal de proxima slice | converter pendencias em planejamento de continuidade fechado |
| `007` | validacao final nao executada/registrada | rodar e registrar o gate final |
| `010` | scaffolding residual | concluir setup remanescente e encerrar a spec |