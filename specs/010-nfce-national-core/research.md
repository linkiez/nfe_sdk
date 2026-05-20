# Research: NFC-e National Core

## Decision 1: Expor uma unica facade root additive para autorizacao de NFC-e

- **Decision**: A feature deve publicar uma operacao root additive proposta como `authorizeNFCe`, mantendo o import raiz como superficie estavel do pacote.
- **Rationale**: O repositório ja expoe facades operacionais additive como `authorizeNFe`, `cancelNFe` e `submitGenericEvents`. Repetir esse padrao em NFC-e preserva o contrato ESM publicado, evita subpaths novos e reduz atrito para consumidores que ja usam a camada root.
- **Alternatives considered**:
  - Criar apenas builders de XML sem facade operacional: rejeitado porque o slice pede valor demonstravel de autorizacao homologada.
  - Expor um subpath dedicado para NFC-e: rejeitado porque conflita com a regra do pacote de manter o import raiz como unico entrypoint runtime estavel.

## Decision 2: Implementar a feature em uma nova camada manual dedicada `src/canonical/nfce/`

- **Decision**: O comportamento novo deve ficar em `src/canonical/nfce/`, com wrapper publico em `src/canonical/facade/` e reexport por `src/canonical/index.ts` e `src/index.ts`.
- **Rationale**: O projeto ja separa facades, operacoes NFe, recipient, generic-event, signing e transport. Uma camada dedicada para NFC-e preserva ownership claro, evita sobrecarregar `src/canonical/nfe/` com outro dominio operacional e mantem a arvore gerada como detalhe normativo interno.
- **Alternatives considered**:
  - Implementar tudo em `src/canonical/facade/`: rejeitado porque concentraria validacao, roteamento, serializacao e outcome mapping em um unico ponto.
  - Misturar NFC-e dentro de `src/canonical/nfe/`: rejeitado porque o slice tem boundaries e fontes especificas o bastante para justificar um modulo proprio.

## Decision 3: Inferir a UF operacional a partir da propria NFC-e

- **Decision**: O contrato root nao deve exigir um campo adicional de selecao de perfil estadual; a UF operacional deve ser inferida a partir dos dados da propria NFC-e.
- **Rationale**: A clarificacao da spec definiu que a facade root deve permanecer enxuta e additive. A inferencia deterministica a partir do documento reduz configuracao duplicada, evita divergencia entre payload e parametro externo e simplifica o uso da API.
- **Alternatives considered**:
  - Exigir campo explicito de UF/perfil operacional: rejeitado porque duplica informacao ja presente no documento.
  - Aceitar ambos os modos com override manual: rejeitado porque abre um novo eixo de inconsistencia antes mesmo de a feature estabilizar o slice piloto.

## Decision 4: Tratar UF nao inferivel como erro local e UFs nao piloto como boundary explicita

- **Decision**: Quando a UF nao puder ser inferida de forma deterministica, a operacao deve falhar antes do transporte como erro local de validacao. Quando a UF for inferivel, mas diferente de SP, a operacao deve falhar por boundary explicita de cobertura sem tentar autorizacao operacional.
- **Rationale**: A spec ja separa defeito de entrada de limite de cobertura. Essa divisao evita colapsar erro do consumidor e escopo publicado no mesmo tipo de falha, preservando previsibilidade do contrato e da taxonomia de testes.
- **Alternatives considered**:
  - Tentar fallback nacional para UFs nao piloto: rejeitado porque inflaria o recorte operacional e enfraqueceria a clareza da matriz por UF.
  - Tratar UF nao inferivel como boundary de cobertura: rejeitado porque mascara inconsistencia do documento como limitação do SDK.

## Decision 5: Limitar o slice inicial a homologacao e autorizacao, sem DANFE, QR Code, CSC ou contingencia

- **Decision**: O recorte operacional inicial cobre apenas montagem, validacao local, assinatura e autorizacao homologada. DANFE NFC-e, QR Code, administracao de CSC, credenciamento automatizado e contingencia offline permanecem fora da entrega operacional.
- **Rationale**: As fontes nacional e estadual mostram que essas superficies dependem fortemente de precondicoes e deltas por UF. Exclui-las do slice 010 permite demonstrar autorizacao homologada sem prometer emisso completa ao consumidor.
- **Alternatives considered**:
  - Incluir QR Code tecnico sem DANFE completo: rejeitado porque ainda exigiria CSC e semantica estadual logo no primeiro slice.
  - Incluir DANFE/QR Code apenas para SP: rejeitado porque desviaria o foco do slice do eixo principal de autorizacao homologada.

## Decision 6: Reutilizar assinatura, serializacao e transporte existentes em vez de abrir um segundo pipeline

- **Decision**: A feature deve reaproveitar as camadas manuais existentes de serializacao, assinatura digital e transporte SOAP homologado, acrescentando apenas o que for especifico de NFC-e.
- **Rationale**: O pacote ja possui pipeline operacional para NFe e generic-event. Reusar essas bases reduz risco, preserva coerencia de outcomes e evita que a feature 010 introduza um ecossistema paralelo de request execution.
- **Alternatives considered**:
  - Construir um transporte dedicado para NFC-e: rejeitado porque o recorte atual nao exige nova abstracao de rede.
  - Serializar e assinar inline dentro da facade: rejeitado porque quebraria boundaries ja estabilizadas nas features anteriores.

## Decision 7: Validar o slice por contrato root, cenarios de sucesso do piloto e boundaries pre-transporte

- **Decision**: O gate do slice deve cobrir testes de contrato do import raiz, unidade para resolucao de UF e boundaries, integracao para autorizacao homologada em SP e smoke do tarball.
- **Rationale**: A constituição exige foco em contrato publico e fixtures representativos. Como o valor central desta feature e combinar sucesso operacional em um piloto com falhas deterministicas fora do recorte, os testes precisam cobrir os dois eixos explicitamente.
- **Alternatives considered**:
  - Validar apenas por smoke do build e typecheck: rejeitado porque nao captura regressao de contrato root nem a nova taxonomia de boundaries.
  - Validar apenas por fixture feliz de SP: rejeitado porque nao prova as decisões mais importantes de cobertura do slice.

## Implementation evidence

- O pacote `nfe-sdk` e ESM-only, publicado pelo import raiz conforme `package.json#exports["."]`.
- `src/index.ts` e `src/public-contract.ts` mostram que o contrato publico ja e expandido por slices additive e auditado por evidencia do repositório.
- `src/canonical/` ja possui modulos manuais separados por responsabilidade, o que suporta a introducao de `src/canonical/nfce/` sem reabrir a arvore gerada como API.
- `docs/roadmap/nfce-operacional-promovivel.md` consolida a leitura nacional compartilhada e a necessidade de separar regras nacionais de deltas por UF.

## Provenance notes after planning

- O slice 010 foi planejado como primeiro passo operacional de NFC-e em homologacao com um unico piloto estadual, Sao Paulo.
- O plano assume que a operacao publica target sera `authorizeNFCe`, additive no import raiz, mas a publicacao dessa nomenclatura continua condicionada a implementacao e validacao de contrato.
- Permanecem explicitamente deferidos para slices futuros: QR Code, DANFE NFC-e, CSC, credenciamento automatizado, contingencia offline e qualquer cobertura operacional fora de SP.

## Provenance notes after implementation

- A implementacao confirmou `authorizeNFCe` como facade root additive em homologacao, apoiada pelo nucleo nacional compartilhado e pelo perfil piloto `SP`.
- `SRC-NFCE-001` permaneceu como fundamento do fluxo nacional compartilhado e da restricao do slice ao eixo de autorizacao homologada.
- `SRC-NFCE-004` e `SRC-NFCE-005` passaram a sustentar nao apenas a pesquisa editorial, mas tambem a promocao concreta de `SP` como piloto operacional inicial com roteamento dedicado no catalogo de transporte.
- A implementacao materializou duas fronteiras contratuais distintas: `unsupported-state` para UFs fora do piloto e `unsupported-scope` para superficies deferidas como QR Code, DANFE NFC-e, administracao de CSC, credenciamento automatizado e contingencia offline.
- O uso de `requestedCapabilities` foi mantido apenas como marcador explicito de superficies deferidas; ele nao amplia o escopo operacional do slice nem altera a matriz editorial por UF.
