# Checklist de Fechamento das Specs 007 e 010

## Objetivo

Transformar a iteracao `1` do roadmap em uma saida executavel e auditavel, deixando explicito o que falta para as specs `007` e `010` deixarem de aparecer como abertas.

## Escopo desta iteracao

- Nao abre backlog novo de `runtime`.
- Nao redefine fronteiras de `NFC-e`, `DANFE`, `QR Code` ou assinatura.
- Fecha apenas o que ja esta residual nas tasks oficiais de `007` e `010`.

## Spec `007` - NFe Operational MVP

### Item aberto de origem

- `T037` em [specs/007-nfe-operational-mvp/tasks.md](/home/linkiez/Projetos/nfe_sdk/specs/007-nfe-operational-mvp/tasks.md): rodar e registrar o fluxo completo de validacao.

### Checklist de saida

- Executar `npm run lint` cobrindo o slice operacional de `NFe`.
- Executar `npm run format:check` para o mesmo corte.
- Executar `npm run typecheck` sem regressao no pacote root e nas fachadas operacionais.
- Executar `npm test` com foco no contrato root e nas integracoes listadas pela task `T037`.
- Executar `npm run build` confirmando superficie publica e empacotamento coerentes.
- Executar `npm run validate:tarball` para validar a distribuicao publicada.
- Registrar o resultado no artefato da spec ou no historico imediato da feature, sem deixar a task aberta apenas por ausencia de evidencia.

### Criterio de fechamento minimo

- Todos os comandos acima concluem sem erro.
- A task `T037` deixa de ser o unico item aberto da spec.
- A spec pode migrar de `em execucao` para `implementada` no registro do roadmap.

## Spec `010` - NFC-e National Core

### Item aberto de origem

- `T002` em [specs/010-nfce-national-core/tasks.md](/home/linkiez/Projetos/nfe_sdk/specs/010-nfce-national-core/tasks.md): criar o scaffolding residual de testes e fixtures.

### Checklist de saida

- Criar `tests/unit/nfce/.gitkeep`.
- Criar `tests/integration/nfce/.gitkeep`.
- Criar `tests/fixtures/nfce/.gitkeep`.
- Confirmar que o scaffolding nao conflita com os arquivos reais ja existentes do slice `NFC-e`.
- Registrar a conclusao da task na spec para que ela nao permaneça aberta por formalidade de setup.

### Criterio de fechamento minimo

- Os tres arquivos de scaffolding existem ou a necessidade deles e formalmente encerrada por redundancia comprovada.
- A task `T002` deixa de ser o unico item aberto da spec.
- A spec pode migrar de `em execucao` para `implementada` no registro do roadmap.

## Ordem pratica de execucao

1. Fechar primeiro a spec `010`, porque a pendencia e mecanica e curta.
2. Rodar em seguida o gate final da spec `007`, porque ele depende de ambiente validado e gera a evidencia mais pesada da iteracao.
3. Atualizar depois [docs/roadmap/specs-implementacao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/specs-implementacao.md) e [docs/roadmap/specs-pendencias-abertas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/specs-pendencias-abertas.md) para remover o estado residual.

## Regra de uso

- Se algum comando da spec `007` falhar, a iteracao continua sendo de fechamento e nao deve abrir escopo novo sem primeiro registrar a falha como defeito local.
- Se a spec `010` ja estiver materialmente coberta pelos arquivos existentes, a saida correta e registrar a redundancia e encerrar a task, nao criar backlog adicional.