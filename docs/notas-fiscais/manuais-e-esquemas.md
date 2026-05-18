# Manuais e Esquemas

## Escopo

Esta pagina consolida o conjunto normativo principal internalizado no repositorio para NF-e e NFC-e, cobrindo manuais, anexos, contingencia, QR Code, boas praticas e esquemas XML.

## Manuais nacionais consolidados

### MOC 7.0 de NF-e e NFC-e

- O Manual de Orientacao ao Contribuinte permanece como base principal de integracao entre sistemas das Secretarias de Fazenda e sistemas emissores.
- O manual vem acompanhado por anexo de leiaute e regras de validacao.
- O conjunto tambem preserva anexo tecnico para DANFE e codigo de barras.

### Outros manuais nacionais absorvidos

- Manual de especificacoes tecnicas do DANFE NFC-e e QR Code versao 6.0.
- Manual de especificacoes da contingencia offline para NFC-e versao 2.0.
- Manual de boas praticas no desenvolvimento de emissor de NFC-e BP 2018.001 versao 1.0.
- Manual de utilizacao da Sefaz Virtual do Ambiente Nacional.
- Manual de usuarios da Sefaz Virtual RS.
- Manual do Emissor de NF-e.
- Manual de contingencia da NF-e versao 1.01.

### Familias documentais adicionais presentes

- Manual de Orientacao do Contribuinte da NFGas com visao geral `v1.00f`, anexo de leiaute e regras de validacao `v1.00f` e especificacao da `DANFGas`.
- Manual de Orientacao do Contribuinte da NF-e ABI com visao geral `v1.00` em minuta e anexo de leiaute e regras de validacao `v2.00` em minuta; a propria visao geral ja posiciona um `Anexo II` para `DANFE-ABI` e codigo de barras, mesmo quando essa peca ainda nao aparece isolada no acervo convertido.
- Manual de Orientacao do Contribuinte da NFAg com visao geral `v1.00k`, anexo de leiaute e regras de validacao `v1.00k` e documento auxiliar `DANFAG` `v1.01`.

### Estrutura editorial das familias manuais

- A familia principal de NF-e e NFC-e continua organizada como um tronco unico: `MOC`, `Anexo I` de leiaute e validacao, `Anexo II` de DANFE e codigo de barras, `Anexo III` de contingencia NF-e e `Anexo IV` de contingencia NFC-e.
- As familias paralelas de `NFGas`, `NFAg` e `NF-e ABI` repetem esse mesmo padrao com documento de visao geral, anexo de leiaute e, quando aplicavel, documento auxiliar proprio.
- No caso da `NF-e ABI`, a minuta de visao geral ja declara explicitamente o `Anexo II` de `DANFE-ABI` e codigo de barras, o que indica uma familia manual desenhada para espelhar o tronco principal mesmo antes de toda a serie aparecer convertida como arquivos separados.
- Isso indica que a base oficial ja nao trata apenas NF-e e NFC-e como casos isolados: ela preserva um modelo editorial replicavel para novos documentos fiscais eletronicos.

### Contingencia

- O material consolidado cobre contingencia de NF-e.
- O material consolidado tambem cobre contingencia offline de NFC-e.
- No caso da `NF-e`, o anexo de contingencia tambem explicita a arquitetura de autorizadores virtuais e contingenciais, separando `SVAN`, `SVRS`, `SVC-AN` e `SVC-RS` e a distribuicao das UFs entre essas estruturas.
- Esse mesmo material liga a leitura normativa ao comportamento tecnico observavel: ativacao da `SVC` pela UF de origem, uso de `tpEmis` `6` ou `7` para contingencia e dependencia de catalogos publicos de disponibilidade e web services dos autorizadores virtuais.
- Esses artefatos sustentam a leitura de fallback operacional e o tratamento de indisponibilidade.

### DANFE NFC-e e QR Code

- A base interna inclui o manual tecnico de DANFE NFC-e e QR Code na versao 6.0.
- Esse material e central para validacao de representacao visual, impressao simplificada e regras de consulta do consumidor.
- O proprio manual detalha parametros da URL do `QR Code` para emissao `online` e `offline`, alem do conceito e da geracao do `hash` usado na consulta publica.
- A trilha documental tambem preserva o elo com a administracao do `CSC`, incluindo manual especifico do web service de Codigo de Seguranca do Contribuinte, o que ajuda a conectar impressao, consulta e provisao do segredo operacional por UF.

### Boas praticas de emissor NFC-e

- O manual de boas praticas explicita expectativas sobre software, hardware e meios de comunicacao usados na geracao, transmissao, autorizacao, impressao e guarda.
- Esse recorte ajuda a separar obrigacao normativa de expectativa de qualidade operacional.

### Credenciamento, comunicacao e assinatura

- O manual de usuarios da `Sefaz Virtual RS` nao atua apenas como guia de acesso: ele preserva anexos tecnicos para conexao segura `SSL`, obtencao de `WSDL`, consumo de web services e processo de assinatura digital.
- A propria sequencia de testes sugerida pelo manual organiza um fluxo tecnico explicito de emissao: XML bem formado, validacao de schema, assinatura digital, autenticacao mutua de servidores e comunicacao com os web services de homologacao.
- O mesmo manual tambem deixa observaveis requisitos concretos de certificado: emissao na cadeia `ICP-Brasil`, presenca de `CNPJ` na extensao apropriada, instalacao da cadeia de `AC` do autorizador e verificacao manual da conexao antes do consumo programatico dos servicos.
- Esse material funciona como ponte entre o `MOC`, os schemas e a integracao efetiva, porque desce do nivel normativo para requisitos de transporte, certificados e interoperabilidade.

### Autorizadores virtuais e emissor legado

- O manual de utilizacao da `Sefaz Virtual do Ambiente Nacional` agrega outra camada que o repositorio ainda tratava de forma implicita: ele orienta Secretarias de Fazenda e empresas participantes sobre os criterios tecnicos adotados nos ambientes de homologacao e producao da `SVAN`.
- O manual do emissor legado de `NF-e`, por sua vez, documenta instalacao, cadastro de emitente, fluxo normal e fluxo em contingencia, validacao, assinatura, transmissao, cancelamento, importacao, exportacao e rotinas de `backup` e restauracao.
- Esse par de artefatos e relevante editorialmente porque preserva a memoria operacional de duas camadas hoje menos centrais, mas ainda uteis para compreender autorizadores virtuais, onboarding historico e ergonomia pratica de emissao assistida por aplicativo.

## Esquemas e anexos

### Esquemas XML

- A camada nacional consolidada preserva os pacotes XML vigentes e seus artefatos derivados.
- Essa base sustenta as familias de schema usadas no pacote e nas features do repositorio.

### Pacotes vigentes absorvidos

- `NFGas` pacote de liberacao `1.00e`, publicado em `07/04/2026`.
- `NFAg` pacote de liberacao `1.00j`, publicado em `07/04/2026`.
- `NF-e/NFC-e` pacote de liberacao `010c`, vinculado a `NT 2022.002 v1.30`, publicado em `26/03/2026`.
- Schema de eventos da `NT 2025.002 v1.30` para RTC, publicado em `07/10/2025` e atualizado em `30/10/2025`.
- Evento de Averbação `v1.01`, atualizado em `30/04/2025`.
- Evento de Conciliação Financeira, publicado em `30/07/2024`.
- Evento de Insucesso na Entrega, publicado em `26/04/2024`.
- Distribuição de DF-e `v1.03`, publicada em `23/06/2022`.
- Consulta GTIN `NT 2022.001 v1.00`, publicada em `31/05/2022`.
- Evento Comprovante de Entrega, publicado em `19/05/2021` e atualizado em `15/06/2021`.
- Evento Ator Interessado na NF-e Transportador, publicado em `28/01/2021`.
- Evento Cancelamento por Substituição da NFC-e, atualizado em `21/12/2018`.
- Evento Cancelamento de NF-e e NFC-e, atualizado em `21/12/2018`.
- Evento Suframa Vistoria `v1.01`, publicado em `25/11/2015`.
- Evento Prorrogacao da Industrializacao `1.0`, publicado em `27/11/2015`.
- Evento Suframa Internaliza `v1.01`, publicado em `26/01/2015`.
- Evento Carta de Correcao Eletronica `v1.01`, publicado em `30/05/2014`.
- Evento EPEC `v1.01`, publicado em `30/05/2014`.
- Evento Generico `v1.01`, atualizado em `30/05/2014`.
- Evento EPEC da NFC-e `v1.00`, publicado em `07/05/2014`.
- Evento Manifesta Destinatário `v1.01`, publicado em `30/05/2014`.

### Familias funcionais de esquemas

- `Leiaute principal`: pacotes `010c`, `010b`, `010a`, `9q`, `9p`, `9o`, `9n`, `9m`, `9k`, `9j` e `9i` representam a trilha de evolucao da estrutura principal de NF-e e NFC-e.
- `Eventos de pos-autorizacao`: cancelamento, carta de correcao, comprovante de entrega, ator interessado transportador, conciliacao financeira, insucesso na entrega e manifestacao do destinatario.
- `Eventos setoriais`: Suframa Vistoria, Suframa Internaliza, prorrogacao da industrializacao, averbação e EPEC.
- `Consultas e distribuicao`: consulta GTIN, consulta de situacao e distribuicao de DF-e.
- `Documentos paralelos`: familias de `NFGas` e `NFAg`, que sinalizam extensao do modelo de schema alem da NF-e classica.

### Leitura editorial dos esquemas

- Os pacotes de esquemas absorvidos nao servem apenas como arquivo tecnico; eles delimitam familias de leiaute, eventos e validacoes que orientam a camada manual do SDK.
- NF-e e NFC-e compartilham parte importante dessa base, mas o repositorio tambem preserva esquemas paralelos de dominios proximos como NFGas, NFAg e eventos complementares.
- O valor editorial aqui esta em identificar familias e suas relacoes, nao em reproduzir integralmente o inventario de cada arquivo XSD.

### Linha historica preservada

- A base interna tambem preserva versoes anteriores e de homologacao, o que e util para leitura de compatibilidade e regressao historica.
- Entre os exemplos mais relevantes estao as familias `010b`, `010a`, `9q`, `9p`, `9o`, `9n`, `9m`, `9k`, `9j` e `9i`, alem dos pacotes antigos `6j`, `6g`, `5f`, `5d`, `5b`, `5a`, `4`, `3a` e `2`.
- A trilha de homologacao ainda guarda pacotes como `6e`, `6f`, `6i`, `006pre`, `006preC` e `101a` para DPEC, o que ajuda a reconstituir a genealogia tecnica do projeto.
- Isso permite rastrear a evolucao de leiaute sem poluir os dossies principais com inventario bruto.

### Conteudo extraido de ZIP

- O repositorio ja absorve material extraido de ZIP quando ele agrega leitura navegavel ou historico normativo relevante.
- O exemplo mais explicito consolidado nesta rodada e o conjunto de alteracoes de schemas da familia `PL_004`.
- A politica editorial atual promove para leitura humana o que traz contexto normativo; arquivos puramente estruturais, como XSD crus, continuam servindo como base tecnica do pacote.

### Regra de promocao editorial

- HTML e PDF extraidos sao promovidos quando ajudam a explicar mudanca normativa, historico de schema ou contexto de versao.
- XML e XSD extraidos tendem a permanecer como base tecnica, exceto quando vierem acompanhados de explicacao normativa relevante.
- O conteudo extraido funciona como ponte entre o material cru dos pacotes e os dossies do repositorio.

## Familias documentais presentes

- MOC de NF-e e NFC-e.
- Anexos de leiaute e regras de validacao.
- Manuais de contingencia.
- DANFE e QR Code de NFC-e.
- Boas praticas de emissor.
- Manuais de SVAN e Sefaz Virtual RS.
- Manuais de emissor legado e transicao operacional.
- Manuais de NFGas, NF-e ABI e NFAg presentes na base documental nacional.
- Esquemas XML.
- Pacotes de eventos de pos-autorizacao e eventos setoriais.
- Pacotes de consulta, distribuicao e contingencia historica.
- Anexos e alteracoes de schemas extraidas de pacotes.

## Uso no repositorio

- Os manuais sustentam a leitura funcional e normativa dos dossies de NFe e NFC-e.
- Os esquemas sustentam a camada tecnica de tipos gerados e validacao estrutural.
- O conteudo extraido de ZIP preserva historico util para comparacao de familias de schema e mudancas relevantes.

## Categorias auxiliares absorvidas da secao Diversos

- Tabela de aliquotas da CBS, publicada em `12/05/2026`.
- Tabela de indice de biocombustivel do IBS e CBS, publicada em `24/04/2026`.
- Tabela de classificacao tributaria do IBS/CBS, publicada em `15/04/2026`.
- Tabela de meios de pagamento, publicada em `06/03/2026`.
- Tabela de credito presumido do IBS e CBS, publicada em `15/12/2025`.
- Tabela de classificacao da NFAg, publicada em `15/12/2025`.
- Tabela de combustiveis sujeitos a tributacao monofasica, publicada em `05/12/2025`.
- Tabela de NCM e `uTrib`, vigente a partir de `01/02/2026`.
- Tabela de FCP por UF, atualizada em `25/02/2025`.
- Tabela de municipios, publicada em `18/02/2025`.
- Tabela de codigo de produtos da ANP, publicada em `18/11/2024`.
- Tabela de CFOP com vigencia `24/04/2023`.
- Cadeias de certificados da infraestrutura `www1` e `www`.

### Leitura editorial das categorias auxiliares

- Essas tabelas e cadeias nao funcionam como manuais autonomos, mas como insumos operacionais para validacao, parametrizacao tributaria e confianca na comunicacao com os ambientes autorizadores.
- Em especial, as cadeias de certificados complementam a trilha de `SSL`, autenticacao mutua e consumo de web services documentada nos manuais de integracao e credenciamento.

## Limites editoriais atuais

- O repositorio ainda nao transformou cada manual e cada anexo em paginas editoriais especializadas.
- A consolidacao atual prioriza absorver a estrutura e os pontos normativos principais sem reproduzir em excesso o texto integral dos artefatos.
- Quando um manual ou anexo tiver impacto direto em uma feature, ele pode ser promovido para um dossie tematico proprio.
