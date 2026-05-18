# nfe-sdk

SDK em TypeScript para evoluir de uma base gerada a partir de XSDs da NF-e, NFC-e e Manifestacao do Destinatario para um pacote npm ESM com contrato publico controlado.

## Contrato publico minimo desta fase

Nesta fase, o pacote publica somente o import raiz e uma superficie funcional enxuta para a slice canonica inicial, o primeiro slice aditivo de assinatura digital e o primeiro slice aditivo de transporte SOAP:

```ts
import {
  createEnviNFe,
  createNFe,
  createSigningContext,
  executeNFeSoapService,
  publicPackageContract,
  resolveNFeServiceEndpoint,
  serializeEnviNFeXml,
  serializeNFeXml,
  signNFeXml,
} from 'nfe-sdk';
```

`publicPackageContract` descreve o contrato publicado e serve como ancora estavel para as proximas fases funcionais.

`createNFe` monta o documento canonico inicial de `NFe` sem exigir importacao direta da arvore gerada.

`createEnviNFe` monta o lote canonico inicial de `enviNFe` com base no mesmo recorte funcional.

`createSigningContext` prepara um contexto reutilizavel de assinatura digital a partir de um certificado A1 em arquivo `.pfx` ou em memoria.

`serializeNFeXml` e `serializeEnviNFeXml` produzem XML deterministico para o mesmo recorte inicial.

`signNFeXml` recebe um XML nao assinado de `NFe`, aplica XMLDSig, valida localmente a assinatura antes do retorno e devolve o XML assinado correspondente.

`resolveNFeServiceEndpoint` resolve a entrada versionada do catalogo inicial de transporte para `homologation`, `nfe-status-service` e `nfe-authorization` usando os endpoints compartilhados da SVAN publicados no catalogo inicial `2026-05-18-initial-draft`.

`executeNFeSoapService` monta o envelope SOAP 1.2, escolhe o endpoint homologado suportado, executa a chamada com executor injetado ou default e devolve `TransportOutcome` com classificacao e evidencia minima da troca.

No slice inicial, `TransportOutcome.classification` distingue pelo menos `success`, `timeout`, `usage-error`, `unavailable`, `functional-rejection` e `protocol-error`, sem misturar transporte com orquestracao de dominio fiscal.

O contrato normativo continua sendo `package.json`/exports. O README apenas explica o que foi estabilizado.

`manifest.json` permanece interno e nao integra a superficie publica estavel.

`enviNFe` permanece como envelope de transporte nao assinado do documento ja assinado nesta fase.

## Exemplo rapido do slice SOAP

```ts
import { executeNFeSoapService, resolveNFeServiceEndpoint } from 'nfe-sdk';

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

console.log(endpoint.endpointUrl, outcome.classification);
```

## O que fica fora do contrato publico

Os seguintes itens continuam fora da promessa de compatibilidade desta fase:

- arvore gerada em `src/classes/`
- arvore gerada em `src/interfaces/`
- arvore gerada em `src/types/`
- arvore gerada em `src/enums/`
- `src/manifest.json`
- qualquer subpath ou importacao profunda

Esses artefatos seguem existindo como inventario tecnico e evidencia de cobertura, mas nao devem ser consumidos como API publica estavel.

## Requisitos

- Node.js `>=18.18`
- npm

## Instalação

```bash
npm install
```

## Scripts principais

```bash
npm run generate
npm run build
npm run typecheck
npm run lint
npm run format:check
npm test
```

## Validação da fundação do pacote

O baseline desta fase exige validar o pacote publicado, não apenas o workspace:

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
npm run validate:tarball
```

O smoke validation do tarball deve confirmar que o import raiz continua utilizavel sem depender do workspace aberto.

## Geração de schemas

O repositório mantém o pipeline de geração em [tools/generate.ts](/home/linkiez/Projetos/nfe_sdk/tools/generate.ts), usando os XSDs em [xsd](/home/linkiez/Projetos/nfe_sdk/xsd) para atualizar a árvore gerada em [src](/home/linkiez/Projetos/nfe_sdk/src).

Os identificadores gerados seguem `PascalCase` com prefixos por categoria:

- `C...` para classes
- `I...` para interfaces
- `T...` para type aliases
- `E...` para enums

## Documentação de apoio

- [docs/capacidades-sdk.md](/home/linkiez/Projetos/nfe_sdk/docs/capacidades-sdk.md): catalogo documental de capacidades e lacunas.
- [docs/index.md](/home/linkiez/Projetos/nfe_sdk/docs/index.md): indice documental consolidado.
- [specs/003-public-package-contract/contracts/public-package-contract.md](/home/linkiez/Projetos/nfe_sdk/specs/003-public-package-contract/contracts/public-package-contract.md): contrato de referência desta fase.

## Diretrizes de compatibilidade

- mudancas no import raiz exigem revisao explicita de compatibilidade
- promocao de subpaths ou artefatos gerados depende de decisao contratual futura
- evidencias do contrato devem permanecer rastreáveis em `package.json`, `src/index.ts`, README e nos artefatos da feature
