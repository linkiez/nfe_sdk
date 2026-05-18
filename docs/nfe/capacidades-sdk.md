# Capacidades do SDK para NFe

## Escopo

Consolidar capacidades funcionais, validacoes e dependencias que o SDK precisara suportar para a emissao de NFe com base nas fontes oficiais pesquisadas ate aqui.

## Leitura no catalogo principal

- Neste dossie, a linguagem de estado foi alinhada ao catalogo geral em `docs/capacidades-sdk.md`.
- As entradas abaixo descrevem capacidades documentadas e visiveis no repositorio, mas ainda nao devem ser lidas automaticamente como contrato publico fechado do pacote.
- Quando uma capacidade depender de operacao fiscal real, certificacao digital ou aprofundamento normativo adicional, isso aparece de forma separada em `Habilitacao operacional` e `Riscos e lacunas`.

## Taxonomia aplicada neste dossie

- `partial` indica que o repositorio ja oferece evidencia suficiente para leitura documental e derivacao de backlog, mas ainda nao para prometer contrato publico fechado.
- `future` indica necessidade identificada sem base suficiente para classificacao como cobertura atual.
- O impacto descrito abaixo continua documental nesta fase, mas antecipa onde futuras evolucoes podem tocar contratos publicos, artefatos gerados ou regras de normalizacao.

## Capacidades requeridas

| ID | Capacidade | Estado no catalogo | Evidencia principal | Fontes | Habilitacao operacional | Lacuna explicita | Impacto e compatibilidade futura |
| --- | --- | --- | --- | --- | --- | --- | --- |
| NFE-CAP-001 | Gerar e representar documentos fiscais eletronicos assinaveis digitalmente | partial | docs/nfe/emissao-nfe.md | SRC-NFE-001, SRC-NFE-003 | Certificacao digital e operacao fiscal real quando aplicavel | Ainda faltam regras finas fechadas para assinatura e validacao fim a fim | Exige contratos claros para assinatura, serializacao e validacao antes de qualquer promocao a contrato publico |
| NFE-CAP-002 | Suportar autorizacao previa e consultas publicas relacionadas a NF-e | partial | docs/nfe/emissao-nfe.md | SRC-NFE-001, SRC-NFE-004 | Credenciamento e uso de servicos oficiais quando aplicavel | Endpoints, respostas de status e fluxos de consulta ainda nao estao estabilizados no pacote | Pode afetar contratos publicos futuros se o repositorio passar a expor integracao operacional |
| NFE-CAP-003 | Tratar inutilizacao, disponibilidade e cenarios de contingencia | partial | docs/nfe/emissao-nfe.md | SRC-NFE-001, SRC-NFE-004 | Uso real depende de operacao autorizada pelo Fisco | O mapeamento normativo ainda nao cobre todas as variacoes operacionais e excecoes | Futuras abstrações precisam separar operacao normal e contingencia sem gerar quebra de modelo |
| NFE-CAP-004 | Acompanhar notas tecnicas e informes tecnicos recentes | partial | docs/mudancas-recentes.md | SRC-NFE-001, SRC-NFE-002 | Nenhuma adicional para leitura documental | Nem toda mudanca recente ja foi refletida em backlog tecnico executavel | Direciona rotina de atualizacao de schemas, validacoes e compatibilidade |
| NFE-CAP-005 | Diferenciar regras nacionais de complementos estaduais | future | docs/_meta/source-registry.md | SRC-NFE-001, SRC-NFE-003, SRC-NFE-004, SRC-SEC-001 | Revisao estadual individual e futuras consolidacoes por UF | Regras estaduais alem de SP continuam sem consolidacao suficiente nesta rodada | Exige ponto de extensao por UF e nota de migracao caso altere contratos publicados no futuro |

## Validacoes e pre-requisitos

- Certificacao digital segue como pre-requisito normativo central para validade juridica da NF-e.
- O fluxo deve considerar recepcao/autorizacao pelo Fisco antes da ocorrencia do fato gerador, conforme descricao publica da SEFAZ/SP.
- Disponibilidade de servicos e contingencia devem ser tratadas como parte do fluxo operacional, nao como excecao rara.

## Riscos e lacunas

- Ainda faltam artefatos normativos detalhados dos manuais e documentos do portal nacional para fechar regras finas de validacao.
- Regras estaduais alem de SP ainda nao foram consolidadas nesta etapa.

## Leitura de compatibilidade

- O estado atual deste dossie e documental: ele descreve cobertura percebida, nao uma API operacional fechada para NF-e.
- Itens `partial` e `future` devem ser lidos como backlog e risco de compatibilidade, nao como promessa de fluxo pronto em producao.
- Qualquer evolucao que transforme estas capacidades em contrato publico exigira nota de migracao e avaliacao de impacto em artefatos gerados ou caminhos exportados.

## Fontes secundarias de apoio tecnico

- `SRC-SEC-001` node-dfe foi usado apenas como referencia complementar para comparar capacidades praticas de implementacao em Node.js, sem substituir a base normativa oficial.