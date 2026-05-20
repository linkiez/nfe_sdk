# Research: Contingency Boundaries

## Decision 1: Promote only observable `SVC` diagnostics in the first contingency slice

- **Decision**: Limitar o primeiro corte de `RFL-005` a diagnostico observavel para `SVC-AN` e `SVC-RS`, sem executar o fallback completo de contingencia.
- **Rationale**: O roadmap define `RFL-005` como recorte de degradacao explicita por ambiente, nao como implementacao de emissor ou retomada assistida. Tornar `SVC` observavel primeiro reduz ambiguidade operacional sem abrir toda a matriz de comportamento contingencial.
- **Alternatives considered**:
  - Implementar `EPEC` junto com `SVC`: rejeitado porque a trilha de conciliacao e retorno ainda nao esta estabilizada como runtime.
  - Implementar `offline` junto com `SVC`: rejeitado porque isso implicaria dependencias locais, persistencia e delta estadual que o slice explicitamente evita.

## Decision 2: Keep `EPEC` and `offline` as named deferred boundaries

- **Decision**: Manter `EPEC` e contingencia `offline` da `NFC-e` como trilhas nomeadas, rastreaveis e explicitamente deferidas para runtime.
- **Rationale**: As fontes oficiais e o roadmap tratam ambas como partes reais da trilha de contingencia, mas ainda dependentes de reconciliacao, dependencias locais ou variacao estadual dominante. Nomea-las como boundary impede promessa silenciosa de cobertura integral.
- **Alternatives considered**:
  - Omitir `EPEC` e `offline` do slice: rejeitado porque isso apagaria lacunas oficiais relevantes do contrato e da documentacao.
  - Promover `EPEC` so como export utilitario: rejeitado porque o risco de o integrador interpretar isso como fluxo operacional fechado continuaria alto.

## Decision 3: Reuse the existing public operational facades instead of creating a contingency-specific API

- **Decision**: Reutilizar `authorizeNFe` e/ou `authorizeNFCe` como superficies publicas estaveis, adicionando apenas classificacao e boundary observavel quando o fluxo entrar no recorte de contingencia.
- **Rationale**: A constituicao exige impacto additive no import raiz. Criar uma nova facade para contingencia transformaria diferenca ambiental em escolha de API e aumentaria a superficie publica sem necessidade.
- **Alternatives considered**:
  - Expor `diagnoseContingency` como nova facade root: rejeitado porque fragmentaria o contrato root e duplicaria semanticamente o fluxo operacional.
  - Confinar toda a logica ao transporte sem reflexo contratual: rejeitado porque o objetivo do slice e justamente tornar a contingencia observavel ao integrador.

## Decision 4: Keep the implementation inside handwritten runtime boundaries only

- **Decision**: Restringir a implementacao a `src/canonical/nfe/`, `src/canonical/nfce/`, `src/canonical/transport/`, `src/public-contract.ts`, `README.md`, testes e roadmap.
- **Rationale**: O comportamento de contingencia por ambiente e contrato observavel e de transporte, nao de schema. Nao ha necessidade de tocar geracao, XSD ou tipos derivados para representar esse slice.
- **Alternatives considered**:
  - Modelar contingencia em artefatos gerados: rejeitado porque nao agrega valor ao contrato publicado e violaria a separacao entre inventario normativo e runtime manual.
  - Criar configuracao externa estadual nova: rejeitado porque o primeiro corte precisa ser pequeno, deterministico e auditavel.

## Decision 5: Validate by normal-flow regression, observable `SVC`, and deferred-boundary checks

- **Decision**: O gate minimo da feature deve provar tres coisas: o fluxo normal continua igual, `SVC` torna-se observavel quando suportado pelo recorte, e `EPEC`/`offline` continuam devolvendo boundary explicita em vez de runtime implicito.
- **Rationale**: Esse e o menor conjunto de checks capaz de falsificar regressao do baseline atual, falha na nova classificacao ambiental ou vazamento de suporte para contingencias ainda deferidas.
- **Alternatives considered**:
  - Validar apenas o diagnostico de `SVC`: rejeitado porque nao prova ausencia de regressao no caminho normal.
  - Validar `EPEC` ou `offline` como sucesso parcial: rejeitado porque conflita com a fronteira explicitamente deferida da spec.

## Decision 6: Use `SP` and `PR` as the promoted state signals and keep `RJ` and `CE` only as editorial evidence

- **Decision**: Usar `SP` e `PR` como sinais estaduais dominantes para a primeira observabilidade de `SVC`, enquanto `RJ` e `CE` permanecem apenas como evidencia editorial de contingencia ainda nao promovida.
- **Rationale**: `SP` e `PR` ja sustentam a leitura de `SVC-AN` e `SVC-RS` com evidencia operacional suficiente para um boundary additive em `NF-e`. `RJ` continua mais associado a `EPEC`, e `CE` ainda concentra ruido documental e reconciliacao incompleta.
- **Alternatives considered**:
  - Promover `RJ` junto com `SP` e `PR`: rejeitado porque a evidencia dominante continua em `EPEC`, nao em `SVC` observavel.
  - Promover `CE` como terceiro sinal estadual: rejeitado porque a documentacao ainda nao fecha o recorte operacional com a mesma confianca de `SP` e `PR`.