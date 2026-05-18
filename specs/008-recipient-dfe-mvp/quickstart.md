# Quickstart: Recipient DFe MVP

## 1. Confirm the current package contract and the recipient-side feature scope

Antes de implementar o primeiro MVP do destinatario, confirme o baseline do pacote, o contrato root e o recorte desta fase:

```bash
sed -n '1,220p' package.json
sed -n '1,260p' src/index.ts
sed -n '1,260p' src/public-contract.ts
sed -n '1,260p' specs/008-recipient-dfe-mvp/spec.md
sed -n '1,260p' specs/008-recipient-dfe-mvp/plan.md
sed -n '1,260p' specs/008-recipient-dfe-mvp/research.md
```

O objetivo desta fase e manter o import raiz como unico entrypoint runtime estavel e acrescentar apenas o primeiro conjunto operacional do lado do destinatario em homologacao.

## 2. Keep recipient facades above transport and signing layers

Implemente o MVP como orquestracao sobre camadas ja existentes:

- use `src/canonical/facade/` para wrappers publicos do import raiz
- introduza a orquestracao do destinatario em camada manual dedicada, separando distribuicao e manifestacao
- reutilize serializacao, assinatura e transporte como detalhes internos
- preserve `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/` como inventario interno
- mantenha producao, `consNSU`, `consChNFe`, EPEC e eventos genericos fora do escopo inicial

## 3. Start with the root recipient operations and expected input shape

O contrato desta fase deve permanecer orientado a resultados de aplicacao:

```ts
import {
  createSigningContext,
  distributeRecipientDFe,
  manifestRecipientOperation,
} from 'nfe-sdk';

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
  distribution.classification,
  distribution.cursor.ultNSU,
  manifestation.protocolNumber,
);
```

Nesta fase:

- a distribuicao deve aceitar apenas `distNSU`
- o contrato deve distinguir envelopes de resumo e documento completo
- PJ e PF entram no recorte suportado
- o registro da manifestacao nao deve baixar automaticamente a NF-e liberada
- o download posterior continua dependendo de nova distribuicao

## 4. Model distribution around observable continuity

Comece pelo fluxo testavel de distribuicao:

- aceite `ultNSU` como cursor inicial e de continuidade
- exponha `ultNSU` e `maxNSU` no resultado estruturado
- trate lote vazio como estado observavel, nao como falha generica
- respeite o backoff operacional quando nao houver novos documentos
- preserve a evidência de `TransportOutcome` sem promover XML bruto como contrato principal

## 5. Keep manifestation explicit and separate from retrieval

Os quatro eventos basicos deste MVP devem ficar explicitos na superficie publica:

- `210200` confirmacao da operacao
- `210210` ciencia da operacao
- `210220` desconhecimento da operacao
- `210240` operacao nao realizada

O comportamento esperado nesta fase e:

- registrar o evento com resultado estruturado
- exigir justificativa apenas em operacao nao realizada
- nao acoplar download automatico ao registro do evento
- deixar a recuperacao posterior da NF-e para o fluxo de distribuicao

## 6. Reuse the transport taxonomy instead of inventing a second error language

O MVP so fica coerente quando a camada do destinatario reutiliza a evidencia e a classificacao do transporte:

- preserve `TransportOutcome` como evidencia subjacente
- traduza para resultados de aplicacao apenas o necessario para uso da operacao
- mantenha separado erro de transporte, indisponibilidade, rejeicao funcional e dependencia externa
- deixe consumo indevido e backoff como limites operacionais explicitos do contrato

## 7. Validate the feature with focused package gates

Execute o gate minimo desta feature:

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
npm run validate:tarball
```

Se alguma mudanca excepcional atingir a arvore gerada, rode tambem:

```bash
npm run generate
```

## 8. Review scope limits before moving to `/speckit.tasks`

Antes de gerar tarefas, confirme que:

- o import raiz continua sendo a superficie runtime estavel
- a distribuicao publica aceita apenas `distNSU`
- os envelopes distinguem resumo e documento completo
- PJ e PF permanecem explicitamente suportados neste recorte
- manifestacao e download posterior continuam separados
- o slice segue limitado a homologacao
- producao, `consNSU`, `consChNFe`, EPEC e eventos genericos continuam deferidos
