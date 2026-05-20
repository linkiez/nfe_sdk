# Research: External Table Policy

## Decision 1: Keep the canonical record in the roadmap policy document

- **Decision**: Manter [docs/roadmap/politica-tabelas-externas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/politica-tabelas-externas.md) como unico artefato canonico para baseline, cadence, classificacao e regra de promocao desta feature.
- **Rationale**: A propria spec fixa que a governanca de `RTM-010` deve atualizar um anexo de roadmap existente, e nao abrir um segundo registro concorrente dentro de `specs/018-external-table-policy/`.
- **Alternatives considered**:
  - Duplicar a politica inteira dentro da spec: rejeitado porque criaria drift entre fonte canonica e evidencia.
  - Mover a politica para `src/` ou contrato publico: rejeitado porque a slice e documental/tooling e nao de runtime.

## Decision 2: Treat this slice as documentation and tooling governance for `RTM-010`

- **Decision**: Planejar a feature como governanca documental e tooling-first para `RTM-010`, sem criar comportamento novo do pacote.
- **Rationale**: O objetivo da iteracao e transformar tabelas externas em politica executavel de manutencao, nao introduzir dependencia obrigatoria de runtime ou nova API publica.
- **Alternatives considered**:
  - Promover tabelas externas diretamente para runtime: rejeitado porque a spec exige promocao conservadora e slice futura dedicada.
  - Limitar o slice a observacoes editoriais vagas: rejeitado porque a feature precisa deixar cadence, baseline e classificacao auditaveis.

## Decision 3: Update the policy doc first, then align supporting roadmap references

- **Decision**: Estruturar a execucao em ordem explicita: primeiro a politica canonica, depois referencias de apoio como [docs/roadmap/proximas-iteracoes-recomendadas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md), [docs/roadmap/rtm-cobertura-oficial.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/rtm-cobertura-oficial.md) e [docs/roadmap/portal-documentos-vigentes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-documentos-vigentes.md) quando precisarem refletir a nova baseline governada.
- **Rationale**: As referencias adjacentes existem para sustentar a politica, nao para substitui-la. A ordem evita divergencia entre resumo e fonte principal.
- **Alternatives considered**:
  - Atualizar primeiro todos os anexos adjacentes: rejeitado porque aumenta o risco de drift temporario.
  - Atualizar apenas a politica sem alinhar referencias: rejeitado porque deixaria `RTM-010` parcialmente incoerente no roadmap.

## Decision 4: Keep validation narrow and document-focused

- **Decision**: Usar validacao focada em formatacao, links e completude do pacote de planejamento, com `prettier`, `docs:links` e rerun de `setup-tasks.sh` sob `SPECIFY_FEATURE=018-external-table-policy`.
- **Rationale**: A compatibilidade da feature esta em `CC-005`, que pede consistencia documental da politica canonica, rastreabilidade de proveniencia e verificacao de formatacao dos artefatos alterados. Gates amplos do pacote so fariam sentido se houvesse alteracao real de runtime.
- **Alternatives considered**:
  - Rodar sempre o gate completo do pacote: rejeitado porque e desproporcional ao slice.
  - Validar apenas por inspeção manual: rejeitado porque nao garante que a geracao de tasks foi realmente destravada.

## Decision 5: Preserve roadmap artifacts in the spec as supporting evidence only

- **Decision**: Tratar `plan.md`, `research.md`, `data-model.md` e `quickstart.md` desta spec como apoio operacional e trilha de decisao, nao como destino canonico da politica.
- **Rationale**: Isso preserva `FR-010A` e deixa claro para a proxima etapa de tasks que a implementacao deve modificar primeiro o roadmap e usar a spec apenas como evidencia de por que e como faze-lo.
- **Alternatives considered**:
  - Centralizar tudo na spec e deixar o roadmap para depois: rejeitado porque contradiz o recorte aprovado.
  - Dispensar artefatos locais da spec: rejeitado porque o fluxo normal do Spec Kit precisa deles para task generation e rastreabilidade.

## Current Gap Snapshot

- [docs/roadmap/politica-tabelas-externas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/politica-tabelas-externas.md) ja estabelece objetivo, escopo, classificacao e regras gerais, mas ainda precisa sustentar de forma mais explicita a baseline observada por grupo, a separacao entre publicacao e vigencia quando houver, e a trilha historica/coexistencia exigidas pela spec.
- [docs/roadmap/proximas-iteracoes-recomendadas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md) e [docs/roadmap/rtm-cobertura-oficial.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/rtm-cobertura-oficial.md) ja posicionam `RTM-010` como `tooling`, o que reduz risco de drift para runtime nesta iteracao.
- [docs/roadmap/portal-documentos-vigentes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-documentos-vigentes.md) ja concentra as baselines observadas mais sensiveis e deve permanecer como fonte de apoio para datas, versoes e proveniencia.

## Implementation Outcome Expected by Tasks

- Atualizar o anexo canonico de politica para que cada grupo priorizado de `RTM-010` tenha baseline observada, cadence minima, criterio de vigencia e regra de classificacao auditaveis.
- Alinhar referencias de roadmap apenas onde isso melhorar a rastreabilidade ou evitar conflito com a politica canonica.
- Manter qualquer resumo local em `specs/018-external-table-policy/` como evidencia de apoio, sem introduzir contrato externo ou sincronizacao automatica nao especificada.

## Scoped Source Mapping

| Group ID          | Fontes de apoio auditadas                                                                                                                                                                                                     | Observacao de suporte                                                  |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `cbs-ibs`         | `IT 2026.002 v1.00`, `IT 2025.002 v1.50`, tabela de aliquotas `CBS`, indice de biocombustivel `IBS/CBS`, classificacao tributaria `IBS/CBS` em [portal-documentos-vigentes](../../docs/roadmap/portal-documentos-vigentes.md) | Baseline composta; datas individuais precisam permanecer rastreaveis.  |
| `payment-methods` | `IT 2026.001 v1.00`, `IT 2024.002 v1.11` e tabela vigente de meios de pagamento em [portal-documentos-vigentes](../../docs/roadmap/portal-documentos-vigentes.md)                                                             | A versao mais recente vira baseline; a anterior permanece historica.   |
| `ncm-utrib`       | `IT 2024.001 v2.30` e tabela `NCM/uTrib` com vigencia `01/02/2026` em [portal-documentos-vigentes](../../docs/roadmap/portal-documentos-vigentes.md)                                                                          | Exige separar publicacao observada e vigencia efetiva.                 |
| `fcp`             | `IT 2023.004 v1.03` e tabela `FCP` vigente em [portal-documentos-vigentes](../../docs/roadmap/portal-documentos-vigentes.md)                                                                                                  | Grupo continua bloqueado por delta forte por `UF`.                     |
| `municipios`      | `IT 2025.001 v1.00` e tabela nacional de municipios em [portal-documentos-vigentes](../../docs/roadmap/portal-documentos-vigentes.md)                                                                                         | Grupo continua bloqueado por delta forte por `UF`.                     |
| `anp`             | `IT 2023.001 v1.10` e tabela `ANP` vigente em [portal-documentos-vigentes](../../docs/roadmap/portal-documentos-vigentes.md)                                                                                                  | Dado auxiliar setorial, mantido em `tooling`.                          |
| `cfop`            | `IT 2023.002 v1.00` e correlatas em `Diversos`, resumidas em [portal-documentos-vigentes](../../docs/roadmap/portal-documentos-vigentes.md)                                                                                   | Correcao oficial deve substituir baseline sem criar runtime implicito. |
