# Capacidades do SDK para NFe

## Escopo

Resumir o recorte de NFe dentro da documentacao do SDK, destacando o que este dominio acrescenta ao catalogo geral e quais lacunas ainda impedem leitura como contrato operacional fechado.

## Papel na hierarquia documental

- Este arquivo detalha a entrada `CAT-NFE-001` do [catalogo geral de capacidades](../capacidades-sdk.md).
- O [indice principal](../index.md) concentra a navegacao entre catalogo, dominio, fontes e planejamento.
- A taxonomia de estado, impacto e leitura de compatibilidade permanece centralizada no catalogo geral para evitar repeticao editorial entre dominios.

## Capacidades requeridas

| ID          | Capacidade                                                                 | Estado no catalogo | Evidencia principal            | Fontes                                             | Habilitacao operacional                                      | Lacuna explicita                                                                            | Impacto e compatibilidade futura                                                                               |
| ----------- | -------------------------------------------------------------------------- | ------------------ | ------------------------------ | -------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| NFE-CAP-001 | Gerar e representar documentos fiscais eletronicos assinaveis digitalmente | partial            | docs/nfe/emissao-nfe.md        | SRC-NFE-001, SRC-NFE-003                           | Certificacao digital e operacao fiscal real quando aplicavel | Ainda faltam regras finas fechadas para assinatura e validacao fim a fim                    | Exige contratos claros para assinatura, serializacao e validacao antes de qualquer promocao a contrato publico |
| NFE-CAP-002 | Suportar autorizacao previa e consultas publicas relacionadas a NF-e       | partial            | docs/nfe/emissao-nfe.md        | SRC-NFE-001, SRC-NFE-004                           | Credenciamento e uso de servicos oficiais quando aplicavel   | Endpoints, respostas de status e fluxos de consulta ainda nao estao estabilizados no pacote | Pode afetar contratos publicos futuros se o repositorio passar a expor integracao operacional                  |
| NFE-CAP-003 | Tratar inutilizacao, disponibilidade e cenarios de contingencia            | partial            | docs/nfe/emissao-nfe.md        | SRC-NFE-001, SRC-NFE-004                           | Uso real depende de operacao autorizada pelo Fisco           | O mapeamento normativo ainda nao cobre todas as variacoes operacionais e excecoes           | Futuras abstrações precisam separar operacao normal e contingencia sem gerar quebra de modelo                  |
| NFE-CAP-004 | Acompanhar notas tecnicas e informes tecnicos recentes                     | partial            | docs/mudancas-recentes.md      | SRC-NFE-001, SRC-NFE-002                           | Nenhuma adicional para leitura documental                    | Nem toda mudanca recente ja foi refletida em backlog tecnico executavel                     | Direciona rotina de atualizacao de schemas, validacoes e compatibilidade                                       |
| NFE-CAP-005 | Diferenciar regras nacionais de complementos estaduais                     | future             | docs/\_meta/source-registry.md | SRC-NFE-001, SRC-NFE-003, SRC-NFE-004, SRC-SEC-001 | Revisao estadual individual e futuras consolidacoes por UF   | Regras estaduais alem de SP continuam sem consolidacao suficiente nesta rodada              | Exige ponto de extensao por UF e nota de migracao caso altere contratos publicados no futuro                   |

## Premissas operacionais

- Certificacao digital segue como pre-requisito normativo central para validade juridica da NF-e.
- O fluxo deve considerar recepcao/autorizacao pelo Fisco antes da ocorrencia do fato gerador, conforme descricao publica da SEFAZ/SP.
- Disponibilidade de servicos e contingencia devem ser tratadas como parte do fluxo operacional, nao como excecao rara.

## Lacunas prioritarias

- Ainda faltam artefatos normativos detalhados dos manuais e documentos do portal nacional para fechar regras finas de validacao.
- Regras estaduais alem de SP ainda nao foram consolidadas nesta etapa.

## Leituras relacionadas

- [Emissao de NFe](./emissao-nfe.md) concentra o fluxo funcional e os requisitos publicos identificados ate aqui.
- [Mudancas recentes](../mudancas-recentes.md) consolida deltas normativos e operacionais que podem alterar backlog ou compatibilidade.
- [Registro de fontes](../_meta/source-registry.md) centraliza a proveniencia primaria e secundaria usada neste dominio.
