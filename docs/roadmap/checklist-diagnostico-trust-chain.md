# Checklist de Diagnostico de Trust Chain

## Objetivo

Fornecer um runbook humano curto para onboarding tecnico e troubleshooting de trust chain, downloads auxiliares e interoperability hints do portal nacional sem transformar esse fluxo em CLI ou capacidade de runtime do SDK.

## Checklist rapido

| Passo | O que verificar                                                                                     | Evidencia esperada                                                                                                                                            | Quando escalar                                                                        |
| ----- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `1`   | Identifique o sintoma principal: cadeia, download, assinador, visualizador ou descoberta de servico | O sintoma cabe em um dos itens do inventario canonico de [diagnostico-trust-chain](./diagnostico-trust-chain.md)                                              | Se o sintoma ja depender de autorizacao, `SOAP` ou `UF` especifica                    |
| `2`   | Confirme a proveniencia do artefato no portal nacional                                              | O item existe em [portal-documentos-vigentes](./portal-documentos-vigentes.md) ou na superficie [portal-nacional-inventario](./portal-nacional-inventario.md) | Se nao houver origem observavel ou houver ambiguidade de vigencia                     |
| `3`   | Verifique a data observada e trate a ambiguidade como evidence-only                                 | A data observada aparece registrada; ausencia de revogacao permanece explicita                                                                                | Se for preciso inferir substituicao silenciosa de cadeia ou download                  |
| `4`   | Distinga apoio operacional de capacidade do SDK                                                     | Assinador e visualizador `DF-e` aparecem apenas como utilitarios externos de apoio                                                                            | Se a expectativa do integrador for usar esses artefatos como dependencia do pacote    |
| `5`   | Confirme se a duvida depende de `WSDL`, `SSL`, autenticacao mutua ou credenciamento                 | O caso e tratado como boundary em [diagnostico-trust-chain](./diagnostico-trust-chain.md)                                                                     | Se a continuidade exigir ambiente autenticado, certificado ou manual de `SVAN`/`SVRS` |
| `6`   | Encaminhe o follow-up correto                                                                       | O backlog residual aponta para assinatura expandida, transporte ou ambiente, sem reabrir esta slice                                                           | Se o caso exigir nova API publica, automacao de trust chain ou rollout multi-`UF`     |

## Regra de uso

- Este checklist e deliberadamente humano e documental.
- Nenhum passo pressupoe comando novo, parser dedicado ou download automatico no repositorio.
- Quando a evidencia oficial for incompleta, registre a lacuna e mantenha a fronteira como externa.
