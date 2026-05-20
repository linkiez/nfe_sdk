# Feature Specification: Expand Signing Coverage

**Feature Branch**: `014-expand-signing-coverage`

**Created**: 2026-05-20

**Status**: Draft

**Input**: Recorte funcional `RFL-004` do roadmap canonico: expandir a assinatura alem do slice inicial de `NFe`, cobrindo eventos, precondicoes de `NFC-e` e os limites entre assinatura, identificadores obrigatorios e transporte.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Assinar XML de evento pela API publica (Priority: P1)

Como integrador que ja usa o slice inicial de assinatura de `NFe`, quero assinar `evento` XML suportado pela superficie publica do SDK para completar fluxos de cancelamento, carta de correcao e demais eventos sem montar manualmente a assinatura digital.

**Why this priority**: O maior gap formal restante de `RTM-003` apos a `005` e a ausencia de uma assinatura reutilizavel para `evento` XML.

**Independent Test**: Um XML de evento suportado, ainda nao assinado, pode ser assinado com o mesmo contexto reutilizavel ja entregue pela `005`, validado localmente e devolvido sem alteracao parcial do restante do documento.

**Acceptance Scenarios**:

1. **Given** um `evento` XML suportado gerado a partir das familias canonicas do repositorio e um contexto de assinatura valido, **When** o integrador solicitar a assinatura do evento, **Then** o SDK devolve o XML assinado e localmente verificavel sem exigir montagem manual da assinatura digital.
2. **Given** um `evento` XML sem alvo assinavel, sem atributo `Id` valido ou com estrutura fora do recorte suportado, **When** o integrador solicitar a assinatura, **Then** o SDK falha de forma explicita e nao devolve XML parcialmente assinado.

---

### User Story 2 - Preparar precondicoes de assinatura para `NFC-e` sem prometer autorizacao completa (Priority: P2)

Como integrador que quer avancar para `NFC-e`, quero preparar chave de acesso, `DV` e `hashCSRT` de forma coerente com a assinatura e com os requisitos de `QR Code`, sem ter de compor esses campos manualmente nem inferir limites silenciosos do SDK.

**Why this priority**: `RFL-004` precisa fechar a ponte entre assinatura e os identificadores obrigatorios de `NFC-e`, mas ainda sem prometer cobertura operacional completa de autorizacao por `UF`.

**Independent Test**: A partir dos dados minimos de identificacao da `NFC-e` e das credenciais `CSC/CSRT` ja exigidas pelo dominio, o SDK monta um pacote preparatorio coerente com `chNFe`, `cDV` e `hashCSRT`, e falha explicitamente quando faltam precondicoes obrigatorias.

**Acceptance Scenarios**:

1. **Given** dados validos para montar a chave de acesso da `NFC-e` e credenciais compativeis de `CSRT`, **When** o integrador solicitar a preparacao das precondicoes de assinatura, **Then** o SDK devolve os valores calculados e o resumo das dependencias que ainda pertencem ao fluxo de `QR Code` e autorizacao.
2. **Given** dados invalidos, incompletos ou inconsistentes para `DV`, `CSC` ou `CSRT`, **When** o integrador solicitar essa preparacao, **Then** o SDK falha de forma explicita sem gerar saida ambigua que pareca pronta para transmissao.

---

### User Story 3 - Tornar explicita a camada entre assinatura, transporte e trust chain (Priority: P3)

Como mantenedor do roadmap, quero deixar claro onde termina a responsabilidade desta ampliacao de assinatura e onde continuam transporte, trust chain ampliada, `QR Code`, `DANFE NFC-e` e interoperabilidade por ambiente.

**Why this priority**: Sem boundary clara, a nova slice de assinatura pode ser lida incorretamente como se cobrisse toda a operacao de `NFC-e` ou toda a trust chain de producao.

**Independent Test**: Um revisor consegue abrir a documentacao desta feature e distinguir o que ficou suportado agora do que continua pertencendo a `RTM-004`, `RTM-011`, `RTM-012` e `RTM-018`.

**Acceptance Scenarios**:

1. **Given** a documentacao atualizada da feature, **When** um revisor consultar o fluxo de assinatura expandida, **Then** ele entende como a assinatura de eventos, a preparacao de `NFC-e`, a assinatura de `NFe` e os fluxos de autorizacao se encadeiam sem sobrepor responsabilidades.
2. **Given** um item ainda fora do recorte, como trust chain automatica, `A3`, `QR Code` completo ou `DANFE NFC-e`, **When** o revisor consultar a spec, **Then** esses itens permanecem como backlog explicito e nao como suporte implicito.

### Edge Cases

- O que acontece quando o XML do evento esta bem formado, mas o nodo assinavel nao corresponde ao identificador esperado pelo schema?
- Como o SDK reage quando o integrador tenta usar a assinatura expandida em familias de evento ainda nao incluidas no recorte inicial desta feature?
- Como o pacote preparatorio de `NFC-e` deve se comportar quando existe `CSC`, mas nao existe `CSRT`, ou vice-versa?
- Como evitar que uma preparacao parcial de `NFC-e` pareca equivalente a um fluxo completo de autorizacao ou geracao de `QR Code`?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema MUST permitir assinar `evento` XML suportado usando o mesmo contexto reutilizavel de assinatura ja introduzido na spec `005`.
- **FR-001A**: O sistema MUST tratar o documento raiz `evento` como a primeira extensao formal de assinatura alem de `NFe`.
- **FR-001B**: O sistema MUST limitar a cobertura inicial desta feature a eventos serializados pelo SDK com alvo assinavel explicitamente identificavel, sem prometer todas as familias do acervo logo na primeira entrega.
- **FR-002**: O sistema MUST expor uma operacao publica additive para assinar `evento` XML e devolver o XML assinado correspondente.
- **FR-003**: O sistema MUST validar localmente a assinatura gerada para `evento` antes de devolver o resultado ao consumidor.
- **FR-004**: O sistema MUST falhar de forma explicita quando o XML informado nao possuir alvo assinavel, `Id` valido ou estrutura compativel com o recorte suportado.
- **FR-005**: O sistema MUST preservar o XML original quando a assinatura de evento falhar, sem devolver saida parcial ou ambigua.
- **FR-006**: O sistema MUST expor uma operacao additive para preparar as precondicoes de assinatura de `NFC-e`, consolidando chave de acesso, `cDV` e `hashCSRT` a partir dos dados minimos exigidos.
- **FR-006A**: O sistema MUST manter uma unica forma publica e coerente de preparar esses identificadores obrigatorios, sem criar caminhos concorrentes com comportamento divergente.
- **FR-006B**: O sistema MUST devolver saida estruturada que diferencie valores calculados, entradas obrigatorias recebidas e dependencias que continuam pertencendo ao fluxo posterior de `QR Code` ou autorizacao.
- **FR-007**: O sistema MUST falhar de forma explicita quando faltarem precondicoes obrigatorias para `DV`, `CSC` ou `CSRT` dentro do recorte definido.
- **FR-008**: O sistema MUST registrar evidencias de regressao reutilizaveis para assinatura de eventos e para a preparacao de precondicoes de `NFC-e`, incluindo sucesso e falhas esperadas.
- **FR-009**: O sistema MUST documentar como esta feature se encadeia com o slice de assinatura de `NFe`, os fluxos de autorizacao e o transporte, deixando explicito o que continua fora do recorte atual.
- **FR-010**: O sistema MUST manter como backlog explicito a automacao de trust chain, `A3`, `QR Code` completo, `DANFE NFC-e` e a cobertura multi-`UF` de `NFC-e`.
- **FR-011**: O sistema MUST manter rastreabilidade entre esta feature, `RTM-003`, o recorte `RFL-004` e os documentos oficiais que sustentam assinatura, `DV` e `hashCSRT`.

### Compatibility & Contract Constraints

- **CC-001**: A feature deve permanecer additive no import raiz, sem remover nem renomear exports publicos existentes.
- **CC-002**: A ampliacao contratual desta fase deve ficar restrita ao minimo necessario para assinar `evento` XML e preparar precondicoes de assinatura de `NFC-e`.
- **CC-003**: A feature nao deve transformar `QR Code`, `DANFE NFC-e`, trust chain automatica ou autorizacao completa por `UF` em promessas implicitas da Fase 3.
- **CC-004**: O slice deve preservar a superficie publica additive de assinatura e identificadores obrigatorios de forma coerente entre si, sem sobrepor capacidades publicas concorrentes.
- **CC-005**: A validacao minima desta feature deve cobrir contrato publico, testes de integracao de XML assinado, falhas de boundary e verificacoes de lint, tipagem, build e testes focados do slice alterado.

### Knowledge Sources & Provenance

- **KS-001**: [docs/roadmap/ROADMAP.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/ROADMAP.md) e [docs/roadmap/recortes-funcionais-prioritarios.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/recortes-funcionais-prioritarios.md) definem `RTM-003` e o recorte `RFL-004`.
- **KS-002**: [specs/005-add-digital-signing/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/005-add-digital-signing/spec.md) define o contrato e os limites do slice inicial de assinatura de `NFe` que esta feature estende.
- **KS-003**: [docs/roadmap/rtm-cobertura-oficial.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/rtm-cobertura-oficial.md) registra que a proxima continuidade formal de `RTM-003` precisa cobrir eventos, `NFC-e`, `DV` e `hashCSRT`.
- **KS-004**: `MOC 7.0`, `NT 2026.001`, o manual tecnico de `DANFE NFC-e` e `QR Code`, e os manuais `SVAN/SVRS` sustentam os requisitos de assinatura, identificadores e interoperabilidade associados a esta fase.
- **KS-005**: Sempre que a implementacao ainda nao sustentar cobertura operacional plena por ambiente ou por `UF`, a lacuna deve permanecer registrada como backlog explicito em vez de contrato publico implícito.

### Key Entities *(include if feature involves data)*

- **Signed Event XML**: XML de `evento` suportado, assinado e localmente verificavel com o mesmo contexto reutilizavel da assinatura de `NFe`.
- **Unsigned Event XML**: XML de `evento` ainda nao assinado, mas estruturalmente compativel com o recorte desta feature.
- **Public Event Signing Capability**: capacidade publica responsavel por assinar `evento` XML e devolver o resultado verificado.
- **NFCe Signing Prerequisites**: pacote estruturado contendo chave de acesso, `cDV`, `hashCSRT`, entradas obrigatorias recebidas e dependencias que permanecem fora do recorte atual.
- **Signing Expansion Boundary**: fronteira documental e contratual entre o que esta feature cobre agora e o que continua pertencendo a transporte, `QR Code`, trust chain e rollout multi-`UF`.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Um integrador que ja usa a assinatura de `NFe` consegue assinar um `evento` XML suportado em menos de 15 minutos usando o mesmo contexto reutilizavel.
- **SC-002**: 100% dos cenarios declarados como suportados para `evento` nesta feature produzem XML assinado e localmente verificavel.
- **SC-003**: 100% das tentativas invalidas de assinatura de evento ou de preparacao de precondicoes de `NFC-e` falham de forma explicita sem gerar saida parcial.
- **SC-004**: O pacote preparatorio de `NFC-e` devolve `chNFe`, `cDV` e `hashCSRT` coerentes com os dados de entrada em 100% dos cenarios suportados.
- **SC-005**: O contrato publico permanece additive e distingue claramente esta feature das responsabilidades de `SOAP`, `QR Code`, `DANFE NFC-e` e trust chain ampliada.

## Assumptions

- O contexto reutilizavel de assinatura introduzido na spec `005` continua sendo a base unica desta ampliacao.
- `computeNFeAccessKey` e `computeHashCSRT` ja existem e devem ser reaproveitados, nao reinventados.
- O primeiro passo de continuidade de `NFC-e` nesta feature e preparatorio: ele fecha precondicoes e boundaries, nao promete autorizacao completa por ambiente ou por `UF`.
- O slice inicial de evento deve nascer menor e additive, priorizando o encadeamento correto com o contrato atual do pacote antes de ampliar familias de evento em massa.