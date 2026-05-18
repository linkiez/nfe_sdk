# Quickstart: Add Digital Signing

## 1. Confirm the current canonical slice and public root contract

Antes de abrir a camada de assinatura, confirme o baseline publicado pela feature 004:

```bash
sed -n '1,200p' package.json
sed -n '1,120p' src/index.ts
sed -n '1,220p' src/public-contract.ts
sed -n '1,220p' specs/005-add-digital-signing/spec.md
```

O objetivo e manter o import raiz como unico entrypoint estavel e acrescentar apenas o slice de assinatura.

## 2. Keep the signing boundary above canonical serialization

Implemente a assinatura sobre o XML de `NFe` ja serializado pela feature 004:

- mantenha a operacao publica como XML-in/XML-out
- prepare um contexto reutilizavel de assinatura antes da operacao de assinatura
- preserve `src/classes/`, `src/interfaces/`, `src/types/` e `src/enums/` como inventario interno
- mantenha `enviNFe`, eventos, NFC-e e transporte fora do escopo inicial

## 3. Accept both A1 input modes without leaking crypto details

O contrato publico desta fase deve aceitar as duas origens definidas na spec:

- caminho de arquivo `.pfx`
- conteudo A1 em memoria

A experiencia publica deve esconder parsing PKCS#12, montagem da assinatura XML e verificacao local.

As duas modalidades devem produzir o mesmo `SigningContext` reutilizavel, mudando apenas `sourceMetadata.type` e, quando aplicavel, o `filePath` associado.

## 4. Verify the signature locally before returning XML

Este slice so fica completo quando o SDK:

- assina a `NFe` priorizada
- valida localmente a assinatura produzida
- falha sem retornar XML parcialmente assinado
- registra evidencias de sucesso e falha no repositorio

## 5. Add reusable signing regression evidence

Toda ampliacao desta fase deve ter evidencia automatizada:

- fixture de `NFe` nao assinada pronta para assinatura
- fixture ou assercao estrutural do XML assinado
- teste de falha para certificado invalido ou incompatível
- teste de contrato para a nova superficie root

## 6. Validate the slice with focused package checks

Execute o gate minimo desta feature:

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
npm run validate:tarball
```

Se houver mudanca na arvore gerada por decisao excepcional desta feature, rode tambem:

```bash
npm run generate
```

## 7. Review scope limits before moving to `/speckit.tasks`

Antes de gerar tarefas, confirme que:

- a nova capacidade continua entrando apenas pelo import raiz
- a assinatura continua restrita a `NFe`
- `enviNFe` permanece apenas como envelope de transporte do documento assinado
- eventos, NFC-e, SOAP e autorizacao continuam fora do escopo
- calculos auxiliares ainda nao estabilizados permanecem registrados como backlog explicito

Os gaps deferidos minimos desta fase sao: assinatura independente de `enviNFe`, assinatura de eventos, assinatura de NFC-e, integracao de transporte SOAP/autorizacao e derivacao completa da chave de acesso com DV e `hashCSRT`.
