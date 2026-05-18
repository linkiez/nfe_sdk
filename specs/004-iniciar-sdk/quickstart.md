# Quickstart: Inicio do Desenvolvimento Funcional do SDK

## 1. Confirm the current package and schema anchors

Antes de implementar a camada funcional, confirme os pontos que delimitam o contrato atual e a base normativa do recorte inicial:

```bash
sed -n '1,200p' package.json
sed -n '1,120p' src/index.ts
sed -n '1,160p' src/public-contract.ts
ls xsd/PL_010c_NT2022_002v1.30
sed -n '1,160p' specs/004-iniciar-sdk/spec.md
```

Use essa leitura para verificar que a nova capacidade entra pelo import raiz e que a familia inicial do fluxo e `PL_010c_NT2022_002v1.30`.

## 2. Open the handwritten functional slice above the generated inventory

Implemente a primeira camada manual sem promover a arvore gerada a contrato publico principal:

- crie a facade funcional enxuta sob `src/canonical/facade/`
- concentre regras compartilhadas em `src/canonical/shared/`
- mantenha adaptadores do recorte `NFe`/`enviNFe` em `src/canonical/nfe/`
- centralize serializacao XML em `src/canonical/serialization/`

Regras desta fase:

- o consumidor deve montar `NFe` e `enviNFe` apenas pelo import raiz
- `publicPackageContract` continua exportado e valido
- classes, interfaces e types gerados permanecem internos como fundacao tecnica
- `retEnviNFe`, `protNFe`, `nfeProc`, assinatura e transporte continuam fora do escopo

## 3. Implement deterministic XML and shared normalization first

Priorize a menor espinha dorsal que sustenta os cenarios declarados na spec:

- normalize `ambiente`, `versao` e identificadores iniciais de lote/documento
- monte `NFe` antes de encapsular `enviNFe`
- serialize XML com ordem e forma repetiveis para entradas equivalentes
- registre explicitamente qualquer regra adiada como backlog funcional ou lacuna de proveniencia

Evite puxar cedo demais:

- validacao XSD automatizada completa
- chave de acesso completa e calculos derivados
- builders publicos dedicados como contrato estavel

## 4. Add fixture-backed regression evidence

Toda montagem ou serializacao nova desta fase deve ser coberta por evidencia reutilizavel:

- fixtures de input canonico para `NFe` e `enviNFe`
- fixture XML esperado ou comparacao estrutural equivalente
- testes de contrato para a superficie publicada no import raiz
- testes unitarios para normalizacao compartilhada e serializacao

## 5. Validate the slice with focused package checks

Execute o gate minimo desta fase:

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
```

Se a implementacao exigir ajuste ou sincronizacao com a base gerada, rode tambem:

```bash
npm run generate
```

## 6. Review the contract before moving to `/speckit.tasks`

Antes de gerar tarefas, confirme que:

- a nova facade esta claramente delimitada no import raiz
- o recorte funcional continua limitado a `NFe` e `enviNFe`
- fixtures estruturais cobrem os cenarios suportados
- as lacunas adiadas para fases futuras estao registradas explicitamente
- a fase continua additive sobre o contrato minimo estabilizado anteriormente

## 7. Smoke-check the published package surface

Depois que o slice estiver implementado, valide tambem o tarball publicado:

```bash
npm run validate:tarball
```

O smoke test deve confirmar que o import raiz expõe `publicPackageContract`, `createNFe`, `createEnviNFe`, `serializeNFeXml` e `serializeEnviNFeXml` sem depender do workspace aberto.
