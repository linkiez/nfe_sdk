# Contract: Public Contingency Boundaries Facade

## Purpose

Definir a ampliacao publica esperada para o slice `016`, preservando o import raiz como entrypoint estavel do pacote e tornando a contingencia por ambiente observavel nas facades operacionais existentes sem promover emissor embutido, `EPEC` completo ou contingencia `offline` para runtime.

## Normative Contract Source

- `package.json#exports["."]` continua sendo a fonte normativa da superficie publicada.
- O import raiz permanece como unico entrypoint runtime estavel desta fase.
- Este contrato descreve a ampliacao esperada das facades operacionais ja publicadas, e nao uma nova API dedicada a contingencia.

## Required Public Surface

### 1. Root import remains the stable entrypoint

O pacote continua sendo consumido pelo import raiz:

```ts
import { authorizeNFe, authorizeNFCe, queryNFeServiceStatus } from 'nfe-sdk';
```

- `authorizeNFe` e `authorizeNFCe` permanecem como facades operacionais estaveis do pacote.
- `authorizeNFe` e a primeira facade operacional a promover a boundary observavel deste slice.
- `queryNFeServiceStatus` continua sendo parte da superficie root para diagnostico tecnico do ambiente.
- Esta feature nao deve introduzir uma nova facade root apenas para contingencia.

### 2. Supported observable contingency boundary for this slice

O recorte suportado nesta fase passa a incluir:

- classificacao observavel para ambientes compartilhados de contingencia, limitada a `SVC-AN` e `SVC-RS` quando o fluxo estiver dentro do recorte promoted;
- preservacao do comportamento operacional normal quando nenhum criterio de contingencia estiver ativo;
- boundary deterministica e pre-operacional para `EPEC` e contingencia `offline` enquanto permanecerem fora do runtime promoted.

### 3. Required behavior of the promoted boundary

- O SDK deve manter as facades operacionais existentes como ponto de entrada.
- O SDK deve identificar quando `authorizeNFe` entra na trilha de contingencia suportada por ambiente.
- O SDK deve devolver `classification`, `coverageBoundary.code`, `coverageBoundary.message` e `coverageBoundary.contingencyEnvironment` observaveis sem simular sucesso operacional normal quando a contingencia suportada estiver ativa.
- O SDK deve preservar o mesmo shape publico quando o fluxo continuar no caminho normal.

### 4. Deferred boundaries that remain non-contractual for runtime success

Os itens abaixo permanecem fora da promocao imediata desta fase:

- `EPEC` como fluxo runtime completo
- contingencia `offline` da `NFC-e`
- persistencia local obrigatoria
- recuperacao assistida completa
- automacao de credenciamento
- emissor embutido ou UI operacional

### 5. Expected runtime examples

Fluxo normal preservado:

```ts
const outcome = await authorizeNFe({
  documents: {
    kind: 'single-document',
    payload: nfeDocument,
  },
  environment: 'homologation',
  requestExecutor,
  signingContext,
});

console.log(outcome.classification, outcome.protocolNumber);
```

Boundary observavel de contingencia suportada:

```ts
const outcome = await authorizeNFe({
  documents: {
    kind: 'single-document',
    payload: {
      ...nfeDocument,
      payload: {
        cUF: '33',
      },
    },
  },
  environment: 'production',
  requestExecutor,
  signingContext,
});

console.log(
  outcome.classification,
  outcome.coverageBoundary?.code,
  outcome.coverageBoundary?.contingencyEnvironment,
);
```

Boundary minima esperada para caminho ainda deferido:

```ts
const outcome = await authorizeNFCe({
  document: nfceDocument,
  environment: 'homologation',
  requestExecutor,
  signingContext,
  requestedCapabilities: ['offline-contingency'],
});

console.log(outcome.classification, outcome.coverageBoundary?.code);
```

## Compatibility Notes

- Esta fase deve ser additive sobre o contrato root estabilizado nas specs `006`, `007`, `010`, `014` e `015`.
- A promocao de contingencia por ambiente nao deve alterar o shape publico das facades atuais.
- Qualquer futura promocao de `EPEC` ou `offline` exige revisao contratual explicita para evitar que o runtime cresca por inferencia.

## Validation Expectations

- Testes de contrato devem confirmar que a superficie root continua a mesma.
- Testes de unidade e integracao devem confirmar que a classificacao de contingencia suportada e observavel sem quebrar o baseline do fluxo normal.
- Testes devem confirmar que `EPEC` e `offline` permanecem como boundary explicita, nao como sucesso parcial implicito.
- Documentacao e roadmap devem continuar distinguindo diagnostico observavel, backlog de runtime, `tooling` e `documentacao`.
