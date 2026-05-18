# Research: Recipient DFe MVP

## Decision 1: Manter o slice estritamente no lado do destinatario com distribuicao DFe e manifestacao basica

- **Decision**: O primeiro slice da Fase 6 ficara limitado a distribuicao DFe e aos quatro eventos basicos de Manifestacao do Destinatario, sem incluir eventos genericos, EPEC ou outras expansoes adjacentes.
- **Rationale**: As fontes oficiais confirmam que esse subconjunto ja tem identidade funcional propria, servicos nacionais dedicados e regras de negocio observaveis. Isso preserva um MVP pequeno, testavel e aderente ao recorte ja consolidado na spec.
- **Alternatives considered**:
  - Incluir EPEC no mesmo slice: rejeitado porque mistura um fluxo excepcional com dependencias e regras que desviam do caso principal do destinatario.
  - Abrir suporte geral a eventos do lado do destinatario: rejeitado porque ampliaria contrato e validacao alem do necessario para o primeiro incremento.

## Decision 2: Tratar distribuicao DFe e recepcao de evento como servicos do Ambiente Nacional

- **Decision**: A modelagem do slice deve assumir `NFeDistribuicaoDFe` e `RecepcaoEvento` como servicos nacionais compartilhados, em vez de promover desde ja uma variacao por UF como contrato principal do MVP.
- **Rationale**: O Portal Nacional publica ambos os servicos no Ambiente Nacional e o MOC afirma que os Web Services de Manifestacao do Destinatario estao disponibilizados no Ambiente Nacional para todas as UF. Isso sustenta uma camada publica inicial centrada no fluxo nacional antes de qualquer abertura regional adicional.
- **Alternatives considered**:
  - Modelar o fluxo primario por autorizador estadual: rejeitado porque desloca o contrato para uma matriz mais ampla do que a comprovada como necessaria neste slice.
  - Tratar distribuicao e manifestacao como rotinas independentes do catalogo oficial: rejeitado porque perderia rastreabilidade direta com as fontes normativas.

## Decision 3: Modelar distribuicao como fluxo com cursor NSU observavel

- **Decision**: A API de distribuicao deve ser pensada como um fluxo orientado por cursor, com `ultNSU` e `maxNSU` tratados como parte central da continuidade observavel do resultado.
- **Rationale**: O MOC descreve explicitamente os modos `distNSU`, `consNSU` e `consChNFe`, alem de afirmar que o Ambiente Nacional gera NSU por interessado e devolve lotes ordenados sem lacunas no fluxo distribuido. Isso valida a decisao de expor continuidade do processo como parte do contrato funcional e nao como detalhe escondido.
- **Alternatives considered**:
  - Expor uma API apenas de consulta pontual por chave: rejeitado porque nao cobre o fluxo principal de acompanhamento do destinatario.
  - Esconder completamente o cursor no contrato publico: rejeitado porque impediria o integrador de raciocinar sobre retomada, sincronizacao e ausencia de novos itens.

## Decision 4: Incorporar limites operacionais de lote, compactacao e backoff no desenho do slice

- **Decision**: O slice deve assumir como restricoes normativas do fluxo de distribuicao o retorno compactado por `docZip`, o lote maximo de 50 documentos, a resposta de ausencia de documentos e o backoff minimo de uma hora quando `ultNSU` alcanca `maxNSU`.
- **Rationale**: Esses comportamentos aparecem no MOC como parte do processo oficial de distribuicao e afetam diretamente ergonomia, expectativas de polling e tratamento de resposta. Eles nao sao detalhes acidentais de implementacao; sao regras operacionais que o SDK precisa refletir com clareza.
- **Alternatives considered**:
  - Tratar lote e compactacao como detalhe interno sem reflexo no contrato: rejeitado porque isso oculta elementos que impactam consumo e diagnostico.
  - Permitir repoll agressivo quando nao houver novos documentos: rejeitado porque conflita com a orientacao oficial e aumenta risco de uso indevido.

## Decision 5: Tornar consumo indevido um limite explicito do contrato do destinatario

- **Decision**: O slice deve registrar explicitamente que consultas repetitivas ou em looping no fluxo de distribuicao podem levar a `656-Rejeicao: Consumo Indevido`, e que esse estado nao deve ser confundido com indisponibilidade ou ausencia de documentos.
- **Rationale**: O MOC documenta controle especifico para uso indevido no Web Service de distribuicao. Como esse limite afeta diretamente politicas de consulta do cliente, ele precisa aparecer como fronteira operacional clara ja no primeiro MVP.
- **Alternatives considered**:
  - Tratar consumo indevido apenas como erro tecnico generico: rejeitado porque perde o sentido normativo e operacional da rejeicao.
  - Adiar esse tratamento para um slice posterior de resiliencia: rejeitado porque o risco nasce no proprio fluxo basico de distribuicao.

## Decision 6: Suportar apenas os quatro eventos basicos oficiais de manifestacao do destinatario

- **Decision**: A superficie publica do slice deve se limitar aos eventos `210200`, `210210`, `210220` e `210240`, usando suas semanticas oficiais como fronteira funcional do MVP.
- **Rationale**: O MOC identifica exatamente esses quatro eventos como o conjunto de Manifestacao do Destinatario, e o leiaute do evento confirma as descricoes e nomes esperados. Isso fornece uma base normativa suficiente para um contrato publico de alto nivel sem extrapolar para eventos fora do recorte.
- **Alternatives considered**:
  - Comecar com apenas Ciencia e Confirmacao: rejeitado porque reduziria artificialmente um conjunto oficial ja coeso.
  - Abrir uma API generica de evento parametrizado: rejeitado porque dissolve o valor do slice e aumenta area de erro na primeira entrega.

## Decision 7: Tratar justificativa como obrigatoria somente em Operacao nao Realizada

- **Decision**: A pesquisa confirma que a justificativa complementar deve existir apenas no evento `210240 - Operacao nao Realizada`, e nao como campo universal de todos os eventos de manifestacao.
- **Rationale**: O leiaute do evento e a tabela de validacao do MOC deixam claro que `xJust` e obrigatorio apenas para Operacao nao Realizada. Isso permite um contrato publico mais preciso e evita exigir dados sem fundamento normativo nos demais eventos.
- **Alternatives considered**:
  - Exigir justificativa para todos os eventos: rejeitado porque contrariaria o leiaute oficial.
  - Nunca aceitar justificativa no MVP: rejeitado porque removeria um requisito normativo real do `210240`.

## Decision 8: Declarar certificado digital e habilitacao externa como precondicoes operacionais, nao como cobertura do SDK

- **Decision**: O slice deve declarar explicitamente que acesso real ao fluxo depende de certificado digital valido e demais precondicoes externas, sem vender isso como responsabilidade interna do SDK.
- **Rationale**: A pagina convertida de Manifestacao do Destinatario registra acesso restrito por certificado digital, e o MOC reforca certificado da empresa no portal e certificado valido de PJ ou PF no Web Service de distribuicao. Isso confirma que parte essencial do fluxo e uma dependencia operacional externa que precisa permanecer visivel no contrato e na documentacao.
- **Alternatives considered**:
  - Omitir a dependencia de certificado para simplificar a narrativa do MVP: rejeitado porque criaria promessa enganosa de uso imediato.
  - Expandir o slice para tentar abstrair credenciamento e acesso restrito: rejeitado porque isso foge do objetivo do SDK neste incremento.

## Decision 9: Refletir no contrato o encadeamento entre resumo, manifestacao e liberacao do download

- **Decision**: O desenho do slice deve partir do fato de que o destinatario pode receber um resumo da NF-e, manifestar-se a partir dele e, em seguida, ter a NF-e liberada para recuperacao no fluxo de distribuicao.
- **Rationale**: O MOC descreve o fluxo em que o destinatario, de posse do resumo, gera o evento, e o Ambiente Nacional passa a disponibilizar a NF-e por NSU para download. Isso reforca que distribuicao e manifestacao nao sao duas features desconectadas, mas duas etapas complementares do mesmo caso de uso do destinatario.
- **Alternatives considered**:
  - Tratar manifestacao e distribuicao como blocos totalmente independentes: rejeitado porque empobrece o modelo operacional documentado.
  - Exigir download integral da NF-e antes de qualquer manifestacao: rejeitado porque contraria o fluxo oficial descrito no MOC.

## Decision 10: Preservar como fronteira documental o efeito da Confirmacao sobre cancelamento pelo emitente

- **Decision**: O slice deve registrar na documentacao e nos resultados explicativos que a Confirmacao da Operacao produz efeito operacional relevante fora do proprio destinatario: apos esse evento, o emitente fica impedido de cancelar a NF-e.
- **Rationale**: O MOC aponta esse efeito de maneira direta na descricao da Confirmacao da Operacao. Mesmo que o SDK nao orquestre a decisao do emitente neste slice, a regra impacta o entendimento do integrador sobre a irreversibilidade pratica da manifestacao conclusiva.
- **Alternatives considered**:
  - Ignorar esse efeito por nao ser uma API separada do slice: rejeitado porque a informacao muda o significado operacional da confirmacao.
  - Transformar esse efeito em automacao adicional no MVP: rejeitado porque isso extrapola o recorte do lado do destinatario.

## Implementation evidence

- O contrato root implementado publica `distributeRecipientDFe` e `manifestRecipientOperation` como ampliacoes additive do pacote.
- A documentacao de apoio e o catalogo de capacidades foram sincronizados para refletir `distNSU`, os quatro eventos basicos e as dependencias externas do fluxo.
- A validacao do slice deve continuar presa ao pacote publicado, incluindo contrato root, testes de integracao do destinatario e smoke do tarball.
