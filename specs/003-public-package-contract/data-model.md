# Data Model: Fundacao do Contrato Publico do Pacote

## PublicPackageContract

- **Purpose**: Representa a superficie publica minima que o pacote promete manter estavel nesta fase.
- **Fields**:
  - `normativeSource`: Artefato normativo que define o contrato (`package.json`/exports).
  - `rootEntrypoint`: Caminho e semantica do import raiz publicado.
  - `documentedSurface`: Lista do que e explicitamente documentado como parte do contrato minimo.
  - `excludedSurface`: Lista de subpaths e artefatos gerados mantidos fora do contrato publico.
  - `compatibilityNotes`: Observacoes sobre mudancas permitidas e proibidas no contrato.
- **Relationships**:
  - E sustentado por um `DistributionArtifactSet`.
  - E descrito ao usuario por `DocumentationEvidence`.
  - E auditado por `ManifestCoverageGap`.

## DistributionArtifactSet

- **Purpose**: Descreve os artefatos realmente publicados e validados no empacotamento desta fase.
- **Fields**:
  - `tarballName`: Nome do pacote gerado por `npm pack`.
  - `publishedFiles`: Arquivos incluidos no pacote publicado.
  - `rootImportConsumable`: Indicador de que o import raiz pode ser carregado a partir do tarball.
  - `buildCommands`: Comandos minimos usados para gerar e validar a distribuicao.
- **Relationships**:
  - Implementa o `PublicPackageContract`.
  - E verificado por `SmokeValidationProbe`.

## SmokeValidationProbe

- **Purpose**: Representa a verificacao minima de consumo do pacote empacotado.
- **Fields**:
  - `inputArtifact`: Tarball gerado para a verificacao.
  - `consumedEntrypoint`: Import raiz usado no teste.
  - `expectedOutcome`: Criterio minimo de sucesso do smoke validation.
  - `environment`: Ambiente onde o teste e executado.
- **Relationships**:
  - Valida um `DistributionArtifactSet`.

## ManifestCoverageGap

- **Purpose**: Registra divergencias ou lacunas encontradas entre o manifesto interno e a superficie que pode ser promovida ao contrato publico.
- **Fields**:
  - `manifestReference`: Referencia ao ponto auditado no manifesto.
  - `gapType`: `collision`, `unpublished-family`, `unstable-surface` ou `needs-review`.
  - `description`: Descricao da lacuna.
  - `publicContractImpact`: Explica se a lacuna bloqueia promocao ao contrato ou fica apenas como backlog.
- **Relationships**:
  - E usado como evidência de limites do `PublicPackageContract`.

## DocumentationEvidence

- **Purpose**: Representa os artefatos humanos que explicam e auditam o contrato definido normativamente pelo pacote publicado.
- **Fields**:
  - `path`: Caminho do documento de apoio.
  - `role`: `readme`, `spec`, `plan` ou `audit-note`.
  - `supports`: Parte do contrato que o documento explica.
- **Relationships**:
  - Apoia um `PublicPackageContract`, mas nao o define normativamente.