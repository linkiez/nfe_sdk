# Contract: Public NFC-e UF Promotion Facade

## Purpose

Definir a ampliacao publica esperada para o slice `015`, preservando o import raiz como entrypoint estavel do pacote e expandindo o cohort operacional de `NFC-e` de `SP` para `SP` + `PR` sem promover `CSC`, `QR Code`, `DANFE NFC-e`, contingencia `offline` ou consulta do consumidor a runtime.

## Normative Contract Source

- `package.json#exports["."]` continua sendo a fonte normativa da superficie publicada.
- O import raiz permanece como unico entrypoint runtime estavel desta fase.
- Este contrato descreve a ampliacao esperada do comportamento de `authorizeNFCe`, e nao uma nova facade publica.

## Required Public Surface

### 1. Root import remains the stable entrypoint

O pacote continua sendo consumido pelo import raiz:

```ts
import { authorizeNFCe, createSigningContext } from 'nfe-sdk';
```

- `authorizeNFCe` permanece a unica operacao root para autorizacao operacional de `NFC-e`.
- `createSigningContext` continua sendo a dependencia publica reutilizavel para assinatura.
- Esta feature nao deve introduzir nova facade root apenas para distinguir `PR` de `SP`.

### 2. Initial promoted cohort for this slice

O cohort suportado nesta fase passa a incluir:

- `SP` como piloto operacional ja estabilizado;
- `PR` como primeira `UF` adicional promovida;
- falha deterministica pre-transporte para qualquer `UF` fora desse cohort.

### 3. Required behavior of the promoted cohort

- O SDK deve continuar inferindo a `UF` a partir do proprio documento.
- O SDK deve selecionar internamente o perfil operacional correspondente a `SP` ou `PR`.
- O SDK deve manter a mesma taxonomia observavel de classification, boundary e transport outcome ja publicada na spec `010`.
- O SDK deve falhar antes do transporte quando a `UF` resolvida estiver fora de `SP` e `PR`.
- O SDK deve preservar o comportamento atual de `SP` sem regressao.

### 4. Deferred boundaries that remain non-contractual

Os itens abaixo permanecem fora da promocao imediata desta fase:

- `CSC`
- `QR Code`
- `DANFE NFC-e`
- consulta publica do consumidor
- contingencia `offline`
- `EPEC NFC-e`
- cancelamento por substituicao
- onboarding automatizado e credenciamento automatizado

### 5. Expected runtime examples

Fluxo minimo esperado para `PR`:

```ts
const outcome = await authorizeNFCe({
  document: prDocument,
  environment: 'homologation',
  requestExecutor,
  signingContext,
});

console.log(
  outcome.classification,
  outcome.acceptedForTransport,
  outcome.protocolNumber,
);
```

Boundary minima esperada para `UF` fora do cohort:

```ts
const blocked = await authorizeNFCe({
  document: mgDocument,
  environment: 'homologation',
  requestExecutor,
  signingContext,
});

console.log(
  blocked.classification,
  blocked.acceptedForTransport,
  blocked.coverageBoundary?.code,
);
```

## Compatibility Notes

- Esta fase deve ser additive sobre o contrato root estabilizado nas features `010` e `014`.
- A promocao de `PR` nao deve alterar o shape publico de `authorizeNFCe`.
- Qualquer futura promocao de novas `UFs` exige revisao contratual explicita para evitar que o cohort cresca sem racional publico.
- `PB`, `MS`, `GO`, `SC` e `CE` continuam explicitamente fora deste corte por motivos dominantes distintos e documentados, nao por esquecimento editorial.

## Validation Expectations

- Testes de contrato devem confirmar que a superficie root continua a mesma.
- Testes de integracao devem confirmar sucesso homologado para `PR` e ausencia de regressao em `SP`.
- Testes de unidade devem confirmar selecao de perfil para `SP` e `PR` e boundary deterministica para `UF` fora do cohort.
- Documentacao e roadmap devem continuar distinguindo runtime promovido de backlog auxiliar.