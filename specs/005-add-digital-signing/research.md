# Research: Add Digital Signing

## Decision 1: Introduzir a assinatura como ampliacao aditiva no import raiz

- **Decision**: A primeira entrega de assinatura digital entrara no import raiz do pacote como duas operacoes publicas additive: uma para preparar o contexto reutilizavel de assinatura e outra para assinar o XML de `NFe`.
- **Rationale**: Isso preserva o contrato pequeno da fase 004, evita promover subpaths como superficie publica principal e encaixa o requisito de contexto reutilizavel sem misturar preparacao criptografica com a operacao de assinatura.
- **Alternatives considered**:
  - Expor uma funcao one-shot que recebe certificado a cada assinatura: rejeitado porque reduz reuso e aumenta custo operacional por chamada.
  - Expor subpaths dedicados para a camada de assinatura: rejeitado porque amplia cedo demais o contrato publicado.

## Decision 2: Manter a fronteira da assinatura em XML-in/XML-out

- **Decision**: A operacao publica de assinatura recebera o XML nao assinado da `NFe` e devolvera o XML correspondente ja assinado.
- **Rationale**: A feature 004 ja estabilizou a camada canonica e a serializacao deterministica; manter a assinatura na fronteira de XML evita reintroduzir acoplamento entre assinatura e montagem do documento.
- **Alternatives considered**:
  - Assinar `CanonicalNFeDocument` diretamente: rejeitado porque mistura novamente responsabilidades da camada canonica com a camada de assinatura.
  - Devolver apenas metadados de assinatura: rejeitado porque nao entrega o artefato pronto para as fases seguintes.

## Decision 3: Aceitar certificado A1 por arquivo `.pfx` ou conteudo em memoria

- **Decision**: O slice inicial aceitara tanto caminho de arquivo `.pfx` quanto conteudo A1 carregado em memoria como entrada publica para criar o contexto reutilizavel de assinatura.
- **Rationale**: Isso cobre o uso local em filesystem e integracoes que carregam o segredo em memoria via CI, vault ou orquestrador, sem forcar um unico modo operacional.
- **Alternatives considered**:
  - Aceitar apenas caminho de arquivo: rejeitado porque aumenta acoplamento com filesystem e dificulta CI e ambientes serverless.
  - Aceitar apenas conteudo em memoria: rejeitado porque piora a ergonomia local de quem ja opera com `.pfx` no disco.

## Decision 4: Verificar localmente a assinatura antes de devolver o XML

- **Decision**: O SDK assinara e verificara localmente a assinatura produzida antes de devolver o XML assinado ao consumidor.
- **Rationale**: Isso reduz o risco de expor um documento aparentemente pronto, mas estruturalmente incorreto, e cria uma evidencia de regressao forte sem depender ainda de autorizador externo.
- **Alternatives considered**:
  - Apenas gerar a assinatura e deixar a verificacao para fases futuras: rejeitado porque enfraquece o contrato deste slice.
  - Verificar apenas em testes: rejeitado porque deixaria o fluxo normal mais fragil do que a evidencia automatizada.

## Decision 5: Restringir a primeira cobertura a `NFe` assinada, nao a `enviNFe` ou eventos

- **Decision**: O slice assinara apenas a `NFe` de emissao principal ja serializada, mantendo `enviNFe` como lote transportador do documento assinado e deixando eventos e NFC-e para fases posteriores.
- **Rationale**: A exigencia normativa citada nas fontes oficiais e centrada na assinatura do documento eletronico; ampliar agora para lote e eventos aumentaria o escopo antes de estabilizar a experiencia principal.
- **Implementation note**: A regressao deste slice deve provar explicitamente que uma `NFe` assinada continua transportavel em `enviNFe` sem introduzir assinatura independente do lote.
- **Alternatives considered**:
  - Assinar tambem `enviNFe`: rejeitado porque o lote desta fase e apenas envelope de transporte.
  - Incluir eventos ou NFC-e no mesmo slice: rejeitado porque abre frentes operacionais demais antes de fechar o primeiro fluxo.

## Decision 6: Introduzir dependencias dedicadas para PKCS#12 e XMLDSig em vez de reimplementar criptografia

- **Decision**: O plano assume a adocao de dependencias dedicadas para leitura de PKCS#12/A1 e para XMLDSig, mantendo o codigo do repositorio focado em orquestracao, fronteiras publicas e validacao do fluxo NF-e.
- **Rationale**: O repositorio ainda nao possui infraestrutura de assinatura, e reimplementar parsing PKCS#12 ou XMLDSig do zero aumentaria risco tecnico e custo de manutencao sem ganho claro para este slice.
- **Selection criteria**: As dependencias escolhidas devem ter manutencao ativa, compatibilidade com Node.js ESM, API viavel em TypeScript estrito e suporte suficiente para assinatura e verificacao local sem acoplamento a SOAP ou a ferramentas externas obrigatorias.
- **Alternatives considered**:
  - Implementar PKCS#12 e XMLDSig manualmente: rejeitado por risco alto e baixo retorno.
  - Adiar a escolha de dependencias para a implementacao sem documentar a decisao: rejeitado porque enfraquece a fase de planejamento.

## Decision 7: Validar o slice por regressao estrutural, verificacao local e smoke do pacote

- **Decision**: A evidencia minima desta feature combinara testes de contrato da superficie root, fixtures de XML nao assinado/assinado, verificacao local da assinatura e validacao final do pacote publicado.
- **Rationale**: O slice altera o contrato publico e produz um artefato XML sensivel; a validacao precisa cobrir tanto API quanto corretude funcional do resultado assinado.
- **Alternatives considered**:
  - Confiar apenas em testes unitarios de utilitarios criptograficos: rejeitado porque nao prova o fluxo publico completo.
  - Exigir integracao com autorizador real nesta fase: rejeitado porque conflita com o recorte do roadmap.
