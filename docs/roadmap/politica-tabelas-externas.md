# Politica Executavel para Tabelas Externas

## Objetivo

Traduzir `RTM-010` em uma politica operacional unica para ingestao, revisao, versionamento e promocao de tabelas externas, sem transformar dados auxiliares em dependencia de `runtime` antes da hora.

## Escopo coberto

- `CBS`, `IBS` e classificacao tributaria.
- Tabela de meios de pagamento.
- `NCM/uTrib`, `FCP`, municipios, `ANP`, `CFOP` e demais tabelas auxiliares recorrentes.
- Dados externos por `UF` quando forem normativos ou parametrizaveis, mas nao comportamento operacional direto.

## Regra de classificacao

- Tabelas externas ficam em `tooling` por padrao.
- So podem subir para `runtime` quando um contrato publico do SDK depender diretamente desses dados em tempo de execucao.
- Enquanto servirem apenas para validacao, suporte, sincronizacao ou curadoria, permanecem fora do contrato principal.

## Fontes prioritarias

| Grupo | Fonte oficial primaria | Cadence minima |
| --- | --- | --- |
| `CBS` e `IBS` | Informes tecnicos vigentes e tabelas publicadas em `Diversos` | Revisao a cada publicacao ou troca de versao |
| Meios de pagamento | `IT 2026.001`, `IT 2024.002` e tabela vigente | Revisao a cada nova `IT` ou tabela republicada |
| `NCM/uTrib` | `IT 2024.001` e tabela vigente no portal | Revisao por versao vigente e por data de entrada em vigor |
| `FCP` por `UF` | Tabela `FCP` vigente | Revisao a cada atualizacao oficial |
| Municipios por `UF` | `IT 2025.001` e tabela vigente | Revisao a cada nova tabela nacional |
| `ANP` e dados setoriais | `IT 2023.001` e tabela vigente | Revisao a cada atualizacao setorial |
| `CFOP` e tabelas correlatas | `IT 2023.002` e correlatas em `Diversos` | Revisao a cada correcao oficial |

## Ciclo operacional recomendado

1. Detectar nova versao ou republicacao no portal oficial.
2. Registrar proveniencia e data vigente no anexo de documentos vigentes.
3. Classificar se a mudanca afeta `schema`, regra de validacao, dado auxiliar ou apenas watchlist.
4. Atualizar o artefato de `tooling` ou a documentacao de ingestao correspondente.
5. Promover para `runtime` apenas se o pacote passar a consumir o dado como parte do contrato publico.

## Regras de versionamento

| Situacao | Regra |
| --- | --- |
| Nova versao substitui integralmente a anterior | A nova versao vira baseline; a anterior permanece apenas em trilha historica |
| Nova tabela sem revogar claramente a anterior | Manter ambas documentadas ate confirmacao de vigencia efetiva |
| Tabela com data futura de entrada em vigor | Registrar publicacao e vigencia como campos distintos |
| Delta estadual sem consolidacao nacional | Manter como documentacao ou `tooling`, nunca como `runtime` automatico |

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

## Fechamento minimo da iteracao `5`

- Cada grupo de tabela externa tem fonte primaria e cadence minima explicitadas.
- O roadmap distingue baseline vigente de trilha historica.
- A regra de promocao para `runtime` fica escrita e conservadora.
- `RTM-010` deixa de depender de backlog genérico e passa a ter politica executavel de manutencao.