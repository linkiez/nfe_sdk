# Research: NFe State Operations

## Decision 1: Reuse the existing root operational surface instead of adding a parallel facade

- **Decision**: Implementar o slice de `RFL-002` sobre `queryNFeDocumentSituation`, `cancelNFe`, `submitNFeCorrectionLetter` e `submitNFeInutilization`, compartilhando um modelo novo de estado operacional sem introduzir um novo entrypoint root concorrente.
- **Rationale**: A superficie root ja publica as operacoes necessarias para consulta e manutencao. Reutiliza-las reduz churn contratual e evita dois caminhos publicos para o mesmo problema.
- **Alternatives considered**:
  - Criar uma nova facade root dedicada de estado: rejeitado porque duplicaria a linguagem operacional e aumentaria o custo de compatibilidade additive sem necessidade imediata.

## Decision 2: Keep access-key lookup as the only public identifier in this phase

- **Decision**: A consulta inicial de estado continuara baseada exclusivamente na chave de acesso da `NF-e`.
- **Rationale**: O recorte clarificado da spec exclui `nRec` e polling generico. Isso preserva um slice pequeno, reusavel e coerente com a consulta de situacao ja exposta.
- **Alternatives considered**:
  - Introduzir `nRec` desde o planejamento: rejeitado porque deslocaria o slice para reconciliacao de lote/polling e ampliaria boundary demais.

## Decision 3: Introduce a shared operational-state model for query and maintenance flows

- **Decision**: Criar um modelo compartilhado de `NFe Operational State` e `NFe State Evidence` para alinhar consulta de situacao e manutencoes pos-autorizacao em uma mesma linguagem observavel.
- **Rationale**: Hoje os contratos ja diferenciam consultas e manutencoes, mas ainda sem uma camada unica que conecte evidencia, estado principal e transicao. O slice pede essa consolidacao.
- **Alternatives considered**:
  - Manter contratos independentes por operacao: rejeitado porque perpetuaria a conciliacao manual no consumidor.

## Decision 4: Preserve single-document reconciliation boundaries explicitly

- **Decision**: Limitar o slice a reconciliacao por documento e operacao alvo, deixando multi-documento, distribuicao, persistencia local e filas de retentativa como follow-up explicito.
- **Rationale**: `RFL-002` no roadmap delimita exatamente essa fronteira para evitar um backoffice embutido prematuro.
- **Alternatives considered**:
  - Planejar estado agregado para lote ou historico persistido: rejeitado porque abriria escopo operacional acima da necessidade desta fase.

## Decision 5: Base the slice on existing homologated operational evidence before expanding environments

- **Decision**: Planejar o primeiro fechamento do slice sobre a infraestrutura e fixtures ja publicadas pelo MVP operacional e pelo transporte SOAP, preservando variacoes dominantes por `UF` e ambiente como boundary.
- **Rationale**: O repositório ja expõe `queryNFeServiceStatus`, `queryNFeDocumentSituation` e manutencoes homologadas. O próximo valor está em consolidar estado, não em abrir novos ambientes.
- **Alternatives considered**:
  - Reabrir ambiente/`UF` no mesmo slice: rejeitado porque misturaria `RTM-006` com `RTM-011` e `RTM-012`.

## Current Gap Snapshot

- A superficie root ja publica `queryNFeDocumentSituation`, `cancelNFe`, `submitNFeCorrectionLetter` e `submitNFeInutilization`, mas a reconciliacao ainda e percebida mais como operacoes separadas do que como uma leitura unica de estado.
- `src/canonical/nfe/contracts.ts` ja possui `DocumentSituationResult` e `OperationalMaintenanceOutcome`, mas ainda sem um modelo compartilhado de estado/evidencia para reconciliacao por documento.
- O roadmap coloca `RFL-002` depois dos slices basicos e ainda sem spec propria, enquanto `RFL-004`, `RFL-005`, `RFL-006` e `RFL-007` ja foram tratados por specs dedicadas.

## Expected Planning Outcome

- Definir um modelo tecnico unico para estado operacional e evidencias por documento.
- Atualizar contratos e mapeadores existentes sem criar superposicao de entrypoints root.
- Explicitar boundaries de `nRec`, polling generico, distribuicao, multi-documento e variacao estadual como backlog futuro, nao como escopo implícito desta fase.

## Implementation Notes

- O modelo compartilhado foi consolidado em `src/canonical/nfe/operational-state.ts`.
- `queryNFeDocumentSituation` agora projeta estados `authorized`, `rejected`, `canceled`, `inutilized`, `pending`, `unavailable` e `inconclusive` a partir de `cStat`, `xMotivo`, `nProt` e da classificacao de transporte.
- `cancelNFe`, `submitNFeCorrectionLetter` e `submitNFeInutilization` agora devolvem `updatedState` coerente com a mesma linguagem de estado.
- As boundaries explicitadas da feature ficaram publicadas em `publicPackageContract.operationalBoundaries` e continuam fora do root contract executavel como `nRec`, polling generico, multi-documento, persistencia local e variacao dominante por `UF`.
