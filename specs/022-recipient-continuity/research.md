# Research: Recipient Continuity

## Decision 1: Manter `distNSU` como eixo unico da continuidade publica do destinatario

- **Decision**: A continuidade promovida nesta slice continua ancorada em `distNSU` e em seus cursores observaveis; `consNSU` e `consChNFe` permanecem fora do contrato principal.
- **Rationale**: O recorte `RFL-003` fala explicitamente em combinar `distNSU`, cursores observaveis e download posterior como fluxo de integrador, enquanto coloca `consNSU` fora do escopo imediato. Isso permite fechar a lacuna de runtime sem contradizer as boundaries ja publicadas pela spec `008`.
- **Alternatives considered**:
  - Promover `consNSU` como proxima API estavel: rejeitado porque contraria o recorte funcional priorizado e amplia demais a superficie do destinatario.
  - Promover `consChNFe` para recuperar o documento posterior: rejeitado porque reabre um modo auxiliar explicitamente deferido na baseline da spec `008`.

## Decision 2: Tratar o documento posterior como recuperacao separada, guiada por identificador funcional e continuacao de distribuicao

- **Decision**: O documento liberado apos a manifestacao deve ser recuperado em uma chamada separada e dedicada, orientada por `accessKey` e pela continuidade do fluxo de distribuicao, sem acoplamento oculto ao registro inicial do evento.
- **Rationale**: A pesquisa da spec `008` ja fixou que a manifestacao nao baixa automaticamente a NF-e liberada e que o download posterior continua dependendo de nova distribuicao. A nova slice precisa tornar esse encadeamento observavel e usavel, sem colapsar dois passos funcionais diferentes em uma chamada magica.
- **Alternatives considered**:
  - Baixar automaticamente o documento ao final de `manifestRecipientOperation`: rejeitado porque viola a boundary contratual ja publicada.
  - Tratar o documento posterior apenas como responsabilidade manual do consumidor: rejeitado porque isso deixa a lacuna de continuidade sem fechamento de runtime.

## Decision 3: Estender `distributeRecipientDFe` com semantica de continuidade, em vez de duplicar a API de distribuicao

- **Decision**: A continuidade do cursor e da proxima acao deve entrar como extensao additive do resultado atual de `distributeRecipientDFe`, e nao como uma segunda facade root concorrente para a mesma operacao basica.
- **Rationale**: O runtime ja devolve `cursor`, classificacao e envelopes estruturados. O gap esta menos na capacidade de chamar `distNSU` e mais em comunicar melhor o que o integrador deve fazer depois, especialmente quando nao ha novidades, quando o cursor nao avanca ou quando o documento liberado ainda nao apareceu.
- **Alternatives considered**:
  - Criar uma nova facade root apenas para continuar `distNSU`: rejeitado porque duplicaria uma capacidade que ja existe e aumentaria a ambiguidade do contrato.
  - Deixar a semantica de continuidade apenas em exemplos e docs: rejeitado porque o roadmap pede uma slice nova de runtime, nao apenas alinhamento editorial.

## Decision 4: Manter homologacao, backoff e consumo indevido como boundaries operacionais do fluxo

- **Decision**: A feature continua limitada a homologacao e deve tornar ainda mais explicitas as diferencas entre ausencia legitima de documentos, indisponibilidade, dependency-limited, usage-error e o backoff recomendado para continuidade responsavel.
- **Rationale**: O dominio do destinatario carrega restricoes oficiais sobre uso, intervalo de consulta e credenciamento. Se a continuidade nascer sem essas boundaries, o integrador tende a ler o slice como convite a polling agressivo ou como suporte tacito a producao.
- **Alternatives considered**:
  - Abrir producao junto da continuidade: rejeitado porque a proveniencia operacional continua insuficiente para uma promocao segura.
  - Esconder backoff e limites de consumo no runtime: rejeitado porque o integrador precisa desses sinais para operar o fluxo sem heuristica opaca.

## Decision 5: Reaproveitar as facades beta existentes apenas como evidencia tecnica, nao como centro do contrato desta slice

- **Decision**: `queryNFeByNSU` e `queryNFeByAccessKey` permanecem como superficies beta preexistentes e podem ser reaproveitadas internamente ou como base de fixtures, mas a nova slice nao depende de promovê-las a contrato estavel.
- **Rationale**: A coverage matrix mostra essas funcoes como `beta` e `unit-only`, enquanto o roadmap continua explicitamente mantendo `consNSU` fora do recorte imediato. A continuidade pode ser fechada em cima do fluxo principal do destinatario sem transformar essas APIs auxiliares em promessa forte.
- **Alternatives considered**:
  - Gradua-las para `stable` e chamar isso de continuidade: rejeitado porque troca um fechamento orientado ao fluxo do integrador por promocao prematura de consultas auxiliares.
  - Ignora-las completamente: rejeitado porque ainda sao evidencia util para parser, fixture e analise de fronteiras.

## Decision 6: Fechar a nova slice com fixture homologada de resumo, documento liberado e ausencia legitima de novidades

- **Decision**: A validacao da feature deve cobrir pelo menos tres estados operacionais reutilizaveis: resumo disponivel antes da liberacao plena, documento completo liberado em distribuicao posterior e resposta valida sem novidades.
- **Rationale**: Esses tres estados materializam o valor da continuidade do destinatario e tornam observavel a transicao entre manifestacao, espera e recuperacao posterior. Sem isso, o plano ficaria preso a contratos abstratos demais.
- **Alternatives considered**:
  - Validar apenas por testes unitarios de parser: rejeitado porque nao fecha o comportamento do fluxo percebido pelo integrador.
  - Exigir polling automatizado ou fixture de producao: rejeitado porque foge do recorte e da proveniencia atual.
