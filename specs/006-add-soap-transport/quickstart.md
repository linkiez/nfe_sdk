# Quickstart: Add SOAP Transport

## 1. Confirm the current public root contract and active feature scope

Antes de abrir a camada de transporte, confirme o baseline atual do pacote:

```bash
sed -n '1,220p' package.json
sed -n '1,200p' src/index.ts
sed -n '1,220p' src/public-contract.ts
sed -n '1,240p' specs/006-add-soap-transport/spec.md
sed -n '1,260p' specs/006-add-soap-transport/plan.md
```

O objetivo e manter o import raiz como unico entrypoint estavel e acrescentar apenas o slice de transporte SOAP homologado.

## 2. Keep the transport boundary above canonical creation and signing

Implemente o transporte sobre XML ja pronto para envio:

- mantenha a entrada publica como payload XML informado pelo integrador
- trate a resolucao de endpoint e a montagem de envelope SOAP dentro do SDK
- preserve `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/` como inventario interno
- mantenha producao, diferenciacao por UF e orquestracao de dominio fora do escopo inicial

## 3. Add a typed shared catalog before the execution function

O contrato desta fase deve permitir que o integrador consulte a resolucao do endpoint antes da chamada:

```ts
import { resolveNFeServiceEndpoint } from 'nfe-sdk';

const endpoint = resolveNFeServiceEndpoint({
  environment: 'homologation',
  service: 'nfe-status-service',
});
```

O catalogo inicial deve cobrir apenas os endpoints compartilhados definidos no plano para consulta de status e autorizacao.

Na implementacao inicial, a resolucao deve devolver entradas do catalogo versionado `2026-05-18-initial-draft`, sempre restritas a `homologation` e a URLs compartilhadas da SVAN.

## 4. Drive the execution flow with an injectable request executor

Comece pelo fluxo testavel com executor injetado:

```ts
import { executeNFeSoapService } from 'nfe-sdk';

const outcome = await executeNFeSoapService({
  environment: 'homologation',
  payloadXml: '<consStatServNFe versao="4.00">...</consStatServNFe>',
  service: 'nfe-status-service',
  timeoutMs: 5000,
  requestExecutor: async () => ({
    headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
    responseXml: '<soap:Envelope>...</soap:Envelope>',
    status: 200,
  }),
});
```

Esse formato permite regressao por fixture antes de qualquer integracao real com mTLS ou rede externa.

## 5. Keep mutual TLS outside the main contract

Quando houver chamada homologada real, o integrador deve fornecer um executor configurado para seu ambiente operacional. Nesta fase, o SDK nao deve assumir o ciclo completo de certificado de transporte nem exigir configuracao direta de `Agent` ou dispatcher como contrato principal.

## 6. Preserve evidence in the structured outcome

O slice so fica completo quando o SDK devolve em uma unica operacao:

- classificacao do resultado
- endpoint escolhido
- envelope SOAP emitido
- envelope SOAP recebido, quando houver
- status HTTP e `cStat` observavel, quando disponiveis

## 7. Validate the slice with focused package checks

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
- o catalogo inicial cobre apenas homologacao e endpoints compartilhados previstos no plano
- o consumidor nao precisa montar envelope SOAP manualmente
- producao, SVRS, SVC e variacoes por UF continuam deferidas
- a interpretacao de dominio completo de autorizacao continua fora da camada de transporte