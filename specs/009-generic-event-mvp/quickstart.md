# Quickstart: Generic Event MVP

## 1. Confirm the current package contract and the new generic-event scope

Antes de implementar a feature, confirme o baseline do pacote, a superfície root atual e o recorte do slice 009:

```bash
sed -n '1,220p' package.json
sed -n '1,220p' src/index.ts
sed -n '1,260p' src/public-contract.ts
sed -n '1,260p' specs/009-generic-event-mvp/spec.md
sed -n '1,260p' specs/009-generic-event-mvp/plan.md
sed -n '1,260p' specs/009-generic-event-mvp/research.md
```

O objetivo desta fase é acrescentar uma única facade root para eventos genéricos suportados sem reabrir EPEC, produção ou facades já especializadas.

## 2. Keep the public facade above a dedicated manual generic-event layer

Implemente o MVP como orquestração sobre camadas já existentes:

- use `src/canonical/facade/` para o wrapper público da nova operação root
- concentre a lógica nova em `src/canonical/generic-event/`
- reutilize assinatura, serialização e transporte como detalhes internos
- preserve `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/` como inventário interno
- mantenha EPEC, produção, eventos regionais ainda não estabilizados e cancelamentos fora do escopo inicial

## 3. Start with the root generic-event operation and a batch-first input shape

O contrato desta fase deve permanecer orientado a resultado de aplicação:

```ts
import { createSigningContext, submitGenericEvents } from 'nfe-sdk';

const outcome = await submitGenericEvents({
  batchId: '000000000000001',
  environment: 'homologation',
  items: [
    {
      accessKey: '35190500000000000000550010000000011000000010',
      author: {
        documentNumber: '12345678000195',
        documentType: 'cnpj',
      },
      eventCode: '110130',
      family: 'delivery-confirmation',
      occurredAt: '2026-05-18T10:00:00-03:00',
      payload: {
        deliveredAt: '2026-05-18T09:55:00-03:00',
        deliveryHash: 'abc123',
        recipientDocument: '12345678909',
        recipientName: 'Jose da Silva',
      },
      sequenceNumber: 1,
    },
  ],
  requestExecutor,
  signingContext: createSigningContext({
    passphrase: '***',
    source: { kind: 'pfx-file', path: '/secure/certificate.pfx' },
  }),
  timeoutMs: 5000,
});

console.log(outcome.classification, outcome.itemOutcomes[0]?.protocolNumber);
```

Nesta fase:

- a API aceita apenas homologação
- o lote não pode ultrapassar 20 eventos
- o SDK não deve exigir montagem manual de `envEvento`
- o resultado deve distinguir outcome do lote e outcome por item quando houver envio remoto

Exemplo mínimo de lote heterogêneo com mistura de sucesso e rejeição remota:

```ts
const mixedOutcome = await submitGenericEvents({
  batchId: '000000000000002',
  environment: 'homologation',
  items: [
    {
      accessKey: '35190500000000000000550010000000011000000010',
      author: {
        documentNumber: '12345678000195',
        documentType: 'cnpj',
      },
      eventCode: '110130',
      family: 'delivery-confirmation',
      occurredAt: '2026-05-18T10:00:00-03:00',
      payload: {
        deliveredAt: '2026-05-18T09:55:00-03:00',
        deliveryHash: 'abc123',
        recipientDocument: '12345678909',
        recipientName: 'Jose da Silva',
      },
      sequenceNumber: 1,
    },
    {
      accessKey: '35190500000000000000550010000000011000000010',
      author: {
        documentNumber: '12345678000195',
        documentType: 'cnpj',
      },
      eventCode: '110192',
      family: 'delivery-failure',
      occurredAt: '2026-05-18T10:10:00-03:00',
      payload: {
        attemptedAt: '2026-05-18T10:09:00-03:00',
        attemptNumber: 1,
        reasonType: '2',
        reasonDescription: 'Destinatario ausente',
      },
      sequenceNumber: 2,
    },
  ],
  requestExecutor,
  signingContext,
  timeoutMs: 5000,
});

console.log(
  mixedOutcome.classification,
  mixedOutcome.itemOutcomes[0]?.classification,
  mixedOutcome.itemOutcomes[1]?.classification,
);
```

## 4. Keep pre-transport gates explicit and deterministic

Comece pelo fluxo testável de validação local:

- rejeite integralmente o lote se houver mais de 20 itens
- rejeite integralmente o lote se qualquer item estiver fora do recorte suportado
- rejeite integralmente o lote se qualquer item falhar na validação local obrigatória
- trate essas falhas como erro de uso, não como rejeição funcional remota
- só produza outcomes por item quando o lote for efetivamente enviado ao serviço

## 5. Keep the supported families explicit in code and fixtures

As famílias cobertas neste MVP devem permanecer objetivamente separadas das que continuam fora do recorte:

- `110130` comprovante de entrega
- `110150` ator interessado na NF-e - transportador
- `110192` insucesso na entrega da NF-e
- `110750` conciliação financeira - ECONF

O comportamento esperado nesta fase é:

- suportar lote heterogêneo pequeno com essas quatro famílias
- manter EPEC e outras famílias ainda não estabilizadas fora da nova facade
- preservar carta de correção, cancelamento e manifestação do destinatário como operações dedicadas já existentes

## 6. Reuse the transport taxonomy instead of inventing a second error language

O MVP só fica coerente quando a camada de eventos genéricos reutiliza a evidência do transporte:

- preserve `TransportOutcome` como evidência subjacente
- traduza para outcomes de aplicação apenas o necessário para uso da operação
- mantenha separados erro de uso local, rejeição funcional remota, indisponibilidade e dependência externa
- preserve a resposta síncrona por lote e por item a partir do `retEnvEvento`

## 7. Validate the feature with focused package gates

Execute o gate mínimo desta feature:

```bash
npm run lint
npx prettier --check specs/009-generic-event-mvp/*.md specs/009-generic-event-mvp/contracts/*.md .github/copilot-instructions.md
npm run typecheck
npm test
npm run build
npm run validate:tarball
```

Durante a implementação do slice, os checks focados que cobriram a facade e o contrato incluíram:

```bash
npm test -- tests/contract/public-generic-event-facade.test.ts
npm test -- tests/integration/generic-event/submit-single-generic-event.test.ts
npm test -- tests/integration/generic-event/submit-heterogeneous-generic-event-batch.test.ts
npm test -- tests/unit/generic-event/generic-event-batch-outcome.test.ts
```

Se alguma mudança excepcional atingir a árvore gerada, rode também:

```bash
npm run generate
```

## 8. Review scope limits before moving to `/speckit.tasks`

Antes de gerar tarefas, confirme que:

- o import raiz continua sendo a superfície runtime estável
- a nova facade genérica aceita apenas homologação
- o lote continua limitado a 20 eventos sem fragmentação automática
- famílias fora do recorte e falhas locais obrigatórias continuam bloqueando o lote antes do transporte
- as quatro famílias suportadas seguem explícitas em contrato, fixtures e documentação
- EPEC e demais expansões adjacentes continuam deferidos
