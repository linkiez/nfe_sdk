# Roadmap de Implantacao do nfe_sdk

## Objetivo

Definir uma sequencia unica de implantacao para evoluir o repositorio de um gerador de artefatos TypeScript baseado em XSD para um SDK que implemente codigo para `100%` das features fiscais priorizadas de `NF-e` e `NFC-e`, usando `SP` como baseline obrigatoria de `homologacao` ate `producao`, e tratando o restante do acervo oficial como trilha de expansao depois que esse caminho paulista estiver fechado com runtime, tooling executavel e boundaries operacionais verificaveis.

## Papel deste documento

- Este arquivo passa a ser a fonte canonica de planejamento do repositorio.
- As fases `1` a `8` foram preservadas para manter compatibilidade com os demais artefatos documentais que ja referenciam a numeracao atual.
- O conceito de `100%` neste roadmap passa a significar feature oficial com destino executavel em codigo: `runtime`, `tooling` executavel ou `exemplo` shipped, sempre com prioridade para fechar `SP` em `homologacao` e `producao` antes de expandir cohort multi-`UF`.
- Este arquivo substitui qualquer artefato paralelo de roadmap, matriz tematica ou watchlist de mudancas como fonte canonica de planejamento.
- `docs/documentos-oficiais-portal-nfe.md`, `docs/roadmap/` e `docs/_sources/markdown/official/` continuam como base de evidencia e curadoria, nao como fontes concorrentes de backlog.
- O foco imediato do roadmap deixa de ser apenas cobertura editorial do acervo e passa a ser fechamento de codigo operacional para `SP`, incluindo `tpAmb`, `homologacao`, `producao`, contingencia observavel, `CSC`, `QR Code` e `DANFE NFC-e` no limite correto entre `runtime` e `tooling` executavel.

## Estado atual do projeto

- O repositorio ja entrega geracao em lote de artefatos TypeScript a partir de XSD, com saida separada por `classes`, `interfaces`, `types` e `enums`.
- A superficie publicada ja contem slices homologados em runtime para `NFe`, Manifestacao do Destinatario, eventos genericos e o primeiro slice de `NFC-e`, mas o fechamento documental ainda esta distribuido entre roadmap, matriz tematica, mudancas recentes e dossies por dominio.
- O acervo convertido ja registra `505` arquivos Markdown gerados com sucesso e `4` falhas abertas de conversao, o que e suficiente para tratar o corpus oficial como backlog rastreavel e nao mais como pesquisa exploratoria.
- O hub nacional do Portal da `NF-e` ja foi absorvido editorialmente, mas a camada estadual ainda esta desigual entre UFs com material capturado, UFs com falhas de conversao e UFs ainda sem host estadual dedicado internalizado.

## Principios de implantacao

- Priorizar primeiro o caminho de codigo de `SP` ate `producao`, e so depois ampliar a cobertura editorial e operacional das demais `UFs`.
- Separar com clareza o que e capacidade do SDK do que depende de certificado, credenciamento, autorizador, acesso autenticado e regras por UF.
- Tratar o acervo oficial em tres camadas: evidencia primaria, consolidacao editorial e destinacao de backlog no proprio roadmap.
- Nao considerar um tema fiscal prioritario coberto enquanto ele nao tiver um artefato executavel correspondente em `runtime`, `tooling` ou `exemplo`, ou uma boundary operacional explicitamente codificada.
- Nao considerar uma UF coberta enquanto suas evidencias estaduais e seus ambientes observaveis nao tiverem sido classificados, mesmo quando a base nacional ja cobrir parte do comportamento comum.
- Manter compatibilidade com `ESM`, TypeScript estrito e geracao derivada dos XSD como fundamento do pacote.
- Explicitar desde cedo a fronteira entre API runtime, utilitarios de apoio ao integrador e artefatos operacionais de exemplo, para nao reproduzir no SDK uma interface de emissor desktop.

## Fora do escopo inicial

- Automacao de credenciamento, emissao real em producao ou operacao fiscal sem habilitacao externa.
- Prometer suporte runtime simultaneo para todas as `27` UFs antes de fechar `SP` com trilha completa de `homologacao`, `producao` e contingencia observavel.
- Reescrita do pipeline de geracao antes de estabilizar o contrato publico minimo.
- Replicar no pacote uma aplicacao emissora completa com cadastro local, interface grafica, banco embarcado e operacao assistida no estilo do emissor legado.

## Escopo oficial obrigatorio

O roadmap agora considera obrigatoria a cobertura planejada de todos os itens abaixo.

| Eixo                 | Cobertura obrigatoria                                                                                                                                                            | Resultado minimo no roadmap                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Portal nacional      | `www.nfe.fazenda.gov.br`, incluindo `Documentos`, `Manuais`, `Esquemas XML`, `Notas Tecnicas`, `Informes Tecnicos`, `Diversos`, FAQ, servicos, contingencia e familias paralelas | Cada tema precisa ter destino de backlog e fase-alvo inicial                                               |
| Acervo oficial raiz  | Todo host sob `docs/_sources/markdown/official/`, mesmo quando nao pertença ao portal nacional                                                                                   | Cada host precisa entrar como evidencia estadual, fonte complementar, falha aberta ou trilha de observacao |
| Estados              | Todas as `27` UFs precisam ter status explicito de cobertura editorial, mesmo que ainda sem promocao runtime                                                                     | Nenhuma UF pode ficar fora do planejamento                                                                 |
| Ambientes            | `homologacao`, `producao`, `ambiente nacional`, `SVAN`, `SVRS`, `SVC-AN`, `SVC-RS`, `offline`, consulta publica resumida, consulta autenticada e credenciamento                  | Cada ambiente precisa ter fronteira funcional, destino e fase                                              |
| Familias documentais | `NF-e`, `NFC-e`, Manifestacao, eventos genericos, `EPEC`, `NFGas`, `NFAg`, `NF-e ABI` e familias proximas do portal                                                              | Cada familia precisa ter classificacao entre fluxo priorizado, observacao arquitetural ou backlog          |
| Mudancas recorrentes | `NTs`, informes, tabelas auxiliares, indisponibilidades e deltas estaduais                                                                                                       | Watchlist viva com impacto em schema, validacao, evento, consulta, ambiente ou contrato                    |

## Modelo de detalhamento e status

Para que o roadmap fique utilizavel como plano de execucao, cada unidade de cobertura deve ser lida com um status operacional explicito.

| Unidade            | O que representa                                                                                    | Status obrigatorios                                                                           | Quando muda de status                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Tema               | Um bloco funcional do roadmap, como contingencia, pos-autorizacao ou tabelas auxiliares             | `mapeado`, `classificado`, `em execucao`, `parcial`, `fechado`                                | Muda quando ganha destino primario, fase, backlog e evidencia correspondente                          |
| Host oficial       | Um dominio ou subdominio em `docs/_sources/markdown/official/`                                      | `capturado`, `capturado-com-falha`, `pendente`, `bloqueado`, `consolidado`                    | Muda quando a captura existe, falhou, depende de recolha adicional ou ja foi absorvida editorialmente |
| UF                 | A leitura editorial e operacional de um estado                                                      | `sem-leitura`, `nacional-apenas`, `estadual-parcial`, `estadual-fechada`, `promovida-runtime` | Muda quando a UF recebe classificacao por ambiente, consultas, credenciamento e deltas locais         |
| Ambiente           | Uma superficie operacional distinta, como `homologacao`, `producao`, `SVAN` ou consulta autenticada | `identificado`, `classificado`, `com-boundary`, `com-execucao`                                | Muda quando o ambiente deixa de ser apenas citado e passa a ter backlog, dependencias e gates claros  |
| Familia documental | Uma trilha como `NF-e`, `NFC-e`, `NFGas` ou `NF-e ABI`                                              | `priorizada`, `observada`, `deferida`, `fora-do-recorte`                                      | Muda quando a familia passa a exigir runtime, tooling ou apenas observacao arquitetural               |
| Mudanca recorrente | Uma `NT`, informe, tabela ou aviso operacional                                                      | `monitorada`, `classificada`, `planejada`, `absorvida`                                        | Muda quando o delta deixa de ser apenas watchlist e vira backlog tecnicamente localizado              |

## Definicao pratica de `100%`

`100%` neste roadmap deixa de ser apenas cobertura planejada e passa a significar fechamento de codigo para as features fiscais priorizadas, com `SP` como baseline obrigatoria de `homologacao` ate `producao`.

| Unidade            | Condicao minima para contar no `100%` do roadmap                                                                     |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- |
| Tema               | ter feature codificada em `runtime`, `tooling` executavel ou `exemplo`, com testes e boundary operacional            |
| Host oficial       | estar classificado e conectado a uma entrega tecnica concreta, nao apenas a uma nota editorial                       |
| UF                 | ter caminho operacional reconciliado por ambiente; para `SP`, isso inclui `homologacao` e `producao`                 |
| Ambiente           | ter `tpAmb`, endpoint, dependencia externa, fallback e gate de validacao localizados em codigo ou runbook executavel |
| Familia documental | ter decisao explicita entre `runtime`, `tooling` executavel, `exemplo` shipped ou backlog adiado apos `SP`           |
| Mudanca recorrente | ter impacto traduzido em implementacao, teste, fixture, dado externo versionado ou backlog tecnico localizado        |

## Sinais oficiais que puxam este redirecionamento

- O material oficial de `SP` registra indisponibilidade do autorizador e ativacao de `SVC-AN` como medida de continuidade operacional, o que desloca contingencia de nota editorial para backlog imediato de codigo por ambiente.
- A documentacao oficial sobre `NF-e` diferencia explicitamente `homologacao` e `producao`, deixando claro que o caminho de `producao` tem validade juridica propria e nao pode continuar fora da trilha principal do SDK.
- O leiaute oficial da `NF-e` exige `tpAmb` com rejeicao quando ambiente e mensagem divergem, entao ambiente deixou de ser classificacao documental e passa a ser requisito obrigatorio de implementacao.
- O portal estadual paulista concentra sinais suficientes de suporte operacional, autenticacao, manutencao e canais auxiliares para servir de baseline tecnica antes de qualquer nova expansao multi-`UF`.

## Modelo de promocao para runtime

Nem todo item coberto pelo roadmap deve virar runtime imediatamente. A promocao precisa seguir estagios additive e verificaveis.

| Estagio | Significado                        | Evidencia minima                                                                    |
| ------- | ---------------------------------- | ----------------------------------------------------------------------------------- |
| `R0`    | apenas capturado no acervo oficial | host convertido ou bloqueio oficial registrado                                      |
| `R1`    | consolidado editorialmente         | fonte registrada, sintese no dossie e backlog localizado no roadmap                 |
| `R2`    | boundary documentada               | limites do que fica fora do slice e dependencias externas declaradas                |
| `R3`    | piloto runtime                     | contrato publico additive, fixture homologada e teste focado                        |
| `R4`    | runtime estabilizado               | evidencias de contrato, integracao, cobertura documental e regra de compatibilidade |

## Lacunas oficiais explicitadas

O roadmap passa a tratar como lacunas reais, extraidas do `Manual do Emissor de NF-e`, do `MOC`, dos manuais de contingencia, dos manuais de `DANFE NFC-e` e da curadoria consolidada em `docs/roadmap/topicos-oficiais.md` e `docs/roadmap/portal-documentos-vigentes.md`, os seguintes pontos que antes apareciam apenas de forma implicita:

- maquina de estados local do documento, incluindo rascunho, validacao, assinatura, processamento, autorizacao, rejeicao, denegacao, cancelamento e pendencia de retorno;
- polling de recibo, consulta de protocolo e tratamento de pendencias de transmissao como parte do fluxo operacional minimo;
- contingencia como trilha arquitetural propria, com separacao entre contingencia de `NF-e`, contingencia `offline` de `NFC-e`, `SVC`, `EPEC` e demais mecanismos por documento;
- representacao auxiliar e pos-autorizacao, incluindo `DANFE`, `DANFE NFC-e`, `QR Code`, impressao e exportacao de XML autorizado;
- consultas auxiliares por chave de acesso, inclusive cenarios de documento nao previamente persistido pelo consumidor do SDK;
- requisitos de interoperabilidade alem do XML assinado, como cadeia de certificados, `SSL`, obtencao de `WSDL`, autenticacao mutua e catalogos de autorizadores virtuais;
- portabilidade operacional para fixtures, exemplos, snapshots e suporte ao integrador, incluindo importacao e exportacao de XML e estrategias de recuperacao equivalentes a `backup` e restauracao;
- politicas estaduais de consulta, credenciamento, indisponibilidade, `CSC`, `QR Code`, web services e contingencia por UF;
- diferencas entre ambientes compartilhados, ambientes estaduais, ambiente nacional, contingenciais e consultas com ou sem autenticacao.

## Temas consolidados e destino primario

Esta secao absorve a antiga matriz tematica e vira a referencia canonica para leitura de backlog por tema.

| ID      | Tema consolidado                                                                                                                           | Destino primario       | Fase-alvo inicial | Desfecho minimo esperado                                                                   |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- | ----------------- | ------------------------------------------------------------------------------------------ |
| RTM-001 | Contrato publico, manifesto gerado, build `ESM`, distribuicao e rastreabilidade documental                                                 | `runtime`              | Fase 1            | Contrato root explicito, manifesto auditavel e build repetivel                             |
| RTM-002 | Modelagem canonica, serializacao XML, validacao estrutural e maquina de estados do documento                                               | `runtime`              | Fase 2            | Facades e primitives previsiveis acima dos artefatos gerados                               |
| RTM-003 | Assinatura digital, certificados, cadeia de confianca, `SSL`, `WSDL` e autenticacao mutua                                                  | `runtime`              | Fase 3            | XML assinado e validavel com precondicoes tecnicas rastreadas                              |
| RTM-004 | Transporte `SOAP`, autorizadores nacionais e virtuais, disponibilidade, consulta, recibo, protocolo e polling                              | `runtime`              | Fase 4            | Cliente e catalogo de servicos com diagnostico operacional compreensivel                   |
| RTM-005 | Contingencia de `NF-e`, contingencia `offline` de `NFC-e`, `SVC`, `EPEC` e mecanismos equivalentes por fluxo                               | `runtime`              | Fase 4            | Boundary de contingencia definida e mapeada por ambiente                                   |
| RTM-006 | Pos-autorizacao e reconciliacao                                                                                                            | `runtime`              | Fase 5            | API capaz de acompanhar cancelamento, carta, inutilizacao e consultas auxiliares           |
| RTM-007 | Representacoes auxiliares como `DANFE`, `DANFE NFC-e`, `QR Code`, `CSC` e exportacao previsivel de XMLs                                    | `exemplo`              | Fase 5            | Delimitacao clara do que vira API e do que fica como apoio ou backlog                      |
| RTM-008 | Eventos de maior impacto operacional, incluindo Manifestacao, comprovante de entrega, ator interessado, conciliacao financeira e insucesso | `runtime`              | Fase 6            | Slice inicial de eventos com crescimento additive                                          |
| RTM-009 | Governanca de compatibilidade para `NTs`, informes, series recorrentes e versionamento de contratos e schemas                              | `documentacao`         | Fase 1            | Processo explicito para classificar mudancas por impacto                                   |
| RTM-010 | Tabelas auxiliares e parametros externos, como `NCM`, meios de pagamento, `FCP`, municipios, `ANP`, `CFOP`, `CBS` e `IBS`                  | `tooling`              | Fase 8            | Politica de atualizacao propria e separada do nucleo runtime                               |
| RTM-011 | Complementos estaduais por UF                                                                                                              | `documentacao`         | Fase 7            | Matriz por UF ligada a comportamento real do SDK e criterio claro de promocao              |
| RTM-012 | Ambientes e superfices operacionais, incluindo `homologacao`, `producao`, `SVAN`, `SVRS`, `SVC`, consulta autenticada e credenciamento     | `documentacao`         | Fase 3            | Cada ambiente com fronteira, dependencia externa e backlog associado                       |
| RTM-013 | Tooling e operacao assistida para integradores, incluindo fixtures, import/export de XML, snapshots, diagnostico, exemplos e runbooks      | `tooling`              | Fase 8            | Kit de suporte a homologacao e regressao sem inflar a superficie runtime                   |
| RTM-014 | Curadoria do acervo oficial convertido e fechamento das falhas de conversao                                                                | `documentacao`         | Fase 1            | Todo host oficial com status claro e nenhuma falha sem dono                                |
| RTM-015 | Watchlist de mudancas recentes com impacto atual                                                                                           | `documentacao`         | Fase 1            | Deltas recentes absorvidos no planejamento e na governanca de compatibilidade              |
| RTM-016 | Familias documentais paralelas como `NFGas`, `NFAg` e `NF-e ABI`                                                                           | `trilha de observacao` | Fase 2            | Watchlist arquitetural ativa, sem promessa operacional antecipada                          |
| RTM-017 | Descoberta publica do portal nacional, FAQ, consulta resumida, estatisticas e superfices autenticadas                                      | `documentacao`         | Fase 1            | Separar descoberta publica, acesso autenticado, telemetria publica e suporte ao integrador |
| RTM-018 | Downloads, cadeia de certificados, Visualizador `DF-e` e artefatos auxiliares do portal                                                    | `tooling`              | Fase 3            | Classificar cadeia, dependencias externas e utilitarios auxiliares sem inflar o runtime    |
| RTM-019 | Tabelas externas e familias emergentes do portal, como `NF-e ABI`, `NCM/UTrib` e derivados                                                 | `trilha de observacao` | Fase 8            | Politica explicita para promover tabelas ou familias para `tooling` ou `runtime`           |

## Cobertura estadual obrigatoria

Esta secao substitui a leitura de planejamento antes espalhada entre a matriz tematica, a matriz por UF e os dossies estaduais. Ela nao substitui o detalhe editorial por dominio, mas define o compromisso minimo de fechamento para cada UF.

| UF  | Situacao atual da fonte estadual no acervo oficial         | Fechamento minimo exigido                                                                             | Fase de fechamento inicial |
| --- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------- |
| AC  | host estadual capturado                                    | classificar `NF-e`, `NFC-e`, consulta, inutilizacao, credenciamento e area restrita                   | Fase 7                     |
| AL  | sem host estadual dedicado internalizado                   | localizar fonte primaria estadual ou registrar dependencia nacional sem delta local                   | Fase 7                     |
| AM  | host estadual capturado                                    | classificar projeto, credenciamento, integracao, homologacao e producao                               | Fase 7                     |
| AP  | host estadual com falha aberta de conversao                | recuperar captura util ou registrar bloqueio oficial rastreado                                        | Fase 7                     |
| BA  | host estadual capturado                                    | confirmar servicos e eventuais deltas estaduais de `NF-e` e `NFC-e`                                   | Fase 7                     |
| CE  | host estadual capturado com falha aberta                   | reconciliar consulta, homologacao, validacao XML e links de ambiente                                  | Fase 7                     |
| DF  | host estadual capturado                                    | classificar politicas distritais, consulta e superfices publicas relevantes                           | Fase 7                     |
| ES  | sem host estadual dedicado internalizado                   | localizar evidencia primaria estadual ou registrar ausencia com destino claro                         | Fase 7                     |
| GO  | host estadual capturado                                    | classificar servicos estaduais e delta operacional observavel                                         | Fase 7                     |
| MA  | sem host estadual dedicado internalizado                   | localizar evidencia primaria estadual ou registrar dependencia nacional                               | Fase 7                     |
| MG  | host estadual capturado                                    | classificar `NF-e`, `NFC-e`, familias paralelas, regras facultativas e manutencoes                    | Fase 7                     |
| MS  | host estadual capturado                                    | classificar consultas por ambiente, credenciamento, web services e suporte operacional                | Fase 7                     |
| MT  | host estadual capturado                                    | classificar inutilizacao, FAQ local e fronteira nacional versus estadual                              | Fase 7                     |
| PA  | host estadual capturado                                    | classificar servicos publicos e deltas estaduais relevantes                                           | Fase 7                     |
| PB  | host estadual capturado                                    | classificar consulta publica, `CSC`, consultas pos-autorizacao e hubs correlatos                      | Fase 7                     |
| PE  | host estadual capturado                                    | classificar portal corporativo, servicos empresariais e impacto em `NF-e` e `NFC-e`                   | Fase 7                     |
| PI  | host estadual capturado                                    | classificar servicos e eventuais deltas de portal estadual                                            | Fase 7                     |
| PR  | host estadual capturado                                    | classificar contingencia, `CSC`, `QR Code`, credenciamento e ambientes de homologacao/producao        | Fase 7                     |
| RJ  | host estadual parcial com falha aberta em uma das capturas | reconciliar consulta unificada de `DF-e`, `EPEC` e gaps de captura estadual                           | Fase 7                     |
| RN  | sem host estadual dedicado internalizado                   | localizar fonte primaria estadual ou registrar ausencia com rastreabilidade                           | Fase 7                     |
| RO  | host estadual capturado                                    | classificar credenciamento, onboarding e precondicoes operacionais                                    | Fase 7                     |
| RR  | host estadual capturado                                    | classificar servicos estaduais e lacunas abertas                                                      | Fase 7                     |
| RS  | sem host estadual dedicado internalizado                   | localizar evidencia estadual direta ou tratar a UF apenas via autorizadores virtuais quando aplicavel | Fase 7                     |
| SC  | host estadual capturado                                    | classificar politica de consulta publica, autenticacao e download de `DF-e`                           | Fase 7                     |
| SE  | host estadual com falha aberta de conversao                | recuperar evidencia estadual ou registrar bloqueio oficial consolidado                                | Fase 7                     |
| SP  | host estadual capturado e ja promovido como piloto `NFC-e` | aprofundar servicos, indisponibilidade, `SVC-AN`, produtor rural e demais deltas locais               | Fase 7                     |
| TO  | host estadual capturado                                    | classificar servicos estaduais e dependencias locais                                                  | Fase 7                     |

## Ondas estaduais sugeridas

Para evitar backlog multi-UF difuso, a camada estadual deve avançar por ondas com criterios explicitos de densidade documental e valor operacional.

| Onda     | UFs                                                        | Critero de agrupamento                                                                                                  | Resultado esperado                                                            |
| -------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `Onda 0` | `SP`                                                       | piloto ja promovido em runtime e com evidencia publica mais forte                                                       | endurecer deltas locais e virar baseline de comparacao                        |
| `Onda 1` | `PR`, `MS`, `MG`, `PB`, `SC`, `CE`, `AM`, `AC`, `RO`, `RJ` | estados com sinais publicos fortes de consulta, credenciamento, contingencia, web services ou regras locais observaveis | fechar leitura editorial por ambiente e decidir candidatos a proxima promocao |
| `Onda 2` | `BA`, `DF`, `GO`, `MT`, `PA`, `PE`, `PI`, `RR`, `TO`       | estados com host capturado, mas ainda com leitura menos profunda ou mais institucional                                  | transformar presenca de host em backlog classificado por fluxo e ambiente     |
| `Onda 3` | `AL`, `ES`, `MA`, `RN`, `RS`, `AP`, `SE`                   | estados com ausencia de host dedicado, dependencias indiretas ou falhas abertas de conversao                            | fechar evidencia minima e remover zonas cegas do planejamento                 |

## Ambientes e superfices operacionais obrigatorios

Esta secao fecha a lacuna historica entre cobertura por fluxo e cobertura por ambiente.

| Ambiente ou superficie         | Pergunta que o roadmap precisa responder                                                                 | Fonte observada principal                       | Fase-alvo inicial |
| ------------------------------ | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ----------------- |
| Ambiente Nacional              | Quais servicos, consultas, FAQ, `EPEC`, contingencias e tabelas sao realmente compartilhados?            | Portal Nacional da `NF-e`                       | Fase 2            |
| Homologacao                    | Quais fluxos sao obrigatorios para testes repetiveis, fixtures, exemplos e smoke de integracao?          | `MOC`, manuais de emissor e portais estaduais   | Fase 3            |
| Producao                       | Quais boundaries devem permanecer documentadas sem prometer execucao automatica sem habilitacao externa? | `MOC`, manuais estaduais e paginas de consulta  | Fase 3            |
| `SVAN`                         | Como a camada virtual nacional afeta `WSDL`, `SSL`, catálogos e distribucao de UFs?                      | manuais `SVAN` e contingencia                   | Fase 3            |
| `SVRS`                         | Como a camada virtual compartilhada afeta endpoints, contingencia e familias alem de `NF-e`?             | manuais `SVRS` e portais estaduais              | Fase 3            |
| `SVC-AN`                       | Quando a contingencia entra no backlog de runtime e como deve aparecer nas boundaries?                   | manuais de contingencia e avisos de `SP`        | Fase 4            |
| `SVC-RS`                       | Como mapear ativacao por UF e impacto em catalogo de servicos?                                           | manuais de contingencia e portais estaduais     | Fase 4            |
| `offline` de `NFC-e`           | O que permanece como backlog, boundary ou exemplo antes da promocao multi-UF?                            | manual de contingencia offline de `NFC-e`       | Fase 7            |
| Consulta publica resumida      | Quais estados expõem consulta resumida aberta e quais exigem autenticacao?                               | portais estaduais como `SC`, `RJ`, `PB` e `CE`  | Fase 7            |
| Consulta autenticada completa  | Quando ha usuario/senha, certificado ou area restrita exigidos?                                          | portais estaduais e FAQ nacional                | Fase 7            |
| Credenciamento e habilitacao   | Quais precondicoes sao externas ao SDK e como aparecem por UF?                                           | portais estaduais como `AM`, `RO`, `AC` e `MS`  | Fase 7            |
| Indisponibilidade e manutencao | Como avisos publicos influenciam resiliencia, telemetria e fallback?                                     | `SP`, `MG` e demais UFs com avisos operacionais | Fase 4            |

## Watchlist de mudancas recentes

Esta secao concentra a watchlist canonica de mudancas recentes.

| ID         | Mudanca                                                                             | Escopo afetado                                                       | Leitura obrigatoria no roadmap                                           |
| ---------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| CHANGE-001 | Informe Tecnico `2026.002` `v1.00`                                                  | fluxos e orientacoes recentes divulgadas no portal nacional          | classificar impacto em fluxo, ambiente e contrato                        |
| CHANGE-002 | `NT 2024.003` `v1.10` (`Agro`)                                                      | regras e leiautes com reflexo em documentos fiscais relacionados     | tratar como elo entre `NF-e`, `NFAg` e watchlist de familias paralelas   |
| CHANGE-003 | `NT 2026.004` `v1.00` (`CNPJ` alfanumerico)                                         | identificacao e validacoes de emissores ou participantes             | revisar serializacao, validacao e identificadores compartilhados         |
| CHANGE-004 | `NT 2025.002` `v1.36` (`RTC`)                                                       | leiautes de `NF-e` e `NFC-e` ligados a reforma tributaria do consumo | revisar tipos gerados, campos e compatibilidade de versao                |
| CHANGE-005 | avisos operacionais de manutencao, indisponibilidade e `SVC-AN` na `SEFAZ/SP`       | operacao estadual e contingencia                                     | alimentar backlog de resiliencia e disponibilidade                       |
| CHANGE-006 | postergacao da obrigatoriedade para produtor rural em `2025` e `2026` na `SEFAZ/SP` | adocao operacional e canais de emissao                               | alimentar matriz estadual, criterio de onboarding e recortes por emissor |

## Trilhas transversais permanentes

- trilha de compatibilidade normativa: monitorar `NTs`, informes, alteracoes de schema, novas regras de validacao e impactos de semver no contrato do pacote;
- trilha de parametrizacao externa: versionar tabelas auxiliares, codificacoes oficiais e metadados operacionais sem acoplar essas mudancas ao nucleo de serializacao quando nao for necessario;
- trilha de evidencia estadual: promover material por UF somente quando ele fechar lacuna operacional real do SDK ou da matriz de compatibilidade;
- trilha de ambientes: manter a distincao entre `homologacao`, `producao`, contingenciais, consultas abertas e consultas autenticadas em todo novo slice;
- trilha de familias paralelas: usar `NFGas`, `NFAg` e `NF-e ABI` como teste de robustez da arquitetura manual e do manifesto gerado;
- trilha de observabilidade e recuperacao: manter exemplos, fixtures, importacao e exportacao de XML e runbooks alinhados ao comportamento esperado dos fluxos homologados;
- trilha de acervo oficial: fechar hosts faltantes e falhas abertas de conversao sem deixar o acervo editorial divergir do backlog.

## Registro de implementacao via specs

- Specs com `tasks.md` totalmente fechada: `001`, `002`, `003`, `004`, `005`, `006`, `007`, `008`, `009`, `010`, `011`, `012`, `013`, `014`, `016`, `017`, `018`, `019`, `020`, `022`, `023` e `024`.
- Specs com implementacao iniciada e ainda aberta: `015` (`26/27` tasks) e `021` (`16/30` tasks).
- Leitura por fase: Fase 1=`001`,`002`,`003`,`011`; Fase 2=`004` com fechamento transversal de `012`; Fase 3=`005`,`012`,`014`,`019`; Fase 4=`006`,`012`; Fase 5=`007`,`012`,`016`,`017`,`020`, com `021` aberta; Fase 6=`008`,`009`,`012`,`022`; Fase 7=`010`,`012`,`014`,`023`,`024`, com `015` aberta; Fase 8=`013`,`018`.

## Fases do roadmap

### Fase 1 - Fundacao do pacote e governanca canonica do acervo

**Meta**: transformar o repositorio em uma base confiavel para evolucao sem ambiguidade sobre o que o pacote publica e sobre como o acervo oficial entra no backlog.

**Entregas**:

- congelar e documentar o contrato publico minimo do pacote em torno de `src/index.ts`;
- estabilizar o build de distribuicao e os artefatos publicados em `dist`;
- criar testes de smoke para importacao `ESM` e integridade do manifesto gerado;
- revisar colisoes e lacunas do `manifest.json` para identificar familias de schema que ainda exigem tratamento adicional;
- consolidar neste roadmap a destinacao dos temas antes espalhados entre matriz tematica, mudancas recentes e dossies de planejamento;
- inventariar todos os hosts sob `docs/_sources/markdown/official/` com status `capturado`, `capturado-com-falha`, `pendente` ou `trilha de observacao`;
- registrar dono e estrategia de fechamento para as quatro falhas abertas de conversao.

**Subfrentes obrigatorias**:

- contrato publico e manifesto publicado;
- inventario do acervo oficial por host;
- taxonomia de status do roadmap;
- watchlist inicial de mudancas recentes.

**Gates de validacao**:

- nenhum host oficial sem status;
- nenhum tema consolidado sem destino primario;
- nenhum delta recente relevante fora da watchlist.

**Criterio de saida**: pacote instalavel com contrato publico minimo explicito e roadmap unico cobrindo temas, hosts, estados e mudancas recentes.

### Fase 2 - Camada canonica de modelo, XML e cobertura nacional completa

**Meta**: sair de artefatos crus gerados para uma camada previsivel de montagem e serializacao enquanto fecha a leitura nacional do acervo oficial.

**Entregas**:

- definir uma camada manual de facades e builders para os documentos mais centrais;
- criar serializacao XML deterministica a partir dos tipos gerados;
- validar XML contra os XSD suportados pelo fluxo;
- normalizar campos criticos compartilhados, como chave de acesso, ambiente, versao e identificadores de evento;
- modelar uma maquina de estados canonica para o ciclo local do documento;
- absorver no backlog por tema todo o hub nacional do Portal da `NF-e`, incluindo `Manuais`, `Esquemas XML`, `NTs`, `Informes`, `Diversos`, contingencia e familias paralelas;
- verificar se a camada manual permanece generica o bastante para acomodar `NFGas`, `NFAg` e `NF-e ABI`.

**Subfrentes obrigatorias**:

- montagem e serializacao canonica;
- validacao estrutural e identificadores compartilhados;
- leitura nacional por familias documentais;
- ponte entre temas do portal nacional e backlog tecnico.

**Gates de validacao**:

- nenhum bloco do hub nacional sem classificacao no roadmap;
- nenhuma primitive canonica critica sem contrato ou backlog localizado.

**Criterio de saida**: o SDK consegue montar e serializar documentos canonicos e nenhum tema do portal nacional fica sem destinacao de backlog.

### Fase 3 - Assinatura digital, seguranca operacional e taxonomia de ambientes

**Meta**: habilitar os fluxos que dependem de validade juridica e autenticidade tecnica, fechando a taxonomia de ambientes de forma executavel para `SP`, `homologacao` e `producao`.

**Entregas**:

- suporte a leitura de certificado `A1` em formato compativel com Node.js;
- implementacao de assinatura `XMLDSig` para `NF-e`, `NFC-e` e eventos;
- suporte a calculos auxiliares obrigatorios, incluindo `DV` da chave de acesso e `hashCSRT` quando aplicavel;
- validacao de cadeia de certificados e precondicoes de conexao segura exigidas pelos autorizadores;
- suporte explicito a `tpAmb` e validacao cruzada entre payload e endpoint para impedir mistura entre `homologacao` e `producao`;
- cobertura de requisitos de interoperabilidade observados nos manuais de `SVRS`, `SVAN` e materiais correlatos, incluindo `SSL`, autenticacao mutua e compatibilidade de consumo `WSDL`;
- classificar `homologacao`, `producao`, `ambiente nacional`, `SVAN`, `SVRS`, consultas abertas e consultas autenticadas como superfices distintas de backlog.

**Subfrentes obrigatorias**:

- assinatura e certificados;
- interoperabilidade segura;
- taxonomia de ambientes;
- boundaries entre acesso publico e acesso autenticado.

**Gates de validacao**:

- cada ambiente obrigatorio precisa ter dependencia externa declarada;
- nenhuma superficie de assinatura pode depender de comportamento implcito do portal.

**Criterio de saida**: o SDK consegue produzir XML assinado, distinguir `tpAmb` corretamente e fechar a primeira leitura coerente e executavel de ambientes e precondicoes tecnicas para `SP`.

### Fase 4 - Transporte, `SOAP`, catalogo de servicos e resiliencia multi-ambiente

**Meta**: criar a infraestrutura de comunicacao com autorizadores e ambientes nacionais e contingenciais, fechando o caminho tecnico de `SP` ate `producao`.

**Entregas**:

- cliente `SOAP` com configuracao por ambiente e timeout;
- catalogo versionado de servicos e endpoints nacionais;
- tratamento estruturado de retorno, rejeicao, indisponibilidade e uso indevido;
- separacao entre camada de transporte, mapeamento de mensagens e regras de dominio;
- suporte a consulta de recibo, consulta de protocolo e agendamento de polling de retorno quando o processamento for assincrono;
- suporte a resolucao de endpoints de `homologacao` e `producao` com `tpAmb` coerente e diagnostico explicito quando o ambiente configurado divergir do payload;
- catalogo observavel de autorizadores virtuais, contingenciais e endpoints por ambiente, com fronteiras claras entre regra nacional e complemento estadual;
- backlog operacional para `SVC-AN`, `SVC-RS`, indisponibilidade publica e diagnostico antes da camada multi-UF;
- pontos de acoplamento controlado para servicos auxiliares, como consultas especificas, distribuicao e servicos administrativos ligados a `CSC`.

**Subfrentes obrigatorias**:

- catalogo de endpoints e autorizadores;
- consultas de acompanhamento e polling;
- contingencia e indisponibilidade;
- diagnostico operacional e erro compreensivel.

**Gates de validacao**:

- cada servico suportado precisa mapear ambiente, autorizador e classe de erro;
- contingencia nao pode ficar descrita apenas como nota editorial.

**Criterio de saida**: o SDK consegue chamar servicos de `homologacao` e `producao` com telemetria, `tpAmb` coerente e erros compreensiveis, e o roadmap fecha a leitura de contingencia e resiliencia por ambiente.

### Fase 5 - MVP operacional de `NFe` e ciclo pos-transmissao

**Meta**: fechar o primeiro fluxo fim a fim com maior valor transversal, ja preparado para `SP` em `homologacao` e `producao`.

**Entregas**:

- API de alto nivel para emissao e acompanhamento de `NFe`;
- modelos de resposta orientados a uso de aplicacao, sem expor apenas XML cru;
- exemplos executaveis em homologacao;
- runbooks e fixtures equivalentes para `producao`, sem esconder as dependencias externas de credenciamento e certificado;
- testes de regressao baseados em fixtures XML reais;
- facades que cubram validacao, assinatura, transmissao, consulta, cancelamento, inutilizacao e carta de correcao;
- exportacao previsivel de XML autorizado, cancelado e denegado para testes, auditoria e interoperabilidade;
- base inicial para `DANFE` e consulta por chave de acesso como superfices complementares do fluxo de pos-autorizacao;
- fechamento da leitura de polling, protocolo, busca de retorno e consultas auxiliares como parte do fluxo minimo.

**Subfrentes obrigatorias**:

- emissao e autorizacao;
- pos-transmissao e reconciliacao;
- exportacao de XML e auditoria;
- backlog separado para representacoes auxiliares.

**Gates de validacao**:

- o fluxo minimo precisa cobrir transmissao e retorno, nao apenas envio inicial;
- cada lacuna de `DANFE` ou consulta auxiliar precisa continuar visivel como backlog.

**Criterio de saida**: um integrador consegue emitir e acompanhar `NFe` em `homologacao` e preparar a ida a `producao` em `SP` com a API do SDK, e o backlog de pos-transmissao deixa de ser implicito.

### Fase 6 - Eventos, distribuicao `DFe` e Manifestacao do Destinatario

**Meta**: expandir do fluxo emitente para os fluxos de interesse do destinatario e eventos correlatos.

**Entregas**:

- abstrair eventos por tipo, lote e retorno de processamento;
- modelar manifestacao com foco em ciencia, confirmacao, desconhecimento e operacao nao realizada;
- cobrir regras de distribuicao e leitura de `NSU`;
- separar o que e suporte do SDK do que depende de permissao operacional externa;
- incorporar consultas auxiliares por chave, resumos e retornos que permitam reconciliar documentos nao previamente persistidos pelo consumidor do SDK;
- planejar a expansao incremental de eventos adjacentes ja mapeados no acervo oficial, como comprovante de entrega, ator interessado, conciliacao financeira e insucesso na entrega.

**Subfrentes obrigatorias**:

- eventos basicos e genericos;
- distribuicao e consumo de `NSU`;
- acesso autenticado e restricoes externas;
- backlog de eventos adjacentes de alto impacto.

**Gates de validacao**:

- nenhum evento adjacente relevante pode desaparecer da trilha de expansao;
- restricoes de certificado ou permissao externa precisam aparecer no contrato documental.

**Criterio de saida**: o SDK atende o nucleo do ecossistema de eventos e distribuicao sem misturar requisitos emitente e destinatario.

### Fase 7 - `NFC-e` nacional, `27` UFs e extensoes por ambiente estadual

**Meta**: fechar `NFC-e` de forma sustentavel com foco imediato em `SP` ate `producao`, e so depois abrir ondas adicionais de `UF`.

**Entregas**:

- camada nacional compartilhada para `NFC-e`;
- arquitetura de extensoes por UF;
- baseline paulista com `homologacao`, `producao`, `CSC`, `QR Code`, `DANFE NFC-e` e contingencia classificados como implementacao ou boundary codificada;
- matriz de compatibilidade por UF conectada ao comportamento real do SDK;
- fechamento da trilha operacional propria de `NFC-e`, incluindo `DANFE NFC-e`, `QR Code`, `CSC`, contingencia `offline` e delimitacao do que e API, tooling executavel ou boundary por `UF`;
- estrategia de promocao gradual de UFs ancorada em evidencias publicas de credenciamento, web services, contingencia e politicas de consulta;
- incorporacao dos avisos de indisponibilidade, `SVC-AN`, produtor rural e `NFF` de `SP` como parte do baseline de producao, e nao apenas como notas de acervo;
- reconciliacao de todas as `27` UFs com um dos status validos do roadmap: `capturada`, `capturada-com-falha`, `pendente com dono`, `somente nacional sem delta` ou `promovida para suporte runtime`;
- compatibilizacao explicita com `NTs` de `NFC-e` que alteram chave natural, cancelamento por substituicao, eliminacao de denegacao e lote, produtor rural, `CRT=4` e evolucoes de `QR Code` por UF.

**Subfrentes obrigatorias**:

- nucleo nacional compartilhado;
- extensoes por UF e por ambiente;
- ondas estaduais;
- backlog de `QR Code`, `CSC`, `DANFE NFC-e` e contingencia `offline`.

**Gates de validacao**:

- nenhuma UF pode permanecer sem classificacao estadual minima;
- nenhuma promocao runtime deve acontecer sem passagem pelos estagios `R1` a `R3`.

**Criterio de saida**: o SDK oferece `NFC-e` de `SP` pronto para `homologacao` e `producao`, com `CSC`, `QR Code`, `DANFE NFC-e` e contingencia posicionados corretamente em codigo, e o roadmap fecha a ordem de expansao das demais `UFs`.

### Fase 8 - Endurecimento para release, adocao e manutencao continua do acervo

**Meta**: preparar publicacao consistente, onboarding e manutencao continua do pacote e do acervo oficial consolidado.

**Entregas**:

- exemplos completos por fluxo em `examples/` ou area equivalente;
- estrategia de versionamento semantico para mudancas em schemas e contratos;
- pipeline de `CI` para build, lint, typecheck, testes e verificacao documental;
- guia de migracao para mudancas quebradoras e rotina de atualizacao por nota tecnica;
- fixtures reaproveitaveis de importacao e exportacao de XML e snapshots operacionais para regressao;
- runbooks de recuperacao e continuidade para homologacao, incluindo equivalentes do que o emissor legado tratava como importacao, exportacao, `backup` e restauracao, sem transformar isso em dependencia do runtime;
- matriz viva de cobertura entre fonte oficial, fluxo suportado, lacuna conhecida, estado, ambiente e fase do roadmap;
- politica de atualizacao para tabelas auxiliares e informes tecnicos com cadence propria, separando mudancas de dados externos das mudancas de contrato runtime;
- watchlist editorial e tecnica para familias paralelas do portal nacional e para hosts estaduais ainda sem fechamento.

**Subfrentes obrigatorias**:

- `CI`, release e verificacao documental;
- exemplos e runbooks de adocao;
- manutencao do acervo oficial;
- politica de dados auxiliares e watchlists permanentes.

**Gates de validacao**:

- o processo de release precisa validar runtime e documentacao;
- nenhuma mudanca externa recorrente pode depender apenas de memoria informal da equipe.

**Criterio de saida**: pacote pronto para publicacao recorrente, consumo controlado por integradores externos e manutencao continua do acervo oficial sem fragmentacao de backlog.

## Levantamento de lacunas para producao: `NF-e`, `NFC-e` e `MDF-e`

**Data de referencia**: `2026-10-10`. Este levantamento descreve a prontidao observavel no repositorio, nao uma autorizacao para transmitir documentos fiscais reais. Uma spec com todas as tasks fechadas prova a entrega daquele recorte; nao prova operacao ponta a ponta em producao.

### `NF-e`

- **Base presente**: facades para criacao, serializacao, assinatura, transporte SOAP, autorizacao em homologacao, consulta/manutencao, cancelamento, carta de correcao, inutilizacao e algumas operacoes de recibo e destinatario.
- **Bloqueios para producao**: `authorizeNFe` aceita autorizacao normal somente em `homologation`; em `production`, devolve apenas `contingency-boundary` para UFs roteadas a `SVC-AN`/`SVC-RS` e rejeita o restante. A boundary nao executa failover. A spec `021` segue aberta (`16/30`) para fechar o ciclo assincrono de recibo/protocolo. O transporte e as operacoes ainda precisam de um caminho normal de producao comprovado por servico, autorizador e UF.
- **Gate de saida**: provar `tpAmb=1` coerente com endpoint de producao; fechar submissao e retorno terminal/recibo/protocolo para `SP`; validar assinatura, TLS/certificado, rejeicoes e timeouts; executar homologacao ponta a ponta antes de um canario real aprovado pelo responsavel fiscal. A trilha de contingencia so conta como fechada quando houver comportamento operacional testado, nao apenas diagnostico.

### `NFC-e`

- **Base presente**: `authorizeNFCe` atende homologacao no cohort `SP + PR`; `generateNFCeSPQRCode` monta localmente URL de QR Code v3 para `SP` em homologacao e producao.
- **Bloqueios para producao**: `authorizeNFCe` rejeita `production`; a URL de QR Code de producao nao autoriza a NFC-e nem prova consulta publica funcional. `DANFE NFC-e`, contingencia `offline` e administracao/credenciamento de `CSC` continuam fora do runtime. A spec `015` ainda possui uma validacao aberta (`26/27`). O helper exigir `CSC` e uma decisao local do SDK; o manual oficial v3 nao exige CSC para compor a URL.
- **Gate de saida**: fechar autorizacao normal de `SP` em producao com `tpAmb=1`, assinatura e retorno verificaveis; validar a URL de QR Code contra a evidencia oficial/estadual e a consulta publica; decidir e testar a representacao `DANFE NFC-e` e a boundary operacional de `offline`; registrar credenciamento e credenciais como precondicoes externas. Promocao de outras UFs continua sendo gate separado.

### `MDF-e`

- **Base presente**: nao ha API operacional de MDF-e no root, nem familia dedicada de XSD em `xsd/`. As ocorrencias de `chMDFe` encontradas sao propriedades em dois eventos SUFRAMA e nao constituem suporte ao manifesto.
- **Bloqueios para producao**: o acervo ja contem referencias estaduais do [PR](../_sources/markdown/official/sped.fazenda.pr.gov.br/index-704e8b126d.md) e da [PB](../_sources/markdown/official/www.sefaz.pb.gov.br/info/documentos-fiscais/mdf-e/index-72e0d57492.md), mas ainda falta consolidar a curadoria normativa e a baseline de XSD/versoes aplicaveis em uma spec propria. Tambem faltam modelo canonico, serializacao e validacao XSD, assinatura, catalogo de servicos por UF/ambiente, transporte, parsing de retornos e ciclo operacional. Autorizacao, consulta, encerramento, cancelamento, eventos e contingencia ainda precisam ter escopo e cobertura definidos.
- **Gate de saida**: abrir uma trilha/spec separada que escolha versoes, UFs e operacoes suportadas; internalizar fontes oficiais; implementar e testar o fluxo homologado completo; depois validar producao com autorizacao e credenciais externas aprovadas. MDF-e nao deve ser contado como cobertura por causa de tipos de eventos que apenas referenciam sua chave.

### Ordem de fechamento

1. Fechar `NF-e` de `SP` em producao, incluindo recibo/protocolo e contingencia executavel.
2. Fechar `NFC-e` de `SP` em producao, separando autorizacao, QR Code, `DANFE NFC-e` e contingencia `offline`.
3. Iniciar a trilha de descoberta e especificacao de `MDF-e`; nao existe baseline runtime para promover.

## Backlog imediato recomendado

- fechar assinatura expandida, `tpAmb`, recibo/protocolo e gates de `homologacao`/`producao` como precondicoes tecnicas para o baseline paulista;
- transformar `SP` no primeiro eixo de fechamento de `100%` em codigo para `NF-e` e `NFC-e`, incluindo `CSC`, `QR Code`, `DANFE NFC-e`, contingencia e deltas operacionais locais;
- consolidar num unico inventario tecnico as `NTs`, informes, FAQ, cadeia de certificados, tabelas externas e demais artefatos auxiliares que afetam diretamente o caminho paulista ate `producao`;
- tratar `PR`, `MS`, `PB`, `CE`, `SC` e `RJ` como segunda onda de expansao, depois que `SP` estiver tecnicamente fechado;
- manter familias paralelas como `NFGas`, `NFAg` e `NF-e ABI` em observacao arquitetural sem disputar o backlog imediato de `SP`.
- desdobrar as proximas expansoes tecnicas em slices menores e additive, usando o anexo de recortes funcionais prioritarios como ponte entre `RTM-*` e novas specs.

## Riscos principais

- tratar `100%` apenas como leitura do acervo e nao como fechamento real de codigo para `SP` ate `producao`;
- deixar UFs sem host estadual dedicado invisiveis no backlog por depender apenas da camada nacional;
- misturar regra normativa com comportamento de transporte e degradar manutencao;
- depender de validacao apenas documental sem fixtures XML e testes de interoperabilidade;
- subdimensionar capacidades de pos-transmissao e tratar polling, consulta, contingencia e exportacao de XML como detalhes opcionais;
- confundir ergonomia do emissor legado com obrigacao de reproduzir uma aplicacao completa dentro do pacote;
- misturar atualizacao de tabelas auxiliares e informes tecnicos com alteracoes de contrato runtime, gerando releases mais quebradoras do que o necessario;
- ignorar familias documentais paralelas do portal nacional e descobrir tarde demais que o nucleo ficou especifico demais para a evolucao futura do SDK;
- manter falhas de conversao ou hosts pendentes sem dono claro, gerando falsa sensacao de cobertura total.

## Indicadores de progresso

- percentual das features oficiais de `SP` com artefato executavel em codigo e gate automatizado correspondente;
- percentual do caminho `homologacao` -> `producao` coberto por `tpAmb`, endpoint, contrato, fixture e runbook;
- quantidade de features oficiais de `NFC-e` paulista ainda mantidas apenas como boundary documental;
- percentual de hosts sob `docs/_sources/markdown/official/` com status de cobertura definido;
- percentual de UFs com evidencia estadual capturada, revisada e reconciliada por ambiente;
- percentual de ambientes com boundary explicita, dependencia externa declarada e fase de implantacao definida;
- quantidade de fluxos fim a fim suportados em homologacao;
- percentual de operacoes com fixture XML valido e teste automatizado;
- numero de familias de schema com tratamento estavel no manifesto gerado;
- tempo medio entre publicacao de `NT` ou informe relevante e sua classificacao no backlog tecnico correspondente.

## Convergencia documental

- O planejamento canonico passa a existir apenas neste arquivo.
- Qualquer backlog, priorizacao por fase, cobertura por UF, taxonomia de ambientes ou watchlist de mudancas deve apontar para este roadmap.
- O [Indice documental](../index.md) passa a apontar este roadmap como porta de entrada para planejamento, cobertura por UF, ambientes e deltas recentes.

## Leitura complementar

- [Catalogo de capacidades do SDK](../capacidades-sdk.md)
- [Matriz de cobertura do SDK](./coverage-matrix.md)
- [Topicos oficiais e destino no roadmap](./topicos-oficiais.md)
- [Inventario de hosts oficiais](./hosts-oficiais.md)
- [UFs e ambientes observaveis](./ufs-ambientes.md)
- [Implementacao e cobertura por spec](./specs-implementacao.md)
- [Documentos oficiais convertidos do Portal Nacional da NF-e](../documentos-oficiais-portal-nfe.md)
- [Recorte promovivel de NFC-e](./nfce-operacional-promovivel.md)
- [Proximas iteracoes recomendadas](./proximas-iteracoes-recomendadas.md)
- [Recortes funcionais prioritarios](./recortes-funcionais-prioritarios.md)
