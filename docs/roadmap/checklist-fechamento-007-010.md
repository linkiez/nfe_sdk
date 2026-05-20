# Checklist de Fechamento das Specs 007 e 010

## Objetivo

Transformar a iteracao `1` do roadmap em uma saida executavel e auditavel, deixando explicito como reconciliar o status editorial das specs `007` e `010` com os artefatos de origem.

## Escopo desta iteracao

- Nao abre backlog novo de `runtime`.
- Nao redefine fronteiras de `NFC-e`, `DANFE`, `QR Code` ou assinatura.
- Fecha apenas o que ja estava residual nas tasks oficiais de `007` e `010`, sem recriar trabalho ja concluido na origem.

## Spec `007` - NFe Operational MVP

### Estado auditado de origem

- `T037` em [specs/007-nfe-operational-mvp/tasks.md](/home/linkiez/Projetos/nfe_sdk/specs/007-nfe-operational-mvp/tasks.md) ja aparece como concluida.
- O roadmap permanecia stale ao tratar a spec como `em execucao`.

### Checklist de saida

- Confirmar que `T037` segue marcada como concluida no artefato de origem.
- Registrar a reconciliacao canonica em `specs/017-close-operational-specs/research.md`.
- Reexecutar `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build` e `npm run validate:tarball` apenas se a prova de origem estiver ausente, stale ou nao reproduzivel.

### Criterio de fechamento minimo

- A origem continua marcando `T037` como concluida ou registra bloqueio local objetivo se um rerun realmente for necessario.
- A spec pode migrar de `em execucao` para `implementada` no registro do roadmap.

## Spec `010` - NFC-e National Core

### Estado auditado de origem

- `T002` em [specs/010-nfce-national-core/tasks.md](/home/linkiez/Projetos/nfe_sdk/specs/010-nfce-national-core/tasks.md) ja aparece como concluida.
- Os arquivos `.gitkeep` residuais previstos inicialmente nao existem mais no repositorio e a divergencia remanescente e editorial.

### Checklist de saida

- Confirmar que `T002` segue marcada como concluida no artefato de origem.
- Registrar em `specs/017-close-operational-specs/research.md` que a ausencia dos `.gitkeep` virou redundancia editorial e nao backlog tecnico.
- Criar os arquivos residuais apenas se a auditoria futura provar que eles voltaram a ser necessarios.

### Criterio de fechamento minimo

- A necessidade do scaffolding residual fica formalmente encerrada por redundancia comprovada ou os arquivos voltam a existir quando a auditoria realmente exigir.
- A spec pode migrar de `em execucao` para `implementada` no registro do roadmap.

## Ordem pratica de execucao

1. Auditar primeiro as tasks de origem e o status stale do roadmap.
2. Registrar a evidencia canonica de reconciliacao em `specs/017-close-operational-specs/research.md`.
3. Atualizar depois [docs/roadmap/specs-implementacao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/specs-implementacao.md) e [docs/roadmap/specs-pendencias-abertas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/specs-pendencias-abertas.md) para remover o estado residual.

## Regra de uso

- Se algum comando da spec `007` falhar em um rerun realmente necessario, a iteracao continua sendo de fechamento e nao deve abrir escopo novo sem primeiro registrar a falha como defeito local.
- Se a spec `010` ja estiver materialmente coberta pelo estado atual do repositorio, a saida correta e registrar a redundancia e encerrar a divergencia editorial, nao criar backlog adicional.
