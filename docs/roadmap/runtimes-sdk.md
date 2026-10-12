# Inventario de Runtimes do SDK

## Objetivo

Consolidar, em um unico anexo do roadmap, quais runtimes ja estao publicados no pacote,
quais slices faltam para fechar `SP` ate `producao`, e quais capacidades do acervo oficial
continuam fora do contrato runtime mesmo quando ainda precisam entrar como `tooling`
executavel ou `exemplo` shipped para completar o baseline paulista.

## Como ler

- `Runtime publicado` significa comportamento ja exposto no import raiz `nfe-sdk`, com
  evidencia em `src/public-contract.ts`, `src/index.ts` e na matriz de cobertura.
- `Runtime em promocao` significa slice pequena, additive e rastreavel, ja derivada do
  roadmap, mas ainda nao estabilizada como comportamento publicado completo.
- `Runtime oficial de referencia` significa fluxo descrito por documento oficial que ajuda a
  localizar backlog, mas nao deve ser copiado automaticamente para dentro do pacote como se
  ele fosse um emissor desktop completo.
- Quando houver duvida entre ampliar runtime e manter boundary, a decisao continua sendo a
  regra conservadora de [criterios-promocao](./criterios-promocao.md).

## Baseline do pacote

| Item                 | Leitura atual                                                          |
| -------------------- | ---------------------------------------------------------------------- |
| Import estavel       | apenas `nfe-sdk` via `package.json#exports["."]`                       |
| Runtime alvo         | Node.js `>=18.18` em pacote `ESM`                                      |
| Contrato canonico    | `publicPackageContract` em `src/public-contract.ts`                    |
| Inventario publicado | `src/index.ts` + [coverage-matrix](./coverage-matrix.md)               |
| Regra de expansao    | slices additive pequenas, com boundary publica antes de ampliar escopo |

## Runtimes publicados no pacote

| Trilha runtime                | Superficies principais                                                                                                                   | Fase            | Evidencia do projeto                                         | Base oficial dominante                                                        | Proximo delta controlado                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Estrutural e serializacao     | `createNFe`, `createEnviNFe`, `serializeNFeXml`, `serializeEnviNFeXml`                                                                   | Fase 2          | `src/index.ts`, [coverage-matrix](./coverage-matrix.md)      | `MOC 7.0`, Anexo I e corpus XSD                                               | manter modelagem deterministica sem promover emissor local                           |
| Assinatura e precondicoes     | `createSigningContext`, `signNFeXml`, `signEventXml`, `prepareNFCeSigningPrerequisites`                                                  | Fase 3 / Fase 7 | `src/public-contract.ts`, specs `005` e `014`                | `MOC 7.0`, `NT 2026.001`, material de `DANFE NFC-e` e `QR Code`               | fechar a proxima slice de assinatura sem puxar trust chain automatizada              |
| Transporte `SOAP`             | `resolveNFeServiceEndpoint`, `executeNFeSoapService`                                                                                     | Fase 4          | `src/index.ts`, spec `006`                                   | catalogos `SVAN`/`SVRS`, portal nacional e dossies estaduais                  | preservar root import e ampliar apenas quando houver slice de ambiente fechada       |
| Operacional `NFe`             | `authorizeNFe`, `queryNFeServiceStatus`, `queryNFeDocumentSituation`, `submitNFeInutilization`, `cancelNFe`, `submitNFeCorrectionLetter` | Fase 5          | `src/public-contract.ts`, specs `007` e `020`                | `Manual do Emissor de NF-e`, `MOC 7.0`, Anexo III de contingencia             | endurecer polling, lote e continuidade sem virar emissor assistido                   |
| Recibo e protocolo `NFe`      | `reconcileNFeReceipt`                                                                                                                    | Fase 5          | specs `021`, `src/public-contract.ts`                        | `Manual do Emissor de NF-e` para recibo, processamento e pendencia de retorno | manter polling generico e reconciliacao multi-documento fora do contrato raiz        |
| Contingencia observavel `NFe` | diagnostico `contingency-boundary` em `authorizeNFe` para `SVC-AN` e `SVC-RS`                                                            | Fase 5 / Fase 7 | specs `016`, `src/public-contract.ts`                        | Anexo III do `MOC`, avisos estaduais e trilha `SVC`                           | manter `EPEC` e `offline` nomeados, mas ainda fora do runtime promovido              |
| Destinatario e continuidade   | `distributeRecipientDFe`, `manifestRecipientOperation`, `retrieveRecipientDocument`                                                      | Fase 6          | specs `008` e `022`, [coverage-matrix](./coverage-matrix.md) | corpus oficial de manifestacao e distribuicao consolidado no roadmap          | preservar `consNSU`, `consChNFe` e polling agressivo como backlog explicito          |
| Eventos genericos             | `submitGenericEvents`                                                                                                                    | Fase 6          | spec `009`, `src/index.ts`                                   | familias oficiais `110130`, `110150`, `110192`, `110750`                      | manter `EPEC` completo e variacoes ainda sem trilha homologada fora da promocao      |
| `NFC-e` homologada promovida  | `authorizeNFCe` para cohort `SP + PR`                                                                                                    | Fase 7          | spec `010`, plano `023`, `src/public-contract.ts`            | `MOC 7.0`, `NT 2023.002`, Manual de Boas Praticas `NFC-e`, matriz `UF`        | ampliar apenas por cohort pequeno e justificavel, sem cobertura multi-`UF` implicita |

## Superficies publicas ainda parciais

| Superficie                                                             | Estado atual                                       | Leitura de runtime                                                                                                          |
| ---------------------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `validateNFeXsd`                                                       | publica, mas com evidencia principalmente unitaria | utilitaria adjacente ao runtime estrutural; ainda nao e gate homologado dedicado                                            |
| `resolveUFAutorizador`                                                 | publica, com cobertura principalmente unitaria     | importante para transporte e `UF`, mas ainda nao comunica um fluxo operacional proprio                                      |
| `retrieveNFeAuthorizationBatch`                                        | publica, sem fixture homologada dedicada           | prepara a trilha de lote e retorno, mas ainda nao fecha polling generico                                                    |
| `queryNFeByAccessKey`, `queryNFeByNSU`, `queryContributorRegistration` | publicas, porem parciais                           | ajudam o integrador, mas nao equivalem a um runtime operacional estabilizado completo                                       |
| `submitEPECEvent`, `submitICMSDeferralEvent`                           | publicas com boundary ou cobertura parcial         | permanecem fora do recorte operacional estabilizado enquanto a trilha oficial dominante seguir mais ampla que a slice atual |

## Runtimes oficiais de referencia que ficam fora do contrato atual

| Tema oficial                                                                                                                                  | Fonte oficial principal                                                                             | Motivo para nao virar runtime agora                                                                                                                                 | Destino atual no roadmap                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Emissor desktop legado com instalacao Java, `Windows`/`Linux`, diretorio local `database`, UI, importacao, exportacao, `backup` e restauracao | `manual_emissor_nfe.md`, `manual_usuarios_SVRS.md`                                                  | descreve um aplicativo emissor completo e operacao assistida local; isso conflita com a fronteira do pacote como biblioteca `ESM` root-only                         | `documentacao` + `tooling`, nunca promocao implicita              |
| `DANFE NFC-e`, renderer visual e QR Code completo                                                                                             | Manual de Boas Praticas `NFC-e`, manual tecnico `DANFE NFC-e` e `QR Code` de `2025`                 | depende de renderer, layout, papel, URL por `UF`, hash e parametros visuais; o valor dominante ainda nao e uma API fiscal principal                                 | fila curta de `SP` como `tooling` executavel + helpers de runtime |
| Administracao de `CSC` e governanca do hash do `QR Code`                                                                                      | Manual de Boas Praticas `NFC-e` e manual de administracao `CSC`                                     | sofre forte variacao por `UF`, ambiente e credenciamento; hoje serve mais como boundary e precondicao do que como fluxo estabilizado                                | fila curta de `SP` antes de qualquer expansao multi-`UF`          |
| Contingencia `offline` de `NFC-e` e `EPEC` como fluxo completo                                                                                | Manual de contingencia `offline` de `NFC-e`, Anexo III do `MOC`, `NT NFC-e 2014.001`, `NT 2018.004` | envolve operacao degradada, reconciliacao posterior, politicas por `UF` e apoio fora da facade atual                                                                | `RFL-005` e `RFL-006` primeiro para `SP`, depois por cohort       |
| Credenciamento, habilitacao e onboarding estadual                                                                                             | `manual_usuarios_SVRS.md` e dossies por `UF`                                                        | sao precondicoes externas ao SDK e variam por portal, autenticacao e regra local                                                                                    | `documentacao` por `UF` em [ufs-ambientes](./ufs-ambientes.md)    |
| Trust chain automatizada, downloads, visualizador e assinador legado                                                                          | portal nacional, cadeias `www`/`www1` e diagnostico de trust chain                                  | ajudam interoperabilidade e troubleshooting, mas nao descrevem contrato fiscal executavel novo                                                                      | `RTM-018` como `tooling` + `documentacao`                         |
| `MDF-e` para o cohort `SP`                                                                                                                    | [baseline oficial e escopo](../../specs/030-mdfe-source-schema-baseline/research.md)                | a pesquisa `030` esta concluida, mas identidade/aplicabilidade do pacote, elegibilidade completa e rollout seguem sem verificacao; nao ha XSD nem runtime no pacote | Fase 9: resolver `032` antes de qualquer codegen ou promocao      |

## Fila curta de expansao runtime

| Ordem | Slice runtime ou tooling executavel                       | Estado editorial                                        | Razao para existir agora                                                                                                                    |
| ----- | --------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `1`   | Continuidade de assinatura, `tpAmb` e ambiente apos `014` | backlog aberto herdado de `005` e `021`                 | ainda falta fechar a ponte entre assinatura, transporte, `NFC-e`, `DV`, `hashCSRT` e coerencia `homologacao`/`producao`                     |
| `2`   | Fechar `NF-e` de `SP` ate `producao`                      | parte ja publicada, parte ainda aberta em `021`         | `SP` ja fornece sinal oficial de indisponibilidade, `SVC-AN` e operacao forte o bastante para virar baseline de codigo                      |
| `3`   | Fechar `NFC-e` de `SP` com `CSC`, `QR Code` e `DANFE`     | boundary oficial conhecida, implementacao ainda parcial | sem esses complementos, o caminho paulista ate `producao` continua incompleto mesmo com `authorizeNFCe` ja publicado                        |
| `4`   | Promover `PR` e novos cohorts depois de `SP`              | depende do fechamento paulista                          | `PR`, `MS`, `PB`, `SC`, `CE`, `RJ`, `AC` e outras `UFs` devem herdar um baseline ja estabilizado em `SP`                                    |
| `5`   | Resolver gates MDF-e SP antes de qualquer codegen         | documental agora; runtime futuro condicionado           | Feature `030` encontrou identidade/aplicabilidade e elegibilidade ainda sem fechamento; executar `032` sem selecionar pacote nao verificado |

## Regra pratica de uso

- Consultar este anexo quando a pergunta for "o que ja e runtime de verdade no pacote?".
- Voltar para [coverage-matrix](./coverage-matrix.md) quando a duvida for por superficie publica especifica.
- Voltar para [proximas-iteracoes-recomendadas](./proximas-iteracoes-recomendadas.md) quando a duvida for ordem de execucao.
- Voltar para [criterios-promocao](./criterios-promocao.md) quando a discussao for se um tema oficial deve parar em `documentacao`, `tooling` ou `runtime`.
