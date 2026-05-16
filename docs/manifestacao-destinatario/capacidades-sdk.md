# Capacidades do SDK para Manifestacao do Destinatario

## Escopo

Consolidar eventos, pre-requisitos e dependencias documentais que o SDK precisara suportar para Manifestacao do Destinatario com base no que esta publicamente verificavel.

## Capacidades requeridas

| ID | Capacidade | Status | Fontes | Impacto futuro no SDK |
| --- | --- | --- | --- | --- |
| MD-CAP-001 | Representar eventos de Manifestacao do Destinatario como conjunto funcional proprio | confirmed-primary | SRC-MD-001, SRC-MD-002 | Requer contratos dedicados por evento e rastreabilidade normativa |
| MD-CAP-002 | Relacionar uso do recurso a autenticacao e restricoes de acesso oficiais | confirmed-primary | SRC-MD-003 | Evita prometer fluxo publico inexistente ou nao verificado |
| MD-CAP-003 | Diferenciar requisitos confirmados por FAQ publica de detalhes ainda bloqueados | confirmed-primary | SRC-MD-002, SRC-MD-003 | Exige tratamento de lacunas como backlog tecnico, nao como regra assumida |

## Pre-requisitos e restricoes

- A funcionalidade especifica acessada diretamente no portal nacional exige certificado digital.
- A pesquisa publica atual confirma a existencia da categoria de eventos, mas ainda nao fecha todos os detalhes operacionais pelo endpoint restrito.

## Riscos e lacunas

- O detalhamento por evento ainda depende de fontes publicas complementares ou de documentacao oficial acessivel fora da superficie restrita.
- Ainda nao foi consolidado um mapeamento final de pre-requisitos por tipo de evento.

## Fontes secundarias de apoio tecnico

- Nenhuma fonte secundaria foi promovida neste dossie ate o momento.
- O repositorio `/home/linkiez/Projetos/node-dfe` foi verificado em 2026-05-16 como possivel apoio tecnico, mas nao apresentou evidencia local de cobertura para Manifestacao do Destinatario, entao nao foi adotado como referencia para este dominio.