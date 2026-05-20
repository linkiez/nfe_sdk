# Data Model: External Table Policy

## External Table Group

- **Purpose**: Representa cada familia de dados externos governada por `RTM-010` dentro da politica executavel canonica.
- **Scoped inventory**: `cbs-ibs`, `payment-methods`, `ncm-utrib`, `fcp`, `municipios`, `anp`, `cfop`.
- **Fields**:
  - `groupId`: identificador estavel do grupo, como `cbs-ibs`, `payment-methods`, `ncm-utrib`, `fcp`, `municipios`, `anp` ou `cfop`.
  - `scopeClass`: natureza dominante do grupo, como `dado-auxiliar`, `validacao`, `watchlist` ou `promocao-excepcional-runtime`.
  - `primarySource`: informe tecnico, tabela oficial ou familia de documentos que governa o grupo.
  - `canonicalPolicyLocation`: referencia para a secao correspondente em [docs/roadmap/politica-tabelas-externas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/politica-tabelas-externas.md).
- **Validation rules**:
  - Todo grupo priorizado por `RTM-010` deve existir uma unica vez na politica canonica.
  - O grupo nao pode ser classificado como `runtime` por padrao sem decisao de promocao separada.
  - O inventario desta slice nao pode ser ampliado sem atualizar explicitamente `spec.md`, `data-model.md` e `tasks.md`.

## Baseline Table Record

- **Purpose**: Registrar a baseline vigente observada de um grupo e distinguir publicacao, vigencia e historico minimo.
- **Fields**:
  - `groupId`: ponte para o grupo governado.
  - `observedVersion`: versao ou edicao observada no portal ou informe.
  - `observedPublicationDate`: data em que a publicacao foi observada.
  - `effectiveDate`: data de vigencia efetiva quando a origem a explicitar.
  - `status`: `vigente`, `coexistente`, `historico` ou `ambigua`.
  - `provenanceReference`: ligacao com [docs/roadmap/portal-documentos-vigentes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-documentos-vigentes.md) ou documento oficial resumido ali.
- **Validation rules**:
  - Publicacao observada e vigencia efetiva precisam ficar separadas quando nao coincidirem.
  - Ambiguidade de revogacao ou coexistencia deve ser preservada como evidencia, nunca inferida silenciosamente.

## Review Cadence Rule

- **Purpose**: Definir quando o mantenedor deve revisitar um grupo apos nova publicacao, republicacao ou mudanca de baseline.
- **Fields**:
  - `groupId`: grupo afetado.
  - `minimumCadence`: regra textual de revisao, como `a cada nova IT`, `por versao vigente`, `a cada atualizacao oficial`.
  - `triggerType`: `nova-versao`, `republicacao`, `data-vigencia`, `delta-uf` ou `watchlist`.
  - `followUpClass`: resultado esperado do follow-up, como `tooling`, `documentacao` ou `avaliar-slice-runtime`.
- **Validation rules**:
  - Cada grupo deve ter pelo menos uma cadence minima explicita.
  - Grupos com forte delta por `UF` devem carregar trigger ou nota especifica de reconciliacao adicional.

## Promotion Decision

- **Purpose**: Tornar auditavel a decisao de manter um grupo em `tooling`, deixa-lo em watchlist ou encaminha-lo para futura slice de runtime.
- **Fields**:
  - `groupId`: grupo avaliado.
  - `decisionClass`: `tooling-default`, `documentacao`, `watchlist` ou `futura-slice-runtime`.
  - `decisionReason`: justificativa resumida baseada na politica.
  - `runtimeBlockers`: lista curta de bloqueios que impedem promocao imediata.
  - `evidenceReference`: referencia para a politica canonica e para o anexo de criterios de promocao.
- **Validation rules**:
  - Toda decisao deve ser coerente com [docs/roadmap/criterios-promocao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/criterios-promocao.md).
  - Nenhuma decisao pode criar promessa de API publica sem slice propria posterior.

## Supporting Roadmap Reference

- **Purpose**: Modelar os anexos que precisam permanecer alinhados com a politica canonica sem duplicar seu conteudo.
- **Fields**:
  - `documentPath`: caminho do anexo de apoio.
  - `relationshipType`: `sequenciamento`, `cobertura`, `proveniencia` ou `criterio-promocao`.
  - `alignmentNeed`: descricao curta do que precisa permanecer consistente.
  - `canonicalOwner`: sempre [docs/roadmap/politica-tabelas-externas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/politica-tabelas-externas.md).
- **Validation rules**:
  - O documento de apoio nunca substitui a politica canonica.
  - Atualizacoes em anexos de apoio so devem ocorrer quando melhorarem rastreabilidade, nao para criar nova baseline paralela.

## Current Support Map

- [docs/roadmap/proximas-iteracoes-recomendadas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md): `relationshipType = sequenciamento`
- [docs/roadmap/rtm-cobertura-oficial.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/rtm-cobertura-oficial.md): `relationshipType = cobertura`
- [docs/roadmap/portal-documentos-vigentes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-documentos-vigentes.md): `relationshipType = proveniencia`
- [docs/roadmap/criterios-promocao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/criterios-promocao.md): `relationshipType = criterio-promocao`
