# Feature Specification: NFC-e SP QR Code

**Feature Branch**: `024-nfce-sp-qrcode`

**Created**: 2026-05-21

**Status**: Draft

**Input**: User description: "analisar novo #file:roadmap e fazer spec com novo slice de implementacao. Priorizar runtime"

## Clarifications

### Session 2026-05-21

- Q: Qual deve ser a forma publica do resultado do helper de QR Code paulista? → A: Retornar a URL final mais um conjunto minimo de campos auditaveis usados na composicao, como ambiente, base URL e identificador do CSC.

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Gerar o QR Code oficial da `NFC-e` paulista com entrada explicita (Priority: P1)

Como integrador que ja consegue montar a `NFC-e` paulista e preparar suas precondicoes de assinatura, quero obter um resultado estruturado para o `QR Code` oficial com `CSC` e ambiente explicitos, para concluir o caminho operacional de `SP` sem montar manualmente a regra estadual fora do SDK.

**Why this priority**: O roadmap agora trata `SP` como baseline obrigatoria ate `producao`, e `CSC` com `QR Code` aparecem como o principal gap restante entre a autorizacao homologada atual e um fechamento paulista util em runtime/tooling executavel.

**Independent Test**: Um integrador consegue informar os dados explicitos da `NFC-e` paulista, incluindo ambiente e `CSC`, e recebe a URL final do `QR Code` com campos auditaveis minimos de composicao, sem depender de montagem manual do payload ou da URL oficial.

**Acceptance Scenarios**:

1. **Given** uma `NFC-e` de `SP` com insumos validos para `homologacao` e `CSC` explicito, **When** o integrador solicitar a geracao do `QR Code`, **Then** o SDK devolve um resultado estruturado coerente com a consulta paulista de homologacao.
2. **Given** uma `NFC-e` de `SP` com insumos validos para `producao` e `CSC` explicito, **When** o integrador solicitar a geracao do `QR Code`, **Then** o SDK devolve um resultado estruturado coerente com a consulta paulista de producao sem reaproveitar silenciosamente a semantica de homologacao.

---

### User Story 2 - Preservar boundaries entre o slice paulista e o backlog multi-`UF` (Priority: P2)

Como integrador e mantenedor do contrato publico, quero que o pacote deixe explicito que este slice cobre apenas o `QR Code` de `SP`, para nao interpretar a nova capacidade como promocao silenciosa de `PR`, das demais `UFs`, de `DANFE NFC-e` visual ou de contingencia `offline`.

**Why this priority**: O roadmap reforca que `SP` precisa fechar primeiro e que `CSC`, `QR Code`, `DANFE NFC-e`, consulta do consumidor e variacoes por `UF` nao podem voltar ao pacote como promessa nacional implicita.

**Independent Test**: Um revisor consegue identificar, pelo comportamento e pela documentacao da feature, que `SP` ganha o helper oficial deste slice enquanto `PR`, outras `UFs`, renderer visual, consulta do consumidor, credenciamento e `offline` continuam fora do recorte atual.

**Acceptance Scenarios**:

1. **Given** um pedido de `QR Code` para `PR` ou outra `UF` fora de `SP`, **When** o integrador usar a feature, **Then** o SDK devolve uma boundary explicita em vez de sugerir suporte estadual generico.
2. **Given** uma necessidade de renderer visual, consulta do consumidor, gestao de `CSC`, credenciamento ou contingencia `offline`, **When** um revisor consultar a feature, **Then** esses itens aparecem claramente como fora do recorte imediato.

---

### User Story 3 - Publicar a proveniencia e a semantica de ambiente do fechamento paulista (Priority: P3)

Como mantenedor do roadmap e do contrato root, quero publicar a ligacao deste slice com `RFL-006`, `RTM-007`, `RTM-011` e `RTM-012`, para que o fechamento paulista do `QR Code` apareca como passo additive e auditavel rumo a `SP` ate `producao`.

**Why this priority**: Sem proveniencia clara, o helper pode parecer utilitario isolado e nao um passo controlado do backlog que fecha ambiente, `CSC`, `QR Code` e boundaries operacionais na ordem certa.

**Independent Test**: Um revisor consegue ler spec, contrato publicado e notas de compatibilidade e entender por que o helper nasce para `SP`, por que `producao` entra explicitamente neste slice e por que o restante continua backlog.

**Acceptance Scenarios**:

1. **Given** a documentacao atualizada desta feature, **When** um revisor procurar a justificativa do recorte, **Then** ele encontra a rastreabilidade entre o slice, o fechamento paulista e as fontes oficiais do `QR Code` da `NFC-e`.
2. **Given** uma revisao de compatibilidade do pacote, **When** o revisor verificar o contrato root, **Then** ele encontra a nova capacidade publicada como adicao additive sem mudanca de significado das APIs existentes.

### Edge Cases

- O que acontece quando os dados obrigatorios de `CSC` forem ausentes, vazios ou inconsistentes com o ambiente informado?
- Como o sistema deve se comportar quando o integrador solicitar o helper para `PR` ou outra `UF` que ainda nao fechou o mesmo recorte paulista?
- Como evitar que um resultado de `QR Code` seja interpretado como renderer completo de `DANFE NFC-e`, consulta automatizada do consumidor ou credenciamento estadual?
- Como distinguir, na documentacao e no contrato, a geracao local do artefato de `QR Code` do fluxo remoto de autorizacao e da administracao do `CSC`?

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: O sistema MUST expor uma capacidade publica additive para gerar o resultado estruturado do `QR Code` oficial da `NFC-e` paulista a partir de entrada explicita do documento, do ambiente e do `CSC`.
- **FR-002**: O sistema MUST suportar explicitamente `homologacao` e `producao` para `SP`, sem colapsar os dois ambientes em uma unica representacao silenciosa.
- **FR-003**: O sistema MUST exigir insumos explicitos suficientes para a composicao oficial do `QR Code`, incluindo `UF`, ambiente e credenciais de `CSC`, sem depender de lookup remoto, cache implicito ou credenciamento automatizado.
- **FR-004**: O sistema MUST devolver um resultado estruturado observavel que inclua a URL final do `QR Code` e um conjunto minimo de campos auditaveis de composicao, como ambiente, base URL e identificador do `CSC`, para que o integrador incorpore o artefato paulista ao fluxo sem montar manualmente a regra oficial fora do SDK.
- **FR-005**: O sistema MUST falhar de forma explicita para `UF` fora de `SP`, inclusive `PR`, preservando a diferenciacao entre o cohort de autorizacao ja promovido e o backlog auxiliar que ainda nao foi promovido para `QR Code`.
- **FR-006**: O sistema MUST falhar de forma explicita para insumos obrigatorios ausentes, inconsistentes ou semanticamente invalidos, sem produzir saida aparentemente valida a partir de inferencia fraca.
- **FR-007**: O sistema MUST manter renderer visual de `DANFE NFC-e`, consulta do consumidor, administracao do ciclo de vida de `CSC`, credenciamento, `offline`, `EPEC NFC-e` e expansao multi-`UF` como fora do recorte imediato.
- **FR-008**: O sistema MUST manter rastreabilidade entre esta feature, `RFL-006`, `RTM-007`, `RTM-011`, `RTM-012` e as fontes oficiais que sustentam o `QR Code` paulista da `NFC-e`.
- **FR-009**: O sistema MUST publicar validacao minima cobrindo `SP` em `homologacao`, `SP` em `producao`, boundary explicita para `UF` nao suportada, erro de entrada obrigatoria e gates de qualidade do pacote.
- **FR-010**: O sistema MUST preservar o contrato root como additive, sem remover, renomear ou deslocar exports publicos existentes.
- **FR-011**: O sistema MUST distinguir claramente a geracao do artefato de `QR Code` do fluxo de autorizacao da `NFC-e`, para que a nova capacidade nao seja interpretada como autorizacao em `producao` ja totalmente fechada.

### Compatibility & Contract Constraints

- **CC-001**: A feature deve permanecer additive no import raiz e respeitar o contrato atual de publicacao do pacote.
- **CC-002**: O slice deve reutilizar a linguagem operacional ja publicada para `NFC-e`, `SP`, `PR`, `homologacao`, `producao`, `unsupported-state` e `unsupported-scope`, preservando coerencia com as boundaries existentes.
- **CC-003**: Nenhuma parte desta feature pode depender de segredo hardcoded, leitura de credencial pelo SDK ou administracao automatizada de `CSC`; o integrador continua responsavel por fornecer esses insumos explicitamente.
- **CC-004**: O contrato publicado deve deixar explicito que este slice fecha apenas o helper paulista de `QR Code` e nao promove renderer visual, consulta automatizada do consumidor, onboarding estadual ou cobertura nacional auxiliar.
- **CC-005**: A validacao minima desta feature deve cobrir contrato publico, testes focados do helper paulista, boundaries documentais do backlog e os gates de lint, formatacao, tipagem, build e pacote.

### Knowledge Sources & Provenance

- **KS-001**: [docs/roadmap/ROADMAP.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/ROADMAP.md), [docs/roadmap/runtimes-sdk.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/runtimes-sdk.md) e [docs/roadmap/recortes-funcionais-prioritarios.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/recortes-funcionais-prioritarios.md) definem que `SP` deve fechar primeiro ate `producao` e que `CSC` com `QR Code` continuam como principal gap operacional da trilha `NFC-e`.
- **KS-002**: [docs/roadmap/nfce-operacional-promovivel.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/nfce-operacional-promovivel.md) e [docs/roadmap/criterios-promocao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/criterios-promocao.md) sustentam a decisao de promover primeiro um slice paulista pequeno e additive, em vez de uma promocao nacional irrestrita do backlog auxiliar.
- **KS-003**: O manual vigente de `DANFE NFC-e` e `QR Code`, a `NT 2018.001` e a evidencia estadual paulista de ambiente sustentam a semantica oficial do `QR Code`, de `CSC` e da separacao entre `homologacao` e `producao`.
- **KS-004**: `PR`, `PB`, `GO`, renderer visual, consulta do consumidor, contingencia `offline` e demais deltas estaduais permanecem como backlog ou boundary explicita ate ganharem slice propria.

### Key Entities _(include if feature involves data)_

- **SP NFC-e QR Code Request**: conjunto explicito de dados que identifica a `NFC-e` paulista, o ambiente e os insumos necessarios para compor o resultado oficial do `QR Code`.
- **CSC Credential Input**: credenciais fornecidas pelo integrador para compor o `QR Code`, sem que o SDK assuma administracao, descoberta ou persistencia dessas informacoes.
- **SP NFC-e QR Code Result**: resultado estruturado e observavel devolvido ao integrador com a URL final do `QR Code` e campos auditaveis minimos de composicao, como ambiente, base URL e identificador do `CSC`, para incorporacao ao fluxo operacional suportado.
- **Environment-Specific QR Boundary**: fronteira que separa `homologacao` de `producao` dentro de `SP` e impede reutilizacao silenciosa de semantica entre ambientes.
- **State Coverage Boundary**: fronteira explicita que mantém `PR` e demais `UFs` fora deste helper enquanto o backlog multi-`UF` nao tiver sido promovido.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: 100% das requisicoes suportadas para `SP` em `homologacao` e `producao` devolvem a URL final do `QR Code` com campos auditaveis minimos de composicao, sem exigir montagem manual da regra oficial fora do SDK.
- **SC-002**: 100% das requisicoes para `PR`, outras `UFs` ou capacidades fora do recorte atual devolvem boundary explicita e coerente entre spec, contrato publicado e documentacao do pacote.
- **SC-003**: Um integrador consegue gerar o artefato paulista de `QR Code` em menos de 10 minutos usando apenas a API publica suportada e a documentacao da feature.
- **SC-004**: O contrato root permanece additive e nao introduz promessa silenciosa de renderer `DANFE NFC-e`, automacao de consulta do consumidor, credenciamento ou cobertura multi-`UF`.
- **SC-005**: A revisao do roadmap e do contrato publicado deixa claro que este slice fecha um passo concreto rumo a `SP` ate `producao`, sem reabrir a promocao nacional prematura do backlog auxiliar.

## Assumptions

- O integrador ja consegue produzir os dados basicos da `NFC-e` e continua responsavel por obter, armazenar e fornecer o `CSC` fora do escopo do SDK.
- Este slice nasce restrito a `SP` porque o roadmap exige fechamento paulista antes de qualquer promocao auxiliar multi-`UF`, mesmo com `PR` ja presente no cohort de autorizacao homologada.
- A geracao do `QR Code` e tratada como fechamento additive de runtime/tooling local e nao como renderer visual completo, consulta automatizada do consumidor ou autorizacao completa em `producao`.
- `DANFE NFC-e` visual, consulta do consumidor, credenciamento, contingencia `offline`, `EPEC NFC-e` e deltas estaduais adicionais continuam como follow-ups possiveis, mas fora desta promocao imediata.
