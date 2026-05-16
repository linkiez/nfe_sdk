# nfe-sdk

SDK e conversor de schemas XSD da NF-e, NFC-e e Manifestacao do Destinatario para TypeScript usando `xsd2ts` com uma camada própria de normalização, particionamento e renomeação dos artefatos gerados.

## Objetivo

Este repositório transforma coleções de XSD em arquivos TypeScript utilizáveis, com foco em:

- geração em lote a partir dos schemas;
- nomes hierárquicos e estáveis para evitar colisões;
- saída separada por declaração, em vez de um arquivo monolítico;
- compatibilidade com `tsc --strict`;
- convenção de nomes consistente para classes, interfaces, types e enums.

## Convenção de nomes

Os identificadores gerados são normalizados para `PascalCase` e recebem prefixos por tipo:

- `C...` para classes;
- `I...` para interfaces;
- `T...` para type aliases;
- `E...` para enums.

Exemplos:

- `CConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfEvento`
- `IConSitNFeV201ConSitNFeLeiauteConsSitNFeV201InfEvento`
- `TEventoEpecNfCePl100TiposBasicoV310Mod`
- `EEventoEpecNfCePl100TiposBasicoV310Mod`

## Estrutura

- [tools/generate.ts](/home/linkiez/Projetos/nfe_schemas/tools/generate.ts): pipeline principal de conversão e pós-processamento.
- [xsd](/home/linkiez/Projetos/nfe_schemas/xsd): diretório de entrada com os schemas.
- [src](/home/linkiez/Projetos/nfe_schemas/src): saída TypeScript gerada diretamente pelo pipeline.
- [package.json](/home/linkiez/Projetos/nfe_schemas/package.json): scripts e dependências do projeto.
- [tsconfig.json](/home/linkiez/Projetos/nfe_schemas/tsconfig.json): configuração TypeScript do gerador.

## Requisitos

- Node.js 18+ recomendado
- npm

## Diretrizes de desenvolvimento

- O repositório deve evoluir como pacote npm em TypeScript com consumo ESM como alvo
	principal.
- Mudanças em contratos públicos, saída gerada ou regras de normalização devem incluir
	validação automatizada com Jest e revisão de impacto de compatibilidade.
- ESLint, Prettier e verificação de TypeScript compõem o baseline de qualidade esperado
	para código mantido manualmente.
- Pesquisas normativas, decisões de interoperabilidade e material documental devem registrar
	fontes primárias e separar claramente referências secundárias confiáveis, sem tratar essas
	fontes complementares como base normativa oficial.

## Instalação

```bash
npm install
```

## Scripts principais

```bash
npm run generate
npm run typecheck
npm run lint
npm run format:check
npm test
```

## Uso

Gerar tudo:

```bash
npm run generate
```

Gerar apenas um subconjunto:

```bash
npm run generate -- ConSitNFe
```

Limpar artefatos temporários e saída gerada:

```bash
npm run clean
```

## Saída gerada

O gerador escreve a saída em `src/`, com as categorias como filhas diretas da raiz de saída. Dentro de cada categoria, a hierarquia relativa dos schemas processados é preservada:

- `classes/`
- `interfaces/`
- `types/`
- `enums/`

Cada declaração exportada vira um arquivo próprio, com `index.ts` por diretório para reexportar os módulos irmãos e permitir importações por pasta.

Exemplo simplificado:

```text
src/
	classes/
		ConSitNFe/
	interfaces/
		ConSitNFe/
	types/
		ConSitNFe/
	enums/
		ConSitNFe/
```

Durante o pós-processamento, o pipeline também:

- reescreve referências cruzadas entre arquivos gerados, inclusive entre `classes`, `interfaces`, `types` e `enums`;
- cria interfaces derivadas das classes geradas;
- cria enums para unions literais finitas;
- tenta contornar limitações do `xsd2ts` em schemas mais problemáticos.

## Validação

Para validar a saída gerada com TypeScript estrito:

```bash
find src -name "*.ts" ! -name "index.ts" -print0 | xargs -0 ./node_modules/.bin/tsc --noEmit --strict --skipLibCheck --ignoreConfig --pretty false
```

## Observações

- O projeto usa uma pasta temporária `.xsd2ts-work/` durante a conversão.
- Alguns XSDs com restrições complexas podem ser reprocessados com sanitização automática de padrões regex para contornar limitações do `xsd2ts`.
- O foco deste repositório é geração e normalização de tipos, não modelagem manual dos documentos fiscais.