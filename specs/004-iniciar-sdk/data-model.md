# Data Model: Inicio do Desenvolvimento Funcional do SDK

## RootFunctionalFacade

- **Purpose**: Representa a superficie publica inicial da feature no import raiz do pacote.
- **Fields**:
  - `publishedExports`: Lista de funcoes e tipos expostos no root import nesta fase.
  - `retainedExports`: Exportacoes anteriores que permanecem validas, incluindo `publicPackageContract`.
  - `scope`: Lista explicita dos documentos suportados nesta fase.
  - `excludedCapabilities`: Lista das capacidades fora do escopo funcional inicial.
- **Relationships**:
  - Expõe `CanonicalNFeInput` e `CanonicalEnviNFeInput` como contratos de entrada.
  - Orquestra `DeterministicXmlSerializer` e `InitialSharedIdentifierSet`.

## CanonicalNFeInput

- **Purpose**: Define a entrada canonica minima para montagem de uma `NFe` sem depender diretamente da arvore gerada.
- **Fields**:
  - `environment`: Ambiente fiscal normalizado da operacao.
  - `version`: Versao documental normalizada para o recorte suportado.
  - `documentId`: Identificador inicial do documento no recorte desta fase.
  - `payload`: Dados essenciais do documento emitente suportado pela primeira slice.
- **Relationships**:
  - E usada para produzir um `CanonicalNFeDocument`.
  - Reutiliza regras do `InitialSharedIdentifierSet`.

## CanonicalNFeDocument

- **Purpose**: Representa o documento `NFe` apos montagem funcional, pronto para serializacao.
- **Fields**:
  - `metadata`: Campos compartilhados normalizados e dados de proveniencia.
  - `payload`: Estrutura livre e pequena mantida nesta fase para futuras expansoes do documento.
  - `deferredGaps`: Lacunas explicitamente adiadas que ainda limitam a slice inicial.
  - `schemaFamily`: Referencia declarada para a familia `PL_010c_NT2022_002v1.30`.
- **Relationships**:
  - Pode ser encapsulado por um `CanonicalEnviNFeDocument`.
  - E consumido por `DeterministicXmlSerializer`.

## CanonicalEnviNFeInput

- **Purpose**: Define a entrada canonica minima para montagem de `enviNFe` no recorte inicial.
- **Fields**:
  - `environment`: Ambiente fiscal normalizado.
  - `version`: Versao do lote e do leiaute suportado.
  - `batchId`: Identificador inicial do lote.
  - `documents`: Colecao de `CanonicalNFeInput` ou `CanonicalNFeDocument` aptos ao recorte suportado.
- **Relationships**:
  - Reutiliza `InitialSharedIdentifierSet`.
  - Produz um `CanonicalEnviNFeDocument`.

## CanonicalEnviNFeDocument

- **Purpose**: Representa o lote `enviNFe` montado e pronto para serializacao deterministica.
- **Fields**:
  - `metadata`: Ambiente, versao e identificadores de lote/documento normalizados.
  - `documents`: Lista de documentos `NFe` encapsulados pelo lote.
  - `deferredGaps`: Lacunas explicitamente adiadas que ainda limitam a slice inicial.
  - `serializationHints`: Informacoes necessarias para ordem e forma deterministica de saida.
- **Relationships**:
  - Contem um ou mais `CanonicalNFeDocument`.
  - E serializado por `DeterministicXmlSerializer`.

## InitialSharedIdentifierSet

- **Purpose**: Representa as regras compartilhadas priorizadas nesta fase para ambiente, versao e identificadores iniciais.
- **Fields**:
  - `environmentRule`: Regra de normalizacao para ambiente.
  - `versionRule`: Regra de normalizacao para versao.
  - `documentIdRule`: Regra de normalizacao para `Id` do documento.
  - `batchIdRule`: Regra de normalizacao para identificadores de lote e correlatos de `enviNFe`.
- **Relationships**:
  - E aplicada a `CanonicalNFeInput` e `CanonicalEnviNFeInput`.
  - Alimenta `GapRegister` quando uma regra ficar incompleta ou adiada.

## DeterministicXmlSerializer

- **Purpose**: Define o componente responsavel por transformar documentos canonicos em XML estruturalmente previsivel.
- **Fields**:
  - `supportedDocuments`: Tipos de documento aceitos nesta fase.
  - `orderingRules`: Regras de ordem e emissao estrutural aplicadas ao XML.
  - `outputEncoding`: Regras de encoding e declaracao XML usadas pelo serializer.
- **Relationships**:
  - Consome `CanonicalNFeDocument` e `CanonicalEnviNFeDocument`.
  - E verificado por `SerializationFixture`.

## SerializationFixture

- **Purpose**: Representa a evidencia de regressao estrutural usada para comparar XMLs gerados nesta fase.
- **Fields**:
  - `scenarioId`: Identificador do cenario coberto.
  - `inputReference`: Referencia ao input canonico usado no teste.
  - `expectedXml`: Fixture XML ou evidencia estrutural equivalente.
  - `comparisonMode`: Modo de comparacao estrutural aplicado no teste.
- **Relationships**:
  - Valida `DeterministicXmlSerializer`.
  - Cobre cenarios da `RootFunctionalFacade`.

## GapRegister

- **Purpose**: Registra lacunas conhecidas entre a camada funcional inicial, os schemas e as fases posteriores do roadmap.
- **Fields**:
  - `gapType`: Tipo da lacuna, como `xsd-validation-deferred`, `unsupported-document` ou `derived-identifier-deferred`.
  - `description`: Descricao objetiva da lacuna.
  - `impact`: Impacto da lacuna na cobertura declarada da feature.
  - `followUpPhase`: Fase futura em que a lacuna deve ser tratada.
- **Relationships**:
  - Referencia `RootFunctionalFacade` para limites de contrato.
  - Referencia `InitialSharedIdentifierSet` quando a lacuna envolver normalizacao adiada.
