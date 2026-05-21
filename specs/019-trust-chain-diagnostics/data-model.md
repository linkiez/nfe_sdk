# Data Model: Trust Chain Diagnostics

## Trust Chain Diagnostic Artifact

- **Purpose**: Representa o novo artefato canonico em `docs/roadmap/` que consolida a trilha diagnostica principal do slice `RTM-018`/`RFL-007`.
- **Fields**:
  - `canonicalPath`: caminho do artefato, esperado em `docs/roadmap/diagnostico-trust-chain.md`.
  - `sliceScope`: referencia textual a `RTM-018`, `RFL-007` e a iteracao `5`.
  - `inventoryOwner`: identificacao do inventario canonico inicial mantido pelo artefato.
  - `runbookPath`: caminho do checklist operacional associado.
  - `minimumBoundaryReferences`: conjunto minimo de referencias a `WSDL`, `SSL` e superficies autenticadas necessarias para leitura isolada do artefato canonico.
  - `supportingReferences`: lista curta de anexos de roadmap que sustentam o artefato sem substitui-lo.
- **Validation rules**:
  - O artefato canonico deve existir uma unica vez no roadmap para este slice.
  - Ele nao pode duplicar a funcao de proveniencia de [docs/roadmap/portal-documentos-vigentes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-documentos-vigentes.md) nem a funcao de promocao de [docs/roadmap/criterios-promocao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/criterios-promocao.md).
  - Ele deve citar `RFL-007` e a iteracao `5` explicitamente para manter a rastreabilidade do slice implementado.

## Canonical Diagnostic Inventory Item

- **Purpose**: Modela cada item principal do inventario canonico inicial.
- **Scoped inventory**: `www-chain`, `www1-chain`, `download-surface`, `assinador`, `visualizador-dfe`.
- **Fields**:
  - `itemId`: identificador estavel do item.
  - `displayName`: nome editorial do artefato observado.
  - `observedSource`: origem observada no portal ou anexo de apoio.
  - `observedDate`: data observada ou indicacao de vigencia quando houver.
  - `operationalRole`: papel tecnico principal, como `trust-chain`, `download-hub` ou `interop-helper`.
  - `packageBoundaryClass`: classificacao conservadora, como `tooling`, `documentacao` ou `boundary-externa`.
  - `canonicalArtifactLocation`: referencia para a secao correspondente no artefato canonico.
- **Validation rules**:
  - Cada item do inventario inicial deve existir uma unica vez no artefato canonico.
  - Nenhum item do inventario inicial pode implicar dependencia obrigatoria do runtime.
  - `SVAN`, `SVRS`, `WSDL` e `SSL` nao podem aparecer como `itemId` centrais desta slice.

## Supporting Evidence Reference

- **Purpose**: Registrar anexos e documentos que sustentam a trilha diagnostica sem fazer parte do inventario principal.
- **Fields**:
  - `referencePath`: caminho do anexo ou spec que sustenta a interpretacao.
  - `relationshipType`: `sequenciamento`, `cobertura`, `promocao`, `proveniencia`, `boundary-assinatura` ou `boundary-ambiente`.
  - `scopeNote`: resumo curto do por que a referencia e necessaria.
  - `canonicalOwner`: sempre o artefato canonico desta feature.
- **Validation rules**:
  - A referencia de apoio nunca substitui o artefato canonico.
  - Itens de apoio podem incluir `SVAN`, `SVRS`, `WSDL` e `SSL`, desde que fiquem explicitamente fora do inventario principal.

## Diagnostic Runbook Step

- **Purpose**: Representar cada passo do checklist humano reutilizavel.
- **Fields**:
  - `stepId`: identificador curto do passo.
  - `symptomOrGoal`: sintoma tecnico ou objetivo do integrador.
  - `checkTarget`: item do inventario ou boundary externa a verificar.
  - `expectedObservation`: evidencia observavel esperada.
  - `fallbackNote`: orientacao curta quando o passo nao puder ser concluido automaticamente.
  - `supportingEvidence`: referencias que sustentam o passo.
- **Validation rules**:
  - Todo passo deve ser executavel por leitura humana, sem depender de CLI nova.
  - Todo passo deve deixar claro quando a continuidade depende de infraestrutura externa ou ambiente autenticado.
  - O conjunto de passos deve permanecer coerente com o artefato canonico e nao deslocar toda a boundary minima para fora dele.

## External Dependency Boundary

- **Purpose**: Tornar auditavel o que continua fora do recorte atual.
- **Fields**:
  - `boundaryId`: identificador da dependencia externa, como `ssl-config`, `mutual-auth`, `credential-issuance`, `environment-wsdl`.
  - `dependencyClass`: `infraestrutura`, `ambiente`, `credenciamento`, `ferramenta-externa` ou `runtime-follow-up`.
  - `whyDeferred`: explicacao curta de por que o item nao entra nesta slice.
  - `relatedTheme`: `RTM-003`, `RTM-012` ou outro tema relacionado.
  - `evidenceReference`: anexo ou spec que sustenta o boundary.
- **Validation rules**:
  - Toda boundary deve indicar claramente que a lacuna permanece fora do runtime atual.
  - Nenhuma boundary pode ser descrita como parcialmente resolvida quando depende de slice futura separada.

## Roadmap Alignment Reference

- **Purpose**: Modelar os anexos do roadmap que devem refletir a nova trilha diagnostica.
- **Fields**:
  - `documentPath`: caminho do anexo a alinhar.
  - `alignmentNeed`: descricao curta do que precisa permanecer consistente.
  - `relationshipType`: `sequenciamento`, `cobertura`, `promocao`, `proveniencia` ou `inventario`.
- **Validation rules**:
  - Somente anexos que sustentam diretamente `RTM-018` devem ser alinhados nesta slice.
  - O alinhamento nao deve transformar anexos de apoio em fontes canonicas concorrentes.

## Current Support Map

- [docs/roadmap/proximas-iteracoes-recomendadas.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/proximas-iteracoes-recomendadas.md): `relationshipType = sequenciamento`
- [docs/roadmap/rtm-cobertura-oficial.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/rtm-cobertura-oficial.md): `relationshipType = cobertura`
- [docs/roadmap/criterios-promocao.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/criterios-promocao.md): `relationshipType = promocao`
- [docs/roadmap/portal-documentos-vigentes.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-documentos-vigentes.md): `relationshipType = proveniencia`
- [docs/roadmap/portal-nacional-inventario.md](/home/linkiez/Projetos/nfe_sdk/docs/roadmap/portal-nacional-inventario.md): `relationshipType = inventario`
- [specs/014-expand-signing-coverage/spec.md](/home/linkiez/Projetos/nfe_sdk/specs/014-expand-signing-coverage/spec.md): `relationshipType = boundary-assinatura`
