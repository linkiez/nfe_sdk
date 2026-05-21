# Research: Trust Chain Diagnostics

## Decision 1: Create a dedicated canonical roadmap artifact for the diagnostic slice

- **Decision**: Criar [docs/roadmap/diagnostico-trust-chain.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/diagnostico-trust-chain.md) como artefato canonico da trilha diagnostica de `RTM-018` e `RFL-007`.
- **Rationale**: A propria clarificacao da spec decidiu que o slice nao deve reutilizar como registro principal anexos que ja sao canonicos para proveniencia, promocao ou inventario. Um artefato proprio reduz drift e deixa tasks e criterios de aceite mais objetivos.
- **Alternatives considered**:
  - Reusar [docs/roadmap/portal-documentos-vigentes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-documentos-vigentes.md) como centro do slice: rejeitado porque esse anexo ja tem papel de proveniencia e datas observadas.
  - Reusar [docs/roadmap/criterios-promocao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/criterios-promocao.md): rejeitado porque ele define regra de promocao, nao inventario nem fluxo diagnostico.
  - Centralizar tudo na spec: rejeitado porque contradiz a decisao de manter o roadmap como dono do conteudo implementavel.

## Decision 2: Keep the canonical inventory minimal and national-first

- **Decision**: Limitar o inventario canonico inicial a cadeias `www`/`www1`, superficie de downloads, assinador e visualizador `DF-e`.
- **Rationale**: Esses artefatos aparecem explicitamente como o nucleo da iteracao `5` em [proximas-iteracoes-recomendadas](../../docs/roadmap/proximas-iteracoes-recomendadas.md) e como cobertura principal de `RTM-018` em [rtm-cobertura-oficial](../../docs/roadmap/rtm-cobertura-oficial.md).
- **Alternatives considered**:
  - Incluir `SVAN` e `SVRS` como itens principais do inventario: rejeitado porque ampliaria o slice para ambientes e interoperabilidade compartilhada antes de fechar o nucleo nacional.
  - Incluir `WSDL` e `SSL` como itens principais: rejeitado porque eles funcionam melhor como evidencias de apoio e boundary, nao como centro do inventario.

## Decision 3: Deliver a short human runbook, not a new CLI

- **Decision**: Publicar um checklist humano curto em [docs/roadmap/checklist-diagnostico-trust-chain.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/checklist-diagnostico-trust-chain.md), sem introduzir comando novo, automacao executavel ou dependencia de binarios externos.
- **Rationale**: O valor do slice esta em diagnostico repetivel e onboarding tecnico. Um runbook curto atende essa necessidade sem inflar o repositório com uma ferramenta cuja fronteira ainda nao foi promovida para runtime.
- **Alternatives considered**:
  - Entrega apenas editorial no artefato canonico: rejeitado porque a spec ja decidiu que o slice precisa de uma forma humana reutilizavel.
  - Criar uma CLI nova: rejeitado porque violaria a classificacao conservadora de `tooling` + `documentacao` e abriria escopo tecnico desproporcional.

## Decision 4: Model `SVAN`, `SVRS`, `WSDL`, and `SSL` as supporting evidence only

- **Decision**: Tratar `SVAN`, `SVRS`, `WSDL` e `SSL` como evidencias de apoio e boundary de interoperabilidade em vez de itens principais do inventario canonico.
- **Rationale**: Esses elementos continuam relevantes para `RTM-003` e `RTM-012`, mas nesta slice servem para contextualizar limites e follow-ups, nao para virar artefatos centrais do diagnostico nacional minimo.
- **Alternatives considered**:
  - Tornar esses itens parte do inventario canonico: rejeitado porque mistura contexto de ambiente e precondicao externa com downloads e trust chain observavel do portal nacional.

## Decision 4A: Require minimum interoperability references inside the canonical artifact

- **Decision**: O artefato canonico deve citar o minimo necessario de `WSDL`, `SSL` e superficies autenticadas apenas para o integrador distinguir boundary externa de inventario principal ja no MVP.
- **Rationale**: O slice precisa fechar um diagnostico reutilizavel sem empurrar toda a explicacao de boundary para um follow-up tardio do checklist ou para specs anteriores.
- **Alternatives considered**:
  - Concentrar toda a boundary apenas em `quickstart.md` e nas specs locais: rejeitado porque deixaria o artefato canonico incompleto para leitura isolada.

## Decision 5: Align only the roadmap references that materially sustain `RTM-018`

- **Decision**: Ajustar apenas [docs/roadmap/proximas-iteracoes-recomendadas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md), [docs/roadmap/rtm-cobertura-oficial.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/rtm-cobertura-oficial.md), [docs/roadmap/criterios-promocao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/criterios-promocao.md), [docs/roadmap/portal-documentos-vigentes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-documentos-vigentes.md) e [docs/roadmap/portal-nacional-inventario.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-nacional-inventario.md) quando precisarem refletir a nova trilha diagnostica.
- **Rationale**: Esses anexos sustentam sequenciamento, cobertura, promocao, proveniencia e inventario da superficie oficial. Alinhar alem deles abriria escopo sem necessidade para task generation.
- **Alternatives considered**:
  - Atualizar anexos adicionais de `UF` ou ambiente: rejeitado porque a slice nao fecha `RTM-012` nem `RTM-011`.
  - Atualizar apenas o artefato canonico novo: rejeitado porque deixaria a leitura de `RTM-018` parcialmente incoerente nos anexos principais.

## Current Gap Snapshot

- [docs/roadmap/rtm-cobertura-oficial.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/rtm-cobertura-oficial.md) ja registra que `RTM-018` esta documentado e parcialmente absorvido por `013`, mas ainda carece de ligacao explicita com trust chain e interoperabilidade tecnica.
- [docs/roadmap/portal-documentos-vigentes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-documentos-vigentes.md) ja lista cadeias `www`/`www1`, visualizador `DF-e` e assinador, mas hoje nao existe um artefato canonico que os transforme em trilha diagnostica reutilizavel.
- [docs/roadmap/portal-nacional-inventario.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-nacional-inventario.md) ja identifica `download.aspx` como superficie de apoio ao integrador e evidencia de interoperabilidade, mas ainda sem checklist operacional curto conectado ao roadmap.
- [specs/014-expand-signing-coverage/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/014-expand-signing-coverage/spec.md) e [docs/roadmap/specs-pendencias-abertas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/specs-pendencias-abertas.md) deixam claro que assinatura expandida, `DV`, `hashCSRT` e trust chain de runtime continuam como follow-up separado.
- O `RFL-007` ja existe como recorte funcional nomeado, mas ainda precisava aparecer explicitamente no artefato canonico implementavel para evitar que a rastreabilidade ficasse so na spec e no plano.

## Implementation Outcome Expected by Tasks

- Criar o novo artefato canonico de roadmap para `RTM-018`, com inventario minimo, classificacao operacional e limites de uso do pacote.
- Garantir que o artefato canonico ja carregue o minimo de referencias de apoio para `WSDL`, `SSL` e superficies autenticadas sem promover esses itens ao centro do inventario.
- Publicar um checklist humano curto que converta a trilha diagnostica em sequencia pratica de onboarding e troubleshooting.
- Alinhar apenas os anexos de roadmap que sustentam `RTM-018`, preservando `SVAN`, `SVRS`, `WSDL` e `SSL` como evidencias de apoio e boundary.
- Manter `plan.md`, `research.md`, `data-model.md`, `quickstart.md` e o contrato desta spec como apoio operacional e rastreabilidade, nao como destino canonico da politica.
