Projeto Nota Fiscal
Eletrônica do Gás

Manual de Orientação do Contribuinte

Anexo I – Leiaute e Regras de Validação da NFGas

Versão 1.00f – 11 de março de 2026

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00f

Sumário

Histórico de Alterações / Cronograma .......................................................................... 3
1
Introdução ............................................................................................................. 4
2  Regras de Validação da NFGas ............................................................................ 5
2.1  Regras de Validação Básicas do Serviço ....................................................... 5
2.2  Regras de Validação Específicas da NFGas .................................................. 5
Eventos de Marcação originados pela NFGas .............................................. 24
2.3
2.4
Procedimentos  para  Cancelar  ou  Alterar  NFGas  faturadas  por  terceiro
relacionadas e marcadas com evento da NFGas de Faturamento Conjunto ........... 25
2.5  Relação de CFOPs permitidos na NFGas .................................................... 26
Leiaute da NFGas................................................................................................ 27

3

Página 2 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00f

Histórico de Alterações / Cronograma

Versão

Histórico de atualizações

Implantação
Homologação

Implantação
Produção

1.00

1.00a

1.00b

1.00c

1.00d

1.00e

1.00f

  Elaboração do draft do MOC da NFGas

  Correções e novas regras de validação

  Padronização dos códigos dos campos de finalidade e tipo de

faturamento

  Criação da tag CFOP no grupo prod

  Grupo Agência vedado para nota agregadora

26/01/2026

02/03/2026





Inclusão de campos do tipo de operação e DFe referenciado nas
compras governamentais
Ajuste nas descrições das regras de compras gov

06/042026

04/05/2026

Página 3 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00f

1

Introdução

Este documento é parte integrante do Manual de Orientação do Contribuinte (MOC) e

tem por objetivo a definição do leiaute da NFGas, modelo 76.

O Manual de Orientação do Contribuinte 1.00 é composto pelos seguintes documentos:

  MOC – Visão Geral

  MOC – Anexo I – Leiaute e Regras de Validação da NFGas

  MOC – Anexo II – Manual de Especificações Técnicas do DANFGAS

Página 4 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

2  Regras de Validação da NFGas

As validações descritas a seguir aplicam-se a NFGas enviada ao serviço de recepção síncrono (MOC Visão Geral - item 4.3).

2.1  Regras de Validação Básicas do Serviço

Deverão ser aplicadas as validações gerais conforme quadro abaixo (MOC Visão Geral – Item 4):

Grupo
D
E

Descrição

Validação do Certificado de Assinatura
Validação da Assinatura Digital

2.2  Regras de Validação Específicas da NFGas

#

Regra de Validação

Aplic.

cStat.

Efeito  Mensagem

Validações Gerais

G01

G02

G03

G04

G05

G06

G07

Tipo do ambiente da NFGas (tag: ide/tpAmb) difere do ambiente do Web Service

Código da UF do Emitente (tag: ide/cUF) difere da UF Autorizadora

Observação: Essa rejeição ocorre também quando a UF não está habilitada no
ambiente da SEFAZ Virtual
Sigla da UF do Emitente (tag: emit/UF) difere da UF Autorizadora

Se forma de emissão da NFGas = 1 (Normal):
dhCont e xJust não devem ser informados
Se forma de emissão (tag: ide/tpEmis) da NFGas = 2 (Contingência Off-Line):
dhCont e xJust devem ser informados
Se Data de entrada em contingência (tag: ide/dhCont) estiver informada, esta deve ser
menor ou igual à data de emissão
Se informado número do Site de autorização diferente de Normal (nSiteAutoriz > 0)
verificar se o Site do Autorizador corresponde ao que foi informado
Observação: O número do Site só deve ser diferente de zero para ambientes de
autorização em múltiplos Sites (a relação do número identificador de cada Site deverá
ser disponibilizada pelo Autorizador)

Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

Obrig

Obrig.

252

226

247

415

416

417

418

Rej.

Rej.

Rejeição: Ambiente informado diverge do Ambiente de recebimento

Rejeição: Código da UF do Emitente diverge da UF autorizadora

Rej.

Rejeição: Sigla da UF do Emitente diverge da UF autorizadora

Rej.

Rej.

Rej.

Rej.

Rejeição: Data e Justificativa de entrada em contingência não devem ser
informadas para tipo de emissão igual a Normal.
Rejeição: Data e Justificativa de entrada em contingência devem ser
informadas
Rejeição: Data de entrada em contingência posterior ou igual a data de
emissão.
Rejeição: Site de autorização inválido

Página 5 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

G08

G09

G10

G11

G12
G13

G14

G15

G16

G17

G18
G19

G20

G21

G22

G23

G24

Se forma de emissão (tag: ide/tpEmis) da NFGas = 2 (Contingência Off-Line):
Rejeitar se Tipo da NFGas for diferente de 0 (Normal)
Campo "ID" inválido:
- Falta literal "NFGas"
- Chave de acesso do campo ID difere da concatenação dos campos correspondentes
Verificar se Ano da chave de acesso é inferior a 2026

Dígito Verificador inválido da Chave de acesso resultante da concatenação dos
campos correspondentes

Obrig.

Obrig.

Obrig.

Obrig.

419

227

421

253

Validações do Emitente

Rej.

Rejeição: Emissão Off-line só é permitida para NFGas do tipo Normal

Rej.

Rejeição: Erro na composição do Campo ID

Rej.

Rejeição: Ano da NFGas informado na chave de acesso inválido

Rej.

Rejeição: Digito Verificador da chave de acesso composta inválido

Validar CNPJ Emitente (dígito controle, zeros ou nulo)
IE do Emitente deve ser informada (zeros ou nulo)

Validar IE Emitente (erro no dígito de controle)
Obs.: Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o
acréscimo de zeros não significativos previstos na definição do formato da IE se
necessário.

Exemplo: IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser
padronizada para 00130000019, com o acréscimo dos zeros não significativos
necessários para a validação do dígito verificador.
Emitente não credenciado para emissão de NFGas

Acessar Cadastro de Emitentes (CCC, Chave: UF, IE):
- IE emitente não cadastrada
IE do Emitente deve estar vinculada ao CNPJ (tratar Regime Especial de IE única)

Emitente em situação irregular perante o Fisco
Município do Emitente diverge da UF (verificar se as 2 posições da esquerda do
código de município que identifica o código da UF é compatível com a sigla da UF
informada)
Código do Município Emitente inexistente (Tabela Municípios do IBGE)

Obrig.
Obrig.

Obrig.

207
229

209

Rej.
Rej.

Rejeição: CNPJ do emitente inválido
Rejeição: IE do emitente não informada

Rej.

Rejeição: IE do emitente inválida

Obrig.

Obrig.

Obrig.

Obrig.
Obrig.

203

230

231

205
407

Rej.

Rejeição: Emissor não habilitado para emissão da NFGas

Rej.

Rejeição: IE do emitente não cadastrada

Rej.

Rejeição: IE do emitente não vinculada ao CNPJ

Rej.
Rej

Rejeição: Emitente em situação irregular perante o Fisco
Rejeição: Código de Município diverge da UF do Emitente da NFGas

Obrig.

408

Rej.

Rejeição: Município do Emitente inexistente

Validações do Destinatário

Se CNPJ Destinatário informado:
- Validar CNPJ Destinatário (dígito de controle, zeros)
Se CPF Destinatário informado:
- Validar CPF Destinatário (dígito de controle, zeros)
Se idOutros informado:
- Não poderá ser informada IE Destinatário.
Município do Destinatário deve pertencer à UF (verificar se as 2 posições da esquerda
do código de município que identifica o código da UF é compatível com a sigla da UF
informada)

Obrig.

Obrig.

Obrig.

Obrig.

422

423

424

405

Rej.

Rejeição: CNPJ do Destinatário inválido

Rej.

Rejeição: CPF do Destinatário inválido

Rej.

Rejeição: IE não deve ser informada para Destinatário do tipo outros

Rej

Rejeição: Código de Município diverge da UF do Destinatário da NFGas

Página 6 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

G25

G26

G27

G28

G29

G30

G31

G32

G33

Código do Município do Destinatário deve existir (Tabela Municípios do IBGE)

Se IE Destinatário informada:
- Validar IE do Destinatário (erro no dígito de controle)
Observação: Antes da validação, a IE deverá ser normalizada, na aplicação da
SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato
da IE se necessário.
Se IE Destinatário informada:
Acessar Cadastro de Contribuinte da UF (Chave: IE Destinatário)
- IE deve estar cadastrada
Observação: desconsiderar a situação da IE perante o fisco
 Se IE e CNPJ Destinatário informados:
Acessar Cadastro de Contribuinte da UF (Chave: IE Destinatário.)
- IE deve estar vinculada ao CNPJ
Observação: desconsiderar a situação da IE perante o fisco
Se IE Destinatário = “ISENTO”
Acessar Cadastro de Contribuinte da UF
- Destinatário possui IE ativa na UF
Observação: Retornar a IE que está ativa e associada ao CNPJ

Obrig.

Obrig.

406

427

Rej.

Rej.

Rejeição: Município do Destinatário inexistente

Rejeição: IE do Destinatário inválida

Facult.

428

Rej.

Rejeição: IE do Destinatário não cadastrada

Facult.

429

Rej.

Rejeição: IE do Destinatário não vinculada ao CNPJ

Facult.

430

Rej.

Rejeição: IE do Destinatário não informada

Validações da Data de Emissão

Data/Hora de Emissão posterior a Data/Hora de Recebimento (o Ambiente Autorizador
deve considerar a hora local do emissor para a validação). A SEFAZ deve tolerar uma
diferença máxima de 5 minutos quando a data/hora de emissão for maior que a data
de recebimento, em função da sincronização de horário de servidores.
Se tipo de emissão for Normal (tag:tpEmis=1):
Data-Hora de Emissão com atraso superior a 120 horas em relação ao horário de
recepção na SEFAZ Autorizadora.
Exceção: A critério da UF, pode ser aceita NFGas com Data de Emissão muito
atrasada, desde que tenha sido emitido em contingência Off-Line (tag:tpEmis=2). A
NFGas transmitido para a SEFAZ Autorizadora após o prazo de 120 horas deve
retornar: cStat=”150- Autorizado Uso de NFGas, autorização fora de prazo”.

Obrig.

212

Rej.

Rejeição: Data/hora de emissão NFGas posterior a data/hora de
recebimento

Obrig.

228

Rej.

Rejeição: NFGas com Data-Hora de Emissão muito atrasada

Validações do Banco de Dados

Acessar BD NFGas (Chave: UF, CNPJ Emit, Modelo, Série, Nro):
 - Verificar Duplicidade de NFGas com diferença na Chave de Acesso
(Campo de Código Numérico difere)
Retornar a chave de acesso já autorizada, o número do protocolo e data de
autorização
[chNFGas: 99999999999999999999999999999999999999999999]
[nProt:9999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]
Acessar BD NFGas (Chave: UF, CNPJ Emit, Modelo, Série, Nro):
Verificar Duplicidade de NFGas
Retornar Protocolo e data de autorização.
[nProt:9999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD].
Observação: Esta validação leva em consideração o ambiente de autorização do DF-
e (tpEmis e nSiteAutoriz)

Obrig

539

Rej.

Rejeição: Duplicidade de NFGas, com diferença na Chave de Acesso
[chNFGas: 99999999999999999999999999999999999999999999]
[nProt:9999999999999999]
[dhAut: AAAA-MM-DDTHH:MM:SS TZD].

Obrig.

204

Rej.

Rejeição: Duplicidade de NFGas
[nProt:9999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD].

Página 7 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

G34

G35

G36

G37

G38

G39

G40

G41

G42

Verificar se NFGas está cancelada
Retornar Protocolo e data de autorização do evento de cancelamento.
[nProt:9999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]
Verificar se NFGas está substituída:
Retornar Protocolo e data de autorização do evento de substituição.
[nProt:9999999999999999][dhSubst: AAAA-MM-DDTHH:MM:SS TZD]

Obrig.

218

Rej.

Rejeição: NFGas já está cancelada na base de dados da SEFAZ.
[nProt:9999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD].

Obrig.

224

Rej.

Rejeição: NFGas já está substituída na base de dados da SEFAZ.
[nProt:9999999999999999][dhSubst: AAAA-MM-DDTHH:MM:SS TZD].

Validações da Substituição

Se o Tipo da NFGas = 3 (Substituição) (tag: finNFGas):
 - O grupo de informações da substituição (grupo: gSub) deve ser informado

Obrig.

411

Rej.

Rejeição: Grupo NFGas de Substituição deve ser informado para a
NFGas de Substituição

Se o Tipo da NFGas = 0 (Normal) (tag: finNFGas):
- O grupo de informações da substituição (grupo: gSub) NÃO deve ser informado

Obrig.

412

Rej.

Rejeição: Grupo NFGas de Substituição não deve ser informado para
NFGas Normal

Se Tipo da NFGas = 3 (Substituição) (tag: finNFGas) e informada chave de acesso da
NFGas substituída:
 - Validar chave de acesso da NFGas substituída.

Retornar motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano <
2026 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 76, Número
zerado, Tipo de emissão inválido, UF inválida ou DV inválido)
[Motivo: XXXXXXXXXXXX]
Se Tipo da NFGas = 3 (Substituição) (tag: finNFGas) e informada chave de acesso da
NFGas substituída:
- NFGas substituída não pode existir com diferença na Chave de Acesso

Retornar a chave de acesso já autorizada, o número do protocolo e data de
autorização da NFGas
[chNFGas: 99999999999999999999999999999999999999999999]
[nProt:9999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]
Se Tipo da NFGas = 3 (Substituição) (tag: finNFGas) e informada chave de acesso da
NFGas substituída:
- A NFGas substituída deve existir
Acesso BD NFGas (Chave: CNPJ Emit, Modelo, Série, Nro)

Observação: Esta validação leva em consideração o ambiente de autorização do DF-
e (nSiteAutoriz)

Se Tipo da NFGas = 3 (Substituição) (tag: finNFGas) e informada chave de acesso da
NFGas substituída:
- A NFGas substituída não pode estar cancelada
Se Tipo da NFGas = 3 (Substituição) (tag: finNFGas) e informada chave de acesso da
NFGas substituída:
- A NFGas substituída não pode estar substituída

Obrig.

414

Rej

Rejeição: Chave de acesso da NFGas substituída inválida
[Motivo: XXXXXXXXXXX]

Obrig.

206

Rej.

Rejeição: NFGas substituída com diferença de Chave de Acesso
[chNFGas: 99999999999999999999999999999999999999999999]
[nProt:9999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]

Obrig

208

Rej

Rejeição: NFGas a ser substituída inexistente

Obrig.

210

Rej

Rejeição: NFGas a ser substituída não pode estar cancelada

Obrig.

211

Rej

Rejeição: NFGas a ser substituída não pode ter sido substituída
anteriormente

Página 8 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

Se Tipo da NFGas = 3 (Substituição) (tag: finNFGas):
- CNPJ do emitente da NFGas substituta deve ser igual ao informado na NFGas
substituída

Exceção: os casos de alteração do CNPJ da empresa por motivo de aquisição, fusão,
incorporação deve ser tratados no ambiente de autorização da NFGas
Se Tipo da NFGas = 3 (Substituição) (tag: finNFGas):
- Identificação do destinatário da NFGas substituta deve ser igual ao informado na
NFGas substituída (tags: CNPJ/CPF/idOutros)

Se o Tipo da NFGas = 3 (Substituição) (tag: finNFGas):
- A NFGas Substituída deve ser do mesmo tipo de faturamento (tag: tpFat) da NFGas
de Substituição

Obrig.

221

Rej.

Rejeição: CNPJ do emitente da NFGas substituta deve ser igual ao
informado na NFGas substituída

Obrig.

484

Rej.

Rejeição: Destinatário da NFGAS substituição deve ser igual a NFGAS
original

Obrig.

527

Rej.

Rejeição: NFGas substituída com tipo de faturamento diferente da NFGas
de Substituição

Validações do Tipo de Faturamento e da NFGas Anterior (itens)– Executar validações em todos os itens

Se tipo de faturamento da NFGas Normal (1) ou agregado (2)
(tag: tpFat):
- Rejeitar se informado grupo da Nota Agregadora em algum item (grupo:
gAgregadora)

Se tipo de faturamento da NFGas = 3 (Agregadora) (tag: tpFat):
O grupo da Nota Agregadora DEVE ser informado em todos os itens (grupo:
gAgregadora)

Observação: neste caso não deve existir nenhum item com o grupo gNormal
informado
Se o Tipo de Faturamento for Normal (1) OU Agregado (2) e o item possuir indicador
de devolução (tag: indDevolucao)

- Verificar se foi informada chave de acesso (chNFGasAnt) como atributo no
detalhamento dos Produtos e Serviços (grupo: det):

Obrig.

516

Rej.

Rejeição: Item com grupo da Nota Agregadora vedado para NFGas
Normal ou Agregada

Obrig.

531

Rej.

Rejeição: Item com grupo Normal vedado para NFGas Agregadora

Obrig.

238

Rej.

Rejeição: Chave de acesso anterior deve ser informada para item com
indicador de devolução

G43

G44

G45

G46

G47

G48

G49

Se o Tipo de Faturamento Agregador (3) para todos os itens:

Obrig.

266

Rej.

Rejeição: Chave de acesso anterior deve ser informada para item de nota
de Faturamento Agregado

- Verificar se foi informada chave de acesso (chNFGasAnt) como atributo no
detalhamento dos Produtos e Serviços (grupo: det):

G50

Se informada chave de acesso de NFGas anterior (tag: chNFGasAnt) no detalhamento
dos Produtos e Serviços (grupo: det):

Obrig.

242

Rej.

Rejeição: Rejeição: Chave de Acesso anterior inválida
[Motivo: XXXXXXXXX]

- Validar chave de acesso da NFGas anterior.
Retornar motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano <
2026 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 76, Número
zerado, Tipo de emissão inválido, UF inválida ou DV inválido)
[Motivo: XXXXXXXXXXXX]

Página 9 / 50

G51

G52

G53

G54

G55

G56

G57

G58

G59

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

Se informada chave de acesso de NFGas anterior (tag: chNFGasAnt) no detalhamento
dos Produtos e Serviços (grupo: det):
- NFGas anterior não pode existir com diferença na Chave de Acesso
Retornar a chave de acesso já autorizada, o número do protocolo e data de
autorização da NFGas

[chNFGas: 99999999999999999999999999999999999999999999]
[nProt:9999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]
Se informada chave de acesso de NFGas anterior (tag: chNFGasAnt) no detalhamento
dos Produtos e Serviços (grupo: det):
- A NFGas anterior deve existir
Acesso BD NFGas (Chave: CNPJ Emit, Modelo, Série, Nro)
Observação: Esta validação leva em consideração o ambiente de autorização do DFe
(nSiteAutoriz).
Se informada chave de acesso de NFGas anterior (tag: chNFGasAnt) no detalhamento
dos Produtos e Serviços (grupo: det):
 - A NFGas anterior não pode estar cancelada
Se informada chave de acesso de NFGas anterior (tag: chNFGasAnt) no detalhamento
dos Produtos e Serviços (grupo: det):
- A NFGas anterior não pode estar substituída
Se tipo de faturamento da NFGas for agregador (tpFat=3) e informada chave de
acesso de NFGas anterior (tag: chNFGasAnt) no detalhamento dos Produtos e
Serviços (grupo: det):
- A NFGas anterior deve ser do tipo de faturamento Agregada (tpFat=2)
Se informada chave de acesso da NFGas anterior (tag: chNFGasAnt):
- CNPJ do emitente da NFGas anterior deve ser igual ao informado na NFGas de
ajuste
Exceção: os casos de alteração do CNPJ da empresa por motivo de aquisição, fusão,
incorporação deve ser tratados no ambiente de autorização da NFGas

Obrig.

245

Rej.

Rejeição: NFGas anterior com diferença de Chave de Acesso
[chNFGas: 99999999999999999999999999999999999999999999]
[nProt:9999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]

Obrig

246

Rej

Rejeição: NFGas anterior inexistente

Obrig.

250

Rej

Rejeição: NFGas a anterior não pode estar cancelada

Obrig.

251

Rej

Rejeição: NFGas a anterior não pode ter sido substituída

Obrig.

532

Rej

Rejeição: NFGas a anterior deve ser do tipo de faturamento Agregado

Obrig.

255

Rej.

Rejeição: CNPJ do emitente da NFGas anterior deve ser igual ao
informado na NFGas

Código de Classificação (tag: cClass) informado inválido (Verificar tabela de códigos
de classificação, item 7.6 do MOC)
Valor do item (tag: vProd) difere de valor unitário (tag: vItem) * Quantidade Faturada
(tag: qFaturada) * Fator de Poder Calorífico (tag:fatorPCS, se informado) * Fator de
Correção (tag:fatorPTZ, se informado)

Obrig.

Obrig.

276

435

Rej.

Rej.

Rejeição: Código de classificação do item inexistente
[nItem: NNN]
Rejeição: Valor do item difere do calculado
[nItem: NNN]

Validações dos Itens da NFGas (Verificar em cada um dos itens)

vProd = vItem * qFaturada (* fatorPCS) (* fatorPTZ)

Observação: Considerar uma tolerância de R$ 0,05 para mais ou para menos.
Se tipo de faturamento da NFGas =1 (Normal) ou 2 (Agregado)
- Rejeitar se existir algum item no detalhamento de Produtos e serviços com cClass de
Faturamento Agregado

Observação: Ver indicadores da tabela cClass publicados no portal da NFGas

Obrig.

534

Rej.

Rejeição: Classificação de produto inválida para faturamento normal e
faturamento agregado
[nItem: NNN]

Página 10 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

G60

Se tipo de faturamento da NFGas =3 (Faturamento Agregado)
- Todos os itens devem ser do cClass de Nota Agregadora

Obrig.

535

Rej.

Rejeição: Todos os item devem ser do cClass de Faturamento Agregado
[nItem: NNN]

Observação: Ver indicadores da tabela cClass publicados no portal da NFGas

Validações dos Itens da NFGas (Tributos)

Aplicável somente para Tipo de Faturamento Normal (tpFat=1) e Tipo de Faturamento Agregado (tpFat=2)

Observação: O Tipo de Faturamento Agregador (tpFat=3) não possui tributação nos itens, todos os itens são referência a chaves de acesso de notas que estão sendo agregadas, portanto não há detalhamento de
valores ou tributos nesta nota.

Se CST de ICMS = 00, 10, 20, 70:
Verificar se Valor do ICMS corresponde ao Valor da base de cálculo X Alíquota.

Obrig.

444

Rej.

Rejeição: Valor do ICMS não corresponde à base de cálculo x alíquota
[nItem: NNN]

Observação: Considerar uma tolerância de R$ 0,10 para mais ou para menos.
Se CST de ICMS = 90 e informados dados do BC, pICMS e vICMS:
Verificar se Valor do ICMS corresponde ao Valor da base de cálculo X Alíquota.
Observação: Considerar uma tolerância de R$ 0,10 para mais ou para menos.
Se informado grupo de informações do PIS (grupo: PIS):
Verificar se Valor do PIS corresponde ao Valor da base de cálculo X Alíquota.

Observação: Considerar uma tolerância de R$ 0,10 para mais ou para menos.
Se informado grupo de informações do COFINS (grupo: COFINS):
Verificar se Valor do COFINS corresponde ao Valor da base de cálculo X Alíquota.
Observação: Considerar uma tolerância de R$ 0,10 para mais ou para menos.
Se informado grupo de informações do Taxa Regulatório (grupo: TxReg):
Verificar se Valor da Taxa corresponde ao Valor da base de cálculo X Alíquota.
Observação: Considerar uma tolerância de R$ 0,10 para mais ou para menos.
Se NÃO informado indicador SEM CST para o item (tag: indSemCST), o item DEVE
possuir CFOP
Se informado CFOP, verificar se é um CFOP válido para a NFGas
Ver tabela de CFOP permitidos no item 2.5 deste manual
Se informado indicador de SEM CST para o item (tag: indSemCST), o item NÃO pode
possuir CFOP
Se CST do IBS/CBS for informado, este deve existir na tabela de Código de Situação
Tributária (tag: IBSCBS/CST)
Se cClassTrib for informado, este deve existir na tabela de Classificação Tributária do
IBS/CBS (tag: IBSCBS/cClassTrib)
Verificar se o CST informado é compatível com o cClassTrib

Verificar se o cClassTrib informado (tag: IBSCBS/cClassTrib) possui indicador que não
permite ser informado nesse modelo de DFe
Se o CST informado possuir indicador que VEDA preenchimento do grupo de
informações específicas do IBS/CBS, este grupo NÂO DEVE estar informado (grupo:
gIBSCBS)

Obrig.

444

Rej.

Rejeição: Valor do ICMS não corresponde à base de cálculo x alíquota
[nItem: NNN]

Obrig.

443

Rej.

Rejeição: Valor do PIS não corresponde à base de cálculo x alíquota
[nItem: NNN]

Obrig.

445

Rej.

Rejeição: Valor do COFINS não corresponde à base de cálculo x alíquota
[nItem: NNN]

Obrig.

446

Rej.

Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

Obrig

540

433

541

311

312

313

388

314

Rejeição: Valor da Taxa Regulatória não corresponde à base de cálculo x
alíquota
[nItem: NNN]
Rejeição: CFOP é obrigatório para item com CST informado. [nItem:
NNN]
Rejeição: CFOP inválido. [nItem: NNN]

Rejeição: Vedada indicação de CFOP para item sem CST
[nItem: NNN]
Rejeição: CST informado inexistente

Rej.

Rej.

Rej.

Rej.

Rej.

Rejeição: Classificação Tributária informada inexistente

Rej.

Rejeição: Classificação Tributária incompatível com o CST informado

Rej.

Rej.

Rejeição: Classificação Tributária do IBS/CBS não permitida neste
modelo de DFe.
Rejeição: Grupo IBS/CBS não deve ser preenchido para o CST
informado

Página 11 / 50

G61

G62

G63

G64

G65

G66

G66a

G67

G68

G69

G70

G71

G72

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

G73

G74

Se  o  CST  informado  possuir  indicador  que  EXIGE  preenchimento  do  grupo  de
informações  específicas  do  IBS/CBS,  este  grupo  DEVE  estar  informado  (grupo:
gIBSCBS)
Exceção: Se o CRT informado pelo emitente for 1-Simples Nacional, 2- Simples
Nacional, excesso sublimite de receita bruta ou 4 -MEI, o grupo gIBSCBS NÃO será
exigido
Se informado grupo IBS de competência das Unidades Federadas (gIBSUF):

A alíquota de IBS da UF (pIBSUF) deverá ser:







0,1% para documento com data de emissão no ano de 2026. (Art. 343 da LC
214/25)
0.05% para documento com data de emissão no ano de 2027 e 2028. (Art.
344 da LC 214/25)
Alíquota de referência ou específica da UF a ser publicada para anos
posteriores a 2028.

Exceção: Se o cClassTrib possuir indicador de tributação regular o pIBSUF deve ser
igual a zero
Se a alíquota do IBS Estadual (tag: pIBSUF) for igual a zero:
Grupo de Redução de Alíquota do IBS Estadual NÃO DEVE SER informado (grupo:
gIBSUF/gRed)
Se a alíquota do IBS Estadual (tag: pIBSUF) for maior que zero:
Se CST informado possuir indicador que EXIGE informação de redução de alíquota
para o IBS Estadual ou informado grupo de compra governamental, o grupo gRed
DEVE estar informado
Exceção: A regra não se aplica para CST do IBS/CBS (tag: IBSCBS/CST)
que possui indicador que não permite a informação do IBS/CBS
Se informado grupo de Redução de Alíquota para IBS Estadual (gIBSUF/gRed):
Verificar se percentual de Redução de Alíquota (pRedAliq) é válido para o cClassTrib
informado (gIBSCBS/cClassTrib)
Se informado grupo de Redução de Alíquota para IBS Estadual (gIBSUF/gRed), a
Alíquota Efetiva (tag: pAliqEfet) deve ser o resultado de:
Se NÃO houver compra governamental (grupo gCompraGov não informado):
pAliqEfet = pIBSUF × (1 - pRedAliq /100).
Se houver compra governamental (grupo gCompraGov informado):
pAliqEfet = pIBSUF × (1 - pRedAliq /100) × (1 - pRedutor/100).

G75

G76

G77

G78

Observação: pRedutor é obtido no grupo gCompraGov

Exemplo: Redução de 40% na alíquota:
Alíquota vigente (A): 10%
Redução na alíquota (R): 40%
Redutor de compras governamentais (RG): 5%
Alíquota Efetiva (E):
E = A × (1 – R/100) × (1 – RG/100) = 5,7.

Obrig

315

Rej.

Rejeição: Grupo IBS/CBS deve ser preenchido para o CST informado

Obrig.

316

Rej.

Rejeição: Alíquota do IBS da UF inválida

337

Rej.

Rejeição: Grupo de redução de alíquota do IBS Estadual informado
indevidamente

Obrig.

366

Rej.

Rejeição: CST informado ou compras governamentais obriga informação
de redução de alíquota estadual

Obrig.

389

Rej.

Rejeição: Percentual de redução de alíquota da UF não é válido para
este cClassTrib

Obrig.

390

Rej.

Rejeição: Valor da Alíquota Efetiva do IBS da UF calculado
incorretamente

Página 12 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

G79

Se CST informado possuir indicador que VEDA a informação de redução de alíquota
para o IBS Estadual, o grupo gRed NÃO DEVE estar informado

Obrig.

367

Rej.

Rejeição: CST informado não permite informação de redução de alíquota
estadual

G80

G81

G82

G83

G84

G85

Exceção: Se Percentual de redução de alíquota em compra governamental
(tag:gCompraGov/pRedutor) informado, este grupo é exigido e pRed deve ser igual a
0.
Se CST informado possuir indicador que EXIGE informação de Diferimento para o IBS
Estadual, o grupo gDif DEVE estar informado

Obrig.

319

Rej.

Rejeição: CST informado obriga informação de diferimento Estadual

Se CST informado possuir indicador que VEDA informação de Diferimento para o IBS
Estadual, o grupo gDif NÃO DEVE estar informado
Se informado grupo do Diferimento (gIBSUF/gDif):
O valor do Diferimento (vDif) deverá ser resultante de:
vDif = vBC x (pIBSUF/100) x (pDif/100)

Obrig.

Obrig.

368

320

Rej.

Rejeição: CST informado não permite informação de diferimento Estadual

Rej.

Rejeição: Valor do Diferimento da UF difere do calculado

Observação: Aceitar uma tolerância de 0,01 a mais ou a menos
Observação 2: Em caso de preenchimento do grupo de redução (gRed) a alíquota
utilizada deverá ser a tag Alíquota Efetiva (pAliqEfet)
Se informado grupo IBS de competência das Unidades Federadas (gIBSUF):
O valor resultante da soma do diferimento (vDif) e Devolução (DevTrib)

QUANDO INFORMADOS, NÃO pode ser superior a vBC x (pIBSUF/100)
Se informado grupo IBS de competência das Unidades Federadas (gIBSUF):
O valor do IBS (vIBSUF) deverá ser resultante de:
vIBSUF = vBC x (pIBSUF/100) – vDif - vDevTrib

Observação: Aceitar uma tolerância de 0,01 a mais ou a menos
Observação 2: Em caso de preenchimento do grupo de redução (gRed) a alíquota
utilizada deverá ser a tag Alíquota Efetiva (pAliqEfet)
Se informado grupo IBS de competência dos Municípios (gIBSMun):
A alíquota de IBS Municipal deverá ser:







0% para documento com data de emissão no ano de 2026. (Art. 343 da LC
214/25)
0.05% para documento com data de emissão no ano de 2027 e 2028. (Art.
344 da LC 214/25)
Alíquota de referência ou específica do Município a ser publicada para anos
posteriores a 2028

Obrig.

395

Rej.

Rejeição: Valor do IBS UF não pode resultar negativo

Obrig.

318

Rej.

Rejeição: Valor do IBS UF difere do calculado

Obrig.

321

Rej.

Rejeição: Alíquota do IBS do Município inválida

G86

Exceção: Se o cClassTrib possuir indicador de tributação regular o pIBSMun deve ser
igual a zero
Se a alíquota do IBS Municipal (tag: pIBSMun) for igual a zero:
Grupo de Redução de Alíquota do IBS Municipal NÃO DEVE SER informado (grupo:
gIBSMun/gRed)

338

Rej.

Rejeição: Grupo de redução de alíquota do IBS Municipal informado
indevidamente

Página 13 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

G87

G88

G89

G90

G91

G92

G93

Se a alíquota do IBS Municipal (tag: pIBSMun) for maior que zero:
Se CST informado possuir indicador que EXIGE informação de redução de alíquota
para o IBS Municipal ou informado grupo de compra governamental, o grupo gRed
DEVE estar informado

Exceção: A regra não se aplica para CST do IBS/CBS (tag: IBSCBS/CST)
que possui indicador que não permite a informação do IBS/CBS
Se informado grupo de Redução de Alíquota para IBS Municipal (gIBSMun/gRed):
Verificar se percentual de Redução de Alíquota (pRedAliq) é válido para o cClassTrib
informado (gIBSCBS/cClassTrib)
Se informado grupo de Redução de Alíquota para IBS Municipal (gIBSMun/gRed), a
Alíquota Efetiva (tag: pAliqEfet) deve ser o resultado de:

Se NÃO houver compra governamental (grupo gCompraGov não informado):
pAliqEfet = pIBSMun × (1 - pRedAliq /100).

Se houver compra governamental (grupo gCompraGov informado):
pAliqEfet = pIBSMun × (1 - pRedAliq /100) × (1 - pRedutor/100).

Observação: pRedutor é obtido no grupo gCompraGov

Exemplo: Redução de 40% na alíquota:
Alíquota vigente (A): 10%
Redução na alíquota (R): 40%
Redutor de compras governamentais (RG): 5%
Alíquota Efetiva (E):
E = A × (1 – R/100) × (1 – RG/100) = 5,7.
Se CST informado possuir indicador que VEDA a informação de redução de alíquota
para o IBS Municipal, o grupo gRed NÃO DEVE estar informado

Exceção: Se Percentual de redução de alíquota em compra governamental
(tag:gCompraGov/pRedutor) informado, este grupo é exigido e pRed deve ser igual a
0.
Se CST informado possuir indicador que EXIGE informação de Diferimento para o IBS
Municipal, o grupo gDif DEVE estar informado

Se CST informado possuir indicador que VEDA informação de Diferimento para o IBS
Municipal, o grupo gDif NÃO DEVE estar informado
Se informado grupo do Diferimento (gIBSMun/gDif):
O valor do Diferimento (vDif) deverá ser resultante de
vDif = vBC x (pIBSMun/100) x (pDif/100)

Observação: Aceitar uma tolerância de 0,01 a mais ou a menos
Observação 2: Em caso de preenchimento do grupo de redução (gRed) a alíquota
utilizada deverá ser a tag Alíquota Efetiva (pAliqEfet)

Obrig.

369

Rej.

Rejeição: CST informado ou compras governamentais obriga
informação de redução de alíquota municipal

Obrig.

391

Rej.

Rejeição: Percentual de redução de alíquota do Município não é válido
para este cClassTrib

Obrig.

392

Rej.

Rejeição: Valor da Alíquota Efetiva do IBS do Município calculado
incorretamente

Obrig.

381

Rej.

Rejeição: CST informado não permite informação de redução de alíquota
municipal

Obrig.

324

Rej.

Rejeição: CST informado obriga informação de diferimento Municipal

Obrig.

Obrig.

382

325

Rej.

Rej.

Rejeição: CST informado não permite informação de diferimento
Municipal
Rejeição: Valor do Diferimento do Município difere do calculado

Página 14 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

G94

Se informado grupo IBS de competência dos Municípios (gIBSMun):
O valor do IBS (vIBSMun) deverá ser resultante de:
vIBSMun = vBC x (pIBSMun/100) – vDif - vDevTrib

Observação: Aceitar uma tolerância de 0,01 a mais ou a menos
Observação 2: Em caso de preenchimento do grupo de redução (gRed) a alíquota
utilizada deverá ser a tag Alíquota Efetiva (pAliqEfet)
Se informado grupo IBS de competência dos Municípios (gIBSMun):

O valor resultante da soma do diferimento (vDif) e Devolução (DevTrib) QUANDO
INFORMADOS, NÃO pode ser superior a vBC x (pIBSMun/100)
Se informados grupos IBS de competência dos Estados (gIBSUF) e Municípios
(gIBSMun):
O valor do total de IBS (vIBS) deverá ser a soma do vIBSUF e do vIBSMUn
vIBS = vIBSUF + vIBSMun
Se informado grupo CBS (gCBS):
A alíquota de CBS deverá ser:

G95

G96

G97





0,90 % para documento com data de emissão no ano de 2026. (Art. 343 da
LC 214/25)
Alíquota de referência a ser publicada para anos posteriores a 2026

Exceção: Se o cClassTrib possuir indicador de tributação regular o pCBS deve ser
igual a zero

Exceção 2: A Alíquota da CBS (tag: pCBS) pode ser igual a zero quando a condição
abaixo for atendida:

Município do Emitente e Destinatário devem estar na mesma área incentivada (ou
seja, dentro da ZFM, na mesma ALC), conforme relação abaixo:
      - ZFM: AC-Acre, AM-Amazonas, RO-Rondônia, RR-Roraima, AP-Amapá (só para
municípios 1600303-Macapá e 1600600-Santana);

      - ALC: conforme tabela abaixo:

Município Início

Município Fim

1304062-Tabatinga

1304062-Tabatinga

1600303-Macapá

1600303-Macapá

1600303-Macapá

1600600-Santana

1600600-Santana

1600303-Macapá

1600600-Santana

1600600-Santana

1100106-Guajará-Mirim

1100106-Guajará-Mirim

Obrig.

323

Rej.

Rejeição: Valor do IBS Municipal difere do calculado

Obrig.

396

Rej.

Rejeição: Valor do IBS Municipal não pode resultar negativo

Obrig.

317

Rej.

Rejeição: Total de IBS difere do calculado

Obrig.

326

Rej.

Rejeição: Alíquota da CBS inválida

Página 15 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

1400100-Boa Vista

1400100-Boa Vista

1400100-Boa Vista

1400456-Paracaima

1400456-Paracaima

1400100-Boa Vista

1400456-Paracaima

1400456-Paracaima

1400159-Bonfim

1400159-Bonfim

1200104-Brasileia

1200104-Brasileia

1200104-Brasileia

1200252-Epitaciolândia

1200252-Epitaciolândia

1200104-Brasileia

1200252-Epitaciolândia

1200252-Epitaciolândia

G98

G99

G100

G101

1200203-Cruzeiro do Sul  1200203-Cruzeiro do Sul
Observação: As cores definem quais municípios são da mesma área incentivada, e
isto será observado na regra de validação
Se a alíquota da CBS (tag: pCBS) for igual a zero:
Grupo de Redução de Alíquota da CBS NÃO DEVE SER informado (grupo:
gCBS/gRed)
Se a alíquota da CBS (tag: pCBS) for maior que zero:
Se CST informado possuir indicador que EXIGE informação de redução de alíquota
para o CBS ou informado grupo de compra governamental, o grupo gRed DEVE estar
informado
Exceção: A regra não se aplica para CST do IBS/CBS (tag: IBSCBS/CST)
que possui indicador que não permite a informação do IBS/CBS
Se informado grupo de Redução de Alíquota para CBS (gCBS/gRed):
Verificar se percentual de Redução de Alíquota (pRedAliq) é válido para o cClassTrib
informado (gIBSCBS/cClassTrib)
Se informado grupo de Redução de Alíquota para CBS (gCBS/gRed), a Alíquota
Efetiva (tag: pAliqEfet) deve ser o resultado de:
Se NÃO houver compra governamental (grupo gCompraGov não informado):
pAliqEfet = pCBS × (1 - pRedAliq /100).

Se houver compra governamental (grupo gCompraGov informado):
pAliqEfet = pCBS × (1 - pRedAliq /100) × (1 - pRedutor/100).

Observação: pRedutor é obtido no grupo gCompraGov
Exemplo: Redução de 40% na alíquota:
Alíquota vigente (A): 10%
Redução na alíquota (R): 40%
Redutor de compras governamentais (RG): 5%
Alíquota Efetiva (E):
E = A × (1 – R/100) × (1 – RG/100) = 5,7.

339

Rej.

Rejeição: Grupo de redução de alíquota da CBS informado
indevidamente

Obrig.

383

Rej.

Rejeição: CST informado ou compras governamentais obriga
informação de redução de alíquota do CBS

Obrig.

393

Rej.

Rejeição: Percentual de redução de alíquota da CBS não é válido para
este cClassTrib

Obrig.

394

Rej.

Rejeição: Valor da Alíquota Efetiva da CBS calculado incorretamente

Página 16 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

G102

Se CST informado possuir indicador que VEDA a informação de redução de alíquota
para o CBS, o grupo gRed NÃO DEVE estar informado

Obrig.

384

Rej.

Rejeição: CST informado não permite informação de redução de alíquota
do CBS

G103

G104

G105

G106

G107

G108

G109

G110

G111

G112

Exceção: Se Percentual de redução de alíquota em compra governamental
(tag:gCompraGov/pRedutor) informado, este grupo é exigido e pRed deve ser igual a
0.
Se CST informado possuir indicador que EXIGE informação de Diferimento para o
CBS, o grupo gDif DEVE estar informado
Se CST informado possuir indicador que VEDA informação de Diferimento para o
CBS, o grupo gDif NÃO DEVE estar informado
Se informado grupo do Diferimento (gCBS/gDif):
O valor do Diferimento (vDif) deverá ser resultante de:
vDif = vBC x (pCBS/100) x (pDif/100)

Observação: Aceitar uma tolerância de 0,01 a mais ou a menos
Observação 2: Em caso de preenchimento do grupo de redução (gRed) a alíquota
utilizada deverá ser a tag Alíquota Efetiva (pAliqEfet)
Se informado grupo CBS (gCBS):
O valor resultante da soma do diferimento (vDif) e Devolução (DevTrib) QUANDO
INFORMADOS, NÃO pode ser superior a vBC x (pCBS/100)
Se informado grupo CBS (gCBS):
O valor da CBS (vCBS) deverá ser resultante de:
vCBS = vBC x (pCBS/100) – vDif – vDevTrib

Observação: Aceitar uma tolerância de 0,01 a mais ou a menos

Observação 2: Em caso de preenchimento do grupo de redução (gRed) a alíquota
utilizada deverá ser a tag Alíquota Efetiva (pAliqEfet).
Se cClassTrib informado possuir indicador que EXIGE informação de tributação
regular, o grupo gTribRegular DEVE estar informado
Se cClassTrib informado NÃO POSSUIR indicador de informação de tributação
regular, o grupo gTribRegular NÃO DEVE estar informado
Se informado grupo da tributação regular (gTribRegular):
O CST Regular informado no grupo gTribRegular deve existir na tabela de Código de
Situação Tributária (gTribRegular/CSTReg)
Se informado grupo da tributação regular (gTribRegular):
O cClassTrib regular for informado, este deve existir na tabela de Classificação
Tributária do IBS/CBS (tag: gTribRegular/cClassTribReg)
Se informado grupo da tributação regular (gTribRegular):
O valor do tributo regular de IBS dos Estados (vTribRegIBSUF) deverá ser resultante
de:
vTribRegIBSUF = vBC x (pAliqEfetRegIBSUF/100)

Observação: Aceitar uma tolerância de 0,01 a mais ou a menos

Obrig.

Obrig.

Obrig.

328

385

329

Rej.

Rejeição: CST informado obriga informação de diferimento do CBS

Rej.

Rejeição: CST informado não permite informação de diferimento do CBS

Rej.

Rejeição: Valor do Diferimento do CBS difere do calculado

Obrig.

397

Rej.

Rejeição: Valor do CBS não pode resultar negativo

Obrig.

327

Rej.

Rejeição: Valor do CBS difere do calculado

Obrig.

Obrig.

Obrig.

330

322

331

Rej.

Rej.

Rej.

Rejeição: Classificação Tributária informada obriga informação da
tributação regular
Rejeição: Classificação Tributária não permite informação da tributação
regular
Rejeição: CST informado no grupo de tributação regular inexistente

Obrig.

332

Rej.

Rejeição: Classificação Tributária informada no grupo de tributação
regular inexistente

Obrig.

333

Rej.

Rejeição: Valor da tributação regular da UF difere do calculado

Página 17 / 50

G113

G114

G115

G116

G117

G118

G119

G120

G121

G124

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

Se informado grupo da tributação regular (gTribRegular):
O valor do tributo regular de IBS dos Municípios (vTribRegIBSMun) deverá ser
resultante de:
vTribRegIBSMun = vBC x (pAliqEfetRegIBSMun/100)

Observação: Aceitar uma tolerância de 0,01 a mais ou a menos

Se informado grupo da tributação regular (gTribRegular):
O valor do tributo regular de CBS (vTribRegCBS) deverá ser resultante de:
vTribRegularCBS = vBC x (pAliqEfetRegCBS/100)
Observação: Aceitar uma tolerância de 0,01 a mais ou a menos
Se grupo compra governamental (grupo: gCompraGov) estiver informado, o Grupo de
informações da composição do valor do IBS e da CBS em compras governamentais
(grupo: gTribCompraGov) DEVE ser informado.

Exceção: A regra não se aplica para CST do IBS/CBS (tag: IBSCBS/CST)
que possui indicador que não permite a informação do IBS/CBS
Se grupo compra governamental (grupo: gCompraGov) NÃO estiver informado, o
Grupo de informações da composição do valor do IBS e da CBS em compras
governamentais (grupo: gTribCompraGov) NÃO DEVE ser informado.
Verificar se a soma dos valores de IBS e CBS do grupo gTribCompraGov (vTribIBSUF
+ vTribIBSMun + vTribCBS) é diferente do resultado de gIBSUF/vIBSUF +
gIBSMun/vIBSMun + gCBS/vCBS.
Se o cClassTrib informado possuir indicador que VEDA preenchimento do grupo de
informações do estorno de crédito (grupo:gEstornoCred)
Se o cClassTrib informado possuir indicador que EXIGE preenchimento do grupo de
informações do estorno de crédito (grupo:gEstornoCred)
Se informado grupo de informações do PIS (grupo: PIS):
Verificar se Valor do PIS corresponde ao Valor da base de cálculo X Alíquota.
Observação: Considerar uma tolerância de R$ 0,10 para mais ou para menos.
Se informado grupo de informações do COFINS (grupo: COFINS):
Verificar se Valor do COFINS corresponde ao Valor da base de cálculo X Alíquota.
Observação: Considerar uma tolerância de R$ 0,10 para mais ou para menos.

Obrig.

334

Rej.

Rejeição: Valor da tributação regular do Município difere do calculado

Obrig.

335

Rej.

Rejeição: Valor da tributação regular da CBS difere do calculado

Obrig.

398

Rej.

Rejeição: Grupo de informações da composição do valor do IBS e da
CBS em compras governamentais deve ser informado

Obrig.

399

Rej,

Rejeição: Grupo de informações da composição do valor do IBS e da
CBS em compras governamentais não deve ser informado

Obrig.

400

Rej.

Rejeição: Somas dos valores de IBS e CBS em compras governamentais
divergente

Obrig

Obrig

Obrig.

303

304

443

Rej.

Rej.

Rej.

Rejeição: Grupo Estorno de Crédito não deve ser preenchido para o
cClassTrib informado
Rejeição: Grupo Estorno de Crédito deve ser preenchido para o
cClassTrib informado
Rejeição: Valor do PIS não corresponde à base de cálculo x alíquota
[nItem: NNN]

Obrig.

445

Rej.

Rejeição: Valor do COFINS não corresponde à base de cálculo x alíquota
[nItem: NNN]

Validações de Compras Governamentais

Se informado o grupo de informações de compra governamental
(grupo:ide\gCompraGov) e tipo do Ente (gCompraGov\tpEntGov) diferente de 5 e 6, o
DFe de compra governamental deve ter alíquota de outros entes igual a zero.
De 2027 até 2032
Para compra da união (tag: tpEnteGov = 1):




Alíquota do IBS da UF (tag: pIBSUF) deve ser igual a zero.
Alíquota do IBS do Município (tag: pIBSMun) deve ser igual a zero.

Para compra estadual (tag: tpEnteGov = 2):



Alíquota do IBS do Município (tag: pIBSMun) deve ser igual a zero.

Para compra do DF (tag: tpEnteGov = 3)

Obrig.

347

Rej.

Rejeição: DFe de compra governamental e alíquota dos outros entes
diferentes de zero.

Página 18 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00



Alíquota do IBS do Município (tag: pIBSMun) deve ser igual a zero.

Para compra municipal (tag: tpEnte = 4)



Alíquota do IBS da UF (tag: pIBSUF) deve ser igual a zero.

A partir de 2033:
Para compra da união (tag: tpEnteGov = 1):




Alíquota do IBS da UF (tag: pIBSUF) deve ser igual a zero.
Alíquota do IBS do Município (tag: pIBSMun) deve ser igual a zero.

Para compra estadual (tag: tpEnteGov = 2):




Alíquota do IBS do Município (tag: pIBSMun) deve ser igual a zero.
Alíquota do CBS (tag: pCBS) deve ser igual a zero.

Para compra do DF (tag: tpEnteGov = 3)




Alíquota do IBS do Município (tag: pIBSMun) deve ser igual a zero.
Alíquota do CBS (tag: pCBS) deve ser igual a zero.

Para compra municipal (tag: tpEnte = 4)




Alíquota do IBS da UF (tag: pIBSUF) deve ser igual a zero.
Alíquota do CBS (tag: pCBS) deve ser igual a zero.

Observação: Conforme Art. 473, § 1o e seus Incisos I, II, III e IV da LC 214/2026.
Se o tipo da operação com ente governamental for igual a Fornecimento com
pagamento posterior (tpOperGov=1)

Obrig

1004

Rej

Rejeição: Chave de acesso referenciada não deve ser informada para
tipo de operação de Fornecimento em compras governamentais

A chave de acesso do DFe anterior (refDFeAnt) NÃO DEVE ser informada
Se o tipo da operação com ente governamental for igual a Recebimento do pagamento
com fornecimento já realizado (tpOperGov=2)

Obrig

1005

Rej

Rejeição: Deverá ser informada uma chave de acesso de DFe
referenciado para tipo de operação de Recebimento do pagamento com
fornecimento realizado em compras governamentais

G124 a

G124 b

G124 c

G124 d

G124 e

Deve ser informada UMA chave de acesso de DFe referenciado

Observação: Se forem informadas múltiplas chaves de acesso ou nenhuma chave
causará essa rejeição
Se o tipo da operação com ente governamental for igual a Fornecimento com
pagamento já realizado (tpOperGov=3)

Uma ou mais chaves de acesso de DFe anteriores (refDFeAnt) DEVEM ser
informadas
Se o tipo da operação com ente governamental for igual a Recebimento do pagamento
com fornecimento posterior (tpOperGov=4)

A chave de acesso do DFe anterior (refDFeAnt) NÃO DEVE ser informada
Se informado documento anterior no grupo de compras governamentais
(gCompraGov/refDFeAnt), para cada chave informada:

- Validar chave de acesso do DFe referenciado.

Retornar motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano, Mês
inválido (0 ou > 12), Modelo de DFe diferente, Número zerado, Tipo de emissão
inválido, UF inválida ou DV inválido)

[Motivo: XXXXXXXXXXXX]

Obrig

1006

Rej

Rejeição: Pelo menos uma Chave de acesso de DFe referenciado deve
ser informada para tipo de operação fornecimento com pagamento já
realizado em compras governamentais

Obrig

1007

Rej

Rejeição: Chave de acesso referenciada não deve ser informada para
tipo de operação recebimento do pagamento com fornecimento posterior
em compras governamentais

Obrig.

1008

Rej.

Rejeição: Chave de acesso referenciada em compras governamentais
inválida

Página 19 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

G124 f

Se informado documento anterior no grupo de compras governamentais
(gCompraGov/refDFeAnt):

G124 g

- O DFe referenciado deve existir, acesso BD (Chave: CNPJ Emit, Modelo, Série, Nro)
Se informado documento anterior no grupo de compras governamentais
(gCompraGov/refDFeAnt), para cada chave informada:

- DFe referenciado não pode existir com diferença na Chave de Acesso

Retornar a chave de acesso já autorizada, o número do protocolo e data de
autorização do DFe

[chDFe: 99999999999999999999999999999999999999999999]

G124 h

[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]
Se informado documento anterior no grupo de compras governamentais
(gCompraGov/refDFeAnt), para cada chave informada:

- O DFe referenciado deve estar em situação Autorizado o Uso

G124 i

Observação:  Rejeitar se documento estiver cancelado ou substituído na base de
dados do ambiente de autorização
Se informado documento anterior no grupo de compras governamentais
(gCompraGov/refDFeAnt), para cada chave informada:

G124 j

G124 k

- O emitente do DFe referenciado deve ter o mesmo CNPJ Base do emitente do
documento fiscal
Exceção: os casos de alteração do CNPJ da empresa por motivo de aquisição, fusão,
incorporação deve ser tratados no ambiente de autorização
Se informado documento anterior no grupo de compras governamentais
(gCompraGov/refDFeAnt) e tipo de operação for Recebimento do pagamento com
fornecimento já realizado; (tpOperGov = 2), para cada chave informada:

- O DFe referenciado deve ser de compras governamentais e possuir o tipo de
operação Fornecimento com pagamento posterior (tpOperGov = 1)
Se informado documento anterior no grupo de compras governamentais
(gCompraGov/refDFeAnt) e tipo de operação for de Fornecimento com pagamento já
realizado (tpOperGov = 3), para cada chave informada:

- O DFe referenciado deve ser de compras governamentais e possuir o tipo de
operação Recebimento do pagamento com fornecimento posterior (tpOperGov = 4)

Obrig

1009

Rej

Rejeição: DFe referenciado em compras governamentais inexistente

Obrig.

1010

Rej.

Rejeição: DFe referenciado em compras governamentais com diferença
de Chave de Acesso

Obrig.

1011

Rej

Rejeição: DFe referenciado em compras governamentais em situação
inválida

Obrig.

1012

Rej

Rejeição: DFe referenciado em compras governamentais deve possuir
mesmo CNPJ base do emitente do documento

Obrig.

1013

Rej.

Rejeição: DFe referenciado em compras governamentais deve ser de
Fornecimento com pagamento posterior

Obrig.

1014

Rej.

Rejeição: DFe referenciado em compras governamentais deve ser de
operação de Recebimento do pagamento com fornecimento posterior

Observação: No caso do tipo de faturamento Agregador (tpFat=3) todos os campos de totais devem ser informados com ZERO porque não há soma nos itens.

O campo vNF e vTotDFe devem ser IGUAIS, contendo a soma da tag Valor Total do DFe Anterior dos itens (det\gAgregadora\vTotDFe)

Validações dos Totais da NFGas

G125

A soma da BC ICMS nos itens não pode ser negativa

Obrig.

500

Rej.

Rejeição: O somatório da BC ICMS não pode ser negativo

Página 20 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

G126

Total da BC ICMS difere do somatório do valor dos itens

G126a

A soma da BC ICMS ST nos itens não pode ser negativa

G126b
G127

Total da BC ICMS ST difere do somatório do valor dos itens
A soma do ICMS nos itens não pode ser negativa

G128

Total do ICMS difere do somatório do valor dos itens

G129

Valor total do ICMS superior ao valor limite estabelecido pela SEFAZ (valor
parametrizado por UF)

G129a

A soma do ICMS ST nos itens não pode ser negativa

G128b

Total do ICMS ST difere do somatório do valor dos itens

G130

A soma do ICMS Desonerado nos itens não pode ser negativo

G131

Valor total do ICMS Desonerado difere do somatório do valor dos itens

G132

A soma das FCP nos itens não pode ser negativa

Obrig.

Obrig.

Obrig.
Obrig.

Obrig.

Facult

Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

G133

Total do Fundo de combate à pobreza (FCP) difere do somatório do valor os itens

Obrig.

G134
G135

A soma do PIS nos itens não pode ser negativa
Total do PIS difere do somatório do valor dos itens

G136

A soma do COFINS nos itens não pode ser negativa

G137

Total do COFINS difere do somatório do valor dos itens

G138

A soma da Taxa Regulatória nos itens não pode ser negativa

G139

Total da Taxa Regulatória difere do somatório do valor dos itens

G140

A soma do CSLL nos itens não pode ser negativa

G141

Total do CSLL retido difere do somatório do valor dos itens

G142

A soma do IRRF nos itens não pode ser negativa

G143

Total do IRRF retido difere do somatório do valor dos itens

G144

A soma do PIS retido nos itens não pode ser negativa

Obrig.
Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

447

491

453
501

448

451

492

454

502

452

503

455

504
457

505

458

506

256

510

260

511

461

508

Rej.

Rejeição: Total da base de cálculo difere do somatório dos itens

Rej.

Rejeição: O somatório da BC ICMS ST não pode ser negativo

Rej.
Rej.

Rejeição: Total da base de cálculo ST difere do somatório dos itens
Rejeição: O somatório do ICMS não pode ser negativo

Rej.

Rejeição: Total do ICMS difere do somatório dos itens

Rej.

Rejeição: Total do ICMS superior ao valor limite estabelecido para a UF

Rej.

Rejeição: O somatório do ICMS ST não pode ser negativo

Rej.

Rejeição: Total do ICMS ST difere do somatório dos itens

Rej.

Rejeição: O somatório do ICMS Desonerado não pode ser negativo

Rej.

Rejeição: Total do ICMS desonerado difere do somatório dos itens

Rej.

Rejeição: O somatório do FCP não pode ser negativo

Rej.

Rejeição: Total do FCP difere do somatório dos itens

Rej.
Rej.

Rejeição: O somatório do PIS não pode ser negativo
Rejeição: Total do PIS difere do somatório dos itens

Rej.

Rejeição: O somatório do COFINS não pode ser negativo

Rej.

Rejeição: Total do COFINS difere do somatório dos itens

Rej.

Rejeição: O somatório da Taxa Regulatória não pode ser negativo

Rej.

Rejeição: Total de Taxa Regulatória difere do somatório dos itens

Rej.

Rejeição: O somatório do CSLL não pode ser negativo

Rej.

Rejeição: Total do CSLL retido difere do somatório dos itens

Rej.

Rejeição: O somatório do IRRF não pode ser negativo

Rej.

Rejeição: Total do IRRF retido difere do somatório dos itens

Rej.

Rejeição: O somatório dos PIS retido não pode ser negativo

Página 21 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

G145

Total do PIS retido difere do somatório do valor dos itens

G146

A soma do COFINS retido nos itens não pode ser negativa

G147

Total de COFINS retido difere do somatório do valor dos itens

G148

A soma dos Produtos e Serviços nos itens não pode ser negativo

G149

Total dos Produtos e Serviços difere do somatório do valor dos itens

G150

Valor total da NF (vNF) difere do somatório de:

Obrig.

Obrig.

Obrig.

Obrig.

Obrig,

Obrig.

258

509

259

514

459

460

Rej.

Rejeição: Total do PIS retido difere do somatório dos itens

Rej.

Rejeição: O somatório do COFINS retido não pode ser negativo

Rej.

Rejeição: Total de COFINS retido difere do somatório dos itens

Rej.

Rejeição: O somatório dos Produtos e Serviços não pode ser negativo

Rej.

Rejeição: Total dos produtos e serviços difere do somatório dos itens

Rej.

Rejeição: Total da NFGas difere do somatório dos valores que compõe o
valor total da NFGas

(+) vProd
(-) vRetPIS
(-) vRetCofins
(-) vRetCSLL
(-) vIRRF

Observação:  Nos casos em que houver ICMS-ST, o valor do ICMS-ST deve estar
incluído no vProd.

O vProd do item já está considerando a aplicação de desconto e despesas acessórias

Exceção: Na nota de faturamento Agregador (tpFat=2) deve ser a soma de
gAgregadora\vTotDFe nos itens
Valor total da NFGas (tag: vNF) superior ao valor limite estabelecido pela SEFAZ
(valor parametrizado por UF)
O total do Diferimento do IBS UF deverá ser a soma do campo vDif do IBS UF
informados nos itens
O total Devolvido do IBS UF deverá ser a soma do campo vDevTrib do IBS UF
informados nos itens
O total do IBS UF deverá ser a soma do campo vIBSUF informados nos itens

Observação: itens com indicador de devolução ou cClass de dedução, o valor do
vIBSUF deve ser subtraído
O total do Diferimento do IBS Municipal deverá ser a soma do campo vDif do IBS
Municipal informados nos itens

O total Devolvido do IBS Municipal deverá ser a soma do campo vDevTrib do IBS
Municipal informados nos itens
O total do IBS Municipal deverá ser a soma do campo vIBSMun informados nos itens
Observação: itens com indicador de devolução ou cClass de dedução, o valor do
vIBSMun deve ser subtraído
O Total do IBS deverá ser a soma do IBS das UF e do IBS Municipal (vIBSUF +

G151

G154

G155

G156

G157

G158

G159

G160

Facult.

Obrig.

Obrig.

Obrig.

463

350

351

352

Rej.

Rejeição: Total da NFGas superior ao valor limite estabelecido para a UF

Rej.

Rejeição: Total de Diferimento do IBS UF difere da soma dos itens

Rej.

Rejeição: Total Devolvido do IBS UF difere da soma dos itens

Rej.

Rejeição: Total de IBS UF difere da soma dos itens

Obrig.

353

Rej.

Rejeição: Total de Diferimento do IBS Municipal difere da soma dos itens

Obrig.

Obrig.

354

355

Rej.

Rejeição: Total Devolvido do IBS Municipal difere da soma dos itens

Rej.

Rejeição: Total de IBS Municipal difere da soma dos itens

Obrig.

356

Rej.

Rejeição: Total do IBS difere da soma do IBS UF e IBS Municipal

Página 22 / 50

G161

G162

G163

G164

G165

G166

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

vIBSMun)
O total do Diferimento do CBS deverá ser a soma do campo vDif do CBS informados
nos itens
O total Devolvido do CBS deverá ser a soma do campo vDevTrib do CBS informados
nos itens
O total do CBS deverá ser a soma do campo vCBS informados nos itens

Obrig.

Obrig.

Obrig.

357

358

359

Rej.

Rejeição: Total de Diferimento do CBS difere da soma dos itens

Rej.

Rejeição: Total Devolvido do CBS difere da soma dos itens

Rej.

Rejeição: Total de CBS difere da soma dos itens

Observação: itens com indicador de devolução ou cClass de dedução, o valor do
vCBS deve ser subtraído
Se informado grupo de estorno de crédito nos itens (gEstornoCred) o total do IBS
estornado deverá ser igual a soma campo valor do IBS estornado nos itens
(gEstornoCred/vIBS)
Se informado grupo de estorno de crédito nos itens (gEstornoCred) o total da CBS
estornada deverá ser igual a soma campo valor da CBS estornada nos itens
(gEstornoCred/vCBS)
O total geral do DFe deverá ser a soma do valor total da NFGas + IBS + CBS
vTotDFe = total/vNF + IBSCBSTot/gIBS/vIBS + IBSCBSTot/gCBS/vCBS

Exceção: Em 2026 não somar IBS e CBS, usando a fórmula:
 vTotDFe = total/vNF

Exceção 2: Na nota de faturamento Agregador (tpFat=2) deve ser a soma de
gAgregadora\vTotDFe nos itens

Obrig.

305

Rej.

Rejeição: Total de IBS estornado difere da soma dos itens

Obrig.

306

Rej.

Rejeição: Total de CBS estornada difere da soma dos itens

Obrig.

365

Rej.

Rejeição: Total do DFe inválido

Observação geral do grupo totais: Cada campo do grupo total é calculado pelo somatório do respectivo campo nos itens e conforme a natureza do Código de Classificação do Produto (cClass) poderá ser
somado ou deduzido (* -1) do valor total (ver item 7.6 do MOC Visão Geral).

O campo indicador de devolução (indDevolucao) se informado em um item também modifica seu valor multiplicando por -1.
Em caso de um item possuir indicador de devolução e cClass de dedução, é o mesmo que multiplicar por -1 e depois multiplicar novamente por *-1, ou seja, o sinal é o mesmo do início

Validações da Fatura da NFGas

G167

Se tipo de faturamento da NFGas =1 (Normal) ou 3 (Agregadora) (tag: tpFat):

Obrig.

270

Rej.

Rejeição: Fatura deve ser informada para tipo de faturamento normal e
agregador

G168

- O grupo de informações da fatura deve ser informado (grupo: gFat)
Se tipo de faturamento da NFGas = 2 (Agregada) (tag: tpFat):
- O grupo de informações da fatura NÃO deve ser informado (grupo: gFat)

Obrig.

273

Rej.

Rejeição: Fatura não deve ser informada para NFGas Agregada

Validações da Agência

G169

Se tipo de faturamento da NFGas =1 (Normal) ou 2 (Agregada) (tag: tpFat):

Obrig.

271

Rej.

Rejeição: Grupo Agência deve ser informado para tipo de faturamento
normal e agregado

G170

- O grupo de informações da agência deve ser informado (grupo: gAgencia)
Se tipo de faturamento da NFGas = 3 (Agregadora) (tag: tpFat):
- O grupo de informações da agência NÃO deve ser informado (grupo: gAgencia)

Obrig.

272

Rej.

Rejeição: Grupo agência não deve ser informada para NFGas
Agregadora

Validações dos Autorizados ao XML

G171

Se informada autorização download XML com CNPJ (grupo: autXML):

Obrig.

466

Rej.

Rejeição: CNPJ autorizado para download inválido

Página 23 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

G172

CNPJ com zeros ou dígito inválido
Se informada autorização download do XML com CPF:
CPF com zeros, nulo, números repetidos (111, 222, etc.), ou dígito de controle
inválido.

Obrig.

467

Rej.

Rejeição: CPF autorizado para download inválido

G173

Se informada autorização download XML (grupo: autXML):
- Verificar se existe duplicidade de CPF/CNPJ informado no grupo autXML da NFGas

Obrig.

468

Rej

Rejeição: Documento autorizado ao XML duplicado na NFGas

Validações do QR Code

G174

G175
G176

G177

G178

Endereço do site da UF para a Consulta via QR Code difere do previsto.
Nota: O uso diferenciado de maiúsculas ou minúsculas não deve ser considerado na
validação.
Observação: Para consultar as URLs por UF utilizadas no QR Code, acesse:
http://dfe-portal.svrs.rs.gov.br/NFGas/
Parâmetro Chave de Acesso no QR Code diverge da Chave de Acesso da NFGas
Se tipo de emissão for igual a Contingência:
O parâmetro sign deve ser informado no QR-Code
Se tipo de emissão for igual a Normal:
O parâmetro sign não deve ser informado no QR-Code
Se tipo de emissão for igual a Contingência:
Valor da assinatura (sign) do QR-Code difere do valor calculado

Obrig.

464

Rej.

Rejeição: Endereço do site da UF da Consulta via QR Code diverge do
previsto

Obrig.
Obrig.

Obrig.

Obrig.

465
469

470

471

Rej.
Rej.

Rej.

Rej.

Rejeição: Parâmetro chave de acesso do QR Code divergente da NFGas
Rejeição: Parâmetro sign não informado no QR Code para emissão em
contingência
Rejeição: Parâmetro sign não deve ser informado no QR Code para
emissão Normal
Rejeição: Assinatura do QR Code difere do calculado

Validações do Responsável Técnico

G179

Se informado grupo do responsável técnico (grupo: gRespTec):
- Validar CNPJ (dígito controle, zeros ou nulo).

Facul.

472

Rej.

Rejeição: CNPJ do responsável técnico inválido (zerado ou dígito
inválido)

Validações Adicionais

G180

G181

G180

G181

Se tipo do Equipamento for igual a Medidor (tag: gMed\tpEqp = 1):
O tipo de medidor deverá ser informado (tpMedidor)
Se tipo do Equipamento for igual a Conversor (tag: gMed\tpEqp = 2):
O tipo de medidor NÃO deverá ser informado (tpMedidor)
Se o tipo da Classe for igual a Outros (tag: instalação\tpClasse = 99):
A descrição da Classe deverá ser informada (tag: xClasse)
Se o tipo da Classe for Diferente de Outros (tag: instalação\tpClasse = 99):
A descrição da Classe NÃO deverá ser informada (tag: xClasse)

Obrig.

Obrig.

Obrig.

Obrig.

520

521

522

523

Rej.

Rej.

Rej.

Rej.

Rejeição: Tipo de medidor deve ser informado para Tipo de Equipamento
Medidor
Rejeição: Tipo de medidor não deve ser informado para Tipo de
Equipamento Conversor
Rejeição: Informar a descrição do tipo de classe para tipo outros

Rejeição: A descrição do tipo de classe não deve ser informada para este
tipo de Classe

2.3  Eventos de Marcação originados pela NFGas

A NFGas do tipo Substituição (finNFGas=3) provoca a geração automática de eventos de marcação do fisco na NFGas a que estiver relacionada.

  Evento Autorizada NFGas de Substituição: será registrado na NFGas original, indicada na tag chNFGas (grupo: gSub) na NFGas de Substituição:

Este evento altera a situação da NFGas para NFGas Substituída

Página 24 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

A NFGas com Tipo de Faturamento Agregador (tpFat=3) também provoca a geração de evento de marcação do Fisco na NFGas da Agregada (tpFat=2).

  Evento  Autorizada  NFGas  Agregadora:  registrado  na  NFGas  Agregada  informada  no  atributo  chNFGasAnt  (grupo:  det)  da  NFGas  com  tipo  de

faturamento Agregador (tpFat=3).

  Evento  Substituída  NFGas  Agregadora:  registrado  na  NFGas  Agregada  informada  no  atributo  chNFGasAnt  (grupo:  det)  da  NFGas  com  tipo  de

faturamento agregador (tpFat=3) quando esta for substituída por uma NFGas de Substituição (finNFGas=3).

2.4  Procedimentos para Cancelar ou Alterar NFGas faturadas por terceiro relacionadas e marcadas com

evento da NFGas de Faturamento Conjunto

A geração de eventos de marcação automática pelo sistema do fisco impede que documentos fiscais relacionados por outros sejam cancelados, essa medida

evita inconsistências sistêmicas que possam causar problemas na fiscalização e apuração do imposto.

No entanto, sempre existe a possibilidade de ocorrerem erros na emissão, seguem abaixo os procedimentos necessários para resolver situações de correção

quando existem bloqueios dos eventos de marcação:

1.Se for preciso cancelar a NFGas Agregada marcada com um evento “Autorizada NFGas Agregadora”:

  Se a NFGas de Faturamento Agregado e a NFGas Agregada estiverem dentro do prazo de cancelamento:

  Deverá cancelar a NFGas de Tipo de Faturamento Agregador (tpFat=3).

  Será gerado automaticamente o evento: Cancelada NFGas Agregadora nas NFGas Agregadas relacionadas na NFGas Agregadora

  Deverá ser cancelada a NFGas Agregada.

  Se a NFGas de Faturamento Agregador estiver no prazo de cancelamento e a NFGas Agregada estiver fora do prazo de cancelamento:

  Deverá cancelar a NFGas de tipo de faturamento: Faturamento Agregador (tpFat=3).

  Será gerado automaticamente o evento: Cancelada NFGas de Faturamento Agregador nas NFGas Agregadas relacionadas

Página 25 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

  Deverá ser Substituída a NFGas de Faturamento Agregador por uma nova NFGas com valores zerados.

  Se a NFGas Agregada estiver relacionada incorretamente na NFGas de Faturamento Agregador ou precisar corrigir a NFGas Agregada já relacionada

em uma NFGas de faturamento Agregador:

  Deverá gerar uma nova NFGas Agregada (com nova numeração);

  Deverá gerar uma nova NFGas de Faturamento Agregador do tipo Substituição (substituindo a NFGas de Faturamento Agregador

original) e relacionando a nova NFGas Agregada.

  Essa ação deverá gerar um evento automático “Substituída NFGas de Faturamento Agregador” nas notas Agregadas, essa ação

desfaz o seu vínculo com a nota Agregadora.

  Será gerado um evento automático “Autorizada NFGas de Faturamento Agregador” nas novas notas Agregadas, criando o vínculo

  A nota Agregada original poderá ser cancelada (se dentro do prazo) ou substituída por outra de valor zero.

2.5  Relação de CFOPs permitidos na NFGas
5352 - Prestações de serviços de transporte a estabelecimento industrial

5353 - Prestações de serviços de transporte a estabelecimento comercial

5651 - Venda de combustível ou lubrificante de produção do estabelecimento destinados à industrialização subsequente

5652 - Venda de combustível ou lubrificante, de produção do estabelecimento, destinados à comercialização

5653 - Venda de combustível ou lubrificante, de produção do estabelecimento, destinado a consumidor ou usuário final

5654 - Venda de combustível ou lubrificante, adquirido ou recebido de terceiros, destinado à industrialização subsequente

5655 - Venda de combustível ou lubrificante, adquirido ou recebido de terceiros, destinado à comercialização

5656 - Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado a consumidor ou usuário final

Página 26 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

3  Leiaute da NFGas

Legendas coluna Ele (Elemento): A – Atributo, E – Elemento, G – Grupo, ES – Elemento da Sequência, CE – Choice Element (escolha entre elementos), CG
– Choice Group (Escolha entre grupos).

Legendas coluna Tipo: N – Numérico, C – Caracteres, D – Data

ERXX – Expressão Regular (ver tabela de expressões regulares)

DXX – Valores de Domínio (ver tabela de valores de domínio)

Ocorr: 0 - 1 (opcional sem repetição), 1 – 1 (obrigatório sem repetição), 0 – n (opcional com múltiplas ocorrências), 1 – n (obrigatório com múltiplas ocorrências).

#
1
2
3

4
5

6

7
8

9

10

11

12
13

Campo
infNFGas
versao
Id

ide

cUF

tpAmb

mod
serie

nNF

cNF

cDV

dhEmi
tpEmis

Nível
0
1
1

Descrição
Informações da NFGas
Versão do leiaute
Identificador da tag a ser assinada

Ele  Tipo Ocorr.
G
A  C
A  C

1 - 1
1 - 1
1 - 1

37

ER75
ER70

Tama  Domínio  Exp.Reg. Observações

1
2

2

2
2

2

2

2

2
2

Identificação da NFGas
Código da UF do emitente da NFGas

G
E  N

1 - 1
1 - 1

2

D1

Tipo do Ambiente

E  N

1 - 1

1

D7

Modelo da NFGas
Série do documento fiscal

E  N
E  C

1 - 1
1 - 1

Número do documento fiscal

E  C

1 - 1

Código numérico que compõe a Chave de
Acesso.
Digito verificador da chave de acesso

E  C

1 - 1

E  C

1 - 1

2
1 - 3

1 - 9

7

1

D4

ER45

Data e hora de emissão do documento fiscal  E  C
E  N
Forma de emissão do Documento Fiscal

1 - 1
1 - 1

21
1

D7

Informar a chave de acesso da NFGas e precedida
do literal "NFGas"

Código da UF do emitente do Documento Fiscal.
Utilizar a
Tabela do IBGE de código de unidades da
federação.
1 - Produção;
2 - Homologação
Utilizar o código 76 para identificação da NFGas
Informar a série do documento fiscal (informar zero
para série única).

ER44  Número que identifica o documento fiscal 1 a

999999999.

ER2  Código aleatório gerado pelo emitente, com o

ER58

objetivo de evitar acessos indevidos ao documento.
Informar o dígito de controle da chave de acesso
documento fiscal, que deve ser calculado com a
aplicação do algoritmo módulo 11 (base 2,9) da
chave de acesso.

ER1  Formato AAAA-MM-DDTHH:MM:DD TZD

1 - Normal
2 - Contingência Off Line

Página 27 / 50

Identificação do número do Site do
Autorizador de recepção da NFGas

E  C

1 - 1

1

ER58  Se o autorizador da NFGas possuir apenas um site

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

14

nSiteAutoriz

15

16

17

18
#
20

21
22
23

24

25

cMunFG

finNFGas

tpFat

verProc

--- x ---

dhCont

xJust
gCompraGov
tpEnteGov

pRedutor

tpOperGov

2

2

2

2

2
2
2

2
2
3

3

3

Código do município de ocorrência do fato
gerador do IBS/CBS
Finalidade de emissão da NFGas

E  C

1 - 1

E  N

1 - 1

Tipo de Faturamento da NFGas

E  N

1 - 1

7

1

1

D27

D26

Versão do processo de emissão
Sequência XML
Data e Hora da entrada em contingência

Justificativa da entrada em contingência
Grupo de Compras Governamentais
Para administração pública direta e suas
autarquias e fundações:

E  C
-
-
ES  C

ES  C
G
E  N

1 - 1
0 - 1
1 - 1

1 - 1
0 - 1
1 - 1

1 - 20

21

15 - 256

1

D8

Percentual de redução de alíquota em
compra governamental
Tipo da operação com ente governamental:  E  N

E  C

1 - 1

1 - 1

3, 2
3, 4
1

D7

25 a

refDFeAnt

3

Documento fiscal referenciado anterior

E  C

0-n

44

deverá ser informado com Zero (0), em caso de
autorizador trabalhar com múltiplos sites indicar o
número do site para qual foi endereçada a NFGas
(1 a 9).
Observação: O ambiente autorizador que trabalhar
com mais de um Site deverá divulgar para cada
endereço de site qual número correspondente de
nSiteAutoriz o contribuinte pode usar

0 - NFGas normal;
3 - NFGas substituição;
1 - Faturamento Normal;
2 - Faturamento Agregado;
3 - Faturamento Agregador
Informar a versão do aplicativo emissor de NFGas

Informar a data e hora no formato AAAA-MM-
DDTHH:MM:SS

ER2

ER48

ER1

ER48

1=União
2=Estados
3=Distrito Federal
4=Municípios
5=Consórcio Público
6=Comitê Gestor do IBS

ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.

1 – Fornecimento com pagamento posterior;
2 - Recebimento do pagamento com fornecimento
já realizado;
3 – Fornecimento com pagamento já realizado;
4 – Recebimento do pagamento com
fornecimento posterior;

ER3  Chave de acesso do documento fiscal anterior.
Deverá ser informado para tpOperGov 2 e 3 e
vedado para os tipos 1 e 4

Obs: a chave de acesso deverá ser de um emitente
com o mesmo CNPJ base

Página 28 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

26

27
28
29
30
31
32
33
34
35
36

37
38
39
40
41
42
43
#
44

45
46

47
48
#

49
50
51
52
53
54
55
56

emit

CNPJ
IE
xNome
xFant
enderEmit
xLgr
nro
xCpl
xBairro
cMun

xMun
CEP
UF
fone
email

dest

xNome
CE – Choice Element XML
CNPJ

CPF
idOutros

IE
IM
CE – Choice Element XML

cNIS
NB
xNomeAdicional
enderDest
xLgr
nro
xCpl
xBairro

1

2
2
2
2
2
3
3
3
3
3

3
3
3
3
3
1
2
-
2

2
2

2
2
-

2
2
2
2
3
3
3
3

G

Identificação do Emitente do documento
fiscal
CNPJ do emitente
Inscrição Estadual do emitente
Razão social ou Nome do emitente
Nome fantasia do emitente
Endereço do emitente
Logradouro
Número
Complemento
Bairro
Código do município (utilizar a tabela do
IBGE)
Nome do município
CEP
Sigla da UF
Telefone
Endereço de E-mail
Identificação do destinatário
Razão social ou Nome do destinatário
Deve ser usado ou CNPJ ou CPF ou idOutros
Número do CNPJ

E  C
E  C
E  C
E  C
G
E  C
E  C
E  C
E  C
E  C

E  C
E  C
E  C
E  C
E  C
G
E  C

CE  C

1 - 1

1 - 1
1 - 1
1 - 1
0 - 1
1 - 1
1 - 1
1 - 1
0 - 1
1 - 1
1 - 1

1 - 1
1 - 1
1 - 1
0 - 1
0 - 1
1 - 1
1 - 1
1 - 1
1 - 1

2
2 - 14
2 - 60
1 - 60

2 - 60
1 - 60
1 - 60
2 - 60
7

2 - 60
8
2
7 - 12
1 - 60

2 - 60

2

D6

Informar zeros não significativos

Informar zeros não significativos

ER7
ER43
ER48
ER48

ER48
ER48
ER48
ER48
ER2

ER48
ER72

ER73
ER77

ER48

ER8  Em caso de empresa não estabelecida no Brasil,

Número do CPF
Identificação do destinatário outros

CE  C
CE  C

1 - 1
1 - 1

11
2 - 20

ER9
ER59

será informado o CNPJ com zeros.
Informar os zeros não significativos.
Informar os zeros não significativos.
Identificação do destinatário não obrigado a
inscrição do CPF tais como estrangeiro, indígena
(informar código do RANI) e quilombola; ou
destinatário que a distribuidora não possui a
informação (nestes casos orienta-se informar
"00000").

Inscrição Estadual do destinatário
Inscrição Municipal
Esta choice é opcional, mas se informado
deve escolher ou cNIS ou NB
Número da Identificação Social - NIS
Número do Benefício
Nome de destinatário adicional
Endereço do destinatário
Logradouro
Número
Complemento
Bairro

E  C
E  C

0 - 1
0 - 1
0 – 1

CE  C
CE  C
E  C
G
E  C
E  C
E  C
E  C

1 - 1
1 - 1
0 - 1
1 - 1
1 - 1
1 - 1
0 - 1
1 - 1

0 - 14
1 - 15

1 - 15
1 - 10
2 - 60

2 - 60
1 - 60
1 - 60
2 - 60

ER42
ER48

ER52
ER60
ER48  Exemplo: Nome do Cônjuge, Companheira(o)

ER48
ER48
ER48
ER48

Página 29 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

57

58
59
60
61
62
63

64
65

66

67
68

69

#

71

72

73
74
#

75
76

cMun

xMun
CEP
UF
fone
email

instalacao

idInstalacao
idCodCliente

tpInstalacao

nContrato
tpClasse

xClasse

--- x ---

latGPS

longGPS

codRoteiroLeitura

gSub

CG – Choice Group XML

chNFGas
gNF

3

3
3
3
3
3
1

2
2

2

2
2

2

2

2

2

2
1
-

2
2

E  C

1 - 1

7

Código do município (utilizar a tabela do
IBGE)
Nome do município
CEP
Sigla da UF
Telefone
Endereço de E-mail
Dados da Instalação

E  C
E  C
E  C
E  C
E  C
G

OPCIONAL para TpFat=3 (Agregador)
Código único de Identificação da Instalação  E  C
E  C
Código de Identificação do Cliente para
empresa emitente
Tipo de Instalação

E  N

1 - 1
1 - 1
1 - 1
0 - 1
0 - 1
0 - 1

1 - 1
0 - 1

1 - 1

D6

2 - 60
8
2
7 - 12
1 - 60

1 - 15
2 - 20

1

D30

Informar zeros não significativos

ER2

ER48
ER72

ER73
ER77

ER61
ER59

Número do Contrato
Classe de Consumo da Instalação

E  C
E  N

0 - 1
1 - 1

1 - 20
2

D31

ER62

1 - Cativo
2 - Livre
3 - Parcialmente Livre

01 - Comercial
02 - Industrial
03 - Residencial
04 - Térmico
05 - Veicular Posto
06 - Veicular Frota
07 - GNC
08 - GNL
09 - Cogeração
10 - Refinaria
99 - Outros

E  C

0 - 1

1 - 200

ER48

-

-

0 - 1

Detalhamento da Classe quando informado
outros
Sequência XML Opcional, se informado
deverá preencher os 2 campos: latGPS e
longGPS
Latitude do ponto geográfico da localização
da captura
Longitude do ponto geográfico da localização
da captura
Roteiro da Leitura para uso operacional
Grupo de informações da substituição
Esta choice é obrigatória, deve escolher entre
informar chNFGas (eletrônica) ou o gNF que
tem o conjunto dos campos de uma nota em
papel
Chave de acesso da NFGas referenciada
Informação da NF em papel referenciada

ES  C

ES  C

E  C
G

CE  C
CG

1 - 1

1 - 1

0 - 1
0 - 1
1 – 1

1 - 1
1 - 1

10

11

2 - 100

ER50

ER51

ER48

44

ER3

Página 30 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

77
78
79
80

81
82
83

84

85

86

87

88

89

90
91

92

93
94

95

96

CNPJ
serie
nNF
CompetEmis

CompetApur
hash115

motSub

gVolContrat

nContrat

tpVolContrat

qUnidContrat

gMed

nMed

idEqp
dMedAnt

vMedAnt

dMedAtu
vMedAtu

tpEqp

tpMedidor

3
3
3
3

3
3
2

1

2

2

2

1

2

2
2

2

2
2

2

2

CNPJ do Emitente
Serie do documento fiscal
Número do documento fiscal
Ano e mês da emissão da NF papel
(AAAAMM)
E  C
Ano e mês de apuração (AAAAMM)
Hash do registro no arquivo do convênio 115  E  C
E  N
Motivo da substituição

E  C
E  C
E  C
E  C

1 - 1
1 - 1
1 - 1
1 - 1

1 - 1
0 - 1
1 - 1

2
1 - 3
1 - 9
6 - 6

6 - 6
32 - 32
2

D36

ER7
ER48
ER44
ER79

ER79

Grupo de informações dos volumes
contratados
Número de referência para informar nos
produtos a relação com a quantidade
contratada
Tipo de volume contratado

G

0 - 20

A  C

1 - 1

2 - 2

ER63

E  N

1 - 1

1

D8

Informar o CNPJ do emitente do Documento Fiscal

01 – Erro de Leitura
02 – Erro de Preço ou Erro de Tarifa;
03 – Decisão Judicial
04 – Erro Cadastral;
05 - Erro de Tributação
06 - Decisão da Reguladora;

1 - Demanda mínima;
2 - Montante de Uso do Sistema de Distribuição;
3 - Encargo de Capacidade;
4 - Volume Contratado

Quantidade Contratada em m3

E  C

1 - 1

13, 2
13, 6

ER38  15 posições, sendo 13 inteiras e 2 a 6 casas

decimais.

Grupo de informações dos Equipamentos
de Medição
Número de referência para informar nos
produtos a relação com a medição
Identificação do equipamento de Medição
Data da leitura anterior

G

0 - 99

A  C

1 - 1

2 - 2

ER64

E  C
E  D

1 - 1
1 - 1

2 - 20
10

ER59
ER49  Formato AAAA-MM-DD

Valor da medição (leitura) anterior

E  C

1 - 1

Data da leitura atual
Valor da medição (leitura) atual

1 - Medidor
2 - Conversor
1 - Turbina
2 - Rotativo
3 - Diafragma
4 - Ultrassónico

Em caso da 1a leitura do equipamento, informar a
data de instalação do hidrômetro

ER41  15 posições, sendo 13 inteiras e 2 a 4 casas

decimais.

ER49  Formato AAAA-MM-DD
ER41  15 posições, sendo 13 inteiras e 2 a 4 casas

decimais.

13, 2
13, 4
10
13, 2
13, 4
1 - 1  D7

E  D
E  C

1 - 1
1 - 1

E  N

1 - 1

E  N

0 - 1

1 - 1  D8

Página 31 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

97
98
99

det

nItem
chNFGasAnt

100

nItemAnt

1
2
2

2

Informado apenas para tpEqp = 1
Detalhamento de Produtos e Serviços
Número do item da NFGas
Chave de Acesso da NFGas anterior

G
A  C
A  C

1 - 990
1 - 1
1 - 1

3
44

ER66
ER3

Informar chave de acesso de referência anterior
TAG OPCIONAL, DEVE SER INFORMADA
APENAS NOS CASOS PREVISTOS DE NOTA
ANTERIOR REFERENCIADA

Usar para NFGas quando indicar um item de
devolução de nota anterior (cClass
específico)

DEVE SER USADA NA NOTA
AGREGADORA PARA INDICAR AS NOTAS
QUE FORAM AGREGADAS
Número do item da NFGas anterior

A  C

1 - 1

1 - 4

ER67

Informar nro do item da chave de acesso de
referência anterior

TAG OPCIONAL, DEVE SER INFORMADA
APENAS NOS CASOS PREVISTOS DE NOTA
ANTERIOR REFERENCIADA

#

CG – Choice Group XML

-

101

102
103

104

105
106
107

108
109
110

gNormal

gTarif

dIniTarif

dFimTarif

nAto
anoAto
tpFaixaCons

vTarifAplic

prod

indOrigemQtd

2

3
4

4

4
4
4

4
3
4

Esta choice é obrigatória, deve escolher o
grupo gNormal para notas de faturamento
normal / agregadas OU grupo gAgregadora
para notas do tipo de faturamento
Agregadora
Informar se faturamento normal (1) ou
agregado (2)
Grupo de Tarifas por Período
Data de início da aplicação da tarifa

1 – 1

CG

1 - 1

G
E  D

0 - 6
1 - 1

Data de fim da aplicação da tarifa

E  D

0 - 1

Número do Ato
Ano do Ato (AAAA)
Faixa Prevista de Consumo

E  C
E  C
E  N

Valor da tarifa aplicada
Dados do Produto ou Serviço
Indicador da origem da quantidade faturada  E  N

E  C
G

1 - 1
1 - 1
1 - 1

1 - 1
1 - 1
1 - 1

10

10

4 - 4
4 - 4
1

9, 8

ER49  Data de início da aplicação da tarifa no período

considerado para o faturamento (
Formato AAAA-MM-DD)

ER49  Data de fim da aplicação da tarifa no período

considerado para o faturamento
(Formato AAAA-MM-DD)

ER48
ER65

D30

1 - Fixa
2 - Média

ER27  17 posições, sendo 9 inteiras e 8 casas decimais.

1

D38

1 - Media;
2 - Medido;
3 - Contratada;
4 - Residual estimado
5 - Residual medido
6 - Sem quantidade

Página 32 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

111

gMedicao

112

113

114
115
116

nMed

nContrat

gMedida
uMed
vMed

#

Sequência XML

117

118
119
120
121

tpMotNaoLeitura

xMotNaoLeitura

cProd
xProd
cClass

121 a

CFOP

122

123

124

125

126

uMed

qFaturada

vItem

fatorPCS

fatorPTZ

126 a

fatorP

4

5

5

5
6
6

-

5

5
4
4
4

4

4

4

4

4

4

4

Grupo para referenciar qual medição e
medida estão relacionadas ao item

G

0 - 1

Informar para origem qtd = 1 ou 5
Referência para a medição ao qual se refere
o item
Referência para o grupo de demanda
contratada ao qual se refere o item
Grupo de medida
Unidade Básica de Medida
Valor da medição

E  C

1 - 1

E  C

0 - 1

G
E  N
E  C

1 - 1
1 - 1
1 - 1

2 - 2

2 - 2

1
13, 2
13, 4

7 - Por Faixa;

ER63

ER63

D10

1 –m3

ER41  15 posições, sendo 13 inteiras e 2 a 4 casas

decimais.
(vMedAtu – vMedAnt)

Agrupa os dois campos abaixo
tpMotNaoLeitura e xMotNaoLeitura, sendo
que este último é opcional e informado
Tipo Motivo da não leitura

1 – 1

E  N

1 - 1

1

D30

Detalhamento do motivo da não leitura
Código do produto ou serviço.
Descrição do produto ou serviço
Código de classificação

E  C
E  C
E  C
E  C

0 - 1
1 - 1
1 - 1
1 - 1

1 - 200
1 - 60
1 - 120
7 - 7

1 - Consumidor;
2 - Distribuidora;
3 - Independente do Consumidor e distribuidora;

ER48
ER48
ER48
ER2  Tabela de Classificação de Item da Gas (validar por

RV)

CFOP

E  N

0 – 1

4

ER80  Utilizar Tabela de CFOP. (O CFOP não será exigido

Unidade Básica de Medida

E  N

1 - 1

1

D7

Quantidade Faturada

Valor unitário do item

Fator de poder calorifico
Deve maior que zero

E  N

1 - 1

E  N

1 - 1

E  N

0 - 1

Fator de correção

E  N

0 - 1

Fator de Correção de Pressão

E  N

0 -1

11, 0
11, 4
13, 2
13, 10
11, 0
11, 4

11, 0
11, 4

11,0
11, 4

no caso de deduções, cobranças. Nestes casos
indicar o indSemCST no grupo imposto
1 - m3;
2 - Unidade

ER31  11 posições, sendo 11 inteiras e 0 a 4 casas

decimais.

ER40  15 posições, sendo 13 inteiras e 2 a 10 casas

decimais.

ER31  11 posições, sendo 11 inteiras e 0 a 4 casas

decimais.
Se informado multipla ao valor do vItem

ER31  11 posições, sendo 11 inteiras e 0 a 4 casas

decimais.
Se informado multipla ao valor do vItem
Deve maior que zero

ER31  11 posições, sendo 11 inteiras e 0 a 4 casas

decimais.

Página 33 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

126 b

fatorT

127

128

129
130

vProd

indDevolucao

imposto
orig

4

4

4

3
4

Fator de correção de temperatura

E  N

0 -1

Valor total do item

E  N

1 - 1

Indicador de devolução do valor do item

E  N

0 - 1

11,0
11,4
13, 2
13, 10
1 - 1  D10

ER31  11 posições, sendo 11 inteiras e 0 a 4 casas

decimais.

ER40  15 posições, sendo 13 inteiras e 2 a 10 casas

decimais.
1 – Devolução do valor do item

Tributos incidentes no Produto ou Serviço
Origem da mercadoria

G
E  N

1 - 1
1 - 1

1

D11

Esta tag multiplica por -1 os valores do item

0 - Nacional, exceto as indicadas nos códigos 3, 4,
5 e 8

1 - Estrangeira - Importação direta, exceto a
indicada no código 6

2 - Estrangeira - Adquirida no mercado interno,
exceto a indicada no código 7

3 - Nacional, mercadoria ou bem com Conteúdo de
Importação superior a 40% e inferior ou igual a 70%

4 - Nacional, cuja produção tenha sido feita em
conformidade com os processos produtivos básicos
de que tratam as legislações citadas nos Ajustes

5 - Nacional, mercadoria ou bem com Conteúdo de
Importação inferior ou igual a 40%

6 - Estrangeira - Importação direta, sem similar
nacional, constante em lista da CAMEX e gás
natural

7 - Estrangeira - Adquirida no mercado interno, sem
similar nacional, constante lista CAMEX e gás
natural

8 - Nacional, mercadoria ou bem com Conteúdo de
Importação superior a 70%
Tributada integralmente

D12

00 - Tributação normal ICMS

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER11  5 posições, sendo 3 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

Página 34 / 50

131

132
133
134
135

ICMS00

CST
vBC
pICMS
vICMS

4

5
5
5
5

Prestação sujeito à tributação normal do
ICMS
classificação Tributária do Serviço
Valor da BC do ICMS
Alíquota do ICMS
Valor do ICMS

CG

1 - 1

E  N
E  N
E  N
E  N

1 - 1
1 - 1
1 - 1
1 - 1

2
13, 2
3, 2
13, 2

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

#

--- x ---

137

138

139

140

141
142
143
#

145

146

147

148
149
150
151
152
#

154
155

pFCP

vFCP

ICMS10

CST

vBCST
pICMSST
vICMSST

--- x ---

pFCPST

vFCPST

ICMS20

CST
pRedBC
vBC
pICMS
vICMS

--- x ---

vICMSDeson
cBenef

#

--- x ---

157

158

159
160

pFCP

vFCP

ICMS40
CST

5

5

5

4

5

5
5
5
5

5

5

4

5
5
5
5
5
5

5
5

5

5

5

4
5

Sequência XML, agrupa os dois campos
abaixo, se informado um, o outro deverá ser
informado
Percentual de ICMS relativo ao Fundo de
Combate à Pobreza (FCP).
Valor do ICMS relativo ao Fundo de Combate
à Pobreza (FCP).
Tributada e com cobrança do ICMS por
substituição tributária
classificação Tributária do Serviço

Valor da BC do ICMS ST
Alíquota do ICMS ST
Valor do ICMS ST retido
Sequência XML, agrupa os dois campos
abaixo, se informado um, o outro deverá ser
informado
Percentual de ICMS relativo ao Fundo de
Combate à Pobreza (FCP).
Valor do ICMS relativo ao Fundo de Combate
à Pobreza (FCP).
Prestação sujeito à tributação com redução
de BC do ICMS
Classificação Tributária do serviço
Percentual de redução da BC
Valor da BC do ICMS
Alíquota do ICMS
Valor do ICMS
Sequência XML, agrupa os dois campos
abaixo, se informado um, o outro deverá ser
informado
Valor do ICMS de desoneração
Código de Benefício Fiscal na UF aplicado ao
item

Sequência XML, agrupa os dois campos
abaixo, se informado um, o outro deverá ser
informado
Percentual de ICMS relativo ao Fundo de
Combate à Pobreza (FCP).
Valor do ICMS relativo ao Fundo de Combate
à Pobreza (FCP).
Tributação Isenta, não tributada
Classificação Tributária do serviço

-

-

0 - 1

ES  N

1 - 1

3, 2

ER17  5 posições, sendo 3 inteiras e 2 casas decimais.

ES  N

1 - 1

13, 2

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

CG

1 - 1

E  N

1 - 1

2

D13

E  N
E  N
E  N
-
-

1 - 1
1 - 1
1 - 1
0 - 1

13, 2
3, 2
13, 2

10=Tributada e com cobrança do ICMS por
substituição tributária

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER11  5 posições, sendo 3 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

ES  N

1 - 1

3, 2

ER17  5 posições, sendo 3 inteiras e 2 casas decimais.

ES  N

1 - 1

13, 2

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

CG

1 - 1

E  N
E  N
E  N
E  N
E  N
-
-

1 - 1
1 - 1
1 - 1
1 - 1
1 - 1
0 - 1

D14

2
3, 2
13, 2
3, 2
13, 2

20 - tributação com BC reduzida do ICMS
ER12  5 posições, sendo 3 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER11  5 posições, sendo 3 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

ES  N
ES  C

1 - 1
1 - 1

13, 2
10

-

-

0 - 1

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
Código de Benefício Fiscal utilizado pela UF,
aplicado ao
item.

ES  N

1 - 1

3, 2

ER17  5 posições, sendo 3 inteiras e 2 casas decimais.

ES  N

1 - 1

13, 2

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

CG
E  N

1 - 1
1 - 1

2

D15

40=Isenta; 41=Não tributada;

Página 35 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

#

--- x ---

162
163

164

165
#

167
168

169

170

171
172
173

174
#

176

177

178

179

180
181
182

vICMSDeson
cBenef

ICMS51

CST

--- x ---

vICMSDeson
cBenef

ICMS60

CST

vBCSTRet
pICMSSTRet
vICMSSubstituto

vICMSSTRet

vBCFCPSTRet

pFCPSTRet

vFCPSTRet

pRedBCEfet

vBCEfet
pICMSEfet
vICMSEfet

--- x ---

5

5
5

4

5
5

5
5

4

5

5
5
5

5
5

5

5

5

5

5
5
5

Sequência XML, agrupa os dois campos
abaixo, se informado um, o outro deverá ser
informado
Valor do ICMS de desoneração
Código de Benefício Fiscal na UF aplicado ao
item

-

-

0 - 1

ES  N
ES  C

1 - 1
1 - 1

13, 2
10

Tributação com Diferimento

CG

1 - 1

Classificação Tributária do serviço
Sequência XML, agrupa os dois campos
abaixo, se informado um, o outro deverá ser
informado
Valor do ICMS de desoneração
Código de Benefício Fiscal na UF aplicado ao
item

E  N
-
-

1 - 1
0 - 1

2

D16

ES  N
ES  C

1 - 1
1 - 1

13, 2
10

CG

E  N

Tributação pelo ICMS
60 - ICMS cobrado anteriormente por
substituição tributária
Tributação pelo ICMS
60 - ICMS cobrado anteriormente por
substituição tributária
Valor da BC do ICMS ST retido anteriormente E  N
E  N
Alíquota suportada pelo consumidor final.
E  N
Valor do ICMS Próprio do Substituto cobrado
em operação anterior
Valor do ICMS ST retido anteriormente
Sequência XML, agrupa os três campos
abaixo, se informado um, todos devem ser
informados
Valor da Base de cálculo do FCP retido
anteriormente por ST.
Percentual de FCP retido anteriormente por
substituição tributária.
Valor do FCP retido por substituição
tributária.
Percentual de redução da base de cálculo
efetiva.
Valor da base de cálculo efetiva.
Alíquota do ICMS efetiva.
Valor do ICMS efetivo.

E  N
E  N
E  N

E  N
-
-

ES  N

ES  N

ES  N

E  N

1 - 1

1 - 1

2

D17

1 - 1
1 - 1
0 - 1

1 - 1
0 - 1

1 - 1

1 - 1

1 - 1

1 - 1

1 - 1
1 - 1
1 - 1

13, 2
3, 2
13, 2

13, 2

13, 2

3, 2

13, 2

3, 2

13, 2
3, 2
13, 2

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
Código de Benefício Fiscal utilizado pela UF,
aplicado ao
item.
A exigência do preenchimento das informações do
ICMS diferido fica a critério de cada UF
Tributação pelo ICMS 51 - Diferimento

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
Código de Benefício Fiscal utilizado pela UF,
aplicado ao
item.

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER17  5 posições, sendo 3 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

ER17  5 posições, sendo 3 inteiras e 2 casas decimais.

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

ER17  5 posições, sendo 3 inteiras e 2 casas decimais.

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER17  5 posições, sendo 3 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

Página 36 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

#

--- x ---

184
185

186

187

188

189
190
191
192
#

194
195

196

197

198

199
200
201
202

--- x ---

vICMSDeson
cBenef

ICMS70

CST

modBC

pRedBC
vBC
pICMS
vICMS

vBCFCP
pFCP

vFCP

modBCST

pMVAST

pRedBCST
vBCST
pICMSST
vICMSST

5

5
5

4

5

5

5
5
5
5
5

5
5

5

5

5

5
5
5
5

Sequência XML, agrupa os dois campos
abaixo, se informado um, o outro deverá ser
informado
Valor do ICMS de desoneração
Código de Benefício Fiscal na UF aplicado ao
item

-

-

0 - 1

ES  N
ES  C

1 - 1
1 - 1

13, 2
10

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
Código de Benefício Fiscal utilizado pela UF,
aplicado ao
item.

Tributação pelo ICMS
70 - Com redução de base de cálculo e
cobrança do ICMS por substituição tributária
Tributção pelo ICMS
70 - Com redução de base de cálculo e
cobrança do ICMS por substituição tributária
Modalidade de determinação da BC do ICMS:
0 - Margem Valor Agregado (%);
1 - Pauta (valor);
2 - Preço Tabelado Máximo (valor);
3 - Valor da Operação.
Percentual de redução da BC
Valor da BC do ICMS
Alíquota do ICMS
Valor do ICMS
Sequência XML, agrupa os três campos
abaixo, se informado um, todos devem ser
informados
Valor da Base de cálculo do FCP.
Percentual de ICMS relativo ao Fundo de
Combate à Pobreza (FCP).
Valor do ICMS relativo ao Fundo de Combate
à Pobreza (FCP).
Modalidade de determinação da BC do ICMS
ST:
0 – Preço tabelado ou máximo sugerido;
1 - Lista Negativa (valor);
2 - Lista Positiva (valor);
3 - Lista Neutra (valor);
4 - Margem Valor Agregado (%);
5 - Pauta (valor);
6 - Valor da Operação.
Percentual da Margem de Valor Adicionado
ICMS ST
Percentual de redução da BC ICMS ST
Valor da BC do ICMS ST
Alíquota do ICMS ST
Valor do ICMS ST

CG

E  N

E  N

E  N
E  N
E  N
E  N
-
-

ES  N
ES  N

ES  N

E  N

E  N

E  N
E  N
E  N
E  N

1 - 1

1 - 1

2

D18

1 - 1

1

D19

1 - 1
1 - 1
1 - 1
1 - 1
0 - 1

1 - 1
1 - 1

1 - 1

1 - 1

0 - 1

0 - 1
1 - 1
1 - 1
1 - 1

3, 2
13, 2
3, 2
13, 2

13, 2
3, 2

13, 2

1

D20

ER16  5 posições, sendo 3 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER16  5 posições, sendo 3 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER17  5 posições, sendo 3 inteiras e 2 casas decimais.

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

3, 2

3, 2
13, 2
3, 2
13, 2

ER17  5 posições, sendo 3 inteiras e 2 casas decimais.

ER17  5 posições, sendo 3 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER16  5 posições, sendo 3 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

Página 37 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

#

--- x ---

204

205

206

vBCFCPST

pFCPST

vFCPST

#

--- x ---

208
209

210

vICMSDeson
motDesICMS

indDeduzDeson

#

--- x ---

212
213

214
215
#

217
218
219
#

221

vICMSSTDeson
motDesICMSST

ICMS90
CST

--- x ---

vBC
pICMS
vICMS

--- x ---

vICMSDeson

5

5

5

5

5

5
5

5

5

5
5

4
5
5

5
5
5
5

5

Sequência XML, agrupa os três campos
abaixo, se informado um, todos devem ser
informados
Valor da Base de cálculo do FCP retido por
substituição tributária.
Percentual de FCP retido por substituição
tributária.
Valor do FCP retido por substituição
tributária.
Sequência XML, agrupa os três campos
abaixo, sendo que o indDeduzDeson é
opcional
Valor do ICMS de desoneração
Motivo da desoneração do ICMS:3-Uso na
agropecuária;9-Outros;12-Fomento
agropecuário
Indica se o valor do ICMS desonerado
(vICMSDeson) deduz do valor do item
(vProd):
0=Valor do ICMS desonerado (vICMSDeson)
não deduz do valor do item (vProd) / total da
NF-e;
1=Valor do ICMS desonerado (vICMSDeson)
deduz do valor do item (vProd) / total da NF-
e.
Sequência XML, agrupa os dois campos
abaixo, se informado um, o outro deverá ser
informado
Valor do ICMS-ST desonerado.
Motivo da desoneração do ICMS-ST: 3-Uso
na agropecuária; 9-Outros; 12-Fomento
agropecuário.
ICMS Outros
Classificação Tributária do Serviço
Sequência XML, agrupa os três campos
abaixo, se informado um, todos devem ser
informados
Valor da BC do ICMS
Alíquota do ICMS
Valor do ICMS
Sequência XML, agrupa os dois campos
abaixo, se informado um, o outro deverá ser
informado
Valor do ICMS de desoneração

-

-

0 - 1

ES  N

1 - 1

13, 2

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

ES  N

1 - 1

3, 2

ER17  5 posições, sendo 3 inteiras e 2 casas decimais.

ES  N

1 - 1

13, 2

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

-

-

0 - 1

ES  N
ES  N

1 - 1
1 - 1

13, 2
2

D21

ES  N

0 - 1

1

D22

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

-

-

0 - 1

ES  N
ES  N

1 - 1
1 - 1

13, 2
2

D21

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

CG
E  N
-
-

1 - 1
1 - 1
0 - 1

ES  N
ES  N
ES  N
-
-

1 - 1
1 - 1
1 - 1
0 - 1

2

D23

Será usado no caso da subvenção
90 - ICMS outros

13, 2
3, 2
13, 2

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER11  5 posições, sendo 3 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

ES  N

1 - 1

13, 2

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

Página 38 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

222

cBenef

#

--- x ---

224

225

226

227
228
229
230
231
232
#
234
235

236
237

238
239

240

241
242

243

244
245

pFCP

vFCP

indSemCST

IBSCBS
CST
cClassTrib
indDoacao
gIBSCBS
vBC

gIBSUF

pIBSUF

--- x ---

gDif

pDif

vDif
gDevTrib

vDevTrib

gRed

pRedAliq

pAliqEfet

vIBSUF
gIBSMun

5

5

5

5

4

4
5
5
5
5
6
0
6
7

7
8

8
7

8

7
8

8

7
6

Código de Benefício Fiscal na UF aplicado ao
item

ES  N

1 - 1

10

Código de Benefício Fiscal utilizado pela UF,
aplicado ao
item.

Sequência XML, agrupa os dois campos
abaixo, se informado um, o outro deverá ser
informado
Percentual de ICMS relativo ao Fundo de
Combate à Pobreza (FCP).
Valor do ICMS relativo ao Fundo de Combate
à Pobreza (FCP).
Sem Situação Tributária para o ICMS

-

-

0 - 1

ES  N

1 - 1

3, 2

ER17  5 posições, sendo 3 inteiras e 2 casas decimais.

ES  N

1 - 1

13, 2

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

CE  N

1 - 1

1

D10

Informar para itens que não tenham nenhuma
relação com o ICMS.
Quando informado o item NÃO PODE ter CFOP
informado

Se informado esse grupo o schema não permite
informar nenhum dos grupos de ICMSXX

Grupo de informações do IBS e CBS
Código Situação Tributária do IBS/CBS

Valor do BC
Sequência XML
Grupo de informações do IBS na UF
Alíquota do IBS de competência das UF (em
percentual)
Grupo de campos do Diferimento
Percentual do diferimento

G
E  C
E  C
E  N
G
E  N
-
-
GS
E  N

1 - 1
1 - 1
1 - 1
0 - 1
1 - 1
1 - 1
1 - 1
1 - 1
1 - 1

G
E  N

0 - 1
1 - 1

E  N
G

E  N

Valor do diferimento
Grupo de Informações da devolução de
tributos
Valor do tributo devolvido. No fornecimento
de energia elétrica, água, esgoto e
gás natural e em outras hipóteses definidas
no regulamento
Grupo de campos da redução de alíquota
Percentual de redução de alíquota do
cClassTrib
Alíquota Efetiva que será aplicada a Base de
Cálculo (em percentual)
Valor do IBS de competência das UF
Grupo de Informações do IBS no Município  GS

G
E  N

E  N

E  N

1 - 1
0 - 1

1 - 1

0 - 1
1 - 1

1 - 1

1 - 1
1 - 1

ER54
ER55

1

D10

30, 2

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

3, 2
3, 4

3, 2
3, 4
30, 2

ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.

ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

30, 2

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

3, 2
3, 4
3, 2
3, 4
30, 2

ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.

ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

Página 39 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

246

247
248

249
250

251

252
253

254

255
256
257
258

259
260

261
262

263

264
265

266

267
268

pIBSMun

gDif

pDif

vDif
gDevTrib

vDevTrib

gRed

pRedAliq

pAliqEfet

vIBSMun

vIBS
gCBS

pCBS

gDif

pDif

vDif
gDevTrib

vDevTrib

gRed

pRedAliq

pAliqEfet

vCBS

gTribRegular

7

7
8

8
7

8

7
8

8

7
6
6
7

7
8

8
7

8

7
8

8

7
6

Alíquota do IBS Municipal (em percentual)

E  N

1 - 1

Grupo de campos do Diferimento
Percentual do diferimento

Valor do diferimento
Grupo de Informações da devolução de
tributos
Valor do tributo devolvido. No fornecimento
de energia elétrica, água, esgoto e
gás natural e em outras hipóteses definidas
no regulamento
Grupo de campos da redução de alíquota
Percentual de redução de alíquota do
cClassTrib
Alíquota Efetiva que será aplicada a Base de
Cálculo (em percentual)
Valor do IBS Municipal
Valor do IBS
Grupo de Tributação da CBS
Alíquota da CBS (em percentual)

Grupo de campos do Diferimento
Percentual do diferimento

G
E  N

0 - 1
1 - 1

E  N
G

1 - 1
0 - 1

G
E  N

0 - 1
1 - 1

E  N

1 - 1

E  N
ES  N
G
E  N

1 - 1
1 - 1
1 - 1
1 - 1

G
E  N

0 - 1
1 - 1

Valor do diferimento
Grupo de Informações da devolução de
tributos
Valor do tributo devolvido. No fornecimento
de energia elétrica, água, esgoto e
gás natural e em outras hipóteses definidas
no regulamento
Grupo de campos da redução de alíquota
Percentual de redução de alíquota do
cClassTrib
Alíquota Efetiva que será aplicada a Base de
Cálculo (em percentual)
Valor da CBS
Grupo de informações da Tributação Regular.
Informar como seria a tributação caso não
cumprida a condição resolutória/suspensiva.
Exemplo 1: Art. 442, §4. Operações com ZFM
e ALC. Exemplo 2: Operações com
suspensão do tributo.

E  N
G

E  N

G
E  N

E  N

E  N
G

1 - 1
0 - 1

1 - 1

0 - 1
1 - 1

1 - 1

1 - 1
0 - 1

3, 2
3, 4

3, 2
3, 4
30, 2

ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.

ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

E  N

1 - 1

30, 2

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

3, 2
3, 4
3, 2
3, 4
30, 2
30, 2

3, 2
3, 4

3, 2
3, 4
30, 2

ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.

ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.
ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.

ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

30, 2

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

3, 2
3, 4
3, 2
3, 4
30, 2

ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.

ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

Página 40 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

269

270

271

272

273

274

275

276

277

278

279

280

281

282

283

310
311
312
313
314

CSTReg

cClassTribReg

7

7

pAliqEfetRegIBSUF  7

Código da Situação Tributária do IBS e CBS  E  C

1 - 1

Informar qual seria o cClassTrib caso não
cumprida a condição resolutória/suspensiva
Alíquota do IBS da UF

E  C

1 - 1

E  N

1 - 1

3, 2
3, 4

vTribRegIBSUF

7

Valor do IBS da UF

E  N

1 - 1

30, 2

pAliqEfetRegIBSMun 7

Alíquota do IBS do Município

E  N

1 - 1

3, 2
3, 4

vTribRegIBSMun

7

Valor do IBS do Município

E  N

1 - 1

30, 2

pAliqEfetRegCBS

7

Alíquota da CBS

E  N

1 - 1

3, 2
3, 4

Informar qual seria o CST caso não cumprida a
condição resolutória/suspensiva

ER54

ER55

ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.
Informar como seria a Alíquota caso não cumprida a
condição resolutória/suspensiva

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

Informar como seria o valor do Tributo caso não
cumprida a condição resolutória/suspensiva
ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.
Informar como seria a Alíquota caso não cumprida a
condição resolutória/suspensiva

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

Informar como seria o valor do Tributo caso não
cumprida a condição resolutória/suspensiva
ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.
Informar como seria a Alíquota caso não cumprida a
condição resolutória/suspensiva

vTribRegCBS

gTribCompraGov

pAliqIBSUF

vTribIBSUF

pAliqIBSMun

vTribIBSMun

pAliqCBS

vTribCBS

gEstornoCred
vIBSEstCred
vCBSEstCred

PIS

CST

7

6

7

7

7

7

7

7

5
6
6
4
5

Valor da CBS

E  N

1 - 1

30, 2

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

Informar como seria o valor do Tributo caso não
cumprida a condição resolutória/suspensiva

Grupo de informações da composição do
valor do IBS e da CBS em compras
governamentais

Valor que seria devido a UF, sem aplicação
do Art. 473. da LC 214/2025

Valor que seria devido ao município, sem
aplicação do Art. 473. da LC 214/2025

G

0 - 1

E  N

1 - 1

E  N

1 - 1

E  N

1 - 1

E  N

1 - 1

E  N

1 - 1

E  N

Valor que seria devido a CBS, sem aplicação
do Art. 473. da LC 214/2025
Informado conforme indicador no cClassTrib  G
Valor do IBS a ser estornado
Valor da CBS a ser estornada
Dados do PIS
classificação Tributária do PIS

E  N
E  N
G
E  N

1 - 1

0 - 1
1 - 1
1 - 1
0 - 1
1 - 1

3, 2
3, 4
30, 2

3, 2
3, 4
30, 2

3, 2
3, 4
30, 2

30, 2
30, 2

ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

ER16  5 posições, sendo 3 inteiras e 2 a 4 casas decimais.

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.
ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

2

D24

01 – Tributável com alíquota básica
02 – Tributável com alíquota diferenciada
06 – Tributável com alíquota erro
07 – Operação isenta de contribuição

Página 41 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

315
316
317
318
319

320
321
322
323

324

325

326

327

328
329
330
331
332

333

vBC
pPIS
vPIS
COFINS
CST

vBC
pCOFINS
vCOFINS

retTrib

vRetPIS

vRetCofins

vRetCSLL

vIRRF

TxReg
vBC
pTaxa
vTaxa
gProcRef

vItem

334

qFaturada

335

vProd

5
5
5
4
5

5
5
5
4

5

5

5

5

4
5
5
5
3

4

4

4

Valor da BC do PIS
Alíquota do PIS (em percentual)
Valor do PIS
Dados do COFINS
classificação Tributária do COFINS

E  N
E  N
E  N
G
E  N

1 - 1
1 - 1
1 - 1
0 - 1
1 - 1

13, 2
3, 2
13, 2

2

D24

Valor da BC do COFINS
Alíquota do COFINS (em percentual)
Valor do COFINS
Grupo de informações de retenção de tributos
federais
Valor do PIS retido

E  N
E  N
E  N
G

E  N

1 - 1
1 - 1
1 - 1
0 - 1

1 - 1

Valor do COFNS retido

Valor da CSLL retida

Valor do IRRF retido

Taxa Regulatória
Valor BC
Alíquota
Valor
Grupo Processo referenciado

E  N

1 - 1

E  N

1 - 1

E  N

1 - 1

G
E  N
E  N
E  N
G

0 - 1
1 - 1
1 - 1
1 - 1
0 - 1

Valor unitário do item

E  N

1 - 1

Quantidade Faturada

E  N

1 - 1

Valor total do item

E  N

1 - 1

13, 2
3, 2
13, 2

13, 2
13, 8
13, 2
13, 8
13, 2
13, 8
13, 2
13, 8

13, 2
3, 2
13, 2

13, 2
13, 10

11, 0
11, 4

13, 2
13, 10

08 – Operação sem incidência da contribuição
09 – Operação com suspensão da contribuição
49 – Outras operações de saída

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER16  5 posições, sendo 3 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

01 – Tributável com alíquota básica
02 – Tributável com alíquota diferenciada
06 – Tributável com alíquota erro
07 – Operação isenta de contribuição
08 – Operação sem incidência da contribuição
09 – Operação com suspensão da contribuição
49 – Outras operações de saída

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER16  5 posições, sendo 3 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

ER39  15 posições, sendo 13 inteiras e 2 a 8 casas

decimais.

ER39  15 posições, sendo 13 inteiras e 2 a 8 casas

decimais.

ER39  15 posições, sendo 13 inteiras e 2 a 8 casas

decimais.

ER39  15 posições, sendo 13 inteiras e 2 a 8 casas

decimais.

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER16  5 posições, sendo 3 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
Este grupo somente deverá ser preenchido quando
houver processo judicial ou administrativo que
altere valores.

ER40  15 posições, sendo 13 inteiras e 2 a 10 casas

decimais.
Informar o valor sem a influência da decisão
judicial/administrativa.

ER31  11 posições, sendo 11 inteiras e 0 a 4 casas

decimais.
Informar a quantidade de comercialização do
produto.

ER40  15 posições, sendo 13 inteiras e 2 a 10 casas

decimais.

Página 42 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

336
337
338

339
340

341
342

343

indDevolucao
gProc

tpProc

nProcesso

infAdProd

gAgregadora
cClass

vTotDFe

344

total

345
346
347
348
349
350

351
352
353

354
355
356
357
358
359
360
361
362
363
364
365

vProd
ICMSTot
vBC
vICMS
vICMSDeson
vFCP

vBCST
vST
vFCPST

vRetTribTot
vRetPIS
vRetCofins
vRetCSLL
vIRRF
vCOFINS
vPIS
vTxReg
vNF
IBSCBSTot

vBCIBSCBS
gIBS

4
4
5

5
3

2
3

3

1

2
2
3
3
3
3

3
3
3

2
3
3
3
3
2
2
2
2
2
3
3

Indicador de devolução do valor do item
Grupo identificador do Processo
Tipo de Processo

E  N
G
E  N

0 - 1
1 - 10
1 - 1

1 - 1  D10

1 – Devolução do valor do item

1

D40

0 - Processo Adm Estadual;
1 - Justiça Federal;
2 - Justiça Estadual;
3 - Processo Adm Municipal;
4 - Processo Adm Federal;
5 - Procon

Número do Processo
Informações adicionais do produto (norma
referenciada, informações complementares,
etc)
Informar para faturamento agregador (3)
Código de classificação

Valor total do documento fiscal da nota
agregada
Dados dos totais da NFGas

Valor Total dos produtos e serviços
Totais referentes ao ICMS
BC do ICMS
Valor Total do ICMS
Valor Total do ICMS desonerado
Valor Total do FCP (Fundo de Combate à
Pobreza).
BC do ICMS ST
Valor Total do ICMS ST
Valor Total do FCP (Fundo de Combate à
Pobreza) retido por substituição tributária.
Total da retenção de tributos federais
Valor do PIS retido
Valor do COFNS retido
Valor da CSLL retida
Valor do IRRF retido
Valor do COFINS
Valor do PIS
Valor Taxa Regulatoria
Valor Total da NFGas
Totais de IBS e CBS
Total Base de Cálculo
Totalização do IBS

E  C
E  C

1 - 1
0 - 1

1 - 60
1 - 500

ER48
ER48

CG
E  C

1 - 1
1 - 1

7 - 7

ER2  Tabela de Classificação de Item da NFGas (validar

por RV)

E  N

1 - 1

13, 2

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

G

1 - 1

E  C
G
E  N
E  N
E  N
E  N

E  N
E  N
E  N

G
E  N
E  N
E  N
E  N
E  N
E  N
E  N
E  N
G
E  N
G

1 - 1
1 - 1
1 - 1
1 - 1
1 - 1
1 - 1

1 - 1
1 - 1
1 - 1

1 - 1
1 - 1
1 - 1
1 - 1
1 - 1
1 - 1
1 - 1
1 - 1
1 - 1
1 - 1
1 - 1
1 - 1

13, 2

13, 2
13, 2
13, 2
13, 2

13, 2
13, 2
13, 2

13, 2
13, 2
13, 2
13, 2
13, 2
13, 2
13, 2
13, 2

30, 2

Para Tipo de Faturamento Agregador (tpFat=3)
todos os totalizadores devem ser zero, exceto vNF
e vTotDFe que devem ser a soma do vTotDFe das
notas anteriores informadas no grupo gAgregadora
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

Página 43 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

366
367
368
369
370
371
372
373
374
375
376
377
378
379
380
381
382

gIBSUF
vDif
vDevTrib
vIBSUF
gIBSMun
vDif
vDevTrib
vIBSMun

vIBS
gCBS
vDif
vDevTrib
vCBS

gEstornoCred
vIBSEstCred
vCBSEstCred

vTotDFe

383

gFat

384

385
386
387
388
389
390
391
392

393
394
395
396
397
398

399
400
401
402

CompetFat

dVencFat
dApresFat
dProxLeitura
nFat
codBarras
codDebAuto
codBanco
codAgencia

enderCorresp

xLgr
nro
xCpl
xBairro
cMun

xMun
CEP
UF
fone

4
5
5
5
4
5
5
5
4
3
4
4
4
3
4
4
2

1

2

2
2
2
2
2
2
2
2

2
3
3
3
3
3

3
3
3
3

Totalização do IBS de competência da UF
Total do Diferimento
Total de devoluções de tributos
Valor total do IBS Estadual
Totalização do IBS de competência Municipal G
Total do Diferimento
Total de devoluções de tributos
Valor total do IBS Municipal
Valor total do IBS
Totalização da CBS
Total do Diferimento
Total de devoluções de tributos
Valor total da CBS
Totalização do estorno de crédito
Valor total do IBS estornado
Valor total da CBS estornada
Valor total do documento fiscal
(vNF + total do IBS + total da CBS)
Grupo de informações de controle da
Fatura

G

G
E  N
E  N
E  N

E  N
E  N
E  N
E  N
G
E  N
E  N
E  N
G
E  N
E  N
E  N

1 - 1
1 - 1
1 - 1
1 - 1
1 - 1
1 - 1
1 - 1
1 - 1
1 - 1
1 - 1
1 - 1
1 - 1
1 - 1
0 - 1
1 - 1
1 - 1
1 - 1

0 - 1

30, 2
30, 2
30, 2

30, 2
30, 2
30, 2
30, 2

30, 2
30, 2
30, 2

30, 2
30, 2
13, 2

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.
ER36  32 posições, sendo 30 inteiras e 2 casas decimais.
ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.
ER36  32 posições, sendo 30 inteiras e 2 casas decimais.
ER36  32 posições, sendo 30 inteiras e 2 casas decimais.
ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.
ER36  32 posições, sendo 30 inteiras e 2 casas decimais.
ER36  32 posições, sendo 30 inteiras e 2 casas decimais.

ER36  32 posições, sendo 30 inteiras e 2 casas decimais.
ER36  32 posições, sendo 30 inteiras e 2 casas decimais.
ER36  15 posições, sendo 13 inteiras e 2 casas decimais.

Obrigatório para tpFat 1 e 3 (normal e
agregador)
Vedado para tpFat 2 (Agregada)

Ano e mês referência do faturamento
(AAAAMM)
Data de vencimento da fatura
Data de apresentação da fatura
Data prevista próxima leitura
Número da Fatura
Linha digitável do código de barras
Código de autorização débito em conta
Número do banco para débito em conta
Número da agência bancária para débito em
conta
Endereço de entrega da fatura.
Logradouro
Número
Complemento
Bairro
Código do município (utilizar a tabela do
IBGE)
Nome do município
CEP
Sigla da UF
Telefone

E  C

1 - 1

6 - 6

ER79

E  D
E  D
E  D
E  C
E  C
CE  C
E  C
E  C

G
E  C
E  C
E  C
E  C
E  C

E  C
E  C
E  C
E  C

1 - 1
0 - 1
1 - 1
0 - 1
1 - 1
1 - 1
1 - 1
1 - 1

0 - 1
1 - 1
1 - 1
0 - 1
1 - 1
1 - 1

1 - 1
1 - 1
1 - 1
0 - 1

10
10
10
1 - 20
1 - 48
1 - 20
3 - 5
1 - 10

2 - 60
1 - 60
1 - 60
2 - 60
7

2 - 60
8
2
7 - 12

D6

ER49  Formato AAAA-MM-DD
ER49  Formato AAAA-MM-DD
ER49  Formato AAAA-MM-DD
ER68
ER69
ER68
ER48
ER48

Informar se diferente do endereço do destinatário

ER48
ER48
ER48
ER48
ER2

ER48
ER72

ER73

Informar zeros não significativos

Página 44 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

403
404
405

email

gPIX

urlQRCodePIX

405 a
406

infAdFat
gAgencia

406 a

nomeAgenciaAtend

406 b

enderAgenciaAtend

406 c
407
408

sitioAgenciaAtend
gHistCons

xHistorico

409
410

411
412
413

414

415

416

417

gCons

CompetFat

uMed
qtdDias
medDiaria

consumo

vFat

medMensal

infAdReg

418

autXML

419
420
421
422

423

CNPJ
CPF
infAdic

infAdFisco

infCpl

424

gRespTec

425

CNPJ

3
2
3

2
1

2

2

2
2
3

3
4

4
4
4

4

4

3

2

1

2
2
1
2

2

1

2

Endereço de E-mail
Grupo de informações do PIX
URL do QRCode do PIX que será
apresentado na fatura
Informações adicionais de faturamento
Grupo de informações da Agência
reguladora
Nome da agência responsável pelo
atendimento
Endereço da agência responsável pelo
atendimento
Sítio eletrônico da agência
Histórico de Consumo
Nome do histórico para
exibição/apresentação
Consumo
Ano e mês referência do faturamento
(AAAAMM)
Unidade Básica de Medida
Quantidade de dias de medição
Média Diária de consumo

Consumo no mês

Valor Faturado

Média Mensal de consumo

E  N

1 - 1

E  C

Informações adicionais de interesse das
agências reguladoras
Autorizados para download do XML do DF-
e
CNPJ do autorizado
CPF do autorizado
Informações Adicionais
Informações adicionais de interesse do Fisco  E  C

CE  C
CE  C
G

G

0 - 1

0 - 10

1 - 1
1 - 1
0 - 1
0 - 1

E  C
G
E  C

0 - 1
0 - 1
1 - 1

E  C
G

0 - 1
0 - 1

1 - 60

2 - 2000

1 - 5000

E  C

0 - 1

1 - 60

E  C

0 - 1

1 - 200

E  C
G
E  C

0 - 1
1 - 5
1 - 1

1 - 200

2 - 60

ER77

ER48

ER48

ER48

ER48

ER48

Obrigatório para tpFat 1 e 2 (normal e agregada)
Vedado para tpFat 3 (agregadora)

ER48  Exemplo: Consumo Meses Anteriores

G
E  C

1 - 13
1 - 1

E  N
E  N
E  N

1 - 1
1 - 1
0 - 1

E  N

0 - 1

E  N

1 - 1

6 - 6

ER79

1
2
13, 2
13, 4
13, 2
13, 4
13, 2
13, 4
13, 2
13, 4
1 - 5000

2
11

D10

1 - m3

ER46
ER41  15 posições, sendo 13 inteiras e 2 a 4 casas

decimais.

ER41  15 posições, sendo 13 inteiras e 2 a 4 casas

decimais.

ER41  15 posições, sendo 13 inteiras e 2 a 4 casas

decimais.

ER41  15 posições, sendo 13 inteiras e 2 a 4 casas

decimais.

ER48  Norma referenciada, informações complementares,

etc
Informar CNPJ ou CPF. Preencher os zeros não
significativos.
Informar zeros não significativos
Informar zeros não significativos

ER7
ER9

1 - 2000

ER48  Norma referenciada, informações complementares,

Informações complementares de interesse do
Contribuinte
Informações do Responsável Técnico pela
emissão do DF-e
CNPJ da pessoa jurídica responsável técnica
pelo sistema utilizado na emissão do
documento fiscal eletrônico

E  C

0 - 5

1 - 3000

ER48

etc

G

0 - 1

E  C

1 - 1

2

ER7

Informar o CNPJ da pessoa jurídica desenvolvedora
do sistema utilizado na emissão do documento
fiscal eletrônico.

Página 45 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

426

xContato

email
fone

--- x ---

idCSRT

hashCSRT

infNFGasSupl
qrCodNFGas

427
428

#
430

431

432
433

434

2

2
2

0
2

2

0
1

0

Nome da pessoa a ser contatada

E  C

1 - 1

2 - 60

ER48

Informar o nome da pessoa a ser contatada na
empresa desenvolvedora do sistema utilizado na
emissão do documento fiscal eletrônico. No caso de
pessoa física, informar o respectivo nome.

Email da pessoa jurídica a ser contatada
E  C
Telefone da pessoa jurídica a ser contatada  E  C

1 - 1
1 - 1

1 - 60
7 - 12

ER77
ER73  Preencher com o Código DDD + número do

Sequência XML
Identificador do código de segurança do
responsável técnico
Hash do token do código de segurança do
responsável técnico

-
-
ES  C

0 - 1
1 - 1

ES  C

1 - 1

3

20

telefone.

ER74

Identificador do CSRT utilizado para geração do
hash
O hashCSRT é o resultado das funções SHA-1 e
base64 do token CSRT fornecido pelo fisco + chave
de acesso do DF-e. (Implementação em futura NT)

Observação: 28 caracteres são representados no
schema como 20 bytes do tipo base64Binary

Informações suplementares da NFGas
Texto com o QR-Code para consulta da
NFGas
ds:Signature

G
E  C

1 - 1
1 - 1

E  C

1 - 1

50 -
1000

ER71

Expressões Regulares
ER1

(((20(([02468][048])|([13579][26]))-02-29))|(20[0-9][0-9])-((((0[1-9])|(1[0-2]))-((0[1-9])|(1\d)|(2[0-8])))|((((0[13578])|(1[02]))-31)|(((0[1,3-
9])|(1[0-2]))-(29|30)))))T(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d([\-,\+](0[0-9]|10|11):00|([\+](12):00))
[0-9]{7}
[0-9]{6}[A-Z0-9]{12}[0-9]{26}
[0-9]{36}
[0-9]{16}
[0-9]{3,4}
[A-Z0-9]{12}[0-9]{2}
[0-9]{0}|[A-Z0-9]{12}[0-9]{2}
[0-9]{11}
[0-9]{3,11}
0|0\.[0-9]{2}|[1-9]{1}[0-9]{0,2}(\.[0-9]{2})?
0\.[0-9]{2}|[1-9]{1}[0-9]{0,2}(\.[0-9]{2})?
0|0\.[0-9]{3}|[1-9]{1}[0-9]{0,2}(\.[0-9]{3})?

ER2
ER3
ER4
ER5
ER6
ER7
ER8
ER9
ER10
ER11
ER12
ER13

Página 46 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

ER14
ER15
ER16
ER17
ER18
ER19
ER20
ER21
ER22
ER23
ER24
ER25
ER26
ER27
ER28
ER29
ER30
ER31
ER32
ER33
ER34
ER35
ER36
ER37
ER38
ER39
ER40
ER41
ER42
ER43

0\.[0-9]{3}|[1-9]{1}[0-9]{0,2}(\.[0-9]{3})?
[0-9]{1,3}(\.[0-9]{2,3})?
0|0\.[0-9]{2,4}|[1-9]{1}[0-9]{0,2}(\.[0-9]{2,4})?
0\.[0-9]{2,4}|[1-9]{1}[0-9]{0,2}(\.[0-9]{2,4})?
0(\.[0-9]{2,4})?|[1-9]{1}[0-9]{0,1}(\.[0-9]{2,4})?|100(\.0{2,4})?
[0-9]{1,4}(\.[0-9]{2,8})?
0|0\.[0-9]{3}|[1-9]{1}[0-9]{0,4}(\.[0-9]{3})?
0|0\.[0-9]{3}|[1-9]{1}[0-9]{0,7}(\.[0-9]{3})?
0\.[0-9]{3}|[1-9]{1}[0-9]{0,7}(\.[0-9]{3})?
0|0\.[0-9]{4}|[1-9]{1}[0-9]{0,7}(\.[0-9]{4})?
0\.[0-9]{4}|[1-9]{1}[0-9]{0,7}(\.[0-9]{4})?
0|0\.[0-9]{6}|[1-9]{1}[0-9]{0,8}(\.[0-9]{6})?
0\.[0-9]{6}|[1-9]{1}[0-9]{0,8}(\.[0-9]{6})?
0|0\.[0-9]{8}|[1-9]{1}[0-9]{0,8}(\.[0-9]{8})?
0\.[0-9]{8}|[1-9]{1}[0-9]{0,8}(\.[0-9]{8})?
0|0\.[0-9]{4}|[1-9]{1}[0-9]{0,10}(\.[0-9]{4})?
0\.[0-9]{4}|[1-9]{1}[0-9]{0,10}(\.[0-9]{4})?
[0-9]{1,11}(\.[0-9]{2,4})?
0|0\.[0-9]{3}|[1-9]{1}[0-9]{0,11}(\.[0-9]{3})?
0\.[0-9]{3}|[1-9]{1}[0-9]{0,11}(\.[0-9]{3})?
0|0\.[0-9]{4}|[1-9]{1}[0-9]{0,11}(\.[0-9]{4})?
0\.[0-9]{4}|[1-9]{1}[0-9]{0,11}(\.[0-9]{4})?
0|0\.[0-9]{2}|[1-9]{1}[0-9]{0,12}(\.[0-9]{2})?
0\.[0-9]{2}|[1-9]{1}[0-9]{0,12}(\.[0-9]{2})?
[0-9]{1,13}(\.[0-9]{2,6})?
[0-9]{1,13}(\.[0-9]{2,8})?
[0-9]{1,13}(\.[0-9]{2,10})?
[0-9]{1,13}(\.[0-9]{2,4})?
[0-9]{0,14}|ISENTO
[0-9]{2,14}

Página 47 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

ER44
ER45
ER46
ER47
ER48
ER49

ER50
ER51

ER52
ER53
ER54
ER55
ER56
ER57
ER58
ER59
ER60
ER61
ER62
ER63
ER64
ER65
ER66
ER67
ER68
ER69
ER70
ER71

[1-9]{1}[0-9]{0,8}
0|[1-9]{1}[0-9]{0,2}
[0-9]{2}
[0-9]{1,4}
[!-ÿ]{1}[ -ÿ]{0,}[!-ÿ]{1}|[!-ÿ]{1}
((((20|19|18)(([02468][048])|([13579][26]))-02-29))|((20|19|18)[0-9][0-9])-((((0[1-9])|(1[0-2]))-((0[1-9])|(1\d)|(2[0-
8])))|((((0[13578])|(1[02]))-31)|(((0[1,3-9])|(1[0-2]))-(29|30)))))
[0-9]\.[0-9]{6}|[1-8][0-9]\.[0-9]{6}|90\.[0-9]{6}|-[0-9]\.[0-9]{6}|-[1-8][0-9]\.[0-9]{6}|-90\.[0-9]{6}
[0-9]\.[0-9]{6}|[1-9][0-9]\.[0-9]{6}|1[0-7][0-9]\.[0-9]{6}|180\.[0-9]{6}|-[0-9]\.[0-9]{6}|-[1-9][0-9]\.[0-9]{6}|-1[0-7][0-9]\.[0-9]{6}|-180\.[0-
9]{6}
[0-9]{15}
(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])
\d{3}
\d{6}
\d{2}
0\.[1-9]{1}[0-9]{3}|0\.[0-9]{3}[1-9]{1}|0\.[0-9]{2}[1-9]{1}[0-9]{1}|0\.[0-9]{1}[1-9]{1}[0-9]{2}|[1-9]{1}[0-9]{0,10}(\.[0-9]{4})?
[0-9]{1}
([!-ÿ]{0}|[!-ÿ]{2,20})?
[0-9]{10}
([!-ÿ]{0}|[!-ÿ]{1,15})?
([!-ÿ]{0}|[!-ÿ]{1,20})?
(0[1-9]|1[0-9]|20)
(0[1-9]|1[0-9]|99)
[0-9]{4}
[1-9]{1}[0-9]{0,1}|[1-8]{1}[0-9]{2}|[9]{1}[0-8]{1}[0-9]{1}|[9]{1}[9]{1}[0]{1}
[1-9]{1}[0-9]{0,3}
[0-9]{1,20}
[0-9]{1,48}
NFGas[0-9]{6}[A-Z0-9]{12}[0-9]{26}
((HTTPS?|https?)://.*\?chNFGas=[0-9]{6}[A-Z0-9]{12}[0-9]{26}&amp;tpAmb=[1-2](&amp;sign=[!-ÿ]{1}[ -ÿ]{0,}[!-ÿ]{1}|[!-ÿ]{1})?)

Página 48 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

ER72
ER73
ER74
ER75
ER76
ER77
ER78
ER79
ER80

Domínio
D1
D2
D3
D4
D5
D6
D7
D8
D9
D10
D11
D12
D13
D14
D15
D16
D17
D18
D19

[0-9]{8}
[0-9]{7,12}
[0-9]{3}
1\.00
(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])
[^@]+@[^\.]+\..+
[123567][0-9]([0-9][1-9]|[1-9][0-9])
[0-9]{1,6}
[123567][0-9]([0-9][1-9]|[1-9][0-9])

11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 35, 41, 42, 43, 50, 51, 52, 53
11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 35, 41, 42, 43, 50, 51, 52, 53, 90, 91, 92, 93
11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 35, 41, 42, 43, 50, 51, 52, 53, 99
76
AC, AL, AM, AP, BA, CE, DF, ES, GO, MA, MG, MS, MT, PA, PB, PE, PI, PR, RJ, RN, RO, RR, RS, SC, SE, SP, TO, EX
AC, AL, AM, AP, BA, CE, DF, ES, GO, MA, MG, MS, MT, PA, PB, PE, PI, PR, RJ, RN, RO, RR, RS, SC, SE, SP, TO
1, 2, 3, 4
1, 2, 3, 4, 5, 6
0, 1, 2, 3, 4
1
0, 1, 2, 3, 4, 5, 6, 7, 8
00
10
20
40, 41
51
60
70
0, 1, 2, 3

Página 49 / 50

Projeto
Nota Fiscal Eletrônica do Gás
MOC 1.00

D20
D21
D22
D23
D24
D25
D26
D27
D28
D29
D30
D31
D32
D33
D34
D35
D36
D37
D38
D39
D40

0, 1, 2, 3, 4, 5, 6
3, 9, 12
0, 1
90
01, 02, 06, 07, 08, 09, 49
0, 3
1, 2, 3
0, 3
1, 2, 3, 4, 5
1, 2, 9
1, 2, 3
01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 99
01, 02, 04, 06, 07, 08, 09, 10, 11, 12, 99
01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14
01, 02, 03, 04, 05, 06, 07, 08, 99
01, 02, 03, 04, 05, 06, 07, 08, 09, 10
01, 02, 03, 04, 05, 06
0, 1, 2, 3, 4, 5, 6, 7
1, 2, 3, 4, 5, 6, 7
00, 01, 02, 03, 04, 05
0, 1, 2, 3, 4, 5

Página 50 / 50

