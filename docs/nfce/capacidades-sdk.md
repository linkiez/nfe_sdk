# Capacidades do SDK para NFC-e

## Escopo

Consolidar as capacidades que o SDK precisara suportar para NFC-e, separando regras nacionais compartilhadas de variacoes dependentes de UF.

## Capacidades requeridas

| ID | Capacidade | Status | Fontes | Impacto futuro no SDK |
| --- | --- | --- | --- | --- |
| NFCE-CAP-001 | Modelar o fluxo nacional compartilhado de emissao e autorizacao da NFC-e | confirmed-primary | SRC-NFCE-001, SRC-NFCE-003 | Base para contratos comuns e comportamento default |
| NFCE-CAP-002 | Incorporar atualizacoes de leiaute e notas tecnicas que afetem NF-e e NFC-e | confirmed-primary | SRC-NFCE-002 | Exige estrategia de versao e compatibilidade dos tipos gerados |
| NFCE-CAP-003 | Diferenciar regras nacionais de complementos estaduais por UF | supplemented-secondary | SRC-NFCE-001, SRC-NFCE-004, SRC-NFCE-005, SRC-SEC-001 | Implica arquitetura extensivel por UF |
| NFCE-CAP-004 | Tratar disponibilidade, contingencia e rotas alternativas de operacao | confirmed-primary | SRC-NFCE-001, SRC-NFCE-005 | Requer modelagem de estados operacionais e fallback normativo |
| NFCE-CAP-005 | Rastrear cobertura documental por UF com lacunas explicitas | supplemented-secondary | SRC-NFCE-001, SRC-SEC-001 | Sustenta backlog incremental de suporte estadual |

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