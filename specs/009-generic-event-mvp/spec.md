# Feature Specification: Generic Event MVP

**Feature Branch**: `009-next-roadmap-slice`

**Created**: 2026-05-18

**Status**: Draft

**Input**: User description: "fazer proximo slice do roadmap". Esta especificacao interpreta o pedido como o proximo slice pragmatico apos `008-recipient-dfe-mvp`: abrir a recepcao generica de eventos da Fase 6 para eventos pos-autorizacao adicionais, mantendo EPEC e expansoes mais especializadas como fases posteriores.

## Clarifications

### Session 2026-05-18

- Q: O que acontece quando um lote mistura familias suportadas com uma familia explicitamente fora do recorte? → A: O SDK rejeita o lote inteiro antes do transporte se houver qualquer item fora do recorte publicado.
- Q: O que acontece quando um evento suportado falha na validacao local obrigatoria antes do envio? → A: O SDK rejeita o lote inteiro antes do transporte se qualquer item suportado falhar na validacao local obrigatoria.

## Research Addendum

- A base oficial internalizada confirma que o ecossistema NF-e possui um unico Web Service generico para registro de eventos, descrito como `NFeRecepcaoEvento`, com interface comum complementada por uma area especifica por tipo de evento.
- O leiaute geral internalizado de `envEvento` confirma processamento síncrono e lote com ate 20 eventos por envio, preservando resultado estruturado por lote e por item como requisito natural do slice.
- A disponibilidade nacional internalizada explicita `Recepção Evento4` como capacidade publica da malha de autorizadores, sustentando o recorte homologado no catalogo comum do SDK.
- Os pacotes oficiais de esquemas internalizados confirmam pelo menos quatro familias transversais adequadas para um primeiro MVP generico: comprovante de entrega (`110130`), ator interessado na NF-e - transportador (`110150`), insucesso na entrega da NF-e (`110192`) e conciliação financeira - ECONF (`110750`).
- As mesmas fontes oficiais tambem confirmam que EPEC continua como fluxo proprio de contingencia e consulta ou liberacao pendente de conciliacao, justificando mante-lo fora deste recorte generico inicial.

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Registrar eventos genericos suportados por uma facade unica (Priority: P1)

Como integrador que ja emite e acompanha NF-e em homologacao, quero registrar eventos pos-autorizacao adicionais por uma API unica e estruturada, para nao depender de montagem manual de `envEvento` nem de uma nova facade dedicada para cada familia de evento suportada.

**Why this priority**: Este e o proximo passo natural da Fase 6 depois de distribuicao DFe e manifestacao do destinatario. Ele amplia o ecossistema de eventos sem misturar o contrato root com uma proliferacao imediata de facades especificas por evento.

**Independent Test**: Pode ser testada enviando um evento suportado em homologacao para uma chave valida e verificando que o SDK devolve um resultado estruturado com classificacao, status de processamento e protocolo quando houver.

**Acceptance Scenarios**:

1. **Given** uma NF-e elegivel em homologacao e um evento generico suportado com dados validos, **When** a aplicacao solicita o registro do evento, **Then** o SDK devolve um resultado estruturado com o processamento observado para o lote e para o item enviado.
2. **Given** um evento suportado que exige dados complementares normativos, **When** a aplicacao envia um request com qualquer validacao local obrigatoria ausente ou invalida, **Then** o SDK rejeita o lote inteiro antes do transporte como erro de uso.

---

### User Story 2 - Processar lotes pequenos de eventos heterogeneos com rastreabilidade (Priority: P2)

Como integrador que precisa registrar mais de um evento em uma mesma rotina operacional, quero enviar pequenos lotes de eventos suportados e receber o resultado estruturado por item, para acompanhar sucesso parcial, rejeicao funcional e protocolo sem perder rastreabilidade do processamento.

**Why this priority**: O roadmap da Fase 6 explicita a necessidade de abstrair eventos por tipo, lote e retorno de processamento. Sem essa visao de lote, a recepcao generica ficaria limitada demais e nao representaria um ganho real sobre a montagem manual atual.

**Independent Test**: Pode ser testada enviando um lote com dois ou mais eventos genericos suportados e verificando que o SDK devolve resultado observavel por item, inclusive quando um item falha e outro e processado com sucesso.

**Acceptance Scenarios**:

1. **Given** um lote pequeno contendo eventos suportados para uma ou mais chaves elegiveis, **When** a aplicacao envia a recepcao generica, **Then** o SDK devolve classificacao de lote e outcomes estruturados por item.
2. **Given** um lote com mistura de sucesso e rejeicao funcional, **When** o processamento termina, **Then** o SDK preserva a rastreabilidade individual dos itens sem colapsar tudo em uma resposta unica ambigua.

---

### User Story 3 - Tornar explicitas as fronteiras entre eventos genericos suportados e backlog posterior (Priority: P3)

Como mantenedor do integrador, quero que o SDK explicite quais familias de eventos entram nesta recepcao generica inicial e quais continuam fora do recorte, para planejar adocao sem supor cobertura imediata de EPEC, eventos do destinatario ou variacoes especializadas ainda nao estabilizadas.

**Why this priority**: O slice 008 deixou eventos genericos e EPEC explicitamente fora do recorte. O novo slice so agrega valor se tambem declarar com clareza o que continua diferido, evitando promessas contratuais maiores do que a evidencia normativa sustenta.

**Independent Test**: Pode ser testada tentando registrar uma familia suportada e outra fora do recorte, validando que o SDK processa a primeira e falha de forma explicita e orientada a contrato na segunda.

**Acceptance Scenarios**:

1. **Given** um lote contendo qualquer familia de evento fora do recorte publicado, **When** a aplicacao solicita o envio generico, **Then** o SDK rejeita o lote inteiro antes do transporte e devolve limite explicito de cobertura sem simular suporte inexistente.
2. **Given** a documentacao do slice e o contrato root atualizados, **When** o integrador consulta o escopo, **Then** ficam objetivamente separados os eventos suportados agora dos eventos que permanecem para slices posteriores.

### Edge Cases

- Lotes que incluam qualquer familia explicitamente fora do recorte devem ser rejeitados integralmente antes do transporte.
- O que acontece quando a aplicacao tenta enviar mais de 20 eventos em um unico lote, acima do limite normativo do leiaute geral?
- Lotes com qualquer evento suportado que falhe na validacao local obrigatoria devem ser rejeitados integralmente antes do transporte.
- O que acontece quando o lote e aceito no transporte, mas um item individual retorna rejeicao funcional?
- Como o sistema diferencia erro de uso, indisponibilidade temporaria e dependencia operacional externa em uma chamada generica de eventos?

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: O sistema MUST expor uma operacao publica additive para recepcao generica de eventos pos-autorizacao em homologacao.
- **FR-002**: O sistema MUST aceitar um contrato estruturado para envio de um ou mais eventos suportados sem exigir montagem manual de `envEvento` como contrato principal do consumidor.
- **FR-003**: O sistema MUST devolver resultados estruturados no nivel do lote e no nivel de cada item enviado, incluindo classificacao operacional e protocolo quando disponivel.
- **FR-004**: O sistema MUST suportar neste MVP inicial as familias de eventos genericos pos-autorizacao ja documentadas e presentes no inventario oficial internalizado com maior valor operacional transversal: comprovante de entrega (`110130`), ator interessado na NF-e - transportador (`110150`), insucesso na entrega da NF-e (`110192`) e conciliacao financeira - ECONF (`110750`).
- **FR-004A**: O sistema MUST respeitar o limite normativo de ate 20 eventos por lote na recepcao generica, falhando de forma explicita quando a aplicacao tentar exceder esse teto.
- **FR-004B**: O sistema MUST rejeitar integralmente o lote antes do transporte quando qualquer item declarar familia de evento fora do recorte publicado deste MVP.
- **FR-005**: O sistema MUST validar campos obrigatorios e restricoes especificas de cada familia suportada antes da tentativa de transporte.
- **FR-005A**: O sistema MUST rejeitar integralmente o lote antes do transporte quando qualquer item suportado falhar na validacao local obrigatoria de campos comuns ou especificos da sua familia.
- **FR-006**: O sistema MUST distinguir sucesso, rejeicao funcional, indisponibilidade do servico, dependencia operacional externa e erro de uso sem colapsar esses estados em um unico resultado ambiguo.
- **FR-007**: O sistema MUST manter cancelamento, carta de correcao e manifestacao do destinatario como contratos dedicados ja existentes, sem regressao de comportamento ou de nomenclatura publica.
- **FR-008**: O sistema MUST manter EPEC, eventos do destinatario ja cobertos por facade propria, eventos regionais ainda nao estabilizados e producao fora do recorte deste slice.
- **FR-008A**: O sistema MUST tratar EPEC como fluxo proprio de contingencia e conciliacao, fora deste MVP generico inicial, mesmo que compartilhe a infraestrutura de registro de eventos do ecossistema NF-e.
- **FR-009**: O sistema MUST fornecer exemplos executaveis ou fixtures reutilizaveis para cada familia de evento suportada e para pelo menos um lote heterogeneo.
- **FR-010**: O sistema MUST manter rastreabilidade entre a API publicada, as familias de schema afetadas, os manuais ou notas tecnicas correspondentes e as fronteiras de cobertura do slice.

### Compatibility & Contract Constraints

- **CC-001**: A feature MUST preservar `package.json#exports["."]` e o import raiz como superficie publica principal; a nova recepcao generica deve entrar de forma additive e explicitamente documentada.
- **CC-002**: A feature MUST reutilizar as familias de schema e artefatos gerados ja presentes no repositorio para eventos pos-autorizacao, preservando a arvore gerada como inventario interno e nao como contrato publico principal.
- **CC-003**: Nao ha expectativa de mudanca breaking nesta entrega; se qualquer identificador publico, formato de resultado ou semantica de facade exigir quebra, a migracao e o impacto semver MUST ser declarados antes da implementacao.
- **CC-004**: A validacao minima deste slice MUST cobrir Jest focado para contrato root, unidades, integracao de lote e item, lint, formatacao, typecheck, build e smoke do tarball publicado.
- **CC-005**: A cobertura inicial deste slice MUST permanecer restrita a homologacao e ao catalogo nacional ja estabilizado pelo SDK.

### Knowledge Sources & Provenance

- **KS-001**: As fontes primarias desta feature sao `docs/ROADMAP.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/MOC NFe ABI Visão Geral - v1.00 - minuta.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/disponibilidade-30f1e6a455.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/listaconteudo-f0fdfae921.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/listaconteudo-b62dcde362.md`, `docs/roadmap/portal-documentos-vigentes.md`, `docs/roadmap/topicos-oficiais.md`, `docs/documentos-oficiais-portal-nfe.md` e o registro consolidado em `docs/_meta/source-registry.md`.
- **KS-002**: Referencias secundarias so podem complementar exemplos editoriais, comparacoes de ergonomia ou fixtures auxiliares, e MUST permanecer explicitamente nao normativas.
- **KS-003**: Os esquemas oficiais extraidos sob `docs/_sources/extracted/official/www.nfe.fazenda.gov.br/portal/Evento_EntregaNFe_PL_v1.01/`, `docs/_sources/extracted/official/www.nfe.fazenda.gov.br/portal/Evento_AtorInteressado_PL_v1.02/`, `docs/_sources/extracted/official/www.nfe.fazenda.gov.br/portal/Evento_InsucessoNFe_PL_v1.02/` e `docs/_sources/extracted/official/www.nfe.fazenda.gov.br/portal/Evento_Econf_v1.00/` sustentam os codigos de evento, descricoes e campos especificos usados neste recorte.
- **KS-004**: Sempre que uma familia de evento, regra de validacao ou dependencia operacional nao estiver fechada por fonte primaria acessivel, a lacuna MUST permanecer registrada como limite de escopo em vez de virar cobertura presumida do SDK.

### Key Entities _(include if feature involves data)_

- **Generic Event Submission**: representa a solicitacao estruturada de recepcao generica contendo um ou mais eventos suportados para processamento homologado.
- **Generic Event Batch**: representa o lote normativo de envio da recepcao generica, com identificador de lote e ate 20 eventos por submissao.
- **Generic Event Item**: representa cada evento individual do lote, incluindo familia, codigo do evento, chave de acesso, ator, sequencia e dados complementares normativos.
- **Generic Event Family Boundary**: representa a lista tipada de familias cobertas neste MVP e as familias explicitamente fora do recorte.
- **Generic Event Batch Outcome**: representa o resultado agregado do lote, incluindo classificacao observavel e evidencia de transporte.
- **Generic Event Item Outcome**: representa o resultado estruturado de cada item, com status de processamento, classificacao e protocolo quando houver.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Um integrador consegue registrar um evento generico suportado em homologacao usando apenas a API publica do SDK em menos de 20 minutos, sem montar XML bruto manualmente.
- **SC-002**: 100% das familias de eventos declaradas neste MVP possuem fixture reutilizavel ou exemplo executavel correspondente.
- **SC-003**: 100% dos cenarios priorizados de lote heterogeneo devolvem resultado estruturado por item sem perder rastreabilidade de sucesso parcial ou rejeicao funcional.
- **SC-004**: 100% das familias explicitamente fora do recorte, incluindo EPEC e demais expansoes ainda nao estabilizadas, permanecem registradas de forma objetiva na documentacao e nos contratos do slice.
- **SC-005**: O slice permanece additive sobre o contrato atual do pacote e passa verde nas verificacoes requeridas de contrato, testes focados, typecheck, build e smoke do tarball.

## Assumptions

- O proximo slice pragmatico apos `008-recipient-dfe-mvp` e abrir a recepcao generica de eventos da Fase 6 antes de atacar EPEC como fluxo proprio.
- O MVP desta fase continua restrito a homologacao.
- O contrato root continua sendo a superficie publica principal do pacote.
- O SDK ja possui base suficiente de assinatura, transporte e processamento de retorno para estender recepcao de eventos sem reabrir os slices anteriores.
- As familias de eventos pos-autorizacao ja presentes no inventario e na documentacao oficial oferecem evidencia suficiente para um primeiro recorte generico: comprovante de entrega (`110130`), ator interessado transportador (`110150`), insucesso na entrega (`110192`) e conciliacao financeira (`110750`).
- O lote generico deve respeitar o limite normativo de ate 20 eventos por envio.
- Cancelamento, carta de correcao e manifestacao do destinatario continuam com facades dedicadas, mesmo com a existencia da recepcao generica.
- EPEC, producao e demais eventos ainda nao estabilizados permanecem fora deste recorte inicial.
