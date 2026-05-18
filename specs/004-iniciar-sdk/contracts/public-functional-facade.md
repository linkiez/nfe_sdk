# Contract: Public Functional Facade

## Purpose

Definir a superficie publica inicial da camada funcional do SDK para a fase 004, mantendo o contrato do pacote pequeno, additive e orientado ao recorte `NFe` e `enviNFe`.

## Normative Contract Source

- `package.json`/exports continua sendo a fonte normativa do contrato publicado.
- O import raiz permanece como unico entrypoint estavel desta fase.
- Este contrato descreve a ampliacao funcional esperada no root import; a implementacao concreta deve permanecer consistente com `package.json`, `src/index.ts` e os testes de contrato.

## Required Public Surface

### 1. Root import remains the stable entrypoint

O pacote deve continuar sendo consumido pelo import raiz:

```ts
import {
  publicPackageContract,
  createNFe,
  createEnviNFe,
  serializeNFeXml,
  serializeEnviNFeXml,
} from 'nfe-sdk';
```

- `publicPackageContract` permanece disponivel por compatibilidade com a fase 003.
- `createNFe` e `createEnviNFe` representam a montagem funcional minima desta fase.
- `serializeNFeXml` e `serializeEnviNFeXml` representam a serializacao XML deterministica da primeira slice.

### 2. Initial canonical input expectations

As funcoes publicas desta fase devem aceitar entradas canonicas pequenas o suficiente para esconder a arvore gerada, mas rastreaveis o suficiente para manter fidelidade ao schema.

Campos compartilhados obrigatorios nesta fase:

- `environment`
- `version`
- identificadores iniciais de documento e lote, incluindo `Id` e correlatos de `enviNFe`

Campos explicitamente adiados nesta fase:

- chave de acesso completa
- assinatura digital
- transporte SOAP
- retorno processado (`retEnviNFe`, `protNFe`, `nfeProc`)

### 3. Deterministic XML contract

- Entradas equivalentes devem produzir XML estruturalmente equivalente.
- A serializacao deve ser suportada apenas para `NFe` e `enviNFe` nesta fase.
- A evidencia minima de consistencia deve ser baseada em fixtures XML ou comparacao estrutural equivalente no repositorio.

### 4. Internal boundaries that remain non-contractual

Os seguintes elementos permanecem internos e nao devem ser tratados como contrato publico principal nesta fase:

- subpaths dedicados da camada canonica
- classes e interfaces geradas em `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/`
- `src/manifest.json`
- helpers de serializacao, normalizacao e adaptacao usados apenas internamente pela facade

## Repository Evidence

- `package.json#exports["."]` continua definindo o entrypoint normativo do pacote.
- `src/index.ts` permanece o ponto de agregacao da superficie publicada.
- `xsd/PL_010c_NT2022_002v1.30/nfe_v4.00.xsd` e `xsd/PL_010c_NT2022_002v1.30/leiauteNFe_v4.00.xsd` sustentam a proveniencia normativa do recorte inicial.
- Os artefatos gerados da familia `PL_010c_NT2022_002v1.30` funcionam como base tecnica interna para a facade.

## Compatibility Notes

- Esta fase deve ser additive sobre o contrato minimo estabilizado na fase 003.
- Se os nomes das funcoes publicas acima precisarem mudar durante a implementacao, a alteracao deve ser refletida neste contrato, na spec e nos testes de contrato antes de ser considerada estavel.
- Promover builders publicos, subpaths ou documentos adicionais exige revisao contratual dedicada em fase posterior.

## Validation Expectations

- O import raiz deve continuar consumivel em ambiente ESM.
- Testes de contrato devem verificar que a facade declarada e exposta sem promover subpaths.
- Testes unitarios e de integracao devem verificar montagem, serializacao deterministica e normalizacao compartilhada do recorte inicial.
- As lacunas adiadas para XSD automatizado completo e chave de acesso completa devem permanecer documentadas como backlog ou limite explicito de cobertura.
