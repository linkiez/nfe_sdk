# Feature Specification: Fundacao do Contrato Publico do Pacote

**Feature Branch**: `003-public-package-contract`

**Created**: 2026-05-16

**Status**: Draft

**Input**: User description: "seguindo roadmap criar varias specs para implementacao funcional do sdk". Esta especificacao cobre apenas a primeira slice prioritaria do roadmap: estabelecer o contrato publico minimo do pacote para viabilizar as etapas funcionais seguintes.

## Clarifications

### Session 2026-05-16

- Q: Qual superficie entra no contrato publico minimo nesta fase? → A: Apenas o import raiz do pacote e os artefatos explicitamente documentados para esse entrypoint; subpaths e arquivos gerados ficam fora do contrato estavel nesta fase.
- Q: Qual artefato define normativamente o contrato publico minimo? → A: `package.json`/exports e o import raiz publicado sao a fonte normativa do contrato; README e docs explicam e validam essa decisao.
- Q: Como comprovar build e distribuicao repetiveis nesta fase? → A: `npm pack` bem-sucedido e um smoke test consumindo o pacote empacotado definem o criterio de saida mais seguro desta fase.
- Q: O `manifest.json` entra no contrato publico minimo desta fase? → A: `manifest.json` permanece artefato interno de validacao e auditoria, podendo sustentar a spec sem virar contrato publico nesta fase.
- Q: Como esta fase deve tratar distribuicao e desenho do import raiz? → A: A distribuicao deve conter apenas o necessario para sustentar o import raiz publicado e sua documentacao de contrato minimo, e esta fase deve redesenhar o import raiz ja agora para antecipar as fases funcionais seguintes.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Entender o que o pacote publica oficialmente (Priority: P1)

Como integrador do SDK, quero identificar com clareza qual e a superficie oficial publicada do pacote para decidir se posso adota-lo sem depender de artefatos internos ou comportamento nao estabilizado.

**Why this priority**: Sem um contrato publico minimo explicito, toda etapa funcional posterior herda ambiguidade sobre o que o pacote promete manter estavel para consumidores.

**Independent Test**: Pode ser validada confirmando que um integrador identifica, a partir da documentacao e do pacote publicado, quais entradas e artefatos fazem parte da superficie suportada sem precisar inspecionar a arvore completa de geracao.

**Acceptance Scenarios**:

1. **Given** que um integrador avalia o pacote pela primeira vez, **When** ele consulta a documentacao da fundacao do pacote, **Then** ele consegue identificar quais entradas publicas sao oficialmente suportadas nesta fase.
2. **Given** que existam artefatos gerados alem da superficie estabilizada, **When** o integrador consulta a especificacao, **Then** ele consegue distinguir inventario interno de contrato publico do pacote.

---

### User Story 2 - Reproduzir build e distribuicao sem ambiguidade (Priority: P2)

Como mantenedor do projeto, quero um baseline de build e distribuicao repetivel para que futuras fases funcionais partam de uma base previsivel de publicacao.

**Why this priority**: O roadmap depende de uma base confiavel de empacotamento antes de introduzir montagem XML, assinatura digital, transporte e fluxos fiscais de alto nivel.

**Independent Test**: Pode ser validada confirmando que uma rodada limpa de build e empacotamento gera o conjunto esperado de artefatos documentados sem necessidade de ajustes manuais fora do fluxo padrao do repositorio.

**Acceptance Scenarios**:

1. **Given** que o mantenedor parte de uma instalacao limpa, **When** ele executa o fluxo normal de build e validacao do pacote, **Then** ele obtém um conjunto repetivel de artefatos de distribuicao coerente com a documentacao.
2. **Given** que haja divergencia entre inventario gerado e superficie publicada, **When** a fundacao do pacote for revisada, **Then** a divergencia fica registrada como lacuna explicita ou limite do contrato publico.

---

### User Story 3 - Avaliar impacto antes de ampliar a cobertura funcional (Priority: P3)

Como revisor tecnico do projeto, quero saber quais mudancas futuras poderao afetar contratos publicos, manifesto gerado e artefatos publicados para reduzir risco antes de avancar para as fases funcionais do roadmap.

**Why this priority**: A fundacao do pacote precisa servir como referencia de compatibilidade para as fases de modelo XML, assinatura, transporte e fluxos fiscais operacionais.

**Independent Test**: Pode ser validada confirmando que um revisor consegue apontar quais partes do pacote devem permanecer estaveis e quais lacunas precisam de tratamento antes de promover novas capacidades a contrato publico.

**Acceptance Scenarios**:

1. **Given** que uma futura fase precise ampliar a superficie publicada, **When** o revisor consulta a especificacao, **Then** ele consegue identificar os limites de compatibilidade que nao podem mudar silenciosamente.
2. **Given** que o manifesto ou o inventario gerado revelem familias de schema ainda incompletas, **When** essas evidencias forem analisadas, **Then** elas ficam registradas como backlog ou risco, nao como suporte fechado.

---

### Edge Cases

- Como a fundacao deve tratar artefatos gerados presentes no repositorio que ainda nao podem ser promovidos a contrato publico estavel?
- O que acontece quando o conjunto de artefatos de distribuicao reproduziveis diverge do que a documentacao apresenta como superficie oficial do pacote?
- Como registrar familias de schema visiveis no manifesto, mas ainda insuficientemente tratadas para exposicao publica estavel?
- Como impedir que futuras fases funcionais assumam suporte publico para itens que hoje sao apenas inventario gerado ou insumo de planejamento?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema MUST definir o contrato publico minimo do pacote para a primeira fase funcional do roadmap.
- **FR-002**: O sistema MUST identificar com clareza quais entradas, artefatos e comportamentos fazem parte da superficie oficial publicada do pacote nesta fase.
- **FR-002A**: O sistema MUST restringir o contrato publico minimo ao import raiz do pacote e aos artefatos explicitamente documentados para esse entrypoint nesta fase.
- **FR-002B**: O sistema MUST permitir que esta fase redesenhe deliberadamente o import raiz publicado para antecipar as fases funcionais seguintes, desde que o novo contrato minimo fique explicitamente documentado e validado.
- **FR-003**: O sistema MUST distinguir inventario gerado interno de superficie publica estabilizada para consumidores, deixando subpaths e arquivos gerados fora do contrato estavel enquanto nao forem promovidos explicitamente.
- **FR-004**: O sistema MUST permitir reproducao consistente do build e do conjunto esperado de artefatos de distribuicao da fase.
- **FR-004A**: O sistema MUST tratar `npm pack` bem-sucedido e um smoke test consumindo o pacote empacotado como prova minima de build e distribuicao repetiveis nesta fase.
- **FR-004B**: O sistema MUST limitar o conjunto de distribuicao desta fase ao necessario para sustentar o import raiz publicado e a documentacao do contrato publico minimo.
- **FR-005**: O sistema MUST validar que a superficie publicada declarada pode ser consumida por um integrador no modelo suportado pelo pacote.
- **FR-005A**: O sistema MUST tratar `package.json`/exports e o import raiz publicado como fonte normativa do contrato publico minimo, usando README e documentacao apenas para explicacao, navegacao e validacao humana.
- **FR-006**: O sistema MUST registrar lacunas conhecidas no manifesto gerado e nas familias de schema que ainda exigem tratamento adicional antes de compor o contrato publico.
- **FR-006A**: O sistema MUST tratar `manifest.json` como artefato interno de validacao e auditoria nesta fase, sem promovê-lo a contrato publico estavel para consumidores.
- **FR-007**: O sistema MUST documentar quais evidencias do repositorio sustentam a superficie publica minima e quais itens permanecem fora dela.
- **FR-008**: O sistema MUST estabelecer uma base de compatibilidade para que fases funcionais futuras nao alterem silenciosamente a superficie publicada.
- **FR-009**: O sistema MUST registrar backlog ou riscos para diferencas entre artefatos gerados, manifesto e pacote publicado.
- **FR-010**: O sistema MUST manter esta fase restrita a fundacao do pacote, sem introduzir ainda fluxos operacionais completos de emissao, assinatura, transmissao ou acompanhamento fiscal.

### Compatibility & Contract Constraints

- **CC-001**: Esta feature deve definir explicitamente se ha mudanca nos entrypoints publicados, exportacoes do pacote ou identificadores visiveis ao consumidor; nesta fase, apenas o import raiz e os artefatos documentados para ele compoem o contrato publico minimo, `package.json`/exports e o import raiz publicado sao a fonte normativa desse contrato, o import raiz pode ser redesenhado deliberadamente como parte da fundacao do pacote, e qualquer ampliacao para subpaths deve ser tratada como decisao contratual deliberada.
- **CC-002**: A feature deve identificar quais familias de schema, artefatos gerados, regras de normalizacao e artefatos auxiliares como `manifest.json` permanecem apenas como inventario interno e quais podem ser lidas como superficie estavel.
- **CC-003**: Qualquer necessidade futura de mudanca breaking na superficie publicada, no manifesto ou nos artefatos de distribuicao deve ser registrada com expectativa de migracao e impacto de versao, sem aplicar essa mudanca nesta etapa.
- **CC-004**: A validacao da feature deve definir o escopo minimo para build, verificacao de empacotamento, smoke validation de consumo e checagens de consistencia documental.
- **CC-004A**: A validacao minima desta fase deve incluir empacotamento reproduzivel via `npm pack` e verificacao de consumo do tarball gerado pelo entrypoint raiz publicado.
- **CC-004B**: A distribuicao desta fase nao deve ampliar a superficie publicada para alem do necessario ao import raiz sem decisao contratual explicita.

### Knowledge Sources & Provenance

- **KS-001**: As fontes primarias desta feature sao o roadmap de implantacao, o README do repositorio, a constituicao do projeto, o manifesto gerado e a estrutura atualmente publicada do pacote.
- **KS-002**: Referencias secundarias podem ser usadas apenas como apoio para comparar expectativas de empacotamento ou contratos de SDK, sem substituir a evidencia primaria do proprio repositorio.
- **KS-003**: A especificacao deve registrar lacunas de proveniencia sempre que o manifesto, a documentacao e a superficie publicada nao permitirem concluir com seguranca o limite do contrato publico.

### Key Entities *(include if feature involves data)*

- **Public Package Contract**: Conjunto minimo de entradas, artefatos e garantias que o pacote assume como estaveis para consumo externo nesta fase.
- **Published Surface Entry**: Cada ponto de acesso oficialmente suportado para integradores do pacote.
- **Distribution Artifact Set**: Conjunto de artefatos produzidos e esperados na distribuicao repetivel do pacote.
- **Manifest Coverage Gap**: Divergencia ou insuficiencia identificada entre o manifesto gerado, as familias de schema e a superficie que pode ser promovida a contrato publico.
- **Compatibility Boundary**: Limite que define o que futuras fases funcionais podem ampliar sem quebrar consumidores atuais.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Um integrador consegue identificar em menos de 5 minutos qual e a superficie oficial publicada do pacote nesta fase.
- **SC-002**: 100% das entradas publicas declaradas possuem evidencia rastreavel no repositorio.
- **SC-003**: 100% das divergencias relevantes entre manifesto, artefatos gerados e superficie publicada sao registradas como lacuna, risco ou backlog explicito.
- **SC-004**: Um ciclo limpo de build e empacotamento reproduz o conjunto documentado de artefatos sem ajuste manual fora do fluxo padrao.
- **SC-004A**: 100% das validacoes de saida desta fase conseguem confirmar, via tarball gerado, que o import raiz publicado permanece consumivel sem depender do workspace fonte aberto.
- **SC-005**: Um revisor consegue distinguir, sem leitura adicional extensa do codigo gerado, o que ja e contrato publico e o que permanece apenas como inventario interno.
- **SC-006**: Nenhuma fase funcional posterior precisa reinterpretar manualmente o contrato publico minimo para comecar planejamento tecnico.

## Assumptions

- O repositorio continuara como pacote npm ESM em TypeScript e mantera o pipeline de geracao baseado em XSD como fundacao tecnica.
- A fase atual nao implementa ainda fluxos fiscais fim a fim; ela prepara a base contratual e de distribuicao para essas fases.
- O manifesto gerado e a estrutura atual do pacote fornecem evidencia suficiente para uma primeira definicao do contrato publico minimo, ainda que revelem lacunas.
- Nem todo artefato gerado hoje precisa ser promovido a superficie publica estavel nesta etapa.
- O contrato publico minimo desta fase fica restrito ao import raiz do pacote, sem promover subpaths ou arquivos gerados a superficie estavel por padrao.
- Esta fase pode redefinir o desenho do import raiz para preparar as proximas camadas funcionais, desde que a nova superficie minima publicada fique claramente delimitada.
- README e `docs/` servem como explicacao e auditoria humana do contrato, mas a fonte normativa da superficie publicada e o `package.json`/exports com o import raiz efetivamente exposto.
- O criterio minimo de reproducao desta fase e gerar um tarball instalavel e comprovar consumo do import raiz a partir desse pacote empacotado.
- O `manifest.json` permanece como evidencia interna para auditoria de cobertura e lacunas, sem se tornar artefato contratual para consumidores nesta fase.
- O conjunto de distribuicao desta fase deve permanecer minimo e orientado ao import raiz, sem espelhar automaticamente toda a arvore gerada em `dist`.
- Qualquer ampliacao funcional posterior devera partir desta fundacao em vez de redefinir o contrato publico do pacote do zero.
