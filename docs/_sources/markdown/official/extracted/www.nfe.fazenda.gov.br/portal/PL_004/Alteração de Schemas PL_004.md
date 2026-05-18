Nota Fiscal Eletrônica

Atualização de Schema XML (PL_004)

Projeto Nota Fiscal Eletrônica

Atualização de Schema XML
Pacote de Liberação Nº 4 (PL_004)

27-Novembro-2006

Pág. 1 / 3

Nota Fiscal Eletrônica

Atualização de Schema XML (PL_004)

1.  Resumo

Este  Pacote  de  Liberação  atualiza  os  esquemas  XML  do  Pacote  de  Liberação  Nº
004 do projeto Nota Fiscal eletrônica.

2.  Identificação e vigência

Pacote de Liberação  PL_004
Data de divulgação
Data de vigência

29/11/2006
a ser definida pela Coordenação Técnica

3.  Controle de Ambiente

Foi criada o campo tpAmb, que pode assumir os valores 1=Produção e 2=Homologação,
nos leiautes da NF-e, chamadas e retorno dos WS disponíveis.

A adoção do campo tpAmb visa garantir que as NF-e, pedido de cancelamento e pedido
de  inutilização  de  numeração  de  NF-e  sejam  processadas  pelo  ambiente  correto,
resultando  na  rejeição  da  mensagem  nos  casos  em  que  o  conteúdo  informado  no  campo
tpAmb contenha valor divergente do ambiente de WS que está processando a mensagem.

Também  foi  criado  o  campo  verAplic  nos  retornos  dos  WS  existentes  no  projeto  para
identificar a versão do aplicativo que atendeu a solicitação de serviço.

4.  Alteração do Schema XML da assinatura digital

O Schema XML da assinatura digital foi modificado para impedir o uso de padrões de
assinatura diferentes dos definidos para o Projeto NF-e.

5.  Alteração na estruturação dos Schemas XML do projeto

NF-e

Os schemas XML dos WS foram reorganizados de forma que a modificação de um
Schema XML não tenha nenhum reflexo nos demais Schemas XML, sendo adotado os
seguintes princípios:

•  cada WS deve ter o seu próprio conjunto de Schemas XML;
•

todas as estruturas de informação do WS devem ser organizadas em tipos básicos e
agrupadas em um repositório de Schema XML básico do WS;

Pág. 2 / 3

Nota Fiscal Eletrônica

Atualização de Schema XML (PL_004)

•  os Schemas XML do WS devem utilizar os tipos básicos do repositório básico do
WS  para  garantir  a  reutilização  de  estruturas  de  informação  e  facilitar  a
manutenção dos Schemas;

•  a  modificação  de  qualquer  Schema  XML  de  um  WS  implica  na  modificação  da
versão  de  todos  os  Schemas  XML  do  WS,  sem  provocar  alterações  em  Schemas
XML dos demais WS;

Cabe ressaltar que todas as modificações realizadas são transparentes para os participantes
do Projeto NF-e e visam facilitar a manutenção e a administração dos Schemas XML do
Projeto. Além de simplificar o uso e controle dos Schemas XML utilizados em função da
adoção de uma versão única para todos os Schemas XML de cada WS existente.

6.  Alteração no leiaute da NF-e

••••  definição  da  regra  de  preenchimento  de  campos  nas  operações  de  comércio
exterior:  informar  9999999  para  o  código  de  município  e  ‘EXTERIOR’  para  o
nome do município;

••••  acrescentada a tag cEANTrib para identificar o produto na unidade tributável;
••••  modificada  a  regra  de  validação  de  conteúdo  do  campo  cEAN  e  cEANTrib  para

aceitar códigos de tamanho: 0, 8, 12, 13 e 14;

••••  o campo uCom passou a ser obrigatório;
••••  o campo RENAVAM não é mais obrigatório para a exportação;
••••  acrescentadas as tags qLote e dFab para o grupo de medicamentos;;
••••  corrigido  o  número  de  casas  decimais  para  os  campos  de  quantidade  de

PIS/COFINS;

••••  modificada  a  codificação  do  conteúdo  do  campo  tpEmis  para:  1-Normal  e  2-

Contingência;

••••  acrescentados  os  campos  de  interesse  dos  municípios:  CNAE  –  Código  Nacional

de Atividade Econômica e cListServ para codificação da Lista de Serviços;

••••  acrescentado o campo tpNFe, com os valores 1=NF Normal, 2=NF Complementar

e 3=NF de Ajuste;

••••  acrescentado o campo tpAmb, com os valores 1=Produção e 2=Homologação.

As dúvidas e sugestões devem ser encaminhadas através do Canal Fale Conosco da Secretaria
da Fazenda de São Paulo (http://www.fazenda.sp.gov.br/email/default2.asp) referente à “Nota
Fiscal eletrônica”.

Pág. 3 / 3

