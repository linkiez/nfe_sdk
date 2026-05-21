# Contract: Public Recipient Continuity Facade

## Purpose

Definir a ampliacao publica do fluxo do destinatario acima da spec `008`, preservando `distributeRecipientDFe` e `manifestRecipientOperation` como superficies existentes e adicionando uma recuperacao posterior dedicada, sem promover `consNSU` ou `consChNFe` como contrato principal.

## Normative Contract Source

- `package.json#exports["."]` continua sendo a fonte normativa do contrato publicado.
- O import raiz permanece como unico entrypoint runtime estavel desta fase.
- Este contrato descreve a evolucao additive esperada para a continuidade do destinatario.

## Required Public Surface

### 1. Root import remains the stable entrypoint

O pacote continua sendo consumido pelo import raiz e passa a expor a continuidade do destinatario sem quebrar a baseline existente:

```ts
import {
  createSigningContext,
  distributeRecipientDFe,
  manifestRecipientOperation,
  retrieveRecipientDocument,
} from 'nfe-sdk';
```

- `distributeRecipientDFe` continua executando `distNSU`, mas passa a devolver orientacao explicita da proxima acao de continuidade.
- `manifestRecipientOperation` continua registrando o evento sem baixar automaticamente a NF-e liberada.
- `retrieveRecipientDocument` executa o passo posterior e separado para recuperar o documento liberado ao destinatario.
- Todas as funcoes entram de forma additive sobre a superficie root existente.

Fluxo minimo esperado para a continuidade:

```ts
const distribution = await distributeRecipientDFe({
  actor: {
    documentNumber: '12345678909',
    documentType: 'cpf',
  },
  environment: 'homologation',
  requestExecutor,
  timeoutMs: 5000,
  ultNSU: '000000000000000',
});

const manifestation = await manifestRecipientOperation({
  accessKey: '35190500000000000000550010000000011000000010',
  actor: {
    documentNumber: '12345678909',
    documentType: 'cpf',
  },
  environment: 'homologation',
  eventType: 'ciencia-da-operacao',
  requestExecutor,
  signingContext: createSigningContext({
    passphrase: '***',
    source: { kind: 'pfx-file', path: '/secure/certificate.pfx' },
  }),
  timeoutMs: 5000,
});

const retrieved = await retrieveRecipientDocument({
  actor: {
    documentNumber: '12345678909',
    documentType: 'cpf',
  },
  environment: 'homologation',
  startingCursor: distribution.cursor.ultNSU,
  target: {
    accessKey: '35190500000000000000550010000000011000000010',
    documentKinds: ['full-document'],
  },
  requestExecutor,
  timeoutMs: 5000,
});

console.log(
  distribution.continuation.nextAction,
  manifestation.downloadRemainsSeparate,
  retrieved.classification,
);
```

### 2. Required continuity behavior

- `distributeRecipientDFe` deve continuar devolvendo `classification`, `cursor`, `documents` e `transportOutcome`.
- `distributeRecipientDFe` deve ganhar um bloco additive de continuidade que torne explicitos `nextAction`, `cursorAdvanced` e o backoff recomendado quando aplicavel.
- `retrieveRecipientDocument` deve aceitar ator, ambiente suportado, cursor inicial conhecido, criterio funcional do documento esperado, timeout opcional e executor de request opcional.
- `retrieveRecipientDocument` deve devolver `classification`, `distributionOutcome` e, quando encontrado, `matchedDocument`.
- `retrieveRecipientDocument` deve devolver `document-available` quando o documento alvo for encontrado, `document-pending` quando a distribuicao avancar sem o alvo esperado, e preservar boundaries como `no-new-documents`, `dependency-limited`, `unsupported-scope` e `usage-error`.
- O SDK deve manter explicitamente separados o registro da manifestacao e a recuperacao posterior do documento.
- O SDK nao deve exigir XML bruto como contrato principal para nenhum dos passos da continuidade.

### 3. Required supported scope

O primeiro corte de continuidade cobre apenas:

- ambiente `homologation`
- continuidade observavel sobre `distNSU`
- destinatario PJ ou PF
- envelopes estruturados de resumo e documento completo
- recuperacao posterior do documento a partir de nova distribuicao controlada
- boundaries operacionais explicitas para ausencia de novidades, dependency-limited, uso invalido e indisponibilidade

### 4. Internal boundaries that remain non-contractual

Os seguintes elementos permanecem internos ou fora de escopo nesta fase:

- `consNSU` e `consChNFe` como consultas auxiliares promovidas
- polling agressivo, sincronizacao recorrente de carteira e automacao de backoffice
- producao e rollout operacional amplo
- automacao de credenciamento
- inventario gerado em `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/`

## Compatibility Notes

- Esta fase deve ser additive sobre o contrato root e sobre a spec `008`.
- `distributeRecipientDFe` nao perde semantica existente; apenas ganha campos additive para orientar continuidade.
- `manifestRecipientOperation` preserva a boundary de que o download posterior continua separado.
- Qualquer tentativa de promover `consNSU` ou `consChNFe` exigira contrato proprio e avaliacao semver separada.

## Validation Expectations

- Testes de contrato devem verificar a nova facade root e a permanencia das boundaries publicas.
- Testes de integracao por fixture devem verificar resumo antes da liberacao, documento completo liberado em etapa posterior e resposta valida sem novidades.
- Testes de unidade devem verificar a orientacao de continuidade, a deteccao do documento esperado e a classificacao de boundaries.
- O smoke do tarball deve continuar confirmando a superficie root publicada.
