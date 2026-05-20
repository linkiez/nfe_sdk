# Topicos Oficiais e Destino no Roadmap

## Objetivo

Detalhar o recorte `100%` do acervo oficial sem inflar `docs/ROADMAP.md`, mantendo neste anexo a decomposicao dos topicos observados no Portal Nacional da `NF-e` e sua destinacao no roadmap canonico.

## Leitura deste anexo

- `Cobertura oficial observada` resume o que aparece nas paginas oficiais convertidas.
- `Destino no roadmap` aponta o tema consolidado do `ROADMAP.md` responsavel pelo assunto.
- `Fase-alvo inicial` indica onde a primeira classificacao ou execucao deve acontecer.
- `Resultado minimo` define o fechamento esperado para considerar o topico coberto pelo plano.

## Anexo complementar

- [Inventario do portal nacional por superficie e documento](./portal-nacional-inventario.md)
- [Matriz RTM x cobertura oficial x implementacao](./rtm-cobertura-oficial.md)

## Camada institucional e descoberta publica do portal

| Topico oficial | Cobertura oficial observada | Destino no roadmap | Fase-alvo inicial | Resultado minimo |
| --- | --- | --- | --- | --- |
| Navegacao institucional do portal | Menus `Conheca`, `Servicos`, `Legislacao`, `Documentos`, `Downloads`, `Area Restrita` e `Documentos e outros` | `RTM-017` | Fase 1 | Fronteira clara entre descoberta publica, backlog tecnico e superficies autenticadas |
| FAQ | Pagina de `Perguntas Frequentes` exposta no portal nacional | `RTM-017` | Fase 1 | Classificar duvidas recorrentes como apoio documental e nao como contrato runtime implicito |
| Estatisticas | Contadores de `NF-e` autorizadas e numero de emissores | `RTM-017` | Fase 1 | Tratar estatisticas como telemetria publica e contexto de adocao, nao como dependencia funcional |
| Central de atendimento | Suporte institucional do `SERPRO` | `RTM-017` | Fase 1 | Registrar como dependencia externa de suporte ao integrador |
| Portais estaduais e secretarias | Lista publica das `27` UFs | `RTM-011` | Fase 7 | Nenhuma UF fora do inventario de cobertura editorial |
| Area restrita do Fisco | Acesso autenticado via `GovBR` ou superficie equivalente | `RTM-017` | Fase 3 | Declarar como boundary externa e separar do escopo publico do SDK |

## Servicos nacionais publicados

| Topico oficial | Cobertura oficial observada | Destino no roadmap | Fase-alvo inicial | Resultado minimo |
| --- | --- | --- | --- | --- |
| Consulta resumida de `NF-e` | Consulta por chave com superficie publica | `RTM-004` | Fase 4 | Boundary clara para consulta publica por chave e seus limites de uso |
| Consulta de inutilizacao | Consulta especifica do status de inutilizacao | `RTM-006` | Fase 5 | Backlog localizado para reconciliacao e consulta auxiliar |
| Consulta de duplicidade AN | Superficie autenticada vinculada ao ambiente nacional | `RTM-017` | Fase 3 | Explicitar dependencia de autenticacao e nao prometer execucao publica |
| Consulta de disponibilidade | Indicador publico de disponibilidade operacional | `RTM-004` | Fase 4 | Alimentar backlog de resiliencia e diagnostico operacional |
| Manifestacao do destinatario | Entrada nacional dedicada ao fluxo do destinatario | `RTM-008` | Fase 6 | Slice inicial e backlog de expansao documental/operacional separados |
| Relacao de servicos web | Catalogo nacional de web services | `RTM-004` | Fase 4 | Catalogo versionado por ambiente e autorizador |
| Agendamento `SVC-AN` | Superficie nacional de contingencia | `RTM-005` | Fase 4 | Boundary de contingencia com criterio de uso e diagnostico |
| EPEC pendente de conciliacao | Consulta/liberacao de `EPEC` | `RTM-005` | Fase 4 | Separar fluxo `EPEC` de autorizacao normal e reconciliacao pos-falha |

## Legislacao e camada normativa

| Topico oficial | Cobertura oficial observada | Destino no roadmap | Fase-alvo inicial | Resultado minimo |
| --- | --- | --- | --- | --- |
| Ajustes `SINIEF` | Base normativa de obrigacoes e campos fiscais | `RTM-009` | Fase 1 | Classificar impacto por contrato, validacao e dados externos |
| Atos `COTEPE` | Regras complementares nacionais | `RTM-009` | Fase 1 | Registrar impacto recorrente em watchlist normativa |
| Convenios | Normas operacionais e fiscais complementares | `RTM-009` | Fase 1 | Relacionar convenios a temas do roadmap sem duplicar backlog nos dossies |
| Protocolos | Regras de obrigatoriedade e adesao setorial/estadual | `RTM-009` | Fase 1 | Tratar impacto em emissao, abrangencia e excecoes setoriais |

## Documentos oficiais: manuais

| Topico oficial | Cobertura oficial observada | Destino no roadmap | Fase-alvo inicial | Resultado minimo |
| --- | --- | --- | --- | --- |
| `MOC 7.0` | Fluxo principal de `NF-e` e `NFC-e` com regras base | `RTM-002` | Fase 2 | Camada canonica, serializacao e validacao estrutural rastreadas |
| Anexo I do `MOC` | Leiaute e regras de validacao | `RTM-002` | Fase 2 | Regras criticas classificadas entre runtime e watchlist |
| Anexo II do `MOC` | `DANFE` e codigo de barras | `RTM-007` | Fase 5 | Delimitar o que vira apoio ao integrador e o que permanece fora do runtime |
| Anexo III do `MOC` | Contingencia de `NF-e` | `RTM-005` | Fase 4 | Separar contingencia de emissao normal e registrar gatilhos de uso |
| Anexo IV do `MOC` | Contingencia de `NFC-e` | `RTM-005` | Fase 7 | Backlog especifico para `offline` e demais trilhas estaduais |
| Manual `DANFE NFC-e` e `QR Code` | Documento auxiliar da `NFC-e` e QR Code | `RTM-007` | Fase 5 | Boundary explicita entre apoio visual, integracao e runtime |
| Manual de contingencia `offline` da `NFC-e` | Operacao em falha de comunicacao | `RTM-005` | Fase 7 | Fronteira funcional, dependencia estadual e criterio de promocao |
| Manual de boas praticas `NFC-e` | Orientacao de solucao sistêmica do emissor | `RTM-013` | Fase 8 | Converter para checklist de integrador sem reproduzir emissor desktop |
| Manual `SVAN` | Ambientes nacional e de homologacao/producao compartilhados | `RTM-012` | Fase 3 | Taxonomia de ambiente e interoperabilidade segura |
| Manual `SVRS` | Credenciamento e operacao via Sefaz Virtual RS | `RTM-012` | Fase 3 | Boundary por ambiente e dependencia externa declarada |
| Manual do emissor de `NF-e` | Instalacao, uso, import/export e recuperacao do emissor legado | `RTM-013` | Fase 8 | Runbooks e suporte ao integrador sem acoplar interface legada ao pacote |
| Manual de contingencia `NF-e` v1.01 | Tipos de emissao em contingencia | `RTM-005` | Fase 4 | Taxonomia de contingencia por documento e ambiente |
| Familias paralelas `NFGas` | Manual e anexos publicados em 2026 | `RTM-016` | Fase 2 | Trilha de observacao com impacto arquitetural declarado |
| Familias paralelas `NFAg` | Manual, leiaute e `DANFAG` | `RTM-016` | Fase 2 | Observacao arquitetural e politica de promocao futura |
| Familia `NF-e ABI` | Manual e anexos em minuta | `RTM-019` | Fase 8 | Manter sob observacao arquitetural sem promocao prematura |

## Documentos oficiais: esquemas XML

| Topico oficial | Cobertura oficial observada | Destino no roadmap | Fase-alvo inicial | Resultado minimo |
| --- | --- | --- | --- | --- |
| Pacote `010c` de `NF-e/NFC-e` | Leiaute vigente com base `NT 2022.002` | `RTM-002` | Fase 2 | Serializacao e validacao alinhadas ao pacote vigente |
| Schemas RTC `NT 2025.002` | Eventos e campos da reforma tributaria | `RTM-009` | Fase 1 | Watchlist e backlog tecnico por impacto em schema e contrato |
| `NFGas` e `NFAg` | Pacotes de liberacao dedicados | `RTM-016` | Fase 2 | Verificar se a camada canonica suporta extensao sem quebra arquitetural |
| Distribuicao `DF-e` | Pacote proprio de distribuicao | `RTM-008` | Fase 6 | Cobertura rastreada para `NSU`, resumos e envelopes |
| Consulta `GTIN` | Pacote proprio de consulta publica | `RTM-006` | Fase 5 | Classificar como consulta auxiliar e nao como emissao principal |
| Eventos centrais | Cancelamento, `CCe`, `EPEC`, Manifestacao, comprovante de entrega, ator interessado, `ECONf`, insucesso, averbação | `RTM-008` | Fase 6 | Backlog por familia de evento com crescimento additive |
| Eventos especificos `NFC-e` | Cancelamento por substituicao e `EPEC NFC-e` | `RTM-005` | Fase 7 | Separar efeito nacional do delta estadual/operacional |
| Schemas historicos de homologacao | Pacotes antigos e de teste | `RTM-014` | Fase 1 | Preservar como trilha historica, sem misturar com baseline vigente |

## Documentos oficiais: notas tecnicas

| Cluster de topicos | Exemplos oficiais observados | Destino no roadmap | Fase-alvo inicial | Resultado minimo |
| --- | --- | --- | --- | --- |
| Identificadores e serializacao | `NT 2026.004`, `NT Conjunta 2025.001`, `NT 2024.001` | `RTM-002` e `RTM-009` | Fase 1 | Classificar impacto em CNPJ alfanumerico, `CRT=4`, chave e tipos compartilhados |
| Reforma tributaria e classificacao tributaria | `NT 2025.002`, `NT 2024.003`, `NT 2023.003`, `NT 2022.005` | `RTM-009` e `RTM-010` | Fase 1 | Separar impacto em schema de impacto em tabelas externas |
| Manifestacao e distribuicao | `NT 2020.001`, `NT 2014.002` | `RTM-008` | Fase 6 | Backlog localizado para distribuicao e eventos do destinatario |
| Assinatura e autorizacao | `NT 2026.001` sobre `PAA` | `RTM-003` | Fase 3 | Classificar efeito em assinatura, autorizacao e trust chain |
| `NFC-e` operacional | `NT 2023.002`, `NT 2018.001`, `NT 2018.004`, `NT 2014.003`, `NT NFC-e 2014.001` | `RTM-005` e `RTM-011` | Fase 7 | Delimitar `CSC`, `QR Code`, eliminacao de denegacao/lote e contingencia/EPEC |
| Consultas auxiliares | `NT 2021.003`, `NT 2022.001`, `NT 2014.001` | `RTM-006` | Fase 5 | Cobrir `GTIN`, `EPEC` publico e demais consultas auxiliares |
| Eventos adjacentes | `NT 2021.001`, `NT 2020.007`, `NT 2024.002`, `NT 2023.005` | `RTM-008` | Fase 6 | Trilha additive para comprovante, ator interessado, `ECONf` e insucesso |
| Tabelas e codificacoes setoriais | `NT 2016.003`, `NT 2017.002`, `NT 2018.003`, `NT 2016.001`, `NT 2020.002` | `RTM-010` | Fase 8 | Politica de atualizacao propria para dados externos |
| Transporte e contingencia historica | `NT 2013.007`, `NT 2015.002`, `NT 2013.008` | `RTM-004` e `RTM-005` | Fase 4 | Catalogo de servicos e contingencia sem lacunas implicitas |

## Documentos oficiais: informes tecnicos

| Topico oficial | Cobertura oficial observada | Destino no roadmap | Fase-alvo inicial | Resultado minimo |
| --- | --- | --- | --- | --- |
| `CBS`, `IBS` e classificacao tributaria | Informes `2026.002`, `2025.002` e correlatos | `RTM-010` | Fase 8 | Governanca de tabelas externas separada do runtime |
| Meios de pagamento | Informes `2026.001` e `2024.002` | `RTM-010` | Fase 8 | Atualizacao rastreada de codigos e tabelas |
| Combustiveis e biodiesel | Informes `2025.004`, `2023.003` | `RTM-010` | Fase 8 | Classificacao como dados externos recorrentes |
| `NCM`, `uTrib`, `FCP`, municipios e `ANP` | Informes `2024.001`, `2023.004`, `2025.001`, `2023.001` | `RTM-010` | Fase 8 | Politica clara para sincronizacao de tabelas |
| `QR Code` por UF | Informe `2025.003` para `GO` | `RTM-011` | Fase 7 | Delta estadual explicitamente ligado a matriz por UF |

## Documentos oficiais: diversos e downloads

| Topico oficial | Cobertura oficial observada | Destino no roadmap | Fase-alvo inicial | Resultado minimo |
| --- | --- | --- | --- | --- |
| Tabelas auxiliares vigentes | `CBS`, `IBS`, meios de pagamento, `FCP`, municipios, `ANP`, `CFOP`, paises, `GS1`, unidades de medida, lista de servicos, veiculos | `RTM-010` | Fase 8 | Politica de ingestao e versionamento separada do contrato runtime |
| `cBenef` por UF | Referencias externas por estado | `RTM-011` | Fase 7 | Classificar deltas estaduais sem misturar com nucleo nacional |
| Cadeia de certificados | Cadeias `www` e `www1` publicadas no portal | `RTM-018` | Fase 3 | Declarar trust chain e precondicoes de conexao segura |
| Classificacao `NCM` no Siscomex | Link externo de classificacao publica | `RTM-010` | Fase 8 | Registrar como dependencia externa de dados |
| Visualizador `DF-e` | Download oficial de utilitario | `RTM-018` | Fase 8 | Tratar como apoio ao integrador e referencia de interoperabilidade |
| Assinador | Download oficial de assinatura | `RTM-018` | Fase 3 | Usar apenas como evidencia de interoperabilidade e nao como dependencia do runtime |

## Criterio de manutencao

- Todo novo topico oficial deve entrar primeiro neste anexo, apontando para um `RTM-*` existente ou exigindo a criacao de um novo tema consolidado.
- Nenhum item do portal nacional deve permanecer apenas em dossie editorial sem destino explicito neste anexo ou no `ROADMAP.md`.