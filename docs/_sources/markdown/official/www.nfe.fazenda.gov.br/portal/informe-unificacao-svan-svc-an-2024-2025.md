# Informes do Portal da NF-e — unificação da SVAN e da SVC-AN

Registro interno de dois avisos oficiais do Portal Nacional da NF-e, consultados em 2026-11-11, que definem os endereços vigentes da SVC-AN.

## 25/04/2024 — Unificação da SVAN e SVC-AN de HOMOLOGAÇÃO

Fonte: https://www.nfe.fazenda.gov.br/portal/informe.aspx?ehCTG=false&Informe=CGT8ZmsZjcc=

Dando continuidade ao processo de unificação do ambiente de HOMOLOGAÇÃO da SVAN (ambiente que autoriza para contribuintes da SEFAZ MA) e SVC-AN (ambiente de contingência para as SEFAZ que autorizam na SVRS e SEFAZ RS), informamos que as URLs abaixo serão descontinuadas a partir do dia 16/07/2024:

- https://hom.svc.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx
- https://hom.svc.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx
- https://hom.svc.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx
- https://hom.svc.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx
- https://hom.svc.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx
- https://hom.svc.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx

Assim, os usuários devem atualizar seus sistemas de HOMOLOGAÇÃO, até 15/07/2024, para utilizar as seguintes URLs:

- https://hom.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx
- https://hom.sefazvirtual.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx
- https://hom.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx
- https://hom.sefazvirtual.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx
- https://hom.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx
- https://hom.sefazvirtual.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx

Assinado por: Secretaria Especial da Receita Federal do Brasil.

## 16/09/2024 (reiterado em 04/02/2025) — Unificação da SVAN/SVC-AN de PRODUÇÃO

Fonte oficial: https://www.nfe.fazenda.gov.br/portal/informe.aspx?ehCTG=false&Informe=sMKEsCOE348= (texto conferido na reprodução de https://www.legisweb.com.br/noticia/?id=29371, que cita o Portal NF-e).

As URLs de produção `https://www.svc.fazenda.gov.br/<serviço>4/<serviço>4.asmx` foram descontinuadas a partir de 11/02/2025; os usuários da SVC-AN passam a usar, em PRODUÇÃO (até 10/02/2025), as URLs da SVAN `https://www.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx`, `…/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx`, `…/NFeStatusServico4/NFeStatusServico4.asmx`, `…/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx`, `…/NFeAutorizacao4/NFeAutorizacao4.asmx` e `…/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx`.

## Consequência para o catálogo do SDK

- SVAN e SVC-AN compartilham os mesmos endereços: produção `www.sefazvirtual.fazenda.gov.br`, homologação `hom.sefazvirtual.fazenda.gov.br`.
- O serviço de eventos é `NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx` (não `RecepcaoEvento4/RecepcaoEvento4.asmx`).
- Os hosts `*.svc.fazenda.gov.br` não existem mais; a tarefa T151 foi corrigida para refletir isto.
