# Quickstart: Trust Chain Diagnostics

## 1. Confirm the active planning context on `main`

Trabalhe no branch atual `main`, sempre com o override do Spec Kit para esta feature:

```bash
git branch --show-current
sed -n '1,260p' specs/019-trust-chain-diagnostics/spec.md
sed -n '1,260p' specs/019-trust-chain-diagnostics/plan.md
```

Se algum script do Spec Kit validar branch, use `SPECIFY_FEATURE=019-trust-chain-diagnostics` em vez de criar branch dedicada.

## 2. Read the canonical and supporting roadmap sources first

Antes de editar qualquer arquivo, confirme o estado dos anexos que puxam `RTM-018` e `RFL-007`:

```bash
sed -n '1,220p' docs/roadmap/proximas-iteracoes-recomendadas.md
sed -n '20,90p' docs/roadmap/recortes-funcionais-prioritarios.md
sed -n '20,60p' docs/roadmap/rtm-cobertura-oficial.md
sed -n '79,110p' docs/roadmap/portal-documentos-vigentes.md
sed -n '1,80p' docs/roadmap/portal-nacional-inventario.md
sed -n '1,200p' docs/roadmap/criterios-promocao.md
```

O foco desta slice e trust chain e diagnostico de interoperabilidade. Nao abra nova frente de runtime, assinatura executavel, `SOAP` ou cobertura por `UF`.

## 3. Create the new canonical roadmap artifact first

Faça a maior parte da implementacao em [docs/roadmap/diagnostico-trust-chain.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/diagnostico-trust-chain.md), garantindo que o artefato passe a expor:

- objetivo do slice e relacao com `RTM-018` e `RFL-007`
- inventario canonico inicial restrito a `www`, `www1`, superficie de downloads, assinador e visualizador `DF-e`
- classificacao operacional, data observada, papel tecnico e limite de uso de cada item
- referencias minimas de apoio para `WSDL`, `SSL` e superficies autenticadas, mantendo `SVAN` e `SVRS` como contexto de ambiente e nunca como centro do inventario canonico
- follow-ups explicitamente fora do recorte atual

Se houver ambiguidade oficial sobre substituicao, vigencia ou disponibilidade de um download, registre a ambiguidade. Nao a resolva por inferencia.

## 4. Publish the short human runbook second

Depois do artefato canonico, publique um checklist curto em [docs/roadmap/checklist-diagnostico-trust-chain.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/checklist-diagnostico-trust-chain.md) com passos humanos reutilizaveis para:

- identificar o sintoma tecnico principal
- localizar o item do inventario correspondente
- verificar a proveniencia e a data observada do artefato
- distinguir precondicao externa de comportamento do SDK
- encaminhar follow-up para assinatura, transporte ou ambiente quando necessario

Esse checklist nao deve virar CLI nem exigir binario novo dentro do repositório.

## 5. Align only the roadmap references that need to stay consistent

Depois do artefato canonico e do checklist, ajuste apenas os anexos que sustentam diretamente `RTM-018`:

- [docs/roadmap/proximas-iteracoes-recomendadas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md)
- [docs/roadmap/rtm-cobertura-oficial.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/rtm-cobertura-oficial.md)
- [docs/roadmap/criterios-promocao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/criterios-promocao.md)
- [docs/roadmap/portal-documentos-vigentes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-documentos-vigentes.md)
- [docs/roadmap/portal-nacional-inventario.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-nacional-inventario.md)

Esses arquivos devem referenciar, apoiar ou localizar a trilha diagnostica. Eles nao devem virar outro registro canonico do slice.

Mantenha a ligacao explicita com a iteracao `5` e com `RFL-007` no artefato canonico e nas notas de sequenciamento para que a rastreabilidade nao dependa apenas da spec local.

## 6. Keep support evidence and boundaries explicit

Durante a implementacao, trate os grupos assim:

- `www`, `www1`, downloads, assinador e visualizador `DF-e`: permanecem como centro do inventario canonico desta fase.
- `SVAN`, `SVRS`, `WSDL` e `SSL`: permanecem como evidencias de apoio e boundaries de interoperabilidade, sem virar itens centrais do inventario.
- credenciamento, autenticacao mutua, ambientes autenticados e automacao de trust chain: permanecem como dependencias externas ou follow-ups fora do recorte.
- qualquer passo que dependa de ferramenta externa deve ser descrito como apoio operacional, nunca como capacidade do runtime do SDK.

## 7. Keep spec-local artifacts as evidence only

Use [specs/019-trust-chain-diagnostics/research.md](/home/linkiez/Projetos/nfe_sdk/specs/019-trust-chain-diagnostics/research.md) e [specs/019-trust-chain-diagnostics/data-model.md](/home/linkiez/Projetos/nfe_sdk/specs/019-trust-chain-diagnostics/data-model.md) para justificar a estrutura da implementacao e orientar a geracao de tasks. Nao replique neles o artefato canonico completo nem crie contrato executavel novo.

## 8. Run focused validation only

Depois das edicoes, rode checks proporcionais ao slice:

```bash
npx prettier --check specs/019-trust-chain-diagnostics/*.md specs/019-trust-chain-diagnostics/contracts/*.md docs/roadmap/diagnostico-trust-chain.md docs/roadmap/checklist-diagnostico-trust-chain.md docs/roadmap/proximas-iteracoes-recomendadas.md docs/roadmap/rtm-cobertura-oficial.md docs/roadmap/criterios-promocao.md docs/roadmap/portal-documentos-vigentes.md docs/roadmap/portal-nacional-inventario.md .github/copilot-instructions.md
npm run docs:links
SPECIFY_FEATURE=019-trust-chain-diagnostics .specify/scripts/bash/setup-tasks.sh --json
```

Se `setup-tasks.sh` falhar, trate isso como bloqueio imediato da etapa de planejamento e corrija primeiro os artefatos da spec antes de ampliar o escopo.

## 9. Preserve scope discipline

Durante toda a execucao:

- nao altere `src/index.ts`, `src/public-contract.ts`, `package.json` ou outros exports publicos
- nao introduza nova CLI, binario wrapper ou automacao de trust chain
- nao empacote downloads oficiais como dependencia do repositório
- nao trate `WSDL`, `SSL`, `SVAN` ou `SVRS` como itens centrais do inventario canonico
- nao transforme o checklist operacional em promessa de suporte runtime

## 10. Completion criteria for task generation

Esta etapa de planejamento esta pronta para gerar tasks quando:

- `plan.md`, `research.md`, `data-model.md` e `quickstart.md` estiverem preenchidos
- o contrato de entregaveis documentais estiver criado em `contracts/`
- a referencia do agente em `.github/copilot-instructions.md` apontar para esta plan
- o novo artefato canonico e o checklist curto estiverem definidos como destinos primarios da implementacao
- o rerun de `setup-tasks.sh` com `SPECIFY_FEATURE=019-trust-chain-diagnostics` concluir sem erro
