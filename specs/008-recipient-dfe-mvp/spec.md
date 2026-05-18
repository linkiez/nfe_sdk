# Feature Specification: Recipient DFe MVP

**Feature Branch**: `008-next-roadmap-slice`

**Created**: 2026-05-18

**Status**: Draft

**Input**: User description: "fazer proximo slice de roadmap". Esta especificacao interpreta o pedido como o proximo slice pragmatico apos o MVP operacional de NFe: abrir o primeiro MVP orientado ao destinatario, combinando distribuicao DFe e Manifestacao do Destinatario com limites claros de cobertura.

## Clarifications

### Session 2026-05-18

- Q: Quais modos de consulta de distribuicao entram no MVP? → A: Apenas `distNSU`; `consNSU` e `consChNFe` ficam para fase posterior.
- Q: Quais tipos de destinatario entram no MVP? → A: PJ e PF ja entram neste slice.
- Q: Como os itens de distribuicao devem ser devolvidos no MVP? → A: Em envelopes estruturados que distinguem resumo e documento completo.
- Q: Ao manifestar, o SDK deve baixar automaticamente a NF-e liberada? → A: Nao; neste slice ele registra o evento e deixa o download para a distribuicao posterior.
- Q: Quais ambientes entram no MVP? → A: Apenas homologacao neste slice.

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Distribuir documentos fiscais do destinatario com cursor observavel (Priority: P1)

Como integrador que atua do lado do destinatario, quero consultar a distribuicao DFe com retorno estruturado e cursor observavel, para receber envelopes tipados de resumos e documentos completos disponiveis para destinatario PJ ou PF sem interpretar manualmente respostas brutas do servico oficial.

**Why this priority**: Este e o primeiro passo para sair do fluxo emitente e entrar no ecossistema operacional do destinatario. Sem distribuicao DFe, o SDK ainda nao atende o nucleo do acompanhamento de documentos recebidos.

**Independent Test**: Pode ser testada executando uma consulta em homologacao de distribuicao via `distNSU`, para destinatario PJ ou PF com `ultNSU` inicial conhecido, e verificando que o SDK devolve lote estruturado, posicao do cursor e indicacao clara de ausencia de novos documentos quando aplicavel.

**Acceptance Scenarios**:

1. **Given** um destinatario PJ ou PF habilitado em homologacao e um `ultNSU` inicial suportado, **When** a aplicacao solicita novos DF-e via `distNSU`, **Then** o SDK devolve um resultado estruturado com envelopes que distinguem documentos completos e resumos retornados, alem da posicao observavel de continuidade.
2. **Given** uma resposta valida sem novos documentos disponiveis, **When** a consulta de distribuicao termina, **Then** o SDK devolve um resultado vazio observavel sem tratar a ausencia de novos itens como erro operacional.

---

### User Story 2 - Registrar manifestacao do destinatario para os eventos basicos (Priority: P2)

Como integrador que precisa registrar a posicao do destinatario PJ ou PF sobre uma NF-e recebida, quero manifestar ciencia, confirmacao, desconhecimento ou operacao nao realizada por meio de uma API de alto nivel, para nao montar manualmente o evento nem acoplar o registro do evento ao download posterior da NF-e.

**Why this priority**: A manifestacao do destinatario e o fluxo mais visivel e normativamente proprio do lado do destinatario. Ela complementa a distribuicao com uma acao operacional clara e de alto valor.

**Independent Test**: Pode ser testada enviando, em homologacao, cada um dos quatro eventos basicos com fixture homologada e verificando que o SDK devolve resultado estruturado contendo classificacao, protocolo quando houver e limite explicito quando o uso sair do recorte publicado, sem tentar baixar automaticamente a NF-e liberada.

**Acceptance Scenarios**:

1. **Given** uma chave de acesso elegivel e um tipo de manifestacao basico suportado, **When** a aplicacao solicita o registro do evento, **Then** o SDK devolve um resultado estruturado com o processamento observado e a evidencia operacional necessaria para a aplicacao, deixando a recuperacao posterior da NF-e para o fluxo de distribuicao.
2. **Given** um tipo de manifestacao ou condicao operacional fora do recorte publicado, **When** a chamada e realizada, **Then** o SDK falha de forma explicita sem sugerir cobertura inexistente.

---

### User Story 3 - Acompanhar limites operacionais e continuidade do fluxo do destinatario (Priority: P3)

Como mantenedor do integrador, quero que o SDK deixe explicitos os limites entre o que este slice cobre e o que ainda depende de habilitacao externa, eventos genericos ou fases posteriores, para planejar adocao sem interpretar a documentacao de forma ambigua.

**Why this priority**: O dominio do destinatario possui restricoes publicas e operacionais relevantes, incluindo acesso autenticado e lacunas documentais. Sem fronteiras explicitas, o pacote passa a prometer cobertura maior do que a realmente sustentada.

**Independent Test**: Pode ser testada verificando que distribuicao DFe e manifestacao devolvem resultados estruturados ou limites explicitos, e que o pacote distingue claramente dependencia externa, indisponibilidade e backlog futuro.

**Acceptance Scenarios**:

1. **Given** uma operacao que depende de permissao, credenciamento ou autenticacao alem do recorte publicado, **When** a aplicacao tenta executa-la, **Then** o SDK devolve limite operacional explicito em vez de simular suporte completo.
2. **Given** uma necessidade de evento generico, EPEC ou rotina fora da distribuicao e da manifestacao basica, **When** o integrador consulta a documentacao e os contratos do slice, **Then** os limites permanecem declarados de forma objetiva como backlog de fase posterior.

### Edge Cases

- O que acontece quando a distribuicao retorna lote valido com mistura de envelopes de resumo e documento completo, todos ainda dependentes de processamento posterior pela aplicacao?
- Como o sistema se comporta quando o cursor de distribuicao nao avanca apesar de a resposta ser operacionalmente valida?
- O que acontece quando um evento de manifestacao e solicitado para uma chave de acesso invalida, nao elegivel ou ainda nao disponivel no fluxo do destinatario?
- Como o sistema diferencia dependencia de habilitacao externa, indisponibilidade temporaria do servico e rejeicao funcional do evento?

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: O sistema MUST expor o primeiro conjunto publico de operacoes orientadas ao destinatario PJ ou PF sobre a base ja existente de serializacao, assinatura e transporte.
- **FR-002**: O sistema MUST permitir consulta de distribuicao DFe por `distNSU`, com resultado estruturado e continuidade observavel do fluxo consultado.
- **FR-003**: O sistema MUST devolver, para distribuicao DFe, envelopes estruturados que distingam documento completo, resumo e metadados retornados, sem exigir leitura manual de XML bruto como contrato principal.
- **FR-004**: O sistema MUST permitir registrar os quatro eventos basicos de Manifestacao do Destinatario: ciencia da operacao, confirmacao da operacao, desconhecimento da operacao e operacao nao realizada.
- **FR-005**: O sistema MUST devolver resultados orientados a uso de aplicacao para manifestacao do destinatario, incluindo classificacao operacional, protocolo quando disponivel e evidencia suficiente para diagnostico.
- **FR-005A**: O sistema MUST manter separado o registro de manifestacao do destinatario e a recuperacao posterior da NF-e liberada, sem acoplar download automatico a chamada de manifestacao neste slice.
- **FR-006**: O sistema MUST distinguir ausencia de novos documentos, rejeicao funcional, indisponibilidade do servico, dependencia operacional externa e erro de uso sem colapsar esses estados em uma resposta ambigua unica.
- **FR-007**: O sistema MUST preservar uma fronteira explicita entre o que este slice cobre agora e o que permanece para eventos genericos, EPEC e outras rotinas de fase posterior.
- **FR-008**: O sistema MUST manter claro que o uso real continua dependente de certificado digital, permissao operacional e demais precondicoes externas quando aplicavel, inclusive para destinatario PJ ou PF dentro do recorte suportado.
- **FR-008A**: O sistema MUST limitar este slice ao ambiente de homologacao, declarando producao como expansao posterior fora do recorte atual.
- **FR-009**: O sistema MUST fornecer exemplos executaveis ou fixtures reutilizaveis para distribuicao DFe e para cada um dos quatro eventos basicos de manifestacao suportados.
- **FR-010**: O sistema MUST manter rastreabilidade entre a API deste slice, as fontes oficiais publicamente verificaveis e as restricoes de acesso ou lacunas ainda abertas.

### Compatibility & Contract Constraints

- **CC-001**: A feature MUST preservar `package.json#exports["."]` e o import raiz como superficie publica principal; qualquer ampliacao deve entrar de forma additive e explicitamente documentada.
- **CC-002**: A feature MAY ampliar facades, contratos manuais e artefatos de documentacao, mas MUST manter a arvore gerada a partir de XSD como inventario interno e base normativa, e nao como contrato publico principal do fluxo destinatario.
- **CC-003**: Nao ha expectativa de mudanca breaking nesta entrega; se nomes exportados, identificadores publicos ou formatos de resultado exigirem alteracao incompativel, a migracao e o impacto semver MUST ser declarados antes da implementacao.
- **CC-004**: A validacao minima deste slice MUST cobrir regressao de contrato, testes focados para distribuicao e manifestacao, lint, formatacao, typecheck, build e smoke do tarball publicado.
- **CC-005**: A cobertura inicial deste slice MUST assumir endpoints e validacao operacional de homologacao apenas.

### Knowledge Sources & Provenance

- **KS-001**: As fontes primarias desta feature sao o roadmap em `docs/ROADMAP.md`, o dossie de manifestacao em `docs/manifestacao-destinatario/visao-geral.md`, o catalogo de capacidades em `docs/manifestacao-destinatario/capacidades-sdk.md` e o registro de fontes em `docs/_meta/source-registry.md`, especialmente `SRC-MD-001`, `SRC-MD-002` e `SRC-MD-003`.
- **KS-002**: Referencias secundarias so podem complementar exemplos operacionais, nomenclaturas auxiliares ou fixtures editoriais, e MUST permanecer explicitamente nao normativas.
- **KS-003**: Sempre que a fonte oficial publica nao permitir fechar detalhes operacionais por causa de acesso restrito, certificado ou outra limitacao, a lacuna MUST permanecer registrada como fronteira de escopo e nao como comportamento assumido do SDK.

### Key Entities _(include if feature involves data)_

- **Distribution Query**: representa a solicitacao estruturada de distribuicao DFe via `distNSU`, iniciada por um destinatario PJ ou PF habilitado a partir de um `ultNSU` observavel suportado pelo slice.
- **Distribution Cursor**: representa a posicao observavel de continuidade da distribuicao, usada para retomar consultas posteriores sem ambiguidade.
- **Recipient Document Envelope**: representa cada item retornado pela distribuicao em formato estruturado para uso da aplicacao, distinguindo ao menos resumo, documento completo e metadados operacionais associados.
- **Recipient Manifestation Intent**: representa a escolha operacional do destinatario entre ciencia, confirmacao, desconhecimento e operacao nao realizada.
- **Manifestation Outcome**: representa o resultado estruturado do processamento do evento de manifestacao, incluindo classificacao, protocolo quando houver e evidencia operacional relevante.
- **Recipient Download Follow-up**: representa a recuperacao posterior da NF-e liberada via fluxo de distribuicao, explicitamente separada do registro inicial da manifestacao.
- **Recipient Coverage Boundary**: representa os limites declarados entre distribuicao e manifestacao basica cobertas neste slice e as rotinas ainda fora do recorte.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Um integrador consegue consultar distribuicao DFe e interpretar continuidade do fluxo usando apenas a API publica do SDK em menos de 20 minutos, sem parsing manual de retorno bruto.
- **SC-002**: 100% dos quatro eventos basicos de Manifestacao do Destinatario declarados neste slice possuem resultado estruturado consistente ou falha explicita quando solicitados fora do recorte suportado.
- **SC-003**: 100% dos cenarios priorizados de distribuicao DFe e manifestacao basica possuem fixture reutilizavel ou exemplo executavel correspondente.
- **SC-004**: 100% das capacidades explicitamente fora do recorte, incluindo eventos genericos, EPEC e detalhes operacionais bloqueados por acesso restrito, permanecem registradas de forma objetiva na documentacao e nos contratos do slice.
- **SC-005**: O slice do destinatario permanece additive sobre o contrato atual do pacote e passa verde nas verificacoes automatizadas requeridas para contrato, testes focados, typecheck, build e smoke do tarball.

## Assumptions

- O proximo slice pragmatico apos o MVP operacional de NFe e o primeiro recorte do lado do destinatario descrito na Fase 6 do roadmap.
- Este slice cobre distribuicao DFe e os quatro eventos basicos de Manifestacao do Destinatario, deixando eventos genericos, EPEC e outras expansoes correlatas para fases posteriores.
- No recorte atual de distribuicao, o MVP cobre apenas o modo `distNSU`; `consNSU` e `consChNFe` permanecem fora deste slice.
- O slice cobre destinatario PJ e PF, desde que atendidas as precondicoes operacionais e de certificado exigidas pelas fontes oficiais.
- O import raiz continua sendo a superficie publica principal do pacote.
- O uso real do fluxo continua dependente de certificado digital, permissao operacional e outras precondicoes externas quando exigidas pelas fontes oficiais.
- Quando a fonte oficial publica confirmar a existencia do fluxo, mas nao permitir fechar todos os detalhes por acesso restrito, o SDK deve preferir declarar a fronteira explicitamente a prometer cobertura completa.
- A primeira entrega do lado do destinatario deve priorizar resultados orientados a uso de aplicacao, continuidade observavel, envelopes tipados de distribuicao e rastreabilidade de limites, e nao cobertura total do ecossistema de eventos.
- O registro de manifestacao e a recuperacao posterior da NF-e liberada permanecem separados neste slice, mesmo quando a manifestacao puder habilitar download em consulta futura.
- O slice fica limitado ao ambiente de homologacao; producao permanece fora deste recorte inicial.
