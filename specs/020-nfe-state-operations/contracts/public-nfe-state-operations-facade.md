# Contract: Public NFe State Operations Facade

## Purpose

Definir o contrato minimo desta feature para consolidar leitura de estado e manutencoes pos-autorizacao de `NF-e` sem abrir uma facade root concorrente nem ampliar o escopo para polling generico, `nRec` ou multi-documento.

## Required Public Surface

### 1. Root import remains the stable entrypoint

O pacote deve continuar sendo consumido pelo import raiz, reutilizando as funcoes ja publicadas para `NF-e`:

```ts
import {
  cancelNFe,
  queryNFeDocumentSituation,
  submitNFeCorrectionLetter,
  submitNFeInutilization,
} from 'nfe-sdk';
```

- `queryNFeDocumentSituation` deve passar a expor uma leitura operacional de estado coerente com o novo modelo compartilhado.
- `cancelNFe`, `submitNFeCorrectionLetter` e `submitNFeInutilization` devem devolver resultados reconciliaveis com essa mesma leitura de estado.
- Qualquer tipo novo deve permanecer additive sobre a superficie root, sem quebrar o consumo existente.

Na implementacao atual, esse contrato additive ficou materializado assim:

- `queryNFeDocumentSituation` devolve `state.primaryState`, `state.stateCode`, `state.stateMessage`, `state.evidence` e `pendingReason` quando aplicavel.
- `cancelNFe`, `submitNFeCorrectionLetter` e `submitNFeInutilization` devolvem `updatedState` quando a manutencao conclui com evidencia suficiente.
- `publicPackageContract.operationalBoundaries` publica as fronteiras explicitas de `receipt-polling`, `multi-document-reconciliation`, `local-persistence` e `uf-variance`.

### 2. Public identifier remains access-key only

- A consulta publica deste slice usa apenas a chave de acesso da `NF-e`.
- `nRec`, polling generico e reconciliacao de lote permanecem fora do contrato desta fase.

### 3. State and evidence become first-class outputs

O contrato publicado por esta feature deve conseguir representar:

- estado principal do documento
- protocolo observado quando existir
- codigo e mensagem oficiais relevantes
- evidencias suficientes para explicar estados pendentes ou inconclusivos
- falha explicita quando a transicao ou consulta sair do recorte suportado

## Explicit Non-Goals

- criar um novo backoffice ou gestor de ciclo de vida completo
- introduzir `nRec` como identificador publico deste slice
- suportar persistencia local ou sincronizacao multi-documento
- promover polling generico, distribuicao ou variacao dominante por `UF` para dentro do recorte
- tratar `publicPackageContract.operationalBoundaries` como promessa de suporte futuro automatico; elas continuam sendo apenas boundary declarada

## Validation Contract

Esta plan so esta pronta para task generation quando:

- o contrato root additive estiver descrito sem conflito com a superficie ja publicada
- `research.md`, `data-model.md` e `quickstart.md` refletirem a decisao de chave de acesso como identificador unico
- os gates canônicos `npm test`, `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run build` e `npm run validate:tarball` estiverem nomeados
