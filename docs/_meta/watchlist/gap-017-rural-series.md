# gap-017: Series Rurais NF-e

## Identificador

`gap-017`

## Titulo

Series Rurais NF-e — suporte a series especiais para producao rural e agroindustria.

## Status

`monitorar`

## Fonte primaria

Legislacao estadual e federal sobre NF-e para producao rural. XSD `PL_NFAg_1.00j` presente no repositorio local indica existencia de schema especifico para NF-e agroindustrial.

## Data de deteccao

2026-05

## Prazo de vigencia

Nao definido. Aplicavel em estados com obrigatoriedade de NF-e rural.

## Descricao do gap

O SDK cobre o fluxo padrao de NF-e (serie 1-889). Series rurais (ex.: serie 890-899 reservadas para NF-e de produtor rural em alguns estados) possuem regras especificas de validacao, serie e inscricao estadual do produtor.

Adicionalmente, o XSD `PL_NFAg_1.00j` (NF-e Agroindustrial) presente localmente indica variante de schema que o SDK ainda nao suporta explicitamente.

## Impacto estimado no SDK

- Extensao de `AccessKeyFields` para suportar series rurais
- Validacao de serie no contexto de producao rural
- Possivel suporte a schema NF-e Agroindustrial (NFAg)
- Documentacao de restricoes por UF

## Spec associada

Nenhuma. Aguarda analise mais profunda dos XSDs locais e legislacao aplicavel.

## Historico

| Data    | Evento                                                        |
| ------- | ------------------------------------------------------------- |
| 2026-05 | Identificado como gap; XSD NFAg presente no repositorio local |
