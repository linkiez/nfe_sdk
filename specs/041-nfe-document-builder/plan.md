# Plano — spec 041

1. Gerador `tools/generate-nfe-builder-layout.ts` lê o XSD (inclusive tipos incluídos) e escreve o layout e os tipos TypeScript (`src/canonical/nfe/builder/*.generated.ts`).
2. Serializador genérico guiado pelo layout (`nfe-layout-serializer.ts`): ordem, ocorrências, escolhas, atributos, escape, lista de problemas.
3. `build-nfe-document.ts`: chave, `cNF`, `cDV`, `Id`, numeração de itens; exportado na raiz e no contrato público.
4. `authorize-built-document.ts` e `wireFormat` no transporte (envelope SOAP `nfeDadosMsg` para serviços com WSDL verificado).
5. Testes de integração com rascunhos de referência, `xmllint` e assinatura A1 sintética.
