# Politica Executavel para Tabelas Externas

## Objetivo

Traduzir `RTM-010` em uma politica operacional unica para ingestao, revisao, versionamento e promocao de tabelas externas, sem transformar dados auxiliares em dependencia de `runtime` antes da hora.

## Escopo coberto

- `cbs-ibs`: `CBS`, `IBS` e classificacao tributaria.
- `payment-methods`: tabela de meios de pagamento.
- `ncm-utrib`: `NCM/uTrib`.
- `fcp`: `FCP` por `UF`.
- `municipios`: municipios por `UF`.
- `anp`: `ANP` e dados setoriais correlatos.
- `cfop`: `CFOP` e tabelas correlatas.

Este inventario e fechado para a slice atual de `RTM-010`. Qualquer grupo adicional deve nascer como follow-up explicito, e nao como expansao implicita desta politica.

## Regra de classificacao

- Tabelas externas ficam em `tooling` por padrao.
- So podem subir para `runtime` quando um contrato publico do SDK depender diretamente desses dados em tempo de execucao.
- Enquanto servirem apenas para validacao, suporte, sincronizacao ou curadoria, permanecem fora do contrato principal.

## Baseline canonica por grupo

| Group ID          | Grupo coberto                | Fonte oficial primaria                                        | Baseline observada                                                             | Publicacao observada        | Vigencia efetiva | Classificacao atual        | Cadence minima                                            | Nota operacional                                                                |
| ----------------- | ---------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------ | --------------------------- | ---------------- | -------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `cbs-ibs`         | `CBS`, `IBS` e classificacao | Informes tecnicos vigentes e tabelas publicadas em `Diversos` | `IT 2026.002 v1.00` + tabelas vigentes de aliquotas, indice e classificacao    | `12/05/2026` e `15/04/2026` | nao explicitada  | `tooling-default`          | Revisao a cada publicacao ou troca de versao              | Grupo tributario recorrente; permanece fora de runtime sem slice propria.       |
| `payment-methods` | Tabela de meios de pagamento | `IT 2026.001`, `IT 2024.002` e tabela vigente                 | `IT 2026.001 v1.00` como baseline, com `IT 2024.002 v1.11` em trilha historica | `12/05/2026`                | nao explicitada  | `tooling-default`          | Revisao a cada nova `IT` ou tabela republicada            | Mudancas afetam validacao e apoio ao integrador, nao contrato publico imediato. |
| `ncm-utrib`       | `NCM/uTrib`                  | `IT 2024.001` e tabela vigente no portal                      | `IT 2024.001 v2.30` + tabela `NCM/uTrib` vigente                               | `24/11/2025`                | `01/02/2026`     | `tooling-default`          | Revisao por versao vigente e por data de entrada em vigor | Publicacao e vigencia devem permanecer separadas sempre que nao coincidirem.    |
| `fcp`             | `FCP` por `UF`               | Tabela `FCP` vigente                                          | `IT 2023.004 v1.03` + tabela `FCP` vigente                                     | `25/02/2025`                | nao explicitada  | `documentacao` + `tooling` | Revisao a cada atualizacao oficial                        | Mantem delta forte por `UF`; nao promover para runtime sem reconciliacao local. |
| `municipios`      | Municipios por `UF`          | `IT 2025.001` e tabela vigente                                | `IT 2025.001 v1.00` + tabela nacional de municipios                            | `18/02/2025`                | nao explicitada  | `documentacao` + `tooling` | Revisao a cada nova tabela nacional                       | Dados por `UF`; uso runtime continua bloqueado por reconciliacao adicional.     |
| `anp`             | `ANP` e dados setoriais      | `IT 2023.001` e tabela vigente                                | `IT 2023.001 v1.10` + tabela `ANP` vigente                                     | `18/11/2024`                | nao explicitada  | `tooling-default`          | Revisao a cada atualizacao setorial                       | Grupo setorial recorrente, governado como dado auxiliar.                        |
| `cfop`            | `CFOP` e tabelas correlatas  | `IT 2023.002` e correlatas em `Diversos`                      | `IT 2023.002 v1.00` como baseline observada                                    | `11/04/2023`                | nao explicitada  | `tooling-default`          | Revisao a cada correcao oficial                           | Tratar correcoes oficiais como baseline e manter historico quando necessario.   |

## Ciclo operacional recomendado

1. Detectar nova versao ou republicacao no portal oficial.
2. Registrar proveniencia, publicacao observada, vigencia efetiva e status (`vigente`, `coexistente`, `historico` ou `ambigua`) no anexo de documentos vigentes.
3. Classificar se a mudanca afeta `schema`, regra de validacao, dado auxiliar ou apenas watchlist.
4. Atualizar primeiro este artefato canonico de `tooling` e so depois os anexos de apoio correspondentes.
5. Promover para `runtime` apenas se o pacote passar a consumir o dado como parte do contrato publico.

## Regras de versionamento

| Situacao                                           | Regra                                                                                                                 |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Nova versao substitui integralmente a anterior     | A nova versao vira baseline; a anterior permanece apenas em trilha historica                                          |
| Nova tabela sem revogar claramente a anterior      | Manter ambas documentadas ate confirmacao de vigencia efetiva                                                         |
| Tabela com data futura de entrada em vigor         | Registrar publicacao e vigencia como campos distintos                                                                 |
| Delta estadual sem consolidacao nacional           | Manter como documentacao ou `tooling`, nunca como `runtime` automatico                                                |
| Grupo com baseline composta por mais de uma tabela | Tratar a baseline composta como um unico snapshot auditavel, preservando as datas individuais em nota de proveniencia |

## Promocao para runtime

Promover apenas quando todos os pontos abaixo forem verdadeiros:

- O contrato do SDK precisa consultar o dado em tempo de execucao para decidir comportamento publico.
- A origem oficial e estavel e recorrente o suficiente para suportar sincronizacao previsivel.
- Existe fallback claro quando a tabela estiver desatualizada ou indisponivel.
- A promocao adiciona comportamento do pacote, e nao apenas conveniencia documental.

## O que fica fora do runtime por padrao

- Tabelas publicadas apenas para consulta manual do integrador.
- Bases com forte delta por `UF` sem reconciliacao nacional suficiente.
- Dados usados apenas para auditoria, troubleshooting, checklist ou analise de aderencia.

## Suporte operacional e limites desta slice

- `fcp` e `municipios` permanecem como grupos com delta forte por `UF`; a politica pode registrar baseline e cadence, mas nao converte esse delta em promessa de runtime.
- `cbs-ibs`, `payment-methods`, `ncm-utrib`, `anp` e `cfop` permanecem em `tooling` por padrao enquanto o contrato publico do SDK nao depender desses dados em tempo de execucao.
- O anexo [portal-documentos-vigentes](./portal-documentos-vigentes.md) funciona apenas como trilha de proveniencia e datas observadas. Ele nao substitui esta politica como registro canonico.
- Ambiguidades de revogacao, coexistencia ou vigencia devem ser registradas como evidencia operacional, nunca resolvidas por inferencia silenciosa.

## Fechamento minimo da iteracao `5`

- Cada grupo de tabela externa tem fonte primaria e cadence minima explicitadas.
- O roadmap distingue baseline vigente de trilha historica.
- A regra de promocao para `runtime` fica escrita e conservadora.
- `RTM-010` deixa de depender de backlog genérico e passa a ter politica executavel de manutencao.
