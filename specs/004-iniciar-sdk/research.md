# Research: Inicio do Desenvolvimento Funcional do SDK

## Decision 1: Publicar a primeira capacidade funcional como ampliacao aditiva no import raiz

- **Decision**: A primeira slice funcional entrara no root import do pacote como uma facade enxuta, preservando `publicPackageContract` e evitando subpaths como contrato principal.
- **Rationale**: Isso respeita a fase 003, reduz acoplamento com a estrutura interna e cria uma superficie pequena o suficiente para evoluir sem congelar cedo demais builders ou a arvore canonica completa.
- **Alternatives considered**:
  - Publicar builders ou classes como contrato principal: rejeitado porque exporia detalhes internos cedo demais.
  - Publicar subpaths dedicados para a camada canonica: rejeitado porque ampliaria o contrato sem necessidade para a primeira slice.

## Decision 2: Ancorar a primeira slice na familia `PL_010c_NT2022_002v1.30` com foco em `NFe` e `enviNFe`

- **Decision**: A implementacao inicial ficara restrita aos artefatos normativos e gerados associados a `NFe` e `enviNFe` na familia `PL_010c_NT2022_002v1.30`.
- **Rationale**: Esse recorte cobre o fluxo emitente principal com alto valor transversal e reduz a chance de misturar cedo demais protocolos processados, retornos ou documentos fora da primeira entrega funcional.
- **Alternatives considered**:
  - Incluir `retEnviNFe`, `protNFe` e `nfeProc` na mesma fase: rejeitado porque aumenta o escopo antes de estabilizar montagem e serializacao basicas.
  - Escolher outra familia documental primeiro: rejeitado porque o roadmap e a clarificacao priorizaram a NF-e principal.

## Decision 3: Tratar os artefatos gerados como adaptadores internos, nao como experiencia publica

- **Decision**: A camada manual vai ler e compor sobre as classes e interfaces geradas, mas a experiencia publica sera modelada por entradas canonicas menores e funcoes de fachada.
- **Rationale**: O repositorio ja possui base gerada suficiente para servir como fundacao interna. Reutiliza-la reduz retrabalho e preserva proveniencia, enquanto a camada manual cria a ergonomia que falta ao SDK.
- **Alternatives considered**:
  - Reexportar diretamente classes geradas do fluxo `NFe`: rejeitado porque perpetua o acoplamento que a fase quer reduzir.
  - Ignorar o gerado e reimplementar tudo manualmente: rejeitado porque perderia rastreabilidade para os schemas e aumentaria o risco de divergencia.

## Decision 4: Validar a primeira entrega com fixtures XML e checagens estruturais deterministicas

- **Decision**: A evidencia minima de regressao desta fase sera composta por fixtures XML reutilizaveis e comparacao estrutural deterministica para entradas equivalentes.
- **Rationale**: Isso entrega confianca suficiente para montagem e serializacao iniciais sem bloquear a fase por infraestrutura adicional de validacao XSD automatizada completa.
- **Alternatives considered**:
  - Exigir validacao XSD automatizada completa ja nesta fase: rejeitado porque aumenta o acoplamento com infraestrutura antes de estabilizar o modelo funcional.
  - Validar apenas por inspeção documental: rejeitado porque nao cria regressao automatizada reutilizavel.

## Decision 5: Priorizar normalizacao compartilhada de `ambiente`, `versao` e identificadores iniciais

- **Decision**: A normalizacao transversal desta fase ficara restrita a `ambiente`, `versao` e identificadores iniciais de lote/documento, incluindo `Id` e correlatos de `enviNFe`.
- **Rationale**: Esse conjunto pequeno e transversal sustenta montagem previsivel e prepara as fases seguintes sem antecipar regras mais pesadas, como chave de acesso completa ou calculos derivados.
- **Alternatives considered**:
  - Incluir logo a chave de acesso completa: rejeitado porque amplia regras e dependencias antes da hora.
  - Normalizar so `ambiente` e `versao`: rejeitado porque nao cobre identificadores minimos do lote e do documento.

## Decision 6: Manter assinatura, transporte e autorizacao real explicitamente fora do escopo

- **Decision**: A primeira camada funcional encerra em montagem, serializacao e validacao estrutural, deixando assinatura XML, SOAP, catalogo de servicos e comunicacao com autorizadores para fases posteriores do roadmap.
- **Rationale**: Isso protege o recorte funcional e evita que o plano misture requisitos normativos de documento com infraestrutura operacional ainda nao estabilizada.
- **Alternatives considered**:
  - Iniciar assinatura ou transporte junto com a facade: rejeitado porque mistura Fase 2 com Fases 3 e 4 do roadmap.
  - Deixar o limite de escopo implicito: rejeitado porque abre espaco para expectativas erradas de cobertura.

## Decision 7: Tornar lacunas adiadas visiveis no proprio modelo canonico

- **Decision**: Os documentos canonicos criados nesta fase carregarao a lista padrao de lacunas adiadas, incluindo chave de acesso completa, validacao XSD automatizada e documentos fora do recorte inicial.
- **Rationale**: Isso mantem os limites da slice anexados ao proprio artefato funcional e evita que a equipe precise inferir os adiamentos apenas por leitura documental.
- **Alternatives considered**:
  - Registrar lacunas apenas em docs: rejeitado porque separa demais o limite da implementacao.
  - Ignorar lacunas no artefato canonico: rejeitado porque enfraquece a rastreabilidade exigida pela especificacao.
