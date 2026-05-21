# Contract: Public NFe Receipt Protocol Facade

## Purpose

Definir o contrato minimo desta feature para promover a reconciliacao por `nRec` conhecido ao import raiz do pacote, sem transformar o SDK em um orquestrador de polling generico nem sobrecarregar a consulta por chave de acesso com semantica concorrente.

## Required Public Surface

### 1. Root import remains the stable entrypoint

O pacote continua sendo consumido pelo import raiz, preservando `authorizeNFe` e adicionando uma capacidade dedicada de recibo:

```ts
import { authorizeNFe, reconcileNFeReceipt } from 'nfe-sdk';
```

- `authorizeNFe` continua responsavel pela submissao inicial e deve tornar observavel quando a resposta for intermediaria com `receiptNumber`.
- `reconcileNFeReceipt` passa a ser a capacidade publica additive e dedicada para retomar um `nRec` conhecido.
- Qualquer tipo novo deve permanecer additive sobre a superficie root, sem quebrar o consumo existente.

### 2. `nRec` is the only public identifier of this slice

- A reconciliacao publica deste slice usa `nRec` conhecido como identificador principal.
- Consulta direta de protocolo por chave de acesso sem recibo continua fora do contrato desta fase.

### 3. Explicit routing context is required

- A operacao dedicada deve exigir contexto explicito de autorizador/ambiente suficiente para roteamento.
- O contrato nao deve depender de cache local da submissao anterior nem de heuristica implicita para resolver o autorizador.

### 4. Receipt reconciliation returns first-class outcomes and explicit boundary classifications

O contrato publicado por esta feature deve conseguir representar:

- `authorized`
- `rejected`
- `denied`
- `unavailable`
- `inconclusive`
- `pending`
- `not-found`
- `protocol-error`
- `usage-error`

Com semantica minima obrigatoria:

- `pending`: a resposta oficial ainda indica processamento em curso e uma nova consulta futura continua semanticamente valida.
- `unavailable`: a consulta oficial nao entrega evidencia documental suficiente porque o servico ou transporte permanece indisponivel nesta tentativa.
- `inconclusive`: a consulta oficial terminou sem `pending`, mas a evidencia retornada ainda nao sustenta uma classificacao confiavel mais forte.
- `not-found`, `protocol-error` e `usage-error`: classificacoes explicitas de boundary/falha operacional; nao promovem por si so um desfecho documental terminal.

Quando houver evidencia suficiente, o resultado pode projetar estado operacional alinhado ao modelo publicado pela spec `020`, mas isso nao substitui a classificacao principal da operacao de recibo.

## Explicit Non-Goals

- criar loop de polling generico, scheduler ou fila operacional
- introduzir consulta direta de protocolo por chave sem `nRec`
- depender de persistencia local para reconstituir roteamento
- suportar recuperacao multi-documento, carteira de recibos ou backlog historico
- transformar `reconcileNFeReceipt` em substituto de `queryNFeDocumentSituation`

## Validation Contract

Esta plan so esta pronta para task generation quando:

- o contrato root additive de `reconcileNFeReceipt` estiver descrito sem conflito com a superficie ja publicada
- `research.md`, `data-model.md` e `quickstart.md` refletirem a decisao de `nRec` conhecido mais contexto explicito de roteamento
- os gates canônicos `npm test`, `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run build` e `npm run validate:tarball` estiverem nomeados
