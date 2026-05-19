# Matriz Tematica do Roadmap

## Objetivo

Transformar o mapa tematico do [roadmap de implantacao](./ROADMAP.md) em backlog navegavel, com um destino explicito por tema e uma fase-alvo inicial de implantacao.

## Como usar

- Ler esta matriz em conjunto com o [roadmap de implantacao](./ROADMAP.md), nao como substituto dele.
- Tratar `fase-alvo inicial` como o primeiro ponto em que o tema precisa produzir entrega concreta.
- Tratar `destino primario` como a principal forma de absorcao do tema no repositorio: `runtime`, `tooling`, `exemplo`, `documentacao` ou `trilha de observacao`.
- Quando um tema atravessar varias fases, a coluna de fase indica a entrada obrigatoria mais cedo, e nao o fim da trilha.

## Matriz

| ID      | Tema consolidado                                                                                                                | Escopo resumido                                                                                                                                            | Fase-alvo inicial | Destino primario     | Desfecho minimo esperado                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| RTM-001 | Contrato publico, manifesto gerado, build ESM, distribuicao e rastreabilidade documental                                        | Estabilizar o que o pacote publica, como distribui e como prova a origem normativa do que publica                                                          | Fase 1            | runtime              | Contrato root explicito, manifesto auditavel, build repetivel e rastreabilidade basica fechada                      |
| RTM-002 | Modelagem canonica, serializacao XML, validacao estrutural e maquina de estados do documento                                    | Criar camada manual previsivel acima dos artefatos gerados e explicitar o ciclo local do documento                                                         | Fase 2            | runtime              | Facades e primitives para montar, validar, serializar e representar estados operacionais minimos                    |
| RTM-003 | Assinatura digital, certificados, cadeia de confianca, `SSL`, `WSDL`, autenticacao mutua e precondicoes tecnicas de comunicacao | Cobrir a validade tecnica do XML assinado e os requisitos concretos de interoperabilidade com autorizadores                                                | Fase 3            | runtime              | XML assinado e validavel com precondicoes tecnicas documentadas e exercitadas em testes focados                     |
| RTM-004 | Transporte `SOAP`, autorizadores nacionais e virtuais, disponibilidade, consulta de status, recibo, protocolo e polling         | Entregar a infraestrutura de comunicacao e o acompanhamento do processamento assincrono                                                                    | Fase 4            | runtime              | Cliente de transporte com catalogo de servicos, consultas de acompanhamento e diagnostico operacional compreensivel |
| RTM-005 | Contingencia de `NF-e`, contingencia `offline` de `NFC-e`, `SVC`, `EPEC` e mecanismos equivalentes por fluxo                    | Tratar fallback operacional como trilha arquitetural propria e nao como excecao marginal                                                                   | Fase 4            | runtime              | Boundary de contingencia definida, fallback modelado e fronteira clara entre regra nacional e complemento estadual  |
| RTM-006 | Pos-autorizacao e reconciliacao                                                                                                 | Cobrir cancelamento, carta de correcao, inutilizacao, distribuicao, consultas auxiliares e estados de rejeicao, denegacao e pendencia                      | Fase 5            | runtime              | API capaz de acompanhar o ciclo pos-envio e reconciliar documentos e retornos relevantes                            |
| RTM-007 | Representacoes auxiliares como `DANFE`, `DANFE NFC-e`, `QR Code`, `CSC`, etiqueta simplificada e exportacao previsivel de XMLs  | Delimitar o que o SDK entrega como suporte de representacao e o que fica em utilitarios ou exemplos                                                        | Fase 5            | exemplo              | Superficie complementar delimitada, com exportacao de XML e backlog separado para representacoes auxiliares         |
| RTM-008 | Eventos de maior impacto operacional                                                                                            | Cobrir Manifestacao do Destinatario, comprovante de entrega, ator interessado, conciliacao financeira, insucesso na entrega e eventos genericos correlatos | Fase 6            | runtime              | Slice inicial de eventos com crescimento additive e rastreabilidade normativa por tipo de evento                    |
| RTM-009 | Governanca de compatibilidade                                                                                                   | Incorporar `NTs`, informes tecnicos, series recorrentes de mudancas e versionamento de contratos e schemas                                                 | Fase 1            | documentacao         | Processo explicito para classificar mudancas por impacto em schema, validacao, evento, consulta ou contrato         |
| RTM-010 | Tabelas auxiliares e parametros externos                                                                                        | Controlar `NCM`, meios de pagamento, `FCP`, municipios, `ANP`, `CFOP`, classificacao tributaria, `CBS`, `IBS` e codificacoes similares                     | Fase 8            | tooling              | Politica de atualizacao propria para dados auxiliares, separada do nucleo de runtime                                |
| RTM-011 | Complementos estaduais                                                                                                          | Tratar credenciamento, politicas de consulta, indisponibilidade, `QR Code` por UF, `CSC`, web services, contingencia e regras locais                       | Fase 7            | documentacao         | Matriz por UF ligada a comportamento real do SDK e criterio claro para promover novas UFs                           |
| RTM-012 | Tooling e operacao assistida para integradores                                                                                  | Cobrir fixtures, importacao e exportacao de XML, snapshots, diagnostico, exemplos e runbooks de continuidade                                               | Fase 8            | tooling              | Kit de suporte a homologacao e regressao sem inflar a superficie runtime do pacote                                  |
| RTM-013 | Familias documentais paralelas como `NFGas`, `NFAg` e `NF-e ABI`                                                                | Usar familias proximas do portal nacional para validar generalidade arquitetural e orientar expansao futura                                                | Fase 2            | trilha de observacao | Watchlist arquitetural e editorial ativa, sem promessa operacional antecipada                                       |

## Leitura por tipo de destino

| Destino primario       | Leitura pratica                                                                                                      |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `runtime`              | Tema precisa produzir API, comportamento, tipos ou contratos executaveis no pacote                                   |
| `tooling`              | Tema deve virar suporte interno, automacao, fixture, validacao ou rotina de manutencao                               |
| `exemplo`              | Tema deve ser absorvido primeiro por exemplos, utilitarios ou delimitacao documental antes de virar API estável      |
| `documentacao`         | Tema precisa primeiro de governanca, matriz de rastreabilidade ou dossie de evidencia para orientar backlog e semver |
| `trilha de observacao` | Tema permanece acompanhado para evitar bloqueio arquitetural futuro, sem prometer implementacao imediata             |

## Leitura por ordem de implantacao

1. Fase 1: `RTM-001` e `RTM-009` fecham contrato e governanca antes de ampliar a superficie funcional.
2. Fase 2: `RTM-002` e `RTM-013` consolidam a camada manual e testam sua generalidade arquitetural.
3. Fase 3: `RTM-003` fecha assinatura e interoperabilidade tecnica obrigatoria.
4. Fase 4: `RTM-004` e `RTM-005` entregam transporte e contingencia como infraestrutura operacional.
5. Fase 5: `RTM-006` e `RTM-007` fecham o ciclo operacional principal de `NFe` e suas superficies complementares.
6. Fase 6: `RTM-008` amplia o dominio para eventos e distribuicao.
7. Fase 7: `RTM-011` promove a trilha estadual de `NFC-e` de forma controlada.
8. Fase 8: `RTM-010` e `RTM-012` endurecem manutencao, dados auxiliares e suporte ao integrador.

## Ligacoes relacionadas

- [Roadmap de implantacao do SDK](./ROADMAP.md)
- [Catalogo geral de capacidades do SDK](./capacidades-sdk.md)
- [Cobertura oficial de notas fiscais](./notas-fiscais/index.md)
- [Mudancas recentes](./mudancas-recentes.md)
