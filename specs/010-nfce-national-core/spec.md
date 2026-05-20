# Feature Specification: NFC-e National Core

**Feature Branch**: `010-nfce-national-core`

**Created**: 2026-05-18

**Status**: Draft

**Input**: User description: "fazer proximo slice do roadmap". Esta especificacao interpreta o pedido como o proximo slice pragmatico apos `009-generic-event-mvp`: iniciar a Fase 7 do roadmap com um nucleo nacional compartilhado de NFC-e em homologacao, incluindo uma primeira UF piloto sustentada pela melhor evidencia estadual atualmente consolidada no repositorio.

## Clarifications

### Session 2026-05-18

- Q: O slice 010 deve incluir DANFE NFC-e e QR Code como parte da entrega operacional inicial? → A: Nao. O slice 010 cobre apenas montagem, assinatura, validacao local e autorizacao homologada; DANFE NFC-e e QR Code ficam fora do escopo operacional.
- Q: Para qualquer UF fora do piloto inicial, o SDK deve tentar operar com o nucleo nacional compartilhado ou falhar com boundary explicita? → A: Para qualquer UF fora do piloto inicial, o SDK deve falhar com boundary explicita e nao tentar autorizacao operacional neste slice.
- Q: O contrato root deve identificar a UF a partir dos dados da propria NFC-e ou exigir um campo operacional explicito adicional? → A: O contrato root identifica a UF a partir dos dados da propria NFC-e e seleciona automaticamente o perfil piloto ou a boundary correspondente.
- Q: Se a UF nao puder ser inferida com seguranca a partir da NFC-e, isso deve ser tratado como erro local de validacao ou como boundary de cobertura? → A: Se a UF nao puder ser inferida com seguranca a partir da NFC-e, o SDK deve falhar antes do transporte como erro local de validacao/entrada.

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Emitir NFC-e homologada pela facade root (Priority: P1)

Como integrador que ja emite NF-e em homologacao, quero montar e autorizar NFC-e por uma API root do SDK, para reutilizar a infraestrutura canonica, assinatura e transporte sem depender diretamente da arvore gerada nem de XML manual.

**Why this priority**: Este e o primeiro valor operacional real da Fase 7. Sem uma emissao homologada observavel por API root, o dominio NFC-e continuaria apenas documental e nao entregaria um slice demonstravel do roadmap.

**Independent Test**: Pode ser testada montando uma NFC-e homologada com dados validos, autorizando-a pela nova facade root e verificando um resultado estruturado com classificacao operacional, protocolo ou recibo e evidencia de transporte.

**Acceptance Scenarios**:

1. **Given** uma NFC-e homologada com dados validos dentro do recorte nacional compartilhado, **When** a aplicacao solicita a autorizacao pela facade root, **Then** o SDK devolve um resultado estruturado sem exigir montagem manual do XML bruto, sem depender da geracao de DANFE NFC-e ou QR Code neste primeiro slice.
2. **Given** um documento homologado que falha em campos nacionais obrigatorios da NFC-e, **When** a aplicacao solicita a autorizacao, **Then** o SDK rejeita a operacao antes do transporte como erro de uso local.
3. **Given** uma NFC-e homologada com UF coerente nos dados do proprio documento, **When** a aplicacao solicita a autorizacao pelo contrato root, **Then** o SDK identifica automaticamente a UF operacional a partir do documento sem exigir parametro adicional de roteamento.

---

### User Story 2 - Aplicar a primeira extensao estadual sobre o nucleo comum (Priority: P2)

Como integrador que precisa operar NFC-e em uma UF real, quero que o SDK ofereca um primeiro perfil estadual piloto sobre o nucleo nacional compartilhado, para validar o desenho de extensao por UF sem acoplar todas as variacoes estaduais ao contrato principal.

**Why this priority**: O roadmap da Fase 7 exige nao apenas o nucleo compartilhado, mas tambem uma primeira UF piloto. A matriz documental atual aponta Sao Paulo como a melhor candidata inicial porque ja possui evidencia estadual publica consolidada no acervo.

**Independent Test**: Pode ser testada autorizando uma NFC-e homologada sob o perfil da UF piloto e verificando que o SDK seleciona o comportamento compartilhado com os deltas estaduais explicitamente suportados nesse recorte.

**Acceptance Scenarios**:

1. **Given** uma NFC-e homologada para a UF piloto inicial com dados validos, **When** a aplicacao solicita a autorizacao, **Then** o SDK aplica o perfil estadual piloto sem quebrar o contrato root do nucleo nacional.
2. **Given** uma NFC-e homologada para uma UF ainda nao promovida a piloto, **When** a aplicacao solicita a autorizacao pelo mesmo contrato root, **Then** o SDK falha com boundary explicita de cobertura e nao tenta autorizacao operacional nessa UF.

---

### User Story 3 - Explicitar as fronteiras entre o nucleo nacional e os deltas por UF (Priority: P3)

Como mantenedor do integrador, quero que o SDK deixe explicito o que ja e comportamento nacional compartilhado, o que ja esta coberto na UF piloto e o que continua dependente de extensoes futuras, para adotar NFC-e sem supor cobertura completa das 27 UFs.

**Why this priority**: O proprio roadmap marca a cobertura multi-UF precoce como risco principal. Este slice so e seguro se a documentacao e o contrato explicarem com objetividade o limite entre nucleo comum, piloto estadual e backlog posterior.

**Independent Test**: Pode ser testada consultando a documentacao, a matriz por UF e os erros de boundary do contrato root, verificando que eles diferenciam claramente o suporte nacional compartilhado do suporte estadual ainda ausente.

**Acceptance Scenarios**:

1. **Given** a documentacao e o contrato publico do slice atualizados, **When** o integrador consulta o escopo de NFC-e, **Then** ficam claros o nucleo nacional compartilhado, a UF piloto inicial e as UFs ainda fora do recorte operacional confirmado.
2. **Given** uma operacao que dependa de contingencia ou delta estadual ainda nao suportado, **When** a aplicacao explicita essa necessidade por `requestedCapabilities` no contrato root, **Then** o SDK falha com `unsupported-scope` antes do transporte em vez de mascarar lacuna documental como suporte real.

### Edge Cases

- O que acontece quando a aplicacao informa uma UF sem perfil piloto confirmado e sem cobertura estadual consolidada no repositorio?
- O que acontece quando os dados da NFC-e sao insuficientes, inconsistentes ou ambiguos para inferir a UF operacional esperada antes do transporte?
- Como o sistema diferencia erro nacional compartilhado, indisponibilidade do autorizador e delta estadual ainda nao suportado?
- O que acontece quando a aplicacao tenta usar geracao de DANFE NFC-e, QR Code ou `CSC` antes de essa superficie ter sido promovida para um slice posterior?
- O que acontece quando a aplicacao solicita autorizacao para uma UF fora do piloto inicial, mas com aparentes regras nacionais suficientes para montar o XML?
- Como o sistema reage quando a operacao depende de contingencia offline ou outra rota alternativa que continua fora do primeiro recorte operacional da NFC-e?
- O que acontece quando a base nacional compartilhada muda por nota tecnica e o perfil estadual piloto ainda nao absorveu o delta correspondente?

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: O sistema MUST expor uma ampliacao additive no import raiz para montagem e autorizacao homologada de NFC-e dentro do recorte deste slice.
- **FR-002**: O sistema MUST permitir ao consumidor operar NFC-e sem depender diretamente da arvore gerada como contrato publico principal.
- **FR-002A**: O sistema MUST inferir a UF operacional a partir dos dados da propria NFC-e no contrato root, sem exigir campo adicional de selecao de perfil estadual neste slice.
- **FR-002B**: O sistema MUST tratar a impossibilidade de inferir a UF operacional de forma deterministica como erro local de validacao/entrada antes do transporte, e nao como boundary de cobertura.
- **FR-003**: O sistema MUST reutilizar a infraestrutura existente de serializacao, assinatura e transporte como base do novo fluxo de NFC-e, preservando resultados estruturados orientados ao uso da aplicacao.
- **FR-004**: O sistema MUST suportar o nucleo nacional compartilhado de NFC-e em homologacao, cobrindo ao menos montagem canonica, validacao local, assinatura e autorizacao do documento dentro do recorte comum sustentado pelas fontes oficiais internalizadas.
- **FR-005**: O sistema MUST publicar uma primeira UF piloto sobre o nucleo nacional compartilhado, usando a melhor evidencia estadual atualmente consolidada no repositorio.
- **FR-005A**: O sistema MUST adotar Sao Paulo como UF piloto inicial deste slice, porque a matriz documental atual registra evidencia estadual publica mais consolidada para SP do que para as demais UFs.
- **FR-006**: O sistema MUST deixar explicito quando uma operacao NFC-e permanece apenas no nucleo nacional compartilhado e quando depende de delta estadual ainda nao suportado.
- **FR-006A**: O sistema MUST tratar geracao de DANFE NFC-e, QR Code, administracao de `CSC`/`idCSC` e demais habilitacoes estaduais correlatas como superficies explicitamente fora do escopo operacional deste primeiro slice, ainda que documentadas como dependencias futuras de evolucao por UF.
- **FR-006B**: O sistema MUST rejeitar tentativas operacionais para qualquer UF fora da UF piloto inicial com boundary explicita de cobertura, mesmo quando o XML puder ser parcialmente montado pelo nucleo nacional compartilhado.
- **FR-006C**: O sistema MUST aceitar `requestedCapabilities` apenas como marcador explicito de superficies deferidas e responder com `unsupported-scope` antes do transporte quando o consumidor pedir QR Code, DANFE NFC-e, administracao de CSC, credenciamento automatizado ou contingencia offline.
- **FR-007**: O sistema MUST devolver erros de boundary claros para UFs, contingencias ou variacoes estaduais que continuem fora do recorte publicado.
- **FR-008**: O sistema MUST manter uma matriz ou resumo de compatibilidade por UF conectado ao comportamento real do SDK, sem inflar o contrato principal com promessas multi-UF nao validadas.
- **FR-009**: O sistema MUST fornecer exemplos executaveis ou fixtures reutilizaveis para o fluxo nacional compartilhado e para a UF piloto inicial.
- **FR-010**: O sistema MUST manter separacao objetiva entre comportamento nacional compartilhado, extensao estadual piloto e backlog posterior de outras UFs.
- **FR-011**: O sistema MUST tratar DANFE NFC-e, QR Code, contingencia offline, cobertura completa das 27 UFs e automacao de credenciamento ou administracao de CSC como fora do recorte inicial deste slice, a menos que uma fonte primaria e a implementacao posterior promovam esses itens explicitamente.

### Compatibility & Contract Constraints

- **CC-001**: A feature MUST preservar `package.json#exports["."]` e o import raiz como superficie publica principal; quaisquer novos identificadores de NFC-e devem entrar de forma additive e documentada no root import.
- **CC-002**: A feature MUST preservar a compatibilidade com o inventario gerado de schemas NF-e/NFC-e, mantendo `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/` como base interna e nao como API publica principal.
- **CC-003**: A feature MUST evitar mudanca breaking no contrato publico existente; se o slice exigir nova nomenclatura publica para NFC-e, a migracao e o impacto semver MUST ser declarados antes da implementacao.
- **CC-004**: A validacao minima deste slice MUST cobrir Jest focado para contrato root, fluxo nacional compartilhado, UF piloto, boundaries por UF, lint, formatacao, typecheck, build e smoke do tarball publicado.
- **CC-005**: O slice MUST permanecer restrito a homologacao nesta primeira entrega operacional de NFC-e.

### Knowledge Sources & Provenance

- **KS-001**: As fontes primarias desta feature sao `docs/ROADMAP.md`, `docs/roadmap/nfce-operacional-promovivel.md`, `docs/roadmap/ufs-ambientes.md`, `docs/documentos-oficiais-portal-nfe.md`, `docs/roadmap/portal-documentos-vigentes.md`, `docs/roadmap/topicos-oficiais.md` e `docs/_meta/source-registry.md`.
- **KS-002**: As referencias primarias internalizadas para o comportamento nacional compartilhado incluem `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/Manual de Orientação ao Contribuinte - MOC - versão 7.0 - NF-e e NFC-e.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/Manual de Boas Práticas NFC-e - BP 2018.001 - versão 1 0.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/20250324 - Manual_de_Especificações_Técnicas_do_DANFE_NFC-e_QR_Code.md`, `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/principal-3994d2e8a8.md` e o manual de contingencia offline internalizado no acervo oficial.
- **KS-003**: As referencias estaduais internalizadas usadas para explicitar deltas por UF e superficies futuras de `CSC`, QR Code e credenciamento incluem pelo menos `docs/_sources/markdown/official/portal.fazenda.sp.gov.br/servicos/nfe/paginas/sobre-0c30916ab2.md` e `docs/_sources/markdown/official/www.sefaz.pb.gov.br/component/wrapper/index-c26904b952.md`, sem converter essas evidencias em promessa de cobertura multi-UF automatica no slice atual.
- **KS-004**: Referencias secundarias podem complementar comparacoes de ergonomia, fixtures auxiliares ou desenho editorial, mas MUST permanecer explicitamente nao normativas.
- **KS-005**: Sempre que uma regra estadual, endpoint especifico, fallback operacional, fornecimento de CSC ou detalhe de QR Code por UF nao estiver sustentado por fonte primaria consolidada, a lacuna MUST permanecer registrada como limite de escopo em vez de virar cobertura presumida do SDK ou entrega operacional do slice atual.

### Key Entities _(include if feature involves data)_

- **NFC-e Shared Core Request**: representa a solicitacao estruturada de montagem e autorizacao da NFC-e no recorte nacional compartilhado do SDK.
- **NFC-e Operational UF Resolution**: representa a determinacao automatica da UF operacional a partir dos dados da propria NFC-e para selecionar o perfil piloto ou produzir a boundary correspondente.
- **NFC-e Shared Core Outcome**: representa o resultado operacional estruturado da NFC-e em homologacao, incluindo classificacao, protocolo ou recibo e evidencia relevante do transporte.
- **NFC-e UF Profile**: representa o perfil estadual aplicado sobre o nucleo nacional compartilhado, incluindo o piloto inicial e os deltas estaduais explicitamente suportados.
- **NFC-e Coverage Boundary**: representa a separacao tipada entre capacidades nacionais compartilhadas, capacidades da UF piloto e capacidades ainda fora do recorte operacional confirmado.
- **NFC-e Compatibility Matrix Entry**: representa a entrada documental que relaciona uma UF, seu estado de cobertura, as fontes aplicaveis e as lacunas abertas.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Um integrador consegue montar e autorizar uma NFC-e homologada do recorte compartilhado em menos de 30 minutos usando apenas a API publica do SDK e os exemplos do slice.
- **SC-002**: 100% dos cenarios priorizados do nucleo nacional compartilhado possuem fixture reutilizavel ou exemplo executavel correspondente.
- **SC-003**: 100% dos testes focados da UF piloto inicial passam usando o mesmo contrato root do nucleo nacional, sem exigir subpath publico alternativo.
- **SC-003A**: 100% das entradas com UF nao inferivel ou inconsistente falham localmente antes do transporte com classificacao distinta de boundary de cobertura.
- **SC-004**: A documentacao e a matriz por UF deixam objetivamente claro que a cobertura multi-UF continua parcial e que apenas a UF piloto inicial esta promovida a suporte operacional confirmado neste slice.
- **SC-004A**: A documentacao deixa explicito que DANFE NFC-e, QR Code e administracao de CSC permanecem fora da entrega operacional inicial, evitando que autorizacao homologada seja confundida com cobertura completa de emissao ao consumidor.
- **SC-004B**: 100% das tentativas de uso com UFs fora do piloto inicial resultam em boundary explicita previsivel, sem fallback silencioso para autorizacao parcial.
- **SC-004C**: 100% das tentativas que explicitem superficies deferidas por `requestedCapabilities` resultam em `unsupported-scope` previsivel antes do transporte.
- **SC-005**: O slice permanece additive sobre o contrato atual do pacote e passa verde nas verificacoes requeridas de contrato, testes focados, typecheck, build e smoke do tarball.

## Assumptions

- O proximo slice pragmatico apos `009-generic-event-mvp` e iniciar a Fase 7 do roadmap, abrindo NFC-e pelo nucleo nacional compartilhado antes de tentar cobertura estadual ampla.
- A primeira entrega operacional de NFC-e continua restrita a homologacao.
- O contrato root continua sendo a superficie publica principal do pacote.
- A infraestrutura existente de camada canonica, assinatura digital, transporte SOAP e catalogo de servicos pode ser reutilizada como base do fluxo de NFC-e.
- O fluxo homologado deste slice nao inclui geracao de DANFE NFC-e, QR Code nem administracao de `CSC`/`idCSC`; essas superficies permanecem como dependencias futuras controladas por UF.
- O contrato root pode receber `requestedCapabilities` apenas para tornar explicita a tentativa sobre superficies deferidas; esse campo nao promove suporte operacional por si so.
- UFs fora do piloto inicial nao terao tentativa de autorizacao operacional neste slice, mesmo que parte do comportamento nacional compartilhado ja esteja mapeada.
- A UF operacional pode ser inferida de forma deterministica a partir dos dados da propria NFC-e, sem exigir parametro adicional de perfil no contrato root deste slice.
- Quando a UF nao puder ser inferida de forma deterministica a partir dos dados da propria NFC-e, isso representa defeito de entrada do documento e nao limite de cobertura estadual.
- Sao Paulo e a melhor UF piloto inicial porque a matriz documental atual registra evidencia estadual publica mais consolidada para SP do que para as demais UFs.
- A cobertura completa das 27 UFs continua fora do recorte deste slice.
- Contingencia offline e outros deltas estaduais continuam dependentes de aprofundamento documental e implementacao posterior, salvo o que for explicitamente promovido para a UF piloto neste recorte.
