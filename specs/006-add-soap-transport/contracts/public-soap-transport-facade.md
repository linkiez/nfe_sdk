# Contract: Public SOAP Transport Facade

## Purpose

Definir a superficie publica inicial de transporte SOAP para a feature 006, preservando o import raiz como entrypoint estavel e limitando a cobertura a homologacao, consulta de status e autorizacao de uso com endpoints nacionais compartilhados.

## Normative Contract Source

- `package.json#exports["."]` continua sendo a fonte normativa do contrato publicado.
- O import raiz permanece como unico entrypoint runtime estavel desta fase.
- Este contrato descreve a ampliacao publica esperada para transporte SOAP sem promover subpaths como contrato principal.

## Required Public Surface

### 1. Root import remains the stable entrypoint

O pacote deve continuar sendo consumido pelo import raiz e passar a expor o slice inicial de transporte:

```ts
import {
  createSigningContext,
  executeNFeSoapService,
  resolveNFeServiceEndpoint,
  signNFeXml,
} from 'nfe-sdk';
```

- `resolveNFeServiceEndpoint` resolve a entrada versionada do catalogo para uma combinacao suportada.
- `executeNFeSoapService` monta o envelope SOAP necessario, executa a chamada suportada e devolve o resultado estruturado.
- Ambas as funcoes entram de forma additive sobre a superficie root existente.

Fluxo minimo esperado para o slice inicial:

```ts
const endpoint = resolveNFeServiceEndpoint({
  environment: 'homologation',
  service: 'nfe-status-service',
});

const outcome = await executeNFeSoapService({
  environment: 'homologation',
  payloadXml: '<consStatServNFe versao="4.00">...</consStatServNFe>',
  requestExecutor: async () => ({
    headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
    responseXml: '<soap:Envelope>...</soap:Envelope>',
    status: 200,
  }),
  service: 'nfe-status-service',
  timeoutMs: 5000,
});

console.log(
  createSigningContext,
  signNFeXml,
  endpoint.endpointUrl,
  outcome.classification,
);
```

### 2. Initial transport input expectations

A resolucao de endpoint desta fase deve aceitar:

- ambiente suportado
- identificador de servico suportado

A execucao de transporte desta fase deve aceitar:

- ambiente suportado
- identificador de servico suportado
- payload XML ja preparado pelo integrador
- timeout opcional
- executor de request opcional para configuracao externa de rede

### 3. Required behavior of the initial transport slice

- O SDK deve montar SOAP 1.2 sem exigir envelope manual do consumidor.
- O SDK deve falhar antes da rede quando servico, ambiente ou versao estiverem fora do catalogo inicial.
- O SDK deve devolver um `TransportOutcome` estruturado com classificacao e evidencia minima da troca.
- O SDK deve distinguir pelo menos `success`, `usage-error`, `timeout`, `unavailable` e `functional-rejection`, com categoria adicional para resposta protocolar invalida.
- O SDK deve preservar no retorno o endpoint escolhido, o envelope SOAP emitido e o envelope SOAP recebido quando houver resposta.
- O SDK deve devolver `failureReason` observavel quando a classificacao indicar timeout, erro de uso ou erro protocolar.

### 4. Initial supported scope

O primeiro slice cobre apenas:

- `nfe-status-service`
- `nfe-authorization`
- ambiente `homologation`
- endpoints compartilhados da SVAN previstos no catalogo versionado do SDK

### 5. Internal boundaries that remain non-contractual

Os seguintes elementos permanecem internos ou fora de escopo nesta fase:

- implementacao concreta do executor HTTP padrao
- gerencia de mTLS e secrets de transporte pelo SDK
- subpaths dedicados da camada de transporte
- catalogo por UF, SVRS, SVC ou producao
- polling de recibo, consulta de protocolo e fluxo operacional completo de NFe
- inventario gerado em `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/`

## Compatibility Notes

- Esta fase deve ser additive sobre o contrato root estabilizado nas features 003, 004 e 005.
- Qualquer mudanca breaking na nomenclatura das funcoes acima exigira revisao contratual e nota de migracao.
- A entrada de um segundo autorizador compartilhado exigira avaliacao explicita do contrato para evitar colisoes de resolucao.

## Validation Expectations

- Testes de contrato devem verificar que o import raiz expoe apenas a ampliacao declarada.
- Testes de unidade devem verificar resolucao de catalogo e classificacao de resultados.
- Testes de integracao por fixture devem verificar envelope SOAP, timeout, indisponibilidade, rejeicao funcional e resposta invalida para os servicos suportados.
- O smoke do tarball deve continuar confirmando que o pacote publicado expoe a superficie root esperada sem depender do workspace aberto.
- O green minimo deste slice inclui sucesso homologado para `nfe-status-service` e `nfe-authorization` com executor injetado e sem montagem manual de SOAP.
- O green minimo deste slice inclui tambem timeout, indisponibilidade e resposta protocolar invalida classificados sem rejeicao da promise publica.
