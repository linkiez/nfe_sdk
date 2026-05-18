# Feature Specification: Add Digital Signing

**Feature Branch**: `005-add-digital-signing`

**Created**: 2026-05-18

**Status**: Draft

**Input**: User description: "fazer proximo slice do roadmap". Esta especificacao interpreta o pedido como o proximo slice pragmatico do roadmap apos a camada canonica inicial: habilitar assinatura digital para a NF-e priorizada, mantendo a superficie publica do pacote pequena e additive.

## Clarifications

### Session 2026-05-18

- Q: Qual deve ser o formato publico inicial da API de assinatura digital neste slice? → A: Expor duas funcoes no import raiz, uma para criar o contexto de assinatura e outra para assinar a NF-e com esse contexto reutilizavel.
- Q: Qual formato de entrada a API publica deve aceitar para o certificado A1 neste slice? → A: Aceitar tanto caminho de arquivo quanto conteudo em memoria como contrato publico do slice inicial.
- Q: Este slice deve verificar localmente a assinatura produzida antes de devolver a NF-e assinada? → A: Sim, a API deve gerar e verificar localmente a assinatura antes de devolver o resultado.
- Q: Qual deve ser a entrada e saida publicas da operacao de assinatura neste slice? → A: Receber XML da NF-e nao assinado e devolver XML da NF-e assinado.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Assinar uma NF-e pronta para transmissao (Priority: P1)

Como integrador que ja monta e serializa uma NF-e com o SDK, quero aplicar assinatura digital valida ao XML priorizado para preparar o documento para as fases operacionais seguintes.

**Why this priority**: Sem assinatura digital, a NF-e continua incompleta para os fluxos que dependem de validade juridica e verificacao de integridade.

**Independent Test**: Pode ser testada confirmando que uma NF-e suportada, ja montada e serializada pelo SDK, passa a incluir uma assinatura digital valida e associada ao documento correto.

**Acceptance Scenarios**:

1. **Given** que uma NF-e suportada foi montada pelo SDK e existe material de certificado compativel com o fluxo priorizado, **When** o integrador solicita a assinatura digital do documento, **Then** o SDK devolve a NF-e assinada sem exigir manipulacao manual do bloco de assinatura.
2. **Given** que o XML da NF-e assinada seja inspecionado depois da assinatura, **When** a estrutura do documento for verificada, **Then** a assinatura aparece vinculada ao documento assinado e preserva a integridade do restante do XML.

---

### User Story 2 - Reutilizar um certificado A1 sem abrir detalhes criptograficos ao consumidor (Priority: P2)

Como mantenedor da integracao fiscal, quero fornecer ao SDK um certificado A1 compativel e obter um contexto de assinatura reutilizavel para nao repetir montagem manual de material criptografico em cada operacao.

**Why this priority**: A leitura segura e previsivel do certificado reduz atrito de adocao e evita que a fase de assinatura empurre detalhes tecnicos sensiveis para o consumidor do pacote.

**Independent Test**: Pode ser testada confirmando que material A1 valido e aceito para o fluxo priorizado e que entradas invalidas ou incompletas falham com retorno claro, sem gerar documento parcialmente assinado.

**Acceptance Scenarios**:

1. **Given** que o integrador fornece material A1 compativel com o recorte desta fase, **When** o SDK prepara o contexto de assinatura, **Then** esse contexto pode ser reutilizado para assinar documentos suportados sem reconfiguracao manual equivalente a cada chamada.
2. **Given** que o integrador forneca material de certificado invalido, incompleto ou incompatível, **When** o SDK tentar preparar a assinatura, **Then** ele falha de forma explicita e nao produz XML assinado inconsistente.

---

### User Story 3 - Deixar limites e lacunas da assinatura inicial claros para as proximas fases (Priority: P3)

Como mantenedor do roadmap, quero que a primeira entrega de assinatura digital deixe claros seus limites de cobertura para que as fases seguintes ampliem o fluxo sem reinterpretar o que ja esta suportado.

**Why this priority**: Assinatura digital atravessa NF-e, NFC-e e eventos. Sem fronteiras claras, a entrega inicial pode ser lida incorretamente como cobertura operacional completa.

**Independent Test**: Pode ser testada confirmando que a documentacao e as evidencias do repositorio distinguem o que esta assinado e suportado agora do que continua dependente de fases futuras, como eventos, transporte e calculos auxiliares ainda nao entregues.

**Acceptance Scenarios**:

1. **Given** que o integrador consulte a superficie e a documentacao do SDK apos esta entrega, **When** ele verificar o suporte de assinatura digital, **Then** fica claro que a cobertura inicial esta restrita ao fluxo priorizado e nao promete ainda eventos, transporte ou operacao completa.
2. **Given** que haja requisitos auxiliares ainda nao fechados para as proximas fases, **When** o slice de assinatura for revisado, **Then** essas lacunas permanecem registradas como backlog explicito em vez de suporte implícito.

### Edge Cases

- O que acontece quando a NF-e a ser assinada nao possui identificador assinavel ou possui estrutura incompatível com o fluxo priorizado?
- Como o SDK reage quando o material A1 e valido em formato, mas nao pode ser usado para concluir a assinatura do documento?
- Como a feature deve se comportar quando o integrador tenta aplicar assinatura digital em documentos ainda fora do recorte suportado, como eventos ou NFC-e?
- Como evitar que uma falha de assinatura produza XML parcialmente alterado e tratado pelo consumidor como documento pronto?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema MUST permitir aplicar assinatura digital ao documento fiscal priorizado no roadmap apos a montagem e serializacao canonicas ja suportadas pelo SDK.
- **FR-001A**: O sistema MUST tratar a NF-e de emissao principal como o primeiro documento suportado pelo slice inicial de assinatura digital.
- **FR-001B**: O sistema MUST manter `enviNFe` como lote de transporte do documento assinado, sem exigir assinatura independente do lote nesta primeira entrega.
- **FR-002**: O sistema MUST aceitar material de certificado A1 compativel com o fluxo priorizado e convertê-lo em capacidade reutilizavel de assinatura para os documentos suportados.
- **FR-002A**: O sistema MUST expor no import raiz uma operacao dedicada para criar o contexto reutilizavel de assinatura a partir do material de certificado suportado.
- **FR-002B**: O sistema MUST aceitar como entrada publica do slice inicial tanto caminho de arquivo `.pfx` quanto conteudo A1 em memoria, sempre com a credencial necessaria para abrir o material criptografico.
- **FR-003**: O sistema MUST falhar de forma explicita quando o material de assinatura for invalido, incompleto ou incompatível com a operacao solicitada.
- **FR-003A**: O sistema MUST expor separadamente a operacao de assinatura da NF-e, consumindo o contexto de assinatura preparado anteriormente.
- **FR-003B**: O sistema MUST expor a operacao de assinatura recebendo o XML nao assinado da NF-e suportada e devolvendo o XML correspondente ja assinado.
- **FR-004**: O sistema MUST produzir XML assinado cuja estrutura preserve o documento original e acrescente a assinatura digital vinculada ao identificador correto do documento suportado.
- **FR-004A**: O sistema MUST verificar localmente a assinatura produzida antes de devolver o XML assinado ao consumidor.
- **FR-005**: O sistema MUST preservar a integridade do documento nao assinado sempre que a assinatura falhar, evitando saida parcialmente assinada ou ambigua.
- **FR-006**: O sistema MUST registrar evidencias reutilizaveis de regressao para o XML assinado do fluxo priorizado, incluindo exemplos positivos e falhas esperadas.
- **FR-007**: O sistema MUST deixar explicito que este slice nao cobre ainda assinatura de eventos, NFC-e, transporte SOAP, autorizacao de uso ou cobertura operacional completa.
- **FR-008**: O sistema MUST registrar como backlog explicito os calculos auxiliares e extensoes de assinatura ainda nao estabilizados nesta entrega, incluindo chave de acesso completa, DV e `hashCSRT` quando aplicavel.
- **FR-009**: O sistema MUST permitir que as fases seguintes reutilizem a mesma base de assinatura para ampliar a cobertura de documentos sem reescrever a experiencia principal de consumo do pacote.
- **FR-010**: O sistema MUST manter rastreabilidade entre assinatura digital, schemas normativos envolvidos e limites reais de cobertura declarados pelo SDK.

### Compatibility & Contract Constraints

- **CC-001**: A feature deve preservar o import raiz como entrypoint estavel do pacote; qualquer capacidade nova de assinatura deve entrar de forma additive e claramente delimitada.
- **CC-001A**: A ampliacao contratual desta fase deve ficar restrita a duas novas funcoes no import raiz, uma para preparar o contexto reutilizavel de assinatura e outra para assinar a NF-e suportada.
- **CC-002**: A feature deve continuar tratando `src/classes`, `src/interfaces`, `src/types` e `src/enums` como fundacao interna, sem promover o inventario gerado ou a arvore de assinatura a contrato publico principal.
- **CC-003**: Nao ha expectativa de mudanca breaking nesta entrega; se algum identificador publico precisar divergir da estrategia additive, a especificacao posterior deve registrar impacto semver e nota de migracao.
- **CC-004**: A validacao minima desta feature deve cobrir testes de contrato, regressao do XML assinado, falhas de entrada invalida e verificacoes de lint, formatacao, tipagem e build para o slice alterado.

### Knowledge Sources & Provenance

- **KS-001**: As fontes primarias desta feature sao [docs/roadmap-implantacao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap-implantacao.md), [xsd/PL_010c_NT2022_002v1.30/leiauteNFe_v4.00.xsd](/home/linkiez/Projetos/nfe_sdk/xsd/PL_010c_NT2022_002v1.30/leiauteNFe_v4.00.xsd), [xsd/PL_010c_NT2022_002v1.30/nfe_v4.00.xsd](/home/linkiez/Projetos/nfe_sdk/xsd/PL_010c_NT2022_002v1.30/nfe_v4.00.xsd), [xsd/PL_010c_NT2022_002v1.30/xmldsig-core-schema_v1.01.xsd](/home/linkiez/Projetos/nfe_sdk/xsd/PL_010c_NT2022_002v1.30/xmldsig-core-schema_v1.01.xsd) e [docs/_sources/markdown/official/sefaznet.ac.gov.br/nfe/duvidas-3b87d3bdaf.md](/home/linkiez/Projetos/nfe_sdk/docs/_sources/markdown/official/sefaznet.ac.gov.br/nfe/duvidas-3b87d3bdaf.md).
- **KS-002**: Como apoio secundario, a feature pode consultar registros oficiais extraidos sobre restricoes de schema de assinatura em [docs/_sources/markdown/official/extracted/www.nfe.fazenda.gov.br/portal/PL_004/Alteração%20de%20Schemas%20PL_004.md](/home/linkiez/Projetos/nfe_sdk/docs/_sources/markdown/official/extracted/www.nfe.fazenda.gov.br/portal/PL_004/Altera%C3%A7%C3%A3o%20de%20Schemas%20PL_004.md), sem substituir os schemas e o roadmap como base normativa principal.
- **KS-003**: Sempre que o repositorio ainda nao sustentar um requisito juridico ou operacional completo de assinatura, a lacuna deve permanecer registrada como backlog ou limite de cobertura em vez de promessa fechada do SDK.

### Key Entities *(include if feature involves data)*

- **Signing Context**: Representa a capacidade reutilizavel derivada de um certificado A1 compativel para assinar documentos suportados pelo SDK.
- **A1 Certificate Source**: Representa a origem publica aceita para preparar o contexto de assinatura, cobrindo tanto caminho de arquivo quanto conteudo do certificado em memoria.
- **Root Signing Facade**: Representa as duas funcoes publicas additive no import raiz, uma para preparar o contexto reutilizavel de assinatura e outra para assinar a NF-e suportada.
- **Signed NFe Document**: Representa a NF-e ja serializada e acrescida da assinatura digital valida para o recorte inicial desta feature.
- **Unsigned Canonical NFe**: Representa o documento montado e serializado pela camada canonica anterior, pronto para entrar no fluxo de assinatura.
- **Unsigned NFe XML**: Representa o XML da NF-e ja serializado e ainda nao assinado que entra como entrada publica da operacao de assinatura.
- **Signing Coverage Boundary**: Representa o limite explicito entre o que esta coberto pela assinatura inicial e o que continua dependente de fases posteriores.
- **Signing Regression Evidence**: Representa fixtures e cenarios reutilizaveis que demonstram sucesso e falha esperada no processo de assinatura.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Um integrador que ja consegue montar e serializar a NF-e com o SDK passa a obter um XML assinado para o fluxo priorizado em menos de 15 minutos, sem montar manualmente o bloco de assinatura.
- **SC-002**: 100% dos cenarios declarados como suportados por esta feature produzem XML com assinatura digital vinculada ao documento correto.
- **SC-003**: 100% das tentativas com certificado invalido, incompleto ou incompatível falham de forma explicita sem produzir documento parcialmente assinado.
- **SC-004**: 100% das capacidades que permanecem fora do recorte desta entrega ficam registradas de forma explicita na documentacao e nos artefatos da feature.
- **SC-005**: O slice de assinatura introduzido nesta feature permanece additive sobre o contrato atual do pacote e passa por validacao automatizada de contrato, tipagem, build e regressao funcional.

## Assumptions

- A camada canonica inicial implementada na feature 004 continua sendo a base de montagem e serializacao do documento que entrara no fluxo de assinatura.
- O primeiro slice de assinatura digital deve permanecer concentrado na NF-e de emissao principal antes de ampliar cobertura para eventos, NFC-e ou outros documentos.
- O lote `enviNFe` continuara transportando documentos ja assinados, sem receber assinatura independente nesta primeira entrega.
- O uso real em ambientes autorizadores continua fora deste slice; esta feature cobre preparacao do documento assinado, nao transmissao ou autorizacao operacional.
- Material de certificado A1 compativel com o ambiente do projeto estara disponivel para testes e exemplos do slice.
- O slice inicial precisa aceitar tanto uso local com arquivo `.pfx` quanto integracoes que carregam o certificado em memoria antes de chamar o SDK.
- Calculos auxiliares mais amplos, como chave de acesso completa, DV e `hashCSRT`, podem continuar parcialmente adiados desde que o limite de cobertura fique explicito.
- O contrato publico do pacote deve permanecer pequeno e additive, com novas capacidades entrando pelo import raiz e nao por subpaths promovidos.