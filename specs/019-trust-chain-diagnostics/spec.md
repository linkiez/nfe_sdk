# Feature Specification: Trust Chain Diagnostics

**Feature Branch**: `019-trust-chain-diagnostics`

**Created**: 2026-05-21

**Status**: Draft

**Input**: User description: "analisar novo roadmap e fazer spec com novo slice de implementacao"

## Clarifications

### Session 2026-05-21

- Q: Qual artefato deve concentrar a trilha diagnostica canonica deste slice de `RTM-018`/`RFL-007`? → A: Criar um novo artefato canonico em `docs/roadmap/` para o slice.
- Q: Qual deve ser o inventario canonico inicial deste slice? → A: Manter o inventario canonico estrito a cadeias `www`/`www1`, pagina de downloads, assinador e visualizador `DF-e`, usando `SVAN`, `SVRS`, `WSDL` e `SSL` apenas como evidencia de apoio.
- Q: A entrega principal deve incluir apenas alinhamento editorial ou tambem um runbook operacional reutilizavel? → A: Entrega editorial mais runbook/checklist humano de diagnostico, sem nova CLI.

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Diagnosticar interoperabilidade com uma trilha canonica (Priority: P1)

Como integrador ou mantenedor que precisa entender falhas de interoperabilidade, quero uma trilha canonica para trust chain, `WSDL` e downloads auxiliares para diagnosticar onboarding tecnico e conectividade sem tratar utilitarios externos como dependencia implicita do runtime.

**Why this priority**: A linha `5` das proximas iteracoes recomendadas e o recorte `RFL-007` apontam que `RTM-018` ainda depende de uma amarracao operacional entre cadeias `www`/`www1`, assinador, visualizador `DF-e` e a leitura tecnica de interoperabilidade.

**Independent Test**: Um revisor consegue abrir o artefato canonico do slice e identificar, em uma leitura unica, o papel diagnostico de cada artefato oficial priorizado, sua proveniencia observada e o que continua fora do runtime.

**Acceptance Scenarios**:

1. **Given** os artefatos oficiais de trust chain e downloads priorizados pelo roadmap, **When** o mantenedor consultar a documentacao canonica do slice, **Then** ele encontra classificacao, proveniencia observada, contexto de uso e limite operacional para cada artefato sem precisar inferir papel tecnico por conta propria.
2. **Given** uma duvida de onboarding tecnico relacionada a certificado, `SSL`, `WSDL` ou download auxiliar, **When** o integrador seguir a trilha diagnostica publicada, **Then** ele consegue distinguir o que e precondicao externa, o que e apoio ao integrador e o que nao faz parte do contrato runtime do SDK.

---

### User Story 2 - Alinhar roadmap e promocao sem inflar o contrato publico (Priority: P2)

Como mantenedor do roadmap, quero alinhar `RTM-003`, `RTM-018` e os anexos correlatos para que trust chain e artefatos auxiliares avancem como `tooling` + `documentacao`, sem criar promessa silenciosa de API, automacao de certificados ou dependencia de binarios externos.

**Why this priority**: O roadmap ja trata esse tema de forma conservadora, mas a lacuna aberta em `RTM-018` ainda pede uma ligacao melhor entre trust chain, interoperabilidade e fronteiras do pacote.

**Independent Test**: Um revisor consegue comparar os anexos do roadmap tocados pelo slice e confirmar que todos usam a mesma classificacao, o mesmo criterio de promocao e a mesma fronteira entre diagnostico e runtime.

**Acceptance Scenarios**:

1. **Given** os anexos do roadmap que mencionam trust chain, cadeias ou downloads auxiliares, **When** o slice for aplicado, **Then** esses anexos passam a usar uma leitura coerente de classificacao, promocao e fronteira operacional.
2. **Given** um artefato auxiliar como assinador ou visualizador `DF-e`, **When** o roadmap atualizado for consultado, **Then** ele aparece como apoio diagnostico e de interoperabilidade, e nao como dependencia obrigatoria do contrato publico.

---

### User Story 3 - Explicitar os limites com assinatura, transporte e ambientes (Priority: P3)

Como revisor tecnico, quero entender onde esta slice termina e onde continuam assinatura expandida, transporte `SOAP`, ambientes compartilhados, autenticacao mutua e credenciamento, para que futuras iteracoes nao reaproveitem a documentacao de forma ambigua.

**Why this priority**: `RTM-003`, `RTM-012` e `RTM-018` se cruzam na mesma superficie de interoperabilidade; sem boundary clara, a slice pode ser lida como se fechasse trust chain de runtime ou conectividade por `UF`.

**Independent Test**: Um revisor consegue localizar no material da feature quais dependencias continuam externas e quais follow-ups permanecem necessarios para assinatura, transporte e diagnostico de ambiente.

**Acceptance Scenarios**:

1. **Given** um item ainda fora do recorte, como automacao de trust chain, aquisicao de certificado, `A3`, consumo completo de `WSDL` ou credenciamento por `UF`, **When** a spec for consultada, **Then** esse item permanece explicitamente fora do escopo atual.
2. **Given** as specs anteriores de assinatura, transporte e hardening, **When** esta spec for lida em conjunto com o roadmap, **Then** a fronteira entre apoio diagnostico, precondicao externa e runtime additive fica clara e nao contraditoria.

### Edge Cases

- O que acontece quando o portal mantem downloads auxiliares vigentes, mas sem data clara de substituicao ou revogacao?
- Como a documentacao deve tratar cadeias `www` e `www1` quando ambas continuam relevantes, mas com datas observadas diferentes?
- Como a trilha diagnostica deve se comportar quando um passo depende de `WSDL`, `SSL` ou autenticacao mutua, mas nao existe promessa de execucao automatica pelo SDK?
- Como evitar que utilitarios oficiais de download sejam lidos como binarios obrigatorios para o uso da API publica?

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: O sistema MUST criar uma trilha canonica para o slice `RFL-007`, cobrindo trust chain, `WSDL` e artefatos auxiliares de interoperabilidade do portal nacional.
- **FR-001A**: O sistema MUST materializar essa trilha canonica em um novo artefato proprio dentro de `docs/roadmap/`, em vez de reaproveitar como registro principal anexos que ja sao canonicos para proveniencia, promocao ou inventario.
- **FR-002**: O sistema MUST limitar o inventario inicial deste slice aos artefatos priorizados no roadmap para `RTM-018`: cadeias `www` e `www1`, assinador, visualizador `DF-e` e superficie oficial de downloads.
- **FR-002A**: O inventario canonico inicial MUST permanecer estrito aos artefatos nacionais explicitamente listados no roadmap para `RTM-018`, sem promover `SVAN`, `SVRS`, referencias de `WSDL` ou requisitos de `SSL` a itens principais do inventario.
- **FR-002B**: `SVAN`, `SVRS`, `WSDL` e `SSL` MUST aparecer apenas como evidencias de apoio e boundary de interoperabilidade, nunca como centro do inventario canonico desta slice.
- **FR-002C**: Referencias tecnicas de `WSDL` e `SSL` MUST sustentar a trilha diagnostica apenas como evidencias de apoio e boundary de interoperabilidade ligadas ao inventario canonico principal.
- **FR-003**: O sistema MUST registrar para cada artefato do inventario pelo menos classificacao operacional, proveniencia observada, papel tecnico principal e limite de uso no pacote.
- **FR-004**: O sistema MUST descrever como trust chain e artefatos auxiliares participam do diagnostico tecnico, onboarding e interoperabilidade sem se tornarem dependencia implicita do runtime.
- **FR-005**: O sistema MUST publicar um fluxo diagnostico repetivel que conecte cadeia de certificados, downloads auxiliares e fronteiras de interoperabilidade a sintomas tecnicos observaveis pelo integrador.
- **FR-005A**: O fluxo diagnostico MUST incluir um runbook ou checklist humano curto e reutilizavel, mantido como artefato documental do slice, sem introduzir nova CLI ou automacao executavel nesta fase.
- **FR-006**: O sistema MUST distinguir explicitamente os itens que permanecem como precondicoes externas, como aquisicao de certificado, configuracao `SSL`, autenticacao mutua, credenciamento e variacoes por ambiente ou `UF`.
- **FR-007**: O sistema MUST alinhar os anexos do roadmap impactados por `RTM-003` e `RTM-018` para que usem a mesma leitura de classificacao, promocao e lacuna aberta para o slice.
- **FR-008**: O sistema MUST preservar trust chain e downloads auxiliares como `tooling` + `documentacao` por padrao, sem prometer automacao de assinatura externa, empacotamento de binarios oficiais ou nova API fiscal publica.
- **FR-009**: O sistema MUST manter rastreabilidade entre esta feature, os temas `RTM-003` e `RTM-018`, a iteracao `5` das proximas recomendacoes e o recorte `RFL-007`.
- **FR-010**: O sistema MUST registrar de forma explicita quais follow-ups continuam necessarios para fechar trust chain mais proxima de runtime, especialmente quando dependerem de assinatura expandida, transporte `SOAP` e boundaries por ambiente.

### Compatibility & Contract Constraints

- **CC-001**: Esta feature nao deve alterar import path `ESM`, export publico, manifesto publicado ou identificador de contrato do consumidor.
- **CC-002**: O slice deve permanecer estritamente em `documentacao` + `tooling`, sem introduzir dependencia obrigatoria de binarios externos, downloads oficiais ou validacao automatica de trust chain no runtime.
- **CC-002A**: O valor operacional desta fase deve ser entregue por artefatos documentais e runbook humano reutilizavel, nao por ferramenta nova, comando de linha de comando ou dependencia executavel adicional.
- **CC-003**: A feature deve preservar as boundaries ja declaradas nas specs `005`, `006`, `013` e `014`, especialmente onde assinatura, transporte e hardening ja separaram responsabilidades.
- **CC-004**: O material produzido por esta feature deve continuar additive e conservador: qualquer promocao futura para runtime exigira slice propria, criterio de fallback e validacao especifica.
- **CC-005**: A validacao minima desta feature deve cobrir coerencia entre spec e checklist, formatacao Markdown e integridade de links internos dos artefatos documentais afetados.

### Knowledge Sources & Provenance

- **KS-001**: [docs/roadmap/proximas-iteracoes-recomendadas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md) define a iteracao `5` como proxima frente de `tooling` + `documentacao` para trust chain e artefatos auxiliares.
- **KS-002**: [docs/roadmap/recortes-funcionais-prioritarios.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/recortes-funcionais-prioritarios.md) define `RFL-007` como o recorte funcional minimo desta continuidade.
- **KS-003**: [docs/roadmap/rtm-cobertura-oficial.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/rtm-cobertura-oficial.md), [docs/roadmap/criterios-promocao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/criterios-promocao.md), [docs/roadmap/portal-documentos-vigentes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-documentos-vigentes.md) e [docs/roadmap/portal-nacional-inventario.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-nacional-inventario.md) sustentam a classificacao e a proveniencia oficial do slice.
- **KS-003A**: O novo artefato canonico do slice em `docs/roadmap/` deve concentrar a leitura diagnostica principal; `portal-documentos-vigentes`, `criterios-promocao` e `portal-nacional-inventario` permanecem como anexos de apoio com papeis distintos.
- **KS-004**: [specs/005-add-digital-signing/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/005-add-digital-signing/spec.md), [specs/014-expand-signing-coverage/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/014-expand-signing-coverage/spec.md) e [docs/roadmap/specs-pendencias-abertas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/specs-pendencias-abertas.md) delimitam o que ainda pertence a assinatura expandida e nao pode ser tratado como resolvido por este slice.
- **KS-005**: Sempre que um artefato oficial tiver vigencia ambigua, depender de ambiente autenticado ou variar por infraestrutura externa, essa lacuna deve permanecer documentada como boundary, e nao como garantia implicita do SDK.

### Key Entities _(include if feature involves data)_

- **Trust Chain Artifact Group**: conjunto documental que agrupa cadeias `www`/`www1`, referencias de `SSL` e pistas de interoperabilidade associadas ao portal nacional.
- **Trust Chain Diagnostic Artifact**: novo artefato canonico em `docs/roadmap/` responsavel por consolidar a trilha diagnostica do slice, seus grupos priorizados e seus limites de uso.
- **Canonical Diagnostic Inventory**: conjunto inicial restrito de cadeias `www`/`www1`, superficie de downloads, assinador e visualizador `DF-e`, usado como centro do slice.
- **Auxiliary Download Artifact**: utilitario oficial como assinador ou visualizador `DF-e`, tratado como apoio diagnostico ao integrador.
- **Interoperability Diagnostic Step**: etapa documentada que conecta um sintoma tecnico observavel a uma verificacao de cadeia, download, `WSDL`, ambiente ou boundary externa.
- **Diagnostic Runbook**: checklist humano curto que guia o integrador pela trilha de diagnostico priorizada, sem automatizar etapas nem virar CLI do pacote.
- **External Dependency Boundary**: declaracao explicita do que continua dependendo de infraestrutura externa, credenciamento, ambiente autenticado ou ferramenta oficial fora do pacote.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: 100% dos artefatos priorizados no inventario desta slice possuem classificacao operacional, proveniencia observada e limite de uso claramente registrados.
- **SC-002**: Um revisor consegue localizar, em menos de 5 minutos, o papel diagnostico de cadeias `www`/`www1`, assinador e visualizador `DF-e` sem consultar mais de dois anexos secundarios.
- **SC-003**: Os anexos do roadmap tocados pelo slice mantem classificacao coerente de `tooling` + `documentacao` para trust chain e artefatos auxiliares, sem contradicoes com `RTM-003` e `RTM-018`.
- **SC-004**: A documentacao final explicita 100% dos itens que continuam fora do recorte atual, incluindo automacao de trust chain, dependencias de runtime, credenciamento e particularidades por ambiente.
- **SC-005**: O slice melhora a rastreabilidade entre roadmap, downloads oficiais e diagnostico tecnico sem adicionar nova API publica nem nova promessa de execucao automatica no pacote.

## Assumptions

- Esta continuidade permanece em `documentacao` + `tooling`; nenhuma capacidade nova de runtime sera proposta nesta fase.
- O inventario inicial sera pequeno e conservador, limitado aos artefatos ja destacados pelo roadmap como prioritarios para `RTM-018`.
- `SVAN`, `SVRS`, `WSDL` e `SSL` entram nesta fase apenas como evidencias de apoio para interoperabilidade e boundaries, e nao como itens principais do inventario canonico.
- O slice criara um novo artefato canonico em `docs/roadmap/` para evitar sobrepor os papeis ja estabelecidos de proveniencia, promocao e inventario dos anexos existentes.
- O valor principal do slice esta em diagnostico repetivel e onboarding tecnico, nao em automatizar consumo de utilitarios externos dentro do SDK.
- A forma minima de reutilizacao operacional desta fase sera um runbook ou checklist humano curto, sem criar ferramenta nova nem ampliar o contrato executavel do repositorio.
- As specs de assinatura e transporte anteriores continuam sendo a referencia para tudo o que ultrapassar a fronteira documental e de tooling desta feature.
