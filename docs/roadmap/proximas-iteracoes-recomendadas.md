# Proximas Iteracoes Recomendadas

## Objetivo

Converter a leitura consolidada dos `RTM-*`, das specs abertas e do acervo oficial em uma sequencia objetiva de iteracoes, distinguindo o que precisa virar `runtime`, `tooling` ou apenas `documentacao` antes de uma nova promocao de escopo.

## Como ler

- `Classificacao dominante` indica a natureza principal da iteracao: `runtime`, `tooling`, `documentacao` ou combinacoes curtas.
- `Entrada principal` aponta o documento oficial ou anexo que mais justifica a iteracao.
- `Fechamento minimo` define o criterio de saida para a iteracao deixar de depender apenas de backlog editorial.

## Anexo complementar

- [Checklist de fechamento das specs 007 e 010](./checklist-fechamento-007-010.md)
- [Recorte promovivel de NFC-e](./nfce-operacional-promovivel.md)
- [Recortes funcionais prioritarios](./recortes-funcionais-prioritarios.md)
- [Criterios de promocao entre documentacao, tooling e runtime](./criterios-promocao.md)
- [Politica executavel para tabelas externas](./politica-tabelas-externas.md)

## Sequencia recomendada

| Ordem | Iteracao recomendada                                        | Temas e specs puxados                                 | Classificacao dominante    | Entrada principal                                                                | Fechamento minimo                                                                                                                 |
| ----- | ----------------------------------------------------------- | ----------------------------------------------------- | -------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `1`   | Encerrar pendencias formais de curto prazo                  | `RTM-006`, `RTM-011`, specs `007` e `010`             | `tooling` + `documentacao` | [Checklist de fechamento das specs 007 e 010](./checklist-fechamento-007-010.md) | Rodar o gate final da `007` e fechar o scaffolding residual da `010`                                                              |
| `2`   | Executar a proxima slice de assinatura                      | `RTM-003`, specs `005` e `014`                        | `runtime` + `documentacao` | `NT 2026.001`, `MOC 7.0`, cadeias `www`/`www1`                                   | Tirar a spec `014` do papel com eventos, precondicoes de `NFC-e`, `DV` e `hashCSRT` claramente fechados por boundary              |
| `3`   | Delimitar `NFC-e` operacional promovivel                    | `RTM-005`, `RTM-007`, `RTM-011`, `RTM-012`, `RFL-006` | `runtime`                  | [Recorte promovivel de NFC-e](./nfce-operacional-promovivel.md)                  | Consolidar o primeiro cohort `SP + PR`, manter `CSC`, `QR Code` e contingencia fora do runtime e registrar as UFs ainda excluidas |
| `4`   | Consolidar as `UFs` com sinal estadual mais forte           | `RTM-011` e `RTM-012`                                 | `documentacao` + `runtime` | [ufs-ambientes](./ufs-ambientes.md)                                              | Fechar leitura operacional de `PR`, `MS`, `PB`, `CE`, `SC`, `RJ`, `AC` e `SP` com criterio de promocao claro                      |
| `5`   | Transformar tabelas externas em politica executavel         | `RTM-010`                                             | `tooling`                  | [Politica executavel para tabelas externas](./politica-tabelas-externas.md)      | Definir cadence, proveniencia, versionamento e regra de atualizacao para dados externos                                           |
| `6`   | Amarrar trust chain e artefatos auxiliares ao fluxo tecnico | `RTM-018` e parte de `RTM-003`                        | `tooling` + `documentacao` | Cadeias `www`/`www1`, assinador, visualizador `DF-e`                             | Declarar como esses artefatos participam do diagnostico, onboarding e interoperabilidade sem virarem dependencia de runtime       |
| `7`   | Manter observacao de familias paralelas e emergentes        | `RTM-016` e `RTM-019`                                 | `documentacao`             | `NFGas`, `NFAg`, `NF-e ABI`, tabelas emergentes                                  | Preservar watchlist objetiva com criterio de promocao futura para runtime ou tooling                                              |

## Recortes funcionais transversais

- Use [recortes-funcionais-prioritarios](./recortes-funcionais-prioritarios.md) quando a proxima iteracao precisar sair da classificacao ampla e virar uma slice funcional menor, additive e validavel.
- Em especial, as iteracoes `2`, `3`, `4` e `6` ja tem desdobramento direto nesse anexo.

## Corte pratico por natureza

### Iteracoes prioritarias de runtime

- Planejamento da expansao de assinatura da spec `005`.
- Delimitacao do recorte promovivel de `NFC-e`, especialmente o cohort `SP + PR`, `CSC`, `QR Code`, contingencia e variacoes por `UF`.

### Iteracoes prioritarias de tooling

- Gate final da spec `007` e encerramento residual da spec `010`.
- Politica executavel para tabelas externas e para trust chain/artefatos auxiliares.

### Iteracoes prioritarias de documentacao

- Consolidacao das `UFs` mais fortes e saneamento das `UFs` ainda com captura falha ou leitura insuficiente.
- Observacao continua de familias paralelas e familias emergentes sem promocao prematura.

## Regra de uso

- Toda nova spec ou sub-slice proposta deve apontar primeiro para uma linha desta sequencia ou justificar a criacao de uma nova iteracao recomendada.
- Se uma iteracao for apenas de fechamento formal, ela nao deve abrir backlog tecnico paralelo fora desta trilha.
