# Quickstart: External Table Policy

## 1. Confirm the active planning context on `main`

Trabalhe no branch atual `main`, sempre com o override do Spec Kit para esta feature:

```bash
git branch --show-current
sed -n '1,260p' specs/018-external-table-policy/spec.md
sed -n '1,260p' specs/018-external-table-policy/plan.md
```

Se algum script do Spec Kit validar branch, use `SPECIFY_FEATURE=018-external-table-policy` em vez de criar branch dedicada.

## 2. Read the canonical and supporting roadmap sources first

Antes de editar qualquer arquivo, confirme o estado da politica canonica e dos anexos de apoio:

```bash
sed -n '1,260p' docs/roadmap/politica-tabelas-externas.md
sed -n '1,240p' docs/roadmap/proximas-iteracoes-recomendadas.md
sed -n '1,240p' docs/roadmap/criterios-promocao.md
sed -n '1,260p' docs/roadmap/rtm-cobertura-oficial.md
sed -n '1,260p' docs/roadmap/portal-documentos-vigentes.md
```

O foco desta slice e `RTM-010`. Nao abra nova frente de runtime, schema ou contrato publico.

## 3. Update the canonical policy document before anything else

Faça a maior parte da implementacao em [docs/roadmap/politica-tabelas-externas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/politica-tabelas-externas.md), garantindo que cada grupo priorizado passe a expor:

- fonte oficial primaria
- baseline vigente observada
- data de publicacao observada
- data de vigencia quando houver
- cadence minima de revisao
- classificacao conservadora entre `tooling`, `documentacao`, watchlist e promocao excepcional futura

Se houver ambiguidade oficial sobre revogacao ou vigencia, registre a ambiguidade. Nao a resolva por inferencia.

## 4. Align only the roadmap references that need to stay consistent

Depois da politica canonica, ajuste apenas os anexos que sustentam `RTM-010` para manter rastreabilidade consistente:

- [docs/roadmap/proximas-iteracoes-recomendadas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md)
- [docs/roadmap/rtm-cobertura-oficial.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/rtm-cobertura-oficial.md)
- [docs/roadmap/portal-documentos-vigentes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-documentos-vigentes.md)

Esses arquivos devem referenciar, apoiar ou localizar a politica. Eles nao devem virar outro registro canonico da baseline.

## 4A. Handle support-only and `UF`-delta groups explicitly

Durante a implementacao, trate os grupos assim:

- `cbs-ibs`, `payment-methods`, `ncm-utrib`, `anp` e `cfop`: permanecem em `tooling` por padrao, com baseline auditavel e sem promessa de consumo em runtime.
- `fcp` e `municipios`: permanecem em `documentacao` + `tooling` enquanto o delta por `UF` nao estiver reconciliado o suficiente para uma futura slice propria.
- Se uma publicacao oficial nao deixar clara a revogacao ou a vigencia efetiva, marque o status como ambiguo ou coexistente na politica canonica em vez de preencher a lacuna por inferencia.
- Use [docs/roadmap/portal-documentos-vigentes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-documentos-vigentes.md) apenas para apoiar datas observadas e proveniencia; qualquer decisao de baseline continua pertencendo a [docs/roadmap/politica-tabelas-externas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/politica-tabelas-externas.md).

## 5. Keep spec-local artifacts as evidence only

Use [specs/018-external-table-policy/research.md](/home/linkiez/Projetos/nfe_sdk/specs/018-external-table-policy/research.md) e [specs/018-external-table-policy/data-model.md](/home/linkiez/Projetos/nfe_sdk/specs/018-external-table-policy/data-model.md) para justificar a estrutura da implementacao e orientar a geracao de tasks. Nao replique neles a politica completa nem crie contrato externo novo.

## 6. Run focused validation only

Depois das edicoes, rode checks proporcionais ao slice:

```bash
npx prettier --check specs/018-external-table-policy/*.md docs/roadmap/politica-tabelas-externas.md docs/roadmap/proximas-iteracoes-recomendadas.md docs/roadmap/rtm-cobertura-oficial.md docs/roadmap/portal-documentos-vigentes.md .github/copilot-instructions.md
npm run docs:links
SPECIFY_FEATURE=018-external-table-policy .specify/scripts/bash/setup-tasks.sh --json
```

Se `setup-tasks.sh` continuar falhando, trate isso como bloqueio imediato da etapa de planejamento e corrija primeiro os artefatos da spec antes de ampliar o escopo.

## 7. Preserve scope discipline

Durante toda a execucao:

- nao altere `src/index.ts`, `src/public-contract.ts`, `package.json` ou outros exports publicos
- nao introduza sincronizacao automatica de tabelas externas
- nao gere schemas, contratos de runtime ou fixtures novos
- nao transforme dados externos em dependencia obrigatoria do pacote

## 8. Completion criteria for task generation

Esta etapa de planejamento esta pronta para gerar tasks quando:

- `plan.md`, `research.md`, `data-model.md` e `quickstart.md` estiverem preenchidos
- a referencia do agente em `.github/copilot-instructions.md` apontar para esta plan
- a politica canonica continuar explicitamente dona do conteudo de `RTM-010`
- o rerun de `setup-tasks.sh` com `SPECIFY_FEATURE=018-external-table-policy` concluir sem erro
