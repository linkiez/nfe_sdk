# Contract: Closure Status Transition

## Purpose

Documentar o contrato editorial minimo deste slice: como as specs `007` e `010` deixam de aparecer como `em execucao` quando o roadmap esta stale em relacao aos artefatos de origem, sem criar nova superficie publica do pacote.

## Published Surface Impact

- Nenhum novo export `ESM`
- Nenhuma nova facade root
- Nenhum novo tipo publico
- Nenhuma mudanca de semantica nas APIs existentes

## Observable Outputs

- `specs/007-nfe-operational-mvp/tasks.md` pode permanecer inalterado quando a evidence de origem ja estiver suficiente, servindo apenas como fonte auditada para a reconciliacao do roadmap.
- `specs/010-nfce-national-core/tasks.md` pode permanecer inalterado quando o scaffold residual ja estiver satisfeito e a divergencia for apenas editorial.
- `docs/roadmap/specs-implementacao.md` e `docs/roadmap/specs-pendencias-abertas.md` refletem a transicao de status apenas depois da evidencia objetiva.

## Non-Goals

- Redefinir comportamento de `NFe` operacional
- Promover novas capacidades de `NFC-e`
- Alterar contratos publicados do pacote
- Abrir backlog novo de runtime neste slice
