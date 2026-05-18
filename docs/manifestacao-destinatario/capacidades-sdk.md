# Capacidades do SDK para Manifestacao do Destinatario

## Escopo

Resumir o recorte de Manifestacao do Destinatario dentro da documentacao do SDK, deixando explicito o limite entre modelagem do dominio e habilitacao operacional externa.

## Papel na hierarquia documental

- Este arquivo detalha a entrada `CAT-MD-001` do [catalogo geral de capacidades](../capacidades-sdk.md).
- O [indice principal](../index.md) organiza a navegacao entre catalogo, dominio, fontes e planejamento.
- A taxonomia de estado, impacto e compatibilidade permanece centralizada no catalogo geral para evitar repeticao editorial entre dossies.

## Capacidades requeridas

| ID | Capacidade | Estado no catalogo | Evidencia principal | Fontes | Habilitacao operacional | Lacuna explicita | Impacto e compatibilidade futura |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MD-CAP-001 | Representar eventos de Manifestacao do Destinatario como conjunto funcional proprio | partial | docs/manifestacao-destinatario/visao-geral.md | SRC-MD-001, SRC-MD-002 | Certificado digital e acesso funcional oficial quando aplicavel | O mapeamento final por evento e por regra operacional ainda nao esta fechado | Requer contratos dedicados por evento e rastreabilidade normativa antes de qualquer leitura como contrato publico |
| MD-CAP-002 | Relacionar uso do recurso a autenticacao e restricoes de acesso oficiais | externally-dependent | docs/manifestacao-destinatario/visao-geral.md | SRC-MD-003 | Certificado digital obrigatorio na superficie oficial observada | A dependencia operacional continua bloqueando verificacao publica completa do fluxo | Evita prometer fluxo publico inexistente ou nao verificado |
| MD-CAP-003 | Diferenciar requisitos confirmados por FAQ publica de detalhes ainda bloqueados | externally-dependent | docs/_meta/source-registry.md | SRC-MD-002, SRC-MD-003 | Acesso publico insuficiente para fechar todos os detalhes operacionais | Ainda faltam fontes publicas complementares para fechar todos os eventos como cobertura sustentada | Exige tratamento de lacunas como backlog tecnico, nao como regra assumida |

## Premissas operacionais

- A funcionalidade especifica acessada diretamente no portal nacional exige certificado digital.
- A pesquisa publica atual confirma a existencia da categoria de eventos, mas ainda nao fecha todos os detalhes operacionais pelo endpoint restrito.

## Lacunas prioritarias

- O detalhamento por evento ainda depende de fontes publicas complementares ou de documentacao oficial acessivel fora da superficie restrita.
- Ainda nao foi consolidado um mapeamento final de pre-requisitos por tipo de evento.

## Leituras relacionadas

- [Visao geral](./visao-geral.md) concentra o panorama funcional publicamente verificavel do dominio.
- [Registro de fontes](../_meta/source-registry.md) centraliza a trilha de auditoria e as restricoes de acesso usadas neste recorte.
- [Catalogo geral de capacidades](../capacidades-sdk.md) concentra a leitura de estado, impacto e compatibilidade usada em todos os dominios.