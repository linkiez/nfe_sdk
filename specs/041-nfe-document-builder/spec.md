# Spec 041 — Construtor do documento NF-e (layout 4.00)

## Problema

`createNFe`/`serializeNFeXml` geram um envelope de teste, não o XML real da NF-e. Sem o corpo `NFe/infNFe` conforme o XSD, nenhum consumidor consegue emitir de fato.

## Escopo

- `buildNFeDocument(input)` monta `NFe/infNFe` (layout 4.00, `PL_010c_NT2022_002v1.30`) a partir de `NFeDocumentInput` com os nomes do XSD; decimais e datas como texto, sem coerção.
- Deriva `cNF`, `cDV`, chave de acesso, `Id`, `versao` e `nItem`.
- Recusa antes de assinar: campo ausente ou não suportado, escolhas conflitantes, valores vazios, números não inteiros, mais de 990 itens.
- `authorizeNFe` aceita `documents.kind = 'built-document'` (assina, monta `enviNFe` real, envelope SOAP `nfeDadosMsg`, classifica pelo protocolo).

## Fora de escopo

Regras fiscais de negócio (cálculo de tributos, validações de SEFAZ), NFC-e, contingência, serviços SOAP além de autorização e eventos (ver tarefas T149 e T150 da spec JCMAP-1502).

## Critérios de aceite

1. Cada rascunho de referência (Simples Nacional, regime normal, IPI, transporte, múltiplos pagamentos, IBS/CBS) gera XML aprovado por `validateNFeXsd` após a assinatura.
2. O limite de 990 itens é aceito e 991 é recusado.
3. A chave de acesso confere com `computeNFeAccessKey`; a assinatura é verificável.
4. Entrada incompleta lista todos os problemas com o caminho do campo.
5. Protocolos `110`/`301`/`302` viram `denied`; outro `cStat` de protocolo com lote `104` vira `rejected`.
