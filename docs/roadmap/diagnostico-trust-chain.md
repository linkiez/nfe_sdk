# Diagnostico de Trust Chain e Downloads Auxiliares

## Objetivo

Transformar a iteracao `5` do roadmap e o recorte `RFL-007` em uma trilha diagnostica unica para `RTM-018`, conectando cadeias `www`/`www1`, superficie oficial de downloads e artefatos auxiliares a onboarding tecnico e interoperabilidade sem converter esses insumos em dependencia de runtime do SDK.

## Escopo coberto

- Cadeias `www` e `www1` como baseline nacional de trust chain observavel.
- Superficie oficial de `download.aspx` como hub de artefatos auxiliares.
- Assinador e visualizador `DF-e` como apoio operacional ao integrador.
- Referencias tecnicas de `WSDL` e `SSL` apenas como evidencias de apoio e boundary de interoperabilidade.

Este artefato e o registro canonico do slice para `RTM-018` e `RFL-007`. Proveniencia detalhada, regra de promocao e inventario do portal continuam nos anexos de apoio ja existentes.

## Inventario canonico inicial

| Item ID            | Artefato observado            | Proveniencia observada                                        | Data observada                   | Papel tecnico principal                                                  | Limite de uso no pacote                                                     |
| ------------------ | ----------------------------- | ------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| `www-chain`        | Cadeia de certificados `www`  | [portal-documentos-vigentes](./portal-documentos-vigentes.md) | `14/01/2021`                     | baseline nacional de trust chain para servicos publicos                  | evidencia de interoperabilidade; nao vira dependencia automatica do runtime |
| `www1-chain`       | Cadeia de certificados `www1` | [portal-documentos-vigentes](./portal-documentos-vigentes.md) | `04/08/2021`                     | baseline complementar de trust chain nacional                            | evidencia de interoperabilidade; nao fecha trust chain multiambiente        |
| `download-surface` | Superficie `download.aspx`    | [portal-nacional-inventario](./portal-nacional-inventario.md) | observada como vigente no portal | hub oficial para localizar artefatos auxiliares                          | superficie documental; nao implica download ou empacotamento pelo SDK       |
| `assinador`        | Assinador oficial             | [portal-documentos-vigentes](./portal-documentos-vigentes.md) | vigente em `Downloads`           | evidencia de interoperabilidade de assinatura e apoio ao troubleshooting | utilitario externo; nao integra o contrato publico do pacote                |
| `visualizador-dfe` | Visualizador `DF-e`           | [portal-documentos-vigentes](./portal-documentos-vigentes.md) | vigente em `Downloads`           | apoio ao integrador para leitura manual e verificacao auxiliar           | utilitario externo; nao integra o contrato publico do pacote                |

## Evidencias de apoio e boundaries de interoperabilidade

| Evidencia ou boundary                     | Onde aparece                                                                                                          | Papel nesta slice                                                        | O que continua fora do recorte                                              |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| `WSDL` e catalogo de servicos             | [portal-nacional-inventario](./portal-nacional-inventario.md) em `webServices.aspx`                                   | sustenta diagnostico de descoberta, endpoint e ambiente                  | consumo `SOAP` completo, binding por `UF` e automacao de cliente            |
| `SSL` e autenticacao mutua                | [recortes-funcionais-prioritarios](./recortes-funcionais-prioritarios.md), manuais `SVAN`/`SVRS`, specs `005` e `014` | contextualiza precondicoes de conectividade segura                       | configuracao de certificado, `A3`, trust chain automatica e credenciamento  |
| `SVAN` e `SVRS`                           | manuais e roadmap de ambientes                                                                                        | ajudam a distinguir ambiente compartilhado de inventario nacional minimo | cobertura operacional por ambiente, credenciamento e comportamento por `UF` |
| `arearestrita` e superficies autenticadas | [portal-nacional-inventario](./portal-nacional-inventario.md)                                                         | deixa explicita a fronteira entre portal publico e ambiente autenticado  | qualquer promessa de automacao publica em superficies autenticadas          |

## Fluxo diagnostico minimo

1. Identificar se o sintoma principal e descoberta de download, trust chain, assinatura auxiliar ou diferenca de ambiente.
2. Localizar o item correspondente no inventario canonico e confirmar a proveniencia observada no portal nacional.
3. Conferir se a necessidade do integrador termina em evidencia operacional ou se ja depende de `WSDL`, `SSL`, autenticacao mutua ou credenciamento.
4. Tratar assinador e visualizador `DF-e` como apoio manual de troubleshooting, nunca como extensao implicita do runtime do SDK.
5. Encaminhar tudo o que exigir assinatura expandida, transporte `SOAP`, rollout multiambiente ou configuracao de certificado para follow-up fora desta slice.

## Rastreabilidade do slice

- Iteracao do roadmap: [proximas-iteracoes-recomendadas](./proximas-iteracoes-recomendadas.md), linha `5`.
- Recorte funcional: [recortes-funcionais-prioritarios](./recortes-funcionais-prioritarios.md), `RFL-007`.
- Tema principal: [rtm-cobertura-oficial](./rtm-cobertura-oficial.md), `RTM-018`.
- Tema relacionado: `RTM-003` permanece como follow-up para trust chain mais proxima de runtime, assinatura expandida, `DV` e `hashCSRT`.

## Follow-ups explicitamente fora do recorte

- automatizar trust chain ou validar cadeias no runtime do pacote
- empacotar binarios oficiais, assinador ou visualizador `DF-e`
- fechar autenticacao mutua, `SSL`, credenciamento ou ambientes autenticados
- promover `WSDL`, `SVAN` ou `SVRS` a itens centrais do inventario canonico
- absorver transporte `SOAP`, `QR Code`, `DANFE NFC-e` ou rollout multi-`UF` como se fossem parte desta entrega

## Anexos de apoio

- [checklist-diagnostico-trust-chain](./checklist-diagnostico-trust-chain.md)
- [portal-documentos-vigentes](./portal-documentos-vigentes.md)
- [portal-nacional-inventario](./portal-nacional-inventario.md)
- [criterios-promocao](./criterios-promocao.md)
- [rtm-cobertura-oficial](./rtm-cobertura-oficial.md)
