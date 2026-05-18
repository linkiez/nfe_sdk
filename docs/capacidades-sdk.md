# Catalogo de Capacidades do SDK

## Objetivo

Fornecer uma visao unica e orientada a adocao sobre as capacidades visiveis do projeto, separando o que ja e tratavel como contrato publico estavel do pacote, o que ainda e parcial, o que depende de habilitacao operacional externa e o que permanece como evolucao futura.

## Papel deste documento

- Este arquivo e a fonte canonica do catalogo de capacidades do projeto nesta fase.
- `docs/index.md` funciona como porta de entrada de navegacao e adocao.
- Os dossies por dominio e a matriz NFC-e por UF permanecem como base de evidencia e detalhamento, nao como fontes canonicas concorrentes.
- Esta entrega permanece estritamente documental e nao introduz catalogo adicional em JSON, YAML ou formato equivalente.

## Como ler este catalogo

- Este catalogo resume o que um integrador ou mantenedor consegue inferir sobre o projeto sem inspecionar manualmente toda a arvore `src/`.
- As capacidades transversais aparecem separadas das capacidades por dominio fiscal.
- A matriz por UF de NFC-e continua sendo o local de detalhe estadual; aqui ela aparece apenas como capacidade principal com ligacao auxiliar.
- Cada entrada aponta para pelo menos uma evidencia principal do repositorio ou para uma lacuna explicita.

## Legenda de estado

- `confirmed`: capacidade ja estavel como contrato publico do pacote.
- `partial`: capacidade visivel no repositorio, mas ainda sem grau suficiente de estabilidade para ser tratada como contrato publico fechado.
- `externally-dependent`: capacidade que o SDK consegue representar ou documentar, mas cujo uso real depende de certificado, credenciamento ou acesso externo.
- `future`: capacidade identificada como necessaria ou esperada, mas ainda nao sustentada como oferta atual do pacote.

## Legenda de impacto

- `public-contract`: afeta a forma como consumidores entendem ou usam a superficie publica do pacote.
- `generated-artifacts`: afeta a geracao, organizacao ou leitura dos artefatos derivados de XSD.
- `normalization`: afeta regras de nomeacao, estabilidade ou previsibilidade dos identificadores gerados.
- `documentation`: organiza entendimento, navegacao e rastreabilidade sem mudar comportamento do pacote.
- `planning`: registra evolucao futura ou lacuna sem alterar a oferta atual.

## Fronteiras documentais e granularidade

- O catalogo usa granularidade hibrida: cada entrada principal cobre uma capacidade ampla e as subcapacidades relevantes aparecem no escopo da propria linha ou no dossie vinculado.
- `confirmed` fica restrito ao que ja pode ser lido como contrato publico estavel do pacote.
- Dependencias de certificado, credenciamento, acesso estadual ou portal restrito aparecem em `Habilitacao operacional`, separadas da capacidade do SDK.
- Variacoes estaduais de NFC-e ficam fora da lista principal e continuam detalhadas em `docs/nfce/uf-matrix.md`.

## Capacidades transversais

| ID | Capacidade | Valor para o usuario | Dominios/fluxos cobertos | Subcapacidades e ligacoes | Estado | Impacto | Evidencia principal | Habilitacao operacional | Lacunas abertas |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAT-SHARED-001 | Gerar artefatos TypeScript a partir de colecoes de XSD em lote | Permite partir de schemas oficiais para uma superficie TypeScript reutilizavel | shared, geracao | Pipeline principal, particionamento por categoria e reexportacao por diretorio | confirmed | public-contract | README.md | Nenhuma adicional | Nenhuma lacuna critica identificada nesta rodada |
| CAT-SHARED-002 | Normalizar identificadores e separar saida por classes, interfaces, types e enums | Reduz colisao de nomes e torna a superficie publicada previsivel | shared, normalizacao | Prefixos por tipo, nomes hierarquicos estaveis e saida separada por declaracao | confirmed | normalization | README.md | Nenhuma adicional | Regras finas adicionais ainda dependem de futuras mudancas no pipeline, mas a direcao atual e publica |
| CAT-SHARED-003 | Manter consumo ESM e compatibilidade com validacao TypeScript estrita | Ajuda o integrador a adotar o pacote sem precisar adaptar o modulo alvo | shared, consumo do pacote | Compatibilidade ESM, scripts de validacao e baseline de qualidade | confirmed | public-contract | README.md | Ambiente Node.js compativel com ESM | A superficie exportada ainda merece catalogacao mais detalhada em backlog futuro |
| CAT-SHARED-004 | Rastrear capacidades do projeto por documentacao versionada e fontes separadas por confiabilidade | Permite avaliar cobertura, evidencia e backlog sem inspecao manual do codigo | shared, documentacao, adocao | Navegacao documental em `docs/index.md`, registro de fontes e dossies por dominio | partial | documentation | docs/index.md | Nenhuma adicional | O catalogo principal ainda esta sendo consolidado nesta feature |
| CAT-SHARED-005 | Diferenciar capacidade do SDK de habilitacao operacional externa | Evita confundir modelagem do SDK com acesso real a servicos oficiais | shared, restricoes operacionais | Separacao entre cobertura do SDK e pre-requisitos externos nos dossies e no catalogo | partial | documentation | docs/manifestacao-destinatario/capacidades-sdk.md | Certificado digital, credenciamento e acesso oficial quando exigidos | Ainda faltam criterios consolidados por fluxo para todas as rotinas dependentes de operacao externa |

## Capacidades por dominio

| ID | Capacidade | Valor para o usuario | Dominios/fluxos cobertos | Subcapacidades e ligacoes | Estado | Impacto | Evidencia principal | Habilitacao operacional | Lacunas abertas |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAT-NFE-001 | Disponibilizar base de capacidades documentadas para emissao, autorizacao, contingencia e consulta de NFe | Permite avaliar rapidamente o quanto o dominio NFe ja esta representado e o que ainda depende de evolucao | nfe | Emissao, autorizacao, consulta, contingencia e deltas estaduais ligados ao dossie de NFe | partial | documentation | docs/nfe/capacidades-sdk.md | Certificacao digital e operacao fiscal real quando aplicavel | Regras estaduais alem de SP e detalhes normativos adicionais ainda nao estao fechados |
| CAT-NFCE-001 | Disponibilizar base de capacidades documentadas para fluxo nacional compartilhado de NFC-e | Resume a cobertura comum de NFC-e antes de o integrador entrar na variacao por UF | nfce | Emissao, autorizacao, contingencia e atualizacoes nacionais descritas no dossie de NFC-e | partial | documentation | docs/nfce/capacidades-sdk.md | Habilitacao operacional varia por UF | A camada estadual continua incompleta e depende de aprofundamento por portal estadual |
| CAT-NFCE-002 | Relacionar variacoes estaduais de NFC-e por matriz auxiliar vinculada | Explicita o risco estadual sem inflar o catalogo principal | nfce | Matriz auxiliar em `docs/nfce/uf-matrix.md` com status, deltas e lacunas por UF | partial | planning | docs/nfce/uf-matrix.md | Acesso a portais estaduais e credenciamento conforme a UF | Apenas Sao Paulo possui complemento estadual consolidado nesta rodada |
| CAT-MD-001 | Documentar o conjunto funcional de Manifestacao do Destinatario e suas restricoes publicas | Permite entender o valor do dominio sem prometer acesso operacional publico irrestrito | manifestacao-destinatario | Eventos, FAQ publica, restricoes de portal e dependencia de certificado descritos no dossie tematico | externally-dependent | documentation | docs/manifestacao-destinatario/capacidades-sdk.md | Certificado digital e eventual acesso restrito ao portal oficial | Detalhes operacionais por evento ainda dependem de fontes publicas complementares |

## Prioridades de evolucao e compatibilidade

| Entrada | Prioridade de evolucao | Leitura de compatibilidade |
| --- | --- | --- |
| CAT-SHARED-001 | Baixa | A capacidade ja compoe a leitura publica do pacote; futuras mudancas exigem cautela por afetarem a promessa principal do repositorio |
| CAT-SHARED-002 | Media | Ajustes podem afetar regras de nomeacao e estabilidade dos identificadores gerados |
| CAT-SHARED-003 | Baixa | A compatibilidade ESM e a validacao estrita ja sao expectativas publicas do pacote |
| CAT-SHARED-004 | Media | O impacto atual e documental, mas erros de navegacao ou proveniencia degradam adocao e rastreabilidade |
| CAT-SHARED-005 | Alta | Esta separacao evita regressao conceitual entre cobertura tecnica e uso real em producao |
| CAT-NFE-001 | Alta | O impacto atual e documental; qualquer promocao futura para contrato publico exige nota de compatibilidade |
| CAT-NFCE-001 | Alta | O dominio depende de estabilizacao adicional antes de ser lido como cobertura fechada |
| CAT-NFCE-002 | Alta | Variacao por UF segue como risco de adocao e precisa continuar fora do resumo principal |
| CAT-MD-001 | Alta | A restricao operacional precisa permanecer explicita para nao induzir promessas incorretas de uso publico |

## Leitura recomendada por objetivo

- Para adocao do pacote: comecar por `CAT-SHARED-001`, `CAT-SHARED-002` e `CAT-SHARED-003`.
- Para planejamento funcional por dominio: revisar `CAT-NFE-001`, `CAT-NFCE-001` e `CAT-MD-001` junto dos dossies tematicos.
- Para impacto estadual de NFC-e: seguir da entrada `CAT-NFCE-002` para `docs/nfce/uf-matrix.md`.

## Evidencias e lacunas

- O README sustenta as capacidades transversais de geracao, normalizacao, compatibilidade ESM e validacao basica.
- Os dossies de capacidades por dominio sustentam a leitura funcional atual, mas ainda registram lacunas importantes para uso como contrato fechado do pacote.
- O registro em `docs/_meta/source-registry.md` centraliza a proveniencia primaria e secundaria que sustenta cada entrada principal.
- Sempre que uma capacidade estiver marcada como `partial`, `externally-dependent` ou `future`, a leitura correta e de backlog ou limitacao explicita, nao de promessa fechada de comportamento operacional completo.