# Capacidades do SDK para NFC-e

## Escopo

Resumir o recorte de NFC-e dentro da documentacao do SDK, separando a camada nacional compartilhada do detalhe estadual que continua fora do catalogo principal.

## Papel na hierarquia documental

- Este arquivo detalha as entradas `CAT-NFCE-001` e `CAT-NFCE-002` do [catalogo geral de capacidades](../capacidades-sdk.md).
- O [indice principal](../index.md) organiza a navegacao entre visao de adocao, dossies de dominio, planejamento e evidencias.
- A taxonomia de estado, impacto e compatibilidade continua centralizada no catalogo geral para evitar repeticao entre os dossies.

## Capacidades requeridas

| ID           | Capacidade                                                                  | Estado no catalogo | Evidencia principal       | Fontes                                                | Habilitacao operacional                                           | Lacuna explicita                                                                                 | Impacto e compatibilidade futura                                                           |
| ------------ | --------------------------------------------------------------------------- | ------------------ | ------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| NFCE-CAP-001 | Modelar o fluxo nacional compartilhado de emissao e autorizacao da NFC-e    | partial            | docs/nfce/emissao-nfce.md | SRC-NFCE-001, SRC-NFCE-003                            | Operacao real e credenciamento variam por UF                      | O repositorio ainda nao estabilizou um contrato operacional comum para todas as UFs              | Base para contratos comuns e comportamento default quando houver futura camada operacional |
| NFCE-CAP-002 | Incorporar atualizacoes de leiaute e notas tecnicas que afetem NF-e e NFC-e | partial            | docs/mudancas-recentes.md | SRC-NFCE-002                                          | Nenhuma adicional para leitura documental                         | Nem toda mudanca recente ja foi traduzida em backlog tecnico fechado                             | Exige estrategia de versao e compatibilidade dos tipos gerados                             |
| NFCE-CAP-003 | Diferenciar regras nacionais de complementos estaduais por UF               | partial            | docs/nfce/uf-matrix.md    | SRC-NFCE-001, SRC-NFCE-004, SRC-NFCE-005, SRC-SEC-001 | Portais estaduais, servicos especificos e regras locais por UF    | A maioria das UFs ainda depende de revisao estadual individual explicita                         | Implica arquitetura extensivel por UF e avaliacao cuidadosa de compatibilidade             |
| NFCE-CAP-004 | Tratar disponibilidade, contingencia e rotas alternativas de operacao       | partial            | docs/nfce/emissao-nfce.md | SRC-NFCE-001, SRC-NFCE-005                            | A habilitacao operacional depende do autorizador e da UF          | O mapa de fallback normativo ainda nao esta completo para todas as UFs                           | Requer modelagem de estados operacionais e fallback normativo                              |
| NFCE-CAP-005 | Rastrear cobertura documental por UF com lacunas explicitas                 | partial            | docs/nfce/uf-matrix.md    | SRC-NFCE-001, SRC-SEC-001                             | Revisao estadual individual ainda pendente para a maioria das UFs | A matriz ainda nao oferece fechamento suficiente para promocao do dominio a cobertura confirmada | Sustenta backlog incremental de suporte estadual                                           |

## Recorte operacional atualmente publicado

- O runtime publicado atualmente cobre autorizacao homologada de NFC-e apenas para `SP` como perfil piloto.
- Quando a UF inferida nao pertence ao piloto atual, o SDK retorna `unsupported-state` antes do transporte.
- Quando a aplicacao explicita superficies deferidas por `requestedCapabilities`, o SDK retorna `unsupported-scope` antes do transporte.

## Premissas de leitura

### Compartilhadas

- Navegacao normativa nacional.
- Informes e notas tecnicas recentes publicados no portal nacional.
- Necessidade de rastreabilidade entre requisito funcional e fonte oficial.

### Sensiveis a UF

- Servicos especificos do autorizador estadual.
- Variacoes operacionais divulgadas em portais estaduais.
- Procedimentos adicionais de credenciamento, contingencia ou suporte.

## Lacunas prioritarias

- As 27 UFs ainda nao foram percorridas individualmente em profundidade.
- A camada estadual segue parcialmente documentada nesta rodada, com SP usado apenas como referencia oficial complementar.

## Leituras relacionadas

- [Emissao de NFC-e](./emissao-nfce.md) concentra o fluxo nacional compartilhado observado nas fontes oficiais.
- [Matriz por UF](./uf-matrix.md) preserva o detalhe estadual fora do resumo principal.
- [Mudancas recentes](../mudancas-recentes.md) reune NTs, informes e deltas operacionais que podem deslocar backlog ou compatibilidade.
- [Registro de fontes](../_meta/source-registry.md) centraliza a proveniencia primaria e secundaria usada neste dominio.
