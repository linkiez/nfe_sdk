# Matriz de Cobertura do SDK

## Objetivo

Consolidar a superficie publica documentada do pacote em um unico ponto de consulta, separando o
que ja esta sustentado por contrato e integracao do que ainda permanece em estado `beta` ou como
lacuna explicita do roadmap.

## Regras de leitura

- `stable`: superficie publica com contrato documentado e evidencia de integracao ou de uso raiz
  repetivel.
- `beta`: superficie publica ja exportada, mas sustentada apenas por evidencias unitarias,
  smoke de tarball ou cobertura ainda parcial.
- `backlog`: lacuna reconhecida pelo roadmap e pelas fontes oficiais, mas sem oferta publica
  estavel nesta fase.
- `fora-do-escopo`: item deliberadamente mantido fora da fase atual.

## Superficie publicada

| Surface | Kind | Status | Roadmap Phase | Primary Reference | Evidence | Notes |
| ------- | ---- | ------ | ------------- | ----------------- | -------- | ----- |
| `publicPackageContract` | `auxiliary-surface` | `stable` | `Fase 1` | [src/public-contract.ts](../../src/public-contract.ts) | contract + tarball smoke | Fonte canonica do import raiz e da lista `documentedSurface`. |
| `createNFe` | `function` | `stable` | `Fase 2` | [public-functional-facade.md](../../specs/004-iniciar-sdk/contracts/public-functional-facade.md) | contract + integration | Coberto por serializacao e facade canonica. |
| `createEnviNFe` | `function` | `stable` | `Fase 2` | [public-functional-facade.md](../../specs/004-iniciar-sdk/contracts/public-functional-facade.md) | contract + integration | Mantem o envelope `enviNFe` como superficie publica inicial. |
| `serializeNFeXml` | `function` | `stable` | `Fase 2` | [public-functional-facade.md](../../specs/004-iniciar-sdk/contracts/public-functional-facade.md) | contract + integration | Validado pela serializacao deterministica em integracao. |
| `serializeEnviNFeXml` | `function` | `stable` | `Fase 2` | [public-functional-facade.md](../../specs/004-iniciar-sdk/contracts/public-functional-facade.md) | contract + integration | Coberto pelo boundary do envelope sem assinatura. |
| `validateNFeXsd` | `function` | `beta` | `Fase 2` | [docs/ROADMAP.md](../ROADMAP.md) | contract + unit-only | A validacao estrutural existe, mas ainda depende de `xmllint` local e nao tem rotina dedicada de integracao. |
| `createSigningContext` | `function` | `stable` | `Fase 3` | [public-signing-facade.md](../../specs/005-add-digital-signing/contracts/public-signing-facade.md) | contract + integration | Coberto por integracao com fixture A1. |
| `signNFeXml` | `function` | `stable` | `Fase 3` | [public-signing-facade.md](../../specs/005-add-digital-signing/contracts/public-signing-facade.md) | contract + integration | Garante assinatura XMLDSig sobre `NFe`. |
| `computeHashCSRT` | `function` | `beta` | `Fase 3` | [public-signing-facade.md](../../specs/005-add-digital-signing/contracts/public-signing-facade.md) | contract + unit-only | Superficie utilitaria exposta sem fluxo operacional integrado nesta fase. |
| `computeNFeAccessKey` | `function` | `beta` | `Fase 3` | [public-signing-facade.md](../../specs/005-add-digital-signing/contracts/public-signing-facade.md) | contract + unit-only | Calculo deterministico coberto por unidade, sem exemplo homologado dedicado. |
| `resolveNFeServiceEndpoint` | `function` | `stable` | `Fase 4` | [public-soap-transport-facade.md](../../specs/006-add-soap-transport/contracts/public-soap-transport-facade.md) | contract + unit + downstream integration | Participa dos fluxos homologados de status e autorizacao. |
| `resolveUFAutorizador` | `function` | `beta` | `Fase 4` | [public-soap-transport-facade.md](../../specs/006-add-soap-transport/contracts/public-soap-transport-facade.md) | contract + unit-only | Roteamento por UF ainda e sustentado apenas por testes unitarios dedicados. |
| `executeNFeSoapService` | `function` | `stable` | `Fase 4` | [public-soap-transport-facade.md](../../specs/006-add-soap-transport/contracts/public-soap-transport-facade.md) | contract + integration | Coberto por integracao para status, autorizacao e falhas de transporte. |
| `authorizeNFe` | `function` | `stable` | `Fase 5` | [public-nfe-operational-facade.md](../../specs/007-nfe-operational-mvp/contracts/public-nfe-operational-facade.md) | contract + integration | Fluxo homologado de autorizacao simples e em lote. |
| `queryNFeServiceStatus` | `function` | `stable` | `Fase 5` | [public-nfe-operational-facade.md](../../specs/007-nfe-operational-mvp/contracts/public-nfe-operational-facade.md) | contract + integration | Consulta estruturada do status do servico homologado. |
| `queryNFeDocumentSituation` | `function` | `stable` | `Fase 5` | [public-nfe-operational-facade.md](../../specs/007-nfe-operational-mvp/contracts/public-nfe-operational-facade.md) | contract + integration | Consulta estruturada de situacao por chave. |
| `retrieveNFeAuthorizationBatch` | `function` | `beta` | `Fase 5` | [public-nfe-operational-facade.md](../../specs/007-nfe-operational-mvp/contracts/public-nfe-operational-facade.md) | contract + unit-only | Recuperacao de lote permanece sem integracao homologada dedicada. |
| `submitNFeInutilization` | `function` | `stable` | `Fase 5` | [public-nfe-operational-facade.md](../../specs/007-nfe-operational-mvp/contracts/public-nfe-operational-facade.md) | contract + integration | Manutencao homologada com retorno estruturado. |
| `cancelNFe` | `function` | `stable` | `Fase 5` | [public-nfe-operational-facade.md](../../specs/007-nfe-operational-mvp/contracts/public-nfe-operational-facade.md) | contract + integration | Cancelamento homologado com evidencia de transporte. |
| `submitNFeCorrectionLetter` | `function` | `stable` | `Fase 5` | [public-nfe-operational-facade.md](../../specs/007-nfe-operational-mvp/contracts/public-nfe-operational-facade.md) | contract + integration | Carta de correcao homologada com boundary explicita. |
| `queryNFeByAccessKey` | `function` | `beta` | `Fase 5` | [public-recipient-dfe-facade.md](../../specs/008-recipient-dfe-mvp/contracts/public-recipient-dfe-facade.md) | contract + unit-only | Consulta auxiliar por chave existe, mas ainda sem validacao de integracao. |
| `distributeRecipientDFe` | `function` | `stable` | `Fase 6` | [public-recipient-dfe-facade.md](../../specs/008-recipient-dfe-mvp/contracts/public-recipient-dfe-facade.md) | contract + integration | Distribuicao DFe via `distNSU` homologado. |
| `manifestRecipientOperation` | `function` | `stable` | `Fase 6` | [public-recipient-dfe-facade.md](../../specs/008-recipient-dfe-mvp/contracts/public-recipient-dfe-facade.md) | contract + integration | Cobertura homologada dos quatro eventos basicos. |
| `changeManifestRecipientOperation` | `function` | `beta` | `Fase 6` | [public-recipient-dfe-facade.md](../../specs/008-recipient-dfe-mvp/contracts/public-recipient-dfe-facade.md) | contract + unit-only | Helper de transformacao ainda sem fluxo homologado dedicado. |
| `queryContributorRegistration` | `function` | `beta` | `Fase 6` | [public-recipient-dfe-facade.md](../../specs/008-recipient-dfe-mvp/contracts/public-recipient-dfe-facade.md) | contract + unit-only | Consulta cadastral permanece utilitaria nesta fase. |
| `queryNFeByNSU` | `function` | `beta` | `Fase 6` | [public-recipient-dfe-facade.md](../../specs/008-recipient-dfe-mvp/contracts/public-recipient-dfe-facade.md) | contract + unit-only | Consulta por NSU segue sem fixture homologada de integracao. |
| `submitGenericEvents` | `function` | `stable` | `Fase 6` | [public-generic-event-facade.md](../../specs/009-generic-event-mvp/contracts/public-generic-event-facade.md) | contract + integration | Lotes unitarios e heterogeneos homologados para familias suportadas. |
| `submitEPECEvent` | `function` | `beta` | `Fase 6` | [public-generic-event-facade.md](../../specs/009-generic-event-mvp/contracts/public-generic-event-facade.md) | contract + boundary-only | Exportado como superficie publica, mas permanece fora do recorte homologado estabilizado. |
| `submitICMSDeferralEvent` | `function` | `beta` | `Fase 6` | [public-generic-event-facade.md](../../specs/009-generic-event-mvp/contracts/public-generic-event-facade.md) | contract + unit-only | Facade especializada sobre evento generico ainda sem integracao dedicada. |
| `authorizeNFCe` | `function` | `stable` | `Fase 7` | [public-nfce-operational-facade.md](../../specs/010-nfce-national-core/contracts/public-nfce-operational-facade.md) | contract + integration | Homologacao com perfil piloto `SP` e boundaries publicas. |

## Lacunas explicitadas

| Surface | Kind | Status | Roadmap Phase | Primary Reference | Evidence | Notes |
| ------- | ---- | ------ | ------------- | ----------------- | -------- | ----- |
| `DANFE` | `documented-gap` | `backlog` | `Fase 5` | [docs/ROADMAP.md](../ROADMAP.md) | documentation-only | O roadmap trata a representacao auxiliar como superficie complementar, mas ainda sem oferta publica estavel. |
| `DANFE NFC-e` | `documented-gap` | `backlog` | `Fase 7` | [docs/ROADMAP.md](../ROADMAP.md) | documentation-only | Continua dependente do fechamento da trilha nacional/estadual de NFC-e. |
| `QR Code NFC-e e consulta publica` | `documented-gap` | `backlog` | `Fase 7` | [docs/ROADMAP.md](../ROADMAP.md) | documentation-only | Mantido como boundary explicita do slice NFC-e nacional. |
| `Consulta auxiliar por chave para documento nao previamente persistido` | `documented-gap` | `backlog` | `Fase 5` | [docs/ROADMAP.md](../ROADMAP.md) | documentation-only | Ha export utilitario, mas a experiencia operacional completa ainda nao esta estabilizada. |
| `Recuperacao pos-transmissao e polling de recibo/protocolo` | `documented-gap` | `backlog` | `Fase 5` | [docs/ROADMAP.md](../ROADMAP.md) | documentation-only | O roadmap explicita busca de retorno, polling e recuperacao como parte do fluxo minimo ainda em endurecimento. |

## Notas de reconciliacao

- A lista acima cobre cada item de `documentedSurface` em [src/public-contract.ts](../../src/public-contract.ts) exatamente uma vez.
- Sempre que a melhor evidencia disponivel for apenas unitaria, contratual ou de smoke do tarball, o status fica em `beta`.
- As lacunas continuam visiveis mesmo quando existe utilitario parcial relacionado, para evitar que o backlog operacional pareca resolvido antes da validacao homologada correspondente.