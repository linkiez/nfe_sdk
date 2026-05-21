# Proximas Iteracoes Recomendadas

## Objetivo

Converter a leitura consolidada dos `RTM-*`, das specs abertas e do acervo oficial em uma sequencia objetiva de iteracoes, distinguindo o que precisa virar `runtime`, `tooling` ou apenas `documentacao` antes de uma nova promocao de escopo.

## Como ler

- `Classificacao dominante` indica a natureza principal da iteracao: `runtime`, `tooling`, `documentacao` ou combinacoes curtas.
- `Entrada principal` aponta o documento oficial ou anexo que mais justifica a iteracao.
- `Fechamento minimo` define o criterio de saida para a iteracao deixar de depender apenas de backlog editorial.

## Anexo complementar

- [Checklist de fechamento das specs 007 e 010](./checklist-fechamento-007-010.md)
- [Inventario de runtimes publicados e promoviveis](./runtimes-sdk.md)
- [Recorte promovivel de NFC-e](./nfce-operacional-promovivel.md)
- [Recortes funcionais prioritarios](./recortes-funcionais-prioritarios.md)
- [Criterios de promocao entre documentacao, tooling e runtime](./criterios-promocao.md)
- [Politica executavel para tabelas externas](./politica-tabelas-externas.md)
- [Diagnostico de trust chain e downloads auxiliares](./diagnostico-trust-chain.md)

## Sequencia recomendada

| Ordem | Iteracao recomendada                                        | Temas e specs puxados                                 | Classificacao dominante    | Entrada principal                                                                 | Fechamento minimo                                                                                                                                                                                           |
| ----- | ----------------------------------------------------------- | ----------------------------------------------------- | -------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `1`   | Executar a proxima slice de assinatura                      | `RTM-003`, specs `005` e `014`                        | `runtime` + `documentacao` | `NT 2026.001`, `MOC 7.0`, cadeias `www`/`www1`                                    | Tirar a spec `014` do papel com eventos, precondicoes de `NFC-e`, `DV` e `hashCSRT` claramente fechados por boundary                                                                                        |
| `2`   | Delimitar `NFC-e` operacional promovivel                    | `RTM-005`, `RTM-007`, `RTM-011`, `RTM-012`, `RFL-006` | `runtime`                  | [Recorte promovivel de NFC-e](./nfce-operacional-promovivel.md)                   | Consolidar o primeiro cohort `SP + PR`, mantendo `CSC`, `QR Code`, `EPEC` e `offline` fora do runtime mesmo apos o slice `016` de `SVC` observavel em `NF-e`                                                |
| `3`   | Consolidar as `UFs` com sinal estadual mais forte           | `RTM-011` e `RTM-012`                                 | `documentacao` + `runtime` | [ufs-ambientes](./ufs-ambientes.md)                                               | Fechar leitura operacional de `PR`, `MS`, `PB`, `CE`, `SC`, `RJ`, `AC` e `SP` com criterio de promocao claro                                                                                                |
| `4`   | Transformar tabelas externas em politica executavel         | `RTM-010`                                             | `tooling`                  | [Politica executavel para tabelas externas](./politica-tabelas-externas.md)       | Fechar o inventario `cbs-ibs`, `payment-methods`, `ncm-utrib`, `fcp`, `municipios`, `anp` e `cfop` com baseline observada, publicacao/vigencia, trilha historica e regra conservadora de promocao           |
| `5`   | Amarrar trust chain e artefatos auxiliares ao fluxo tecnico | `RTM-018`, parte de `RTM-003` e `RFL-007`             | `tooling` + `documentacao` | [Diagnostico de trust chain e downloads auxiliares](./diagnostico-trust-chain.md) | Declarar como cadeias `www`/`www1`, downloads, assinador e visualizador `DF-e` participam do diagnostico, onboarding e interoperabilidade, mantendo `WSDL`/`SSL` apenas como evidencias de apoio e boundary |
| `6`   | Manter observacao de familias paralelas e emergentes        | `RTM-016` e `RTM-019`                                 | `documentacao`             | `NFGas`, `NFAg`, `NF-e ABI`, tabelas emergentes                                   | Preservar watchlist objetiva com criterio de promocao futura para runtime ou tooling                                                                                                                        |

## Recortes funcionais transversais

- Use [recortes-funcionais-prioritarios](./recortes-funcionais-prioritarios.md) quando a proxima iteracao precisar sair da classificacao ampla e virar uma slice funcional menor, additive e validavel.
- Em especial, as iteracoes `2`, `3`, `4` e `6` ja tem desdobramento direto nesse anexo.

## Corte pratico por natureza

### Iteracoes prioritarias de runtime

- Planejamento da expansao de assinatura da spec `005`.
- Delimitacao do recorte promovivel de `NFC-e`, especialmente o cohort `SP + PR`, `CSC`, `QR Code`, contingencia e variacoes por `UF`, agora com o slice `016` deixando claro que `SVC` entrou primeiro apenas em `NF-e`.

### Iteracoes prioritarias de tooling

- Politica executavel para tabelas externas e para trust chain/artefatos auxiliares.
- Em `RTM-018`, o artefato canonico [diagnostico-trust-chain](./diagnostico-trust-chain.md) e o checklist correspondente fecham o recorte `RFL-007` como `tooling` + `documentacao`, sem promover runtime novo.
- Em `RTM-010`, fechar primeiro a baseline canonica por grupo e manter `fcp` e `municipios` fora de qualquer leitura implicita de runtime enquanto o delta por `UF` permanecer dominante.

### Iteracoes prioritarias de documentacao

- Consolidacao das `UFs` mais fortes e saneamento das `UFs` ainda com captura falha ou leitura insuficiente.
- Observacao continua de familias paralelas e familias emergentes sem promocao prematura.

## Regra de uso

- Toda nova spec ou sub-slice proposta deve apontar primeiro para uma linha desta sequencia ou justificar a criacao de uma nova iteracao recomendada.
- Se uma iteracao for apenas de fechamento formal, ela nao deve reabrir trabalho ja concluido na origem nem abrir backlog tecnico paralelo fora desta trilha.
