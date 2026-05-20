# Inventario de Hosts Oficiais

## Objetivo

Listar todos os hosts presentes em `docs/_sources/markdown/official/` e registrar o status canonico de captura e consolidacao usado pelo roadmap.

## Status usados

- `consolidado`: host ja absorvido editorialmente como base primaria ou complementar de planejamento.
- `capturado`: host presente no acervo convertido, mas ainda dependendo de fechamento editorial mais fino.
- `capturado-com-falha`: host presente no acervo, mas com falha de conversao ou captura relevante ainda aberta.

## Inventario por host

| Host ou hub | Papel no acervo oficial | Status canonico | UFs ou escopo principal | Sinais operacionais observados | Ambientes e superficies ja visiveis | Fase-alvo inicial |
| --- | --- | --- | --- | --- | --- | --- |
| `www.nfe.fazenda.gov.br` | Portal nacional principal | `consolidado` | Nacional | Consulta resumida, disponibilidade, `EPEC`, manifestacao, servicos web, FAQ, estatisticas e downloads | `homologacao`, `producao`, ambiente nacional, `SVC-AN`, area restrita e consulta publica | Fase 1 |
| `www1.sped.fazenda.gov.br` | Documentos auxiliares e superficies correlatas do portal | `capturado` | Nacional | Apoio documental e tabelas complementares | Superficies auxiliares do portal nacional | Fase 1 |
| `extracted` | Conteudo derivado de ZIP internalizado | `capturado` | Nacional e familias derivadas | Pacotes de schema, anexos e historicos derivados de downloads | Superficie documental, nao operacional | Fase 1 |
| `portal.fazenda.sp.gov.br` | Complemento estadual forte de `SP` | `capturado` | `SP` | Avisos operacionais, indisponibilidade, `SVC-AN`, produtor rural, suporte e consulta aberta | Consulta publica, contingencia observavel e suporte operacional | Fase 7 |
| `sistemas.sefaz.am.gov.br` | Portal estadual `AM` | `capturado` | `AM` | Projeto, credenciamento, integracao e manuais estaduais | Ambientes e onboarding estadual observaveis | Fase 7 |
| `sefaznet.ac.gov.br` | Portal estadual `AC` | `capturado` | `AC` | `NF-e` e `NFC-e` em superficies separadas, consulta completa, inutilizacao, disponibilidade, web services e credenciamento | Consulta completa, inutilizacao, area restrita e credenciamento | Fase 7 |
| `portalsped.fazenda.mg.gov.br` | Portal estadual `MG` | `capturado` | `MG` | Avisos operacionais, regras locais e familias paralelas | Evidencia de manutencao e superficie estadual complementar | Fase 7 |
| `portal.sefaz.pi.gov.br` | Portal estadual `PI` | `capturado` | `PI` | Host capturado, ainda sem sintese operacional fina no anexo estadual | A classificar | Fase 7 |
| `sped.fazenda.pr.gov.br` | Portal estadual `PR` | `capturado` | `PR` | Consulta, credenciamento, contingencia, `CSC`, `QR Code`, download de `DF-e` e catalogo tecnico de endpoints | `homologacao`, `producao`, `SVC-RS`, consulta publica e superficies `NFC-e` | Fase 7 |
| `www.receita.fazenda.df.gov.br` | Portal distrital | `capturado` | `DF` | Evidencia de tabela estadual `cBenef` e apoio normativo | Dados externos e apoio estadual | Fase 7 |
| `www.sef.sc.gov.br` | Portal estadual `SC` | `capturado` | `SC` | Politica estadual de consulta publica, autenticacao e download para contabilistas | Consulta resumida publica, consulta completa autenticada e download `DF-e` | Fase 7 |
| `www.sefa.pa.gov.br` | Portal estadual `PA` | `capturado` | `PA` | Host capturado, ainda sem sintese operacional fina no anexo estadual | A classificar | Fase 7 |
| `www.sefaz.ba.gov.br` | Portal estadual `BA` | `capturado` | `BA` | Host capturado, ainda sem sintese operacional fina no anexo estadual | A classificar | Fase 7 |
| `www.sefaz.ms.gov.br` | Portal estadual `MS` | `capturado` | `MS` | Credenciamento online, consulta publica, inutilizacao, credenciados, web services e catalogo tecnico rico | `homologacao`, `producao`, consulta publica, credenciamento e endpoints por ambiente | Fase 7 |
| `www.sefaz.mt.gov.br` | Portal estadual `MT` | `capturado` | `MT` | Consulta de inutilizacao por faixa, FAQ e pos-autorizacao observaveis | Consulta publica e superficie de apoio operacional | Fase 7 |
| `www5.sefaz.mt.gov.br` | Superficie complementar `MT` | `capturado` | `MT` | Superficie complementar do mesmo dominio operacional | A reconciliar com o host principal | Fase 7 |
| `www.sefaz.pb.gov.br` | Portal estadual `PB` | `capturado` | `PB` | Consulta `NFC-e`, geracao de `CSC`, consulta resumida/completa, cancelamento, inutilizacao, `XML` e credenciamento | Consulta do consumidor, pos-autorizacao, credenciamento e superficies auxiliares | Fase 7 |
| `www.sefaz.pe.gov.br` | Portal estadual `PE` | `capturado` | `PE` | Portal corporativo e servicos empresariais relacionados ao ecossistema fiscal | A classificar por fluxo | Fase 7 |
| `www.sefaz.rr.gov.br` | Portal estadual `RR` | `capturado` | `RR` | Consultas ligadas a `NF` e `NFC-e`, com sinal mais forte de verificacao operacional do que de onboarding tecnico | Consultas publicas pontuais | Fase 7 |
| `www.sefin.ro.gov.br` | Portal estadual `RO` | `capturado` | `RO` | Credenciamento como precondicao obrigatoria e onboarding operacional | Habilitacao/credenciamento estadual | Fase 7 |
| `www.to.gov.br` | Portal estadual `TO` | `capturado` | `TO` | Host capturado, ainda sem sintese operacional fina no anexo estadual | A classificar | Fase 7 |
| `goias.gov.br` | Portal estadual `GO` | `capturado` | `GO` | Evidencia estadual relevante para `QR Code` de `NFC-e` e deltas locais | Delta estadual de consulta/`QR Code` | Fase 7 |
| `nfe.sefaz.ce.gov.br` | Host estadual `CE` com falha registrada | `capturado-com-falha` | `CE` | Consulta, inutilizacao, empresa, `EPEC`, credenciamento, validacao XML e web services ja aparecem editorialmente, mas a captura raiz continua falha | Consulta publica, contingencia, catalogo tecnico e credenciamento | Fase 7 |
| `nfe.sefaz.se.gov.br` | Host estadual `SE` com falha registrada | `capturado-com-falha` | `SE` | Falha aberta sem sintese operacional suficiente | A classificar apos recuperar captura | Fase 7 |
| `www.fazenda.rj.gov.br` | Host estadual `RJ` com falha parcial registrada | `capturado-com-falha` | `RJ` | Consulta unificada de `DF-e` e sinal publico de `EPEC` para chave inexistente | Consulta publica transversal a multiplos documentos | Fase 7 |
| `www4.fazenda.rj.gov.br` | Superficie complementar `RJ` | `capturado` | `RJ` | Superficie de apoio estadual complementar | A reconciliar com o host principal | Fase 7 |
| `www.sefaz.ap.gov.br` | Host estadual `AP` com falha registrada | `capturado-com-falha` | `AP` | Falha aberta sem sintese operacional suficiente | A classificar apos recuperar captura | Fase 7 |

## Hosts ainda exigindo reconciliacao editorial mais forte

- Os hosts com falha aberta `AP`, `CE`, `RJ` e `SE` continuam com dono explicito no roadmap e nao contam como cobertura estadual fechada.
- Hosts complementares como `www1.sped.fazenda.gov.br`, `www4.fazenda.rj.gov.br` e `www5.sefaz.mt.gov.br` devem ser reconciliados com o host principal antes de qualquer promocao de fase.
- A ausencia de hosts dedicados para `AL`, `ES`, `MA`, `RN` e `RS` continua aparecendo no `ROADMAP.md` como lacuna real de cobertura oficial por UF.

## Observacao de metodo

- Quando o host estadual ainda nao tiver sintese operacional fina no acervo editorial, este anexo registra `a classificar` em vez de inferir capacidades nao comprovadas.
- Quando houver sinais fortes de consulta, credenciamento, contingencia ou web services no dossie estadual, eles aparecem aqui como superficie observada, mesmo que a UF ainda nao esteja `estadual-fechada`.