# Capacidades do SDK para NFe

## Escopo

Consolidar capacidades funcionais, validacoes e dependencias que o SDK precisara suportar para a emissao de NFe com base nas fontes oficiais pesquisadas ate aqui.

## Capacidades requeridas

| ID | Capacidade | Status | Fontes | Impacto futuro no SDK |
| --- | --- | --- | --- | --- |
| NFE-CAP-001 | Gerar e representar documentos fiscais eletronicos assinaveis digitalmente | confirmed-primary | SRC-NFE-001, SRC-NFE-003 | Exige contratos claros para assinatura, serializacao e validacao |
| NFE-CAP-002 | Suportar autorizacao previa e consultas publicas relacionadas a NF-e | confirmed-primary | SRC-NFE-001, SRC-NFE-004 | Requer modelagem de endpoints, respostas de status e fluxos de consulta |
| NFE-CAP-003 | Tratar inutilizacao, disponibilidade e cenarios de contingencia | confirmed-primary | SRC-NFE-001, SRC-NFE-004 | Precisa abstrair operacao normal versus contingencia sem misturar regras |
| NFE-CAP-004 | Acompanhar notas tecnicas e informes tecnicos recentes | confirmed-primary | SRC-NFE-001, SRC-NFE-002 | Direciona rotina de atualizacao de schemas, validacoes e compatibilidade |
| NFE-CAP-005 | Diferenciar regras nacionais de complementos estaduais | supplemented-secondary | SRC-NFE-001, SRC-NFE-003, SRC-NFE-004, SRC-SEC-001 | Exige ponto de extensao por UF para evolucoes futuras |

## Validacoes e pre-requisitos

- Certificacao digital segue como pre-requisito normativo central para validade juridica da NF-e.
- O fluxo deve considerar recepcao/autorizacao pelo Fisco antes da ocorrencia do fato gerador, conforme descricao publica da SEFAZ/SP.
- Disponibilidade de servicos e contingencia devem ser tratadas como parte do fluxo operacional, nao como excecao rara.

## Riscos e lacunas

- Ainda faltam artefatos normativos detalhados dos manuais e documentos do portal nacional para fechar regras finas de validacao.
- Regras estaduais alem de SP ainda nao foram consolidadas nesta etapa.

## Fontes secundarias de apoio tecnico

- `SRC-SEC-001` node-dfe foi usado apenas como referencia complementar para comparar capacidades praticas de implementacao em Node.js, sem substituir a base normativa oficial.