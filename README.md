# nfe_schemas

Conversor de schemas XSD da NF-e para TypeScript usando `xsd2ts` com uma camada própria de normalização, particionamento e renomeação dos artefatos gerados.

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
- [package.json](/home/linkiez/Projetos/nfe_schemas/package.json): scripts e dependências do projeto.
- [tsconfig.json](/home/linkiez/Projetos/nfe_schemas/tsconfig.json): configuração TypeScript do gerador.

## Requisitos

- Node.js 18+ recomendado
- npm

## Instalação

```bash
npm install
```

## Uso

Gerar tudo:

```bash
npm run generate
```

Gerar apenas um subconjunto:

```bash
npm run generate -- ConSitNFe_v2.01
```

Limpar artefatos temporários e saída gerada:

```bash
npm run clean
```

## Saída gerada

O gerador escreve a saída em `generated-ts/`, espelhando a hierarquia relativa dos schemas processados. Cada declaração exportada vira um arquivo próprio, com `index.ts` por diretório para reexportar os módulos irmãos.

Durante o pós-processamento, o pipeline também:

- reescreve referências cruzadas entre arquivos do mesmo diretório;
- cria interfaces derivadas das classes geradas;
- cria enums para unions literais finitas;
- tenta contornar limitações do `xsd2ts` em schemas mais problemáticos.

## Validação

Para validar a saída gerada com TypeScript estrito:

```bash
find generated-ts -name "*.ts" ! -name "index.ts" -print0 | xargs -0 ./node_modules/.bin/tsc --noEmit --strict --skipLibCheck --ignoreConfig --pretty false
```

## Observações

- O projeto usa uma pasta temporária `.xsd2ts-work/` durante a conversão.
- Alguns XSDs com restrições complexas podem ser reprocessados com sanitização automática de padrões regex para contornar limitações do `xsd2ts`.
- O foco deste repositório é geração e normalização de tipos, não modelagem manual dos documentos fiscais.