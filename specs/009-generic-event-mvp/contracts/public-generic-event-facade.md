# Contract: Public Generic Event Facade

## Purpose

Definir a superfície pública inicial do MVP de eventos genéricos para a feature 009, preservando o import raiz como entrypoint estável e escondendo assinatura, transporte, montagem de `envEvento` e leitura de `retEnvEvento` atrás de uma operação orientada a aplicação.

## Normative Contract Source

- `package.json#exports["."]` continua sendo a fonte normativa do contrato publicado.
- O import raiz permanece como único entrypoint runtime estável desta fase.
- Este contrato descreve a ampliação pública esperada para o MVP de eventos genéricos sem promover subpaths como contrato principal.

## Required Public Surface

### 1. Root import remains the stable entrypoint

O pacote deve continuar sendo consumido pelo import raiz e passar a expor a nova operação genérica de eventos:

```ts
import { createSigningContext, submitGenericEvents } from 'nfe-sdk';
```

- `submitGenericEvents` executa a recepção genérica de um lote pequeno de eventos suportados.
- `createSigningContext` continua sendo a dependência pública reutilizável para assinatura.
- A nova operação entra de forma additive sobre a superfície root existente.

Fluxo mínimo esperado para o MVP:

```ts
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
      eventCode: '110150',
      family: 'interested-actor-transporter',
      occurredAt: '2026-05-18T10:00:00-03:00',
      payload: {
        authorizationType: 'transportador',
        authorizedDocument: '12345678000195',
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

console.log(
  outcome.classification,
  outcome.itemOutcomes[0]?.applicationStatusCode,
);
```

### 2. Initial generic-event input expectations

A operação desta fase deve aceitar:

- ambiente suportado
- identificador do lote
- lista de um ou mais eventos suportados, limitada a 20 itens
- contexto reutilizável de assinatura
- timeout opcional
- executor de request opcional para configuração externa de rede

Cada item desta fase deve aceitar:

- família suportada
- código oficial do evento correspondente
- chave de acesso da NF-e
- número sequencial do evento
- data e hora do evento
- ator responsável pelo evento
- payload específico da família

### 3. Required behavior of the initial generic-event slice

- O SDK deve orquestrar internamente a montagem do lote, a assinatura, o transporte e o tratamento da resposta.
- O SDK não deve exigir XML bruto previamente serializado como contrato principal do MVP.
- O SDK deve rejeitar integralmente o lote antes do transporte quando houver mais de 20 itens.
- O SDK deve rejeitar integralmente o lote antes do transporte quando qualquer item estiver fora do recorte suportado.
- O SDK deve rejeitar integralmente o lote antes do transporte quando qualquer item falhar na validação local obrigatória.
- `submitGenericEvents` deve devolver `classification`, `acceptedForTransport`, `validationFailures`, `itemOutcomes` e `transportOutcome` quando aplicável.
- `itemOutcomes` deve preservar o resultado estruturado de cada item apenas após processamento remoto.
- O SDK deve distinguir pelo menos erro de uso local, rejeição funcional remota, indisponibilidade, dependência externa e sucesso operacional.
- Em lotes heterogêneos válidos, o SDK deve preservar a correlação posicional entre cada item submetido e o respectivo `itemOutcome` retornado.
- Em lotes heterogêneos com mistura de sucesso e rejeição remota, o lote deve permanecer `acceptedForTransport: true` e classificar o batch como `partial-success`.

### 4. Initial supported scope

O primeiro MVP cobre apenas:

- ambiente `homologation`
- serviço nacional genérico de eventos com processamento síncrono
- lotes pequenos de até 20 eventos
- comprovante de entrega `110130`
- ator interessado na NF-e - transportador `110150`
- insucesso na entrega da NF-e `110192`
- conciliação financeira - ECONF `110750`

### 5. Internal boundaries that remain non-contractual

Os seguintes elementos permanecem internos ou fora de escopo nesta fase:

- EPEC e fluxos de contingência relacionados
- produção e variantes regionais ainda não estabilizadas
- cancelamentos dessas famílias quando não forem explicitamente incluídos nesta entrega
- facades já dedicadas de cancelamento, carta de correção e manifestação do destinatário
- inventário gerado em `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/`

## Compatibility Notes

- Esta fase deve ser additive sobre o contrato root estabilizado nas features anteriores.
- Qualquer mudança breaking na nomenclatura da operação acima exigirá revisão contratual e nota de migração.
- Caso fases posteriores adicionem fragmentação automática de lote, produção, EPEC ou novas famílias, isso exigirá avaliação explícita do contrato para evitar sobrecarga semântica da superfície root.

## Validation Expectations

- Testes de contrato devem verificar que o import raiz expõe a nova operação declarada sem regressão nas facades existentes.
- Testes de unidade devem verificar validação do lote, mapeamento por família, fronteiras de cobertura e taxonomia de outcomes.
- Testes de integração por fixture devem verificar as quatro famílias suportadas e pelo menos um lote heterogêneo válido.
- O smoke do tarball deve continuar confirmando que o pacote publicado expõe a superfície root esperada sem depender do workspace aberto.
- O green mínimo deste slice inclui cenários observáveis de lote acima do limite, família fora do recorte, validação local obrigatória ausente e mistura de sucesso e rejeição funcional após transporte.

Fluxo heterogêneo mínimo esperado após o envio remoto:

```ts
const outcome = await submitGenericEvents({
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
  outcome.classification,
  outcome.itemOutcomes.map((item) => item.classification),
);
```
