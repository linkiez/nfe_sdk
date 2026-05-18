Projeto Nota Fiscal de
Água e Saneamento
Eletrônica

Manual de Orientação do Contribuinte

Anexo I – Leiaute e Regras de Validação da NFAg

Versão 1.00k – 11 de março de 2026

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00k

Sumário

Histórico de Alterações / Cronograma .......................................................................... 3
Introdução ............................................................................................................. 4
1
2  Regras de Validação da NFAg............................................................................... 5
2.1  Regras de Validação Básicas do Serviço ....................................................... 5
2.2  Regras de Validação Específicas da NFAg .................................................... 5
2.3
Eventos de Marcação originados pela NFAg ................................................ 24
2.4
Procedimentos  para  Cancelar  ou  Alterar  NFAg  faturadas  por  terceiro
relacionadas e marcadas com evento da NFAg de Faturamento Conjunto ............. 24
Leiaute da NFAg .................................................................................................. 26

3

Página 2 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00k

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

1.00g

1.00h

1.00i

1.00j

1.00k

  Elaboração do draft do MOC da NFAg

  Ajustes nos campos do IBS e CBS

  Ajuste em RV´s de cálculo de valores nos itens
  Aumento do idLigacao para 20 caracteres
  Regras do PAA
  Correção do tipo NFAg no Schema

  Ajuste no tamanho do campo quantidade de dias de medição
e ajuste na observação do campo CNPJ do Destinatário
Correção na regra de validação do CBS, permitindo alíquota zero para














a CBS em operações específicas dentro de áreas incentivadas.

Ajuste na explicação da regra de valor do tributo negativo
Explicação  dos  procedimentos  para  cancelamento  e  substituição  de

NFAg com eventos de marcação automático

Desativação das regras de validação IE do emitente e destinatário

Esclarecimento do preenchimento do campo vTotDFe

Correção na regra da redução de aliquota

Inclusão  de  campos  do  tipo  de  operação  e  DFe  referenciado  nas

compras governamentais



Ajuste nas mensagens de rejeição das validações compras gov

06/04/2026

04/05/2026

Página 3 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00k

1

Introdução

Este documento é parte integrante do Manual de Orientação do Contribuinte (MOC) e

tem por objetivo a definição do leiaute da NFAg, modelo 75.

O Manual de Orientação do Contribuinte 1.00 é composto pelos seguintes documentos:

  MOC – Visão Geral

  MOC – Anexo I – Leiaute e Regras de Validação da NFAg

  MOC – Anexo II – Manual de Especificações Técnicas do DANFE-AG

Página 4 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

2  Regras de Validação da NFAg

As validações descritas a seguir aplicam-se a NFAg enviada ao serviço de recepção síncrono (MOC Visão Geral - item 4.3).

2.1  Regras de Validação Básicas do Serviço

Deverão ser aplicadas as validações gerais conforme quadro abaixo (MOC Visão Geral – Item 4):

Grupo
D
E
E-1

Descrição

Validação do Certificado de Assinatura
Validação da Assinatura Digital
Validações do PAA

2.2  Regras de Validação Específicas da NFAg

#

Regra de Validação

Aplic.

cStat.

Efeito  Mensagem

G01

G02

G03

G04

G05

G06

Tipo do ambiente da NFAg (tag: ide/tpAmb) difere do ambiente do Web Service

Código da UF do Emitente (tag: ide/cUF) difere da UF Autorizadora

Observação: Essa rejeição ocorre também quando a UF não está habilitada no
ambiente da SEFAZ Virtual
Sigla da UF do Emitente (tag: emit/UF) difere da UF Autorizadora

Se forma de emissão da NFAg = 1 (Normal):
dhCont e xJust não devem ser informados
Se forma de emissão (tag: ide/tpEmis) da NFAg = 2 (Contingência Off-Line):
dhCont e xJust devem ser informados

Validações Gerais

Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

252

226

247

415

416

Rej.

Rej.

Rejeição: Ambiente informado diverge do Ambiente de recebimento

Rejeição: Código da UF do Emitente diverge da UF autorizadora

Rej.

Rejeição: Sigla da UF do Emitente diverge da UF autorizadora

Rej.

Rej.

Rejeição: Data e Justificativa de entrada em contingência não devem ser
informadas para tipo de emissão igual a Normal.
Rejeição: Data e Justificativa de entrada em contingência devem ser
informadas

Se Data de entrada em contingência (tag: ide/dhCont) estiver informada, esta deve ser
menor ou igual à data de emissão

Obrig

417

Rej.

Rejeição: Data de entrada em contingência posterior ou igual a data de
emissão.

Página 5 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

G07

Se informado número do Site de autorização diferente de Normal (nSiteAutoriz > 0)
verificar se o Site do Autorizador corresponde ao que foi informado

Obrig.

418

Rej.

Rejeição: Site de autorização inválido

G08

G09

G10

G11

G12

G13

G14

G18

G21

G22

G23

G24

G25

Observação: O número do Site só deve ser diferente de zero para ambientes de
autorização em múltiplos Sites (a relação do número identificador de cada Site deverá
ser disponibilizada pelo Autorizador)
Se forma de emissão (tag: ide/tpEmis) da NFAg = 2 (Contingência Off-Line):
Rejeitar se Tipo da NFAg for diferente de 0 (Normal)
Campo "ID" inválido:
- Falta literal "NFAG"
- Chave de acesso do campo ID difere da concatenação dos campos correspondentes
Verificar se Ano da chave de acesso é inferior a 2025

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

Rejeição: Emissão Off-line só é permitida para NFAg do tipo Normal

Rej.

Rejeição: Erro na composição do Campo ID

Rej.

Rejeição: Ano da NFAg informado na chave de acesso inválido

Rej.

Rejeição: Digito Verificador da chave de acesso composta inválido

Validar CNPJ Emitente (dígito controle, zeros ou nulo)

Se informada IE do Emitente:
Validar IE Emitente (erro no dígito de controle)
Obs.: Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o
acréscimo de zeros não significativos previstos na definição do formato da IE se
necessário.
Exemplo: IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser
padronizada para 00130000019, com o acréscimo dos zeros não significativos
necessários para a validação do dígito verificador.
Emitente não credenciado para emissão de NFAg

Município do Emitente diverge da UF (verificar se as 2 posições da esquerda do
código de município que identifica o código da UF é compatível com a sigla da UF
informada)
Código do Município Emitente inexistente (Tabela Municípios do IBGE)

Obrig.

Obrig.

207

209

Rej.

Rejeição: CNPJ do emitente inválido

Rej.

Rejeição: IE do emitente inválida

Obrig.

Obrig.

203

407

Rej.

Rejeição: Emissor não habilitado para emissão da NFAg

Rej

Rejeição: Código de Município diverge da UF do Emitente da NFAg

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

Rejeição: Código de Município diverge da UF do Destinatário da NFAg

Página 6 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

G26

G27

G31

G32

Código do Município do Destinatário deve existir (Tabela Municípios do IBGE)

Se IE Destinatário informada:
- Validar IE do Destinatário (erro no dígito de controle)

Obrig.

Obrig.

406

427

Rej.

Rejeição: Município do Destinatário inexistente

Rej.

Rejeição: IE do Destinatário inválida

Observação: Antes da validação, a IE deverá ser normalizada, na aplicação da
SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato
da IE se necessário.

Validações da Data de Emissão

Data/Hora de Emissão posterior a Data/Hora de Recebimento (o Ambiente Autorizador
deve considerar a hora local do emissor para a validação). A SEFAZ deve tolerar uma
diferença máxima de 5 minutos quando a data/hora de emissão for maior que a data
de recebimento, em função da sincronização de horário de servidores.
Se tipo de emissão for Normal (tag:tpEmis=1):
Data-Hora de Emissão com atraso superior a 120 horas em relação ao horário de
recepção na SEFAZ Autorizadora.

Exceção: A critério da UF, pode ser aceita NFAg com Data de Emissão muito
atrasada, desde que tenha sido emitido em contingência Off-Line (tag:tpEmis=2). A
NFAg transmitido para a SEFAZ Autorizadora após o prazo de 120 horas deve
retornar: cStat=”150- Autorizado Uso de NFAg, autorização fora de prazo”.

Obrig.

212

Rej.

Rejeição: Data/hora de emissão NFAg posterior a data/hora de
recebimento

Obrig.

228

Rej.

Rejeição: NFAg com Data-Hora de Emissão muito atrasada

G33

Acessar BD NFAg (Chave: UF, CNPJ Emit, Modelo, Série, Nro):

Obrig

539

Rej.

Validações do Banco de Dados

Rejeição: Duplicidade de NFAg, com diferença na Chave de Acesso
[chNFAg: 99999999999999999999999999999999999999999999]
[nProt:9999999999999999]
[dhAut: AAAA-MM-DDTHH:MM:SS TZD].

 - Verificar Duplicidade de NFAg com diferença na Chave de Acesso
(Campo de Código Numérico difere)
Retornar a chave de acesso já autorizada, o número do protocolo e data de
autorização
[chNFAg: 99999999999999999999999999999999999999999999]
[nProt:9999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]
Acessar BD NFAg (Chave: UF, CNPJ Emit, Modelo, Série, Nro):
Verificar Duplicidade de NFAg
Retornar Protocolo e data de autorização.
[nProt:9999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD].

Observação: Esta validação leva em consideração o ambiente de autorização do DF-
e (tpEmis e nSiteAutoriz)
Verificar se NFAg está cancelada
Retornar Protocolo e data de autorização do evento de cancelamento.
[nProt:9999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]
Verificar se NFAg está substituída:
Retornar Protocolo e data de autorização do evento de substituição.
[nProt:9999999999999999][dhSubst: AAAA-MM-DDTHH:MM:SS TZD]

G34

G35

G36

Obrig.

204

Rej.

Rejeição: Duplicidade de NFAg
[nProt:9999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD].

Obrig.

218

Rej.

Rejeição: NFAg já está cancelada na base de dados da SEFAZ.
[nProt:9999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD].

Obrig.

224

Rej.

Rejeição: NFAg já está substituída na base de dados da SEFAZ.
[nProt:9999999999999999][dhSubst: AAAA-MM-DDTHH:MM:SS TZD].

Página 7 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

G37

G38

G39

G40

G41

G42

G43

G44

G45

Se o Tipo da NFAg = 3 (Substituição) (tag: finNFAg):
 - O grupo de informações da substituição (grupo: gSub) deve ser informado

Obrig.

411

Rej.

Rejeição: Grupo NFAg de Substituição deve ser informado para a NFAg
de Substituição

Se o Tipo da NFAg =1 (Normal) (tag: finNFAg):
- O grupo de informações da substituição (grupo: gSub) NÃO deve ser informado

Obrig.

412

Rej.

Rejeição: Grupo NFAg de Substituição não deve ser informado para
NFAg Normal

Validações da Substituição

Se Tipo da NFAg = 3 (Substituição) (tag: finNFAg) e informada chave de acesso da
NFAg substituída:
 - Validar chave de acesso da NFAg substituída.

Retornar motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano <
2025 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 75, Número
zerado, Tipo de emissão inválido, UF inválida ou DV inválido)
[Motivo: XXXXXXXXXXXX]
Se Tipo da NFAg = 3 (Substituição) (tag: finNFAg) e informada chave de acesso da
NFAg substituída:
- NFAg substituída não pode existir com diferença na Chave de Acesso

Retornar a chave de acesso já autorizada, o número do protocolo e data de
autorização da NFAg
[chNFAg: 99999999999999999999999999999999999999999999]
[nProt:9999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]
Se Tipo da NFAg = 3 (Substituição) (tag: finNFAg) e informada chave de acesso da
NFAg substituída:
- A NFAg substituída deve existir
Acesso BD NFAg (Chave: CNPJ Emit, Modelo, Série, Nro)

Observação: Esta validação leva em consideração o ambiente de autorização do DF-
e (nSiteAutoriz)
Se Tipo da NFAg = 3 (Substituição) (tag: finNFAg) e informada chave de acesso da
NFAg substituída:
- A NFAg substituída não pode estar cancelada
Se Tipo da NFAg = 3 (Substituição) (tag: finNFAg) e informada chave de acesso da
NFAg substituída:
- A NFAg substituída não pode estar substituída
Se Tipo da NFAg = 3 (Substituição) (tag: finNFAg):
- CNPJ do emitente da NFAg substituta deve ser igual ao informado na NFAg
substituída

Exceção: os casos de alteração do CNPJ da empresa por motivo de aquisição, fusão,
incorporação deve ser tratados no ambiente de autorização da NFAg
Se Tipo da NFAg = 3 (Substituição) (tag: finNFAg):
- Identificação do destinatário da NFAg substituta deve ser igual ao informado na NFAg
substituída (tags: CNPJ/CPF/idOutros)

Obrig.

414

Rej

Rejeição: Chave de acesso da NFAg substituída inválida
[Motivo: XXXXXXXXXXX]

Obrig.

206

Rej.

Rejeição: NFAg substituída com diferença de Chave de Acesso
[chNFAg: 99999999999999999999999999999999999999999999]
[nProt:9999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]

Obrig

208

Rej

Rejeição: NFAg a ser substituída inexistente

Obrig.

210

Rej

Rejeição: NFAg a ser substituída não pode estar cancelada

Obrig.

211

Rej

Rejeição: NFAg a ser substituída não pode ter sido substituída
anteriormente

Obrig.

221

Rej.

Rejeição: CNPJ do emitente da NFAg substituta deve ser igual ao
informado na NFAg substituída

Obrig.

484

Rej.

Rejeição: Destinatário da NFAG substituição deve ser igual a NFAG
original

Página 8 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

G46

G47

G48

G49

G50

G51

G52

G53

Se o Tipo da NFAg = 3 (Substituição) (tag: finNFAg):
- A NFAg Substituída deve ser do mesmo tipo de faturamento (tag: tpFat) da NFAg de
Substituição

Obrig.

527

Rej.

Rejeição: NFAg substituída com tipo de faturamento diferente da NFAg
de Substituição

Validações da NFAg Anterior (itens)

Se o item possui indicador de devolução (tag: indDevolucao)
- Verificar se foi informada chave de acesso (chNFAgAnt) como atributo no
detalhamento dos Produtos e Serviços (grupo: det):

Observação: A chave de acesso anterior será quando se quiser fazer referência a um
item devolvido de nota de exercício anterior
Se informada chave de acesso de NFAg anterior (tag: chNFAgAnt) no detalhamento
dos Produtos e Serviços (grupo: det):

- Validar chave de acesso da NFAg anterior.
Retornar motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano <
2025 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 75, Número
zerado, Tipo de emissão inválido, UF inválida ou DV inválido)
[Motivo: XXXXXXXXXXXX]
Se informada chave de acesso de NFAg anterior (tag: chNFAgAnt) no detalhamento
dos Produtos e Serviços (grupo: det):

- NFAg anterior não pode existir com diferença na Chave de Acesso
Retornar a chave de acesso já autorizada, o número do protocolo e data de
autorização da NFAg
[chNFAg: 99999999999999999999999999999999999999999999]
[nProt:9999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]
Se informada chave de acesso de NFAg anterior (tag: chNFAgAnt) no detalhamento
dos Produtos e Serviços (grupo: det):
- A NFAg anterior deve existir
Acesso BD NFAg (Chave: CNPJ Emit, Modelo, Série, Nro)

Observação: Esta validação leva em consideração o ambiente de autorização do DFe
(nSiteAutoriz).
Se informada chave de acesso de NFAg anterior (tag: chNFAgAnt) no detalhamento
dos Produtos e Serviços (grupo: det):

- A NFAg anterior não pode estar cancelada
Se informada chave de acesso de NFAg anterior (tag: chNFAgAnt) no detalhamento
dos Produtos e Serviços (grupo: det):
- A NFAg anterior não pode estar substituída
Se informada chave de acesso da NFAg anterior (tag: chNFAgAnt):
- CNPJ do emitente da NFAg anterior deve ser igual ao informado na NFAg de ajuste

Exceção: os casos de alteração do CNPJ da empresa por motivo de aquisição, fusão,
incorporação deve ser tratados no ambiente de autorização da NFAg

Obrig.

238

Rej.

Rejeição: Chave de acesso anterior deve ser informada para item com
indicador de devolução

Obrig.

242

Rej.

Rejeição: Rejeição: Chave de Acesso anterior inválida
[Motivo: XXXXXXXXX]

Obrig.

245

Rej.

Rejeição: NFAg anterior com diferença de Chave de Acesso
[chNFAg: 99999999999999999999999999999999999999999999]
[nProt:9999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]

Obrig

246

Rej

Rejeição: NFAg anterior inexistente

Obrig.

250

Rej

Rejeição: NFAg a anterior não pode estar cancelada

Obrig.

251

Rej

Rejeição: NFAg a anterior não pode ter sido substituída

Obrig.

255

Rej.

Rejeição: CNPJ do emitente da NFAg anterior deve ser igual ao
informado na NFAg

Página 9 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

Validações do Faturamento Conjunto

Se tipo de faturamento da NFAg = 2 (Faturado por terceiro) (tag: tpFat):
- O grupo de informações do PAA (provedor de assinatura e autorização) deve ser
informado (grupo:infPAA)
Se tipo de faturamento da NFAg for diferente de 2 (Fatura por terceiro) (tag: tpFat
diferente de 2):

- Rejeitar se foi informado grupo de informações do PAA (grupo:infPAA)
Se tipo de faturamento da NFAg diferente 3 (Faturado conjunto) (tag: tpFat):
- Rejeitar se informado grupo do Faturamento Conjunto (grupo: gFatConjunto)

Obrig.

515

Rej.

Rejeição: CNPJ do PAA deve ser informado para faturamento por terceiro

Obrig.

532

Rej.

Rejeição: CNPJ do PAA NÃO deve ser informado para faturamento
normal ou conjunto

Obrig.

516

Rej.

Rejeição: Faturamento conjunto vedado para esse tipo de faturamento

Se tipo de faturamento da NFAg = 3 (Faturado conjunto) (tag: tpFat):
O grupo do Faturamento Conjunto DEVE ser informado (grupo: gFatConjunto)

Obrig.

531

Rej.

Rejeição: Faturamento conjunto deve ser informado para esse tipo de
faturamento

Se informada chave de acesso da NFAg faturada em conjunto (tag:
gFatConjunto/chNFAgFat):

Obrig.

517

Rej.

Rejeição: Rejeição: Chave de Acesso da NFAg faturada em conjunto
[Motivo: XXXXXXXXX]

- Validar chave de acesso da NFAg faturada em conjunto

Retornar motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano <
2025 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 75, Número
zerado, Tipo de emissão inválido, UF inválida ou DV inválido)
[Motivo: XXXXXXXXXXXX]
Se informada chave de acesso de NFAg faturada em conjunto (tag:
gFatConjunto/chNFAgFat):

- A NFAg faturada em conjunto não pode existir com diferença na Chave de Acesso
Retornar a chave de acesso já autorizada, o número do protocolo e data de
autorização da NFAg

Obrig.

518

Rej.

Rejeição: NFAg faturada em conjunto com diferença de Chave de Acesso
[chNFAg: 99999999999999999999999999999999999999999999]
[nProt:9999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]

G54

G55

G58

G59

G60

G61

[chNFAg: 99999999999999999999999999999999999999999999]
[nProt:9999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]

G62

Se informada chave de acesso de NFAg faturada em conjunto (tag:
gFatConjunto/chNFAgFat):

- A NFAg faturada em conjunto deve existir
Acesso BD NFAg (Chave: CNPJ Emit, Modelo, Série, Nro)

G63

Observação: Esta validação leva em consideração o ambiente de autorização do DFe
(nSiteAutoriz).
Se informada chave de acesso de NFAg faturada em conjunto (tag:
gFatConjunto/chNFAgFat):

- A NFAg faturada em conjunto não pode estar cancelada

Obrig

519

Rej

Rejeição: NFAg faturada em conjunto inexistente

Obrig.

520

Rej

Rejeição: NFAg faturada em conjunto não pode estar cancelada

Página 10 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

G64

G65

G66

Se informada chave de acesso de NFAg faturada em conjunto (tag:
gFatConjunto/chNFAgFat):

- A NFAg faturada em conjunto não pode estar substituída
Se informada chave de acesso de NFAg faturada em conjunto (tag:
gFatConjunto/chNFAgFat):

- A NFAg faturada em conjunto deve ser do tipo de faturamento Faturada por terceiro
(tpFat=2)
Se informada chave de acesso de NFAg faturada em conjunto (tag:
gFatConjunto/chNFAgFat):
 - CNPJ do emitente da NFAg faturada em conjunto deve ser DIFERENTE do emitente
informado na NFAg faturada por terceiro.

Observação: Verificar o CNPJ da chave de acesso da NFAg faturada por terceiro com
o CNPJ da NFAg de faturamento conjunto

Obrig.

521

Rej

Rejeição: NFAg faturada em conjunto não pode ter sido substituída

Obrig.

533

Rej.

Rejeição: NFAg faturada em conjunto deve ser de tipo de faturamento
faturada por terceiro

Obrig.

267

Rej.

Rejeição: O CNPJ da NFAg faturada por terceiro deve ser diferente da
NFAg faturada em conjunto

G67

Se tipo de faturamento da NFAg =1 (Normal) ou 3 (Faturamento Conjunto) (tag: tpFat):

Obrig.

270

Rej.

Rejeição: Fatura deve ser informada para tipo de faturamento normal e
conjunto

Validações da Fatura da NFAg

G68

- O grupo de informações da fatura deve ser informado (grupo: gFat)
Se tipo de faturamento da NFAg = 2 (Faturado por terceiro) (tag: tpFat):

- O grupo de informações da fatura NÃO deve ser informado (grupo: gFat)

Obrig.

273

Rej.

Rejeição: Fatura não deve ser informada para NFAg faturada por terceiro

G69

G70

G71

Código de Classificação (tag: cClass) informado inválido (Verificar tabela de códigos
de classificação, item 7.6 do MOC)

Obrig.

276

Rej.

Rejeição: Código de classificação do item inexistente
[nItem: NNN]

Valor do item (tag: vProd) difere de valor unitário (tag: vItem) * Quantidade Faturada
(tag: qFaturada) * Fator de Poluição se informado (tag:fatorPoluicao)

Obrig.

435

Rej.

Rejeição: Valor do item difere do calculado
[nItem: NNN]

Validações dos Itens da NFAg (Verificar em cada um dos itens)

Observação: Considerar uma tolerância de R$ 0,05 para mais ou para menos.
Se tipo de faturamento da NFAg =1 (Normal) ou 2 (Faturado por terceiro)

Obrig.

534

Rej.

- Rejeitar se existir algum item no detalhamento de Produtos e serviços com cClass de
Faturamento Conjunto

Rejeição: Classificação de produto inválida para faturamento normal e
faturamento de terceiro
[nItem: NNN]

G72

Observação: Ver indicadores da tabela cClass publicados no portal da NFag
Se tipo de faturamento da NFAg =3 (Faturamento conjunto)

Obrig.

535

Rej.

- Pelo menos UM item deve existir no detalhamento de Produtos e serviços com
cClass de Faturamento Conjunto

Observação: Ver indicadores da tabela cClass publicados no portal da NFag

Rejeição: Deve existir item de cClass de faturamento conjunto para o tipo
de faturamento indicado
[nItem: NNN]

Página 11 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

G73

Se a NFAg possuir um item de um cClass de faturamento conjunto:
- O item com este cClass não pode ser tributado.

Obrig.

266

Rej.

Rejeição: Item com classificação de faturamento conjunto não pode ser
tributado
[nItem: NNN]

Observação: utilizar CST e cClassTrib que VEDAM preenchimento do grupo IBSCBS

Validações dos Itens da NFAg (Tributos)

G75

G76

G77
G78

G79

G80

G81

G82

G83

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
Se CST informado possuir indicador que EXIGE informação de redução de alíquota
para o IBS Estadual ou informado grupo de compra governamental, o grupo gRed
DEVE estar informado

Exceção: A regra não se aplica para CST do IBS/CBS (tag: IBSCBS/CST)
que possui indicador que não permite a informação do IBS/CBS
Se informado grupo de Redução de Alíquota para IBS Estadual (gIBSUF/gRed):
Verificar se percentual de Redução de Alíquota (pRedAliq) é válido para o cClassTrib
informado (gIBSCBS/cClassTrib)

Obrig.

Obrig.

Obrig.
Obrig.

Obrig

311

312

313
388

314

Rej.

Rejeição: CST informado inexistente

Rej.

Rejeição: Classificação Tributária informada inexistente

Rej.
Rej.

Rej.

Rejeição: Classificação Tributária incompatível com o CST informado
Rejeição: Classificação Tributária do IBS/CBS não permitida neste
modelo de DFe.
Rejeição: Grupo IBS/CBS não deve ser preenchido para o CST
informado

Obrig

315

Rej.

Rejeição: Grupo IBS/CBS deve ser preenchido para o CST informado

Obrig.

316

Rej.

Rejeição: Alíquota do IBS da UF inválida

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

Página 12 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

G84

Se informado grupo de Redução de Alíquota para IBS Estadual (gIBSUF/gRed), a
Alíquota Efetiva (tag: pAliqEfet) deve ser o resultado de:
Se NÃO houver compra governamental (grupo gCompraGov não informado):
pAliqEfet = pIBSUF × (1 - pRedAliq /100).

Obrig.

390

Rej.

Rejeição: Valor da Alíquota Efetiva do IBS da UF calculado
incorretamente

G85

G86

G87

G88

G89

Se houver compra governamental (grupo gCompraGov informado):
pAliqEfet = pIBSUF × (1 - pRedAliq /100) × (1 - pRedutor/100).

Observação: pRedutor é obtido no grupo gCompraGov

Exemplo: Redução de 40% na alíquota:
Alíquota vigente (A): 10%
Redução na alíquota (R): 40%
Redutor de compras governamentais (RG): 5%
Alíquota Efetiva (E):
E = A × (1 – R/100) × (1 – RG/100) = 5,7.
Se CST informado possuir indicador que VEDA a informação de redução de alíquota
para o IBS Estadual, o grupo gRed NÃO DEVE estar informado

Exceção: Se Percentual de redução de alíquota em compra governamental
(tag:gCompraGov/pRedutor) informado, este grupo é exigido e pRed deve ser igual a
0.
Se CST informado possuir indicador que EXIGE informação de Diferimento para o IBS
Estadual, o grupo gDif DEVE estar informado

Obrig.

367

Rej.

Rejeição: CST informado não permite informação de redução de alíquota
estadual

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

Observação: Aceitar uma tolerância de 0,01 a mais ou a menos

Observação 2: Em caso de preenchimento do grupo de redução (gRed) a alíquota
utilizada deverá ser a tag Alíquota Efetiva (pAliqEfet)

Obrig.

395

Rej.

Rejeição: Valor do IBS UF não pode resultar negativo

Página 13 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

G90

Se informado grupo IBS de competência das Unidades Federadas (gIBSUF):
O valor do IBS (vIBSUF) deverá ser resultante de:
vIBSUF = vBC x (pIBSUF/100) – vDif - vDevTrib

Observação: Aceitar uma tolerância de 0,01 a mais ou a menos

G91

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

G92

G93

G94

Exceção: Se o cClassTrib possuir indicador de tributação regular o pIBSMun deve ser
igual a zero
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

Obrig.

318

Rej.

Rejeição: Valor do IBS UF difere do calculado

Obrig.

321

Rej.

Rejeição: Alíquota do IBS do Município inválida

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

Página 14 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

G95

Se CST informado possuir indicador que VEDA a informação de redução de alíquota
para o IBS Municipal, o grupo gRed NÃO DEVE estar informado

Obrig.

381

Rej.

Rejeição: CST informado não permite informação de redução de alíquota
municipal

G96

G97

G98

G100

G101

G102

G103

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
Se informado grupo IBS de competência dos Municípios (gIBSMun):
O valor do IBS (vIBSMun) deverá ser resultante de:
vIBSMun = vBC x (pIBSMun/100) – vDif - vDevTrib

Observação: Aceitar uma tolerância de 0,01 a mais ou a menos
Observação 2: Em caso de preenchimento do grupo de redução (gRed) a alíquota
utilizada deverá ser a tag Alíquota Efetiva (pAliqEfet)
Se informado grupo IBS de competência dos Municípios (gIBSMun):

O valor resultante da soma do diferimento (vDif) e Devolução (DevTrib) QUANDO
INFORMADOS, NÃO pode ser superior a vBC x (pIBSMun/100)

Observação: Aceitar uma tolerância de 0,01 a mais ou a menos

Observação 2: Em caso de preenchimento do grupo de redução (gRed) a alíquota
utilizada deverá ser a tag Alíquota Efetiva (pAliqEfet)
Se informados grupos IBS de competência dos Estados (gIBSUF) e Municípios
(gIBSMun):
O valor do total de IBS (vIBS) deverá ser a soma do vIBSUF e do vIBSMUn
vIBS = vIBSUF + vIBSMun
Se informado grupo CBS (gCBS):
A alíquota de CBS deverá ser:





0,90 % para documento com data de emissão no ano de 2026. (Art. 343 da
LC 214/25)
Alíquota de referência a ser publicada para anos posteriores a 2026

Exceção: Se o cClassTrib possuir indicador de tributação regular o pCBS deve ser
igual a zero

Obrig.

Obrig.

Obrig.

324

382

325

Rej.

Rejeição: CST informado obriga informação de diferimento Municipal

Rej.

Rej.

Rejeição: CST informado não permite informação de diferimento
Municipal
Rejeição: Valor do Diferimento do Município difere do calculado

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
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

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

1200203-Cruzeiro do Sul  1200203-Cruzeiro do Sul

G104

Observação: As cores definem quais municípios são da mesma área incentivada, e
isto será observado na regra de validação
Se CST informado possuir indicador que EXIGE informação de redução de alíquota
para o CBS ou informado grupo de compra governamental, o grupo gRed DEVE estar
informado
Exceção: A regra não se aplica para CST do IBS/CBS (tag: IBSCBS/CST)
que possui indicador que não permite a informação do IBS/CBS

Obrig.

383

Rej.

Rejeição: CST informado ou compras governamentais obriga
informação de redução de alíquota do CBS

Página 16 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

G105

G106

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

G107

G108

G109

G110

G111

Se CST informado possuir indicador que VEDA a informação de redução de alíquota
para o CBS, o grupo gRed NÃO DEVE estar informado
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

Observação: Aceitar uma tolerância de 0,01 a mais ou a menos

Observação 2: Em caso de preenchimento do grupo de redução (gRed) a alíquota
utilizada deverá ser a tag Alíquota Efetiva (pAliqEfet)

Obrig.

393

Rej.

Rejeição: Percentual de redução de alíquota da CBS não é válido para
este cClassTrib

Obrig.

394

Rej.

Rejeição: Valor da Alíquota Efetiva da CBS calculado incorretamente

Obrig.

384

Rej.

Rejeição: CST informado não permite informação de redução de alíquota
do CBS

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

Página 17 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

G112

Se informado grupo CBS (gCBS):
O valor da CBS (vCBS) deverá ser resultante de:
vCBS = vBC x (pCBS/100) – vDif – vDevTrib

G113

G114

G115

G116

G117

G118

G119

G136

G137

G138

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

Página 18 / 50

G139

G140

G141

G142

G143

G144

G145

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

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
Se informado grupo de informações do TFS (grupo: TFS):
Verificar se Valor do TFS corresponde ao Valor da base de cálculo X Alíquota.
Observação: Considerar uma tolerância de R$ 0,10 para mais ou para menos.
Se informado grupo de informações do TFU (grupo: TFU):
Verificar se Valor do TFU corresponde ao Valor da base de cálculo X Alíquota.
Observação: Considerar uma tolerância de R$ 0,10 para mais ou para menos.

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

Obrig.

446

Rej.

Rejeição: Valor do TFS não corresponde à base de cálculo x alíquota
[nItem: NNN]

Obrig.

444

Rej.

Rejeição: Valor do TFU não corresponde à base de cálculo x alíquota
[nItem: NNN]

Validações de Compras Governamentais

Obrig.

347

Rej.

Rejeição: DFe de compra governamental e alíquota dos outros entes
diferentes de zero.

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

Observação: Conforme Art. 473, § 1o e seus Incisos I, II, III e IV da LC 214/2025.

Página 19 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

G145a

Se o tipo da operação com ente governamental for igual a Fornecimento com
pagamento posterior (tpOperGov=1)

Obrig

1004

Rej

Rejeição: Chave de acesso referenciada não deve ser informada para
tipo de operação de Fornecimento em compras governamentais

A chave de acesso do DFe anterior (refDFeAnt) NÃO DEVE ser informada

G145b

Se o tipo da operação com ente governamental for igual a Recebimento do pagamento
com fornecimento já realizado (tpOperGov=2)

Obrig

1005

Rej

Deve ser informada UMA chave de acesso de DFe referenciado
Observação: Se forem informadas múltiplas chaves de acesso ou nenhuma
chave causará essa rejeição

G145c

Se o tipo da operação com ente governamental for igual a Fornecimento com
pagamento já realizado (tpOperGov=3)

Obrig

1006

Rej

Rejeição: Deverá ser informada uma chave de acesso de DFe
referenciado para tipo de operação de Recebimento do pagamento com
fornecimento realizado em compras governamentais

Rejeição: Pelo menos uma Chave de acesso de DFe referenciado deve
ser informada para tipo de operação fornecimento com pagamento já
realizado em compras governamentais

G145d

G145e

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

G145f

[Motivo: XXXXXXXXXXXX]
Se informado documento anterior no grupo de compras governamentais
(gCompraGov/refDFeAnt):

- O DFe referenciado deve existir, acesso BD (Chave: CNPJ Emit, Modelo, Série,
Nro)

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

Obrig

1009

Rej

Rejeição: DFe referenciado em compras governamentais inexistente

G145g

Se informado documento anterior no grupo de compras governamentais
(gCompraGov/refDFeAnt), para cada chave informada:

Obrig.

1010

Rej.

Rejeição: DFe referenciado em compras governamentais com diferença
de Chave de Acesso

- DFe referenciado não pode existir com diferença na Chave de Acesso

Retornar a chave de acesso já autorizada, o número do protocolo e data de
autorização do DFe

[chDFe: 99999999999999999999999999999999999999999999]

[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]

Página 20 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

G145h

Se informado documento anterior no grupo de compras governamentais
(gCompraGov/refDFeAnt), para cada chave informada:

Obrig.

1011

Rej

Rejeição: DFe referenciado em compras governamentais em situação
inválida

- O DFe referenciado deve estar em situação Autorizado o Uso

G145i

Observação:  Rejeitar se documento estiver cancelado ou substituído na base de
dados do ambiente de autorização
Se informado documento anterior no grupo de compras governamentais
(gCompraGov/refDFeAnt), para cada chave informada:

Obrig.

1012

Rej

Rejeição: DFe referenciado em compras governamentais deve possuir
mesmo CNPJ base do emitente do documento

G145j

G145k

G146
G147
G148

G149

G150

G151

G152

G153

G154

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

Validações dos Totais da NFAg

A soma da BC de IBS/CBS nos itens não pode ser negativo
Total da BC IBS / CBS difere do somatório do valor dos itens
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

Obrig.
Obrig.
Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

500
447
350

351

352

353

354

355

Rej.
Rej.
Rej.

Rejeição: O somatório da BC IBS/CBS não pode ser negativo
Rejeição: Total da base de cálculo difere do somatório dos itens
Rejeição: Total de Diferimento do IBS UF difere da soma dos itens

Rej.

Rejeição: Total Devolvido do IBS UF difere da soma dos itens

Rej.

Rejeição: Total de IBS UF difere da soma dos itens

Rej.

Rejeição: Total de Diferimento do IBS Municipal difere da soma dos itens

Rej.

Rejeição: Total Devolvido do IBS Municipal difere da soma dos itens

Rej.

Rejeição: Total de IBS Municipal difere da soma dos itens

Obrig.

356

Rej.

Rejeição: Total do IBS difere da soma do IBS UF e IBS Municipal

Página 21 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

G155

G156

G157

G158

G159

vIBSMun)
O total do Diferimento do CBS deverá ser a soma do campo vDif do CBS informados
nos itens
O total Devolvido do CBS deverá ser a soma do campo vDevTrib do CBS informados
nos itens
O total do CBS deverá ser a soma do campo vCBS informados nos itens
Observação: itens com indicador de devolução ou cClass de dedução, o valor do
vCBS deve ser subtraído
Se informado grupo de estorno de crédito nos itens (gEstornoCred) o total do IBS
estornado deverá ser igual a soma campo valor do IBS estornado nos itens
(gEstornoCred/vIBS)

Se informado grupo de estorno de crédito nos itens (gEstornoCred) o total da CBS
estornada deverá ser igual a soma campo valor da CBS estornada nos itens
(gEstornoCred/vCBS)

G160

Total do PIS difere do somatório do valor dos itens

G161

Total do COFINS difere do somatório do valor dos itens

G162

Total do TFU difere do somatório do valor dos itens

G163

Total da TFS difere do somatório do valor dos itens

G164

Total do PIS retido difere do somatório do valor dos itens

G161

Total do COFINS retido difere do somatório do valor dos itens

G165

Total do CSLL retido difere do somatório do valor dos itens

G166

Total do IRRF retido difere do somatório do valor dos itens

G167

Total dos Produtos e Serviços difere do somatório do valor dos itens

G168

A soma do PIS nos itens não pode ser negativa

G169

A soma do COFINS nos itens não pode ser negativa

G170

A soma do TFU nos itens não pode ser negativa

G171

A soma do TFS nos itens não pode ser negativa

G172

A soma do PIS retido nos itens não pode ser negativa

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

Obrig.

305

Rej.

Rejeição: Total de IBS estornado difere da soma dos itens

Obrig.

306

Rej.

Rejeição: Total de CBS estornada difere da soma dos itens

Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

Obrig,

Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

457

458

256

257

258

259

260

461

459

504

505

506

507

508

Rej.

Rejeição: Total do PIS difere do somatório dos itens

Rej.

Rejeição: Total do COFINS difere do somatório dos itens

Rej.

Rejeição: Total do TFU difere do somatório dos itens

Rej.

Rejeição: Total da TFS difere do somatório dos itens

Rej.

Rejeição: Total do PIS retido difere do somatório dos itens

Rej.

Rejeição: Total do COFINS retido difere do somatório dos itens

Rej.

Rejeição: Total do CSLL retido difere do somatório dos itens

Rej.

Rejeição: Total do IRRF retido difere do somatório dos itens

Rej.

Rejeição: Total dos produtos e serviços difere do somatório dos itens

Rej.

Rejeição: O somatório do PIS não pode ser negativo

Rej.

Rejeição: O somatório do COFINS não pode ser negativo

Rej.

Rejeição: O somatório do TFU não pode ser negativo

Rej.

Rejeição: O somatório do TFS não pode ser negativo

Rej.

Rejeição: O somatório do PIS retido não pode ser negativo

Página 22 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

G173

A soma do COFINS retido nos itens não pode ser negativa

G174

A soma do CSLL nos itens não pode ser negativa

G175

A soma do IRRF nos itens não pode ser negativa

G176

A soma do Descontos nos itens não pode ser negativa

G177

Valor total da NF (vNF) difere do somatório de:

(+) vProd
(-) vRetPIS
(-) vRetCofins
(-) vRetCSLL
(-) vIRRF
O total geral do DFe deverá ser a soma do valor total da NFAg + IBS + CBS
vTotDFe = total/vNF + IBSCBSTot/gIBS/vIBS + IBSCBSTot/gCBS/vCBS

G178

Exceção: Em 2026 não somar IBS e CBS, usando a fórmula:
 vTotDFe = total/vNF

Obrig.

Obrig.

Obrig.

Obrig.

Obrig.

509

510

511

512

460

Rej.

Rejeição: O somatório do COFINS retido não pode ser negativo

Rej.

Rejeição: O somatório do CSLL não pode ser negativo

Rej.

Rejeição: O somatório do IRRF não pode ser negativo

Rej.

Rejeição: O somatório dos Descontos não pode ser negativo

Rej.

Rejeição: Total da NFAg difere do somatório dos valores que compõem o
valor total da NFAg

Obrig.

365

Rej.

Rejeição: Total do DFe inválido

Observação geral do grupo totais: Cada campo do grupo total é calculado pelo somatório do respectivo campo nos itens e conforme a natureza do Código de Classificação do Produto (cClass) poderá ser
somado ou deduzido (* -1) do valor total (ver item 7.6 do MOC Visão Geral).
O campo indicador de devolução (indDevolucao) se informado em um item também modifica seu valor multiplicando por -1.

Validações dos Autorizados ao XML

G179

G180

G181

G182

G183
G184

G185

Se informada autorização download XML com CNPJ (grupo: autXML):
CNPJ com zeros ou dígito inválido

Obrig.

466

Rej.

Rejeição: CNPJ autorizado para download inválido

Se informada autorização download do XML com CPF:
CPF com zeros, nulo, números repetidos (111, 222, etc.), ou dígito de controle
inválido.
Se informada autorização download XML (grupo: autXML):
- Verificar se existe duplicidade de CPF/CNPJ informado no grupo autXML da NFAg

Obrig.

467

Rej.

Rejeição: CPF autorizado para download inválido

Obrig.

468

Rej

Rejeição: Documento autorizado ao XML duplicado na NFAg

Validações do QR Code

Endereço do site da UF para a Consulta via QR Code difere do previsto.
Nota: O uso diferenciado de maiúsculas ou minúsculas não deve ser considerado na
validação.
Observação: Para consultar as URLs por UF utilizadas no QR Code, acesse:
http://dfe-portal.svrs.rs.gov.br/NFAg/
Parâmetro Chave de Acesso no QR Code diverge da Chave de Acesso da NFAg
Se tipo de emissão for igual a Contingência:
O parâmetro sign deve ser informado no QR-Code
Se tipo de emissão for igual a Normal:
O parâmetro sign não deve ser informado no QR-Code

Obrig.

464

Rej.

Rejeição: Endereço do site da UF da Consulta via QR Code diverge do
previsto

Obrig.
Obrig.

Obrig.

465
469

470

Rej.
Rej.

Rej.

Rejeição: Parâmetro chave de acesso do QR Code divergente da NFAg
Rejeição: Parâmetro sign não informado no QR Code para emissão em
contingência
Rejeição: Parâmetro sign não deve ser informado no QR Code para
emissão Normal

Página 23 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

G186

Se tipo de emissão for igual a Contingência:
Valor da assinatura (sign) do QR-Code difere do valor calculado

Obrig.

471

Rej.

Rejeição: Assinatura do QR Code difere do calculado

Validações do Responsável Técnico

G187

Se informado grupo do responsável técnico (grupo: gRespTec):
- Validar CNPJ (dígito controle, zeros ou nulo).

Facul.

472

Rej.

Rejeição: CNPJ do responsável técnico inválido (zerado ou dígito
inválido)

2.3  Eventos de Marcação originados pela NFAg

A NFAg do tipo Substituição (finNFAg=3) provoca a geração automática de eventos de marcação do fisco na NFAg a que estiver relacionada.

  Evento Autorizada NFAg de Substituição: será registrado na NFAg original, indicada na tag chNFAG (grupo: gSub) na NFAg de Substituição: Este

evento altera a situação da NFAg para NFAg Substituída

A NFAg com Tipo de Faturamento Faturamento Conjunto (tpFat=3) também provoca a geração de evento de marcação do Fisco na NFAg da faturada por
terceiro (tpFat=2).

  Evento Autorizada NFAg de Faturamento Conjunto: registrado na NFAg Faturada por Terceiro informada na tag chNFAgFat (grupo: gFatConjunto)

da NFAg com tipo de faturamento conjunto (tpFat=3).

  Evento Substituída NFAg de Faturamento Conjunto: registrado na NFAg Faturada por Terceiro informada na tag chNFAgFat (grupo: gFatConjunto)

da NFAg com tipo de faturamento conjunto (tpFat=3) quando esta for substituída por uma NFAg de Substituição (finNFAg=3).

2.4  Procedimentos para Cancelar ou Alterar NFAg faturadas por terceiro relacionadas e marcadas com

evento da NFAg de Faturamento Conjunto

A geração de eventos de marcação automática pelo sistema do fisco impede que documentos fiscais relacionados por outros sejam cancelados, essa medida

evita inconsistências sistêmicas que possam causar problemas na fiscalização e apuração do imposto.

No entanto, sempre existe a possibilidade de ocorrerem erros na emissão, seguem abaixo os procedimentos necessários para resolver situações de correção

quando existem bloqueios dos eventos de marcação:

1.Se for preciso cancelar a NFAg Faturada por Terceiro marcada com um evento “Autorizada NFAg de Faturamento Conjunto”:

Página 24 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

  Se a NFAg de Faturamento Conjunto e a NFAg Faturada por Terceiro estiverem dentro do prazo de cancelamento:

  Deverá cancelar a NFAg de Faturamento Conjunto.

  Será gerado automaticamente o evento: Cancelada NFAg de Faturamento Conjunto na NFAg Faturada por Terceiro

  Deverá ser cancelada a NFAg Faturada por Terceiro.

  Se a NFAg de Faturamento Conjunto estiver no prazo de cancelamento e a NFAg Faturada por Terceiro estiverem fora do prazo de cancelamento:

  Deverá cancelar a NFAg de tipo de faturamento: Faturamento Conjunto.

  Será gerado automaticamente o evento: Cancelada NFAg de Faturamento Conjunto na NFAg Faturada por Terceiro

  Deverá ser Substituída a NFAg Faturada por Terceiro por uma nova NFAg com valores zerados.

  Se a NFAg Faturada  por Terceiro estiver relacionada  incorretamente na NFAg de Faturamento Conjunto ou precisar corrigir a NFAg  Faturada por

terceiro já relacionada em uma NFAg de faturamento conjunto:

  Deverá gerar uma nova NFAg Faturada por Terceiro (com nova numeração);

  Deverá  gerar  uma  nova  NFAg  de Faturamento  Conjunto  do  tipo  Substituição (substituindo  a  NFAg de  Faturamento Conjunto)  e

relacionando a nova NFAg Faturada por terceiro.

  Essa ação deverá gerar um evento automático “Substituída NFAg de Faturamento Conjunto” na primeira nota Faturada por Terceiro,

essa ação desfaz o seu vínculo com a nota conjunta.

  Será  gerado um  evento  automático  “Autorizada  NFAg de  Faturamento  Conjunto” na nova  nota  Faturada por Terceiro,  criando  o

vínculo

  A nota Faturada por Terceiro original poderá ser cancelada (se dentro do prazo) ou substituída por outra de valor zero.

Página 25 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

3  Leiaute da NFAg

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

Campo
infNFAg
versao
Id

ide

cUF

tpAmb

mod

serie

nNF

Nível  Descrição
0
1
1

Informações da NFAg
Versão do leiaute
Identificador da tag a ser assinada

Ele  Tipo Ocorr.  Tamanho  Domínio Exp.Reg.  Observações
G
A  C
A  C

1 - 1
1 - 1
1 - 1

ER73
ER68

48

Informar a chave de acesso da NFAg e
precedida do literal "NFAG"

1
2

2

2

2

2

Identificação da NFAg
Código da UF do emitente da NFAg

G
E  N

1 - 1
1 - 1

Tipo do Ambiente

Modelo da NFAg

E  N

1 - 1

E  N

1 - 1

2

1

2

D1

D7

D4

Série do documento fiscal

E  N

1 - 1

1 - 3

Número do documento fiscal

E  N

1 - 1

1 - 9

ER45

ER44

Código da UF do emitente do Documento
Fiscal. Utilizar a
Tabela do IBGE de código de unidades da
federação.
1 - Produção;
2 - Homologação
Utilizar o código 75 para identificação da
NFAg
Informar a série do documento fiscal
(informar zero para série única).
Número que identifica o documento fiscal 1
a 999999999.

Página 26 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

10

cNF

11

cDV

12
13

14

dhEmi
tpEmis

nSiteAutoriz

15
16

17

cMunFG
finNFAg

tpFat

18

verProc

2

2

2
2

2

2
2

2

2

Código numérico que compõe a Chave de Acesso.

E  N

1 - 1

7

Digito verificador da chave de acesso

E  N

1 - 1

1

Data e hora de emissão do documento fiscal
Forma de emissão do Documento Fiscal

E  C
E  N

1 - 1
1 - 1

21
1

D7

Identificação do número do Site do Autorizador de
recepção da NFAg

E  N

1 - 1

1

ER2

ER57

ER1

ER57

Código aleatório gerado pelo emitente, com
o objetivo de evitar acessos indevidos ao
documento.
Informar o dígito de controle da chave de
acesso documento fiscal, que deve ser
calculado com a aplicação do algoritmo
módulo 11 (base 2,9) da chave de acesso.
Formato AAAA-MM-DDTHH:MM:DD TZD
1 - Normal
2 - Contingência Off Line
Se o autorizador da NFAg possuir apenas
um site deverá ser informado com Zero (0),
em caso de autorizador trabalhar com
múltiplos sites indicar o número do site para
qual foi endereçada a NFAg (1 a 9).
Observação: O ambiente autorizador que
trabalhar com mais de um Site deverá
divulgar para cada endereço de site qual
número correspondente de nSiteAutoriz o
contribuinte pode usar

Código do município de ocorrência do fato gerador  E  N
E  N
Finalidade de emissão da NFAg

1 - 1
1 - 1

E  N

1 - 1

7
1

1

ER2

D15

D14

0 - NFAg normal;
3 - NFAg substituição;
1- Faturamento Normal;
2 - Faturamento por terceiro;
3 - Faturamento conjunto

Tipo de Faturamento da NFAg
1- Faturamento Normal;
2 - Faturamento por terceiro;
3 - Faturamento conjunto
Versão do processo de emissão

E  C

1 - 1

1 - 20

ER48

Informar a versão do aplicativo emissor de
NFAg.
Esta é a versão do software do emitente e
ajuda a identificar quando uma versão
apresenta um problema.

Página 27 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

#

--- x ---

20

21
22
23

24

25

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
3

3

3

Sequência XML OPCIONAL

-

-

0 - 1

Data e Hora da entrada em contingência

ES  C

1 - 1

21

Justificativa da entrada em contingência
Grupo de Compras Governamentais
Para administração pública direta e suas autarquias
e fundações:

ES  C
G
E  N

1 - 1
0 - 1
1 - 1

15 - 256

1

D8

As tags dhCont e xJust são filhas dessa
sequência OPCIONAL, ou seja, se informado
dhCont, o xJust deverá ser informado
Informar a data e hora no formato AAAA-
MM-DDTHH:MM:SS

ER1

ER48

Percentual de redução de alíquota em compra
governamental
Tipo da operação com ente governamental:

E  N

1 - 1

E  N

1 - 1

3, 2
3, 4
1

D7

ER16

25 a

refDFeAnt

3

Documento fiscal referenciado anterior

E  C

0-n

44

ER3

26
27
28

emit

CNPJ
IE

1
2
2

Identificação do Emitente do documento fiscal
CNPJ do emitente
Inscrição Estadual do emitente

G
E  C
E  N

1 - 1
1 - 1
0 - 1

14
2 - 14

ER7
ER43

Informar zeros não significativos

Página 28 / 50

1=União
2=Estados
3=Distrito Federal
4=Municípios
5=Consórcio Público
6=Comitê Gestor do IBS
5 posições, sendo 3 inteiras e 2 a 4 casas
decimais.
1 – Fornecimento com pagamento
posterior;
2 - Recebimento do pagamento com
fornecimento já realizado;
3 – Fornecimento com pagamento já
realizado;
4 – Recebimento do pagamento com
fornecimento posterior;
Chave de acesso do documento fiscal
anterior.

Deverá ser informado para tpOperGov 2 e 3
e vedado para os tipos 1 e 4

Obs: a chave de acesso deverá ser de um
emitente com o mesmo CNPJ base

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

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

--- x ---

CNPJ
CPF
idOutros

IE
IM
--- x ---

cNIS
NB

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
2

2
2
2

2
2
2

2
2

Razão social ou Nome do emitente
Nome fantasia do emitente
Endereço do emitente
Logradouro
Número
Complemento
Bairro
Código do município (utilizar a tabela do IBGE)
Nome do município
CEP
Sigla da UF
Telefone
Endereço de E-mail
Identificação do destinatário
Razão social ou Nome do destinatário
CHOICE XML

E  C
E  C
G
E  C
E  C
E  C
E  C
E  N
E  C
E  N
E  C
E  N
E  C
G
E  C
-
-

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

D6

Número do CNPJ
Número do CPF
Identificação do destinatário outros

CE  C
CE  N
CE  C

1 - 1
1 - 1
1 - 1

14
11
2 - 20

Inscrição Estadual do destinatário
Inscrição Municipal
Choice Opcional

E  N
E  C
-
-

0 - 1
0 - 1
0 - 1

0 - 14
1 - 15

Número da Identificação Social - NIS
Número do Benefício

CE  N
CE  N

1 - 1
1 - 1

1 - 15
1 - 10

ER48
ER48

ER48
ER48
ER48
ER48
ER2
ER48
ER70

ER71
ER75

ER48

ER8
ER9
ER58

ER42
ER48

ER52
ER59

Informar zeros não significativos

As tags CNPJ, CPF e idOutros são filhas
dessa CHOICE, portanto apenas uma das
três poderá ser informada
Informar os zeros não significativos.
Informar os zeros não significativos.
Identificação do destinatário não obrigado a
inscrição do CPF tais como estrangeiro,
indígena (informar código do RANI) e
quilombola; ou destinatário que a
distribuidora não possui a informação
(nestes casos orienta-se informar "00000").

As tags cNIS e NB são opcionais dentro de
uma choice, ou seja, quando informar um a
outra não poderá ser informada

Página 29 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

51

52
53
54
55
56
57
58
59
60
61
75
63
64
65

66

xNomeAdicional

enderDest

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

ligacao

idLigacao
idCodCliente

tpLigacao

#

--- x ---

68

69

70

latGPS

longGPS

codRoteiroLeitura

71
72

gSub

chNFAg

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
2

2

2

2

2

2

1
2

Nome de destinatário adicional

E  C

0 - 1

2 - 60

ER48

Exemplo: Nome do Cônjuge,
Companheira(o)

Endereço do destinatário / acessante
Logradouro
Número
Complemento
Bairro
Código do município (utilizar a tabela do IBGE)
Nome do município
CEP
Sigla da UF
Telefone
Endereço de E-mail
Dados da Ligação
Código único de Identificação da Ligação
Código de Identificação do Cliente para empresa
emitente
Tipo de Ligação

G
E  C
E  C
E  C
E  C
E  N
E  C
E  N
E  C
E  N
E  C
G
E  C
E  C

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
0 - 1

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

1 - 20
2 - 20

D6

E  N

1 - 1

1

D18

Sequência XML

-

-

1 - 1

Latitude do ponto geográfico da localização da
captura
Longitude do ponto geográfico da localização da
captura
Roteiro da Leitura para uso operacional

ES  N

1 - 1

2,6

ES  N

1 - 1

2,6

E  C

0 - 1

2 - 100

Grupo de informações da substituição
Chave de acesso da NFAg referenciada

G
E  C

0 - 1
1 - 1

44

ER48
ER48
ER48
ER48
ER2
ER48
ER70

ER71
ER75

ER60
ER58

ER50

ER51

ER48

ER3

Informar zeros não significativos

1 - Água
2 - Esgoto
3 - Água e esgoto
As tags latGPS e longGPS são filhas dessa
sequência, ou seja, se informar uma terá
que informar a outra sempre.

Identificador interno da concessionária para
a roteirização do leiturista, utilizado no
DANFE para facilitar a identificação da rota
de entrega da fatura

Página 30 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

73

motSub

2

Motivo da substituição

E  N

1 - 1

2

D20

01 – Erro de Leitura
02 – Erro de Preço ou Erro de Tarifa;
03 – Decisão Judicial
04 – Erro Cadastral;
05 - Erro de Tributação
06 - Decisão da Reguladora;
07 - Acúmulo de Consumo;
08 - Correção de Vazamento Interno
09 – Alteração de vencimento

74
75

76

gMed

nMed

idMedidor

1
2

2

Grupo de informações dos Medidores
Número de referência para informar nos produtos a
relação com a medição
Identificação do medidor

G
A  N

0 - 99
1 - 1

2 - 2

ER61

E  C

1 - 1

2 - 20

ER58

Por exemplo: padrão ABNT

77

dMedAnt

2

Data da leitura anterior

E  D

1 - 1

10

ER49

78
79
80

81
82
83

dMedAtu
gFatConjunto
chNFAgFat

det

nItem
chNFAgAnt

2
1
2

1
2
2

Data da leitura atual
Grupo de Informações do Faturamento conjunto  G
Chave de acesso da NFAg faturada em conjunto

E  C

E  D

1 - 1
0 - 1
1 - 1

10

44

Obrigatório para tpFat 3
Vedado para tpFat 1 e 2
Detalhamento de Produtos e Serviços
Número do item da NFAg
Chave de Acesso da NFag anterior

G
A  N
A  C

1 - 990
1 - 1
1 - 1

3
44

ER49

ER3

ER64
ER3

Observação: Caso não tenha medidor
informar "000000” quando necessite
informar datas de leitura para geranção do
documento auxilair
Formato AAAA-MM-DD

Em caso da 1a leitura do hidrômetro,
informar a data de instalação do hidrômetro
Formato AAAA-MM-DD

Informar chave de acesso de referência
anterior
TAG OPCIONAL, DEVE SER INFORMADA

Página 31 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

84

nItemAnt

2

Número do item da NFAg anterior

A  N

1 - 1

1 - 4

ER65

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

gTarif

dIniTarif

dFimTarif

nAto
anoAto
tpFaixaCons

prod

indOrigemQtd

gMedicao

nMed
gMedida

2
3

3

3
3
3

2
3

3

4
4

Grupo de Tarifas por Período
Data de início da aplicação da tarifa

G
E  D

0 - 6
1 - 1

10

Data de fim da aplicação da tarifa

E  D

0 - 1

10

Número do Ato
Ano do Ato (AAAA)
Faixa Prevista de Consumo

E  C
E  N
E  N

1 - 1
1 - 1
0 - 1

4 - 4
4 - 4
1

D14

Dados do Produto ou Serviço
Indicador da origem da quantidade faturada

G
E  N

1 - 1
1 - 1

1

D27

ER49

ER49

ER48
ER75

Grupo para referenciar qual medição e medida
estão relacionadas ao item
Referência para a medição ao qual se refere o item  E  C
Grupo de medida

G

G

0 - 1

1 - 1
1 - 1

2 - 2

ER63

APENAS NOS CASOS PREVISTOS DE NOTA
ANTERIOR REFERENCIADA
Informar número do item da chave de
acesso de referência anterior

TAG OPCIONAL, DEVE SER INFORMADA
APENAS NOS CASOS PREVISTOS DE NOTA
ANTERIOR REFERENCIADA

Data de início da aplicação da tarifa no
período considerado para o faturamento (
Formato AAAA-MM-DD)
Data de fim da aplicação da tarifa no
período considerado para o faturamento
(Formato AAAA-MM-DD)

1-Minimo
2-Médio
3-Máximo

1 - Media;
2 - Medido;
3 - Contratada;
4 - Calculada ou estimado;
5 - Residual Calculado;
6 - Sem quantidade
7 - Por Faixa;

Página 32 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

96

tpGrMed

5

Tipo de grandeza medida

E  N

1 - 1

2

D23

97
98

99

100

101

102

103

nUnidConsumo
vUnidConsumo

uMed

vMedAnt

vMedAtu

vConst

vMed

104

tpMotNaoLeitura

105
106
107

cProd
xProd
cClass

5
5

5

5

5

5

5

4

3
3
3

Número da unidade de consumo
Volume por unidade de consumo em m3

Unidade Básica de Medida

E  N
E  N

0 - 1
0 - 1

E  N

1 - 1

15
13, 2
13, 4
1

D29

Valor da medição (leitura) anterior

E  N

1 - 1

Valor da medição (leitura) atual

E  N

1 - 1

Indicar o fator de multiplicação do medidor

E  N

0 - 1

Valor da medição

E  N

1 - 1

13, 2
13, 4
13, 2
13, 4
13, 2
13, 6
13, 2
13, 4

Tipo Motivo da não leitura

CE  N

1 - 1

1

D14

Código do produto ou serviço.
Descrição do produto ou serviço
Código de classificação

E  C
E  C
E  N

1 - 1
1 - 1
1 - 1

1 - 60
1 - 120
7 - 7

01 - Água Tratada;
02 - Esgoto tratado;
03 - Esgoto coletado;
04 - Resíduos sólidos;
05 - Água de reuso;
06 - Esgoto Estático
07 - Captação de água bruta
08 - Recebimento e tratamento de chorume
99 - Outros

15 posições, sendo 13 inteiras e 2 a 4 casas
decimais.
1 - m3;
2 - Litros;
5 - Unidade
6 - ton
15 posições, sendo 13 inteiras e 2 a 4 casas
decimais.
15 posições, sendo 13 inteiras e 2 a 4 casas
decimais.
15 posições, sendo 13 inteiras e 2 a 6 casas
decimais.
15 posições, sendo 13 inteiras e 2 a 4 casas
decimais.
(vMedAtu – vMedAnt) * vConst
1 - Consumidor;
2 - Distribuidora;
3 - Independente do Consumidor e
distribuidora;

Tabela de Classificação de Item da NFAg
(validar por RV)

Página 33 / 50

ER41

ER41

ER41

ER38

ER41

ER48
ER48
ER2

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

#

--- x ---

3

Sequência OPCIONAL XML

-

-

0 - 1

109

tpCategoria

3

Categoria da ligação

ES  N

1 - 1

2

D21

110
111
112

xCategoria
qEconomias
uMed

3
3
3

Detalhamento da Categoria
Quantidade de economias
Unidade Básica de Medida

ES  C
ES  G
E  N

1 - 1
1 - 1
1 - 1

1 - 200
1 - 5
1

D29

ER48

113

qFaturada

3

Quantidade Faturada

E  N

1 - 1

114

115

vItem

fatorPoluicao

3

3

Valor unitário do item

Fator de poluição

E  N

1 - 1

E  N

0 - 1

116

vProd

3

Valor total do item

E  N

1 - 1

11, 0
11, 4

13, 2
13, 10
11, 0
11, 4

13, 2
13, 10

ER31

ER40

ER31

ER40

As tags tpCategoria, xCategoria e
gEcnonomias são filhas dessa sequência
OPCIONAL, se informar uma dessas tags,
todas deverão ser informadas, no entanto o
conjunto todo é opcional
01 - Comercial
02 - Consumo Próprio
04 - Industrial
06 - Residencial
07 - Rural
08 - Serviço Público
09 - Social
10 - Mista
11 – Resid.Comercial
12 – Resid. Industrial
99 - Outras

1 - m3;
2 - Litros;
5 - Unidade
6 - ton
11 posições, sendo 11 inteiras e 0 a 4 casas
decimais.
Informar a quantidade de comercialização
do produto.
15 posições, sendo 13 inteiras e 2 a 10 casas
decimais.
11 posições, sendo 11 inteiras e 0 a 4 casas
decimais.
Se informado múltipla ao valor do vItem
Obrigatoriamente > 1.
15 posições, sendo 13 inteiras e 2 a 10 casas
decimais.

Página 34 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

117
118
119
120
121
121 a
122
123

indDevolucao

imposto
IBSCBS
CST
cClassTrib
indDoacao
gIBSCBS
vBC

--- x ---

#
125
126

127
128

129

130
131

132
133

134

135

136
137

gIBSUF

pIBSUF

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

pIBSMun

3
2
3
4
4
4
4
5

0
5
6

6
7

7

6
7

6
7

7

6

5
6

Indicador de devolução do valor do item
Tributos incidentes no Produto ou Serviço
Grupo de informações do IBS e CBS
Código Situação Tributária do IBS/CBS
Código de Classificação Tributária do IBS e CBS
Informar quando doação
Grupo de Informações do IBS e da CBS
Valor do BC

Sequência XML
Grupo de informações do IBS na UF
Alíquota do IBS de competência das UF

Grupo de campos do Diferimento
Percentual do diferimento

Valor do diferimento

Grupo de Informações da devolução de tributos
Valor do tributo devolvido. No fornecimento de
energia elétrica, água, esgoto e
gás natural e em outras hipóteses definidas no
regulamento
Grupo de campos da redução de alíquota
Percentual de redução de alíquota do cClassTrib

E  N
G
G
E  N
E  N
E  N
G
E  N

-

-
GS
E  N

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
1 - 1

G
E  N

0 - 1
1 - 1

E  N

1 - 1

G
E  N

0 - 1
1 - 1

G
E  N

0 - 1
1 - 1

Alíquota Efetiva que será aplicada a Base de Cálculo  E  N

1 - 1

Valor do IBS de competência das UF

E  N

1 - 1

Grupo de Informações do IBS no Município
Alíquota do IBS Municipal

GS
E  N

1 - 1
1 - 1

1 - 1

D10

1 – Devolução do valor do item

ER54
ER55

Utilizar tabela CST do IBS/CBS
Utilizar tabela cClassTrib
Informar em caso de doação

13, 2

ER36

15 posições, sendo 13 inteiras e 2 casas
decimais.

3, 2
3, 4

3, 2
3, 4
13, 2

ER16

ER16

ER36

5 posições, sendo 3 inteiras e 2 a 4 casas
decimais.

5 posições, sendo 3 inteiras e 2 a 4 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.

13, 2

ER36

15 posições, sendo 13 inteiras e 2 casas
decimais.

3, 2
3, 4
3, 2
3, 4
13,2

3, 2
3, 4

ER16

ER16

ER36

ER16

5 posições, sendo 3 inteiras e 2 a 4 casas
decimais.
5 posições, sendo 3 inteiras e 2 a4 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.

5 posições, sendo 3 inteiras e 2 a 4 casas
decimais.

Página 35 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

138
139

140

141
142

143
144

145

146

147

148
149

150
151

152

153
154

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

155

gRed

6
7

7

6
7

6
7

7

6

5

5
6

6
7

7

6
7

6

Grupo de campos do Diferimento
Percentual do diferimento

Valor do diferimento

Grupo de Informações da devolução de tributos
Valor do tributo devolvido. No fornecimento de
energia elétrica, água, esgoto e
gás natural e em outras hipóteses definidas no
regulamento
Grupo de campos da redução de alíquota
Percentual de redução de alíquota do cClassTrib

G
E  N

0 - 1
1 - 1

E  N

1 - 1

G
E  N

0 - 1
1 - 1

G
E  N

0 - 1
1 - 1

Alíquota Efetiva que será aplicada a Base de Cálculo  E  N

1 - 1

Valor do IBS Municipal

E  N

1 - 1

3, 2
3, 4
13,2

13,2

3, 2
3, 4
3, 2
3, 4
13, 2

Valor do IBS (soma de vIBSUF e vIBSMun)

ES  N

1 - 1

13, 2

Grupo de Tributação da CBS
Alíquota da CBS

Grupo de campos do Diferimento
Percentual do diferimento

Valor do diferimento

Grupo de Informações da devolução de tributos
Valor do tributo devolvido. No fornecimento de
energia elétrica, água, esgoto e
gás natural e em outras hipóteses definidas no
regulamento
Grupo de campos da redução de alíquota

G
E  N

1 - 1
1 - 1

G
E  N

0 - 1
1 - 1

E  N

1 - 1

G
E  N

0 - 1
1 - 1

G

0 - 1

3, 2
3, 4

3, 2
3, 4
13, 2

ER16

ER36

ER36

ER16

ER16

ER36

ER36

ER16

ER16

ER36

5 posições, sendo 3 inteiras e 2 a 4 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.

15 posições, sendo 13 inteiras e 2 casas
decimais.

5 posições, sendo 3 inteiras e 2 a 4 casas
decimais.
5 posições, sendo 3 inteiras e 2 a 4 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.

5 posições, sendo 3 inteiras e 2 a 4 casas
decimais.

5 posições, sendo 3 inteiras e 2 a 4 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.

13, 2

ER36

15 posições, sendo 13 inteiras e 2 casas
decimais.

Página 36 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

156

157

158

159

160

161

175

pRedAliq

pAliqEfet

vCBS

gTribRegular

CSTReg

cClassTribReg

pAliqEfetRegIBSUF

7

7

6

5

6

6

6

Percentual de redução de alíquota do cClassTrib

E  N

1 - 1

Alíquota Efetiva que será aplicada a Base de Cálculo  E  N

1 - 1

Valor da CBS

Grupo de informações da Tributação Regular.
Informar como seria a tributação caso não cumprida
a condição resolutória/suspensiva. Exemplo 1: Art.
442, §4. Operações com ZFM e ALC. Exemplo 2:
Operações com suspensão do tributo.
Código da Situação Tributária do IBS e CBS

E  N

1 - 1

G

0 - 1

E  N

1 - 1

Informar qual seria o cClassTrib caso não cumprida a
condição resolutória/suspensiva
Alíquota do IBS da UF

E  N

E  N

1 - 1

1 - 1

3, 2
3, 4

163

vTribRegIBSUF

6

Valor do IBS da UF

E  N

1 - 1

13, 2

ER36

164

pAliqEfetRegIBSMun  6

Alíquota do IBS do Município

E  N

1 - 1

3, 2
3, 4

ER16

165

vTribRegIBSMun

6

Valor do IBS do Município

E  N

1 - 1

13, 2

ER36

3, 2
3, 4
3, 2
3, 4
13, 2

ER16

ER16

ER36

5 posições, sendo 3 inteiras e 2 a 4 casas
decimais.
5 posições, sendo 3 inteiras e 2 a 4 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.

ER54

ER55

ER16

Informar qual seria o CST caso não
cumprida a condição resolutória/suspensiva

5 posições, sendo 3 inteiras e 2 a 4 casas
decimais.
Informar como seria a Alíquota caso não
cumprida a condição resolutória/suspensiva
15 posições, sendo 13 inteiras e 2 casas
decimais.
Informar como seria o valor do Tributo caso
não cumprida a condição
resolutória/suspensiva
5 posições, sendo 3 inteiras e 2 a 4 casas
decimais.
Informar como seria a Alíquota caso não
cumprida a condição resolutória/suspensiva
15 posições, sendo 15 inteiras e 2 casas
decimais.
Informar como seria o valor do Tributo caso
não cumprida a condição
resolutória/suspensiva

Página 37 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

166

pAliqEfetRegCBS

6

Alíquota da CBS

E  N

1 - 1

3, 2
3, 4

ER16

167

vTribRegCBS

6

Valor da CBS

E  N

1 - 1

13, 2

ER36

178

179

180

181

182

183

184

184 a

184 b
184 c
185
186

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

5

6

6

6

6

6

6

4

5
6
3
4

Grupo de informações da composição do valor do
IBS e da CBS em compras governamentais

Valor que seria devido a UF, sem aplicação do Art.
473. da LC 214/2025

G

0 - 1

E  N

1 - 1

E  N

1 - 1

E  N

1 - 1

Valor que seria devido ao município, sem aplicação
do Art. 473. da LC 214/2025

E  N

1 - 1

Valor que seria devido a CBS, sem aplicação do Art.
473. da LC 214/2025
Grupo de informações do estorno de crédito

Valor do IBS a ser estornado
Valor da CBS a ser estornada
Dados do PIS
classificação Tributária do PIS

E  N

1 - 1

E  N

1 - 1

G

E  N
E  N
G
E  N

0 - 1

1 – 1
1 – 1
0 - 1
1 - 1

3, 2
3, 4
13, 2

3, 2
3, 4
13, 2

3, 2
3, 4
13, 2

13,2
13,2

2

D11

ER16

ER36

ER16

ER36

ER16

ER36

ER36
ER36

5 posições, sendo 3 inteiras e 2 a 4 casas
decimais.
Informar como seria a Alíquota caso não
cumprida a condição resolutória/suspensiva
15 posições, sendo 13 inteiras e 2 casas
decimais.
Informar como seria o valor do Tributo caso
não cumprida a condição
resolutória/suspensiva

5 posições, sendo 3 inteiras e 2 a 4 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.
5 posições, sendo 3 inteiras e 2 a 4 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.
5 posições, sendo 3 inteiras e 2 a 4 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.
Informado conforme indicador no cClassTrib

01 – Tributável com alíquota básica
02 – Tributável com alíquota diferenciada
06 – Tributável com alíquota erro
07 – Operação isenta de contribuição
08 – Operação sem incidência da
contribuição

Página 38 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

187

188

189

190
191

192

193

194

195

196

197

198

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

4

4

4

3
4

4

4

4

3

4

4

4

Valor da BC do PIS

E  N

1 - 1

13, 2

Alíquota do PIS (em percentual)

E  N

1 - 1

3, 2

Valor do PIS

E  N

1 - 1

13, 2

Dados do COFINS
classificação Tributária do COFINS

G
E  N

0 - 1
1 - 1

2

D11

Valor da BC do COFINS

E  N

1 - 1

13, 2

Alíquota do COFINS (em percentual)

E  N

1 - 1

3, 2

Valor do COFINS

E  N

1 - 1

13, 2

Grupo de informações de retenção de tributos
federais
Valor do PIS retido

Valor do COFNS retido

Valor da CSLL retida

G

0 - 1

E  N

1 - 1

E  N

1 - 1

E  N

1 - 1

13, 2
13, 8
13, 2
13, 8
13, 2
13, 8

09 – Operação com suspensão da
contribuição
49 – Outras operações de saída
15 posições, sendo 13 inteiras e 2 casas
decimais.
5 posições, sendo 3 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.

ER36

ER16

ER36

01 – Tributável com alíquota básica
02 – Tributável com alíquota diferenciada
06 – Tributável com alíquota erro
07 – Operação isenta de contribuição
08 – Operação sem incidência da
contribuição
09 – Operação com suspensão da
contribuição
49 – Outras operações de saída
15 posições, sendo 13 inteiras e 2 casas
decimais.
5 posições, sendo 3 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.

15 posições, sendo 13 inteiras e 2 a 8 casas
decimais.
15 posições, sendo 13 inteiras e 2 a 8 casas
decimais.
15 posições, sendo 13 inteiras e 2 a 8 casas
decimais.

Página 39 / 50

ER36

ER16

ER36

ER39

ER39

ER39

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

199

200
201

202

203

204
205

206

207

vIRRF

TFS

vBCTFS

pTFS

vTFS

TFU

vBCTFU

pTFU

vTFU

208

gProcRef

209

vItem

4

3
4

4

4

3
4

4

4

2

3

Valor do IRRF retido

Taxa de Fiscalização de Serviço
Valor BC TFS

Alíquota do TFS

Valor TFS

Taxa de Fiscalização de Uso
Valor BC TFU

Alíquota do TFU

Valor TFU

E  N

1 - 1

G
E  N

0 - 1
1 - 1

13, 2
13, 8

13, 2

E  N

1 - 1

3, 2

E  N

1 - 1

13, 2

G
E  N

0 - 1
1 - 1

13, 2

E  N

1 - 1

3, 2

E  N

1 - 1

13, 2

Grupo Processo referenciado

G

0 - 1

Valor unitário do item

E  N

1 - 1

210

qFaturada

3

Quantidade Faturada

E  N

1 - 1

211

212
213
214

vProd

indDevolucao
gProc

tpProc

3

3
3
4

Valor total do item

Indicador de devolução do valor do item
Grupo identificador do Processo
Tipo de Processo

E  N

1 - 1

E  N
G
E  N

0 - 1
1 - 10
1 - 1

13, 2
13, 10

11, 0
11, 4

13, 2
13, 10
1 - 1

1

D10

D30

ER39

ER36

ER16

ER36

ER36

ER16

ER36

ER40

ER31

ER40

15 posições, sendo 13 inteiras e 2 a 8 casas
decimais.

15 posições, sendo 13 inteiras e 2 casas
decimais.
5 posições, sendo 3 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.

15 posições, sendo 13 inteiras e 2 casas
decimais.
5 posições, sendo 3 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.
Este grupo somente deverá ser preenchido
quando houver processo judicial ou
administrativo que altere valores.
15 posições, sendo 13 inteiras e 2 a 10 casas
decimais.
Informar o valor sem a influência da decisão
judicial/administrativa.
11 posições, sendo 11 inteiras e 0 a 4 casas
decimais.
Informar a quantidade de comercialização
do produto.
15 posições, sendo 13 inteiras e 2 a 10 casas
decimais.
1 – Devolução do valor do item

0 - Processo Adm Estadual;
1 - Justiça Federal;
2 - Justiça Estadual;

Página 40 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

215
216

217
218

219
220

221

222

223

nProcesso

infAdProd

total

vProd

vRetTribTot
vRetPIS

vRetCofins

vRetCSLL

vIRRF

224

vCOFINS

225

vPIS

226

vTFS

227

vTFU

228

vNF

229
230

231
232

IBSCBSTot

vBCIBSCBS

gIBS

gIBSUF

4
2

1
2

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

2
3

3
4

Número do Processo
Informações adicionais do produto (norma
referenciada, informações complementares, etc)
Dados dos totais da NFAg
Valor Total dos produtos e serviços

E  C
E  C

1 - 1
0 - 1

1 - 60
1 - 500

ER48
ER48

G
E  C

1 - 1
1 - 1

13, 2

ER36

15 posições, sendo 13 inteiras e 2 casas
decimais.

3 - Processo Adm Municipal;
4 - Processo Adm Federal;
5 - Procon

Total da retenção de tributos federais
Valor do PIS retido

G
E  N

1 - 1
1 - 1

13, 2

Valor do COFNS retido

E  N

1 - 1

13, 2

Valor da CSLL retida

Valor do IRRF retido

Valor do COFINS

Valor do PIS

Valor TFS

Valor TFU

E  N

1 - 1

13, 2

E  N

1 - 1

13, 2

E  N

1 - 1

13, 2

E  N

1 - 1

13, 2

E  N

1 - 1

13, 2

E  N

1 - 1

13, 2

Valor Total da NF-e

E  N

1 - 1

13, 2

ER36

ER36

ER36

ER36

ER36

ER36

ER36

ER36

ER36

15 posições, sendo 13 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.

Totais de IBS e CBS
Total Base de Cálculo

Totalização do IBS
Totalização do IBS de competência da UF

G
E  N

1 - 1
1 - 1

G
G

1 - 1
1 - 1

13, 2

ER36

15 posições, sendo 13 inteiras e 2 casas
decimais.

Página 41 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

233

234

235

236
237

238

239

240

243
244

245

246

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

248 a

284 b

gEstornoCred

     vIBSEstCred

284 c

    vCBSEstCred

249

vTotDFe

250

gFat

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

Total do Diferimento

E  N

1 - 1

13, 2

Total de devoluções de tributos

E  N

1 - 1

13, 2

Valor total do IBS Estadual

E  N

1 - 1

13, 2

Totalização do IBS de competência Municipal
Total do Diferimento

G
E  N

1 - 1
1 - 1

13, 2

Total de devoluções de tributos

E  N

1 - 1

13, 2

Valor total do IBS Municipal

E  N

1 - 1

13, 2

Valor total do IBS

E  N

1 - 1

13, 2

Totalização da CBS
Total do Diferimento

G
E  N

1 - 1
1 - 1

13, 2

Total de devoluções de tributos

E  N

1 - 1

13, 2

Valor total da CBS

E  N

1 - 1

13, 2

Total do estorno de crédito

Total do IBS estornado

G

0 – 1

E  N

1 – 1

13,2

Total da CBS estornada

E  N

1 – 1

13,2

Valor total do documento fiscal
(vNF + total do IBS + total da CBS)
Grupo de informações de controle da Fatura

E  N

1 - 1

13, 2

G

0 - 1

Obrigatório para tpFat 1 e 3
Vedado para tpFat 2

ER36

ER36

ER36

ER36

ER36

ER36

ER36

ER36

ER36

ER36

ER36

ER36

ER36

15 posições, sendo 13 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.

15 posições, sendo 13 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.

15 posições, sendo 13 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.

15 posições, sendo 13 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.
15 posições, sendo 13 inteiras e 2 casas
decimais.

Página 42 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

251
252
253

254
255
256
#

257
258
259
260

261
275
263
264
265
266
267
268
269
270
271
272

273
274
275

CompetFat
dVencFat
dApresFat

dProxLeitura
nFat
codBarras

--- x ---

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
email

gPIX

urlQRCodePIX

gAgencia
econ
econAcumulada

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
2
3

1
2
2

Ano e mês referência do faturamento (AAAAMM)
Data de vencimento da fatura
Data de apresentação da fatura

E  N
E  D
E  D

1 - 1
1 - 1
0 - 1

6 - 6
10
10

Data prevista próxima leitura
Número da Fatura
Linha digitável do código de barras
CHOICE XML

E  D
E  N
E  N
-
-

CE  N
Código de autorização débito em conta
Número do banco para débito em conta
E  C
Número da agência bancária para débito em conta  E  C
Endereço de entrega da fatura.

G

Logradouro
Número
Complemento
Bairro
Código do município (utilizar a tabela do IBGE)
Nome do município
CEP
Sigla da UF
Telefone
Endereço de E-mail
Grupo de informações do PIX
URL do QRCode do PIX que será apresentado na
fatura
Grupo de informações da Agência reguladora
Demonstrativo de economia de água
Demonstrativo de economia de água acumulada no
período

E  C
E  C
E  C
E  C
E  N
E  C
E  N
E  C
E  N
E  C
G
E  C

G
E  C
E  C

1 - 1
0 - 1
1 - 1
0 - 1

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
0 - 1
0 - 1
1 - 1

1 - 1
0 - 1
0 - 1

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
1 - 60

2 - 2000

2 - 10
2 - 10

D6

ER77
ER49
ER49

ER49
ER66
ER67

ER66
ER48
ER48

ER48
ER48
ER48
ER48
ER2
ER48
ER70

ER71
ER75

ER48

Formato AAAA-MM-DD
Formato AAAA-MM-DD
Não obrigatória, conforme item 2.3.2 da
Seção 11.1 do Módulo 11 do PRODIST.
Formato AAAA-MM-DD

Uma choice XML, ou será informado
codDebAuto ou serão informados CodBanco
e codAgencia

Informar se diferente do endereço do
destinatário

Informar zeros não significativos

Página 43 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

276
277
278
279
280
281
282
283
284
285
286
287

288
289
290

291
292
293
294
295
296
297
298
299
300
301
302
303
304

sPrestador
dEmissSelo
sRegulador
nAgenciaAtend
enderAgenciaAtend
gHistCons

xHistorico
gCons

CompetFat
uMed
qtdDias
medDiaria

consumo
volFat
medMensal

gQualiAgua

CompetAnalise
gAnalise

xItemAnalisado
nAmostraMinima
nAmostraAnalisada
nAmostraFPadrao
nAmostraDPadrao
nMediaMensal
xValorReferencia

Conclusao
cProcesso
SistemaAbast

autXML

305

CNPJ

2
2
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
2
2
1

2

Selo de segurança do prestador
E  C
Data de emissão do Selo de segurança do prestador  E  D
E  C
Selo de segurança do Regulador
E  C
Agência responsável pelo atendimento
Endereço da Agência responsável pelo atendimento  E  C
Histórico de Consumo
Nome do histórico para exibição/apresentação
Consumo
Ano e mês referência do faturamento (AAAAMM)
Unidade Básica de Medida
Quantidade de dias de medição
Média Diária de consumo

G
E  C
G
E  N
E  N
E  N
E  N

Consumo no mês
Volume Faturado
Média Mensal de consumo

Informações sobre a qualidade de água
Ano e mês referência da análise (AAAAMM)
Grupo de informações da Análise
Nome do item analisado
Número de amostra mínima
Número de amostra analisada
Número de amostra fora do padrão
Número de amostra dentro do padrão
Média mensal dos valores da análise
Valor de referência
Conclusão da Análise
Legislação aplicada
Nome do Sistema de abastecimento
Autorizados para download do XML do DFe

E  N
E  N
E  N

G
E  N
G
E  C
E  N
E  N
E  N
E  N
E  N
E  N
E  C
E  C
E  C
G

2 - 10
10
2 - 10
2 - 20
2 - 200

2 - 60

6 - 6
1
5
13, 2
13, 4
13, 2
13, 2
13, 2
13, 4

6 - 6

2 - 60
4
4
4
4
2 - 60
2 - 60
2 - 50
2 - 50
2 - 50

0 - 1
0 - 1
0 - 1
1 - 1
1 - 1
1 - 5
1 - 1
1 - 13
1 - 1
1 - 1
1 - 1
0 - 1

0 - 1
1 - 1
1 - 1

0 - 1
1 - 1
1 - 10
1 - 1
0 - 1
0 - 1
0 - 1
0 - 1
0 - 1
0 - 1
0 - 1
0 - 1
0 - 1
0 - 10

CNPJ do autorizado

CE  C

1 - 1

14

ER7

ER49

ER48

ER48

Exemplo: Consumo Meses Anteriores

D7

D12
D12
D12
D12

ER77

ER46
ER41

ER41
ER41
ER41

ER77

ER48

ER48
ER48
ER48
ER48
ER48

1 - m3 e 2 - litro

15 posições, sendo 13 inteiras e 2 a 4 casas
decimais.
15 posições, sendo 13 inteiras e
15 posições, sendo 13 inteiras e 2
15 posições, sendo 13 inteiras e 2 a 4 casas
decimais.

Informar CNPJ ou CPF. Preencher os zeros
não significativos.
Informar zeros não significativos

Página 44 / 50

CPF do autorizado
Informações Adicionais
Informações adicionais de interesse do Fisco

CE  N
G
E  C

1 - 1
0 - 1
0 - 1

1 - 2000

11

ER9

Informar zeros não significativos

ER48

ER48

Norma referenciada, informações
complementares etc.

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

306
307
308

CPF
infAdic

infAdFisco

309

infCpl

310

infPAA

311

CNPJPAA

312

gRespTec

313

CNPJ

314

xContato

315
316

#
318

email
fone

--- x ---

idCSRT

319

hashCSRT

2
1
2

2

1

2

1

2

2

2
2

0
2

2

Informações complementares de interesse do
Contribuinte
Grupo de Informação do Provedor de Assinatura e
Autorização
CNPJ do Provedor de Assinatura e Autorização

CNPJ da empresa que emitirá a nota do tipo
faturamento 1 em nome de outra empresa
Informações do Responsável Técnico pela emissão
do DFe
CNPJ da pessoa jurídica responsável técnica pelo
sistema utilizado na emissão do documento fiscal
eletrônico
Nome da pessoa a ser contatada

E  C

0 - 5

1 - 3000

G

0 - 1

E  C

1 - 1

14

ER7

G

0 - 1

E  C

1 - 1

14

ER7

E  C

1 - 1

2 - 60

ER48

Email da pessoa jurídica a ser contatada
Telefone da pessoa jurídica a ser contatada

E  C
E  N

1 - 1
1 - 1

1 - 60
7 - 12

-
Sequência XML
-
ES  C
Identificador do código de segurança do responsável
técnico
Hash do token do código de segurança do
responsável técnico

ES  C

0 - 1
1 - 1

3

1 - 1

20

ER75
ER71

ER72

Informar o CNPJ da pessoa jurídica
desenvolvedora do sistema utilizado na
emissão do documento fiscal eletrônico.
Informar o nome da pessoa a ser contatada
na empresa desenvolvedora do sistema
utilizado na emissão do documento fiscal
eletrônico. No caso de pessoa física,
informar o respectivo nome.

Preencher com o Código DDD + número do
telefone.

Identificador do CSRT utilizado para geração
do hash
O hashCSRT é o resultado das funções SHA-
1 e base64 do token CSRT fornecido pelo
fisco + chave de acesso do DF-e.
(Implementação em futura NT)

Observação: 28 caracteres são

Página 45 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

infNFAgSupl
qrCodNFAg

320
321
322

0
1
0

Informações suplementares da NFAg
Texto com o QR-Code para consulta da NFAg
ds:Signature

G
E  C
E  C

1 - 1
1 - 1
1 - 1

50 - 1000

ER69

representados no schema como 20 bytes do
tipo base64Binary

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
0\.[0-9]{3}|[1-9]{1}[0-9]{0,2}(\.[0-9]{3})?
[0-9]{1,3}(\.[0-9]{2,3})?
0|0\.[0-9]{2,4}|[1-9]{1}[0-9]{0,2}(\.[0-9]{2,4})?
0\.[0-9]{2,4}|[1-9]{1}[0-9]{0,2}(\.[0-9]{2,4})?
0(\.[0-9]{2,4})?|[1-9]{1}[0-9]{0,1}(\.[0-9]{2,4})?|100(\.0{2,4})?
[0-9]{1,4}(\.[0-9]{2,8})?
0|0\.[0-9]{3}|[1-9]{1}[0-9]{0,4}(\.[0-9]{3})?
0|0\.[0-9]{3}|[1-9]{1}[0-9]{0,7}(\.[0-9]{3})?
0\.[0-9]{3}|[1-9]{1}[0-9]{0,7}(\.[0-9]{3})?

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
ER14
ER15
ER16
ER17
ER18
ER19
ER20
ER21
ER22

Página 46 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

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
ER44
ER45
ER46
ER47
ER48
ER49

ER50

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
[1-9]{1}[0-9]{0,8}
0|[1-9]{1}[0-9]{0,2}
[0-9]{5}
[0-9]{1,4}
[!-ÿ]{1}[ -ÿ]{0,}[!-ÿ]{1}|[!-ÿ]{1}
((((20|19|18)(([02468][048])|([13579][26]))-02-29))|((20|19|18)[0-9][0-9])-((((0[1-9])|(1[0-2]))-((0[1-9])|(1\d)|(2[0-
8])))|((((0[13578])|(1[02]))-31)|(((0[1,3-9])|(1[0-2]))-(29|30)))))
[0-9]\.[0-9]{6}|[1-8][0-9]\.[0-9]{6}|90\.[0-9]{6}|-[0-9]\.[0-9]{6}|-[1-8][0-9]\.[0-9]{6}|-90\.[0-9]{6}

Página 47 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

[0-9]\.[0-9]{6}|[1-9][0-9]\.[0-9]{6}|1[0-7][0-9]\.[0-9]{6}|180\.[0-9]{6}|-[0-9]\.[0-9]{6}|-[1-9][0-9]\.[0-9]{6}|-1[0-7][0-9]\.[0-9]{6}|-180\.[0-
9]{6}
[0-9]{15}
(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])
\d{3}
\d{6}
0\.[1-9]{1}[0-9]{3}|0\.[0-9]{3}[1-9]{1}|0\.[0-9]{2}[1-9]{1}[0-9]{1}|0\.[0-9]{1}[1-9]{1}[0-9]{2}|[1-9]{1}[0-9]{0,10}(\.[0-9]{4})?
[0-9]{1}
([!-ÿ]{0}|[!-ÿ]{2,20})?
[0-9]{10}
([!-ÿ]{0}|[!-ÿ]{1,15})?
(0[1-9]|1[0-9]|99)
[0-9]{4}
(0[1-9]|1[0-9]|20)
[1-9]{1}[0-9]{0,1}|[1-8]{1}[0-9]{2}|[9]{1}[0-8]{1}[0-9]{1}|[9]{1}[9]{1}[0]{1}
[1-9]{1}[0-9]{0,3}
[0-9]{1,20}
[0-9]{1,48}
NFAG[0-9]{6}[A-Z0-9]{12}[0-9]{26}
((HTTPS?|https?)://.*\?chNFAg=[0-9]{6}[A-Z0-9]{12}[0-9]{26}&amp;tpAmb=[1-2](&amp;sign=[!-ÿ]{1}[ -ÿ]{0,}[!-ÿ]{1}|[!-ÿ]{1})?)
[0-9]{8}
[0-9]{7,12}
[0-9]{3}
1\.00
(([0-1][0-9])|([2][0-3])):([0-5][0-9]):([0-5][0-9])
[^@]+@[^\.]+\..+
[123567][0-9]([0-9][1-9]|[1-9][0-9])
[0-9]{1,6}

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
ER72
ER73
ER74
ER75
ER76
ER77

Domínio

Página 48 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

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

11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 35, 41, 42, 43, 50, 51, 52, 53
11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 35, 41, 42, 43, 50, 51, 52, 53, 90, 91, 92, 93
11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 35, 41, 42, 43, 50, 51, 52, 53, 99
75
AC, AL, AM, AP, BA, CE, DF, ES, GO, MA, MG, MS, MT, PA, PB, PE, PI, PR, RJ, RN, RO, RR, RS, SC, SE, SP, TO, EX
AC, AL, AM, AP, BA, CE, DF, ES, GO, MA, MG, MS, MT, PA, PB, PE, PI, PR, RJ, RN, RO, RR, RS, SC, SE, SP, TO
1, 2, 3, 4
1, 2, 3, 4, 5, 6
0, 1, 2, 3, 4
1
01, 02, 06, 07, 08, 09, 49
[0-9]{4}
0, 3
1, 2, 3
1, 3
1, 2, 3, 4, 5
1, 2, 9
1, 2, 3,
0, 1, 2, 3, 4, 5, 6, 7, 8,
01, 02, 03, 04, 05, 06, 07, 08, 09
01, 02, 04, 06, 07, 08, 09, 10, 11, 12, 99
01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14
01, 02, 03, 04, 05, 06, 07, 08, 99
01, 02, 03, 04, 05, 06, 07, 08, 09, 10
0, 1, 2, 3
0, 1, 2, 3, 4, 5, 6, 7
1, 2, 3, 4, 5, 6, 7
00, 01, 02, 03, 04, 05
1, 2, 5, 6
0, 1, 2, 3, 4, 5

Página 49 / 50

Projeto
Nota Fiscal de Água e Saneamento Eletrônica
MOC 1.00h

Página 50 / 50

