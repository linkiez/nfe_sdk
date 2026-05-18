# Capacidades do SDK para Manifestacao do Destinatario

## Escopo

Resumir o recorte de Manifestacao do Destinatario dentro da documentacao do SDK, deixando explicito o limite entre modelagem do dominio e habilitacao operacional externa.

## Papel na hierarquia documental

- Este arquivo detalha a entrada `CAT-MD-001` do [catalogo geral de capacidades](../capacidades-sdk.md).
- O [indice principal](../index.md) organiza a navegacao entre catalogo, dominio, fontes e planejamento.
- A taxonomia de estado, impacto e compatibilidade permanece centralizada no catalogo geral para evitar repeticao editorial entre dossies.

## Capacidades requeridas

| ID         | Capacidade                                                                                                                     | Estado no catalogo   | Evidencia principal                                                  | Fontes                                         | Habilitacao operacional                                                                               | Lacuna explicita                                                                                                          | Impacto e compatibilidade futura                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------- | -------------------------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| MD-CAP-001 | Expor o primeiro slice publico de Manifestacao do Destinatario com distribuicao via `distNSU` e os quatro eventos basicos      | partial              | specs/008-recipient-dfe-mvp/contracts/public-recipient-dfe-facade.md | SRC-MD-001, SRC-MD-002, SRC-MD-004, SRC-MD-005 | Certificado digital, habilitacao do ator e disponibilidade nacional continuam obrigatorios            | O recorte ainda nao cobre producao, `consNSU`, `consChNFe`, eventos genericos nem download automatico apos a manifestacao | Mantem a evolucao additive do contrato root sem promover cobertura total do dominio          |
| MD-CAP-002 | Relacionar uso do recurso a autenticacao, habilitacao externa e restricoes oficiais                                            | externally-dependent | docs/manifestacao-destinatario/visao-geral.md                        | SRC-MD-003, SRC-MD-004                         | Certificado digital obrigatorio na superficie oficial observada e no fluxo operacional do web service | Credenciamento e disponibilidade do ambiente continuam fora do SDK                                                        | Evita prometer um fluxo publico irrestrito ou abstrair dependencias externas nao controladas |
| MD-CAP-003 | Diferenciar requisitos normativos confirmados para distribuicao, eventos e limites operacionais do que ainda ficou fora do MVP | partial              | docs/\_meta/source-registry.md                                       | SRC-MD-002, SRC-MD-004, SRC-MD-005, SRC-MD-006 | Acesso publico suficiente para fechar o MVP homologado, mas nao o dominio completo                    | A matriz completa de expansao por ambiente e por modo de consulta permanece como backlog                                  | Permite ampliar o slice por semver additive com rastreabilidade normativa                    |

## Premissas operacionais

- A funcionalidade especifica acessada diretamente no portal nacional exige certificado digital.
- O MVP publicado cobre `distNSU`, atores `cpf` e `cnpj`, e os eventos `210200`, `210210`, `210220` e `210240` em `homologation`.
- O download posterior da NF-e continua separado da manifestacao, mesmo quando o resumo ja foi distribuido ao destinatario.

## Lacunas prioritarias

- Abertura de producao, `consNSU`, `consChNFe`, EPEC e eventos fora do quarteto basico continua fora do slice.
- Credenciamento, disponibilidade nacional e politicas de retry continuam como dependencias operacionais externas ao SDK.

## Leituras relacionadas

- [Visao geral](./visao-geral.md) concentra o panorama funcional publicamente verificavel do dominio.
- [Contrato publico do slice recipient](../../specs/008-recipient-dfe-mvp/contracts/public-recipient-dfe-facade.md) descreve a superficie publicada no import raiz.
- [Registro de fontes](../_meta/source-registry.md) centraliza a trilha de auditoria e as restricoes de acesso usadas neste recorte.
- [Catalogo geral de capacidades](../capacidades-sdk.md) concentra a leitura de estado, impacto e compatibilidade usada em todos os dominios.
