# Research: Add NFe Operational MVP

## Decision 1: Expor o MVP operacional como funcoes additive no import raiz

- **Decision**: O MVP operacional sera publicado por funcoes additive no import raiz, seguindo o padrao das features anteriores, com uma facade orientada a aplicacao por operacao principal em vez de um objeto monolitico ou subpaths novos.
- **Rationale**: O contrato atual do pacote ja e centrado em funcoes root pequenas e explicitamente documentadas. Manter esse padrao reduz surpresa para o consumidor, preserva `package.json#exports["."]` como fonte normativa unica e evita promover estruturas internas cedo demais.
- **Alternatives considered**:
  - Expor um objeto unico de servicos operacionais: rejeitado porque cria uma segunda forma de consumo do pacote e desvia do contrato funcional atual.
  - Publicar subpaths dedicados do MVP operacional: rejeitado porque amplia a superficie publica antes de estabilizar o slice.

## Decision 2: Aceitar dados canonicos como entrada principal e manter XML como detalhe interno

- **Decision**: As operacoes de alto nivel do MVP receberao dados canonicos da operacao como contrato principal, deixando montagem do documento, serializacao XML, assinatura e transmissao como detalhes internos da orquestracao.
- **Rationale**: A spec clarificada explicitou que o valor do MVP esta em esconder a cola manual entre as camadas 004, 005 e 006. Isso reduz acoplamento a XML bruto e deixa a API mais alinhada ao objetivo de aplicacao do integrador.
- **Alternatives considered**:
  - Exigir XML ja serializado e assinado como entrada principal: rejeitado porque rebaixa o MVP a um simples wrapper de transporte.
  - Aceitar XML e dados canonicos como caminhos equivalentes em todas as operacoes: rejeitado porque dobra contratos e amplia testes sem valor claro no primeiro slice.

## Decision 3: Unificar autorizacao de NFe unica e lote sob a mesma facade publica

- **Decision**: A autorizacao inicial suportara tanto NFe unica quanto lote, sob o mesmo fluxo publico de autorizacao, com resultado estruturado capaz de refletir metadados comuns e status por documento quando necessario.
- **Rationale**: A clarificacao do feature exige os dois formatos desde o inicio. Uma unica fachada reduz divergencia de comportamento, reaproveita `createEnviNFe` como detalhe interno e evita duplicar quase toda a pilha de assinatura e transporte.
- **Alternatives considered**:
  - Limitar o MVP a NFe unica: rejeitado porque contraria a decisao de clarificacao.
  - Criar duas facades publicas independentes para NFe unica e lote: rejeitado porque duplica contrato sem necessidade arquitetural forte.

## Decision 4: Tratar retorno intermediario de autorizacao como resultado valido do MVP, sem polling automatico inicial

- **Decision**: O MVP inicial nao fara polling automatico de recibo ou conclusao final; quando a autorizacao retornar estado intermediario, o SDK devolvera um resultado operacional estruturado com o identificador e as evidencias observadas, e a conclusao posterior ficara a cargo da consulta de situacao por chave de acesso.
- **Rationale**: Isso mantem o slice pequeno, previsivel e coerente com a separacao entre operacao inicial e acompanhamento. Tambem evita transformar o MVP em uma maquina de estados de longa duracao logo na primeira entrega operacional.
- **Alternatives considered**:
  - Fazer polling automatico ate protocolo final: rejeitado porque introduz politicas de espera, retry e timeout mais amplas do que o recorte atual.
  - Tratar estado intermediario como falha: rejeitado porque perde informacao operacional legitima do fluxo fiscal.

## Decision 5: Usar a chave de acesso como identificador publico unico da consulta de situacao

- **Decision**: A consulta inicial de protocolo ou situacao do documento aceitara apenas a chave de acesso da NFe como identificador publico suportado.
- **Rationale**: A chave de acesso e o identificador mais estavel e universal para acompanhamento operacional da NF-e. Isso simplifica contrato, fixtures e mapeamento de resposta, sem depender de um protocolo que pode nao existir no momento da chamada.
- **Alternatives considered**:
  - Aceitar apenas numero de protocolo: rejeitado porque protocolos nao existem em todo ponto do fluxo.
  - Aceitar chave de acesso e protocolo desde o primeiro slice: rejeitado porque amplia o contrato sem necessidade imediata.

## Decision 6: Modelar inutilizacao, cancelamento e carta de correcao como operacoes obrigatorias e explicitas

- **Decision**: Inutilizacao, cancelamento e carta de correcao entram como operacoes obrigatorias do MVP, cada uma com entrada e saida estruturadas, mesmo quando internamente compartilhem infraestrutura de assinatura, transporte e classificacao.
- **Rationale**: O roadmap e a clarificacao do feature tornam essas tres manutencoes parte obrigatoria do slice. Mantê-las explicitas na superficie evita ambiguidades sobre backlog e facilita cobertura dirigida por fixture.
- **Alternatives considered**:
  - Adiar alguma das tres manutencoes para backlog interno do mesmo feature: rejeitado porque reduz o recorte definido pelo roadmap.
  - Esconder manutencoes atras de uma facade generica de eventos: rejeitado porque dilui o valor da API de alto nivel para o integrador.

## Decision 7: Expandir o catalogo de transporte apenas ate o conjunto nacional compartilhado exigido pelo MVP

- **Decision**: O catalogo de transporte sera expandido apenas para os servicos operacionais exigidos pelo MVP de NFe em homologacao, mantendo endpoints nacionais compartilhados como baseline e deixando variacoes por UF, producao e contingencias especiais fora deste plano.
- **Rationale**: O feature depende de novos servicos alem de status e autorizacao, mas o principio de recorte incremental continua valendo. Isso preserva a coerencia da fase 5 sem abrir a cobertura multi-UF prematuramente.
- **Alternatives considered**:
  - Antecipar catalogo completo por UF e producao: rejeitado porque aumenta drasticamente o escopo e a superficie de erro.
  - Manter o catalogo congelado nos dois servicos da feature 006: rejeitado porque bloquearia o MVP operacional definido pela spec.

## Decision 8: Validar o MVP por contrato root, fixtures operacionais e smoke do pacote

- **Decision**: A validacao do MVP combinara testes de contrato do import raiz, testes de unidade para mapeadores e modelos de resultado, integracoes por fixture para autorizacao, consultas e manutencoes, e smoke do tarball para a superficie publicada.
- **Rationale**: O feature muda a ergonomia publica do SDK e atravessa varias camadas internas. O green precisa provar tanto o contrato publicado quanto a composicao correta das camadas canonica, de assinatura e de transporte.
- **Alternatives considered**:
  - Confiar apenas em testes de unidade de mapeamento: rejeitado porque nao prova o fluxo publico fim a fim.
  - Exigir homologacao real contra autorizadores nesta fase: rejeitado porque depende de credenciais e infraestrutura operacional fora do repositório.
