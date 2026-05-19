# Cobertura Oficial de Notas Fiscais

## Escopo

Este hub consolida a cobertura documental de NF-e, NFC-e e Manifestacao do Destinatario a partir da base oficial internalizada no repositorio, refatorando o conteudo antes espalhado em capturas, conversoes e indices tecnicos para paginas editoriais navegaveis.

## Como ler

1. Comecar por [Cobertura nacional](./cobertura-nacional.md) para entender servicos publicos, FAQ e organizacao normativa do portal nacional.
2. Seguir para [Manuais e esquemas](./manuais-e-esquemas.md) para a camada normativa e estrutural.
3. Ler [Notas tecnicas e informes](./notas-tecnicas-e-informes.md) para o mapa de mudancas, series recorrentes e impactos por grupo funcional.
4. Fechar com [Cobertura estadual](./cobertura-estadual.md) para os complementos operacionais por UF.
5. Depois disso, usar os dossies de dominio em `docs/nfe/`, `docs/nfce/` e `docs/manifestacao-destinatario/`.

## Estrutura editorial

| Pagina                                                      | Conteudo absorvido                                                             | Papel                              |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------- |
| [Cobertura nacional](./cobertura-nacional.md)               | Portal nacional, servicos publicos, FAQ e divisao institucional do ecossistema | Porta de entrada funcional         |
| [Manuais e esquemas](./manuais-e-esquemas.md)               | MOC, anexos, contingencia, QR Code, boas praticas e esquemas XML               | Base normativa e estrutural        |
| [Notas tecnicas e informes](./notas-tecnicas-e-informes.md) | NTs, informes, tabelas auxiliares, series recorrentes e mapa de impactos       | Base de compatibilidade e evolucao |
| [Cobertura estadual](./cobertura-estadual.md)               | Portais estaduais, credenciamento, contingencia local e servicos por UF        | Base operacional complementar      |

## Estado da consolidacao

- Arquivos oficiais arquivados na base interna: `704`.
- Conversoes Markdown concluidas e absorvidas pelo repositorio: `505`.
- Falhas abertas de conversao rastreadas em manifesto: `4`.
- Hubs estaduais ja consolidados nesta camada editorial: Sao Paulo, Amazonas, Acre, Paraiba, Pernambuco, Mato Grosso, Mato Grosso do Sul, Parana, Rio de Janeiro, Santa Catarina, Minas Gerais, Ceara, Rondonia e Roraima.

## Recortes por dominio

### NF-e

- Cobertura confirmada em servicos publicos nacionais para consulta, inutilizacao, disponibilidade, web services, EPEC e SVC-AN.
- Cobertura confirmada no FAQ para emissao, autorizacao, cancelamento, inutilizacao, consulta na internet, escrituracao, contingencia, DANFE e certificacao digital.
- Complemento estadual necessario quando houver comportamento operacional por UF, indisponibilidade local ou canal adicional fora do portal nacional.

### NFC-e

- Cobertura confirmada no MOC compartilhado com NF-e, no manual tecnico de DANFE NFC-e e QR Code, no manual de contingencia offline e no manual de boas praticas de emissor.
- Cobertura confirmada nas NTs e informes que alteram leiaute, QR Code, CRT=4, produtor rural, RTC, CNPJ alfanumerico e tabelas auxiliares.
- A pagina canonica de NTs e informes agora tambem separa trilhas recorrentes de NCM, meios de pagamento, combustiveis, FCP e classificacao tributaria.
- Complemento estadual necessario para CSC, credenciamento, QR Code por UF, indisponibilidade local e regras especificas do autorizador.

### Manifestacao do Destinatario

- Cobertura confirmada no portal nacional como servico proprio e como secao dedicada do FAQ com 21 questoes indexadas.
- Restricao confirmada na pagina especifica da funcionalidade: acesso depende de certificado digital.
- O dominio permanece parcialmente coberto por fonte publica porque o endpoint funcional nao expande o detalhe operacional sem autenticacao.

## Cobertura estadual complementar

- O portal nacional convertido preserva a lista de portais estaduais da NF-e, usada como mapa de aprofundamento por UF.
- A base interna ja contem material de secretarias estaduais como SP, AC, AM, PB, PE, MT, MS, PR, RJ, SC, MG, CE, RO, RR e outras UFs.
- A leitura correta para estados e incremental: usar a camada nacional como base e promover material estadual apenas quando ele acrescentar requisito operacional especifico ou preencher lacuna aberta do dominio.

## Conteudo refatorado nesta camada

- Hubs nacionais de portal, FAQ, manuais, esquemas, notas tecnicas e informes.
- Conteudo extraido de ZIP com valor normativo navegavel.
- Hubs estaduais de SP, AM, AC, PB, PE, MT, MS, PR, RJ, SC, MG, CE, RO e RR usados como base de complemento operacional.
- Mapa de conversoes concluidas, falhas conhecidas e limites da cobertura editorial atual.

## Restricoes e limites atuais

- Nem todo material convertido do acervo estadual e curado; parte dele ainda aparece como captura bruta, sitemap ou pagina de navegacao ampla.
- Paginas com certificado digital, captcha ou area restrita permanecem tratadas como evidencia de restricao, nao como fonte de detalhe operacional nao observavel.
- O acervo convertido e amplo o suficiente para cobrir a superficie publica principal de notas fiscais, mas ainda exige curadoria adicional para transformar todo o material estadual em dossies editoriais equivalentes.

## Leituras relacionadas

- [Catalogo geral de capacidades](../capacidades-sdk.md)
- [NFe](../nfe/index.md)
- [NFC-e](../nfce/index.md)
- [Manifestacao do Destinatario](../manifestacao-destinatario/index.md)
- [Documentos oficiais convertidos do Portal Nacional da NF-e](../documentos-oficiais-portal-nfe.md)
