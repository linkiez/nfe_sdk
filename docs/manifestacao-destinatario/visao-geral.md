# Manifestacao do Destinatario

## Escopo

Documento-base para consolidar os eventos, pre-requisitos e requisitos operacionais da Manifestacao do Destinatario, incluindo restricoes de acesso e impactos futuros no SDK.

## Estado efetivo atual

O portal nacional da NF-e expõe a Manifestacao do Destinatario como funcionalidade propria dentro da superficie publica do ecossistema, e as Perguntas Frequentes nacionais mantem uma secao especifica para `Eventos de Manifestacao do Destinatario`, com 21 questoes publicamente indexadas. Isso confirma que o tema faz parte do fluxo oficial e possui tratamento documental proprio no portal nacional.

Ao mesmo tempo, a pagina especifica da funcionalidade no portal nacional retornou exigencia de certificado digital para acesso. Portanto, nesta etapa foi possivel confirmar a existencia do servico e sua relevancia normativa, mas nao extrair diretamente do endpoint restrito todos os detalhes operacionais publicos esperados para o dossie final.

## Mudancas recentes relevantes

- O portal principal continua publicando informes e notas tecnicas recentes que podem afetar eventos e validacoes correlatas, exigindo acompanhamento conjunto com a documentacao especifica de manifestacao.
- Ate esta etapa, nao foi consolidada ainda uma lista fechada de deltas exclusivos da Manifestacao do Destinatario a partir de fontes publicas adicionais.

## Capacidades necessarias no SDK

- Prever suporte a eventos de manifestacao do destinatario como um conjunto funcional distinto dentro do ecossistema NF-e.
- Permitir associar requisitos do evento a restricoes de acesso, autenticacao e eventuais pre-requisitos operacionais documentados nas fontes oficiais.
- Manter o fluxo de rastreabilidade para diferenciar o que foi confirmado por fonte primaria publica do que permanece como lacuna por restricao de acesso.

## Fontes primarias

- `SRC-MD-001` Portal Nacional da NF-e - pagina principal e link da Manifestacao do Destinatario.
- `SRC-MD-002` Perguntas Frequentes do Portal Nacional da NF-e - secao de eventos de Manifestacao do Destinatario.
- `SRC-MD-003` Portal Nacional da NF-e - pagina da Manifestacao do Destinatario com acesso restrito por certificado digital.

## Fontes secundarias

Nenhuma fonte secundaria registrada nesta etapa.

## Lacunas e riscos abertos

- A principal superficie especifica da funcionalidade exige certificado digital, o que limita a consolidacao imediata do detalhamento operacional por acesso publico.
- Ainda faltam fontes publicas adicionais para fechar, com o mesmo nivel de detalhe, eventos, pre-requisitos e excecoes de uso.