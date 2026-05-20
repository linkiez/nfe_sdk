# Feature Specification: Release Hardening

**Feature Branch**: `013-release-hardening`

**Created**: 2026-05-19

**Status**: Draft

**Input**: Próximo slice do roadmap — Fase 8: endurecimento para release e adoção.

## Clarifications

### Session 2026-05-19

- Q: Qual deve ser a branch-base do CI nesta spec? → A: O CI deve rodar em pull requests e pushes para a branch padrão do repositório.
- Q: Qual deve ser o escopo do artefato de continuidade nesta spec? → A: O artefato de continuidade deve ser documentação operacional com exemplos de comandos e fluxos, sem exigir scripts executáveis nesta fase.
- Q: Como os exemplos devem consumir o SDK nesta spec? → A: Os exemplos devem consumir o pacote compilado/local, validando o contrato público como um integrador real.
- Q: Qual status a matriz deve usar para APIs públicas com apenas testes unitários? → A: APIs públicas sem validação de integração devem aparecer como `beta`.
- Q: A verificação documental deve entrar no escopo do CI desta spec? → A: Sim, o pipeline desta spec deve incluir verificação documental alinhada à Fase 8 do roadmap.

## User Scenarios & Testing _(mandatory)_

### User Story 1 — Integrador valida build automaticamente via CI (Priority: P1)

Um integrador que abre um pull request no repositório precisa de garantia imediata
de que o build, lint, typecheck e testes continuam passando. Hoje não existe nenhum
pipeline de CI; qualquer regressão introduzida em PR passa despercebida até revisão
manual.

**Why this priority**: Sem CI, o repositório não tem barreira de proteção automática
contra regressões. É o pré-requisito para qualquer forma de release confiável.

**Independent Test**: Criar um PR com erro de typecheck proposital; o pipeline deve
falhar antes de qualquer merge.

**Acceptance Scenarios**:

1. **Given** um pull request aberto contra a branch padrão do repositório, **When** o pipeline executa,
   **Then** ele roda `build`, `lint`, `typecheck`, `test` e verificação documental
   em sequência e reporta sucesso ou falha no PR.
2. **Given** um commit que quebra o typecheck, **When** o pipeline executa,
   **Then** o job falha com saída legível indicando qual arquivo e linha contém o erro.
3. **Given** um commit limpo, **When** o pipeline termina com sucesso,
   **Then** nenhum artefato de distribuição é publicado — apenas a verificação de
   integridade é confirmada.

---

### User Story 2 — Integrador consulta o que o SDK suporta hoje (Priority: P2)

Um integrador externo precisa saber quais fluxos fiscais estão funcionais, quais estão
planejados e quais são apenas observação. Hoje essa informação está fragmentada entre
o ROADMAP, os dossies e os testes.

**Why this priority**: Transparência sobre cobertura reduz fricção de adoção e evita
que integradores descubram limitações em produção.

**Independent Test**: Um leitor consegue abrir um único documento e entender, sem
consultar o código, quais operações estão disponíveis na API pública e em qual estado
se encontram.

**Acceptance Scenarios**:

1. **Given** a matriz de cobertura publicada, **When** um integrador consulta
   `submitNFeAuthorization`, **Then** ele vê status, fase de roadmap e referência
   documental correspondente.
2. **Given** um novo módulo adicionado ao `src/index.ts`, **When** a matriz é
   atualizada, **Then** a entrada correspondente aparece com status e fase corretos.
3. **Given** uma lacuna conhecida (ex.: DANFE, QR Code), **When** o integrador
   consulta a matriz, **Then** ela aparece explicitamente como `fora-do-escopo` ou
   `backlog` com justificativa.

---

### User Story 3 — Integrador executa exemplos em homologação sem modificar o SDK (Priority: P3)

Um desenvolvedor que quer experimentar o SDK em homologação precisa de exemplos
executáveis que demonstrem os fluxos principais sem precisar ler o código-fonte dos
testes.

**Why this priority**: Exemplos reduzem a barreira de entrada para adoção e servem
como documentação viva dos fluxos suportados.

**Independent Test**: Um desenvolvedor clona o repositório, instala dependências e
executa `npm run build` seguido de `npx tsx examples/nfe/authorize.ts` com
credenciais de homologação; o script retorna uma resposta estruturada sem exigir
ajustes no SDK.

**Acceptance Scenarios**:

1. **Given** o diretório `examples/` com ao menos um exemplo por fluxo suportado,
   **When** o integrador executa o exemplo após compilar o pacote local com
   configuração de homologação,
   **Then** o script completa sem erros de tipo ou importação.
2. **Given** um exemplo de autorização de NF-e, **When** executado, **Then** ele
   demonstra montagem, assinatura, transmissão e leitura do retorno em sequência.
3. **Given** um exemplo de manifestação do destinatário, **When** executado,
   **Then** ele demonstra ciência e confirmação de operação usando a API pública.

---

### Edge Cases

- O que acontece se o pipeline de CI falhar por timeout de rede ao acessar serviços
  externos? O job deve falhar de forma distinguível de uma falha de código.
- Como a matriz de cobertura trata operações que existem em `src/index.ts` mas ainda
  não têm testes de integração (apenas unitários)? Elas devem aparecer como
  `beta`.
- Como os artefatos de continuidade distinguem exportação e importação que preservam
  o estado operacional do documento das rotinas que retornam o documento para um
  estado editável?

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: O repositório DEVE ter um pipeline de CI acionado em pull requests e
  pushes para a branch padrão do repositório que execute, em ordem: `build`,
  `lint`, `typecheck`, `test` e verificação documental.
- **FR-002**: O pipeline DEVE falhar de forma distinta para cada tipo de erro
  (build, lint, typecheck, test), com mensagem de saída legível.
- **FR-003**: O pipeline NÃO DEVE publicar artefatos no npm ou em qualquer registry
  como parte da verificação de integridade — apenas validar.
- **FR-004**: O repositório DEVE ter uma matriz de cobertura em
  `docs/roadmap/coverage-matrix.md` listando cada função pública exportada por `src/index.ts`
  com: status (`stable` / `beta` / `backlog` / `fora-do-escopo`), fase do roadmap e
  referência documental.
- **FR-004a**: Toda função pública que exista no contrato, mas ainda só tenha testes
  unitários e não possua validação de integração, DEVE aparecer na matriz com status
  `beta`.
- **FR-005**: A matriz de cobertura DEVE incluir entradas para lacunas explicitadas
  no roadmap (DANFE, QR Code, contingência, etc.) mesmo quando não há API
  correspondente.
- **FR-006**: O repositório DEVE ter um diretório `examples/` com ao menos um script
  executável por fluxo principal suportado: autorização NF-e, manifestação do
  destinatário e validação XSD.
- **FR-007**: Cada exemplo DEVE importar apenas da API pública (`nfe-sdk`) e ser
  executável com `tsx` contra o pacote compilado/local sem modificar arquivos do
  SDK.
- **FR-008**: Cada exemplo DEVE documentar no cabeçalho quais variáveis de ambiente
  ou parâmetros precisam ser configurados antes de executar.
- **FR-009**: O repositório DEVE incluir orientação operacional de continuidade para
  importação, exportação e recuperação de documentos em homologação, separando
  claramente o que é tooling de apoio do que é API runtime.
- **FR-011**: O artefato de continuidade DEVE ser entregue como documentação
  operacional com exemplos de comandos, fluxos e resultados esperados, sem exigir
  scripts executáveis dedicados nesta fase.
- **FR-010**: A matriz de cobertura DEVE incluir superfícies auxiliares e lacunas
  operacionais explicitadas pelas fontes oficiais, incluindo ao menos DANFE, DANFE
  NFC-e, QR Code, consulta por chave e recuperação pós-transmissão.

### Compatibility & Contract Constraints

- **CC-001**: O pipeline de CI não altera nenhum export do pacote nem path de
  importação; é adição de infraestrutura sem impacto no contrato público.
- **CC-002**: A matriz de cobertura referencia `src/public-contract.ts` como fonte
  canônica de verdade sobre a superfície pública; qualquer divergência entre os dois
  é considerada erro da matriz, não do código.
- **CC-003**: Os exemplos importam de `'nfe-sdk'` (nome do pacote publicado) usando
  o contrato público compilado/local do pacote; isso não muda o contrato de
  importação para consumidores externos.
- **CC-004**: O pipeline deve passar com os mesmos comandos que já existem em
  `package.json` (`build`, `lint`, `typecheck`, `test`) e pode introduzir script
  adicional específico para verificação documental, desde que não altere o contrato
  público do pacote.

### Knowledge Sources & Provenance

- **KS-001**: Fase 8 do ROADMAP (`docs/ROADMAP.md`) — define as entregas de
  endurecimento para release e os critérios de saída desta fase.
- **KS-002**: `src/public-contract.ts` — fonte canônica da superfície pública atual
  do SDK, base para a matriz de cobertura.
- **KS-003**: `docs/capacidades-sdk.md` e os arquivos `capacidades-sdk.md` por
  família documental — fornecem o vocabulário de capacidades para preencher a matriz.
- **KS-004**: `package.json` scripts existentes — pipeline de CI deve reusar os
  mesmos comandos sem duplicação.
- **KS-005**: `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/manual_emissor_nfe.md`
  — o manual do emissor trata importação, exportação, backup e restauração como
  capacidades operacionais explícitas de suporte ao fluxo fiscal.
- **KS-006**: `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/Manual de Orientação ao Contribuinte - MOC - versão 7.0 - NF-e e NFC-e.md`
  — o MOC define DANFE, DANFE NFC-e e a fila de recibos/consulta de recibo como
  partes explícitas do ciclo operacional.
- **KS-007**: `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/20250324 - Manual_de_Especificações_Técnicas_do_DANFE_NFC-e_QR_Code.md`
  — o manual técnico do DANFE NFC-e e QR Code justifica manter QR Code e consulta
  pública como lacunas visíveis na matriz de cobertura.

### Key Entities

- **Pipeline de CI**: workflow GitHub Actions acionado em PRs e pushes para a
  branch padrão do repositório; jobs: `build`, `lint`, `typecheck`, `test`,
  verificação documental; ambiente Node.js LTS conforme `engines.node` do
  `package.json`.
- **Matriz de cobertura** (`docs/roadmap/coverage-matrix.md`): tabela com colunas `função /
tipo`, `status`, `fase do roadmap`, `referência documental`; cobre toda a
  superfície de `src/index.ts` mais lacunas explícitas do roadmap; funções com apenas
  cobertura unitária são classificadas como `beta`.
- **Exemplos** (`examples/`): scripts `.ts` executáveis com `tsx`; um por fluxo
  principal; importam de `nfe-sdk` via pacote compilado/local; não são parte do
  build de distribuição.
- **Runbook de continuidade**: instrução operacional voltada a homologação que cobre
  importação, exportação e recuperação de documentos, deixando explícito quais
  rotinas preservam ou não o estado fiscal previamente obtido, com exemplos de
  comandos e fluxos de uso.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: O pipeline de CI executa com sucesso em 100% dos commits limpos do
  repositório no estado atual (188 testes passando), incluindo a verificação
  documental.
- **SC-002**: Um PR com erro de typecheck intencional é bloqueado automaticamente
  pelo pipeline antes de qualquer revisão humana.
- **SC-003**: A matriz de cobertura lista 100% das funções exportadas por
  `src/index.ts` com status e fase de roadmap preenchidos.
- **SC-004**: A matriz inclui ao menos 5 lacunas explícitas do roadmap (DANFE, QR
  Code, contingência, DANFE NFC-e, consulta por chave) com status `backlog` ou
  `fora-do-escopo`.
- **SC-005**: Ao menos 3 scripts em `examples/` executam sem erro de importação ou
  tipo quando o SDK está compilado localmente e consumido pelo contrato público.
- **SC-006**: Existe ao menos 1 artefato operacional de continuidade cobrindo
  importação, exportação e recuperação em homologação com distinção clara entre
  tooling e runtime e com exemplos de comandos e fluxos.
- **SC-007**: Nenhum teste existente regride após a adição do pipeline, da matriz,
  dos exemplos e da orientação de continuidade.

## Assumptions

- O repositório usa GitHub como remote e GitHub Actions está disponível para o
  repositório (plano free é suficiente para repositórios públicos ou privados com
  cota gratuita).
- A branch padrão do repositório é a referência canônica para os gatilhos do CI;
  a spec não fixa um nome literal de branch.
- Os exemplos são para fins de demonstração em homologação; não são testados em CI
  automaticamente porque requerem credenciais externas.
- A matriz de cobertura é mantida manualmente com cada novo módulo adicionado ao
  contrato público; não é gerada automaticamente nesta fase.
- O diretório `examples/` não é incluído no tarball publicado (`files` em
  `package.json` não lista `examples/`).
- Os exemplos desta fase validam o contrato público compilado/local; importar
  diretamente de `src` não atende ao objetivo de onboarding desta spec.
- A versão do pacote (`1.0.0`) não é alterada nesta spec; o versionamento semântico
  formal fica como entrega futura dentro da Fase 8.
- Os artefatos de continuidade desta fase não reproduzem a interface do emissor
  legado; eles apenas preservam as capacidades de suporte operacional que as fontes
  oficiais tratam como relevantes para adoção e recuperação.
- Esta fase não exige scripts executáveis dedicados para continuidade; exemplos de
  comandos documentados são suficientes para cumprir o escopo.
