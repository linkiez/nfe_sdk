Sistema Nota Fiscal Eletrônica

Manual de Orientação do Contribuinte
Anexo I – Leiaute e Regras de Validação da NF-e ABI

Versão Minuta 2.00 – Março de 2026

Nota Fiscal Eletrônica
NF-e ABI – Anexo I, Leiaute e Regras de Validação

Sumário
Controle de Versões .................................................................................................................................................................. 3
Histórico de Alterações / Cronograma ....................................................................................................................................... 4
1. Introdução ............................................................................................................................................................................. 5
2. Leiaute da NF-e ABI .............................................................................................................................................................. 6
Grupo A. Dados da Nota Fiscal eletrônica ........................................................................................................ 6
Grupo B. Identificação da NF-e ABI ................................................................................................................. 6
Grupo BA. Documento Fiscal Referenciado ..................................................................................................... 7
Grupo C.  Identificação do Emitente da NFe ABI .............................................................................................. 7
Grupo E. Identificação dos Transmitentes da Operação da NF-e ABI ................................................................ 8
Grupo F. Identificação dos Adquirentes da Operação da NF-e ABI .................................................................... 9
Grupo G. Identificação do Imóvel ................................................................................................................... 11
Grupo GA. Autorização para obter XML ......................................................................................................... 13
Grupo H. Informações da Operação .............................................................................................................. 13
Grupo U. Informações da Tributação ............................................................................................................. 17
Grupo Y. Detalhes de Pagamento .................................................................................................................. 20
Grupo W. Total da NF-e ABI .......................................................................................................................... 21
Grupo Z. Informações Adicionais da NF-e ABI ............................................................................................... 22
Grupo ZD. Informações do Responsável Técnico .......................................................................................... 22
Grupo ZX. Informações Suplementares da NFe ABI ...................................................................................... 23
Grupo ZZ. Informações da Assinatura Digital ................................................................................................. 23
3. Eventos ............................................................................................................................................................................... 24
Evento: Pagamento de Parcela ...................................................................................................................... 24
4. Orientações Gerais ............................................................................................................................................................. 26
Abreviações utilizadas nas colunas de cabeçalho do leiaute .......................................................................... 26
Regras de preenchimento dos campos da NFe ABI ....................................................................................... 27
Preenchimento da URL do QR Code ............................................................................................................. 27
5. Regras de Validação dos Webservices ............................................................................................................................... 28
Regras de Validação Gerais .......................................................................................................................... 28
Grupo A: Validação do Certificado de Transmissão (protocolo TLS) .............................................................................. 28
Grupo B: Validação Inicial da Mensagem no Web Service ............................................................................................. 28
Grupo D: Validação da Área de Dados ........................................................................................................................... 29
Grupo E: Validação do Certificado Digital de Assinatura ................................................................................................ 30
Grupo F: Validação da Assinatura Digital ........................................................................................................................ 31
Regras de Negócio específicas ...................................................................................................................... 31
Autorização de NF-e ABI ................................................................................................................................................. 31

Página 2 / 45

Nota Fiscal Eletrônica
NF-e ABI – Anexo I, Leiaute e Regras de Validação

Controle de Versões

Versão

Publicação

Descrição

1.00

Novembro/2025

Publicação da primeira versão

2.00

Março/2026

Publicação da segunda versão

Página 3 / 45

Nota Fiscal Eletrônica
NF-e ABI – Anexo I, Leiaute e Regras de Validação

Histórico de Alterações / Cronograma

Versão

Histórico de atualizações

1.00

2.00

Publicação da primeira versão

Publicação da segunda versão

Implantação
Homologação

Implantação
Produção

-

-

-

-

Página 4 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

1. Introdução

Este documento tem por objetivo a definição do leiaute da NF-e de Alienação de Bens Imóveis

O Manual de Orientação do Contribuinte 2.0 é composto pelos seguintes documentos:

  MOC – Visão Geral
  MOC – Anexo I – Leiaute NF-e ABI e Regras de Validação
  MOC – Anexo II – Manual de Especificações Técnicas do DANFE e Código de Barras (a ser publicado)

Página 5 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

2. Leiaute da NF-e ABI

A seguir são apresentados os campos do leiaute da NF-e ABI.

ID
-

Campo
NFeABI

TAG raiz da NF-e ABI

Descrição

Ele
G

Pai
-

Tipo

Ocor.
1-1

Tam.

TAG raiz da NF-e ABI

Observação

Grupo A. Dados da Nota Fiscal eletrônica

Campo
infNFeABI
versao
Id
pk_nItem

Descrição

Informações da NF-e ABI
Versão do leiaute
Identificador da TAG a ser assinada
Regra para que a numeração do item de detalhe da NF-e ABI
seja única.

Grupo B. Identificação da NF-e ABI

Campo
ide
cUF

Descrição

Informações de identificação da NF-e ABI
Código da UF do emitente do Documento Fiscal

cNF

Código Numérico que compõe a Chave de Acesso

mod
serie
nNF
dhEmi

Código do Modelo do Documento Fiscal
Série do Documento Fiscal
Número do Documento Fiscal
Data e hora de emissão do Documento Fiscal

tpImp

Formato de Impressão do DANFE

gModNat
modOper

Grupo Modalidade e Natureza da operação
Modalidade da operação

natOper

Natureza da operação

detOper

Detalhamento da operação

ID
A01
A02
A03
A04

ID
B01
B02

B03

B04
B05
B06
B07

B08

B09
B10

B11

B12

Ele
G
A
ID
RC

Ele
G
E

E

E
E
E
E

E

G
E

E

E

Pai
Raiz
A01
A01
-

Tipo
-
C
C
-

Ocor.
1-1
1-1
1-1
1-1

Tam.

1 - 4
50

Observação

Grupo que contém as informações da NF-e ABI
Versão do leiaute (1.00)
Informar a Chave de Acesso precedida do literal ‘NFeABI’,
Regra de validação do item de detalhe da NF-e ABI, campo de
controle do Schema XML, o contribuinte não deve se
preocupar com o preenchimento deste campo.

Pai
A01
B01

B01

B01
B01
B01
B01

B01

B01
B09

B09

B09

Tipo

N

N

N
N
N
D

N

-
N

N

N

Ocor.
1-1
1-1

1-1

1-1
1-1
1-1
1-1

1-1

1-1
1-1

1-1

1-1

Tam.

2

6

2
1 - 3
1 - 9

1

2

2

2

Observação

Código  da  UF  do  emitente  do  Documento  Fiscal.  Utilizar  a
Tabela do IBGE de código de unidades da federação
Código  numérico  que  compõe  a  Chave  de  Acesso.  Número
aleatório  gerado  pelo  emitente  para  cada  NF-e  ABI  para
evitar acessos indevidos.
77=NF-e ABI
Série do Documento Fiscal.
Número do Documento Fiscal.
Data  e  hora no  formato  UTC (Universal  Coordinated  Time):
AAAA-MM-DDThh:mm:ssTZD
0=Sem geração de DANFE;
1=DANFE-ABI normal, Retrato;
2=DANFE-ABI normal, Paisagem;

Verificar Tabela de  códigos  da NFe  ABI,  publicada no  Portal
da NFe ABI
Verificar Tabela de códigos  da NFe ABI, publicada no Portal
da NFe ABI
Verificar Tabela de códigos  da NFe ABI, publicada no Portal
da NFe ABI

Página 6 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

ID
B13

Campo
tpEmis

Tipo de Emissão da NF-e ABI

Descrição

Ele
E

Pai
B01

Tipo
N

Ocor.
1-1

Tam.
1

B14

nSiteAutoriz

Site do Autorizador que recepcionou a NF-e ABI

E

B01

N

1-1

B15

B16

B17

B18

B19
B20
B21

B22

cDV

Dígito Verificador da Chave de Acesso da NF-e ABI

tpAmb

Identificação do Ambiente

finNFe

Finalidade de emissão da NF-e ABI

procEmi

Processo de emissão da NF-e ABI

verProc
gCont
dhCont

Versão do Processo de emissão da NF-e ABI
Grupo de contingência
Data e Hora da entrada em contingência

xJust

Justificativa da entrada em contingência

E

E

E

E

E
G
E

E

B01

B01

B01

B01

B01
B01
B20

B20

N

N

N

N

C

D

C

1-1

1-1

1-1

1-1

1-1
0-1
1-1

1-1

15 - 256

Grupo BA. Documento Fiscal Referenciado

ID
BA01

Campo
NFref

Informação de Documentos Fiscais referenciados

Descrição

Ele
G

Pai
B01

Tipo

Ocor.
0-500

Tam.

BA02

refNFeABI

Chave de acesso da NF-e ABI referenciada

E

BA01

N

1-1

44

1

1

1

1

1

1- 20

Observação

1=Emissão normal (não em contingência);
3=Emissão NFF;
9=Contingência off-line;
Se  o  autorizador  possuir  apenas  um  site  deverá  ser
informado  com  Zero  (0),  em  caso  de  autorizador  trabalhar
com  múltiplos  sites  indicar  o  número  do  site  para  qual  foi
endereçada a NF-e ABI (1 a 9)
Informar o DV da Chave de Acesso, o DV será calculado com
a aplicação do algoritmo módulo 11 (base 2,9) da Chave de
Acesso.
1=Produção;
2=Homologação
1=NF-e normal;
2=NF-e substituição;
0=Emissão  de  NF-e  com  aplicativo  do  contribuinte
(Assinatura com certificado do emitente);
1=Emissão  NF-e  pelo  contribuinte  com  aplicativo  fornecido
pelo Fisco (Assinatura com certificado do fisco).
Informar a versão do aplicativo emissor de NF-e ABI.
Grupo opcional.
Data  e  hora no  formato  UTC (Universal  Coordinated  Time):
AAAA-MM-DDThh:mm:ssTZD

Observação

informações

Grupo
com
referenciados.
Referencia uma NF-e ABI emitida anteriormente

de  Documentos

Fiscais

Grupo C.  Identificação do Emitente da NFe ABI

ID
C01
C02
C03
C04
C05
C06
C07

Campo
emit
CNPJ
CPF
xNome
xFant
enderEmit
xLgr

Descrição

Identificação do emitente da NF-e ABI
CNPJ do emitente
CPF do emitente
Razão Social ou Nome do emitente
Nome fantasia
Endereço do emitente
Logradouro

Ele
G
CE
CE
E
E
G
E

Pai
A01
C01
C01
C01
C01
C01
C06

Tipo

C
C
C
C

C

Ocor.
1-1
1-1
1-1
1-1
0-1
1-1
1-1

Tam.

14
11
2 - 60
1 - 60

2 - 60

Observação

Informar o CNPJ do emitente.

Página 7 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

Descrição

ID
C08
C09
C10
C11
C12
C13
C14
C15
C16
C17

Campo
nro
xCpl
xBairro
cMun
xMun
UF
CEP
cPais
xPais
fone

Número
Complemento
Bairro
Código do município
Nome do município
Sigla da UF
Código do CEP
Código do País
Nome do País
Telefone

Ele
E
E
E
E
E
E
E
E
E
E

Pai
C06
C06
C06
C06
C06
C06
C06
C06
C06
C06

Tipo
C
C
C
N
C
C
N
N
C
N

Ocor.
1-1
0-1
1-1
1-1
1-1
1-1
1-1
0-1
0-1
0-1

Tam.
1 - 60
1 - 60
2 - 60
7
2 - 60
2
8
4
1 - 60
6 - 14

C18

tpEmit

Tipo do Emitente

E

C01

N

1-1

1

C19

tpIMF

Tipo de Inscrição no Ministério da Fazenda

E

C01

N

1-1

1

Observação

Utilizar a Tabela do IBGE

Informar os zeros não significativos.
1058=Brasil
Brasil ou BRASIL
Preencher  com  o  Código  DDD  +  número  do  telefone.  Nas
operações  com  exterior  é  permitido  informar  o  código  do
país + código da localidade + número do telefone
01=Vendedor, Transmitente ou Cedente
02=Comprador, Adquirente ou Cessionário
03=Leiloeiro (em nome do arrematante)
04=Tabelionato  de  Notas  (em  nome  do  vendedor  ou
transmitente)
05=Junta Comercial (em nome do transmitente)
06=Banco  ou  instituição  financeira  (em  nome  do  vendedor
ou transmitente)
07=Organização gestora de fundo patrimonial
08=Credor fiduciário (na consolidação da propriedade)
09=Grupo de consórcio (na consolidação da propriedade)
10=Sucessora em virtude de incorporação, cisão ou fusão
99=Outros Emitentes
OBSERVAÇÃO  1:  Proibida  a  opção  “01”  quando  a  moda-
lidade for 02=Arrematação, Adjudicação ou Remição.
OBSERVAÇÃO 2: Proibidas as opções “02” e “03” quando as
forem  diferentes  de  02=Arrematação,
modalidades
Adjudicação ou Remição.
OBSERVAÇÃO  3:  Proibida  a  opção  “99”  quando  houver
destaque de tributo na nota.
1=Emitente com inscrição CNPJ
2=Emitente com inscrição CPF

Grupo E. Identificação dos Transmitentes da Operação da NF-e ABI

ID
E01

Campo
transmit

Vendedor, Transmitente ou Cedente do imóvel

Descrição

Ele
G

Pai
A01

Tipo

Ocor.
1-99

Tam.

Observação

E01a

nTransmit

Número Sequencial do Transmitente

A

E01

N

1-1

1-2

Número Sequencial do Transmitente (1-99)

Página 8 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

ID
E02

Campo
indDeclarante

Indicador de declarante

Descrição

Ele
E

Pai
E01

Tipo
N

Ocor.
1-1

Tam.
1

E03

E04

E05
E06
E07
E08
E09
E10
E11
E12
E13
E14
E15
E16
E17
E18

CNPJ

CNPJ do Transmitente

CPF

CPF do Transmitente

xNome
enderTransmit
xLgr
nro
xCpl
xBairro
cMun
xMun
UF
CEP
cPais
xPais
fone
pTransIndiv

Razão Social ou nome do Transmitente
Endereço do Transmitente da NF-e ABI
Logradouro
Número
Complemento
Bairro
Código do município
Nome do município
Sigla da UF
Código do CEP
Código do País
Nome o País
Telefone
Proporção Transmitida Tndividual

CE

CE

E
G
E
E
E
E
E
E
E
E
E
E
E
E

E01

E01

E01
E01
E06
E06
E06
E06
E06
E06
E06
E06
E06
E06
E06
E01

C

C

C

C
C
C
C
N
C
C
N
N
C
N
N

1-1

1-1

1-1
0-1
1-1
1-1
0-1
0-1
1-1
1-1
1-1
0-1
0-1
0-1
0-1
1-1

14

11

2 - 60

2 - 60
1 - 60
1 - 60
2 - 60
7
2 - 60
2
8
2 - 4
2 - 60
6 - 14
3v4

E19

indContrib

Indicador de Contribuinte do Regime regular do IBS/CBS

E

E01

N

1-1

1

Observação
Q. O vendedor, transmitente ou cedente aqui identificado é
o declarante desta Nota Fiscal?
0=Não
1=Sim
Não abrir para a modalidade “02.Arrematação, Adjudicação
ou Remição” (tag: modOper<>2)
OBSERVAÇÃO: O transmitente com indDelcarante=1 deverá
corresponder ao nTransmit=1.
Informar o CNPJ do Transmitente, preenchendo os zeros não
significativos.
Informar o CPF do Transmitente, preenchendo os zeros não
significativos.

Obrigatório somente quando indDeclarante=1

Informar os zeros não significativos.

Preencher com o Código DDD + número do telefone.
ORIENTAÇÃO:  Preencher  a  proporção  do  imóvel  (*)  que  o
vendedor,  transmitente  ou  cedente  está  transferindo
individualmente.
(*) em formato percentual
0=Não Contribuinte do IBS/CBS
1=Contribuinte do IBS/CBS
2=Optante do Simples Nacional

Grupo F. Identificação dos Adquirentes da Operação da NF-e ABI

ID
F01

Campo
adquirente

Comprador, Adquirente ou Cessionário

Descrição

Ele
G

Pai
A01

Tipo

Ocor.
1-99

Tam.

Observação

F01a

nAdquir

Número Sequencial do Adquirente

A

F01

N

1-1

1-2

Número Sequencial do Adquirente (1-99)

Página 9 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

ID
F02

Campo
indDeclarante

Indicador de Declarante

Descrição

Ele
E

Pai
E01

Tipo
N

Ocor.
1-1

Tam.
1

F03

F04

F05
F06
F07
F08
F09
F10
F11
F12
F13
F14
F15
F16
F17
F18

CNPJ

CNPJ do Adquirente

CPF

CPF do Adquirente

xNome
enderAdquirente
xLgr
nro
xCpl
xBairro
cMun
xMun
UF
CEP
cPais
xPais
fone
pAquisição

Razão Social ou nome do Adquirente
Endereço do Adquirente da NF-e ABI
Logradouro
Número
Complemento
Bairro
Código do município
Nome do município
Sigla da UF
Código do CEP
Código do País
Nome do País
Telefone
Percentual de Aquisição

F19

indContrib

Indicador de Contribuinte do Regime regular do IBS/CBS

F20

gCredIndiv

Grupo de informação dos créditos individuais

CE

CE

E
G
E
E
E
E
E
E
E
E
E
E
E
E

E

G

F01

F01

F01
F01
F06
F06
F06
F06
F06
F06
F06
F06
F06
F06
F06
F01

C

C

C

C
C
C
C
N
C
C
N
N
C
N
N

1-1

1-1

1-1
1 -1
1-1
1-1
0-1
0-1
1-1
1-1
1-1
0-1
0-1
0-1
0-1
1-1

14

11

2 - 60

2 - 60
1 - 60
1 - 60
2 - 60
7
2 - 60
2
8
2 - 4
2 - 60
6 - 14
3v4

F01

N

1-1

1

F01

0-1

somente  para  a  modalidade  2.Arrematação,

Observação
Q. O comprador, adquirente ou cessionário aqui identificado
é o declarante desta Nota Fiscal?
0=Não
1=Sim
Abrir
Adjudicação ou Remição (tag: modOper=2).
OBSERVAÇÃO:  O  adquirente  com  indDelcarante=1  deve
corresponder ao nAdquir=1.
Informar o CNPJ do Adquirente, preenchendo os zeros não
significativos.
Informar o CPF do Adquirente, preenchendo os zeros não
significativos.

Informar os zeros não significativos.

ao

está

Preencher com o Código DDD + número do telefone.
A  obrigatoriedade  ou  vedação  do  preenchimento  deste
campo
indicador
condicionada
“ind_pAquisic_NFeABI”  da  tabela  de  cClassTrib  do  IBS  e  da
CBS.
Se  cClassTrib  do  IBS/CBS  (tag:  IBSCBS/cClassTrib)  possui
indicador  que  não  permite  a  informação  do  Percentual  de
Aquisição (ind_pAquisic_NFeABI=0):
  Não abrir o campo pAquisicao
Se  cClassTrib  do  IBS/CBS  (tag:  IBSCBS/cClassTrib)  possui
indicador  que  obriga  a
informação  do  Percentual  de
Aquisição (ind_pAquisic_NFeABI=1):
  Abrir o campo pAquisicao
0=Não Contribuinte do IBS/CBS
1=Contribuinte do IBS/CBS
2=Optante do Simples Nacional
Válido somente para indContrib = 1

Página 10 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

ID
F21

Campo
vCredIBSIndiv

Valor do crédito individual correspondente ao IBS

Descrição

Ele
E

Pai
F20

Tipo
N

Ocor.
1-1

Tam.
13v2

F22

vCredCBSIndiv

Valor do crédito individual correspondente à CBS

E

F20

N

1-1

13v2

Grupo G. Identificação do Imóvel

Campo
imovel

Descrição
Identificação do imóvel transmitido

Ele
G

Pai
A01

Tipo

Ocor.
0-1

Tam.

tipo

Tipo do imóvel

CE

G01

N

ID
G01

G02

G03
G04
G05

G06
G07

G08
G09

cadastro
cCIB
indIPTU

nIptu
indIncra

Informações Cadastrais do imóvel
Cadastro do CIB
Indicador se o imóvel possui IPTU

Número do IPTU
Indicador se o imóvel possui INCRA

nIncra
espImovel

Número do Incra
Espécie do Imóvel

G10

xOutrosEspecies

Descrição das Outras Espécies

G
E
E

E
E

E
E

E

G01
G03
G03

G03
G03

G03
G01

G01

C
N

C
N

C
N

C

1

2-60
1

2 - 60
1

2 - 60
2

1-1

1-1
0-1
0-1

0-1
0-1

0-1
1-1

0-1

Observação

de

diferentes

“02.Arrematação,

Nas  modalidades
Adjudicação ou Remição” (modOper <> 2):
   vCredIBSIndiv  =  (vIBSUF  +  vIBSMun)  *  pAquisicao  /
pTransImovel
Na  modalidade  2.Arrematação,  Adjudicação  ou  Remição
(modOper=2):
  Abrir o vCredIBSIndiv somente para indDeclarante=1
  vCredIBSIndiv = vIBSUF + vIBSMun

Valor do crédito correspondente à CBS:
Na modalidade diferentes de “02.Arrematação, Adjudicação
ou Remição” (modOper <> 2):
  vCredCBSIndiv = vCBS * pAquisicao / pTransImovel
Na  modalidade  2.Arrematação,  Adjudicação  ou  Remição
(modOper=2):
  Abrir o vCredCBSIndiv somente para indDeclarante=1
  vCredIBSIndiv = vCBS

Observação
Na  permuta  com  torna  envolvendo  exclusivamente  bens
imóveis  (indTorna=1),  informar os dados  do  imóvel  de  maior
valor.
1=Urbano
2=Rural

0=Não possui IPTU
1=Possui IPTU

0=Não possui Incra
1=Possui Incra

Verificar Tabela de códigos  da NFe ABI, publicada no Portal
da NFe ABI

1 - 60  Obrigatório para a Espécie de Imóvel "99=Outras"

Página 11 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

ID
G11

Campo
enquadramento

Enquadramento do imóvel

Descrição

Ele
E

Pai
G01

Tipo
N

Ocor.
1-1

Tam.
1

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

enderImovel
xLgr
nro
xCpl
xBairro
cMun
xMun
UF
CEP
cPais
xPais
obsLocalImovel
areaTotal

Endereço do Imóvel da NF-e ABI
Logradouro
Número
Complemento
Bairro
Código do município
Nome do município
Sigla da UF
Código do CEP
Código do País
Nome do País
Observações sobre o local do imóvel
Área Total do Imóvel

G
E
E
E
E
E
E
E
E
E
E
E
E

G01
G12
G12
G12
G12
G12
G12
G12
G12
G12
G12
G01
G01

C
C
C
C
N
C
C
N
N
C
C
C

1 -1
1-1
1-1
0-1
1-1
1-1
1-1
1-1
0-1
0-1
0-1
0-1
1-1

2 - 60
1 - 60
1 - 60
2 - 60
7
2 - 60
2
8
2 - 4
2 - 60
2 -200
13v2

Observação
Verificar Tabela de códigos da NFe ABI, publicada no Portal
da NFe ABI.
OBSERVAÇÃO:  A  obrigatoriedade  ou
vedação  do
preenchimento  deste  campo  está  condicionada  ao
indicador “ind_Enquadr_NFeABI” da tabela de cClassTrib do
IBS e da CBS.
Se  cClassTrib  do  IBS/CBS  (tag:  IBSCBS/cClassTrib)  possui
indicador
do
informação
permite
Enquadramento do imóvel (ind_Enquadr_NFeABI=0):
  Não abrir o campo enquadramento
Se  cClassTrib  do  IBS/CBS  (tag:  IBSCBS/cClassTrib)  possui
indicador  que  obriga  a  informação  do  Enquadramento  do
imóvel (ind_Enquadr NFeABI=1):
  Abrir o campo enquadramento

que

não

a

Informar os zeros não significativos.

OBSERVAÇÃO:  A  obrigatoriedade  ou
vedação  do
preenchimento  deste  campo  está  condicionada  ao
indicador “ind_Area_NFeABI” da tabela de cClassTrib do IBS
e da CBS.
Se  cClassTrib  do  IBS/CBS  (tag:  IBSCBS/cClassTrib)  possui
indicador  que  não  permite  a  informação  do  Area  Total  do
imóvel (ind_Area_NFeABI=0):
  Não abrir o campo areaTotal
Se  cClassTrib  do  IBS/CBS  (tag:  IBSCBS/cClassTrib)  possui
indicador que obriga a informação do Area Total do imóvel
(ind_Area_NFeABI=1):
  Abrir o campo areaTotal

Página 12 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

ID
G25

Campo
uAreaTotal

Unidade de Medida da Área Total

Descrição

Ele
E

Pai
G01

Tipo
C

Ocor.
1-1

Tam.
3

G26
G27

cartorioRegistro
matricTransc

Cartório de Registro do Imóvel
Matrícula ou Transcrição

E
E

G01
G01

C
C

0-1
0-1

2 - 60
2 - 60

Observação

“m2” – Metro quadrado
“ha” – Hectares
vedação  do
OBSERVAÇÃO:  A  obrigatoriedade  ou
preenchimento  deste  campo  está  condicionada  ao
indicador  “ind_uArea_NFeABI”  da  tabela  de  cClassTrib  do
IBS e da CBS.
Se  cClassTrib  do  IBS/CBS  (tag:  IBSCBS/cClassTrib)  possui
indicador  que  não  permite  a  informação  da  Unidade  de
Medida da Área Total (ind_uArea_NFeABI=0):
  Não abrir o campo uAreaTotal
Se  cClassTrib  do  IBS/CBS  (tag:  IBSCBS/cClassTrib)  possui
indicador  que  obriga  a  informação  da  Unidade  de  Medida
da Área Total (ind_uArea_NFeABI=1):
  Abrir o campo uAreaTotal

Grupo GA. Autorização para obter XML

ID
GA01
GA01a
GA02
GA03

Campo
autXML
nAutXML
CNPJ
CPF

Descrição

Pessoas autorizadas a acessar o XML da NF-e ABI
Número sequencial da autorização do XML
CNPJ Autorizado
CPF Autorizado

Grupo H. Informações da Operação

ID
H01
H02

Campo
infOper
pTransImovel

Descrição

Informações da Operação
Proporção Transmitida do Imóvel

Ele
G
A
CE
CE

Ele
G
E

Pai
A01
H01

Tipo

N

Ocor.
1-1
1-1

Tam.

3v4

Pai
A01
GA01
GA01
GA01

Tipo

N
C
C

Ocor.
0-10
1-1
1-1
1-1

Tam.

1-2
14
11

Observação

Número sequencial da autorização do XML
Informar CNPJ ou CPF. Preencher os zeros não significativos.

H03

vTotalOperacao

Valor Total da Operação

E

H01

N

1-1

3v4

Observação

Proporção Transmitida do imóvel (em formato percentual)
ORIENTAÇÃO 1: Caso esteja sendo transmitida  a totalidade
do imóvel, inserir como proporção transmitida 100%.
ORIENTAÇÃO  2:  Preencher  a  proporção  transmitida  do
imóvel, considerando a venda ou negócio na sua totalidade.
ORIENTAÇÃO:  Na  permuta
torna  envolvendo
exclusivamente bens imóveis (indTorna=1), preencher com o
imóvel de maior valor.

com

Página 13 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

ID
H04

Campo
indTorna

Indicador de Torna

Descrição

Ele
E

Pai
E01

Tipo
N

Ocor.
1-1

Tam.
1

H05
H06
H07

gTorna
vTorna
imovelTorna

Grupo Torna
Valor da Torna
Imóveis transmitidos junto com a torna

H08

gRedAjusteImovel  Redutor de Ajuste Imovel

G
E
G

G

H01
H05
H05

H01

N
TC

0-1
1-1
1-1

0 -1

13v2

Observação
nas

torna

permutas

envolvendo

Indicador
de
exclusivamente bens imóveis
Q.  Houve  torna  na  permuta  (ou  na  compra  e  venda
equiparada à permuta)?
0=Não
1=Sim
Abrir somente para as naturezas:
 13. Permuta envolvendo exclusivamente bens imóveis
  14.  Compra  e  venda  quitada  com  confissão  de  dívida  e
promessa de dação em pagamento nos termos do art. 252, §
6° da LC 214/2025
Abrir somente se indTorna=1

Tipo  Complexo  “imóvel”  do  grupo  “G.  Identificação  do
Imovel”

IBS/CBS  (tag:

vedação  do
OBSERVAÇÃO:  A  obrigatoriedade  ou
preenchimento deste  grupo  está condicionada ao indicador
“ind_RedAjuste_NFeABI” da tabela de cClassTrib do IBS e da
CBS.
1.  Nas  modalidades  diferentes  de  “03.  Cessão  ou
transmissão  de  direitos”  (tag:  modOper<>3)  e  Indicador  de
diferente de 1 (tag: indTorna<>1):
1.1.  Se  cClassTrib  do
IBSCBS/cClassTrib)
informado  possui  indicador  que  não  permite  a  informação
do Redutor de Ajuste (ind_RedAjuste_NFeABI=0):
    Não abrir o grupo de Redutor de Ajuste do Imóvel
1.2.  Se  cClassTrib  do
IBSCBS/cClassTrib)
informado  possui  indicador  que  permite  a  informação  do
Redutor de Ajuste (ind_RedAjuste_NFeABI=1):
    Abrir o grupo de Redutor de Ajuste do Imóvel
2.  Na  modalidade  igual  a  “03.  Cessão  ou  transmissão  de
direitos” (modOper = 3):
    Não abrir o grupo de Redutor de Ajuste do Imóvel
3.  Na  permuta  com  torna  envolvendo  exclusivamente  bens
imóveis (tag: indTorna=1):
    Não abrir o grupo de Redutor de Ajuste do Imóvel

IBS/CBS  (tag:

Página 14 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

ID
H09

Campo
vInicial

Valor Inicial do Redutor de Ajuste

Descrição

Ele
E

Pai
H08

Tipo
N

Ocor.
1-1

Tam.
13v2

H10

vITBI

Valor do ITBI

E

H08

N

0-1

13v2

H11

vLaudemio

Valor do Laudêmio

E

H08

N

0-1

13v2

H12

vOutorgaOnerosa

Valores despendidos a título de outorga onerosa do direito
de construir, de outorga onerosa por alteração de uso

E

H08

N

0-1

13v2

H13

vDemaisContrap

Demais contrapartidas de ordem urbanística e ambientais
pagas ou entregues aos entes públicos em virtude de
legislação federal, estadual ou municipal

E

H08

N

0-1

13v2

H14

vRedAjusteImovel  Valor do Redutor de Ajuste Imovel

E

H08

N

1-1

13v2

Observação
ORIENTAÇÃO  1:  Observar  todos  os  critérios  estabelecidos
no art. 258, Caput da LC 214/2025.
ORIENTAÇÃO 2: O Valor Inicial do Redutor de Ajuste deverá
ser  corrigido  desde  a  data  da  sua  constituição,  nos  termos
do art. 257, parág. 3° da LC 214/2025.
ORIENTAÇÃO  3:  Não  podem  ser  incluídos  neste  campo  os
valores  de  outorga  onerosa  do  direito  de  construir,
outorga  onerosa  por  alteração  de  uso  ou  de  quaisquer
outras contrapartidas.

ORIENTAÇÃO  1:  Deverá  ser  considerado  o  valor  do  ITBI
incidente na aquisição do imóvel ao qual se refere o Redutor
de Ajuste.
ORIENTAÇÃO 2: O valor do ITBI deverá ser corrigido desde a
data  do  pagamento,  nos  termos  do  art.  257,  parág.  3°  e
art. 258, parág. 9° da LC 214/2025.
ORIENTAÇÃO  1:  Deverá  ser  considerado  o  valor  do
Laudêmio incidente na aquisição do imóvel ao qual se refere
o Redutor de Ajuste.
ORIENTAÇÃO  2:  O  valor  do  Laudêmio  deverá  ser  corrigido
desde a data do pagamento, nos termos do art. 257, parág.
3° e art. 258, parág. 9° da LC 214/2025.
ORIENTAÇÃO:  O  valor  da  outorga  onerosa  deverá  ser
corrigido desde a data do pagamento das contrapartidas ou
da  transferência  ao  poder  público  dos  bens  cedidos  em
contrapartida,  nos  termos  do  art.  257,  parág.  3°  e  art.
258, parág. 9° da LC 214/2025.
ORIENTAÇÃO: O valor das Demais Contrapartidas deverá ser
corrigido desde a data do pagamento das contrapartidas ou
da  transferência  ao  poder  público  dos  bens  cedidos  em
contrapartida,  nos  termos  do  art.  257,  parág.  3°  e  art.
258, parág. 9° da LC 214/2025.
vRedAjusteImovel = vInicial + vITBI + vLaudemio +
vOutorgaOnerosa + vDemaisContrap

Página 15 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

ID
H15

Campo
indRedSocial

Indicador de Redutor Social

Descrição

Ele
E

Pai
H01

Tipo
N

Ocor.
0-1

Tam.
1

H16
H17

instrumento
tpInstrumento

Informações do Instrumento
Tipo de Instrumento

G
E

H01
H16

N

1-1
1-1

2

Observação

Indicador de Redutor Social
Q. Deseja utilizar o redutor social previsto no art. 259 da LC
214/2025 para reduzir a base de cálculo do IBS e da CBS?
0=Não
1=Sim
OBSERVAÇÃO:  A  obrigatoriedade  ou
vedação  do
preenchimento deste grupo está condicionada ao indicador
“ind_RedSocial_NFeABI” da tabela de cClassTrib do IBS e da
CBS.
1.  Nas  modalidades  diferentes  de  “03.  Cessão  ou
transmissão  de  direitos”  (modOper  <>  3)  e  Indicador  de
Torna (tag: infOper/indTorna) diferente de 1 (indTorna<>1):
1.1. Se cClassTrib do IBS/CBS (tag: IBSCBS/cClassTrib) possui
indicador  que  não  permite  a  informação  do  Redutor  Social
(ind_RedSocial_NFeABI=0)
     Não abrir o Indicador de Redutor Social
1.2. Se cClassTrib do IBS/CBS (tag: IBSCBS/cClassTrib) possui
indicador  que  permite  a  informação  do  Redutor  Social
(ind_RedSocial_NFeABI=1)  e  o  Enquadramento  do  Imóvel
(tag:  imóvel/enquadramento)  for  “01=Imóvel  Residencial
Novo”:
     Abrir o Indicador de Redutor Social
1.3. Se cClassTrib do IBS/CBS (tag: IBSCBS/cClassTrib) possui
indicador  que  permite  a  informação  do  Redutor  Social
(ind_RedSocial_NFeABI=1)  e  o  Enquadramento  do  Imóvel
(tag: imovel/enquadramento) for “03=Lote Residencial”:
     Abrir o Indicador de Redutor Social
2.  Na  modalidade  igual  a  “03.  Cessão  ou  transmissão  de
direitos” (tag: modOper = 3):
     Não abrir o Indicador de Redutor Social
3.  Na  permuta  com  torna  envolvendo  exclusivamente  bens
imóveis (tag: indTorna=1):
     Não abrir o Indicador de Redutor Social
ORIENTAÇÃO:  O  Redutor  Social  somente  poderá  ser
utilizado  uma  única  vez  para  cada  bem  imóvel  (art.  259,
parág. 2°, da LC 214/2025).

Verificar Tabela de códigos da NFe ABI, publicada no Portal
da NFe ABI
ORIENTAÇÃO:  Caso  tenha  sido  celebrado  anteriormente
algum  acordo  ou  ajuste,  deverá  ser  selecionado  o  tipo  de
instrumento  correspondente  ao
respectivo  contrato
preliminar,  promessa,  compromisso,  carta  de  reserva  com
princípio  de  pagamento  ou  documento  representativo  de
compromisso.

Página 16 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

ID
H18
H19

Campo
xOutrosInst
dtInstrumento

Descrição
Descrição dos Outros Instrumentos
Data do Instrumento (Contrato, escritura, etc.)

Ele
E
E

Pai
H16
H16

Tipo
C
D

Ocor.
0-1
1-1

Tam.
1 - 60  Obrigatório quando o tpInstrumento for “99=Outros”

Observação

ORIENTAÇÃO  1:  Para  o  Tipo  de  Instrumento  "03=Escritura
pública",  informar  a  data  programada  da  lavratura  da
escritura no cartório ou tabelionato de notas.
ORIENTAÇÃO  2:  Caso  tenha  sido  celebrado  anteriormente
algum  acordo  ou  ajuste,  deverá  ser  inserida  a  data  do
respectivo  contrato  preliminar,  promessa,  compromisso,
carta  de
reserva  com  princípio  de  pagamento  ou
documento representativo de compromisso.

H20

H21

gIncorpLote

indIncorpLote

informações  relativas  ao  empreendimento

Grupo  de
imobiliário
Indicador de Venda Inicial de Lote ou Imóvel na Planta

G

E

H01

H20

N

N

0-99

0-1

G

1

H22

CNPJempImob

CNPJ do Empreendimento Imobiliário

H23

indIntermedCorret

Indicador de Intermediação ou Corretagem

E

E

H20

C

0-1

14

H01

N

1-1

1

H24

gIntermedCorret

Grupo de informações de Intermediação ou Corretagem

G

H01

0-99

H25
H26

H27

H28
H29

nCorretagem
CNPJ

Número sequencial da corretagem
CNPJ do corretor ou corretora

CPF

CPF do corretor ou corretora

xNome
vCorretagem

Razão Social ou Nome do corretor ou corretora
Valor da Corretagem

A
CE

CE

E
E

H24
H24

H24

H24
H24

N
C

C

C
N

1-1
1-1

1-1

1-1
1-1

1-2
14

11

2 - 60
13v2

intermediação  ou  corretagem  na  operação

Q. Trata-se de venda inicial de lote ou imóvel na planta (art.
262 da LC 214/2025)?
0=Não
1=Sim
Abrir somente para a modalidade 1. Alienação em Geral
Se  indIncorpLote  =  1,  o  documento  fiscal  será  emitido
sem destaque de IBS e CBS.
Se  indIncorpLote  =  0,  o  documento  fiscal  será  emitido
normalmente com destaque de IBS e CBS.
Informar  o CNPJ específico  do  empreendimento  imobiliário
(incorporação ou parcelmento do solo)
Abrir somente se indIncorpLote  =  1.
Q.  Houve
imobiliária?
0=Não
1=Sim
Abrir somente para a modalidade 1. Alienação em Geral
Abrir somente se:
     a  modalidade  da  operação  for  “1.  Alienação  em  Geral”
(tag: modOper=1); e
    Indicador de Intermediação ou Corretagem for igual a 1
(tag: indIntermedCorret = 1)
Número sequencial da corretagem
Informar  o  CNPJ  do  corretor  ou  corretora,  preenchendo  os
zeros não significativos.
Informar o CPF do do corretor ou corretora, preenchendo os
zeros não significativos.
Razão Social ou Nome do corretor ou corretora
Valor da Corretagem

Grupo U. Informações da Tributação

Página 17 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

ID
U01
U02

U03

Campo
gInfTrib
gCompraGov

Descrição

Informações da Tributação
Grupo de Compra Governamental

Ele
G
G

Pai
A01
U01

Tipo

Ocor.
1-1
0-1

Tam.

Observação

tpEnteGov

Tipo de ente governamental

E

U02

N

1-1

1

U04

pRedutor

Percentual de redução de aliquota em compra governamental

U05

tpOperGov

Tipo de operação com o ente governamental

U06

U07

IBSCBS

CST

Informações  do  Imposto  de  Bens  e  Serviços  -  IBS  e  da
Contribuição de Bens e Serviços - CBS
Código de Situação Tributária do IBS/CBS do Declarante

E

E

G

E

U02

U02

U01

N

N

1-1

3v2-4

1-1

1

U06

N

1-1

1-1

3

U08

cClassTrib

Código de Classificação Tributária do IBS/ CBS do Declarante

E

U06

N

1-1

6

U09

gIBSCBS

Grupo de Informações do IBS e da CBS

G

U06

0-1

U10

vOperacIndiv

Valor da Operação individual do Declarante

U11

vTornaIndiv

Valor da Torna Individual do Declarante

E

E

U09

U09

N

N

1-1

13v2

1-1

13v2

1=União
2=Estados
3=Distrito Federal
4=Município
Conforme o art. 472/370 da LC 214/2025.

1=Fornecimento;
2=Recebimento  do  pagamento,  conforme  fato  gerador  do
IBS/CBS definido no Art. 10 § 2º

Utilizar tabela CST do IBS/CBS
ORIENTAÇÃO 1: Se indContrib = 0 e indDeclarante=1 utilizar
CST de imunidade ou não incidência (CST 410).
ORIENTAÇÃO 2: Se indContrib = 1 e indDeclarante=1 utilizar
CST  correspondente  à  operação  (Ex.:  CST  200  -  Alíquota
reduzida).
Utilizar tabela cClassTrib
ORIENTAÇÃO 1: Se indContrib = 0 e indDeclarante=1 utilizar
incidência  (cClassTrib
cClassTrib  de
410XXX).
ORIENTAÇÃO 2: Se indContrib = 1 e indDeclarante=1 utilizar
cClassTrib correspondente à operação.
  (Ex.: cClassTrib 200046 - Operações com bens imóveis).

imunidade  ou  não

A  obrigatoriedade  ou  vedação  do  preenchimento  deste
grupo  está  condicionada  ao  indicador  "ind_gIBSCBS"  da
tabela de CST do IBS e da CBS.
Se  CST  do  IBS/CBS  (tag:  IBSCBS/CST)  possui  indicador  que
não permite a informação do IBS/CBS (ind_gIBSCBS=0):
  Não abrir o Grupo de Informações do IBS e da CBS
Se  CST  do  IBS/CBS  (tag:  IBSCBS/CST)  possui  indicador  que
obriga a informação do IBS/CBS (ind_gIBSCBS=1):
  Abrir o Grupo de Informações do IBS e da CBS

Verificar Tabela de códigos  da NFe ABI, publicada no Portal
da NFe ABI.
Verificar Tabela de códigos  da NFe ABI, publicada no Portal
da NFe ABI.
Abrir  somente  para  permuta  com  torna  envolvendo
exclusivamente bens imóveis (tag: indTorna=1).

ID

Campo

Descrição

Ele

Pai

Tipo

Ocor.

Tam.

Observação

Página 18 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

U12

vRedAjusteIndiv

Valor do Redutor de Ajuste Individual do Declarante

E

U09

N

1-1

13v2

U13

vRedSocialIndiv

Valor do Redutor Social Individual do Declarante

E

U09

N

1-1

13v2

U14

U15
U16
U17
U18
U19
U20
U21
U22
U23
U24
U25
U26
U27
U28
U29
U30
U31
U32
U33

U34
U35

U36
U37

U38
U39

vBC

Valor da Base de Cálculo do Declarante

gIBSUF
pIBSUF
gRed
pRedAliq
pAliqEfet
vIBSUF
gIBSMun
pIBSMun
gRed
pRedAliq
pAliqEfet
vIBSMun
gCBS
pCBS
gRed
pRedAliq
pAliqEfet
vCBS

Grupo de informações do IBS da UF
Aliquota do IBS de competência das UF
Grupo de informações da redução da alíquota
Percentual de redução de alíquota
Alíquota Efetiva que será aplicada a Base de Cálculo
Valor do IBS de competência das UF
Grupo de informações do IBS no Município
Aliquota do IBS Municipal
Grupo de informações da redução da alíquota
Percentual de redução de alíquota
Aliquota Efetiva que será aplicada a Base de Calculo
Valor do IBS de competência dos Municípios
Grupo de Tributação da CBS
Aliquota da CBS
Grupo de informações da redução da alíquota
Percentual de redução de alíquota
Aliquota Efetiva que será aplicada a Base de Calculo
Valor da CBS

gTribCompraGov  Grupo de informações da composição do valor do IBS e da

pAliqIBSUF
vTribIBSUF

CBS em compras governamentais
Aliquota do IBS de competência das UF
Valor do tributo do IBS da UF calculado

pAliqIBSMun
vTribIBSMun

Aliquota do IBS de competência dos Municípios
Valor do tributo do IBS do Município calculado

pAliqCBS
vTribCBS

Aliquota da CBS
Valor do tributo da CBS calculado

E

G
E
G
E
E
E
G
E
G
E
E
E
G
E
G
E
E
E
G

E
E

E
E

E
E

U09

U09
U15
U15
U17
U17
U15
U09
U21
U21
U23
U23
U21
U09
U27
U27
U29
U29
U25
U09

U33
U33

U33
U33

U33
U33

N

N

N
N
N

N

N
N
N

N

N
N
N

N
N

N
N

N
N

1-1

1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1

1-1
1-1

1-1
1-1

1-1
1-1

13v2

3v4

3v4
3v4
13v2

3v4

3v4
3v4
13v2

3v4

3v4
3v4
13v2

3v4
13v2

3v4
13v2

3v4
13v2

Verificar Tabela de códigos  da NFe ABI, publicada no Portal
da NFe ABI.
Não abrir para a modalidade “03.Cessão ou Transmissão de
direitos” (tag: modOper=3).
Não abrir na permuta com torna envolvendo exclusivamente
bens imóveis (tag: indTorna=1).
Verificar Tabela de códigos  da NFe ABI, publicada no Portal
da NFe ABI.
Não abrir para a modalidade “03. Cessão ou Transmissão de
direitos” (tag: modOper=3).
Não abrir na permuta com torna envolvendo exclusivamente
bens imóveis (tag: indTorna=1).
Verificar Tabela de códigos  da NFe ABI, publicada no Portal
da NFe ABI.

vIBSUF = pAliqEfet * vBC

vIBSMun = pAliqEfet * vBC

vCBS = pAliqEfet * vBC

Valor que seria devido a UF, sem aplicação do Art. 473. da LC
214/2025

Valor  que  seria  devido  ao  município,  sem  aplicação  do  Art.
473. da LC 214/2025

Valor que seria devido a CBS, sem aplicação do Art. 473. da
LC 214/2025

ID

Campo

Descrição

Ele

Pai

Tipo

Ocor.

Tam.

Observação

Página 19 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

U40

gEstornoCred

Estorno de Crédito

G

U06

vIBSEstCred

Valor do IBS a ser estornado

vCBSEstCred

Valor da CBS a ser estornado

E

E

U40

U40

N

N

A  obrigatoriedade  ou  vedação  do  preenchimento  deste
grupo  está  condicionada  ao  indicador  “ind_gEstornoCred”
da tabela de cClassTrib do IBS e da CBS.

0-1

1-1

1-1

13v2

13v2

Grupo Y. Detalhes de Pagamento

Campo
pag
detPag

Descrição

Grupo de pagamento
Grupo de Detalhamento de Pagamento

Ele
G
G

Pai
A01
Y01

Tipo

Ocor.
1-1
1-99

Tam.

Observação

U41

U42

ID
Y01
Y02

Y02a
Y03

nDetPag
meioPag

Número sequencial do Detalhe de Pagamento
Meio de Pagamento

Y04

Y05

xPag

vPag

Descrição do pagamento

Valor do Pagamento

A
E

E

E

Y02
Y02

Y02

Y02

N
N

C

N

1-1
1-1

0-1

1-1

1-2
2

6-120

13v2

A  obrigatoriedade  ou  vedação  do  preenchimento  deste
grupo está condicionada ao indicador “ind_detPag_NFeABI”
da tabela de cClassTrib do IBS e da CBS.
Se  cClassTrib  do  IBS/CBS  (tag:  IBSCBS/cClassTrib)  possui
indicador  que  não  permite  a  informação  dos  Detalhes  de
Pagamento (ind_detPag_NFeABI=0):
  Não abrir o grupo detPag
Se  cClassTrib  do  IBS/CBS  (tag:  IBSCBS/cClassTrib)  possui
informação  do  Percentual  de
indicador  que  obriga  a
Aquisição (ind_detPag_NFeABI=1):
  Abrir o grupo detPag

Verificar Tabela de códigos  da NFe ABI, publicada no Portal
da NFe ABI
OBSERVAÇÃO: No caso de pagamento futuro ou postergado,
informar o meio de pagamento previsto.
Campo  obrigatório  quando  o  meio  de  pagamento  for
“13=Bens móveis” ou "99=Outros".
ORIENTAÇÕES:
1. No caso de pagamento já efetuados: inserir o valor pago;
2. No caso de pagamento parcelados com periodicidade fixa
(mensal, semestral, etc.): Inserir o valor total do montante a
ser pago em parcelas com a mesma periodicidade; (no caso,
por  exemplo,  de  parcelas  com  periodicidade  mensal,
informar o valor a ser pago em parcelas mensais);
3. No caso de FGTS: inserir valor utilizado de FGTS;
4. No  caso  de  financiamento  imobiliário:  inserir  o  valor  do
financiamento  concedido  pelo  banco  ou
instituição
financeira;
5. No caso de consórcio imobiliário: inserir o valor do crédito
efetivamente utilizado para aquisicação do imóvel.

ID

Campo

Descrição

Ele

Pai

Tipo

Ocor.

Tam.

Observação

Página 20 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

Y06

periodParcelas

Periodicidade das Parcelas

E

Y02

C

1-1

1-16

Y07

nParcelas

Número de Parcelas

E

Y02

N

0-1

3

Y08

-x-
dtPag

Sequencia XML
Data de Pagamento

G
CE

Y02

D

0-1
1-1

Y09

dtVenc

Data de Vencimento

CE

Y02

F

1-1

Grupo W. Total da NF-e ABI

Campo obrigatório para indIncorpLot = 1
ORIENTAÇÃO: Preencher com uma das seguintes opções:
 “Sem parcelamento”
 “Isolada”
 “Mensal”
 “Bimestral”
 “Trimestral”
 “Quadrimestral”
 “Semestral”
 “Anual”
ORIENTAÇÕES:
1. Preencher  somente  no  caso  de  pagamento  parcelados
com periodicidade fixa (mensal, semestral, etc.);
2. Informar  o  número  de  parcelas  correspondentes  à  série
pagamentos com a mesma periodicidade (mensal, semestral,
etc.);
3. No  caso,  por  exemplo,  de  parcelas  com  periodicidade
mensal, informar número de parcelas mensais.

ORIENTAÇÕES:
1. No  caso  de  pagamento  já  efetuado:  inserir  a  data  do
respectivo pagamento;
2. No caso de  utilização  do  FGTS: inserir a data do contrato
ou escritura de aquisição do bem imóvel;
3. No caso de financiamento ou consórcio: inserir a data do
imóvel.
contrato  ou  escritura  de  aquisição  do  bem
OBSERVAÇÃO:  Para  pagamentos  futuros  ou  parcelados,
utilizar o campo Data de Vencimento.
ORIENTAÇÕES:
1. No caso de pagamento futuro ou postergado: inserir a data
do vencimento da obrigação;
2. No  caso  de  parcelas  com  periodicidade  fixada  (mensal,
semestral,  etc.):  inserir  a  data  do  vencimento  da  primeira
parcela da série de pagamentos com a mesma periodicidade;
(no  caso,  por  exemplo,  de  parcelas  com  periodicidade
mensal, informar a data do  vencimento da  primeira parcela
mensal).
OBSERVAÇÃO:  Para  pagamentos
já  efetuados,  FGTS,
financiamento  ou  consórcio,  utilizar  o  campo  Data  de
Pagamento.

Página 21 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

ID
W01
W02
W03
W04
W05
W06
W07
W08
W09
W10
W11

ID
Z01

Z02
Z03
Z04

Z05
Z06
Z07

Z08
Z09

Campo
total
tribTot
vTotalOperacao
vOperacIndiv
vRedAjusteIndiv
vRedSocialIndiv
vBC
vIBSUF
vIBSMun
vCBS
vNF

Descrição

Grupo Totais da NF-e ABI
Grupo Totais Referentes aos Tributos
Valor Total da Operação
Valor da Operação Individual
Valor do Redutor de Ajuste Individual
Valor do Redutor Social Individual
Valor da Base de Cálculo
Valor do IBS de Competência das UF
Valor do IBS de Competência dos Municípios
Valor da CBS
Valor Total da NF-e ABI

Ele
G
G
E
E
E
E
E
E
E
E
E

Pai
A01
W01
W01
W01
W02
W02
W02
W02
W02
W02
W01

Tipo

N
N
N
N
N
N
N
N
N

Ocor.
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1

Tam.

13v2
13v2
13v2
13v2
13v2
13v2
13v2
13v2
13v2

Grupo Z. Informações Adicionais da NF-e ABI

Campo
infAdic

Grupo de Informações Adicionais

Descrição

Ele
G

Pai
A01

Tipo

Ocor.
0-1

Tam.

Observação

vNF = vOperacIndiv + vIBSUF + vIBSMun + vCBS

Observação

Os campos de informações adicionais não podem ser
utilizados para preenchimento de informações de campos
que possuem estrutura específica.

infAdFisco
infCpl
obsCont

Informações Adicionais de Interesse do Fisco
Informações Complementares de interesse do Contribuinte
Grupo Campo de uso livre do contribuinte

xCampo
xTexto
obsFisco

xCampo
xTexto

Identificação do campo
Conteúdo do campo
Grupo Campo de uso livre do Fisco

Identificação do campo
Conteúdo do campo

E
E
G

A
E
G

A
E

Z01
Z01
Z01

Z04
Z04
Z01

Z07
Z07

C
C

C
C

C
C

0-1
0-1
0-10

1-1
1-1
0-10

1-1
1-1

1 - 5000
1 - 5000

Campo de uso livre do contribuinte, Informar o nome do
campo no atributo xCampo e o conteúdo do campo no
xTexto
Identificação do campo
Conteúdo do campo
Campo de uso livre do Fisco. Informar o nome do campo no
atributo xCampo e o conteúdo do campo no xTexto
Identificação do campo
Conteúdo do campo

1 - 20
1 - 60

1 - 20
1 - 60

Grupo ZD. Informações do Responsável Técnico

ID
ZD01

ZD02

Campo
infRespTec

CNPJ

Informações do Responsável Técnico pela emissão do DFe

Descrição

Ele
G

Pai
A01

Tipo

Ocor.
1-1

Tam.

CNPJ da pessoa jurídica responsável pelo sistema utilizado na
emissão do documento fiscal eletrônico

E

ZD01

C

1-1

14

Observação

Grupo para informações do responsável técnico pelo
sistema de emissão do DFe
Informar o CNPJ da pessoa jurídica responsável pelo sistema
utilizado na emissão do documento fiscal eletrônico.

ID

Campo

Descrição

Ele

Pai

Tipo

Ocor.

Tam.

Observação

Página 22 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

ZD04

xContato

Nome da pessoa a ser contatada

ZD05

ZD06

email

E-mail da pessoa jurídica a ser contatada

fone

Telefone da pessoa jurídica/física a ser contatada

E

E

E

ZD01

C

1-1

2-60

ZD01

ZD01

C

N

1-1

1-1

6-60

6-14

Informar o nome da pessoa a ser contatada na empresa
desenvolvedora do sistema utilizado na emissão do
documento fiscal eletrônico.
Informar o e-mail da pessoa a ser contatada na empresa
desenvolvedora do sistema.
Informar o telefone da pessoa a ser contatada na empresa
desenvolvedora do sistema. Preencher com o Código DDD +
número do telefone.

Grupo ZX. Informações Suplementares da NFe ABI

ID
ZX01

ZX02

ZX03

Campo
infNFeSupl

Informações suplementares da Nota Fiscal

Descrição

qrCode

Texto com o QR-Code impresso no DANFE-ABI.

urlChave

Texto  com  a  URL  de  consulta  por  chave  de  acesso  a  ser
impressa no DANFE-ABI

Ele
G

E

E

Pai
Raiz

ZX01

ZX01

Tipo
-

Ocor.
1-1

Tam.

C

C

1-1

1-1

100-600

21-85

Observação

Informações suplementares da Nota Fiscal, não afetando a
assinatura digital.

Informar a URL da “Consulta por chave de acesso da NF-e
ABI”.

Grupo ZZ. Informações da Assinatura Digital

ID
ZZ01

Campo
Signature

Descrição

Assinatura XML da NF-e ABI Segundo o Padrão XML Digital
Signature

Ele
G

Pai
A01

Tipo

Ocor.
1-1

Tam.

Observação

Página 23 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

3. Eventos

Evento: Pagamento de Parcela

ID
ZZA01

Campo
EventoPagParcela

Evento de Pagamento de Parcela

Descrição

Ele
G

Pai

Tipo

Ocor.
1-1

Tam.

ZZA02

vOriginalParcela

Valor Original da Parcela

ZZA03

vAcrescimos

Valor dos acréscimos

ZZA04
ZZA05
ZZA06
ZZA07

vTotalPagoParcela  Valor total pago da parcela

dataPagParcela
gIBSCBS
vOperacIndiv

Data de pagamento da parcela
Grupo de Informações do IBS e da CBS
Valor da Operação individual do Declarante

ZZA08

vTornaIndiv

Valor da Torna Individual do Declarante

E

E

E
E
G
E

E

ZZA01

ZZA01

ZZA01
ZZA01
ZZA01
ZZA06

ZZA06

N

N

N
D

N

N

1-1

0-1

1-1
1-1
0-1
1-1

1-1

13v2

13v2

13v2

13v2

13v2

ZZA09

vRedAjusteIndiv

Valor do Redutor de Ajuste Individual do Declarante

E

ZZA06

N

1-1

13v2

ZZA10

vRedSocialIndiv

Valor do Redutor Social Individual do Declarante

E

ZZA06

N

1-1

13v2

ZZA11

ZZA12
ZZA13
ZZA14
ZZA15
ZZA16
ZZA17
ZZA18
ZZA19
ZZA20

vBC

Valor da Base de Cálculo do Declarante

gIBSUF
pIBSUF
gRed
pRedAliq
pAliqEfet
vIBSUF
gIBSMun
pIBSMun
gRed

Grupo de informações do IBS da UF
Aliquota do IBS de competência das UF
Grupo de informações da redução da alíquota
Percentual de redução de alíquota
Alíquota Efetiva que será aplicada a Base de Cálculo
Valor do IBS de competência das UF
Grupo de informações do IBS no Município
Aliquota do IBS Municipal
Grupo de informações da redução da alíquota

E

G
E
G
E
E
E
G
E
G

ZZA06

N

ZZA06
ZZA12
ZZA12
ZZA14
ZZA14
ZZA12
ZZA06
ZZA18
ZZA18

N

N
N
N

N

1-1

1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1

13v2

3v4

3v4
3v4
13v2

3v4

Observação
Somente será aceito para NF-e ABI se
     modalidade  da  operação  igual  a  “1.  Alienação  em  Geral”
(tag: modOper=01); e
    indIncorpLote=1
ORIENTAÇÃO: Preencher o valor original do sinal, entrada ou
parcela, sem considerar multa, atualização e juros.
ORIENTAÇÃO: Preencher com multa, atualização juros e
demais encargos incidentes sobre a parcela.
vTotalPagoParcela = vOriginalParcela + vAcrescimos

Verificar Tabela de códigos  da NFe ABI, publicada no Portal
da NFe ABI.
Verificar Tabela de códigos  da NFe ABI, publicada no Portal
da NFe ABI.
Abrir  somente  para  permuta  com  torna  envolvendo
exclusivamente bens imóveis (tag: indTorna=1).
Verificar Tabela de códigos  da NFe ABI, publicada no Portal
da NFe ABI.
Não  abrir  para  a  modalidade  3.Cessão  ou  Transmissão  de
direitos (tag: modOper=3).
Não abrir na permuta com torna envolvendo exclusivamente
bens imóveis (tag: indTorna=1).
Verificar Tabela de códigos  da NFe ABI, publicada no Portal
da NFe ABI.
Não  abrir  para  a  modalidade  3.Cessão  ou  Transmissão  de
direitos tag: (modOper=3).
Não abrir na permuta com torna envolvendo exclusivamente
bens imóveis (tag: indTorna=1).
Verificar Tabela de códigos  da NFe ABI, publicada no Portal
da NFe ABI.

vIBSUF = pAliqEfet * vBC

Página 24 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

ID
ZZA21
ZZA22
ZZA23
ZZA24
ZZA25
ZZA26
ZZA27
ZZA28
ZZA29
ZZA30

ZZA31
ZZA32

ZZA33
ZZA34

ZZA35
ZZA36

Campo
pRedAliq
pAliqEfet
vIBSMun
gCBS
pCBS
gRed
pRedAliq
pAliqEfet
vCBS

Descrição

Percentual de redução de alíquota
Aliquota Efetiva que será aplicada a Base de Calculo
Valor do IBS de competência dos Municípios
Grupo de Tributação da CBS
Aliquota da CBS
Grupo de informações da redução da alíquota
Percentual de redução de alíquota
Aliquota Efetiva que será aplicada a Base de Calculo
Valor da CBS

gTribCompraGov  Grupo de informações da composição do valor do IBS e da

pAliqIBSUF
vTribIBSUF

CBS em compras governamentais
Aliquota do IBS de competência das UF
Valor do tributo do IBS da UF calculado

pAliqIBSMun
vTribIBSMun

Aliquota do IBS de competência dos Municípios
Valor do tributo do IBS do Município calculado

pAliqCBS
vTribCBS

Aliquota da CBS
Valor do tributo da CBS calculado

Ele
E
E
E
G
E
G
E
E
E
G

E
E

E
E

E
E

Pai
ZZA20
ZZA20
ZZA18
ZZA06
ZZA24
ZZA24
ZZA26
ZZA26
ZZA24
ZZA06

ZZA30
ZZA30

ZZA30
ZZA30

ZZA30
ZZA30

Tipo
N
N
N

N

N
N
N

N
N

N
N

N
N

Ocor.
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1
1-1

1-1
1-1

1-1
1-1

1-1
1-1

Tam.
3v4
3v4
13v2

3v4

3v4
3v4
13v2

3v4
13v2

3v4
13v2

3v4
13v2

Observação

vIBSMun = pAliqEfet * vBC

vCBS = pAliqEfet * vBC

Valor que seria devido a UF, sem aplicação do Art. 473. da LC
214/2025

Valor que seria devido ao município, sem aplicação do Art.
473. da LC 214/2025

Valor que seria devido a CBS, sem aplicação do Art. 473. da LC
214/2025

Página 25 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

4. Orientações Gerais

Abreviações utilizadas nas colunas de cabeçalho do leiaute

ID
Y01

Campo
tag

Descrição do campo

Descrição

Ele
G

Pai
A01

Tipo

Ocor.
0-1

Tam.

Observação

a) coluna # : identificador da linha da tabela;
b) coluna ID : identificação do campo;
c)  coluna campo: identificador do nome do campo, como a nomenclatura dos nomes dos campos foi padronizada. Um nome de campo é utilizado para  identificar
campos diferentes, como por exemplo, a CNPJ, que pode ser do emitente ou do destinatário. A diferenciação dos campos é realizada considerando as tags de grupo.

d) coluna Ele:

A - indica que o campo é um atributo do Elemento anterior;
E - indica que o campo é um Elemento;
CE – indica que o campo é um Elemento que deriva de uma Escolha

(Choice);

G – indica que o campo é um Elemento de Grupo;
CG - indica que o campo é um Elemento de Grupo que deriva de uma

Escolha (Choice);

ID – indica que o campo é um ID da XML 1.0;
RC – indica que o campo é uma key constraint (Restrição de Chave) para

garantir a unicidade e presença do valor;

e) Coluna Pai: indica qual é o elemento pai;
f) Coluna Tipo:

Página 26 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

N – campo numérico;
C – campo alfanumérico;
D – campo data;
TC – campo tipo complexo

g) Coluna Ocorrência: x-y, onde x indica a ocorrência mínima e y a ocorrência máxima;
h) Coluna tamanho: x-y(vz), onde x indica o tamanho mínimo e y o tamanho máximo; v, quando presente, indica a possibilidade de valores decimais (vírgula) e z indica
a  quantidade  máxima  de  casas  decimais  do  campo;  a  existência  de  um  único  valor  indica  que  o  campo  tem  tamanho  fixo,  devendo-se  informar  a  quantidade  de
caracteres exigidos, preenchendo-se os zeros não significativos; tamanhos separados por vírgula indicam que o campo deve ter um dos tamanhos fixos da lista.

Regras de preenchimento dos campos da NFe ABI

  Campos que representam códigos (CNPJ, CPF, CEP, CST) devem ser informados com o tamanho fixo previsto, sem formatação e com o preenchimento

dos zeros não significativos;

  Campos  numéricos  que  representam  valores  e  quantidades  são  de  tamanho  variável,  respeitando  o  tamanho  máximo  previsto  para  o  campo  e  a
quantidade de casas decimais. O preenchimento de zeros não significativos causa erro de validação do Schema XML. Os campos numéricos devem ser
informados sem o separador de milhar, com uso do ponto decimal para indicar a parte fracionária se existente respeitando-se a quantidade de dígitos
prevista no leiaute;

  O uso de caracteres acentuados e símbolos especiais para o preenchimento dos campos alfanuméricos devem ser evitados. Os espa ços informados no

início e no final do campo alfanumérico também devem ser evitados;

  As datas devem ser informadas no formato “AAAA-MM-DD”;
  A forma e a obrigatoriedade de preenchimento dos campos da NFe ABI estão previstas na legislação aplicável para a operação que se pretende realizar;
  Inexistindo conteúdo (valor zero ou vazio) para um campo não obrigatório, a TAG deste campo não deverá ser informada no arquivo da NF-e;

Preenchimento da URL do QR Code

Versão
QRCode
1.00

Orientações de Preenchimento da URL do QR Code (id ZX02: qrCode)

Informar a URL da “Consulta da NF-e ABI via QR-Code” no site da SEFAZ, compreendendo:

•  Endereço do site da UF, incluindo o protocolo de comunicação (“http://” ou “https://”);
•  Caractere separador “?”;
•  Parâmetros do QR-Code, concatenados usando o “|” como separador.

Nota 1: Respeitar o uso de caracteres maiúsculos / minúsculos.

Página 27 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

5. Regras de Validação dos Webservices

Regras de Validação Gerais

Grupo A: Validação do Certificado de Transmissão (protocolo TLS)

As  validações  de  A01, A02,  A03,  A04  e  A05  são  realizadas  pelo  protocolo  TLS  e  não  precisam ser  implementadas.  A  validação  A06 também  pode  ser
realizada  pelo  protocolo  TLS,  mas  pode  falhar  se  existirem  outros  certificados  digitais  de  Autoridade  Certificadora  Raiz  que  não  sejam  “ICP-Brasil”  no
repositório de certificados digitais do servidor de Web Service da SEFAZ.

#
A0
1

A0
2
A0
3

A0
4

A0
5
A0
6
A0
7

Regra de Validação

Certificado de Transmissor Inválido:
- Certificado de Transmissor inexistente na mensagem
- Versão difere "3"
- Se informado, Basic Constraint deve ser true (não pode ser Certificado de AC)
- KeyUsage não define "Autenticação Cliente"
Validade do Certificado (data início e data fim)

Verifica a Cadeia de Certificação:
- Certificado da AC emissora não cadastrado na SEFAZ
- Certificado de AC revogado
- Certificado não assinado pela AC emissora do Certificado
LCR do Certificado de Transmissor
- Falta o endereço da LCR (CRL DistributionPoint)
- LCR indisponível
- LCR inválida
Certificado do Transmissor revogado

Msg  Efeito
280

Rej.  Rejeição: Certificado Transmissor inválido

Descrição Erro

281

Rej.  Rejeição: Certificado Transmissor Data Validade

283

Rej.  Rejeição: Certificado Transmissor - erro Cadeia de Certificação

286

Rej.  Rejeição: Certificado Transmissor erro no acesso a LCR

284

Rej.  Rejeição: Certificado Transmissor revogado

Certificado Raiz difere da "ICP-Brasil"

285

Rej.  Rejeição: Certificado Transmissor difere ICP-Brasil

Falta a extensão de CNPJ no Certificado (OtherName - OID=2.16.76.1.3.3) ou a extensão de CPF
(OtherName - OID=2.16.76.1.3.1)

282

Rej.  Rejeição: Certificado Transmissor sem CNPJ/CPF

Grupo B: Validação Inicial da Mensagem no Web Service

Regra de Validação

#
B01  Tamanho do XML de Dados superior a 500 KB
B02  XML de Dados Malformado
B03  Verifica se o Servidor de Processamento está Paralisado Momentaneamente
B04  Verifica se o Servidor de Processamento está Paralisado sem Previsão
B05  Verifica se UF informada é atendida pelo Webservice

Msg
214
243
108
109
410

Efeito
Rej.
Rej.
Rej.
Rej.
Rej.

Descrição Erro

Rejeição: Tamanho da mensagem excedeu o limite estabelecido
Rejeição: XML Mal Formado
Rejeição: Serviço Paralisado Momentaneamente (curto prazo)
Rejeição: Serviço Paralisado sem Previsão
Rejeição: UF informada no campo cUF não é atendida pelo WebService

Página 28 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

A mensagem será descartada se o tamanho exceder o limite previsto (500 KB) a aplicação do contribuinte não poderá permitir a geração de mensagem
com tamanho superior a 500 KB. Caso isto ocorra, a conexão poderá ser interrompida sem mensagem de erro se o controle do tamanho da mensagem for
implementado por configurações do ambiente de rede da SEFAZ (ex.: controle no firewall). No caso do controle de tamanho ser implementado por aplicativo
teremos a devolução da mensagem de erro 214.

As unidades federadas que mantêm o Web Service disponível, mesmo quando o serviço estiver paralisado, deverão implementar as verificações 108 e 109.
Estas validações poderão ser dispensadas se o Web Service não ficar disponível quando o serviço estiver paralisado.

Grupo D: Validação da Área de Dados

D. Validação de forma da área de dados

A validação de forma da área de dados da mensagem é realizada com a aplicação da seguinte regra:

#
D01
D01
D01a

D01a
D01b

D01b

D01d

D01e

D02
D03

Regra de Validação

Verifica Schema XML da Área de Dados (WS Autorização)
Verifica Schema XML da Área de Dados
Em caso de Falha de Schema,  verificar  se existe  a tag  raiz esperada para  o lote (WS
Autorização)
Em caso de Falha de Schema, verificar se existe a tag raiz esperada para mensagem
Em caso de Falha de Schema, verificar se existe o atributo versao para a tag raiz da
mensagem
Em caso de Falha de Schema, verificar se existe o atributo versao para a tag raiz da
mensagem
Verifica  a existência de  qualquer namespace  diverso  do namespace  padrão  da NF-e
(http://www.portalfiscal.inf.br/nfe)
Verifica a existência de caracteres de edição no início ou fim da mensagem ou entre
as tags
Verifica o uso de prefixo no namespace
XML utiliza codificação diferente de UTF-8

Msg
225
215
565

516
568

Efeito
Rej.
Rej.
Rej.

Descrição Erro

Rejeição: Falha no Schema XML do lote de NFe
Rejeição: Falha no schema XML
Rejeição: Falha no schema XML – inexiste a tag raiz esperada para o lote de NF-e

Rej.
Rej.

Rejeição: Falha no schema XML – inexiste a tag raiz esperada para a mensagem
Rejeição: Falha no schema XML – inexiste atributo versao na tag raiz do lote de NF-e

517

Rej.

Rejeição: Falha no schema XML – inexiste atributo versao na tag raiz da mensagem

587

Rej.

Rejeição: Usar somente o namespace padrão da NF-e

588

Rej.

404
402

Rej.
Rej.

Rejeição:  Não  é  permitida  a  presença  de  caracteres  de  edição  no  início/fim  da
mensagem ou entre as tags da mensagem
Rejeição: Uso de prefixo de namespace não permitido
Rejeição: XML da área de dados com codificação diferente de UTF-8

As validações D01a, D01b são de aplicação facultativa e podem ser aplicadas sucessivamente quando ocorrer falha na validação D01.

Página 29 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

DB. Extração dos eventos do lote e validação do Schema XML do evento

A aplicação deve extrair os eventos do lote para tratar individualmente os eventos, a princípio não existe necessidade de que  todos os eventos sejam do
mesmo tipo.

A escolha do Schema XML aplicável para o evento é realizado com base no tipo do evento tpEvento combinado com a verEvento, as sim, a aplicação deve
manter um controle dos tpEvento válidos e as verEvento em vigência e o respectivo Schema XML.

#
D04
D05
D06

Regra de Validação

Verifica se o tpEvento é válido
Verifica se o verEvento é válido
Verifica se o detEvento atende o respectivo schema XML

Msg
491
492
493

Efeito

Descrição Erro

Rej.  Rejeição: O tpEvento informado inválido
Rej.  Rejeição: O verEvento informado inválido
Rej.  Rejeição: Evento não atende o Schema XML específico

Grupo E: Validação do Certificado Digital de Assinatura

#
E01

E02
E03

E04

E05

E06
E07

Regra de Validação

Certificado de Assinatura inválido:
- Certificado  de  Assinatura  inexistente  na  mensagem  (*validado  também  pelo

Schema)

- Versão difere "3"
- Se informado o Basic Constraint deve ser true (não pode ser Certificado de AC)
- KeyUsage não define "Assinatura Digital" e “Não Recusa”
Validade do Certificado (data início e data fim)
Falta a extensão de CNPJ no Certificado (OtherName OID=2.16.76.1.3.3) ou a extensão
de CPF (OtherName OID=2.16.76.1.3.1) (NT 2018.001)
Verifica Cadeia de Certificação:
- Certificado da AC emissora não cadastrado na SEFAZ
- Certificado de AC revogado
- Certificado não assinado pela AC emissora do Certificado
LCR do Certificado de Assinatura:
- Falta o endereço da LCR (CRLDistributionPoint)
- Erro no acesso a LCR ou LCR inexistente
Certificado de Assinatura revogado
Certificado Raiz difere da “ICP-Brasil”

Msg
290

Efeito
Rej.

Rejeição: Certificado Assinatura inválido

Descrição Erro

291
292

Rej.
Rej.

Rejeição: Certificado Assinatura Data Validade
Rejeição: Certificado de Assinatura sem CNPJ/CPF

293

Rej.

Rejeição: Certificado Assinatura - erro Cadeia de Certificação

296

Rej.

Rejeição: Certificado Assinatura erro no acesso a LCR

294
295

Rej.
Rej.

Rejeição: Certificado Assinatura revogado
Rejeição: Certificado Assinatura difere ICP-Brasil

Página 30 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

Grupo F: Validação da Assinatura Digital

#
F01

F02
F03

F03A

Regra de Validação

Assinatura difere do padrão do Sistema:
- Não  assinado  o  atributo  "Id"  (falta  "Reference  URI"  na  assinatura)  (*validado

também pelo Schema)

- Faltam os "Transform Algorithm" previstos na assinatura ("C14N" e "Enveloped")
Estas validações são implementadas pelo Schema XML da Signature
Valor da assinatura (SignatureValue) difere do valor calculado
Se Certificado de Assinatura com CNPJ e CNPJ do Certificado difere do CNPJ da SEFAZ
para a UF:
- CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital (NT 2018.001)
Se Certificado de Assinatura com CPF:
- CPF do Emitente difere do CPF do Certificado Digital (NT 2018.001)

Msg
298

Efeito
Rej.

Rejeição: Assinatura difere do padrão do Sistema

Descrição Erro

297
213

Rej.
Rej.

Rejeição: Assinatura difere do calculado
Rejeição: CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital

227

Rej.

Rejeição: CPF do Emitente difere do CPF do Certificado Digital

Regras de Negócio específicas

Autorização de NF-e ABI

A. Dados da NF-e ABI

Campo-Seq
A03-10

Campo Id inválido:
  Chave de Acesso do campo Id difere da concatenação dos campos correspondentes.

Regra de Validação

B. Identificação da NF-e ABI

Campo-Seq
B02-10
B03-10

B09-10

B09-20

Regra de Validação
Código da UF do Emitente difere da UF do Web Service
Verificar formação do cNF:
cNF não pode ser igual a 00000000, 11111111, 22222222, 33333333, 44444444,
55555555, 66666666, 77777777, 88888888, 99999999, 12345678, 23456789,
34567890, 45678901, 56789012, 67890123, 78901234, 89012345, 90123456,
01234567.
cNF não pode ser igual a nNF (id: B08).
Data-Hora de Emissão posterior ao horário de recepção na SEFAZ.
Observação:  Aceita  uma  tolerância  de  até  5  minutos,  devido  ao  sincronismo  de
horário do servidor da Empresa e o servidor da SEFAZ.
NF-e com Tipo de Emissão = 1-Normal:

Data de Emissão ocorrida há mais de 30 dias

Descrição Erro

Msg  Efeito
502

Rej.  Rejeição: Erro na Chave  de Acesso - Campo Id  não  corresponde  à concatenação dos

campos correspondentes

Descrição Erro

Msg  Efeito
226
897

Rej.  Rejeição: Código da UF do Emitente diverge da UF autorizadora
Rej.  Rejeição: Código numérico em formato inválido.

703

Rej.  Rejeição: Data-Hora de Emissão posterior ao horário de recebimento

228

Rej.  Rejeição: Data de Emissão muito atrasada

Página 31 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

Campo-Seq
B09-30
B23-10

B24-10
B25-30

B25-40

Regra de Validação

Data de Emissão anterior ao início da autorização de NF-e ABI.
Chave de Acesso obtida pela concatenação dos campos correspondentes com dígito
verificador (DV) inválido
Tipo do ambiente da NF-e ABI difere do ambiente do Web Service
Se NF-e ABI substituição (tag:finNFe=2):
 Não informado NF referenciada
Se NF-e ABI substituição (tag:finNFe=2):

 NF referenciada com mais de uma ocorrência

Msg  Efeito
315
253

Rej.  Rejeição: Data de Emissão anterior ao início da autorização de NFe ABI
Rej.  Rejeição: Digito Verificador da chave de acesso composta inválida

Descrição Erro

252
254

Rej.  Rejeição: Ambiente informado diverge do Ambiente de recebimento
Rej.  Rejeição: NF-e ABI substituição não possui NF referenciada

255

Rej.  Rejeição: NF-e ABI substituição possui mais de uma NF referenciada

B25-50

Se NF-e ABI substituição (tag:finNFe=2):

269

Rej.  Rejeição:  CNPJ/CPF  Emitente  da  NF  substituição  difere  do  CNPJ/CPF  da  NF

 CNPJ/CPF emitente da NF Referenciada difere do CNPJ/CPF emitente desta NF-e

Referenciada

B25-60

B28-10

B28-20

B28-30

B28-40

ABI
Se NF-e ABI substituição (tag:finNFe=2):
 UF da NF referenciada diferente da UF do substituição
Se emissão normal (tpEmis = 1-Normal):

 gCont (tag: B19) não deve ser informado
Se emissão em contingência off-line (tpEmis = 9):

 gCont (tag: B19) deve ser informado

Data de entrada em contingência não deve ser maior que a data de recepção da NF-e
ABI
Observação: Aceita uma tolerância de até 5 minutos, devido ao sincronismo de horário
do servidor da Empresa e o servidor da SEFAZ.
Data de entrada em contingência deve ser menor ou igual à data de emissão – 30 dias

BA. Documento Fiscal Referenciado

Campo-Seq
BA02-10

BA02-14

BA02-20

BA02-24

BA02-30

BA02-34

BA02-40

BA02-44

Regra de Validação

Se informada uma NF-e ABI referenciada (tag: refNFeABI):
   Dígito Verificador da Chave de Acesso inválido
Se informada uma NF-e ABI referenciada (tag: refNFeABI):
   Chave de Acesso referenciada com UF inválida
Se informada uma NF-e ABI referenciada (tag: refNFeABI):
   Chave de Acesso referenciada com Ano Emissão < 26 ou > que o Ano corrente
Se informada uma NF-e ABI referenciada (tag: refNFeABI):
   Chave de Acesso referenciada com Mês Emissão < 01 ou > 12
Se informada uma NF-e ABI referenciada (tag: refNFeABI):
   CPF/CNPJ zerado ou dígito inválido
Se informada uma NF-e ABI referenciada (tag: refNFeABI):
   Modelo da NF-e ABI referenciada diferente de 77
Se informada uma NF-e ABI referenciada (tag: refNFeABI):
   Chave de Acesso referenciada com Número zerado
Se informada uma NF-e ABI referenciada (tag: refNFeABI):
   Verificar duplicidade da NF-e referenciada (duplicidade da tag refNFeABI)

678

Rej.  Rejeição: NF referenciada com UF diferente da NF-e ABI substituição

556

Rej.  Rejeição: Justificativa de entrada em contingência não deve ser informada para tipo de

emissão normal

557

Rej.  Rejeição: A Justificativa de entrada em contingência deve ser informada

558

Rej.  Rejeição: Data de entrada em contingência posterior a data de recebimento

569

Rej.  Rejeição: Data de entrada em contingência muito atrasada

Msg  Efeito
547

Rej.  Rejeição: Chave de Acesso referenciada com Dígito Verificador inválido [nOcor:nnn]

Descrição Erro

522

Rej.  Rejeição: Chave de Acesso referenciada com UF inválida [nOcor:nnn]

524

Rej.  Rejeição: Chave de Acesso referenciada com Ano-Mês inválido [nOcor:nnn]

524

Rej.  Rejeição: Chave de Acesso referenciada com Ano-Mês inválido [nOcor:nnn]

552

Rej.  Rejeição: Chave de Acesso referenciada com CNPJ/CPF inválido [nOcor:nnn]

679

Rej.  Rejeição: Chave de Acesso referenciada com Modelo inválido [nOcor:nnn]

683

Rej.  Rejeição: Chave de Acesso referenciada com Número inválido [nOcor:nnn]

680

Rej.  Rejeição: Chave de Acesso referenciada em duplicidade na NF-e [nOcor:nnn]

Página 32 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

Campo-Seq
BA02-50

Regra de Validação
Se informada uma NF-e referenciada (tag: refNFeABI):
   Nota Fiscal referenciada com a mesma Chave de Acesso da Nota Fiscal atual

C. Identificação do Emitente

Msg  Efeito
316

atual [nOcor:nnn]

Descrição Erro

Rej.  Rejeição: Chave de Acesso referenciada com a mesma Chave de Acesso da Nota Fiscal

Campo-
Seq
C02-10

C02a-20

C04-10

C10-10
C10-20

C18-10

C18-20

C18-30

Regra de Validação

Msg  Efeito

Descrição Erro

Se informado CNPJ do emitente:
   CNPJ com zeros, nulo ou DV inválido
Se informado CPF do emitente:
   CPF com zeros, nulo, 111..., 222..., ..., ou DV inválido
Se tpAmb (id:B24) = 2 e informado xNome (C04)
   xNome (C04) deve ser informado com a literal “NF-E ABI EMITIDA EM AMBIENTE DE
HOMOLOGACAO - SEM VALOR FISCAL”
Código do Município do Emitente inexistente (Tabela Municípios IBGE) (NT 2015.002)
Código do Município do Emitente (2 primeiras posições) difere do Código da UF do
emitente
Se modalidade da operação diferente de “02=Arrematação, Adjudicação ou Remição”
(tag: modOper<>02):
   Proibido  informar  os Tipos  de Emitente (tag: tpEmit) “02=Comprador, Adquirente
ou Cessionário” ou  “03=Leiloeiro (em nome do arrematante)”
Se modalidade da operação igual a “02=Arrematação, Adjudicação  ou Remição” (tag:
modOper=02):
   Tipo  de  Emitente  não  pode  ser  diferente  de  “02=Comprador,  Adquirente  ou
Cessionário” ou “03=Leiloeiro (em nome do arrematante)” (tag: tpEmit<>02 ou 03)
Se  CST  do  IBS/CBS  (tag:  IBSCBS/CST)  possui  indicador  que  obriga  a  informação  do
IBS/CBS (ind_gIBSCBS=1):
  Proibido informar o Tipo de Emitente “99=Outros Emitentes” (tag: tpEmit=99)

207

Rej.  Rejeição: CNPJ do emitente inválido

401

Rej.  Rejeição: CPF do emitente inválido

800

Rej.  Rejeição: NF-e emitida  em ambiente de homologação com Razão  Social do emitente
diferente  de  NF-E  ABI  EMITIDA  EM  AMBIENTE  DE  HOMOLOGACAO  -  SEM  VALOR
FISCAL

272
273

Rej.  Rejeição: Código Município do Emitente inexistente
Rej.  Rejeição: Código Município do Emitente: difere da UF do emitente

274

Rej.  Rejeição:  Tipo  de  Emitente  inválido  para  a  modalidade  da  operação  [tpEmit=XX,

modOper=XX]

274

Rej.  Rejeição:  Tipo  de  Emitente  inválido  para  a  modalidade  da  operação  [tpEmit=XX,

modOper=XX]

275

Rej.  Rejeição: Proibido informar o Tipo de Emitente “99=Outros Emitentes” para o CST

informado.

E. Identificação dos Transmitentes da Operação da NF-e ABI

Campo-Seq

Regra de Validação

E01a-10  Número  sequencial  dos  Transmitentes  (atributo:  nTransmit)  deverá  ser  sequencial  e

E02-10

E02-20

E02-30

incremental
Se modOper for igual a “2.Arrematação, Adjudicação ou Remição” (tag: modOper=02)
  Não pode ser informado o Indicador de Declarante (tag: indDeclarante)

Se modOper for diferente de “2.Arrematação, Adjudicação ou Remição” (tag: modOper<>02)
  Obrigatório informar o Indicador de Declarante (tag: indDeclarante)

Se modOper for diferente de “2.Arrematação, Adjudicação ou Remição” (tag: modOper<>02)
  Não pode haver mais de um Indicador de Declarante (tag: indDeclarante) que seja igual à 1

Msg  Efeito
801

Descrição Erro

Rej.  Rejeição:  Número  sequencial  dos  Transmitentes  não  está  sequencial  e

incremental [nTransmit: NNN]

802

Rej.  Rejeição:  Proibido  informar  o  Indicador  de  Declarante  nesta  modalidade  da

operação.

803

Rej.  Rejeição: Obrigatório  informar  o  Indicador  de  Declarante  nesta  modalidade  da

operação.

804

Rej.  Rejeição: Não pode ser informado mais de um Indicador de Declarante que seja

igual à 1

Página 33 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

Campo-Seq
E02-40

Regra de Validação
Se modOper for diferente de “2.Arrematação, Adjudicação ou Remição” (tag: modOper<>02)
  Obrigatório haver um Indicador de Declarante (tag: indDeclarante) que seja igual à 1

E03-10

E04-10

E05-10

E11-10

E11-20

E15-04

Se informado CNPJ (transmit/CNPJ):
   CNPJ com zeros ou dígito de controle inválido
Se informado (transmit/CPF):
   CPF com zeros, nulo, 111..., 222..., ... ou dígito de controle inválido
Se tpAmb (id:B24) = 2 e informado xNome (E04)
  xNome (E05)  deverá  ser informado com a literal  “NF-E  ABI  EMITIDA EM  AMBIENTE  DE
HOMOLOGACAO - SEM VALOR FISCAL”
Se endereço Transmitente não é no Exterior (enderTransmit/UF <> “EX"):
  Código Município do Transmitente da Operação inexistente (Tabela Municípios IBGE)

Código  do  Município  do  Transmitente  (2  primeiras  posições)  difere  do  Código  da  UF  do
Transmitente da Operação
Se informado Código País do Transmitente da Operação (tag: enderTransmit/cPais):
  Código do País inexistente (Tabela do BACEN)
Observação:  O  Código  do  País  informado  na  NF-e  ABI  pode  conter  ou  não  zeros  não
significativos.

E15-30

Se endereço do Transmitente da Operação é no Exterior (enderTransmit/UF = “EX"):
 Código do país “cPais” (id: E15) não pode ser 1058 (Brasil)

Msg  Efeito
805

Rej.  Rejeição: Obrigatório haver um Indicador de Declarante que seja igual à 1.

Descrição Erro

208

Rej.  Rejeição: CNPJ do Transmitente da Operação inválido

237

Rej.  Rejeição: CPF do Transmitente da Operação inválido

598

Rej.  Rejeição: NF-e ABI emitida em ambiente de homologação com Razão Social do
Transmitente  da  Operação  diferente  de  NF-E  ABI  EMITIDA  EM  AMBIENTE  DE
HOMOLOGACAO - SEM VALOR FISCAL

276

Rej.  Rejeição: Código Município do Transmitente da Operação inexistente

277

Rej.  Rejeição: Código do Município do Transmitente difere da UF do Transmitente da

Operação

377

Rej.  Rejeição: Código de País do Transmitente da Operação inexistente

926

Rej.  Rejeição: UF de endereço do Transmitente da Operação igual a EX e país igual a

Brasil.

F. Identificação dos Adquirentes da Operação da NF-e ABI

Campo-Seq
F01a-10

Número sequencial dos Adquirentes (atributo: nAdquir) deve ser sequencial e incremental

Regra de Validação

F02-10

F02-20

F02-30

F02-40

F03-10

F04-10

F05-20

Se modOper for diferente de “2.Arrematação, Adjudicação ou Remição” (tag:
modOper<>02)
  Proibido informar o Indicador de Declarante (tag: indDeclarante)
Se modOper for igual a “2.Arrematação, Adjudicação ou Remição” (tag: modOper=02)
  Obrigatório informar o Indicador de Declarante (tag: indDeclarante)

Se modOper for igual a “2.Arrematação, Adjudicação ou Remição” (tag: modOper=02)
  Proibido mais de um Indicador de Declarante (tag: indDeclarante) que seja igual à 1
Se modOper for igual a “2.Arrematação, Adjudicação ou Remição” (tag: modOper=02)
  Obrigatório haver um Indicador de Declarante (tag: indDeclarante) que seja igual à 1

Se informado CNPJ (adquirente /CNPJ):
   CNPJ com zeros ou dígito de controle inválido
Se informado (adquirente /CPF):
   CPF com zeros, nulo, 111..., 222..., ... ou dígito de controle inválido
Se tag:tpAmb (id:B24) = 2 e informado xNome (F04)
  xNome  (F05)  deve  ser  informado  com a  literal  “NF-E  ABI  EMITIDA EM  AMBIENTE  DE
HOMOLOGACAO - SEM VALOR FISCAL”

Msg  Efeito
806

Descrição Erro

Rej.  Rejeição:  Número  sequencial  de  outros  adquirenteS  não  está  sequencial  e

incremental [nAdquir: NNN]

807

Rej.  Rejeição:  Proibido  informar  o  Indicador  de  Declarante  nesta  modalidade  da

operação.

808

Rej.  Rejeição: Obrigatório informar o Indicador de Declarante  nesta modalidade da

operação.

809

Rej.  Rejeição: Não pode ser informado mais de um Indicador de.Declarante que seja

igual à 1

810

Rej.  Rejeição: Obrigatório haver um Indicador de Declarante que seja igual à 1.

811

Rej.  Rejeição: CNPJ do Adquirente da Operação inválido

812

Rej.  Rejeição: CPF do Adquirente da Operação inválido

813

Rej.  Rejeição:  NF-e  emitida  em  ambiente  de  homologação  com  Razão  Social  do
Adquirente  da  Operação  diferente  de  NF-E  ABI  EMITIDA  EM  AMBIENTE  DE
HOMOLOGACAO - SEM VALOR FISCAL

Página 34 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

Campo-Seq
F05-20

F11-10

F11-20

F15-04

F15-30

F18-10

F18-20

Regra de Validação

Se tag:tpAmb (id:B24) = 2 e informado xNome (F04)
  xNome  (F05)  deve  ser  informado  com a  literal  “NF-E  ABI  EMITIDA EM  AMBIENTE  DE
HOMOLOGACAO - SEM VALOR FISCAL”
Se endereço do Adquirente da Operação não é no Exterior (enderTransmit/UF <> “EX"):
  Código Município do Adquirente da Operação inexistente (Tabela Municípios IBGE)
Código do Município do Adquirente da Operação (2 primeiras posições) difere do Código da
UF do Adquirente da Operação.
Se informado Código País do Adquirente da Operação (tag: enderAdquirente/cPais):
   Código do País inexistente (Tabela do BACEN)
Observação: O Código do País informado na NF-e pode conter ou não zeros não significativos.
Se endereço do Adquirente da Operação é no Exterior (enderAdquirente/UF = “EX"):
 Código do país “cPais” (id: f15) não pode ser 1058 (Brasil)
Se o indicador “ind_pAquisic_NFeABI”  da  tabela de cClassTrib  do  IBS  e  da  CBS for  igual a  0
(tag: ind_pAquisic_NFeABI=0):
  Proibido informar o Percentual de Aquisição (tag: pAquisicao)

Se o indicador “ind_pAquisic_NFeABI”  da  tabela de cClassTrib  do  IBS  e  da  CBS for  igual a  1
(tag: ind_pAquisic_NFeABI=1):
  Obrigatório informar o Percentual de Aquisição (tag: pAquisicao)

F22-10

F21-10

F21-20

IBS  (tag:

informar  o  Valor  do  crédito

individual  correspondente  ao

Se o indicador de contribuinte for 0 (tag: indContrib=0):
   Proibido
vCredIBSIndiv)
Se  o  indicador  de  contribuinte  for  1  ou  2  (tag:  indContrib=1  ou  2)  e  a  modalidade  da
operação  (modOper)  diferente  de  “02=Arrematação,  Adjudicação  ou  Remição”  (tag:
modOper<>02)”, vCredIBSIndiv do Adquirente deve ser  o cálculo:
  vCredIBSIndiv = (vIBSUF + vIBSMun) * pAquisicao / pTransImovel     (*1)
Se o indicador de contribuinte for 0 (tag: indContrib=0):
   Proibido
vCredCBSIndiv)
Se  o  indicador  de  contribuinte  for  1  ou  2  (tag:  indContrib=1  ou  2)  e  a  modalidade  da
operação  (modOper)  diferente  de  “02=Arrematação,  Adjudicação  ou  Remição”  (tag:
modOper<>02)”, vCredIBSIndiv do Adquirente deve ser  o cálculo:
  vCredCBSIndiv = vCBS * pAquisicao / pTransImovel     (*1)
(*1) Aceitar resultado com tolerância de 0,01 para mais ou para menos

individual  correspondente  à  CBS  (tag:

informar  o  Valor  do  crédito

F22-20

Msg  Efeito
813

Descrição Erro

Rej.  Rejeição:  NF-e  emitida  em  ambiente  de  homologação  com  Razão  Social  do
Adquirente  da  Operação  diferente  de  NF-E  ABI  EMITIDA  EM  AMBIENTE  DE
HOMOLOGACAO - SEM VALOR FISCAL

814

Rej.  Rejeição: Código Município do Adquirente da Operação inexistente

815

Rej.  Rejeição: Código do Município do Adquirente da Operação é diferente da UF do

Adquirente da Operação

816

Rej.  Rejeição: Código de País do Adquirente da Operação inexistente

817

Rej.  Rejeição: UF  de  endereço do  Adquirente  da Operação  igual  a EX  e  país  igual  a

818

Rej.

Brasil.
  Rejeição: É proibido informar o Percentual de Aquisição.

819

Rej.

  Rejeição: É obrigatório informar o Percentual de Aquisição.

820

Rej.

  Rejeição: Proibido informar o Valor do crédito individual correspondente ao IBS

821

Rej.

 Rejeição: Valor do crédito correspondente ao IBS difere do calculado

822

Rej.

  Rejeição: Proibido informar o Valor do crédito individual correspondente à CBS

823

Rej.

  Rejeição: Valor do crédito correspondente ao CBS difere do calculado

G. Identificação do Imóvel

Campo-Seq
G06-10

G08-10

Regra de Validação

Se informado indIPTU igual a 1 (tag: indIPTU=1):
   Obrigatório informar o número do IPTU (tag: nIptu)
Se informado indIncra igual a 1 (tag: indIncra=1):
   Obrigatório informar o número do Incra (tag: nIncra)

Msg  Efeito
824

Rej.  Rejeição: Obrigatório informar o número do IPTU

Descrição Erro

825

Rej.  Rejeição: Obrigatório informar o número do INCRA

Página 35 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

Campo-Seq
G09-10

G10-10

G11-10

G11-20

G11-30

G24-10

G24-20

G25-10

G25-20

Regra de Validação
Código da espécie de imóvel (tag: espImovel) inválido
Observação: Verificar tabela de código da NF-e ABI
Se código da espécie de imóvel igual “99=Outras” (tag: espImovel=99):
   Obrigatório informar o campo Descrição das Outras Imóvel (tag: xOutrosEspecies)
Código do enquadramento do imóvel (tag: enquadramento) inválido
Observação: Verificar tabela de código da NF-e ABI
Se o indicador “ind_Enquadr_NFeABI” da tabela de cClassTrib do IBS e da CBS for igual a
0 (tag: ind_Enquadr_NFeABI=0):
  Proibido informar Enquadramento do imóvel (tag: enquadramento)
Se o indicador “ind_Enquadr_NFeABI” da tabela de cClassTrib do IBS e da CBS for igual a
1 (tag: ind_Enquadr_NFeABI=1):
  Obrigatório informar Enquadramento do imóvel (tag: enquadramento)
Se o indicador “ind_Area_NFeABI” da tabela de cClassTrib do IBS e da CBS igual a 0 (tag:
ind_Area_NFeABI=0):
  Proibido informar a Área Total (tag: areaTotal)
Se o indicador “ind_Area_NFeABI” da tabela de cClassTrib do IBS e da CBS igual a 1 (tag:
ind_Area_NFeABI=1):
  Obrigatório informar a Área Total (tag: areaTotal)
Se  o  indicador  “ind_uArea_NFeABI”  da  tabela  de  cClassTrib  do  IBS  e  da  CBS  igual  a  0
(tag: ind_uArea_NFeABI=0):
  Proibido informar a Unidade de Medida da Área Total (tag: uAreaTotal)
Se  o  indicador  “ind_uArea_NFeABI”  da  tabela  de  cClassTrib  do  IBS  e  da  CBS  igual  a  1
(tag: ind_uArea_NFeABI=1):
  Obrigatório informar a Unidade de Medida da Área Total (tag: uAreaTotal)

Msg  Efeito
826

Rej.  Rejeição: Código da espécie do imóvel inválido

Descrição Erro

827

Rej.  Rejeição: Obrigatório informar o campo Descrição das Outras Espécies

828

Rej.  Rejeição: Código do enquadramento do imóvel inválido

829

Rej.

 Rejeição: É proibido informar o Enquadramento do imóvel.

830

Rej.

 Rejeição: É obrigatório informar o Enquadramento do imóvel.

831

Rej.

 Rejeição: É proibido informar a Área Total do Imóvel.

832

Rej.

 Rejeição: É obrigatório informar a Área Total do Imóvel.

833

Rej.

 Rejeição: É proibido informar a Unidade de Medida da Área Total.

834

Rej.

 Rejeição: É obrigatório informar a Unidade de Medida da Área Total.

GA. Autorização para obter o XML

Campo-Seq
GA01a-10  Número  sequencial  da  autorização  para  obter  XML  (atributo:  nAutXML)  deve  ser

Regra de Validação

Msg
835

Efeito
Rej.

sequencial e incremental

GA02-10

Se informada autorização download XML com CNPJ:
    CNPJ com zeros ou dígito inválido

GA02-20

GA03-10

GA03-20

Se informada autorização download XML com CNPJ:
    Informado CNPJ do destinatário
Se informada autorização download do XML com CPF:
    CPF com zeros, nulo, 111..., 222..., ..., ou dígito de controle inválido
Se informada autorização download do XML com CPF:
    Informado CPF do destinatário

Descrição Erro
Rejeição: Número sequencial da  autorização para obter XML  não está sequencial e
incremental [nAutXML: NNN]

323

Rej.

Rejeição: CNPJ autorizado para download inválido

324

Rej.

Rejeição: CNPJ do destinatário já autorizado para download

325

Rej.

Rejeição: CPF autorizado para download inválido

326

Rej.

Rejeição: CPF do destinatário já autorizado para download

Página 36 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

H. Informações da Operação

Campo-
Seq
H02-10

H02-20

H04-10

H04-20

H05-10

H05-20

H08-10

H08-20

H08-30

H08-40

H14-10

Regra de Validação

Msg  Efeito

Descrição Erro

Se  a  modalidade  da  operação  for  diferente  de  “02=Arrematação,  Adjudicação  ou
Remição” (tag: modOper<>2):
  Somatório das Proporções Transmitidas Individuais (tag:  transmit/pTransIndiv)  deverá
corresponder à Proporção Transmitida do Imóvel (tag: pTransImovel)
Se a modalidade da operação for igual a “02=Arrematação, Adjudicação ou Remição”
(tag: modOper=2) e o cClassTrib do IBS/CBS do Declarante possuir indicador que obriga
a informação do Percentual de Aquisição (ind_pAquisic_NFeABI=1):
   Somatório  dos  respectivos  Percentuais  de  Aquisição  (tag:  adquirente/pAquisicao)
deverá corresponder à Proporção Transmitida do Imóvel (tag: pTransImovel)
Se a natureza da operação for diferente de 13 ou 14 (natOper<>13 ou 14):
  Proibido informar o Indicador de Torna (tag: indTorna)

Se a natureza da operação for igual a 13 ou 14 (natOper=13 ou 14):
  Obrigatório informar o Indicador de Torna (tag: indTorna)
Se  o  Indicador  de  torna  (tag:  indTorna)  for  igual  à  0  (indTorna=0)  ou  não  tiver  sido
informado:
  Proibido informar o Grupo Torna (tag: gTorna)
Se o Indicador de torna for igual à 1 (tag: indTorna=1):
  Obrigatório informar o Grupo Torna (tag: gTorna)

Se:
  modalidade da operação diferente de “03=Cessão ou Transmissão de direitos” (tag:
modOper<>03); e
  Indicador de Torna diferente de 1 (tag: indTorna<>1); e
  indicador “ind_RedAjuste_NFeABI” da tabela de cClassTrib do IBS e da CBS igual a 1
(tag: ind_RedAjuste_NFeABI=1)
Então:
  Obrigatório informar o grupo de Redutor de Ajuste Imovel (tag: gRedAjusteImovel)
Se:
  modalidade da operação diferente de “03=Cessão ou Transmissão de direitos” (tag:
modOper<>03); e
  Indicador de Torna diferente de 1 (tag: indTorna<>1); e
  indicador “ind_RedAjuste_NFeABI” da tabela de cClassTrib do IBS e da CBS igual a 0
(tag: ind_RedAjuste_NFeABI=0)
Então:
  Proibido informar o grupo de Redutor de Ajuste Imovel (tag: gRedAjusteImovel)
Se modalidade da operação for igual a “03=Cessão ou Transmissão de direitos” (tag:
modOper=03)
 Proibido informar o grupo de Redutor de Ajuste Imovel (tag: gRedAjusteImovel)
Se o Indicador de Torna for igual a 1  (tag: indTorna=1):
 Proibido informar o grupo de Redutor de Ajuste Imovel (tag: gRedAjusteImovel)
Valor do Redutor de Ajuste Imóvel (tag: vRedAjusteImovel) deve ser o cálculo:
vRedAjusteImovel = vInicial + vITBI + vLaudemio + vOutorgaOnerosa + vDemaisContrap

836

Rej.  Rejeição:  A  soma  das  Proporções  Transmitidas  Individuais  de  cada  vendedor  ou

transmitente deverá corresponder à Proporção Transmitida do Imóvel.

837

Rej.  Rejeição:  A  soma  dos  percentuais  de  aquisicão  deverá  corresponder  à  Proporção

Transmitida do Imóvel.

838

Rej.  Rejeição: Proibido informar o Indicador de Torna

839

Rej.  Rejeição: Obrigatório informar o Indicador de Torna

840

Rej.  Rejeição: Proibido informar o Grupo Torna

841

Rej.  Rejeição: Obrigatório informar o Grupo Torna

842

Rej.  Rejeição: Obrigatório informar o grupo de Redutor de Ajuste Imóvel

843

Rej.  Rejeição: Proibido informar o grupo de Redutor de Ajuste Imóvel

844

Rej.  Rejeição: Proibido informar o grupo de Redutor de Ajuste Imóvel

844

Rej.  Rejeição: Proibido informar o grupo de Redutor de Ajuste Imóvel

845

Rej.  Rejeição: Valor do Redutor de Ajuste Imóvel difere do calculado

Página 37 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

Campo-
Seq
H15-10

H17-10

H18-10

H20-10

H20-20

H24-10

Regra de Validação

Msg  Efeito

Descrição Erro

Se:
   modalidade  da  operação  for  igual  a  “03=Cessão  ou  Transmissão de  direitos”  (tag:
modOper=03); ou
  Indicador de Torna igual a 1 (tag: indTorna=1); ou
  indicador “ind_RedSocial_NFeABI” da tabela de cClassTrib do IBS e da CBS igual a 0
(tag: ind_RedSocial_NFeABI=0); ou
   Enquadramento  do  Imóvel  for  igual  a  “02=Imóvel  Residencial  Usado”  (tag:
enquadramento=02) ou “04=Não Residencial” (tag: enquadramento=04).
Então:
 Proibido informar o Indicador do Redutor Social (tag: indRedSocial)
Código do Tipo de Instrumento inválido (tag: tpInstrumento)
Observação: Verificar tabela de código da NF-e ABI
Se Tipo de Instrumento igual “99=Outros”:
 Obrigatório informar o campo Descrição dos Outros Instrumentos (tag: xOutrosInst)
Se modalidade da operação foi igual a “01=Alienação em Geral”:
  Obrigatório  informar  o  campo  Indicador  de  Venda  Incial  de  Lote  ou  Imóvel  na
Planta (tag: indIncorpLote)
Se modalidade da operação foi diferente de “01=Alienação em Geral”:
 Proibido informar o campo Indicador de Venda Incial de Lote ou Imóvel na Planta
(tag: indIncorpLote)
Se  o
Indicador  de
indIntermedCorret=1)
  Obrigatório informar o Grupo de informações de Intermediação ou Corretagem (tag:
gIntermedCorret)

Intermediação  ou  Corretagem  for

igual  a  “1=Sim”  (tag:

846

Rej.  Rejeição: Proibido informar o Indicador de Redutor Social

847

Rej.  Rejeição: Código do Tipo de Instrumento inválido

848

Rej.  Rejeição: Obrigatório informar o campo Descrição dos Outros Instrumentos

849

Rej.  Rejeição: Obrigatório informar o campo Indicador de Venda Incial de Lote ou Imóvel

na Planta

850

Rej.  Rejeição: Proibido informar o campo Indicador de Venda Incial de Lote ou Imóvel na

Planta

851

Rej.  Rejeição:  Obrigatório  informar  o  Grupo  de  informações  de  Intermediação  ou

Corretagem.

Página 38 / 45

Msg  Efeito
900

incorretamente.

Descrição Erro

Rej.  Rejeição:  Nota  de  compra  governamental  e  alíquota  dos  outros  entes  informada

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

U. Informações da Tributação

Campo-Seq
U03-10

Regra de Validação
Se  informado  tpEnteGov  (nota  de  compra  governamental),  verificar  se  alíquota  de
outros entes está preenchida durante o período de transição:

Se ano de emissão = 2027 a 2032
  Se compra da união (tag: tpEnteGov = 1):
   Alíquota do IBS da UF (tag: pIBSUF) MAIOR QUE ZERO; OU
   Alíquota do IBS do Município (tag: pIBSMun) MAIOR QUE ZERO

  Se compra estadual (tag: tpEnteGov = 2): -
   Alíquota do IBS do Município (tag: pIBSMun) MAIOR QUE ZERO

  Se compra do DF (tag: tpEnteGov = 3):
   Alíquota do IBS do Município (tag: pIBSMun) MAIOR QUE ZERO

  Se compra municipal (tag: tpEnteGov = 4):
   Alíquota do IBS da UF (tag: pIBSUF) MAIOR QUE ZERO

Se ano de emissão = 2033 ou superior
  Se compra da união (tag: tpEnteGov = 1):
   Alíquota do IBS da UF (tag: pIBSUF) MAIOR QUE ZERO; OU
   Alíquota do IBS do Município (tag: pIBSMun) MAIOR QUE ZERO

  Se compra estadual (tag: tpEnteGov = 2):
   Alíquota da CBS (tag: pCBS) MAIOR QUE ZERO; OU
   Alíquota do IBS do Município (tag: pIBSMun) MAIOR QUE ZERO

  Se compra do DF (tag: tpEnteGov = 3):
   Alíquota da CBS (tag: pCBS) MAIOR QUE ZERO; OU
   Alíquota do IBS do Município (tag: pIBSMun) MAIOR QUE ZERO

  Se compra municipal (tag: tpEnteGov = 4):
   Alíquota do IBS da UF (tag: pIBSUF) MAIOR QUE ZERO; OU
   Alíquota da CBS (tag: pCBS) MAIOR QUE ZERO

U05-10

Observação:  Conforme  Art.  473,  §  1°  e  seus  Incisos  I,  II,  III  e  IV  e  Art.  372  da  LC
214/2025.
Se informado tipo de operação com o ente governamental igual a “2=recebimento do
pagamento,  conforme  fato  gerador  do  IBS/CBS  definido  no  Art.  10  §  2º”  (tag:
tpOperGov = 2)
   o informado documento fiscal referenciado no grupo documento fiscal referenciado
(tag: NFref /refNFeABI)

U09-10

Se CST do IBS/CBS (tag: IBSCBS/CST) possui indicador que não permite a informação do
IBS/CBS (ind_gIBSCBS=0):
  Proibido informar o Grupo de Informações do IBS e da CBS

901

Rej.  Rejeição: NF-e  ABI de recebimento  de pagamento do  ente governamental  sem nota

de fornecimento referenciada

902

Rej.

 Rejeição: É proibido o preenchimento o Grupo de Informações do IBS e da CBS.

Página 39 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

Campo-Seq
U09-20

U10-10

U10-20

U11-10

U11-20

U11-30

U12-10

U12-20

U12-30

U12-40

U12-50

U13-10

Regra de Validação
Se  CST  do  IBS/CBS  (tag:  IBSCBS/CST)  possui  indicador  que  obriga  a  informação  do
IBS/CBS (ind_gIBSCBS=1):
  Obrigatório informar o Grupo de Informações do IBS e da CBS
Se modalidade da operação diferente de “02=Arrematação, Adjudicação ou Remição”
(tag: modOper<>02), vOperacIndiv do Transmitente deverá ser o cálculo:
   vOperacIndiv = vTotalOperação * pTransIndiv / pTransImovel     (*1)
Se modalidade da operação igual a “02=Arrematação, Adjudicação ou Remição” (tag:
modOper=02), vOperacIndiv do Transmitente deverá ser o cálculo:
   vOperacIndiv = vTotalOperação * pAquisicao / pTransImovel     (*1)
Se natureza da operação diferente de 13 ou 14 (tag: natOper<>13 e natOper<>14)
  Proibido informar o Valor da Torna Individual (tag: vTornaIndiv)
Se  natureza  da  operação  igual  a  13  ou  14  (tag:  natOper=13  ou  14)  e  Indicador  de
Torna igual a 0 (tag: indTorna=0):
  Proibido informar o Valor da Torna Individual (tag: vTornaIndiv)
Se  natureza  da  operação  igual  a  13  ou  14  (tag:  natOper=13  ou  14)  e  Indicador  de
Torna igual a 1 (tag: indTorna=1), vTornaIndiv do Declarante deverá ser o cálculo:
  vTornaIndiv  = vTorna * pTransIndiv /pTransImovel     (*1)
Se  modalidade  da  operação  igual  a  “01=Alienação  em  geral”  (tag:  modOper=01),
vRedAjusteIndiv do Declarante deverá ser o cálculo:
   vRedAjusteIndiv = pTransIndiv * vRedAjusteImovel     (*1)
Se modalidade da operação igual a “02=Arrematação, Adjudicação ou Remição” (tag:
modOper=02), vRedAjusteIndiv do Declarante deverá ser o cálculo:
   vRedAjusteIndiv = pAquisicao * vRedAjusteImovel     (*1)
Se  modalidade  da  operação  igual  a  “03=Cessão  ou  Transmissão  de  direitos”  (tag:
modOper=03):
    Proibido  informar  o  valor  do  Redutor  de  Ajuste  Individual  do  Declarante  (tag:
vRedAjusteImovel)
Se modalidade da operação igual a “04=Permuta” (tag: modOper=04) e natureza da
operação igual a 13 ou 14 (tag: natOper=13 ou 14):
    Proibido  informar  o  valor  do  Redutor  de  Ajuste  Individual  do  Declarante  (tag:
vRedAjusteImovel)
Se modalidade da operação igual a “04=Permuta” (tag: modOper=04) e natureza da
operação  igual  a  15  (tag:  natOper=15),  vRedAjusteIndiv do  Declarante  deverá  ser  o
cálculo:
   vRedAjusteIndiv = pTransIndiv * vRedAjusteImovel     (*1)
Se:
   modalidade da operação igual a “01=Alienação em Geral” (tag: modOper=01); e
    enquadramento igual  a  “01=Imóvel  Residencial Novo”  ou  “03=Lote  Residencial”
(tag: enquadramento=01 ou 03); e
   indRedSocial = 1
 Então, vRedSocialIndiv do Declarante deverá ser o cálculo:
 vRedSocialIndiv = MÍNIMO (
                                                      (100.000,00 atualizado pelo IPCA * pTransIndiv);

 (vOperacIndiv - vRedAjusteIndiv))                                (*1)

(*1) Aceitar resultado com tolerância de 0,01 para mais ou para menos

Msg  Efeito
Rej.
902

Rejeição: É obrigatório o preenchimento o Grupo de Informações do IBS e da CBS.

Descrição Erro

903

Rej.

Rejeição: Valor da Operação Individual do Declarante difere do calculado.

903

Rej.

Rejeição: Valor da Operação Individual do Declarante difere do calculado.

904

Rej.

Rejeição: Proibido informar o Valor da Torna Individual

904

Rej.

Rejeição: Proibido informar o Valor da Torna Individual

905

Rej.

Rejeição: Valor da Torna Individual do Declarante difere do calculado.

906

Rej.

Rejeição: Valor do Redutor de Ajuste Individual do Declarante difere do calculado

906

Rej.

Rejeição: Valor do Redutor de Ajuste Individual do Declarante difere do calculado

907

Rej.

Rejeição: Proibido informar o Valor do Redutor de Ajuste Individual do Declarante

907

Rej.

Rejeição: Proibido informar o Valor do Redutor de Ajuste Individual do Declarante

906

Rej.

Rejeição: Valor do Redutor de Ajuste Individual do Declarante difere do calculado

908

Rej.  Rejeição: Valor do Redutor Social Individual do Declarante difere do calculado

Página 40 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

Campo-Seq
U13-20

U13-30

U13-40

U14-10

U14-20

Regra de Validação

Se:
   modalidade da operação igual a “02=Arrematação, Adjudicação ou Remição” (tag:
modOper=02); e
    enquadramento igual  a  “01=Imóvel  Residencial Novo”  ou  “03=Lote  Residencial”
(tag: enquadramento=01 ou 03); e
   indRedSocial = 1
 Então, vRedSocialIndiv do Declarante deverá ser o cálculo:
 vRedSocialIndiv = MÍNIMO (
                                                      (100.000,00 atualizado pelo IPCA * pAquisicao);

 (vOperacIndiv - vRedAjusteIndiv))                                (*1)

Se:
   modalidade da operação igual a “04=Permuta” (tag: modOper=04); e
   natureza da operação igual a 15 (tag: natOper=15); e
    enquadramento igual  a  “01=Imóvel  Residencial Novo”  ou  “03=Lote  Residencial”
(tag: enquadramento=01 ou 03); e
   indRedSocial = 1
 Então, vRedSocialIndiv do Declarante deverá ser o cálculo:
 vRedSocialIndiv = MÍNIMO (
                                                      (100.000,00 atualizado pelo IPCA * pTransIndiv);

 (vOperacIndiv - vRedAjusteIndiv))                                (*1)

for

Imóvel

“02=Imóvel  Residencial  Usado”

Se:
   modalidade  da  operação  igual  a  “03=Cessão  ou  Transmissão  de  direitos”  (tag:
modOper=03); ou
  Indicador de Torna igual a 1 (tag: indTorna=1); ou
  indicador “ind_RedSocial_NFeABI” da tabela de cClassTrib do IBS e da CBS igual a 0
(tag: ind_RedSocial_NFeABI=0); ou
   Enquadramento  do
enquadramento=02) ou “04=Não Residencial” (tag: enquadramento=04).
Então:
    Proibido  informar  o  Valor  do  Redutor  Social  Individual  do  Declarante  (tag:
vRedSocialIndiv)
Se  modalidade  da  operação  igual  a  “01=Alienação  em  geral”  (tag:  modOper=01),  o
valor da Base de Cálculo do declarante deverá ser o cálculo:
   vBC = vOperacIndiv - vRedAjusteIndiv – vRedSocialIndiv     (*1)
Se:
  modalidade da operação igual a “02=Arrematação, Adjudicação ou Remição” (tag:
modOper=02); e
   valor  do  Redutor  de  Ajuste  do  Imóvel  igual  a  0  ou  não  informado  (tag:
vRedAjusteImovel=0 ou não informado)
Então, o valor da Base de Cálculo do declarante deverá ser 0 (tag: vBC = 0)     (*1)

(tag:

Msg  Efeito
908

Rej.  Rejeição: Valor do Redutor Social Individual do Declarante difere do calculado

Descrição Erro

908

Rej.  Rejeição: Valor do Redutor Social Individual do Declarante difere do calculado

909

Rej.  Rejeição: Proibido informar o Valor do Redutor Social Individual do Declarante

910

Rej.

Rejeição: Valor da Base de Cálculo do Declarante difere do calculado

910

Rej.

Rejeição: Valor da Base de Cálculo do Declarante difere do calculado

(*1) Aceitar resultado com tolerância de 0,01 para mais ou para menos

Página 41 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

Campo-Seq
U14-30

U14-40

U14-50

U14-60

Regra de Validação

(tag:

Imóvel

for  diferente  de  0

Se:
  modalidade da operação igual a “02=Arrematação, Adjudicação ou Remição” (tag:
modOper=02); e
   valor  do  Redutor  de  Ajuste  do
vRedAjusteImovel<>0)
Então, o valor da Base de Cálculo do Declarante deverá ser o cálculo:
  vBC = vOperacIndiv - vRedAjusteIndiv - vRedSocialIndiv     (*1)
Se  modalidade  da  operação  igual  a  “03=Cessão  ou  Transmissão  de  direitos”  (tag:
modOper=03), o valor da Base de Cálculo do Declarante deverá ser o cálculo:
  vBC = vOperacIndiv     (*1)
Se:
  modalidade da operação igual a “04=Permuta” (tag: modOper=04); e
  natureza da operação igual a 13 ou 14 (tag: natOper=13 ou 14); e
  indicador de Torna igual a 1 (tag: indTorna=1)
Então, o valor da Base de Cálculo do Declarante deverá ser o cálculo:
  vBC = vTornaIndiv     (*1)
Se:
  modalidade da operação igual a “04=Permuta” (tag: modOper=04); e
  natureza da operação igual a 15 (tag: natOper=15)
Então, o valor da Base de Cálculo do Declarante deverá ser o cálculo:
  vBC = vOperacIndiv - vRedAjusteIndiv - vRedSocialIndiv     (*1)

Msg  Efeito
Rej.
910

Rejeição: Valor da Base de Cálculo do Declarante difere do calculado

Descrição Erro

910

Rej.

Rejeição: Valor da Base de Cálculo do Declarante difere do calculado

910

Rej.

Rejeição: Valor da Base de Cálculo do Declarante difere do calculado

910

Rej.

Rejeição: Valor da Base de Cálculo do Declarante difere do calculado

(*1) Aceitar resultado com tolerância de 0,01 para mais ou para menos

Y. Detalhes de Pagamento

Campo-Seq
Y02-10

Y02-20

Y02a-10

Y04-10

Y05-10

Regra de Validação
Se o indicador “ind_detPag_NFeABI” da tabela de cClassTrib do IBS e da CBS for igual a 0
(tag: ind_detPag_NFeABI=0):
  Proibido informar o grupo Detalhes de Pagamento (tag: detPag)
Se o indicador “ind_Enquadr_NFeABI” da tabela de cClassTrib do IBS e da CBS igual a 1
(tag: ind_ detPag_NFeABI=1):
  Obrigatório informar Detalhes de Pagamento (tag: detPag)
Número sequencial do detalhe de pagamento (atributo: nDetPag) deve ser sequencial
e incremental
Se
(meioPag=13 ou 99)
 Obrigatório informar o campo Descrição de Pagamento (tag: xPag)
Somatório do valor dos pagamentos (tag:vPag) menor que o total da nota (tag: vNF)

informado  meio  de  pagamento  igual  a  “13=Bens móveis”  ou  "99=Outros"

Msg  Efeito
Rej.
852

Rejeição: É proibido informar o grupo Detalhes de Pagamento.

Descrição Erro

853

Rej.

Rejeição: É obrigatório informar o grupo Detalhes de Pagamento.

854

Rej.  Rejeição:  Número  sequencial  do  detalhe  de  pagamento  não  está  sequencial  e

incremental [nDetPag: NNN]

436

Rej.  Rejeição: Obrigatório informar o campo descrição de pagamento [nDetPag: NNN].

855

Rej.  Rejeição: Total dos pagamentos menor que o total da nota

Página 42 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

W. Total da NF-e

Campo-Seq
W07-10

W08-10

W16-10

W16-20

Regra de Validação

Total da Base de Cálculo (id: W07) difere do Valor da Base de Cálculo Individual (id:
F27).
Total do IBS da UF (id:W08) difere do somatório do valor do IBS da UF Individual (id:
F32).
Total do vNF (id:W16) difere do somatório de:
(+) vOperacIndiv (id: W04)
(+) vIBSUF (id: W08)
(+) vIBSMun (id: W09)
(+) vCBS (id: W10)
Valor total da NF-e ABI superior ao valor limite estabelecido pela SEFAZ

ZD. Informações do Responsável Técnico

Campo-Seq
ZD02-10

Informado CNPJ do responsável técnico inválido
    CNPJ com zeros, nulo ou DV inválido

Regra de Validação

ZX. Informações Suplementares da NF-e ABI

Msg  Efeito
531

Rej.  Rejeição: Total da Base de Cálculo difere da BC individual

Descrição Erro

532

Rej.  Rejeição: Total do IBS da UF difere IBS da UF individual

610

Rej.  Rejeição: Total da NF difere do somatório dos Valores compõe o valor Total da NF.

628

Rej.  Rejeição: Total da NF superior ao valor limite estabelecido pela SEFAZ [Limite]

Msg  Efeito
973

Rej.  Rejeição: CNPJ do responsável técnico inválido

Descrição Erro

Campo-
Seq
ZX02-20

Regra de Validação

Msg  Efeito

Descrição Erro

Endereço do site da UF para a Consulta via QR-Code difere do previsto.
Nota:  O  uso  diferenciado  de  maiúsculas  ou  minúsculas  não  deve  ser  considerado  na
validação.

395

Rej.  Rejeição: Endereço do site da UF da Consulta via QR-Code diverge do previsto

ZX02-228  Parâmetro  Chave  de  Acesso  no  QR-Code  diverge  da  Chave  de  Acesso  da  Nota  Fiscal
Observação: NF-e ABI ONLINE ou OFFLINE é 1º parâmetro da URL do QR Code

397

Rej.  Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal [Param: xxx)].

ZX02-236  Parâmetro Versão informada no QR-Code diverge do previsto (“1”)

398

Rej.  Rejeição: Parâmetro Versão informada no QR-Code diverge do previsto (“1”)

Observação: Para NF-e ABI ONLINE ou OFFLINE é o 2º parâmetro da URL do QR Code

ZX02-244  Parâmetro Tipo de Ambiente do QR-Code diverge do Tipo de Ambiente da Nota Fiscal

397

Rej.  Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal: [Param: xxx)]

(tag: tpAmb)
Observação: Para NF-e ABI ONLINE ou OFFLINE é o 3º parâmetro da URL do QR Code

ZX02-268  NF-e ABI de contingência (tpEmis=9):

397

Rej.  Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal: [Param: xxx)]

Parâmetro Dia da Data de Emissão no QR-Code diverge do Dia Data de Emissão da Nota
Fiscal (tag: dhEmi)
Observação 1: Para NF-e ABI ONLINE esse parâmetro não existe.
Observação 2: Para NF-e ABI OFFLINE é o 4º parâmetro da URL do QR Code ) (NT
2016.002)

Página 43 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

Campo-
Seq

Regra de Validação

Msg  Efeito

Descrição Erro

ZX02-276  NF-e ABI de contingência (tpEmis=9):

397

Rej.  Rejeição: Parâmetro do QR-Code divergente da Nota Fiscal: [Param: xxx)]

Parâmetro  Valor  da  Nota  Fiscal  no  QR-Code  diverge  do  Valor  Total  da  Nota  Fiscal
(tag:vNF)
Observação 1: Para NF-e ABI ONLINE esse parâmetro não existe.
Observação 2: Para a NF-e ABI OFFLINE é o 5º parâmetro da URL do QR

ZX02-328  NF-e ABI de contingência (tpEmis=9):

396

Rej.  Rejeição: Parâmetro do QR-Code inexistente: [Param: xxx)

Parâmetro  Identificação  do  Adquirente  do  QR-Code  diverge  da  Identificação  do
Adquirente da NFC-e.
Obs. 1: Para NF-e ABI ONLINE esse parâmetro não existe.
Obs. 2: Para NF-e ABI OFFLINE, considerar 6º e 7º parâmetros da URL do QR Code

ZX02-330  NF-e  ABI  não  é  de  contingência (tpEmis<>9),  o  parâmetro  “assinatura”  não  deve  ser

400

Rej.  Rejeição: Parâmetro assinatura não deve ser informado no qrCode

informado no qrCode.

ZX02-334  NF-e ABI é de contingência (tpEmis=9), o parâmetro “assinatura” deve ser informado no

856

Rej.  Rejeição: Parâmetro assinatura deve ser informado no qrCode

qrCode.

ZX02-338  NF-e ABI de contingência (tpEmis=9): Valor da assinatura difere do valor calculado.

857

Rej.  Rejeição: Valor da assinatura do qrCode difere do valor calculado

ZZA. Evento de Pagamento de parcela

Campo-Seq
ZZA01-10  A Modalidade da  Operação  da NF-e ABI é diferente de “01=Alienação em Geral” (tag:

Regra de Validação

Msg  Efeito
858

Rej.  Rejeição: O evento de pagamento de parcela só pode ser registrado para a NF-e ABI

Descrição Erro

modOper<>01)

com modalidade 01=Alienação em Geral

ZZA01-20  O Indicador de Venda Inicial de Lote ou Imóvel na Planta da NF-e ABI for igual a 0 (tag:

859

Rej.  Rejeição: O evento de pagamento de parcela só pode ser registrado para a NF-e ABI

ZZA07-10

indIncorpLote=0)
Se  a  Modalidade  da  Operação  da  NF-e  ABI  for  igual  a  “01=Alienação  em  Geral”
(modOper=01), vOperacIndiv do Declarante deverá ser o cálculo:
 vOperacIndiv = vOperacIndiv (da NF-e ABI) * vPagoTotalParcela / vTotalOperacao

(*1)
ZZA08-10  O Valor da Torna Individual (tag: vTornaIndiv) não deve ser sido informado no Evento

ZZA09-10

ZZA10-10

ZZA11-10

de Pagamento de Parcela.
Se  a  Modalidade  da  Operação  da  NF-e  ABI  for  igual  a  “01=Alienação  em  Geral”
(modOper=01), vRedAjusteIndiv do Declarante deverá ser o cálculo:
  vRedAjusteIndiv = vRedAjusteIndiv (da NF-e ABI) * vOriginalParcela / vTotalOperacao
(*1)
Se  a  Modalidade  da  Operação  da  NF-e  ABI  for  igual  a  “01=Alienação  em  Geral”
(modOper=01), vRedSocialIndiv do Declarante deverá ser o cálculo:
  vRedSocialIndiv = vRedSocialIndiv (da NF-e ABI) * vOriginalParcela / vTotalOperacao

(*1)
Se  a  Modalidade  da  Operação  da  NF-e  ABI  for  igual  a  “01=Alienação  em  Geral”
(modOper=01), vRedAjusteIndiv do Declarante deverá ser o cálculo:
  vBC = vOperacIndiv - vRedAjusteIndiv – vRedSocialIndiv     (*1)

(*1) Aceitar resultado com tolerância de 0,01 para mais ou para menos

com indIncorpLote=1

903

Rej.  Rejeição: Valor da Operação Individual do Declarante difere do calculado

904

Rej.  Rejeição: Proibido informar o Valor da Torna Individual

906

Rej.  Rejeição: Valor do Redutor de Ajuste Individual do Declarante difere do calculado

908

Rej.  Rejeição: Valor do Redutor Social Individual do Declarante difere do calculado

910

Rej.  Rejeição: Valor da Base de Cálculo do Declarante difere do calculado

Página 44 / 45

1

Nota Fiscal Eletrônica de Alienação de Bens Imóveis
NF-e ABI – Anexo I, Leiaute e Regras de Validação

1. Banco de Dados: Emitente

Campo-Seq
1C17-34

1C17-40

Regra de Validação

Se informada CNPJ do Emitente:
   Emitente não autorizado para emissão de NF-e ABI
Se informada IE do Emitente:
   Emitente em situação irregular perante o Fisco

2. Banco de Dados: NF-e

Campo-Seq
2B08-10

2B08-20

2B08-30

Regra de Validação

Acesso BD NFE (Chave: Modelo, UF, CNPJ/CPF Emitente, Série, Número):
  NF-e já cadastrada, com diferença na Chave de Acesso (Código Numérico ou outras
posições da Chave de Acesso).
Acesso BD NFE (Chave: Modelo, UF, CNPJ/CPF Emitente, Série, Número):
 NF-e já cadastrada e não Cancelada
Acesso BD NFE (Chave: Modelo, UF, CNPJ/CPF Emitente, Série, Número):
   NF-e já cadastrada e está Cancelada

3A. Banco de Dados: NF-e Referenciada

Campo-Seq
3BA02-10  Para cada NF-e referenciada (tag:refNFe):

Regra de Validação

   Acessar BD NFE com Chave de Acesso referenciada
   NF-e referenciada inexistente

3BA02-20  Para cada NF-e referenciada (tag:refNFe):

   Acessar BD NFE com Chave de Acesso referenciada
    NF-e substituição (finNFe=2) referencia uma outra NF-e substituição (finNFe=2)

Msg  Efeito
203

Rej.  Rejeição: Emissor não habilitado para emissão da NF-e ABI

Descrição Erro

301

Rej.  Rejeição: Irregularidade fiscal do emitente

Descrição Erro

Msg  Efeito
539

Rej.  Rejeição: Duplicidade de NF-e ABI com diferença na Chave de Acesso [chNFe:

99999999999999999999999999999999999999999999]

204

Rej.  Rejeição: Duplicidade de NF-e ABI [chNFe:

99999999999999999999999999999999999999999999]

218

Rej.  Rejeição: NF-e ABI já está cancelada na base de dados da SEFAZ [chNFe:

99999999999999999999999999999999999999999999]

Msg  Efeito
267

Rej.  Rejeição: Chave de Acesso referenciada inexistente [nRef: xxx]

Descrição Erro

268

Rej.  Rejeição: NF substituição referencia uma outra NF-e substituição [nRef: xxx]

3BA02-30  Para cada NF-e referenciada (tag:refNFe):

686

Rej.  Rejeição: NF substituição referencia uma NF-e cancelada [nRef: xxx]

   Acessar BD NFE com Chave de Acesso referenciada
   NF-e substituição (finNFe=2) referencia uma NF-e cancelada

7. Banco de Dados: Cadastro da SEFAZ

Campo-Seq  Regra de Validação

7C10-10
7E10-10

Código do Município do Emitente diverge do cadastrado na UF
Código do Município do Destinatário diverge do cadastrado na UF

Msg  Efeito  Descrição Erro
480
482

Rej.  Rejeição: Código Município do Emitente diverge do cadastrado na UF
Rej.  Rejeição: Código do Município do Destinatário diverge do cadastrado na UF

Página 45 / 45

