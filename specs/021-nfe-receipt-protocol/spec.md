# Feature Specification: NFe Receipt Protocol

**Feature Branch**: `021-nfe-receipt-protocol`

**Created**: 2026-05-21

**Status**: Draft

**Input**: User description: "analisar novo #file:roadmap e fazer spec com novo slice de implementacao. Priorizar runtime"

## Clarifications

### Session 2026-05-21

- Q: Este slice deve cobrir apenas retomada por `nRec` conhecido ou tambem consulta direta de protocolo por chave e polling simples? → A: Cobrir apenas retomada por `nRec` conhecido apos submissao assincrona, sem consulta direta de protocolo por chave quando o recibo nao existe.
- Q: Quais resultados terminais devem entrar explicitamente na reconciliacao por recibo deste slice? → A: Cobrir `authorized`, `rejected`, `denied`, `unavailable` e `inconclusive` como resultados terminais explicitos.
- Q: Como a API publica deve expor a reconciliacao por recibo deste slice? → A: Expor uma operacao publica dedicada para reconciliar `nRec` conhecido.
- Q: A operacao dedicada deve receber apenas `nRec` ou tambem contexto de roteamento? → A: Receber `nRec` mais contexto explicito de roteamento do autorizador/ambiente.

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Submeter uma `NF-e` assinada e obter retorno assincrono observavel (Priority: P1)

Como integrador que ja consegue montar, assinar e transmitir uma `NF-e`, quero receber um resultado estruturado quando a autorizacao entrar em processamento assincrono, para distinguir com seguranca entre retorno terminal imediato e retorno que exige acompanhamento por `nRec`.

**Why this priority**: O maior gap de runtime restante entre o transporte homologado e o fluxo fiscal percebido pelo integrador e a ausencia de um fechamento oficial para `nRec`, recibo e protocolo sem depender de XML cru ou de inferencia manual.

**Independent Test**: Uma submissao suportada pode devolver autorizacao terminal ou um resultado pendente com `nRec` rastreavel e proximo passo explicito, sem exigir que o integrador leia o envelope bruto da resposta.

**Acceptance Scenarios**:

1. **Given** uma `NF-e` assinada valida cuja autorizacao responda de forma assincrona, **When** o integrador submeter o documento pela superficie publica suportada, **Then** o SDK devolve um resultado estruturado que inclui o identificador de recibo e deixa explicito que o fluxo ainda nao atingiu um estado terminal.
2. **Given** uma `NF-e` assinada valida cuja autorizacao responda com estado terminal imediato, **When** o integrador submeter o documento, **Then** o SDK devolve o resultado terminal correspondente sem forcar uma consulta posterior por recibo.

---

### User Story 2 - Retomar o fluxo por `nRec` e reconciliar protocolo final (Priority: P2)

Como integrador que recebeu um `nRec`, quero consultar o recibo e reconciliar o protocolo final do documento, para concluir a autorizacao sem abrir polling generico, fila de backoffice ou persistencia local obrigatoria.

**Why this priority**: O roadmap trata polling, recibo e protocolo como parte do fluxo operacional minimo, mas o recorte prioritario precisa nascer pequeno e additive, focado em retomada controlada por um recibo conhecido.

**Independent Test**: A partir de um `nRec` valido obtido em uma submissao anterior, o integrador consegue obter um resultado terminal `authorized`, `rejected`, `denied`, `unavailable` ou `inconclusive`, ou ainda um resultado pendente explicito, sempre com classificacao observavel e sem orquestracao automatica externa embutida no SDK.

**Acceptance Scenarios**:

1. **Given** um `nRec` valido de uma submissao suportada cujo processamento ja terminou, **When** o integrador solicitar a reconciliacao do recibo, **Then** o SDK devolve o resultado terminal com evidencia de protocolo coerente com o estado final do documento.
2. **Given** um `nRec` valido cujo processamento ainda nao terminou, **When** o integrador solicitar a reconciliacao do recibo, **Then** o SDK devolve um resultado pendente explicito em vez de simular um estado terminal ou iniciar polling infinito por conta propria.

---

### User Story 3 - Manter boundaries explicitas entre retomada por recibo e automacao operacional ampla (Priority: P3)

Como mantenedor do roadmap e do contrato publico, quero deixar claro o que este slice cobre agora e o que continua fora do recorte, para que `nRec` e protocolo nao sejam interpretados como promessa implicita de polling generico, persistencia local, multi-documento ou automacao assistida.

**Why this priority**: Sem boundary clara, a mesma feature pode ser lida incorretamente como se resolvesse filas longas, orquestracao de lotes, recuperacao automatica ou um emissor operacional completo.

**Independent Test**: Um revisor consegue consultar spec, contrato publicado e roadmap e identificar, sem ambiguidade, que este slice cobre submissao com retorno assincrono observavel e retomada controlada por recibo conhecido, mas nao inclui polling generico ou backoffice embutido.

**Acceptance Scenarios**:

1. **Given** a documentacao atualizada desta feature, **When** um revisor procurar por polling, filas, persistencia local, sincronizacao multi-documento ou retomada assistida, **Then** esses itens aparecem explicitamente classificados como fora do recorte atual.
2. **Given** uma necessidade operacional que exija acompanhamento recorrente sem `nRec` conhecido ou recuperacao em lote, **When** o integrador consultar a feature, **Then** ele encontra a boundary correspondente e nao interpreta essa necessidade como capacidade ja contratada pelo pacote.

### Edge Cases

- O que acontece quando a submissao retorna um `nRec`, mas a reconciliacao posterior devolve resposta inconclusiva ou sem evidencia terminal suficiente?
- Como o sistema deve se comportar quando o `nRec` informado e invalido, pertence a outro contexto operacional ou nao pode ser reconciliado pelas evidencias oficiais disponiveis?
- Como evitar que uma resposta ainda pendente pareca equivalente a uma autorizacao definitiva apenas porque existe um recibo conhecido?
- Como distinguir `unavailable` e `inconclusive` como resultados terminais explicitos deste slice sem confundi-los com um estado pendente que ainda justifique nova tentativa futura?

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: O sistema MUST permitir que a submissao de uma `NF-e` assinada devolva um resultado estruturado que diferencie retorno terminal imediato de retorno assincrono com `nRec`.
- **FR-002**: O sistema MUST expor o `nRec` como evidencia observavel quando a autorizacao suportada entrar em processamento assincrono.
- **FR-003**: O sistema MUST permitir reconciliar um `nRec` conhecido para obter um resultado terminal do documento, um estado pendente explicito quando o processamento ainda nao tiver terminado, ou uma classificacao operacional explicita de falha/boundary quando a consulta oficial nao puder ser concluida dentro do recorte suportado.
- **FR-004**: O sistema MUST devolver evidencia coerente para resultados terminais `authorized`, `rejected`, `denied`, `unavailable` e `inconclusive`, ou para pendencia explicita, sem exigir leitura manual do envelope XML bruto como contrato principal.
- **FR-005**: O sistema MUST preservar o comportamento terminal ja suportado quando a autorizacao responder imediatamente, sem exigir consulta posterior por recibo.
- **FR-006**: O sistema MUST falhar de forma explicita para `nRec` invalido, inconsistente ou fora do recorte suportado, sem inventar estado terminal por inferencia fraca, usando classificacoes observaveis como `usage-error`, `not-found` ou `protocol-error` quando essas forem as melhores representacoes do retorno oficial ou da boundary operacional.
- **FR-006A**: O sistema MUST exigir contexto explicito de roteamento do autorizador/ambiente junto com `nRec` na operacao dedicada de reconciliacao, sem depender de heuristica ou estado persistido local.
- **FR-006B**: O sistema MUST classificar `pending` apenas quando a resposta oficial ainda indicar processamento em curso e uma nova consulta futura permanecer semanticamente justificavel.
- **FR-006C**: O sistema MUST classificar `unavailable` apenas quando a evidencia oficial ou de transporte indicar indisponibilidade do servico de reconciliacao sem produzir evidencia suficiente para um desfecho documental confiavel.
- **FR-006D**: O sistema MUST classificar `inconclusive` apenas quando a consulta oficial terminar sem estado pendente, mas tambem sem evidencia normativa suficiente para promover `authorized`, `rejected`, `denied` ou `unavailable` como conclusao final confiavel.
- **FR-007**: O sistema MUST manter polling generico, filas de backoffice, persistencia local, recuperacao multi-documento, agendamento recorrente e consulta direta de protocolo por chave sem `nRec` conhecido como fora do recorte atual.
- **FR-008**: O sistema MUST distinguir claramente, na documentacao e no contrato publicado, a retomada controlada por `nRec` conhecido da automacao operacional ampla ainda nao promovida.
- **FR-009**: O sistema MUST manter rastreabilidade entre esta feature, `RFL-001`, `RTM-004`, `RTM-006` e as fontes oficiais que sustentam recibo, protocolo e retorno assincrono.
- **FR-010**: O sistema MUST definir uma validacao minima que cubra submissao com retorno assincrono, reconciliacao de recibo terminal, boundary de pendencia ainda em curso e verificacoes de qualidade do pacote.
- **FR-011**: O sistema MUST expor uma operacao publica dedicada para reconciliar `nRec` conhecido, sem sobrecarregar a consulta de situacao por chave de acesso com semantica opcional concorrente.

### Compatibility & Contract Constraints

- **CC-001**: A feature deve permanecer additive no import raiz, sem remover, renomear ou deslocar exports publicos existentes.
- **CC-002**: O slice deve reutilizar as facades e contratos operacionais de `NF-e`, preservando compatibilidade com assinatura, transporte `SOAP` e leitura de estado ja publicados.
- **CC-003**: Nenhuma parte desta feature pode implicar polling generico, scheduler embutido, persistencia local obrigatoria, filas de backoffice ou orquestracao multi-documento.
- **CC-003A**: A reconciliacao por recibo nao deve depender de cache local da submissao anterior nem de inferencia heuristica de roteamento; o contrato deve exigir contexto explicito suficiente para resolver o autorizador/ambiente suportado.
- **CC-004**: O contrato publicado deve deixar explicito que a feature cobre apenas o fluxo de submissao observavel e a retomada controlada por `nRec` conhecido nesta fase.
- **CC-005**: A validacao minima desta feature deve cobrir contrato publico, testes focados de submissao e reconciliacao por recibo, alem de lint, formatacao, tipagem, build e regressao do slice alterado.
- **CC-006**: A reconciliacao por recibo deve aparecer como capacidade publica additive e dedicada, sem alterar o significado contratual das APIs existentes de consulta por chave ou leitura de estado por documento.

### Knowledge Sources & Provenance

- **KS-001**: [docs/roadmap/ROADMAP.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/ROADMAP.md), [docs/roadmap/proximas-iteracoes-recomendadas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md) e [docs/roadmap/recortes-funcionais-prioritarios.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/recortes-funcionais-prioritarios.md) definem o gap de runtime para recibo, protocolo e retorno assincrono em `RFL-001`.
- **KS-002**: [docs/roadmap/rtm-cobertura-oficial.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/rtm-cobertura-oficial.md), [docs/roadmap/specs-pendencias-abertas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/specs-pendencias-abertas.md) e [docs/roadmap/coverage-matrix.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/coverage-matrix.md) registram que `nRec`, polling e protocolo continuam como lacuna aberta apos o fechamento da spec `020`.
- **KS-003**: [specs/006-add-soap-transport/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/006-add-soap-transport/spec.md), [specs/007-nfe-operational-mvp/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/007-nfe-operational-mvp/spec.md) e [specs/020-nfe-state-operations/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/020-nfe-state-operations/spec.md) definem a baseline atual de transporte, fluxo operacional e leitura de estado que esta feature estende.
- **KS-004**: `MOC 7.0`, Anexo I, relacao oficial de servicos de autorizacao e consulta de recibo/protocolo sustentam a interpretacao normativa de processamento assincrono e fechamento por protocolo.
- **KS-005**: Sempre que a evidencia oficial nao sustentar um estado terminal confiavel, a lacuna deve permanecer classificada como pendencia observavel ou boundary explicita, e nao como conclusao implicita.

### Key Entities _(include if feature involves data)_

- **Asynchronous Authorization Submission**: resultado observavel de submissao que indica que a autorizacao entrou em processamento assincrono e ainda depende de reconciliacao posterior.
- **Receipt Token (`nRec`)**: identificador oficial usado para retomar a reconciliacao de um documento submetido cujo processamento nao terminou na primeira resposta.
- **Receipt Routing Context**: conjunto minimo de informacoes explicitas de autorizador/ambiente exigido para reconciliar um `nRec` conhecido sem depender de estado persistido local.
- **Receipt Reconciliation Result**: resultado estruturado que consolida estado terminal `authorized`, `rejected`, `denied`, `unavailable` ou `inconclusive`, estado pendente explicito, ou classificacoes operacionais explicitas como `not-found`, `protocol-error` e `usage-error`, a partir de um `nRec` conhecido.
- **Public Receipt Reconciliation Operation**: operacao publica additive e dedicada responsavel por receber um `nRec` conhecido e devolver o resultado estruturado de reconciliacao correspondente.
- **Protocol Evidence**: evidencia observavel associada ao estado final do documento quando a reconciliacao produzir autorizacao, rejeicao ou outra conclusao terminal.
- **Deferred Operational Recovery Boundary**: fronteira documental que separa a retomada controlada por recibo conhecido de polling generico, persistencia local e automacao operacional ampla.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: 100% das submissões declaradas como suportadas por esta feature devolvem resultado estruturado que diferencia estado terminal imediato de retorno assincrono com `nRec`.
- **SC-002**: 100% das reconciliacoes de `nRec` suportadas devolvem classificacao coerente para `authorized`, `rejected`, `denied`, `unavailable`, `inconclusive`, `pending`, `not-found`, `protocol-error` ou `usage-error`, sem exigir leitura do XML bruto para tomada de decisao principal.
- **SC-003**: 100% dos cenarios fora do recorte atual, como polling generico e recuperacao multi-documento, aparecem classificados de forma consistente entre spec, roadmap e contrato publicado.
- **SC-004**: Um integrador consegue concluir a retomada de um documento com `nRec` conhecido em menos de 15 minutos usando apenas a API publica suportada e a documentacao da feature.
- **SC-005**: O contrato publico permanece additive e nao introduz promessa silenciosa de scheduler, fila operacional ou emissor assistido.

## Assumptions

- A assinatura do documento e a camada de transporte base ja existem e permanecem fora do escopo central desta feature, sendo apenas prerequisitos do fluxo de recibo e protocolo.
- O primeiro corte desta feature nasce focado em `NF-e`, com retomada controlada por `nRec` conhecido, antes de qualquer expansao para filas genericas, multi-documento ou variacao dominante por `UF`.
- A reconciliacao coberta por esta feature exige `nRec` conhecido obtido em submissao assincrona suportada; consulta direta por chave de acesso sem recibo continua fora do recorte imediato.
- A reconciliacao coberta por esta feature tambem exige contexto explicito de roteamento do autorizador/ambiente, sem cache obrigatorio da submissao anterior.
- Quando a submissao ainda nao produzir conclusao terminal confiavel, o sistema deve privilegiar um resultado pendente explicito em vez de inferir autorizacao ou rejeicao final.
- Polling generico, agendamento recorrente, persistencia local e recuperacao automatica de backlog continuam como follow-ups possiveis, mas fora da promocao imediata deste slice.
