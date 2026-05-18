# Research: Fundacao do Contrato Publico do Pacote

## Decision 1: Tratar `package.json`/exports como fonte normativa do contrato minimo

- **Decision**: O contrato publico minimo sera definido normativamente por `package.json`/exports e pelo import raiz efetivamente publicado.
- **Rationale**: Isso remove ambiguidade entre o que o repositorio descreve e o que o pacote realmente entrega ao consumidor. README e docs passam a funcionar como explicacao e auditoria humana, nao como fonte normativa concorrente.
- **Alternatives considered**:
  - Usar README como fonte principal do contrato: rejeitado porque permitiria divergencia silenciosa em relacao ao pacote publicado.
  - Usar `manifest.json` como contrato minimo: rejeitado porque ele expressa cobertura interna e lacunas do gerador, nao a superficie garantida ao consumidor.

## Decision 2: Manter o contrato minimo restrito ao import raiz

- **Decision**: Nesta fase, apenas o import raiz integra o contrato publico minimo; subpaths e arquivos gerados continuam fora da superficie estavel por padrao.
- **Rationale**: O repositorio hoje reexporta amplamente a arvore gerada no entrypoint raiz. A fundacao do pacote precisa reduzir o escopo da promessa publica antes de ampliar capacidades funcionais.
- **Alternatives considered**:
  - Incluir subpaths selecionados: rejeitado porque congelaria cedo demais partes ainda acopladas ao output bruto do gerador.
  - Tratar toda a arvore gerada como publica: rejeitado porque isso ampliaria muito o custo de compatibilidade das fases seguintes.

## Decision 3: Redesenhar o import raiz ja na fase de fundacao

- **Decision**: A fase pode e deve redesenhar deliberadamente o import raiz para antecipar as fases funcionais seguintes.
- **Rationale**: Apenas documentar o estado atual perpetuaria uma superficie que hoje ainda reflete a arvore gerada quase diretamente. O roadmap pede uma base confiavel de pacote, nao apenas uma fotografia do estado atual.
- **Alternatives considered**:
  - Apenas congelar o import raiz atual: rejeitado porque manteria acoplamento excessivo com o output gerado.
  - Adiar o redesenho para fases funcionais posteriores: rejeitado porque faria cada fase reinterpretar o contrato do pacote.

## Decision 4: Validar a distribuicao real com `npm pack` e smoke test por tarball

- **Decision**: O criterio minimo de build repetivel sera `npm pack` bem-sucedido seguido de smoke validation consumindo o pacote empacotado.
- **Rationale**: Esse fluxo valida a experiencia real de distribuicao e consumo do pacote, evitando falso positivo de verificacoes que ainda dependam do workspace aberto.
- **Alternatives considered**:
  - Validar apenas `dist/`: rejeitado porque nao comprova o pacote publicado de ponta a ponta.
  - Exigir registry de teste: rejeitado porque adiciona infraestrutura desnecessaria nesta fase.

## Decision 5: Manter `manifest.json` como artefato interno de auditoria

- **Decision**: `src/manifest.json` permanece interno, servindo para auditoria de cobertura, colisao e lacunas, sem virar contrato publico do pacote.
- **Rationale**: O manifesto e util para avaliar o estado da arvore gerada e orientar backlog, mas ainda nao tem estabilidade ou semantica apropriada para ser congelado como interface externa.
- **Alternatives considered**:
  - Tornar o manifesto publico para consumo programatico: rejeitado porque expandiria o contrato sem necessidade do usuario final.
  - Remover o manifesto do escopo da feature: rejeitado porque ele continua sendo evidencia importante para auditoria da fundacao.