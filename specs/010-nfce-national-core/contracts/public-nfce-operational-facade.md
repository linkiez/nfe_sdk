# Contract: Public NFC-e Operational Facade

## Purpose

Definir a superficie publica planejada para o primeiro slice operacional de NFC-e, preservando o import raiz como entrypoint estavel do pacote e escondendo resolucao de UF, serializacao, assinatura e transporte atras de uma unica operacao orientada a aplicacao.

## Normative Contract Source

- `package.json#exports["."]` continua sendo a fonte normativa do contrato publicado.
- O import raiz permanece como unico entrypoint runtime estavel desta fase.
- Este contrato descreve a ampliacao publica esperada para o slice 010 sem promover subpaths como contrato principal.

## Required Public Surface

### 1. Root import remains the stable entrypoint

O pacote deve continuar sendo consumido pelo import raiz e passar a expor a operacao planejada de autorizacao NFC-e:

```ts
import { authorizeNFCe, createSigningContext } from 'nfe-sdk';
```

- `authorizeNFCe` executa a autorizacao homologada da NFC-e sobre o pipeline nacional compartilhado e o primeiro perfil operacional estadual.
- `createSigningContext` continua sendo a dependencia publica reutilizavel para assinatura.
- A nova operacao entra de forma additive sobre a superficie root existente.

Fluxo minimo esperado para o slice:

```ts
const outcome = await authorizeNFCe({
  document: nfceDocument,
  environment: 'homologation',
  requestExecutor,
  signingContext: createSigningContext({
    passphrase: '***',
    source: { kind: 'pfx-file', path: '/secure/certificate.pfx' },
  }),
  timeoutMs: 5000,
});

console.log(
  outcome.classification,
  outcome.acceptedForTransport,
  outcome.protocolNumber,
);
```

### 2. Initial NFC-e input expectations

A operacao desta fase deve aceitar:

- documento NFC-e suficiente para montagem do pedido e inferencia da UF
- ambiente suportado
- contexto reutilizavel de assinatura
- timeout opcional
- executor de request opcional para configuracao externa de rede
- `requestedCapabilities` opcional apenas para explicitar que a aplicacao tentou habilitar uma superficie deferida neste slice

A API desta fase nao deve exigir:

- selecao manual de UF
- CSC
- parametros de QR Code
- configuracao de DANFE NFC-e
- chave de contingencia offline

### 3. Required behavior of the initial NFC-e slice

- O SDK deve inferir a UF operacional a partir do proprio documento.
- O SDK deve falhar antes do transporte como erro local quando a UF nao puder ser inferida de forma deterministica.
- O SDK deve falhar antes do transporte com boundary explicita quando a UF inferida estiver fora do piloto estadual promovido.
- O SDK deve falhar antes do transporte com `unsupported-scope` quando `requestedCapabilities` incluir QR Code, DANFE NFC-e, CSC, credenciamento automatizado ou contingencia offline.
- O SDK deve aceitar apenas `homologation` nesta fase.
- O SDK deve orquestrar internamente serializacao, assinatura e transporte sem exigir XML bruto como contrato principal.
- `authorizeNFCe` deve devolver `classification`, `acceptedForTransport`, `validationFailures`, `coverageBoundary` e `transportOutcome` quando aplicavel.
- O SDK deve distinguir pelo menos erro local, boundary de cobertura, rejeicao funcional remota, indisponibilidade, dependencia externa e sucesso operacional.
- Em caso de envio remoto bem-sucedido, o outcome deve preservar os codigos funcionais e o protocolo retornado pelo autorizador.

### 4. Initial supported scope

O primeiro slice cobre apenas:

- ambiente `homologation`
- autorizacao operacional de NFC-e
- inferencia automatica de UF a partir do documento
- Sao Paulo como unica UF piloto promovida
- reuso do pipeline existente de serializacao, assinatura e transporte

### 5. Internal boundaries that remain non-contractual

Os seguintes elementos permanecem internos ou fora de escopo nesta fase:

- DANFE NFC-e
- QR Code
- CSC e sua administracao
- credenciamento automatizado
- contingencia offline
- cobertura operacional para outras UFs
- inventario gerado em `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/`

## Compatibility Notes

- Esta fase deve ser additive sobre o contrato root estabilizado nas features anteriores.
- Qualquer mudanca breaking na nomenclatura da operacao acima exigira revisao contratual e nota de migracao.
- Caso fases posteriores adicionem multiplas UFs, QR Code, CSC ou contingencia, isso exigira revisao explicita do contrato para evitar sobrecarga semantica da facade root.

## Validation Expectations

- Testes de contrato devem verificar que o import raiz expoe a nova operacao declarada sem regressao nas facades existentes.
- Testes de unidade devem verificar resolucao de UF, boundaries pre-transporte e taxonomia de outcome.
- Testes de integracao devem verificar ao menos uma autorizacao homologada bem-sucedida para SP e um bloqueio deterministico para UF fora do piloto.
- O smoke do tarball deve continuar confirmando que o pacote publicado expoe a superficie root esperada sem depender do workspace aberto.

Fluxo minimo esperado para boundary de cobertura:

```ts
const outcome = await authorizeNFCe({
  document: nfceFromAnotherState,
  environment: 'homologation',
  requestExecutor,
  signingContext,
});

console.log(
  outcome.classification,
  outcome.acceptedForTransport,
  outcome.coverageBoundary?.code,
);
```

Fluxo minimo esperado para superficie deferida explicitada pela aplicacao:

```ts
const outcome = await authorizeNFCe({
  document: nfceDocument,
  environment: 'homologation',
  requestedCapabilities: ['qr-code'],
  requestExecutor,
  signingContext,
});

console.log(
  outcome.classification,
  outcome.acceptedForTransport,
  outcome.coverageBoundary?.code,
);
```
