# Feature Specification: Recipient Continuity

**Feature Branch**: `[022-recipient-continuity]`

**Created**: 2026-05-21

**Status**: Draft

**Input**: User description: "analisar novo roadmap e fazer spec com novo slice de implementacao. Priorizar runtime"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Retomar a distribuicao do destinatario com continuidade observavel (Priority: P1)

Como integrador que ja usa a distribuicao `DFe` do destinatario, quero retomar o fluxo a partir de um cursor conhecido com indicacao clara de continuidade e de prontidao para a proxima acao, para acompanhar novos documentos sem parsing manual de XML bruto nem heuristica local opaca.

**Why this priority**: O roadmap atualizado aponta `RFL-003` como a proxima slice nova de runtime que sobe acima das operacoes basicas ja entregues em `008`, conectando distribuicao e continuidade real de consumo pelo integrador.

**Independent Test**: A partir de um `ultNSU` conhecido e de respostas oficiais homologadas via `distNSU`, o integrador consegue obter um resultado estruturado que indica cursor atual, presenca ou ausencia de novos envelopes e a proxima acao observavel do fluxo sem depender de leitura manual do XML bruto.

**Acceptance Scenarios**:

1. **Given** um destinatario habilitado em homologacao e um cursor `ultNSU` conhecido, **When** o integrador retomar a distribuicao do destinatario, **Then** o SDK devolve um resultado estruturado com continuidade observavel do cursor, envelopes recebidos e indicacao clara de como o fluxo deve prosseguir.
2. **Given** uma resposta oficial valida sem novos documentos disponiveis, **When** o integrador retomar a distribuicao, **Then** o SDK devolve ausencia observavel de novidades sem tratar a resposta como erro operacional nem perder a rastreabilidade do cursor consultado.

---

### User Story 2 - Recuperar o documento posterior ao evento do destinatario com boundary explicita (Priority: P2)

Como integrador que ja registrou uma manifestacao do destinatario, quero recuperar o documento liberado em um passo posterior e claramente separado, para completar o fluxo do destinatario sem acoplamento oculto entre o evento e o download efetivo.

**Why this priority**: A spec `008` deixou explicita a separacao entre registrar a manifestacao e recuperar a `NF-e` posteriormente; o valor da proxima slice e transformar essa continuidade em fluxo reconhecivel e verificavel pelo integrador.

**Independent Test**: A partir de um identificador posterior suportado do lado do destinatario e de uma resposta homologada que entregue o documento liberado, o integrador consegue obter o envelope estruturado correspondente sem polling generico e sem download automatico acoplado ao registro inicial do evento.

**Acceptance Scenarios**:

1. **Given** uma manifestacao previamente registrada e um identificador posterior suportado para recuperar o documento liberado, **When** o integrador solicitar a continuidade do fluxo, **Then** o SDK devolve o documento estruturado correspondente com evidencia suficiente para uso da aplicacao.
2. **Given** que a recuperacao posterior ainda nao esteja disponivel ou permaneça fora do recorte suportado, **When** o integrador solicitar essa continuidade, **Then** o SDK devolve um resultado observavel e explicito de boundary, indisponibilidade ou pendencia, sem simular sucesso documental inexistente.

---

### User Story 3 - Tornar explicitas as boundaries de continuidade do destinatario (Priority: P3)

Como mantenedor do roadmap e do contrato publico, quero distinguir claramente a continuidade minima do destinatario que entra agora do que continua fora do recorte, para que a slice nao seja lida como promessa implicita de `consNSU`, polling agressivo, automacao de credenciamento ou operacao completa em producao.

**Why this priority**: Sem essa boundary, a ampliacao do destinatario tende a colapsar `runtime`, `tooling` e operacao assistida em uma promessa ampla demais para a proxima entrega.

**Independent Test**: Um revisor consegue consultar spec, roadmap e contrato publicado e identificar sem ambiguidade o que a continuidade do destinatario cobre agora e o que continua como backlog, tooling ou boundary operacional.

**Acceptance Scenarios**:

1. **Given** a documentacao atualizada desta feature, **When** um revisor procurar por `consNSU`, polling agressivo, credenciamento automatizado, producao irrestrita ou automacao recorrente, **Then** esses itens aparecem explicitamente como fora do recorte imediato.
2. **Given** uma necessidade de retomada mais ampla do destinatario, **When** o integrador consultar a feature, **Then** ele encontra a fronteira entre a continuidade promovida agora e as expansoes posteriores sem interpretar o slice como cobertura total do dominio.

### Edge Cases

- O que acontece quando o cursor `ultNSU` nao avanca, mas a resposta oficial continua valida e semanticamente util para o integrador?
- Como o sistema deve se comportar quando o documento posterior ainda nao esta liberado apos a manifestacao, embora o evento ja tenha sido processado?
- Como distinguir indisponibilidade momentanea do servico, ausencia de novos documentos e boundary funcional do identificador posterior suportado?
- Como evitar que a continuidade do destinatario pareca equivalente a polling recorrente, sincronizacao de carteira ou automacao completa de backoffice?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema MUST permitir retomar a distribuicao do destinatario a partir de um cursor conhecido com resultado estruturado e continuidade observavel do fluxo consultado.
- **FR-002**: O sistema MUST devolver, para a continuidade da distribuicao, evidencias suficientes para distinguir novas ocorrencias, ausencia legitima de novidades, indisponibilidade temporaria e boundary funcional.
- **FR-003**: O sistema MUST permitir recuperar em passo posterior e separado o documento liberado ao destinatario quando a evidencia oficial suportada o disponibilizar.
- **FR-004**: O sistema MUST manter explicitamente separados o registro inicial da manifestacao e a recuperacao posterior do documento correspondente, sem download automatico oculto na mesma operacao.
- **FR-005**: O sistema MUST devolver envelopes estruturados e orientados a uso de aplicacao para a continuidade do destinatario, sem exigir leitura manual do XML bruto como contrato principal.
- **FR-006**: O sistema MUST falhar de forma explicita quando o identificador posterior informado estiver ausente, inconsistente, ainda indisponivel ou fora do recorte suportado, sem simular documento recuperado por inferencia fraca.
- **FR-007**: O sistema MUST manter `consNSU`, polling agressivo, automacao de credenciamento, sincronizacao recorrente de carteira, producao irrestrita e backoffice assistido como fora do recorte atual.
- **FR-008**: O sistema MUST distinguir claramente, na documentacao e no contrato publicado, a continuidade minima do destinatario promovida agora das operacoes auxiliares ou ampliadas que permanecem em backlog.
- **FR-009**: O sistema MUST manter rastreabilidade entre esta feature, `RFL-003`, `RTM-008`, `RTM-013`, a spec `008` e as fontes oficiais que sustentam distribuicao, manifestacao e recuperacao posterior.
- **FR-010**: O sistema MUST definir uma validacao minima que cubra retomada por cursor, recuperacao posterior suportada, boundaries explicitas de continuidade e verificacoes de qualidade do pacote.
- **FR-011**: O sistema MUST nascer como extensao additive sobre o slice atual do destinatario, sem remover, renomear ou alterar silenciosamente os comportamentos ja promovidos de distribuicao e manifestacao.

### Compatibility & Contract Constraints

- **CC-001**: A feature deve permanecer additive no import raiz, sem remover, renomear ou deslocar exports publicos existentes.
- **CC-002**: O slice deve reutilizar as facades e contratos do dominio do destinatario ja publicados, preservando compatibilidade com distribuicao via `distNSU`, manifestacao basica e os envelopes estruturados atuais.
- **CC-003**: Nenhuma parte desta feature pode implicar `consNSU`, polling recorrente agressivo, automacao de carteira, producao sem boundary explicita ou operacao assistida completa.
- **CC-004**: O contrato publicado deve deixar explicito que a continuidade promovida agora permanece limitada a homologacao e a identificadores posteriores suportados pelo recorte.
- **CC-005**: A validacao minima desta feature deve cobrir contrato publico, testes focados de continuidade do destinatario, lint, formatacao, tipagem, build e regressao do slice alterado.

### Knowledge Sources & Provenance

- **KS-001**: [docs/roadmap/proximas-iteracoes-recomendadas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md), [docs/roadmap/recortes-funcionais-prioritarios.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/recortes-funcionais-prioritarios.md) e [docs/roadmap/rtm-cobertura-oficial.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/rtm-cobertura-oficial.md) definem a lacuna de continuidade explicita do destinatario em `RFL-003`.
- **KS-002**: [specs/008-recipient-dfe-mvp/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/008-recipient-dfe-mvp/spec.md) define a baseline atual de distribuicao `distNSU`, manifestacao basica e a separacao explicita entre registrar o evento e recuperar o documento posteriormente.
- **KS-003**: [docs/roadmap/ROADMAP.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/ROADMAP.md) e [docs/roadmap/specs-implementacao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/specs-implementacao.md) mostram que a spec `008` fechou o MVP inicial, mas que a continuidade do fluxo do destinatario ainda nao foi promovida como slice propria.
- **KS-004**: `NT 2020.001`, `NT 2014.002` e as superficies oficiais de distribuicao e manifestacao do Portal da `NF-e` sustentam a interpretacao normativa de continuidade do destinatario neste dominio.
- **KS-005**: Sempre que a evidencia oficial nao sustentar recuperacao posterior segura, a lacuna deve permanecer classificada como boundary observavel ou backlog explicito, e nao como sucesso documental implicito.

### Key Entities *(include if feature involves data)*

- **Recipient Continuity Query**: solicitacao estruturada que retoma a distribuicao do destinatario a partir de um cursor conhecido e devolve a continuidade observavel do fluxo.
- **Recipient Continuity Cursor**: posicao observavel que permite ao integrador retomar o fluxo do destinatario sem heuristica local opaca.
- **Recipient Follow-up Identifier**: identificador posterior suportado para recuperar o documento liberado em etapa separada do registro inicial da manifestacao.
- **Recipient Follow-up Document**: documento recuperado em etapa posterior e devolvido de forma estruturada para uso da aplicacao.
- **Recipient Continuity Result**: resultado estruturado que consolida continuidade do cursor, documento posterior quando disponivel e boundaries observaveis do fluxo.
- **Deferred Recipient Boundary**: fronteira que separa a continuidade minima promovida agora de `consNSU`, polling recorrente, credenciamento automatizado e operacao assistida ampla.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Um integrador consegue retomar a distribuicao do destinatario a partir de um cursor conhecido em menos de 15 minutos usando apenas a API publica suportada e a documentacao desta feature.
- **SC-002**: 100% dos cenarios suportados de continuidade do destinatario devolvem classificacao observavel para novas ocorrencias, ausencia legitima de novidades, documento posterior recuperado ou boundary explicita, sem parsing manual do XML bruto.
- **SC-003**: 100% dos cenarios explicitamente fora do recorte, como `consNSU`, polling agressivo e sincronizacao recorrente de carteira, aparecem classificados de forma consistente entre spec, roadmap e contrato publicado.
- **SC-004**: Um revisor consegue identificar a diferenca entre distribuicao inicial, registro da manifestacao e recuperacao posterior do documento em menos de 10 minutos de leitura guiada.
- **SC-005**: O contrato publico permanece additive e nao introduz promessa silenciosa de automacao completa do fluxo do destinatario.

## Assumptions

- A spec `008` continua sendo a baseline do fluxo do destinatario e esta nova feature nasce como extensao additive, nao como substituicao do MVP ja publicado.
- A continuidade promovida agora permanece limitada a homologacao, mantendo producao e credenciamento como follow-ups posteriores.
- O registro inicial da manifestacao continua separado da recuperacao posterior do documento liberado, mesmo quando ambos pertencerem ao mesmo fluxo funcional percebido pelo integrador.
- `consNSU`, polling recorrente, automacao de carteira, sincronizacao historica e operacao assistida ampla continuam fora deste primeiro corte de continuidade.
- Quando a evidencia oficial ainda nao permitir promover a recuperacao posterior como documento confiavel, o sistema deve preferir boundary explicita a inferencia otimista.
