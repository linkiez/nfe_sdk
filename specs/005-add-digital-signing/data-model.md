# Data Model: Add Digital Signing

## RootSigningFacade

- **Purpose**: Representa a ampliacao additive da superficie publica do pacote para preparar contexto de assinatura e assinar XML de `NFe`.
- **Fields**:
  - `publishedExports`: nomes das funcoes novas expostas no import raiz.
  - `supportedDocuments`: documentos assinaveis nesta fase.
  - `inputBoundary`: define a operacao publica como XML-in/XML-out.
  - `excludedCapabilities`: lista o que continua fora do escopo desta entrega.
- **Relationships**:
  - Cria `SigningContext` a partir de `A1CertificateSource`.
  - Executa assinatura sobre `UnsignedNFeXml`.

## A1CertificateSource

- **Purpose**: Representa a origem do certificado A1 aceita pelo contrato publico.
- **Fields**:
  - `sourceType`: distingue `file-path` de `in-memory-content`.
  - `certificatePayload`: caminho `.pfx` ou bytes/conteudo em memoria.
  - `passphrase`: credencial usada para abrir o material criptografico.
- **Relationships**:
  - Alimenta a criacao de `SigningContext`.
  - Gera falha explicita quando a origem for invalida ou incompatível.

## SigningContext

- **Purpose**: Representa a capacidade reutilizavel derivada do certificado A1, pronta para assinar `NFe` suportada.
- **Fields**:
  - `certificateIdentity`: identidade minima extraida do certificado para rastreabilidade.
  - `privateKeyHandle`: capacidade interna de assinatura sem expor material sensivel no contrato publico.
  - `supportedAlgorithms`: perfil de assinatura suportado nesta fase.
  - `sourceMetadata`: metadados minimos sobre a origem do certificado.
- **Relationships**:
  - E criado pela `RootSigningFacade`.
  - E consumido para produzir `SignedNFeXml`.

## UnsignedNFeXml

- **Purpose**: Representa o XML de `NFe` ja serializado pela feature 004 e ainda nao assinado.
- **Fields**:
  - `xml`: conteudo XML da NF-e.
  - `documentId`: identificador assinavel do documento, quando presente.
  - `version`: versao documental do XML de origem.
- **Relationships**:
  - E a entrada da operacao publica de assinatura.
  - E preservado intacto quando a assinatura falha.

## SignedNFeXml

- **Purpose**: Representa o XML da NF-e apos a insercao de assinatura digital valida.
- **Fields**:
  - `xml`: conteudo XML assinado.
  - `signatureReference`: referencia ao identificador efetivamente assinado.
  - `verificationStatus`: resultado da verificacao local obrigatoria.
- **Relationships**:
  - E produzido a partir de `UnsignedNFeXml` e `SigningContext`.
  - E validado por `SignatureVerificationReport` e `SigningRegressionEvidence`.

## SignatureVerificationReport

- **Purpose**: Representa o resultado interno da verificacao local da assinatura gerada.
- **Fields**:
  - `isValid`: indica se a assinatura foi validada localmente.
  - `failureReason`: motivo da falha, quando houver.
  - `verifiedReference`: referencia validada pela verificacao local.
- **Relationships**:
  - Valida `SignedNFeXml` antes do retorno ao consumidor.
  - Alimenta falhas explicitas do fluxo de assinatura.

## SigningCoverageBoundary

- **Purpose**: Representa os limites formais da cobertura desta feature.
- **Fields**:
  - `includedScope`: `NFe` assinada com certificado A1.
  - `excludedScope`: `enviNFe` assinado, eventos, NFC-e, SOAP e autorizacao.
  - `deferredCapabilities`: calculos auxiliares e extensoes adiadas, incluindo derivacao completa da chave de acesso, DV e `hashCSRT`.
- **Relationships**:
  - E refletido no contrato publico e na documentacao.
  - Dialoga com o backlog das proximas fases do roadmap.

## SigningRegressionEvidence

- **Purpose**: Representa os cenarios reutilizaveis de sucesso e falha para regressao do slice de assinatura.
- **Fields**:
  - `scenarioId`: identificador do cenario.
  - `unsignedFixture`: fixture de XML nao assinado.
  - `signedExpectation`: evidencia estrutural do XML assinado esperado.
  - `verificationExpectation`: resultado esperado da verificacao local.
- **Relationships**:
  - Cobre `RootSigningFacade`, `SigningContext` e `SignedNFeXml`.
  - Sustenta testes de contrato, integracao e smoke do pacote.
