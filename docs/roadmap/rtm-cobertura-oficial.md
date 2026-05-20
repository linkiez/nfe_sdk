# Matriz RTM x Cobertura Oficial x Implementacao

## Objetivo

Cruzar os temas consolidados do roadmap (`RTM-*`) com os documentos oficiais mais relevantes e com o estado atual de implementacao no repositorio, para que cada frente tenha dono documental e dono tecnico visiveis.

## Leitura da matriz

- `Cobertura oficial principal` resume os documentos ou superficies que mais sustentam o tema.
- `Implementacao atual` usa a leitura de `specs` e dos slices ja publicados.
- `Principal lacuna aberta` indica o proximo fechamento minimo para o tema deixar de depender apenas de backlog documental.

## Anexo complementar

- [Proximas iteracoes recomendadas](./proximas-iteracoes-recomendadas.md)
- [Criterios de promocao entre documentacao, tooling e runtime](./criterios-promocao.md)
- [Politica executavel para tabelas externas](./politica-tabelas-externas.md)

## Matriz

| Tema | Cobertura oficial principal | Implementacao atual | Principal lacuna aberta |
| --- | --- | --- | --- |
| `RTM-001` Contrato publico e distribuicao | `README`, contrato publico, manifestos e base editorial do acervo | Fechado por `003` e reforcado por `013` | Nenhuma lacuna estrutural principal |
| `RTM-002` Modelagem, XML e maquina de estados | `MOC 7.0`, Anexo I, `PL 010c`, `NT 2026.004`, `NT 2022.002` | Fechado por `004` e ampliado por `012` | Continuar absorvendo deltas de novas `NTs` sem quebrar a camada canonica |
| `RTM-003` Assinatura, certificados e trust chain | `NT 2026.001`, cadeias `www`/`www1`, manuais `SVAN` e `SVRS` | Slice inicial entregue em `005`, ainda aberta formalmente | Fechar planejamento da proxima slice para eventos, `NFC-e`, `DV` e `hashCSRT` |
| `RTM-004` Transporte, `SOAP`, catalogo de servicos e polling | Relacao de servicos web, disponibilidade, `SVC-AN`, historico de contingencia | Fechado por `006` e ampliado por `007`/`012` | Continuar refinando diagnostico por ambiente e autorizador |
| `RTM-005` Contingencia `NF-e`/`NFC-e`, `SVC`, `EPEC` e equivalentes | Anexos III e IV do `MOC`, manual de contingencia `NF-e`, manual `offline NFC-e`, `AgendamentoSVC`, `EPEC` pendente | Parcial por `006`, `007`, `010` e `012` | Fechar `offline NFC-e`, `CSC`, `QR Code` e deltas multi-UF |
| `RTM-006` Pos-autorizacao e reconciliacao | Consulta de inutilizacao, `GTIN`, consulta auxiliar, `MOC`, manual do emissor | Forte em `007` e `012`; `007` ainda aberta por validacao final | Rodar e registrar o gate final da spec `007` e expandir consultas auxiliares |
| `RTM-007` `DANFE`, `DANFE NFC-e`, `QR Code`, `CSC` e exportacao de XML | Anexo II do `MOC`, manual `DANFE NFC-e`, manual do emissor, docs estaduais de `PR`, `PB`, `GO` | Principalmente documental, com suporte indireto de exemplos e runbooks | Delimitar o que vira API, exemplo ou tooling em futuras slices |
| `RTM-008` Eventos, distribuicao e manifestacao | `NT 2020.001`, `NT 2014.002`, comprovante de entrega, ator interessado, `ECONf`, insucesso, schemas de eventos | Fechado por `008`, `009` e `012` | Expandir eventos adjacentes sem perder boundary additive |
| `RTM-009` Governanca de compatibilidade para `NTs` e informes | Notas tecnicas vigentes, informes tecnicos, historico do portal | Fechado como governanca por `001`, `011`, `012` e anexos de roadmap | Manter classificacao recorrente sem depender de memoria informal |
| `RTM-010` Tabelas auxiliares e parametros externos | Informes tecnicos, `Diversos`, `NCM`, `ANP`, municipios, `FCP`, meios de pagamento, `CBS/IBS` | Principalmente documental; `013` reforca release e validacao | Criar politica de atualizacao executavel e cadence propria |
| `RTM-011` Complementos estaduais por `UF` | Portais estaduais, `cBenef`, `QR Code` por `UF`, dossie estadual e matriz `NFC-e` | Parcial: `010` e `012` avancam; anexos estaduais consolidam evidencia | Fechar as `UFs` sem host ou com falha e promover estados com sinal mais forte |
| `RTM-012` Ambientes e superfices operacionais | `SVAN`, `SVRS`, area restrita, consulta publica, consulta autenticada, credenciamento | Documentado e parcialmente refletido em transporte e `NFC-e` | Continuar separando `homologacao`, `producao` e acesso autenticado por `UF` |
| `RTM-013` Tooling e operacao assistida ao integrador | Manual do emissor, boas praticas `NFC-e`, exemplos e runbooks | Fechado fortemente por `013` | Continuar ampliando exemplos e runbooks conforme novas slices |
| `RTM-014` Curadoria do acervo oficial e falhas de conversao | Indices do acervo e manifestos de conversao | Fechado como governanca por `001`, `011` e `013` | Resolver `AP`, `CE`, `RJ` e `SE` sem deixar zonas cegas |
| `RTM-015` Watchlist de mudancas recentes | `NT 2024.003`, `NT 2026.004`, `NT 2025.002`, avisos operacionais | Fechado como processo documental | Manter absorcao rapida dos deltas com impacto tecnico |
| `RTM-016` Familias paralelas `NFGas`, `NFAg`, `NFF` | Manuais, schemas e `NTs` de familias paralelas | Observado documentalmente; sem slice runtime dedicado | Seguir como teste de extensibilidade e priorizacao futura |
| `RTM-017` Descoberta publica, FAQ, estatisticas e superfices autenticadas | `principal.aspx`, FAQ, estatisticas, area restrita | Documentado em anexos e indices | Seguir classificando boundaries entre publico e autenticado |
| `RTM-018` Downloads, cadeias e artefatos auxiliares | Visualizador `DF-e`, assinador, cadeias `www`/`www1` | Documentado e parcialmente absorvido por `013` | Ligar melhor trust chain e interoperabilidade ao roadmap tecnico |
| `RTM-019` Tabelas externas e familias emergentes do portal | `NF-e ABI`, tabelas `Diversos`, `NCM/uTrib`, familias em minuta | Observacao documental ativa | Definir criterio objetivo de promocao para tooling ou runtime |

## Leitura pratica

- Os temas mais maduros tecnicamente hoje sao `RTM-001`, `RTM-002`, `RTM-004`, `RTM-008`, `RTM-013`, `RTM-014` e `RTM-015`.
- Os temas com maior delta entre cobertura oficial e fechamento tecnico atual continuam sendo `RTM-003`, `RTM-005`, `RTM-007`, `RTM-010`, `RTM-011` e `RTM-012`.
- Essa matriz deve ser lida junto de [specs-pendencias-abertas](./specs-pendencias-abertas.md) quando o objetivo for decidir a proxima iteracao de implementacao.