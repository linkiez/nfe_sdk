# Processo de Acompanhamento de Notas Tecnicas (NT)

## Objetivo

Descreve o fluxo adotado para monitorar, avaliar e incorporar ao SDK as Notas Tecnicas publicadas pela SEFAZ/ENCAT que afetam o ecossistema NF-e e NFC-e.

## Ciclo de vida de uma NT

```
Publicacao pela SEFAZ/ENCAT
        |
        v
Deteccao (via portal oficial ou feed de mudancas)
        |
        v
Registro no watchlist (docs/_meta/watchlist/gap-*.md)
        |
        v
Analise de impacto no SDK
   - Novos campos canonicos?
   - Mudancas de XSD?
   - Novos eventos?
   - Mudancas de validacao?
        |
        v
Criacao de feature spec (specs/NNN-descricao/)
        |
        v
Implementacao e testes
        |
        v
Atualizacao de docs/_meta/source-registry.md (proveniencia)
        |
        v
NT marcada como incorporada
```

## Criterios de prioridade

| Prioridade | Criterio                                                |
| ---------- | ------------------------------------------------------- |
| Alta       | NT obrigatoria com data de vigencia proxima (< 90 dias) |
| Media      | NT obrigatoria com data de vigencia > 90 dias           |
| Baixa      | NT opcional ou em homologacao sem prazo definido        |
| Monitorar  | NT em consulta publica, sem vigencia confirmada         |

## Fontes de monitoramento

- Portal Nacional da NF-e: https://www.nfe.fazenda.gov.br/portal/
- Portal da NFC-e (estadual por UF — acompanhar SP e RJ como piloto)
- ENCAT — lista de distribuicao de NTs tecnicas
- Repositorio oficial de XSDs (via ferramentas de download deste SDK)

## Campos obrigatorios em cada registro de watchlist

Cada arquivo `docs/_meta/watchlist/gap-NNN-*.md` deve conter:

- **Identificador**: codigo unico do gap (gap-NNN)
- **Titulo**: descricao curta
- **Status**: `monitorar` | `avaliar` | `em-progresso` | `incorporado` | `descartado`
- **Fonte primaria**: referencia ao documento oficial
- **Data de deteccao**: quando foi identificado
- **Prazo de vigencia**: se conhecido
- **Impacto estimado**: descricao do que muda no SDK
- **Spec associada**: link para specs/NNN se ja criada

## Revisao periodica

O watchlist deve ser revisado a cada release ou no minimo a cada 60 dias para:

1. Verificar se NTs monitoradas progrediram para vigencia
2. Atualizar status de NTs incorporadas
3. Identificar novas NTs publicadas desde a ultima revisao
4. Arquivar NTs revogadas ou substituidas

## Rastreabilidade

Toda NT incorporada deve gerar uma entrada em `docs/_meta/source-registry.md` com:

- Codigo da NT
- Data de publicacao
- Data de incorporacao no SDK
- Versao do SDK em que foi incluida
- Link para spec e PR correspondentes
