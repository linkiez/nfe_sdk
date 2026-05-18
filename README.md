# nfe-sdk

SDK em TypeScript para evoluir de uma base gerada a partir de XSDs da NF-e, NFC-e e Manifestacao do Destinatario para um pacote npm ESM com contrato publico controlado.

## Contrato publico minimo desta fase

Nesta fase, o pacote publica somente o import raiz e uma superficie funcional enxuta para a primeira slice canonica:

```ts
import {
  createEnviNFe,
  createNFe,
  publicPackageContract,
  serializeEnviNFeXml,
  serializeNFeXml,
} from 'nfe-sdk';
```

`publicPackageContract` descreve o contrato publicado e serve como ancora estavel para as proximas fases funcionais.

`createNFe` monta o documento canonico inicial de `NFe` sem exigir importacao direta da arvore gerada.

`createEnviNFe` monta o lote canonico inicial de `enviNFe` com base no mesmo recorte funcional.

`serializeNFeXml` e `serializeEnviNFeXml` produzem XML deterministico para o mesmo recorte inicial.

O contrato normativo continua sendo `package.json`/exports. O README apenas explica o que foi estabilizado.

`manifest.json` permanece interno e nao integra a superficie publica estavel.

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
