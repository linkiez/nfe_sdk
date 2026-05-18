# Feature Specification: Add SOAP Transport

**Feature Branch**: `[006-add-soap-transport]`

**Created**: 2026-05-18

**Status**: Draft

**Input**: User description: "fazer proximo slice do roadmap"

## Clarifications

### Session 2026-05-18

- Q: Qual conjunto de servicos homologados deve entrar no primeiro slice de transporte SOAP? → A: Consulta de status e autorizacao de uso.
- Q: Qual ambiente deve ser coberto no primeiro slice de transporte SOAP? → A: Apenas homologacao.
- Q: O catalogo inicial de endpoints deve cobrir apenas endpoints nacionais compartilhados ou ja diferenciar por UF? → A: Apenas endpoints nacionais compartilhados.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Consumir servico homologado sem montar SOAP manualmente (Priority: P1)

Como integrador do SDK, eu quero executar os servicos homologados iniciais de consulta de status e autorizacao de uso informando apenas o tipo de servico, o ambiente e o payload ja preparado, para nao depender de montagem manual de envelope SOAP, selecao de endpoint ou tratamento bruto de resposta.

**Why this priority**: Este e o primeiro valor operacional do slice de transporte. Sem isso, o XML assinado produzido pela fase anterior ainda nao consegue atravessar a fronteira de comunicacao com um autorizador homologado.

**Independent Test**: Pode ser validado ao executar uma chamada homologada suportada com payload conhecido e receber um resultado estruturado contendo classificacao do retorno, evidencias da troca e metadados do endpoint sem compor SOAP manualmente.

**Acceptance Scenarios**:

1. **Given** um integrador com um payload suportado e um ambiente homologado selecionado, **When** ele executa uma operacao de transporte suportada, **Then** o sistema resolve o endpoint correto, monta a mensagem SOAP necessaria e devolve um resultado estruturado da chamada.
2. **Given** um integrador com uma combinacao suportada de servico e ambiente, **When** a resposta do autorizador e recebida, **Then** o sistema preserva a evidencia da troca e classifica o resultado sem exigir parsing manual de XML cru pelo consumidor.

---

### User Story 2 - Selecionar endpoints por catalogo versionado (Priority: P2)

Como mantenedor ou integrador, eu quero que o SDK escolha endpoints a partir de um catalogo versionado por servico e ambiente, para evitar URLs hardcoded e permitir evolucao controlada quando o catalogo oficial mudar.

**Why this priority**: O cliente de transporte so permanece sustentavel se a resolucao de endpoint ficar separada da operacao de envio. Isso reduz drift documental e prepara a extensao para mais servicos sem quebrar o contrato publico.

**Independent Test**: Pode ser validado consultando o catalogo para combinacoes suportadas e nao suportadas, confirmando selecao deterministica de endpoint e falha explicita antes da chamada quando a combinacao nao existir.

**Acceptance Scenarios**:

1. **Given** um servico suportado e um ambiente conhecido, **When** o integrador solicita a resolucao de endpoint, **Then** o sistema retorna uma entrada unica e versionada correspondente a essa combinacao.
2. **Given** um servico ou ambiente fora da cobertura inicial, **When** o integrador tenta resolver o endpoint, **Then** o sistema falha explicitamente antes de qualquer tentativa de transporte.

---

### User Story 3 - Diagnosticar indisponibilidade, rejeicao e uso indevido com retorno estruturado (Priority: P3)

Como integrador, eu quero receber categorias claras de falha e sucesso para chamadas SOAP suportadas, para diferenciar indisponibilidade, rejeicao funcional, erro de uso e falhas de transporte sem misturar isso com regras de dominio futuras.

**Why this priority**: O roadmap separa transporte de regras de dominio. Sem uma taxonomia clara de resultados, o proximo slice operacional de NFe herdaria acoplamento indevido entre comunicacao e interpretacao de negocio.

**Independent Test**: Pode ser validado por fixtures de sucesso e falha que cubram timeout, endpoint ausente, indisponibilidade e retorno funcional rejeitado, assegurando que cada caso gera uma classificacao observavel e consistente.

**Acceptance Scenarios**:

1. **Given** uma chamada suportada que excede o tempo limite configurado, **When** a operacao termina, **Then** o sistema retorna uma classificacao explicita de timeout com contexto suficiente para diagnostico.
2. **Given** uma chamada suportada que recebe retorno funcional rejeitado ou indisponivel, **When** a resposta e processada, **Then** o sistema separa claramente o estado do transporte do estado funcional retornado pelo autorizador.

### Edge Cases

- O que acontece quando um servico suportado existe no catalogo, mas nao ha endpoint cadastrado para o ambiente selecionado?
- Como o sistema lida com resposta SOAP vazia, truncada ou estruturalmente invalida?
- Como o sistema reage quando o payload informado nao pertence ao tipo de servico selecionado?
- O que acontece quando o endpoint responde, mas o resultado nao pode ser classificado como sucesso, rejeicao funcional ou indisponibilidade?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema MUST permitir que o consumidor execute uma operacao de transporte suportada em ambiente de homologacao sem montar manualmente envelopes SOAP ou selecionar URLs diretamente.
- **FR-002**: O sistema MUST resolver endpoints por meio de um catalogo versionado baseado em tipo de servico, familia documental e ambiente, limitado inicialmente a endpoints nacionais compartilhados.
- **FR-003**: O sistema MUST falhar explicitamente antes da chamada quando a combinacao de servico, ambiente ou versao solicitada estiver fora da cobertura inicial.
- **FR-004**: O sistema MUST permitir configuracao de timeout e injecao opcional de um executor de request sem expor detalhes internos de transporte como contrato principal.
- **FR-005**: O sistema MUST devolver um resultado estruturado que preserve evidencias minimas da troca, incluindo endpoint selecionado, classificacao do resultado e payloads observaveis relevantes.
- **FR-006**: O sistema MUST distinguir pelo menos entre sucesso de transporte, erro de uso, indisponibilidade, timeout e retorno funcional rejeitado.
- **FR-007**: O sistema MUST manter a camada de transporte separada da interpretacao de regras de dominio, de forma que o slice operacional seguinte possa reutilizar a infraestrutura sem acoplamento indevido.
- **FR-008**: O sistema MUST cobrir na primeira entrega exatamente os servicos homologados de consulta de status do servico e autorizacao de uso, como base operacional inicial para o MVP de NFe.
- **FR-009**: O sistema MUST manter o contrato publicado do pacote additive, sem promover subpaths de transporte como entrypoint principal nesta fase.
- **FR-010**: O sistema MUST registrar claramente os limites desta entrega, incluindo o que permanece fora do escopo inicial de transporte e catalogo.

### Compatibility & Contract Constraints

- **CC-001**: A feature deve entrar de forma additive no import raiz do pacote ou em sua superficie publica estabilizada, sem quebrar entrypoints ESM ja publicados.
- **CC-002**: A feature afeta a nova camada manual de transporte, o catalogo de servicos suportados e os contratos de retorno estruturado, mantendo a arvore gerada e os artefatos normativos como inventario interno.
- **CC-003**: Nao ha expectativa de mudanca breaking nesta fase; se surgir impacto em nomes exportados, semantica de retorno ou identificadores publicados, a migracao e o impacto semver MUST ser documentados antes da implementacao.
- **CC-004**: A validacao minima desta feature MUST cobrir Jest, lint, format, typecheck ou build e validacao do pacote publicado, alem de regressao focada para resolucao de endpoint e classificacao de resultados.

### Knowledge Sources & Provenance

- **KS-001**: As fontes primarias desta feature sao o roadmap do repositorio, os manuais e orientacoes oficiais da NF-e para consumo de servicos, e os catalogos oficiais ou normativos de endpoints e operacoes homologadas aplicaveis ao fluxo priorizado.
- **KS-002**: Referencias secundarias podem ser usadas apenas para complementar lacunas operacionais de catalogo ou exemplos de interoperabilidade, permanecendo explicitamente nao normativas.
- **KS-003**: Diferencas por UF, requisitos externos de credenciamento e qualquer lacuna entre documentacao oficial e catalogo efetivamente consolidado MUST ser registradas como gaps de proveniencia ou escopo deferido.

### Key Entities *(include if feature involves data)*

- **ServiceCatalogEntry**: representa uma entrada versionada de servico suportado, incluindo familia documental, ambiente, identificador do servico e endpoint nacional compartilhado resolvido.
- **TransportRequest**: representa a solicitacao pronta para transporte, com tipo de servico, payload observavel, parametros operacionais e contexto de ambiente.
- **TransportOutcome**: representa o resultado estruturado da chamada, incluindo classificacao, evidencias da troca e metadados suficientes para diagnostico.
- **EnvironmentProfile**: representa a selecao de ambiente homologado e as restricoes operacionais associadas ao slice inicial.
- **TransportCoverageBoundary**: representa o que esta incluido e excluido da primeira entrega de transporte e catalogo.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Um integrador consegue executar uma chamada homologada suportada a partir da superficie publica estabilizada em menos de 5 minutos, sem montar manualmente envelope SOAP nem configurar URL bruta.
- **SC-002**: 100% das combinacoes cobertas de servico e ambiente resolvem para uma unica entrada de catalogo ou geram falha explicita antes de qualquer tentativa de transporte.
- **SC-003**: 100% dos cenarios de regressao definidos para timeout, indisponibilidade, erro de uso e retorno funcional rejeitado produzem classificacoes distintas e consistentes.
- **SC-004**: O consumidor recebe em uma unica operacao o resultado classificado e a evidencia minima da troca para todos os servicos suportados na entrega inicial.
- **SC-005**: O pacote continua publicavel com validacao automatizada verde para testes, lint, formatacao, typecheck ou build e smoke do tarball.

## Assumptions

- O proximo slice do roadmap apos assinatura digital e a infraestrutura de transporte, SOAP e catalogo de servicos descrita na fase 4 do roadmap do repositorio.
- A primeira entrega operacional desta fase prioriza homologacao e cobre inicialmente apenas consulta de status do servico e autorizacao de uso.
- Producao permanece fora do recorte inicial deste slice de transporte, inclusive no catalogo padrao e nos testes obrigatorios.
- Diferenciacao de endpoint por UF permanece fora do recorte inicial deste slice e deve entrar apenas depois que o catalogo nacional compartilhado estiver estabilizado.
- O XML assinado e quaisquer credenciais ou precondicoes externas necessarias para a chamada ja sao fornecidos por slices anteriores ou por configuracao externa ao SDK.
- Diferencas estaduais detalhadas e cobertura multi-UF ampla permanecem fora do recorte inicial ate que o catalogo nacional e a infraestrutura comum estejam estabilizados.
