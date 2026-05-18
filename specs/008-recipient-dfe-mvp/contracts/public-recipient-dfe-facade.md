# Contract: Public Recipient DFe Facade

## Purpose

Definir a superficie publica inicial do MVP do destinatario para a feature 008, preservando o import raiz como entrypoint estavel e escondendo distribuicao DFe, assinatura e transporte atras de operacoes orientadas a aplicacao.

## Normative Contract Source

- `package.json#exports["."]` continua sendo a fonte normativa do contrato publicado.
- O import raiz permanece como unico entrypoint runtime estavel desta fase.
- Este contrato descreve a ampliacao publica esperada para o MVP do destinatario sem promover subpaths como contrato principal.

## Required Public Surface

### 1. Root import remains the stable entrypoint

O pacote deve continuar sendo consumido pelo import raiz e passar a expor o primeiro conjunto operacional do lado do destinatario:

```ts
import {
  createSigningContext,
  distributeRecipientDFe,
  manifestRecipientOperation,
} from 'nfe-sdk';
```

- `distributeRecipientDFe` executa a distribuicao DFe via `distNSU` em formato estruturado.
- `manifestRecipientOperation` registra um dos quatro eventos basicos de Manifestacao do Destinatario.
- Ambas as funcoes entram de forma additive sobre a superficie root existente.

Fluxo minimo esperado para o MVP:

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

console.log(
  distribution.documents[0]?.kind,
  distribution.cursor.maxNSU,
  manifestation.classification,
);
```

### 2. Initial recipient input expectations

A distribuicao desta fase deve aceitar:

- ambiente suportado
- ator do destinatario PJ ou PF
- `ultNSU` como cursor inicial ou de continuidade
- timeout opcional
- executor de request opcional para configuracao externa de rede

A manifestacao desta fase deve aceitar:

- ambiente suportado
- ator do destinatario PJ ou PF
- chave de acesso da NF-e
- um dos quatro eventos basicos suportados
- justificativa complementar quando exigida
- contexto reutilizavel de assinatura
- timeout opcional
- executor de request opcional

### 3. Required behavior of the initial recipient slice

- O SDK deve orquestrar internamente a transmissao e o tratamento da distribuicao e da manifestacao solicitadas.
- O SDK nao deve exigir XML bruto previamente serializado ou assinado como contrato principal do MVP.
- `distributeRecipientDFe` deve devolver `classification`, `cursor`, `documents` e `transportOutcome`.
- `documents` deve distinguir, no minimo, envelopes de resumo e de documento completo.
- `manifestRecipientOperation` deve devolver `classification`, `applicationStatusCode`, `applicationStatusMessage`, `transportOutcome` e, quando disponivel, `protocolNumber`.
- O SDK deve distinguir pelo menos sucesso operacional, lote vazio, rejeicao funcional, indisponibilidade, dependencia externa e erro de uso.
- O SDK deve exigir justificativa apenas para operacao nao realizada.
- O SDK deve manter separado o registro da manifestacao e o download posterior da NF-e liberada.

### 4. Initial supported scope

O primeiro MVP cobre apenas:

- ambiente `homologation`
- distribuicao via `distNSU`
- destinatario PJ ou PF
- envelopes tipados de resumo e documento completo
- manifestacao do destinatario para `210200`, `210210`, `210220` e `210240`
- endpoints nacionais compartilhados consolidados pelo SDK para o recorte homologado

### 5. Internal boundaries that remain non-contractual

Os seguintes elementos permanecem internos ou fora de escopo nesta fase:

- `consNSU` e `consChNFe`
- automacao de download apos manifestacao
- producao, variacoes por UF e expansoes multi-autorizador
- eventos genericos, EPEC e politicas amplas de retry ou polling
- inventario gerado em `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/`

## Compatibility Notes

- Esta fase deve ser additive sobre o contrato root estabilizado nas features anteriores.
- Qualquer mudanca breaking na nomenclatura das operacoes acima exigira revisao contratual e nota de migracao.
- Caso o MVP posterior passe a suportar modos adicionais de distribuicao ou automacao de download, isso exigira avaliacao explicita do contrato para evitar sobrecarga semantica da superficie root.

## Validation Expectations

- Testes de contrato devem verificar que o import raiz expoe apenas a ampliacao declarada.
- Testes de unidade devem verificar cursor, envelopes de distribuicao, classificacao operacional e limites de cobertura.
- Testes de integracao por fixture devem verificar distribuicao `distNSU` e os quatro eventos basicos de manifestacao em homologacao.
- O smoke do tarball deve continuar confirmando que o pacote publicado expoe a superficie root esperada sem depender do workspace aberto.
- O green minimo deste slice inclui cenarios observaveis de lote vazio, continuidade via NSU, manifestacao com e sem justificativa obrigatoria e fronteiras explicitas de escopo.
