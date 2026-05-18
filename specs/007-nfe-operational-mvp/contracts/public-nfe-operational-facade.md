# Contract: Public NFe Operational Facade

## Purpose

Definir a superficie publica inicial do MVP operacional de NFe para a feature 007, preservando o import raiz como entrypoint estavel e escondendo serializacao, assinatura e transporte atras de operacoes orientadas a aplicacao.

## Normative Contract Source

- `package.json#exports["."]` continua sendo a fonte normativa do contrato publicado.
- O import raiz permanece como unico entrypoint runtime estavel desta fase.
- Este contrato descreve a ampliacao publica esperada para o MVP operacional de NFe sem promover subpaths como contrato principal.

## Required Public Surface

### 1. Root import remains the stable entrypoint

O pacote deve continuar sendo consumido pelo import raiz e passar a expor o primeiro conjunto operacional de NFe:

```ts
import {
  authorizeNFe,
  cancelNFe,
  createSigningContext,
  queryNFeDocumentSituation,
  queryNFeServiceStatus,
  submitNFeCorrectionLetter,
  submitNFeInutilization,
} from 'nfe-sdk';
```

- `authorizeNFe` executa o fluxo de autorizacao de uma NFe unica ou de um lote suportado a partir de dados canonicos.
- `queryNFeServiceStatus` devolve o estado operacional do servico de autorizacao em formato estruturado.
- `queryNFeDocumentSituation` consulta a situacao do documento por chave de acesso.
- `submitNFeInutilization`, `cancelNFe` e `submitNFeCorrectionLetter` executam as tres manutencoes obrigatorias do MVP.
- Todas as funcoes entram de forma additive sobre a superficie root existente.

O MVP operacional publicado por esta feature passa a cobrir o conjunto completo de autorizacao, consultas e manutencoes obrigatorias previsto para esta fase.

Fluxo minimo esperado para o MVP:

```ts
const authorization = await authorizeNFe({
  documents: {
    kind: 'single-document',
    payload: {
      documentId: 'NFE-123',
      environment: 'homologation',
      version: '4.00',
    },
  },
  environment: 'homologation',
  requestExecutor,
  signingContext: createSigningContext({
    passphrase: '***',
    source: { kind: 'pfx-file', path: '/secure/certificate.pfx' },
  }),
  timeoutMs: 5000,
});

const serviceStatus = await queryNFeServiceStatus({
  environment: 'homologation',
  requestExecutor,
});

const documentSituation = await queryNFeDocumentSituation({
  accessKey: '35190500000000000000550010000000011000000010',
  environment: 'homologation',
  requestExecutor,
});

console.log(
  authorization.classification,
  serviceStatus.applicationStatusCode,
  documentSituation.protocolNumber,
);

const inutilization = await submitNFeInutilization({
  canonicalPayload: {
    ano: '2025',
    cnpj: '00000000000000',
    nNFFin: '10',
    nNFIni: '10',
    serie: '1',
    xJust: 'Numeracao nao utilizada em homologacao',
  },
  environment: 'homologation',
  requestExecutor,
});

const cancellation = await cancelNFe({
  accessKey: '35190500000000000000550010000000011000000010',
  canonicalPayload: {
    nSeqEvento: '1',
    tpEvento: '110111',
    xJust: 'Cancelamento homologado',
  },
  environment: 'homologation',
  requestExecutor,
});

const correctionLetter = await submitNFeCorrectionLetter({
  accessKey: '35190500000000000000550010000000011000000010',
  canonicalPayload: {
    nSeqEvento: '1',
    tpEvento: '110110',
    xCorrecao: 'Correcao homologada do campo complementar',
  },
  environment: 'homologation',
  requestExecutor,
});

console.log(
  inutilization.protocolNumber,
  cancellation.protocolNumber,
  correctionLetter.protocolNumber,
);
```

### 2. Initial operational input expectations

A autorizacao desta fase deve aceitar:

- ambiente suportado
- dados canonicos de uma NFe unica ou de um lote suportado
- contexto reutilizavel de assinatura
- timeout opcional
- executor de request opcional para configuracao externa de rede

As consultas desta fase devem aceitar:

- ambiente suportado
- chave de acesso para consulta de situacao do documento
- timeout opcional
- executor de request opcional

As manutencoes desta fase devem aceitar:

- ambiente suportado
- dados canonicos especificos da operacao
- chave de acesso quando aplicavel
- contexto reutilizavel de assinatura quando exigido
- timeout opcional
- executor de request opcional

### 3. Required behavior of the initial operational slice

- O SDK deve orquestrar internamente a montagem, serializacao, assinatura e transmissao necessarias para a operacao solicitada.
- O SDK nao deve exigir XML bruto previamente serializado ou assinado como contrato principal do MVP.
- O SDK deve aceitar tanto uma NFe unica quanto um lote suportado no fluxo inicial de autorizacao.
- `authorizeNFe` deve devolver `classification`, `documentStatuses`, `transportOutcome` e, quando disponivel, `protocolNumber` ou `receiptNumber`.
- O SDK deve devolver resultados orientados a aplicacao que preservem a evidencia subjacente do transporte.
- O SDK deve distinguir pelo menos sucesso operacional, rejeicao funcional, indisponibilidade, erro de uso e erro protocolar nas operacoes de alto nivel.
- O SDK deve tratar resultados intermediarios de autorizacao como estados validos observaveis, sem polling automatico inicial.
- O SDK deve usar apenas a chave de acesso como identificador publico inicial da consulta de situacao.
- O SDK deve manter inutilizacao, cancelamento e carta de correcao como cobertura obrigatoria deste MVP.

### 4. Initial supported scope

O primeiro MVP cobre apenas:

- ambiente `homologation`
- autorizacao de NFe unica e lote suportado
- consulta de status do servico
- consulta de situacao por chave de acesso
- inutilizacao
- cancelamento
- carta de correcao
- endpoints nacionais compartilhados consolidados pelo SDK para o recorte homologado

### 5. Internal boundaries that remain non-contractual

Os seguintes elementos permanecem internos ou fora de escopo nesta fase:

- forma exata de composicao entre camadas canonica, de assinatura e de transporte
- implementacao concreta do executor HTTP padrao
- gerencia de mTLS e secrets operacionais pelo SDK
- variacoes por UF, producao, contingencias especiais e multi-autorizador
- polling automatico de recibo ou politicas amplas de retry/backoff
- inventario gerado em `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/`

## Compatibility Notes

- Esta fase deve ser additive sobre o contrato root estabilizado nas features 003, 004, 005 e 006.
- Qualquer mudanca breaking na nomenclatura das operacoes acima exigira revisao contratual e nota de migracao.
- Caso o MVP posterior passe a aceitar identificadores adicionais para consulta de situacao ou novas variacoes de lote, isso exigira avaliacao explicita do contrato para evitar sobrecarga semantica da superficie root.

## Validation Expectations

- Testes de contrato devem verificar que o import raiz expoe apenas a ampliacao declarada.
- Testes de unidade devem verificar mapeadores de entrada e saida, classificacao operacional e limites de cobertura.
- Testes de integracao por fixture devem verificar autorizacao, status do servico, consulta de situacao, inutilizacao, cancelamento e carta de correcao para o recorte suportado.
- O smoke do tarball deve continuar confirmando que o pacote publicado expoe a superficie root esperada sem depender do workspace aberto.
- O green minimo deste slice inclui cenarios observaveis de autorizacao final e intermediaria, consulta por chave de acesso e as tres manutencoes obrigatorias.
