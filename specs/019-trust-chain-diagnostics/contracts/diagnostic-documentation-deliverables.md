# Contract: Trust Chain Diagnostic Documentation Deliverables

## Purpose

Definir as entregas documentais minimas desta feature para que `RTM-018` e `RFL-007` avancem como `tooling` + `documentacao` sem criar runtime novo, CLI nova ou dependencia implicita de binarios oficiais.

## Canonical Deliverables

### 1. `docs/roadmap/diagnostico-trust-chain.md`

- Deve ser o artefato canonico do slice.
- Deve consolidar objetivo, inventario canonico inicial, classificacao operacional, limites de uso e follow-ups explicitos.
- Deve citar explicitamente a iteracao `5` e `RFL-007` como ancora editorial do slice.
- Deve carregar o minimo necessario de referencias de apoio para `WSDL`, `SSL` e superficies autenticadas sem promover esses elementos a itens centrais do inventario.
- Deve apontar para anexos de apoio quando precisar de proveniencia, promocao ou inventario do portal, sem duplicar o papel canonico deles.

### 2. `docs/roadmap/checklist-diagnostico-trust-chain.md`

- Deve ser o runbook/checklist humano curto da feature.
- Deve transformar a trilha diagnostica em passos reutilizaveis para onboarding tecnico e troubleshooting.
- Nao pode exigir comando novo, binario novo ou automacao executavel como parte da entrega minima.

## Supporting Deliverables

- [docs/roadmap/proximas-iteracoes-recomendadas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md): deve continuar posicionando o slice dentro da sequencia recomendada.
- [docs/roadmap/rtm-cobertura-oficial.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/rtm-cobertura-oficial.md): deve refletir a nova trilha diagnostica como fechamento minimo de `RTM-018`.
- [docs/roadmap/criterios-promocao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/criterios-promocao.md): deve manter a promocao conservadora de trust chain e artefatos auxiliares.
- [docs/roadmap/portal-documentos-vigentes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-documentos-vigentes.md): deve continuar como fonte de proveniencia e datas observadas, nao como artefato canonico do slice.
- [docs/roadmap/portal-nacional-inventario.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-nacional-inventario.md): deve continuar como mapa da superficie `download.aspx` e do portal nacional, nao como trilha diagnostica principal.

## Inventory Contract

O inventario canonico inicial desta feature deve incluir apenas:

- cadeias `www` e `www1`
- superficie oficial de downloads
- assinador
- visualizador `DF-e`

Os seguintes elementos podem aparecer apenas como evidencias de apoio ou boundary:

- `SVAN`
- `SVRS`
- `WSDL`
- `SSL`

## Explicit Non-Goals

- criar nova CLI ou comando executavel
- empacotar downloads oficiais como dependencia do projeto
- automatizar trust chain no runtime
- fechar assinatura expandida, transporte `SOAP`, credenciamento ou ambientes autenticados

## Validation Contract

Para este plano ser considerado pronto para task generation:

- os artefatos documentais acima precisam existir como destinos explicitos da implementacao
- o pacote da spec precisa passar em `prettier --check`
- os links internos precisam continuar validos com `npm run docs:links`
- `SPECIFY_FEATURE=019-trust-chain-diagnostics .specify/scripts/bash/setup-tasks.sh --json` precisa concluir sem erro
