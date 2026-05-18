# Registro de Fontes

## Objetivo

Centralizar as fontes consultadas, datas de acesso, restricoes observadas e o vinculo entre evidencias documentais e impactos futuros no SDK.

## Papel no catalogo canonico

- Este registro sustenta a proveniencia do catalogo canonico em `docs/capacidades-sdk.md`.
- `docs/index.md` aponta para este arquivo como trilha de auditoria e validacao da leitura orientada a adocao.
- Os dossies por dominio continuam sendo evidencia funcional detalhada; este arquivo centraliza a origem primaria e secundaria que justifica a classificacao do catalogo.
- Nesta fase, a entrega permanece documental e este registro nao substitui o catalogo canonico nem cria superficie estruturada adicional para ferramentas.

## Campos obrigatorios por fonte

| Campo | Descricao |
| --- | --- |
| ID | Identificador estavel para referencias cruzadas |
| Titulo | Nome legivel da fonte |
| URL ou caminho local | Localizacao publica ou artefato arquivado |
| Tipo | `primary` ou `secondary` |
| Dominio | `nfe`, `nfce`, `manifestacao-destinatario` ou `shared` |
| Jurisdicao | `national` ou sigla da UF |
| Publicacao/Revisao | Data oficial quando disponivel |
| Acesso | Data em que a fonte foi consultada |
| Notas de acesso | Restricoes, certificado, instabilidade ou limitacoes de extracao |
| Impacto futuro no SDK | Resumo do efeito esperado em evolucoes futuras |

## Registro inicial

| ID | Titulo | URL ou caminho local | Tipo | Dominio | Jurisdicao | Publicacao/Revisao | Acesso | Notas de acesso | Impacto futuro no SDK |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SRC-NFE-001 | Portal Nacional da NF-e - Pagina principal | https://www.nfe.fazenda.gov.br/portal/principal.aspx | primary | nfe | national | Nao identificado na pagina | 2026-05-16 | Superficie publica com servicos, documentos, downloads, FAQ, informes e links para secretarias/portais estaduais | Base para mapear fluxo nacional, servicos publicos e pontos de disponibilidade/contingencia |
| SRC-NFE-002 | Portal Nacional da NF-e - Perguntas Frequentes | https://www.nfe.fazenda.gov.br/portal/perguntasFrequentes.aspx?tipoConteudo=3Ow1nfTBzIo= | primary | nfe | national | Nao identificado na pagina | 2026-05-16 | FAQ publica com secoes sobre emissao, autorizacao, contingencia, DANFE, certificacao digital e manifestacao | Apoia levantamento de regras funcionais e casos operacionais frequentes |
| SRC-NFE-003 | SEFAZ/SP - Sobre a NF-e | https://portal.fazenda.sp.gov.br/servicos/nfe/Paginas/Sobre.aspx | primary | nfe | SP | Avisos publicos visiveis em 2025 e 2026 | 2026-05-16 | Pagina publica com conceito operacional, contatos, avisos, contingencia e links complementares | Complementa verificacoes por UF e evidencia operacao estadual publica |
| SRC-NFE-004 | SEFAZ/SP - Servicos da NF-e | https://portal.fazenda.sp.gov.br/servicos/nfe/Paginas/Servicos.aspx | primary | nfe | SP | Nao identificado na pagina | 2026-05-16 | Lista publica servicos como consulta, credenciamento, EPEC e desbloqueios; combina acessos publicos, por certificado e por credenciais | Apoia mapeamento de capacidades operacionais estaduais e cenarios de excecao |
| SRC-NFE-005 | SEFAZ/SP - Downloads da NF-e | https://portal.fazenda.sp.gov.br/servicos/nfe/Paginas/Downloads.aspx | primary | nfe | SP | Nao identificado na pagina | 2026-05-16 | Pagina publica com secoes de links externos, manuais e diversos | Indica onde coletar artefatos oficiais suplementares para conversao controlada |
| SRC-NFCE-001 | Portal Nacional da NF-e - Pagina principal | https://www.nfe.fazenda.gov.br/portal/principal.aspx | primary | nfce | national | Nao identificado na pagina | 2026-05-16 | Confirmou FAQ, informes, disponibilidade e referencia a portais estaduais | Base para consolidar regras nacionais compartilhadas da NFC-e |
| SRC-NFCE-002 | Portal Nacional da NF-e - Informes e notas tecnicas recentes | https://www.nfe.fazenda.gov.br/portal/principal.aspx | primary | nfce | national | Publicacoes visiveis em abril e maio de 2026 | 2026-05-16 | A pagina principal exibiu NT 2024.003 v1.10, NT 2026.004 v1.00, NT 2025.002 v1.36 e Informe 2026.002 v1.00 | Direciona backlog de compatibilidade e revisao de leiautes |
| SRC-NFCE-003 | Portal Nacional da NF.e - Perguntas Frequentes | https://www.nfe.fazenda.gov.br/portal/perguntasFrequentes.aspx?tipoConteudo=3Ow1nfTBzIo= | primary | nfce | national | Nao identificado na pagina | 2026-05-16 | FAQ publica; pagina nacional organiza perguntas por tema operacional | Apoia levantamento de fluxo nacional antes do detalhamento por UF |
| SRC-NFCE-004 | SEFAZ/SP - Sobre a NF-e | https://portal.fazenda.sp.gov.br/servicos/nfe/Paginas/Sobre.aspx | primary | nfce | SP | Avisos publicos visiveis em 2025 e 2026 | 2026-05-16 | Fonte estadual publica usada como referencia complementar de operacao e contingencia | Evidencia necessidade de complementar a camada nacional com portais estaduais |
| SRC-NFCE-005 | SEFAZ/SP - Servicos da NF-e | https://portal.fazenda.sp.gov.br/servicos/nfe/Paginas/Servicos.aspx | primary | nfce | SP | Nao identificado na pagina | 2026-05-16 | Lista publica servicos e tipos de acesso por funcionalidade | Ajuda a estruturar a futura coleta por UF |
| SRC-MD-001 | Portal Nacional da NF.e - Manifestacao do Destinatario na superficie principal | https://www.nfe.fazenda.gov.br/portal/principal.aspx | primary | manifestacao-destinatario | national | Nao identificado na pagina | 2026-05-16 | Link da funcionalidade aparece na navegacao publica do portal principal | Confirma o tema como parte oficial do ecossistema NF-e |
| SRC-MD-002 | Portal Nacional da NF.e - FAQ com eventos de Manifestacao do Destinatario | https://www.nfe.fazenda.gov.br/portal/perguntasFrequentes.aspx?tipoConteudo=3Ow1nfTBzIo= | primary | manifestacao-destinatario | national | Nao identificado na pagina | 2026-05-16 | A pagina de FAQ indexa 21 questoes para eventos de manifestacao do destinatario | Fornece superficie publica para inferir requisitos e eventos sem acessar area restrita |
| SRC-MD-003 | Portal Nacional da NF.e - Pagina da Manifestacao do Destinatario | https://www.nfe.fazenda.gov.br/portal/manifestacaoDestinatario.aspx?tipoConteudo=o9MkXc+hmKs= | primary | manifestacao-destinatario | national | Nao identificado na pagina | 2026-05-16 | Retornou exigencia de certificado digital para acesso a funcionalidade | Registrar a restricao evita assumir detalhes nao verificados por fonte publica |
| SRC-SEC-001 | node-dfe - README e metadados do projeto | /home/linkiez/Projetos/node-dfe/README.md | secondary | shared | national | package.json versao 0.0.25 | 2026-05-16 | Biblioteca Node.js de integracao para NF-e/NFC-e; usada apenas como referencia tecnica complementar, nao normativa; README declara suporte a emissao de modelos 55 e 65 para todos os estados e testes mais limitados em algumas rotinas fora de SP | Apoia comparacao de capacidades praticas, nomenclaturas e lacunas de implementacao sem substituir fontes oficiais |

## Regras de preenchimento

- Toda afirmacao normativa nos dossies deve apontar para pelo menos uma fonte ou explicitar uma lacuna.
- Fontes primarias e secundarias nao devem ser misturadas.
- Restricoes de acesso devem ser descritas sem tentar contornar protecoes oficiais.
- Quando a mesma URL sustentar dominios diferentes, manter IDs distintos para preservar a rastreabilidade por dossie.
- Toda entrada do catalogo geral em `docs/capacidades-sdk.md` deve apontar para pelo menos uma evidencia principal deste registro ou explicitar a lacuna correspondente.
- Toda atualizacao de estado, impacto ou lacuna no catalogo canonico deve manter coerencia com as referencias cruzadas e com os dossies por dominio.

## Uso no catalogo geral de capacidades

| Entrada do catalogo | Evidencia principal | Tipo de evidencia | Observacao |
| --- | --- | --- | --- |
| CAT-SHARED-001 | README.md | readme | Sustenta a geracao em lote de artefatos TypeScript a partir de XSD |
| CAT-SHARED-002 | README.md | readme | Sustenta a normalizacao e particionamento da saida gerada |
| CAT-SHARED-003 | README.md | readme | Sustenta o alvo ESM e a compatibilidade com validacao TypeScript |
| CAT-SHARED-004 | docs/index.md | dossier | Sustenta a organizacao documental versionada e navegavel |
| CAT-SHARED-005 | docs/manifestacao-destinatario/capacidades-sdk.md | dossier | Sustenta a separacao entre capacidade do SDK e habilitacao operacional |
| CAT-NFE-001 | docs/nfe/capacidades-sdk.md | dossier | Resume capacidades e lacunas atuais do dominio NFe |
| CAT-NFCE-001 | docs/nfce/capacidades-sdk.md | dossier | Resume capacidades compartilhadas e sensiveis a UF para NFC-e |
| CAT-NFCE-002 | docs/nfce/uf-matrix.md | dossier | Mantem o detalhe por UF fora do catalogo principal |
| CAT-MD-001 | docs/manifestacao-destinatario/capacidades-sdk.md | dossier | Resume restricoes publicas e dependencia de certificado digital |

## Referencias cruzadas iniciais

| Registro | Requisitos/artefatos relacionados |
| --- | --- |
| SRC-NFE-001 | NFE-CAP-001, NFE-CAP-002, NFE-CAP-003, docs/nfe/emissao-nfe.md |
| SRC-NFE-002 | NFE-CAP-004, docs/nfe/emissao-nfe.md |
| SRC-NFE-003 | NFE-CAP-001, NFE-CAP-005, CHANGE-005, CHANGE-006, docs/nfe/emissao-nfe.md |
| SRC-NFE-004 | NFE-CAP-002, NFE-CAP-003, NFE-CAP-005 |
| SRC-NFE-005 | docs/nfe/emissao-nfe.md |
| SRC-NFCE-001 | NFCE-CAP-001, NFCE-CAP-003, NFCE-CAP-004, NFCE-CAP-005, docs/nfce/emissao-nfce.md, docs/nfce/uf-matrix.md |
| SRC-NFCE-002 | NFCE-CAP-002, CHANGE-001, CHANGE-002, CHANGE-003, CHANGE-004 |
| SRC-NFCE-003 | NFCE-CAP-001, docs/nfce/emissao-nfce.md |
| SRC-NFCE-004 | NFCE-CAP-003, docs/nfce/emissao-nfce.md, docs/nfce/uf-matrix.md |
| SRC-NFCE-005 | NFCE-CAP-004, docs/nfce/uf-matrix.md |
| SRC-MD-001 | MD-CAP-001, docs/manifestacao-destinatario/visao-geral.md |
| SRC-MD-002 | MD-CAP-001, MD-CAP-003, docs/manifestacao-destinatario/visao-geral.md |
| SRC-MD-003 | MD-CAP-002, MD-CAP-003, docs/manifestacao-destinatario/visao-geral.md |
| SRC-SEC-001 | docs/nfe/emissao-nfe.md, docs/nfce/emissao-nfce.md, docs/nfe/capacidades-sdk.md, docs/nfce/capacidades-sdk.md |

## Referencias cruzadas do catalogo

| Entrada | Registros relacionados |
| --- | --- |
| CAT-SHARED-001 | README.md |
| CAT-SHARED-002 | README.md |
| CAT-SHARED-003 | README.md |
| CAT-SHARED-004 | docs/index.md, docs/_meta/source-registry.md |
| CAT-SHARED-005 | SRC-MD-003, docs/manifestacao-destinatario/capacidades-sdk.md |
| CAT-NFE-001 | SRC-NFE-001, SRC-NFE-003, SRC-NFE-004, docs/nfe/capacidades-sdk.md |
| CAT-NFCE-001 | SRC-NFCE-001, SRC-NFCE-003, docs/nfce/capacidades-sdk.md |
| CAT-NFCE-002 | SRC-NFCE-001, SRC-NFCE-004, SRC-NFCE-005, docs/nfce/uf-matrix.md |
| CAT-MD-001 | SRC-MD-001, SRC-MD-002, SRC-MD-003, docs/manifestacao-destinatario/capacidades-sdk.md |

## Estado atual das fontes secundarias

`SRC-SEC-001` foi promovida como fonte secundaria compartilhada para apoio tecnico em NFe e NFC-e. As afirmacoes normativas continuam dependentes de fontes primarias, e qualquer uso de `node-dfe` deve permanecer claramente identificado como referencia complementar de implementacao.

Para `manifestacao-destinatario`, o mesmo repositorio foi verificado em 2026-05-16 e nao apresentou evidencia local suficiente para ser promovido como fonte secundaria do dominio.