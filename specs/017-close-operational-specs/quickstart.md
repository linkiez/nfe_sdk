# Quickstart: Close Operational Specs

## 1. Confirm the active feature context

Antes de executar qualquer fechamento, confirme que o contexto ativo do Spec Kit aponta para a spec `017`:

```bash
cat .specify/feature.json
sed -n '1,260p' specs/017-close-operational-specs/spec.md
sed -n '1,260p' specs/017-close-operational-specs/plan.md
```

## 2. Verify the residual scope before editing anything

Leia apenas os artefatos que definem a iteracao de fechamento:

```bash
sed -n '1,240p' docs/roadmap/checklist-fechamento-007-010.md
sed -n '1,240p' docs/roadmap/specs-pendencias-abertas.md
sed -n '1,240p' docs/roadmap/specs-implementacao.md
sed -n '1,240p' specs/007-nfe-operational-mvp/tasks.md
sed -n '1,200p' specs/010-nfce-national-core/tasks.md
```

O objetivo deste slice nao e criar nova funcionalidade. Ele reconcilia o roadmap com o estado real dos artefatos de origem e so reabre execucao local quando a evidencia estiver ausente ou stale.

## 3. Audit spec `010` before touching any scaffold

Siga o checklist mecanico da spec `010` antes do gate pesado de `007`:

```bash
ls -la tests/unit/nfce
ls -la tests/integration/nfce
ls -la tests/fixtures/nfce
```

Se os arquivos `.gitkeep` faltarem e ainda fizerem sentido, crie-os. Se o scaffold ja estiver coberto materialmente pelos arquivos reais ou se a task de origem ja estiver fechada, documente a redundancia editorial antes de criar qualquer novo artefato.

## 4. Reuse existing proof for spec `007` before rerunning the gate

Execute o conjunto canonico de validacao exigido por `T037` apenas se a evidencia de origem estiver ausente, stale ou nao reproduzivel:

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
npm run validate:tarball
```

Se algum comando falhar, trate o resultado como bloqueio local do slice `017`, nao como gatilho para abrir uma nova frente funcional.

## 5. Update status records only after evidence exists

Depois que `010` e/ou `007` cumprirem seus criterios:

- atualize `specs/010-nfce-national-core/tasks.md` e `specs/007-nfe-operational-mvp/tasks.md` apenas se a auditoria mostrar necessidade real de registrar ou corrigir a evidencia de origem
- atualize `docs/roadmap/specs-implementacao.md`
- atualize `docs/roadmap/specs-pendencias-abertas.md`
- mantenha a regra de fechamento independente: uma spec pode migrar para `implementada` mesmo se a outra permanecer como bloqueio local documentado

## 6. Preserve scope discipline

Durante toda a iteracao:

- nao altere `src/index.ts`, `package.json`, `src/public-contract.ts` ou qualquer outra superficie publica, salvo se um defeito local real do gate de `007` exigir reparo minimo
- nao abra backlog novo de `NFC-e`, `DANFE`, `QR Code`, assinatura, contingencia ou `UFs`
- nao toque artefatos gerados em `src/classes/`, `src/interfaces/`, `src/types/` ou `src/enums/`

## 7. Define completion correctly

A iteracao conta como concluida quando:

- `010` deixa de aparecer como aberta no roadmap quando a auditoria confirmar que o scaffold residual ja estava satisfeito ou quando a redundancia editorial ficar registrada
- `007` tem uma evidencia canonica apontada ou um bloqueio local objetivo quando a prova precisar ser refeita
- o roadmap deixa de tratar as duas specs como abertas por mera formalidade
- a proxima iteracao recomendada volta a representar backlog real, nao resquicio administrativo
