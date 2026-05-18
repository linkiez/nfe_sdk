Nota Técnica 2019.001

(Atualizado pela Sefaz/MT em 07/11/2019)

3.2 Grupo BA. Documento Referenciado

CAMPO
SEQ

MODELO
DOC.

BA10-40

BA10-50

BA20-20

BA20-30

55

55

55
55

APLICAÇÃO MSG DESCRIÇÃO ERRO

FACULTATIVO

320 Rejeição: Contranota de Produtor referencia somente NF de outro emitente

FACULTATIVO

922 Rejeição: Contranota de Produtor só pode referenciar NF-e ou NF de Produtor Modelo 4

FACULTATIVO
FACULTATIVO

Rejeição: Referenciado documento de operação interna  em operação interestadual ou com o
exterior

923
924 Rejeição: Informado Cupom Fiscal referenciado

3.6 Grupo N. Item / Tributo: ICMS
CAMPO
SEQ

MODELO
DOC.

APLICAÇÃO

MSG

DESCRIÇÃO ERRO

N12-85

55/65

FACULTATIVO

930 Rejeição: CST com benefício fiscal e não informado o código de benefício fiscal [nItem: nnn]

N12-86

55/65

FACULTATIVO

928 Rejeição: Informado código de benefício fiscal para CST sem benefício fiscal [nItem: nnn]

N12-90

55/65

FACULTATIVO

934 Rejeição: Não informado valor do ICMS  desonerado ou o Motivo de desoneração [nItem: nnn]

N12-94

55/65

FACULTATIVO

931 Rejeição: Informado código de benefício fiscal para CST sem benefício fiscal [nItem: nnn]

N12-97

N18-10

N18-20

55

55

55

FACULTATIVO

929 Rejeição: Informado CST de diferimento sem as informações de diferimento [nItem: nnn]

FACULTATIVA

FACULTATIVO

932

933

Rejeição: Informada modalidade de determinação da BC da ST como MVA e não informado o
campo pMVAST [nItem: nnn]
Rejeição: Informada modalidade de determinação da BC da ST diferente de MVA e informado
o  campo pMVAST [nItem: nnn]

IMPLEMENTADO NA UF MT

Regra de Validação (RV) não
será aplicada

Regra de Validação (RV) não
será aplicada

IMPLEMENTADO NA UF MT

Regra de Validação (RV) -
implementação  futura (será
avisado pela UF)
Regra de Validação (RV) -
implementação  futura (será
avisado pela UF)
Regra de Validação (RV)-
implementação  futura (será
avisado pela UF)
Regra de Validação (RV) -
implementação  futura (será
avisado pela UF)

Regra de Validação (RV) não
será aplicada
Regra de Validação (RV) não
será aplicada
Regra de Validação (RV) não
será aplicada

NÃO

NÃO

SIM

SIM

NÃO

NÃO

NÃO

NÃO

NÃO

NÃO

NÃO

3.7 Grupo W. Total da NF-e
CAMPO
SEQ

MODELO
DOC.

APLICAÇÃO

MSG

W03-20

55/65

FACULTATIVO

935

DESCRIÇÃO ERRO
Rejeição: Valor total da Base de Cálculo superior ao valor limite estabelecido [Valor Limite: R$
XXX.XXX,XX] (valor definido pela UF)

IMPLEMENTADO NA UF MT

NÃO

Regra de Validação (RV) não
será aplicada

3.8 Banco de Dados: Emitente
CAMPO
SEQ

MODELO
DOC.

APLICAÇÃO

MSG

DESCRIÇÃO ERRO

1C03-10

55/65

FACULTATIVO

936 Rejeição: Razão Social do emitente diverge do informado no cadastro da SEFAZ

3.9 Banco de Dados: Destinatário
CAMPO
SEQ
5E17-70

MODELO
DOC.

MSG

APLICAÇÃO
FACULTATIVO
FACULTATIVO

55/65
55/65

5E17-80

DESCRIÇÃO ERRO

246 Rejeição: CNPJ Destinatário não cadastrado
623 Rejeição: CPF Destinatário não cadastrado

IMPLEMENTADO NA UF MT

NÃO

Regra de Validação (RV) não
será aplicada

IMPLEMENTADO NA UF MT

SIM
SIM

