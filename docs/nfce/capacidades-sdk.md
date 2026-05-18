# Capacidades do SDK para NFC-e

## Escopo

Consolidar as capacidades que o SDK precisara suportar para NFC-e, separando regras nacionais compartilhadas de variacoes dependentes de UF.

## Leitura no catalogo principal

- Este dossie usa a mesma taxonomia de estado do catalogo geral em `docs/capacidades-sdk.md`.
- A leitura correta para NFC-e e separar a capacidade principal do dominio do detalhe estadual, que continua centralizado em `docs/nfce/uf-matrix.md`.
- Sempre que houver dependencia estadual, credenciamento ou portal especifico da UF, isso deve ser lido como habilitacao operacional e nao como promessa de cobertura completa do pacote.

## Taxonomia aplicada neste dossie

- `partial` indica base documental suficiente para descrever o dominio, mas nao estabilidade publica fechada do pacote.
- O detalhe por UF permanece auxiliar e nao deve ser achatado no catalogo principal.
- O impacto continua documental nesta fase, mas antecipa futuras decisoes sobre extensibilidade por UF e compatibilidade.

## Capacidades requeridas

| ID | Capacidade | Estado no catalogo | Evidencia principal | Fontes | Habilitacao operacional | Lacuna explicita | Impacto e compatibilidade futura |
| --- | --- | --- | --- | --- | --- | --- | --- |
| NFCE-CAP-001 | Modelar o fluxo nacional compartilhado de emissao e autorizacao da NFC-e | partial | docs/nfce/emissao-nfce.md | SRC-NFCE-001, SRC-NFCE-003 | Operacao real e credenciamento variam por UF | O repositorio ainda nao estabilizou um contrato operacional comum para todas as UFs | Base para contratos comuns e comportamento default quando houver futura camada operacional |
| NFCE-CAP-002 | Incorporar atualizacoes de leiaute e notas tecnicas que afetem NF-e e NFC-e | partial | docs/mudancas-recentes.md | SRC-NFCE-002 | Nenhuma adicional para leitura documental | Nem toda mudanca recente ja foi traduzida em backlog tecnico fechado | Exige estrategia de versao e compatibilidade dos tipos gerados |
| NFCE-CAP-003 | Diferenciar regras nacionais de complementos estaduais por UF | partial | docs/nfce/uf-matrix.md | SRC-NFCE-001, SRC-NFCE-004, SRC-NFCE-005, SRC-SEC-001 | Portais estaduais, servicos especificos e regras locais por UF | A maioria das UFs ainda depende de revisao estadual individual explicita | Implica arquitetura extensivel por UF e avaliacao cuidadosa de compatibilidade |
| NFCE-CAP-004 | Tratar disponibilidade, contingencia e rotas alternativas de operacao | partial | docs/nfce/emissao-nfce.md | SRC-NFCE-001, SRC-NFCE-005 | A habilitacao operacional depende do autorizador e da UF | O mapa de fallback normativo ainda nao esta completo para todas as UFs | Requer modelagem de estados operacionais e fallback normativo |
| NFCE-CAP-005 | Rastrear cobertura documental por UF com lacunas explicitas | partial | docs/nfce/uf-matrix.md | SRC-NFCE-001, SRC-SEC-001 | Revisao estadual individual ainda pendente para a maioria das UFs | A matriz ainda nao oferece fechamento suficiente para promocao do dominio a cobertura confirmada | Sustenta backlog incremental de suporte estadual |

## Regras compartilhadas versus sensiveis a UF

### Compartilhadas

- Navegacao normativa nacional.
- Informes e notas tecnicas recentes publicados no portal nacional.
- Necessidade de rastreabilidade entre requisito funcional e fonte oficial.

### Sensiveis a UF

- Servicos especificos do autorizador estadual.
- Variacoes operacionais divulgadas em portais estaduais.
- Procedimentos adicionais de credenciamento, contingencia ou suporte.

## Riscos e lacunas

- As 27 UFs ainda nao foram percorridas individualmente em profundidade.
- A camada estadual segue parcialmente documentada nesta rodada, com SP usado apenas como referencia oficial complementar.

## Fontes secundarias de apoio tecnico

- `SRC-SEC-001` node-dfe foi usado apenas como referencia complementar para comparar suporte pratico multi-UF e orientar a leitura de lacunas de implementacao, sem valor normativo.

## Ligacao com a matriz por UF

- O catalogo principal referencia NFC-e por UF por meio de `CAT-NFCE-002` em `docs/capacidades-sdk.md`.
- O detalhe estadual permanece em `docs/nfce/uf-matrix.md` para evitar duplicacao e manter a leitura do catalogo principal enxuta.

## Leitura de compatibilidade

- O dossie continua documental nesta fase e nao muda a superficie publicada do pacote.
- Itens `partial` aqui devem ser interpretados como cobertura perceptivel com lacunas abertas, especialmente quando a variacao por UF ainda nao foi consolidada.
- Qualquer futura promocao destas capacidades a contrato publico precisa manter a matriz por UF como evidência auxiliar e registrar riscos de migracao.