# Quickstart: Recipient Continuity

## Objective

Validar o recorte de continuidade do destinatario sem reabrir `consNSU`, `consChNFe` ou producao. O quickstart parte da baseline da spec `008`: distribuicao via `distNSU`, manifestacao basica e recuperacao posterior como passo separado.

## Prerequisites

- Node.js `>=18.18`
- dependencias instaladas com `npm install`
- certificado digital valido para homologacao
- executor de request configurado para o Ambiente Nacional em homologacao
- fixture homologada para um fluxo com resumo inicial e documento liberado em distribuicao posterior

## Step 1: Confirm the package gates

Execute os gates antes e depois da implementacao:

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
npm run validate:tarball
```

Executar tambem a validacao focada do slice antes dos gates completos:

```bash
npx jest tests/contract/root-recipient-continuity-facade.test.ts tests/integration/recipient-continuity.test.ts tests/unit/canonical/recipient/retrieve-recipient-document.test.ts --runInBand
```

## Step 2: Exercise the recipient baseline

Confirme a baseline do destinatario ja existente:

- `distributeRecipientDFe` continua retornando `classification`, `cursor` e `documents`
- `manifestRecipientOperation` continua registrando o evento sem baixar automaticamente a NF-e
- producao, `consNSU`, `consChNFe`, polling agressivo e credenciamento automatizado permanecem fora do recorte

## Step 3: Validate explicit continuation signals

A continuidade desta slice fica correta quando:

- `distributeRecipientDFe` informa de forma additive a proxima acao recomendada
- o cursor permite distinguir avanco real, ausencia legitima de novidades e necessidade de aguardar backoff
- o contrato continua orientado ao integrador, sem exigir parsing manual do XML bruto

Exemplo esperado de leitura operacional:

```ts
const distribution = await distributeRecipientDFe({
  actor: {
    documentNumber: '12345678909',
    documentType: 'cpf',
  },
  environment: 'homologation',
  requestExecutor,
  ultNSU: '000000000000000',
});

console.log(distribution.classification);
console.log(distribution.cursor.ultNSU);
console.log(distribution.continuation.nextAction);
```

## Step 4: Validate separated follow-up retrieval

A recuperacao posterior fica correta quando:

- a manifestacao continua separada do download posterior
- `retrieveRecipientDocument` usa um cursor conhecido e um alvo funcional do documento esperado
- o resultado devolve documento encontrado, `document-pending`, `no-new-documents`, `dependency-limited` ou boundary explicita, sem simular sucesso

Exemplo esperado:

```ts
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
});

console.log(retrieved.classification);
console.log(retrieved.matchedDocument?.kind);
```

## Step 5: Check the expected boundaries

O slice ainda esta correto quando estes itens continuam fora do contrato:

- `consNSU`
- `consChNFe`
- producao
- polling agressivo ou loops internos de retentativa
- sincronizacao recorrente de carteira ou backoffice assistido

## Completion Criteria

A fase de planning desta spec fica pronta quando:

- `plan.md`, `research.md`, `data-model.md`, `contracts/` e `quickstart.md` estiverem alinhados
- o contrato deixar explicita a continuidade do destinatario sem duplicar a distribuicao basica
- a recuperacao posterior estiver modelada como passo separado e additive
- os testes focados de continuidade e os gates de qualidade puderem ser executados sem arquivos faltantes
