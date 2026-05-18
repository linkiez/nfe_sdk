BP 2018.001 - Verso 1.0  |    Maio de 2018

CONTROLE DE VERSÕES

2

DATA

ALTERAÇÕES

maio/2018

(1ª Publicaço)

3

O que se espera de uma Soluço  Sistêmica para Emisso de NFC -e

Esta publicaço visa orientar contribuintes na escolha e/ou desenvolvimento de Soluço

Sistêmica  a  ser  utilizada  para  emisso  de  NFC -e  –  Nota  Fiscal  de  Consumidor

eletrônica.

Entende-se  por  Soluço  Sistêmica  para  Emisso

de  NFC-e  o  conjunto  de  Softwares,

Hardwares e Meios de  Comunicaço utilizados  na Geraço, Transmisso, Autorizaço

de Uso, Impresso e Guarda de NFC -e.

A seguir esto apresentados os principais itens que a Soluço Sistêmica para Emisso

de NFC-e deve oferecer:

1.  Emitir  NFC-e  respeitando  os  padrões  previstos  na  legislaço  nacional  e

estadual.

O Soluço Sistêmica para Emisso de NFC -e, alm de observar a legislaço tributria,

dever seguir os padrões definidos nos Manuais, nas Notas Tcnicas e nos E squemas

XML NF-e - Pacote de Liberaço. Verificar ltimas versões disponveis em:

http://www.nfe.fazenda.gov.br/portal/principal.aspx.

2.  Utilizaço do ambiente de homologaço pa

ra realizaço de testes

O  ambiente  de  homologaço    disponibilizado  para  possibilitar  a  realizaço  de  testes

e/ou  treinamentos  com  a  emisso  de  documentos  sem  validade  jurdica.  O  programa

emissor  deve  possibilitar  a  sua  configuraço  para  utilizaço  deste

ambiente.

Recomenda-se  o  uso  exaustivo  do  ambiente  de  homologaço  de  forma  a  prevenir

rejeições  de  autorizaço  da  NFC -e  e  outros  erros  durante  a  venda  a  consumidor.  O

ambiente  de  produço  deve  ser  utilizado  apenas  para  emisso  de  documentos fiscais

com validade jurdica.

3. Cadastrar clientes, emitentes e produtos

A Soluço Sistêmica para Emisso de NFC -e dever permitir o cadastramento de pelo

menos  um  emitente  de  NFC-e,  com  todos  os  dados:  CNPJ,  Razo  Social,  Nome

Fantasia e dados de endereço.

A  Soluç o  Sistêmica  para  Emisso  de  NFC -e  dever  permitir  o  pr

-cadastramento  de

clientes  (pessoa  fsica  ou  jurdica)  e  produtos,  assim  como  permitir  alterações  dos

dados cadastrados, de emitentes, clientes e produtos.

4

Para evitar rejeições decorrentes de cadastro de produtos realizado incorretamente, ao

cadastrar novo produto, o sistema deve ter a funcionalidade de testar (de preferência de

forma  automtica)   conforme  conjunto  de  regras existente  para  a  NFC-e.    (autorizaço

da  NFC-e,  contendo

tal  produto,  no  ambiente  de  Homologaço  das  SEFAZ

Autorizadoras).  Destaca-se  que    grande  o  volume  de  rejeições   originadas  por  uma

informaço  incorreta  ou  faltante  no  cadastro  de  produtos  da  empresa .  A  ttulo

exemplificativo, “NCM Inexistente” é uma das rejeições mais comuns detectadas pelas

SEFAZ Autorizadoras.

Para auxiliar o desenvolvimento e a manutenço da aplicaço, o anexo nico contm as

50 maiores rejeições em um s dia.

4.  Venda rpida

A  Soluço  Sistêmica  para  Emisso  de  NFC -e  dever  permitir  a  venda  rpida  e  fcil,

sem  cadastrar  o  consumidor  final,  podendo,  facultado  ao  consumidor  final,  informar

apenas o CPF/CNPJ ou identificaço de estrangeiro.

5.  Identificar o destinatrio

A  Soluço  Sistêmica  para  Emisso  de  NFC -e  dever  permitir  a  venda  sem  a

identificaço  de  destinatrio,  respeitando  as  validações  previstas  nas  documentações

das  Nota  Tcnicas  e  Manuais,  bem  como,  observando  os  casos  de  obrigatoriedade

definidos em legislaço tri butria.

6.  Calcular automaticamente os tributos

A  Soluço  Sistêmica  para  Emisso  de  NFC -e  poder  preencher  automaticamente  os

clculos de tributos, para agilizar a venda e a emisso da NFC -e.

7.  Transmisso do  XML da NFC-e

O  arquivo  XML  da  NFC-e  emitida  deve  ser  transmitido  para  Secretaria  de  Fazenda

Estadual  assinado  digitalmente,  conforme  o  Manual  de  Orientaço  do  Contribuinte

(MOC).

8.  Suportar o certificado A1 e/ou A3

A Soluço Sistêmica para Emisso de NFC -e poder  aceitar certificados de assinatura

digital  no  padro  ICP -Brasil,  do  tipo  A1  e/ou  A3  (Certificado  A3    honeroso  e  a

complexidade da utilizaço para o varejo torna seu uso invivel)

.

Recomenda-se  que  o  aplicativo  contenha  controles  que  verifiquem  a  validade  dos

certificados  digitais  utilizados  para  emisso  e  transmisso  da  NFC -e,  gerando  alertas

5

antecipados (1 mês) sobre o futuro vencimento do certificado digital em uso.

9.  Tempo para transmisso  e autorizaço

O  tempo  de  transmisso  e  autorizaço   da  NFC-e  dever  respeitar  o  Manual  de

Orientaço do Contribuinte (MOC) .

10.  Possuir histrico e Status das notas

A Soluço Sistêmica para Emisso de NFC -e dever manter os status de cada NFC -e

emitida,  se  ela  foi  autorizada,  cancelada  ou  se  a  numeraço  foi  inutilizada.  As  NFC -e

rejeitadas  devero  ter  o  motivo  de  rejeiço,  at  que  um  novo  status  seja  obtido  para

essa NFC-e (corrigindo o motivo da rejeiço). Consulta dever ser disponibilizada para

verificaço deste histrico.

11. Imprimir DANFE NFC-e

A impresso gerada pelo softwar e dever respeitar o previsto na legislaço nacional e

estadual,  e  possuir  o  QR  Code.  O  software  dever  possuir  a  opço  de  imprimir  o

DANFE  NFC-e  tanto  na  forma  completa  como  na  forma  resumida,  sempre  com  QR

Code.

Consultar o Manual de  Especificações  Tcnicas do DANFE NFC -e e QR Code (ltima

verso) para uma melhor utilizaço da rea de impresso e buscando uma reduço da

utilizaço de papel.

Disponvel em:

http://www.nfe.fazenda.gov.br/portal/principal.aspx - Documentos - Manuais

O  contribuinte  dever  utilizar  impressora  comum

(no  fiscal) ,  exceto  impressora

matricial pela dificuldade de impresso do QR -Code.

12.  Backup

A  Soluço  Sistêmica  para  Emisso  de  NFC -e  dever  permi tir  que  o  usurio  faça  o

backup  dos  dados  contidos  no  seu  sistema,  tanto  de  NFC-e  como  de  cadastro  de

clientes e produtos.

13.  Enviar a NFC-e para o e-mail do consumidor final

A Soluço Sistêmica para Emisso de NFC -e poder  permitir o envio para o destinatrio

6

do arquivo XML da NFC-e (procNFe) e do DANFE NFC-e. Se o adquirente concordar, o

DANFE  NFC-e poder ter  sua  impresso substituda  pelo  envio  em  formato  eletrônico

ou pelo envio da chave de acesso do documento fiscal a qual ele se refere.

14.  No emitir NFC -e sem que esteja cadastrado o CSC e seu identificador.

O CSC corresponde a um cdigo de segurança alfanumrico de conhecimento apenas

da Secretaria de Fazenda do Estado do emitente e do prprio contribuinte.  O CSC (e

seu identificador – n  sequencial) é utilizado para cálculo do “hash do QR Code”, que é

um dos parmetros do QR Code.

O software dever permitir o pr

-cadastramento do CSC para ser utilizado na impresso

do DANFE NFC-e.  Observar que, a critrio da Unidade Federada, o CSC par a uso no

ambiente de produço difere do CSC para uso no ambiente de homologaço.

O software tambm dever permitir a alteraço do CSC cadastrado.

Caso  tenha  dvidas  sobre  o  fornecimento  e  utilizaço  do  CSC,  consulte  o  Manual  de

Especificações Tcnicas do D ANFE NFC-e e QR Code (ltima verso).

15.  A emisso de NFC -e em contingência off-line deve ser tratada como exceço,

sendo que a regra deve ser a emisso com autorizaço em tempo real.

O software dever permitir emitir as NFC -e em contingência. É importante ressaltar que

a  utilizaço  de  contingência  off -line  deve  se  restringir  s  situações  de  efetiva

impossibilidade  de  autorizaço  da  NFC -e  em  tempo  real,  haja  vista  que  pode  vir  a

representar custos e riscos adicionais ao contribuinte.

O  aplicativo  deve  transmitir  as  NFC-e  emitidas  em  contingência  logo  aps  cessados

problemas tcnicos  que motivaram a emisso em contingência.

Nota:  Observado  que  praticamente  70%  das  empresas  emitentes  de  NFC-e  no
possuem  emissões  em  contingência  em  um  determinado  dia,  ou  elas  ocorrem  em
pequena quantidade.

Aparentemente a maior quantidade de emisso em contingência est vinculada com a
implementaço do software no tratamento das falhas de comunicaço, e/ou na prpria
qualidade do canal de comunicaço utilizado.

Provavelmente,  o  investimento  no  tratamento  das  falhas  de  comunicaço  pelas
soluções sistêmicas vo reduzir de forma sensvel a quantidade de NFC -e autorizadas
em contingência.

16.    O  aplicativo  deve  transmitir  as  NFC-e  emitidas  em  contingência  logo  aps

cessados problemas tcnicos.

A Soluço Sistêmica para Emisso de NFC -e deve permitir que as NFC-e emitidas em

contingência  sejam  transmitidas  logo  aps  cessados  os  problemas  tcnicos  para

obtenço da autorizaço de uso.

7

17.  Contingência off-line e autorizaço da n ota.

Quando a contingência off-line for utilizada aps uma solicitaço de autorizaço de uma

nota, aps a cessaço dos problemas tcnicos, se houver a recepço de autorizaço de

nota  no  emitida  em  contingência,  o  contribuinte  deve  ser  questionado  se  esta  nota

deva  ser  cancelada  ou  no.  Mais  informações  no  Manual  de  Especificações  da

Contingência Off-line para NFC-e (ltima verso).

18.    O  software  deve  ser  capaz  de  efetuar  cancelamento  (evento)  e  inutilizar

numeraço no utilizada.

O software dever permi

tir o cancelamento de NFC-e como previsto nas legislações. O

software dever permitir a inutilizaço da numeraço da NFC

-e. Destaca-se que a NFC-

e emitida em contingência no pode ter sua numeraço inutilizada.

19.  No possuir alternativa de controle de  vendas sem a emisso de NFC -e.

O  aplicativo  no  deve  possuir  nenhuma  funcionalidade  que  permita  controlar  vendas

sem  a  emisso  de  NFC -e  ou  outro  documento

fiscal  hbil,  sob  pena  de

responsabilidade tributria solidria, bem como as civil e criminal.

21.  Permitir consulta de notas emitidas.

O  software  dever  permitir  a  consulta  das  NFC -e  emitidas,  possibilitando  inclusive  a

seleço  de  alguma  para  nova  impresso  do  DANFE  NFC -e,  quando  solicitada  pelo

consumidor.

22.  Permitir a correço de erros que gerara m a rejeiço da nota.

A NFC-e pode ser rejeitada, conforme regras de validaço previamente divulgadas em

Notas  Tcnicas  publicadas .  O  software  dever  permitir  a  correço  desse  erro  e

possibilitar nova transmisso objetivando a Autorizaço de Uso

O  software  deve,  a  princpio,  se  propor  a  validar  localmente  as  NFC -e  antes  do  seu

envio para a SEFAZ Autorizadora, j que a rejeiço da NFC -e acabar prejudicando o

prprio ambiente operacional da empresa.

O  desejvel    que  o  software  implemente  todas  as  regras  de

validaço  previamente

divulgadas, mas, na sua impossibilidade, no  aceitvel que ele no implemente regras

bsicas  de  validaço,  tais  como

“Valor  do  Item  difere  do  Valor  Unitário  vezes  a

quantidade”, valor do imposto difere da Base de Clculo vezes a  alíquota” e dezenas de

regras deste tipo.

8

23.  Permitir a integraço com sistemas gerenciais da empresa.

É  recomendvel  a  integraço  do  software  emissor  de  NFC -e  com  o  sistema  gerencial

da empresa. É uma maneira de agilizar e otimizar o trabalho do contribuinte.

24.    Permitir  a  integraço  com  sistema  de  pagamento  por  carto  (Transferência

Eletrônica de Fundos - TEF).

O  programa  dever  possibilitar  sua  integraço  com  o  sistema  de  autorizaço  de

pagamento com carto de crdito ou dbito (TEF) para uso opci

onal pelo contribuinte.

25.    Permitir  a exportaço dos  arquivos  XML  para  o sistema de  contabilidade  da

empresa.

O  software  dever  permitir  a exportaço dos  arquivos XML da  NFC -e,  tanto  o arquivo

do documento fiscal quanto o XML da resposta da SEFAZ.

26.  Permitir a exportar e importar arquivos XML.

O contribuinte pode ter a necessidade de transmitir as NFC-e emitidas em contingência

off-line de um outro local que no seja o da efetiva emisso. Para tal, precisar exportar

as NFC-e e import -las em qualquer outro local onde haja software instalado e apto a

transmiti-las.

27. No fazer mau uso (uso indevido) dos Web Services das SEFAZ

Autorizadoras.

O uso indevido dos ambientes autorizadores pode comprometer a estabilidade dos Web

Services, ocasionando a perda de performance ou indisponibilidade desses ambientes.

Assim,  aps  o  recebimento  de  rejeiço  de  uma  NFC -e,  o  aplicativo  no  deve  tentar

reenviar a mesma NFC-e (em loop), sem antes corrigir o problema.

Destaca-se que, a critrio da SEFAZ autorizadora, o contribuinte, cujo aplicativo estiver

com tal comportamento, poder ficar bloqueado da emisso da NFC -e, conforme Nota

Tcnica que trata do Consum o Indevido.

Esse  bloqueio  poder  ser  aplicado  tambm  para  os  demais  Web  Services,  caso

detectado o mau uso dos recursos (consumo indevido).

Para auxiliar o desenvolvimento e a manutenço da aplicaço, o anexo nico contm as

50 maiores rejeições em um s d ia na SVRS e RS. Este comportamento, presume-se,

deve se repetir em outras UF autorizadoras.

28.  Considerações  para  determinar  o  Tempo  de  Espera  do  Retorno  do  Processo

9

de Autorizaço da NFC -e.

Durante  o  processo  de  autorizaço  de  uma  NFC -e,  caso  o  contribuinte  no  receba

resposta  da  SEFAZ  autorizadora  aps  um  determinado  tempo  ( timeout),  o  aplicativo

pode  tentar repetir  o processo  por  uma  pequena  quantidade  de  vezes (por  exemplo 3

vezes).

A definiço do tempo de espera de retorno , determinada pelo contribuinte e observando

o  que  determina  o  MOC,  deve  considerar  o  seu  negcio,  su a  infraestrutura  de

comunicaço, sua localidade, etc . A ttulo  exemplificativo, observa-se que boa parte das

empresas definem o tempo de espera entre 20 a 50 segundos.

Aps isso,  a aplicaço do contribuinte  pode emitir a NFC-e em contingência off-line, at

que seja resolvido o problema de comunicaço .

29.  Confirmaço  de  timeout  (ausência  de  retorno  citada  no  tpico  acima)  e

Emisso em Contingência Off -line.

Caso se confirme o timeout, ou seja, a aplicaço no recebe o retorno do processo de

autorizaço da NFC -e, devem ser executados os seguintes procedimentos enquanto a

aplicaço  estiver  off -line  (ou  seja,  sem  comunicaço  com  o  ambiente  autorizador  da

respectiva SEFAZ):

1.  Manter  a  operaço  que  no  teve  retorno  em  uma  fila  de

“NFC-e  pendente  de

Retorno”;

2.  Gerar  uma  nova  NFC-e,  em  contingência  (tpEmis=9),  com  uma  nova

numeraço (sequencial em relaço a numeraço anterior);

Atenço:  Nota  Tcnica  poder  adicionar  critrios  pa

ra  geraço  da  NFC -e  em

contingência.

3.  Imprimir o DANFE da NFC-e (observando a numeraço sequencial), com a tarja

de “Emitida em Contingência – Pendente de autorizaço ”.

4.  Repetir  os  procedimentos  2  e  3  para  as  seguintes  NFC-e  emitidas  em

contingência at que  o aplicativo retorne  normalidade para emisso em tempo

real.

30.  Retorno    normalidade  para  emisso  Online  e  tratamento  das  NFC -e

pendentes de retorno.

Aps  a  confirmaço  de  que  o  aplicativo  est  apto  para  utilizar  o  ambiente  de

autorizaço, os  seguintes procedimentos devem ser seguidos:

1.  Tratar a fila de “NFC-e pendente de Retorno”:

a.  Por meio do Web Service de “Consulta Situação” da NF-e, verificar se a

NFC-e foi autorizada ou se no existe na SEFAZ Autorizadora.

i.  Se autorizada: Cancelar a NFC-e autorizada;

ii.  Se no existir: Inutilizar a numeraço.

2.  Transmitir  SEFAZ Autorizadora as NFC -e emitidas em contingência off-line.

10

31. Pedido de Resposta Sncrono

As empresas devem solicitar o Pedido de Resposta Sncrono (indSinc=1) para os Lotes
com somente 1 (uma) NFC-e (caso normal).

Este  modo  traz  benefcios  para  a  empresa  tanto  em  menor  tempo  de  resposta,  quanto
em simplificaço de processo de emisso.

32. Compactaço de  Mensagem

Preferencialmente,  as  empresas  devem  compactar  a  mensagem  para  envio  a  SEFAZ
Autorizadora,  conforme  orientaço  e  regras  do  MOC,
reduzindo  o  uso  do  canal  de
comunicaço da empresa e reduzindo o tempo de resposta (que  fortemente impactado
pela quantidade de bytes a ser transmitido).

33. Alterações Indevidas das informações: “Data-Hora de Emisso  em Contingência”
e “Data-Hora de Entrada em Contingência”

A data-hora de emisso da NFC -e emitida em contingência dever ser exatamente aquela
em que ocorreu a operaço no ponto de venda. E a data -hora de entrada em contingência
dever se r igual  do momento em que o sistema entrou em contingência.

Detectou-se  o  comportamento  indevido  de  algumas  empresas  alterando  essas  datas  no
envio (a posteriori) para autorizaço das NFC -e emitidas em contingência.

34. SEFAZ Autorizadora

A  princpio  o   ambiente  da  SEFAZ  Autorizadora  deve  ter  alta  disponibilidade  e  um  bom
tempo  de  resposta,  como  forma  de  no  impactar  o  ambiente  de  faturamento  das
empresas.

A alta disponibilidade pode ser caracterizada como:

- disponibilidade 24 x 7;

- uma interrupço por  mês, em um perodo inferior a x tempo;

Não  se  considera  “indisponibilidade”  as  paradas  de  manutenção  previstas  para  o
domingo, que eventualmente podem ocorrer e so previamente comunicadas no site da
SEFAZ.

Sobre  o  tempo  de  resposta,  esta  varivel    forte mente  afetada  pelo  canal  de
comunicação da empresa com a Internet e com o próprio “backbone” da Internet.

Deve  se  esperar  um  tempo  de  processamento  inferior  a  1  segundo  no  processamento
das  requisições  atendidas  pela  SEFAZ Autorizadora,  desconsiderando-se  os  tempos  da
Internet.

Anexo Único

50 maiores rejeições em nico dia (a ttulo de exemplo)

11

#

Mensagens de Rejeiço

Quantidade
de Rejeições

Quantidade
de Chaves
de Acesso
Rejeitadas

1  539-Rejeicao: Duplicidade de NF-e, com diferença na Chave de Acesso

2.721.610

143.958

2  778-Rejeicao: Informado NCM inexistente

3  204-Rejeicao: Duplicidade de NF-e

4  291-Rejeicao: Certificado Assinatura Data Validade

5  383-Rejeicao: Item com CSOSN indevido

6  464-Rejeicao: Cdigo de Hash no QR -Code difere do calculado

7  397-Rejeicao: Parmetro do QR -Code divergente da Nota Fiscal

8  704-Rejeicao: NFC-e com Data-Hora de emisso atrasada

9  386-Rejeicao: CFOP no permitido para o CSOSN informado

10  725-Rejeicao: NFC-e com CFOP invalido

2.172.567

75.344

1.614.137

252.662

487.647

453.302

396.197

265.031

239.774

166.418

162.815

22.500

43.387

24.310

5.687

68.263

13.320

16.471

11

767-Rejeicao: Total do Produto / Serviço difere do somatrio do total de
pagamentos para NFC-e

147.759

5.093

12  382-Rejeicao: CFOP no  permitido para o CST informado

13  602-Rejeicao: Total do PIS difere do somatrio dos itens sujeitos ao ICMS

14  766-Rejeicao: Item com CST indevido

15  569-Rejeicao: Data de entrada em contingencia muito atrasada

16  531-Rejeicao: Total da BC ICMS difere do somatrio dos itens

17  206-Rejeicao: NF-e j est inutilizada na Base de dados da SEFAZ

18  703-Rejeicao: Data-Hora de Emisso posterior ao horrio de recebimento

19  226-Rejeicao: Cdigo da UF do Emitente diverge da UF autorizadora

20  564-Rejeicao: Total do Produto / Serviço difere do somatrio dos itens

21  537-Rejeicao: Total do Desconto difere do somatrio dos itens

22  777-Rejeicao: Obrigatria a informaço do NCM completo

23  769-Rejeicao: NFC-e deve possuir o grupo de Formas de Pagamento

24

591-Rejeicao: Informado CSOSN para emissor que no e do Simples
Nacional (CRT diferente de 1)

25  611-Rejeicao: cEAN invalido

26  218-Rejeicao: NF-e j est cancelada na base de dados da SEFAZ

27

28

220-Rejeicao: Destinatrio com identificaço igual a identificaço do
emitente

462-Rejeicao: Cdigo
SEFAZ

identificador do CSC no QR-Code no cadastrado na

29  237-Rejeicao: CPF do destinatrio invalido

30  869-Rejeicao: Valor do troco incorreto

138.335

130.466

125.270

74.702

70.313

65.166

62.686

54.441

52.870

50.410

49.375

44.321

39.009

38.421

38.122

37.365

34.403

34.077

32.972

21.693

6.738

9.737

10.057

7.030

8.864

17.614

13.845

1.720

1.125

3.945

771

983

2.202

412

688

2.858

1.730

236

31

502-Rejeicao: Erro na Chave de Acesso - Campo ID no corresponde a
concatenaço dos campos corresponde

32.239

10.119

12

32

33

391-Rejeicao: No informados os dados do carto de credito/debito nas
Formas de Pagamento da Nota Fiscal

315-Rejeicao: Data de Emisso anterior ao incio da autorizaço de Nota
Fiscal na UF

34  384-Rejeicao: CSOSN no permitido para a UF

35  590-Rejeicao: Informado CST para emissor do Simples Nacional (CRT=1)

36  203-Rejeicao: Emissor no habilitado para emisso da NF

-e

28.905

4.712

28.154

27.907

27.378

25.582

807

3.800

883

8.223

37

213-Rejeicao: CNPJ-Base do Emitente difere do CNPJ-Base do Certificado
Digital

25.568

17.012

38  483-Rejeicao: Valor do desconto maior que valor do produto

39

40

41

42

750-Rejeicao: NFC-e com valor total superior ao permitido para
destinatrio no identificado

(Cdigo)

392-Rejeicao: No informados os dados da operaço de pagamento por
carto de credito/debito
603-Rejeicao: Total do COFINS difere do somatrio dos itens sujeitos ao
ICMS
610-Rejeicao: Total da NF difere do somatrio dos Valores compõe o valor
Total da NF.

43  394-Rejeicao: Nota Fiscal sem a informaço do QR -Code

44  252-Rejeicao: Ambiente informado diverge do Ambiente de recebimento

45  208-Rejeicao: CNPJ do destinatrio  invalido

46

629-Rejeicao: Valor do Produto difere do produto Valor Unitrio de
Comercializaço e Quantidade Comercial

47  604-Rejeicao: Total do vOutro difere do somatrio dos itens

48

49

685-Rejeicao: Total do Valor Aproximado dos Tributos difere do somatrio
dos itens

660-Rejeicao: CFOP de Combustvel e no informado grupo de combustvel
da NF-e

50  780-Rejeicao: NFC-e com valor total superior ao permitido

21.086

20.927

20.129

16.004

14.329

13.858

13.169

12.824

462

312

991

917

773

11.003

69

346

11.669

3.436

10.246

9.144

8.728

8.447

236

349

230

11

