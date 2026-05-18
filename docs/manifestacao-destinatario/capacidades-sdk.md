# Capacidades do SDK para Manifestacao do Destinatario

## Escopo

Consolidar eventos, pre-requisitos e dependencias documentais que o SDK precisara suportar para Manifestacao do Destinatario com base no que esta publicamente verificavel.

## Leitura no catalogo principal

- Este dossie sustenta a entrada `CAT-MD-001` do catalogo geral em `docs/capacidades-sdk.md`.
- A leitura correta deste dominio separa capacidade do SDK de habilitacao operacional, porque a consulta e o uso real do fluxo dependem de certificado digital e de superficies oficiais restritas.
- O fato de o dominio aparecer aqui nao significa que todos os detalhes operacionais ja estejam fechados como contrato publico do pacote.

## Taxonomia aplicada neste dossie

- `partial` indica capacidade funcional reconhecivel no ecossistema e no repositorio, mas ainda sem fechamento operacional completo.
- `externally-dependent` indica que o SDK pode representar ou documentar o fluxo, porem o uso real depende de habilitacao externa observada nas fontes oficiais.
- O impacto descrito permanece documental nesta fase, mas protege o projeto de prometer indevidamente um fluxo oficial irrestrito.

## Capacidades requeridas

| ID | Capacidade | Estado no catalogo | Evidencia principal | Fontes | Habilitacao operacional | Lacuna explicita | Impacto e compatibilidade futura |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MD-CAP-001 | Representar eventos de Manifestacao do Destinatario como conjunto funcional proprio | partial | docs/manifestacao-destinatario/visao-geral.md | SRC-MD-001, SRC-MD-002 | Certificado digital e acesso funcional oficial quando aplicavel | O mapeamento final por evento e por regra operacional ainda nao esta fechado | Requer contratos dedicados por evento e rastreabilidade normativa antes de qualquer leitura como contrato publico |
| MD-CAP-002 | Relacionar uso do recurso a autenticacao e restricoes de acesso oficiais | externally-dependent | docs/manifestacao-destinatario/visao-geral.md | SRC-MD-003 | Certificado digital obrigatorio na superficie oficial observada | A dependencia operacional continua bloqueando verificacao publica completa do fluxo | Evita prometer fluxo publico inexistente ou nao verificado |
| MD-CAP-003 | Diferenciar requisitos confirmados por FAQ publica de detalhes ainda bloqueados | externally-dependent | docs/_meta/source-registry.md | SRC-MD-002, SRC-MD-003 | Acesso publico insuficiente para fechar todos os detalhes operacionais | Ainda faltam fontes publicas complementares para fechar todos os eventos como cobertura sustentada | Exige tratamento de lacunas como backlog tecnico, nao como regra assumida |

## Pre-requisitos e restricoes

- A funcionalidade especifica acessada diretamente no portal nacional exige certificado digital.
- A pesquisa publica atual confirma a existencia da categoria de eventos, mas ainda nao fecha todos os detalhes operacionais pelo endpoint restrito.

## Riscos e lacunas

- O detalhamento por evento ainda depende de fontes publicas complementares ou de documentacao oficial acessivel fora da superficie restrita.
- Ainda nao foi consolidado um mapeamento final de pre-requisitos por tipo de evento.

## Leitura de compatibilidade

- Este dossie nao cria capacidade operacional nova; ele delimita o que o projeto pode afirmar sem violar a separacao entre SDK e habilitacao externa.
- Itens `externally-dependent` devem permanecer fora da leitura de contrato publico estavel do pacote.
- Qualquer futura promocao destas capacidades exigira evidencia adicional, nota de migracao e revisao explicita de impacto contratual.

## Fontes secundarias de apoio tecnico

- Nenhuma fonte secundaria foi promovida neste dossie ate o momento.
- O repositorio `/home/linkiez/Projetos/node-dfe` foi verificado em 2026-05-16 como possivel apoio tecnico, mas nao apresentou evidencia local de cobertura para Manifestacao do Destinatario, entao nao foi adotado como referencia para este dominio.