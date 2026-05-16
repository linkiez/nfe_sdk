# Emissao de NFC-e

## Escopo

Documento-base para consolidar o fluxo nacional vigente da NFC-e, distinguindo regras nacionais compartilhadas de desvios ou complementos por UF.

## Estado efetivo atual

O portal nacional da NF-e continua sendo a referencia publica inicial para a NFC-e no que se refere a navegacao institucional, informes recentes, disponibilidade, FAQ e relacao de portais estaduais. A pesquisa publica confirma que o ecossistema da NFC-e combina regras nacionais compartilhadas com complementacao estadual para cobertura operacional completa.

O proprio portal nacional remete a `Portais Estaduais da NF-e` e apresenta a relacao de UFs integrantes do Cadastro Centralizado de Contribuintes, incluindo as 27 UFs listadas na feature. Isso confirma a necessidade de uma documentacao em duas camadas: uma nacional para regras compartilhadas e outra por UF para diferencas de acesso, servicos, disponibilidade e eventuais deltas operacionais.

## Mudancas recentes relevantes

- O portal nacional exibe notas tecnicas e informes recentes que afetam conjuntamente NF-e e NFC-e, incluindo a NT 2025.002 v1.36 sobre leiautes ligados a RTC e a NT 2026.004 v1.00 sobre CNPJ alfanumerico.
- A superficie publica tambem mostra acompanhamento de disponibilidade e contingencia, ponto material para emissores de NFC-e quando houver oscilacao dos autorizadores ou necessidade de rotas alternativas previstas em legislacao.

## Capacidades necessarias no SDK

- Representar o fluxo nacional compartilhado de emissao e autorizacao da NFC-e sem perder a separacao entre regra nacional e complemento estadual.
- Permitir incorporar deltas por UF em endpoints, disponibilidade, exigencias operacionais e apoio documental.
- Acompanhar atualizacoes de leiaute, informes tecnicos e perguntas frequentes que alterem comportamento comum entre NF-e e NFC-e.
- Manter uma matriz de rastreabilidade por UF para registrar cobertura, lacunas e fontes aplicaveis.

## Relacao com a matriz por UF

Ver [Matriz NFC-e por UF](./uf-matrix.md) para cobertura completa das 27 unidades federativas.

## Fontes primarias

- `SRC-NFCE-001` Portal Nacional da NF-e - pagina principal e navegacao publica.
- `SRC-NFCE-002` Informes e notas tecnicas recentes visiveis na pagina principal do portal nacional.
- `SRC-NFCE-003` Portal Nacional da NF-e - Perguntas Frequentes.
- `SRC-NFCE-004` Portal SEFAZ/SP - Sobre a NF-e.
- `SRC-NFCE-005` Portal SEFAZ/SP - Servicos da NF-e.

## Fontes secundarias

- `SRC-SEC-001` node-dfe - referencia tecnica complementar para comparar suporte pratico de emissao NF-e/NFC-e e identificar pontos de atencao por UF, sem substituir fontes oficiais.

## Lacunas e riscos abertos

- Esta etapa ainda nao percorreu individualmente os 27 portais estaduais, portanto a matriz por UF permanece apenas estruturada.
- Fluxos e requisitos estritamente estaduais da NFC-e ainda dependem de coleta detalhada por UF.