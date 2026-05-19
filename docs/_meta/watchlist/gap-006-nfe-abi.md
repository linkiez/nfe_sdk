# gap-006: NF-e ABI (Acesso B2B Intermediado)

## Identificador

`gap-006`

## Titulo

NF-e ABI — Acesso B2B Intermediado para consulta e recebimento de NF-e por intermediarios e operadores logisticos.

## Status

`monitorar`

## Fonte primaria

Portal Nacional da NF-e — documentacao de servicos de distribuicao e acesso intermediado. Nenhuma NT especifica identificada ainda; trata-se de lacuna detectada na analise de cobertura do SDK em relacao ao ecossistema completo.

## Data de deteccao

2026-05

## Prazo de vigencia

Nao definido. Funcionalidade existente no ecossistema mas sem NT obrigatoria com prazo.

## Descricao do gap

O SDK cobre o fluxo direto emitente→destinatario e a distribuicao de DF-e para o proprio destinatario autenticado. Nao cobre o cenario em que um intermediario (operador logistico, plataforma B2B) acessa NF-es em nome de terceiros via autorizacao delegada ou acesso agrupado.

## Impacto estimado no SDK

- Novo tipo de contexto de autenticacao (delegado ou agrupado)
- Possivel extensao de `distributeRecipientDFe` ou servico separado
- Dependente de especificacao oficial do servico de ABI pela SEFAZ

## Spec associada

Nenhuma. Aguarda especificacao oficial suficiente para criar feature spec.

## Historico

| Data    | Evento                                        |
| ------- | --------------------------------------------- |
| 2026-05 | Identificado como gap na analise de auditoria |
