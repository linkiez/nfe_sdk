# Criterios de Promocao entre Documentacao, Tooling e Runtime

## Objetivo

Estabelecer uma regra unica para decidir quando um tema do acervo oficial permanece apenas como `documentacao`, quando deve virar `tooling` e quando ja pode ser promovido para `runtime` no pacote.

## Regra geral

- `Documentacao` cobre material que ainda orienta leitura, classificacao, watchlist ou curadoria, mas nao sustenta comportamento executavel estavel.
- `Tooling` cobre artefatos auxiliares, diagnosticos, runbooks, validacoes, ingestao de dados externos e apoio operacional ao integrador.
- `Runtime` cobre comportamento elegivel para contrato publico do SDK, com boundary claro, insumo definido e observabilidade verificavel.

## Direcionamento atual do roadmap

- Para fechar `SP` ate `producao`, a classificacao padrao das features fiscais prioritarias deixa de ser apenas editorial: toda feature oficial dominante deve nascer em codigo como `runtime`, `tooling` executavel ou `exemplo` shipped.
- `Documentacao` sozinha continua valida para curadoria, watchlist e governanca, mas ja nao encerra uma feature critica de `NF-e` ou `NFC-e` paulista.
- Quando houver duvida entre `runtime` e `tooling`, o default continua conservador no contrato publico, mas nao no codigo: se a feature for necessaria para `SP` em `producao`, ela entra na fila de implementacao como `tooling` executavel no minimo.

## Gatilhos minimos por classe

| Classe alvo    | Gatilhos minimos exigidos                                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `Documentacao` | Fonte oficial identificada, impacto classificado em um `RTM-*`, e fronteira inicial explicitada                              |
| `Tooling`      | Necessidade recorrente do integrador, sem exigir contrato fiscal publico novo, e criterio de uso operacional verificavel     |
| `Runtime`      | Regra oficial estavel, boundary funcional claro, entrada/saida modelaveis, risco estadual conhecido e comportamento testavel |

## Quando promover de `documentacao` para `tooling`

Promover quando todos os pontos abaixo forem verdadeiros:

- O tema resolve uma dor recorrente de integracao, suporte, diagnostico ou atualizacao.
- O valor principal esta em automacao auxiliar, validacao, ingestao, observabilidade ou runbook executavel.
- O tema nao exige expor nova API fiscal principal para ser util.

Exemplos tipicos:

- tabelas externas e politicas de versionamento de `RTM-010`
- trust chain, validadores e apoio de interoperabilidade de `RTM-018`
- diagnostico de ambientes e acessos por `UF` em `RTM-012`

## Quando promover de `documentacao` para `runtime`

Promover quando todos os pontos abaixo forem verdadeiros:

- A norma ou conjunto documental ja permite definir um recorte funcional minimo sem ambiguidade dominante.
- O comportamento possui entrada, saida e erro observaveis no contrato do pacote.
- O risco de variacao por `UF`, ambiente ou autorizador esta reduzido a um boundary explicito.
- Existe caminho de teste contract, unitario e integracao para o slice proposto.

Exemplos tipicos:

- autorizacao homologada e boundary de `UF` suportada em `NFC-e`
- consultas e manutencao de `NF-e` ja estabilizadas no MVP operacional
- assinatura de documentos quando trust chain, `DV` e fronteiras com transporte estiverem fechadas

## Quando NAO promover para `runtime`

Nao promover quando qualquer um dos pontos abaixo ainda for dominante:

- O tema depende de renderer, utilitario ou ferramenta externa sem exigir execucao pelo SDK.
- O valor principal e explicativo, visual ou procedimental, e nao contratual.
- A variacao por `UF` ainda e mais forte do que o nucleo nacional disponivel.
- Ainda nao existe slice minima coerente para teste e contrato publico.

Exemplos tipicos:

- `DANFE`, `DANFE NFC-e` visual e consulta do consumidor
- promocao nacional irrestrita de `CSC`, `QR Code` e contingencia `offline` antes de fechar o baseline paulista e sua boundary por ambiente
- familias emergentes como `NF-e ABI` sem criterio tecnico de promocao fechado

## Regra especifica por area

| Area                                                  | Promocao preferencial                                                                                            |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `RTM-003` assinatura e certificados                   | `runtime` apenas quando trust chain, transporte e calculos adiados estiverem explicitamente fechados             |
| `RTM-005` contingencia e deltas `NFC-e`               | `runtime` para o baseline de `SP`; `tooling` ou `documentacao` para o que ainda exceder a slice paulista         |
| `RTM-007` `DANFE`, `QR Code`, `CSC`                   | `runtime` + `tooling` para fechar `SP` ate `producao`; evitar apenas promocao nacional irrestrita prematura      |
| `RTM-010` tabelas externas                            | `tooling` por padrao; promover para `runtime` apenas se algum contrato precisar consumir esses dados diretamente |
| `RTM-011` complementos estaduais por `UF`             | promover primeiro `SP` ate `producao`; depois repetir o criterio para as demais `UFs`                            |
| `RTM-016` e `RTM-019` familias paralelas e emergentes | manter em `documentacao` ate existir justificativa arquitetural e slice minima testavel                          |

### Nota aplicada a `RTM-018`

- O artefato canonico [diagnostico-trust-chain](./diagnostico-trust-chain.md) fixa `RTM-018` como `tooling` + `documentacao` nesta fase.
- Cadeias `www`/`www1`, superficie de downloads, assinador e visualizador `DF-e` permanecem como inventario principal de apoio ao integrador.
- `WSDL`, `SSL`, `SVAN`, `SVRS` e superficies autenticadas permanecem como evidencias de apoio e boundary de interoperabilidade.
- Qualquer promocao futura para `runtime` continua exigindo slice propria com fallback, contrato observavel e fechamento das fronteiras com assinatura e transporte.

### Nota aplicada a `RTM-010`

- `cbs-ibs`, `payment-methods`, `ncm-utrib`, `anp` e `cfop` devem permanecer em `tooling` por padrao nesta fase.
- `fcp` e `municipios` devem permanecer em `documentacao` + `tooling` enquanto o delta por `UF` continuar mais forte que a consolidacao nacional disponivel.
- Nenhum desses grupos deve ser promovido por conveniencia editorial; a promocao continua exigindo slice propria, criterio de fallback e dependencia real do contrato publico.

## Checklist rapido de decisao

Antes de promover qualquer tema, responder `sim` para estas perguntas:

- Existe fonte oficial vigente suficiente para recortar o comportamento?
- O comportamento pode ser descrito sem depender de UI, emissor legado ou utilitario externo?
- A variacao por `UF` ou ambiente ja esta absorvida ou explicitamente contida?
- Existe teste viavel para demonstrar esse comportamento no pacote?
- A promocao adiciona valor de contrato, e nao apenas conveniencia editorial?

Se alguma resposta for `nao`, o tema deve permanecer em `documentacao` ou `tooling`.

## Uso no roadmap

- Toda nova iteracao ou nova spec deve citar este anexo quando propuser promocao de escopo.
- Quando houver duvida entre `tooling` e `runtime`, a decisao padrao deve ser conservadora: promover primeiro para `tooling`.
