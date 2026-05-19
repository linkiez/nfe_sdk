# Research: Roadmap Gap Audit

## Decision 1: Auditar formalmente apenas as specs 001 a 008

- **Decision**: O escopo formal da auditoria cobre `specs/001` a `specs/008`; `specs/009` e `specs/010` entram apenas como contexto auxiliar para evitar classificacao de gap ja enderecada depois.
- **Rationale**: Isso preserva fidelidade ao pedido original e evita raciocinio circular onde o proprio roadmap posterior encobre lacunas da fase inicial.
- **Alternatives considered**:
  - Auditar `001-010` como um unico conjunto: rejeitado por misturar descoberta de gap com resolucao downstream.
  - Ignorar `009-010` completamente: rejeitado porque poderia gerar falso gap para capacidades ja tratadas depois.

## Decision 2: Materializar a auditoria em tres artefatos separados

- **Decision**: A auditoria produz uma matriz de cobertura, um relatorio de gaps e um backlog priorizado, todos inicialmente dentro de `specs/011-roadmap-gap-audit/`.
- **Rationale**: Separar estado atual, lacunas e recomendacao de sequenciamento reduz ambiguidade de uso e facilita verificacao cruzada entre artefatos.
- **Alternatives considered**:
  - Relatorio unico monolitico: rejeitado por misturar cobertura, lacuna e prioridade em um artefato dificil de validar.
  - Promocao imediata para `docs/`: rejeitado por antecipar consolidacao editorial antes da estabilizacao do resultado.

## Decision 3: Priorizar por impacto operacional e risco normativo

- **Decision**: O backlog derivado da auditoria ordena primeiro impacto operacional e risco normativo; estimativa de esforco e criterio secundario.
- **Rationale**: O corpus oficial internalizado evidencia lacunas com maior peso para compliance e uso real do integrador do que uma estrategia de baixo esforco conseguiria revelar.
- **Alternatives considered**:
  - Priorizar por baixo esforco: rejeitado por favorecer backlog conveniente, mas pouco relevante.
  - Priorizar apenas por risco: rejeitado por perder equilibrio pragmatico em temas de menor impacto operacional.

## Decision 4: Preservar fronteiras de proveniencia em vez de colapsar tudo como "nao suportado"

- **Decision**: Cada gap deve ser classificado como gap de runtime, documental, estadual, dependencia externa, lacuna de fonte ou deferimento deliberado.
- **Rationale**: Diferentes tipos de gap exigem respostas diferentes; colapsar tudo como uma unica categoria destruiria o valor do backlog derivado.
- **Alternatives considered**:
  - Binario suportado/nao suportado: rejeitado por perder informacao de remedio.
  - Matriz excessivamente granular: rejeitado por aumentar custo sem ganho proporcional.

## Decision 5: Usar o corpus oficial internalizado como baseline formal

- **Decision**: A comparacao normativa parte do acervo ja internalizado sob `docs/_sources/markdown/official/`, do registro de fontes em `docs/_meta/source-registry.md` e da consolidacao editorial existente em `docs/`.
- **Rationale**: O repositorio ja possui uma base reproducivel, versionada e rastreavel; reabrir crawling externo nesta fase reduziria estabilidade do processo.
- **Alternatives considered**:
  - Fazer nova pesquisa live na web: rejeitado por perda de reproducibilidade.
  - Usar apenas dossies editoriais internos: rejeitado por afastar a auditoria das fontes oficiais rastreaveis.

## Decision 6: Tratar diferentemente deferimento deliberado e gap nao percebido

- **Decision**: Temas oficialmente documentados mas explicitamente deixados fora de slices anteriores, como QR Code, DANFE NFC-e, CSC ou contingencia offline, devem ser marcados como deferimentos deliberados antes de serem avaliados como backlog prioritario.
- **Rationale**: Nem todo item ausente do runtime representa falha de pesquisa; alguns foram adiados conscientemente para preservar foco do roadmap.
- **Alternatives considered**:
  - Marcar todos os ausentes como gaps equivalentes: rejeitado por apagar a intencao do planejamento anterior.

## Decision 7: Tratar variacao estadual em camadas

- **Decision**: O backlog da auditoria deve distinguir gap nacional, gap do piloto estadual atual e gap multi-UF, promovendo evidencia estadual somente quando ela fecha lacuna operacional real.
- **Rationale**: O roadmap e a feature 010 ja assumem promocao incremental por UF, especialmente para NFC-e.
- **Alternatives considered**:
  - Cobertura multi-UF imediata em bloco: rejeitado por inflar escopo.
  - Ignorar material estadual: rejeitado por esconder diferencas operacionais reais.

## Top gap categories to track

1. Contrato publico e distribuicao do pacote
2. Modelagem canonica, serializacao e maquina de estados local do documento
3. Assinatura digital e interoperabilidade tecnica (`SSL`, `WSDL`, cadeia de certificados)
4. Transporte SOAP, catalogo de servicos, polling de recibo e consultas de protocolo
5. Contingencia (`NF-e`, `NFC-e offline`, `SVC`, `EPEC`)
6. Pos-autorizacao e reconciliacao operacional
7. Superficies auxiliares (`DANFE`, `DANFE NFC-e`, `QR Code`, `CSC`, exportacao previsivel de XML)
8. Eventos, distribuicao DFe e Manifestacao do Destinatario
9. Governanca de compatibilidade normativa (`NTs`, informes, versoes de schema)
10. Tabelas auxiliares e parametros externos
11. Complementos estaduais e politicas por UF
12. Tooling de apoio ao integrador, fixtures, snapshots e runbooks
13. Familias documentais paralelas como `NFGas`, `NFAg` e `NF-e ABI`

## Residual uncertainties kept explicit

- Capacidade fragmentada em varias fontes oficiais deve permanecer marcada como gap de proveniencia distribuida, e nao como comportamento inferido.
- UFs com falha de conversao oficial ou cobertura estadual incompleta devem ser registradas como fonte insuficiente antes de qualquer conclusao forte.
- Capacidades com acesso oficial restrito por certificado, captcha ou credenciamento devem ser tratadas como dependencia externa, mesmo quando a existencia do fluxo for oficial.
- Itens ja resolvidos downstream em `009` ou `010` devem aparecer como `resolved-downstream` quando servirem apenas para evitar duplicacao, nao como cobertura formal do escopo `001-008`.
