# Contract: Public Signing Facade

## Purpose

Definir a superficie publica inicial de assinatura digital para a feature 005, preservando o import raiz como entrypoint estavel e limitando a cobertura a `NFe` assinada com contexto reutilizavel derivado de certificado A1.

## Normative Contract Source

- `package.json`/exports continua sendo a fonte normativa do contrato publicado.
- O import raiz permanece como unico entrypoint estavel desta fase.
- Este contrato descreve a ampliacao publica esperada para assinatura digital sem promover subpaths como contrato principal.

## Required Public Surface

### 1. Root import remains the stable entrypoint

O pacote deve continuar sendo consumido pelo import raiz e passar a expor o slice inicial de assinatura:

```ts
import { createSigningContext, signNFeXml } from 'nfe-sdk';
```

- `createSigningContext` prepara a capacidade reutilizavel de assinatura a partir do material A1 suportado.
- `signNFeXml` recebe o XML nao assinado da `NFe` e devolve o XML correspondente ja assinado.
- Ambas as funcoes entram de forma additive sobre a superficie root existente.

### 2. Initial signing input expectations

A preparacao do contexto de assinatura desta fase deve aceitar:

- caminho de arquivo `.pfx`
- conteudo A1 em memoria
- credencial necessaria para abrir o material criptografico

A operacao de assinatura desta fase deve aceitar:

- XML nao assinado de `NFe`
- contexto reutilizavel previamente preparado

### 3. Required behavior of the initial signing slice

- A assinatura deve ser aplicada apenas ao XML de `NFe` suportado nesta fase.
- O SDK deve verificar localmente a assinatura antes de devolver o resultado.
- Em caso de falha, o SDK nao deve devolver XML parcialmente assinado ou ambiguo.
- `enviNFe` deve permanecer como envelope de transporte nao assinado do documento ja assinado.

### 4. Internal boundaries that remain non-contractual

Os seguintes elementos permanecem internos nesta fase:

- implementacao de parsing PKCS#12
- montagem interna de XMLDSig
- subpaths dedicados da camada de assinatura
- inventario gerado em `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/`
- assinatura de `enviNFe`, eventos ou NFC-e

## Compatibility Notes

- Esta fase deve ser additive sobre o contrato root estabilizado nas features 003 e 004.
- Qualquer mudanca breaking na nomenclatura das funcoes acima exigira revisao contratual e nota de migracao.
- Promover subpaths, assinatura de outros documentos ou cobertura operacional completa exige feature posterior.

## Validation Expectations

- Testes de contrato devem verificar que o import raiz expõe apenas a ampliacao declarada.
- Testes de integracao devem verificar assinatura de `NFe` e falha explicita para material A1 invalido ou incompatível.
- O smoke do tarball deve continuar confirmando que o pacote publicado expõe a superficie root esperada sem depender do workspace aberto.
