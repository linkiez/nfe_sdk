# Pesquisa e Consolidacao de Documentacao SEFAZ

## Escopo

Este conjunto documental consolida referencias oficiais e complementares necessarias para o planejamento do SDK de NFe, NFC-e e Manifestacao do Destinatario. O foco desta feature e registrar o estado efetivo atual, mudancas recentes relevantes e impactos futuros no SDK sem alterar a superficie publicada do pacote.

## Entregaveis

- [Catalogo geral de capacidades do SDK](./capacidades-sdk.md)
- [NFe: emissao](./nfe/emissao-nfe.md)
- [NFe: capacidades do SDK](./nfe/capacidades-sdk.md)
- [NFC-e: emissao nacional](./nfce/emissao-nfce.md)
- [NFC-e: capacidades do SDK](./nfce/capacidades-sdk.md)
- [Manifestacao do Destinatario: visao geral](./manifestacao-destinatario/visao-geral.md)
- [Manifestacao do Destinatario: capacidades do SDK](./manifestacao-destinatario/capacidades-sdk.md)
- [NFC-e: matriz por UF](./nfce/uf-matrix.md)
- [Mudancas recentes](./mudancas-recentes.md)
- [Roadmap de implantacao do SDK](./roadmap-implantacao.md)
- [Registro de fontes](./_meta/source-registry.md)
- [Fluxo controlado com MarkItDown](./markitdown-workflow.md)
- [Documentos oficiais convertidos do Portal Nacional da NF-e](./documentos-oficiais-portal-nfe.md)
- [Acervo rastreavel de fontes capturadas](./_sources/index.md)

## Politica de fontes

- Priorizar fontes primarias oficiais.
- Separar explicitamente fontes secundarias quando forem necessarias.
- Registrar restricoes de acesso, paginas com certificado e lacunas conhecidas.

## Navegacao orientada a adocao

- O [Catalogo geral de capacidades do SDK](./capacidades-sdk.md) e a fonte canonica para leitura rapida de cobertura, impacto e lacunas do projeto.
- Os dossies tematicos abaixo permanecem como evidencia detalhada para NFe, NFC-e, Manifestacao do Destinatario e matriz auxiliar por UF.
- Esta feature permanece documental: a navegacao abaixo nao introduz sidecar estruturado adicional para consumo automatizado.

## Status atual

- Estrutura inicial criada para suportar a pesquisa e a consolidacao dos dossies.
- Catalogo geral de capacidades do SDK consolidado como ponto de entrada orientado a adocao e backlog.
- Dossies iniciais de NFe, NFC-e e Manifestacao do Destinatario agora registram o estado efetivo atual observavel por fontes publicas oficiais em 2026-05-16.
- Registro central de fontes iniciado com referencias nacionais e com complemento estadual de Sao Paulo.

## Cobertura prevista

- NFe: fluxo de emissao, requisitos e mudancas recentes.
- NFC-e: fluxo nacional, regras compartilhadas e matriz completa das 27 UFs.
- Manifestacao do Destinatario: eventos, pre-requisitos e riscos conhecidos.

## Resumo de cobertura

| Area | Artefato principal | Status | Observacoes |
| --- | --- | --- | --- |
| Catalogo geral | [Capacidades do SDK](./capacidades-sdk.md) | done | Resume capacidades visiveis, impactos e lacunas com linguagem uniforme de catalogo |
| NFe | [Emissao de NFe](./nfe/emissao-nfe.md) | in-progress | Superficie publica oficial consolidada com fontes nacionais e complemento SP |
| NFe - capacidades | [Capacidades do SDK](./nfe/capacidades-sdk.md) | in-progress | Primeira lista de capacidades e validacoes derivadas das fontes oficiais |
| NFC-e nacional | [Emissao de NFC-e](./nfce/emissao-nfce.md) | in-progress | Regras nacionais resumidas; falta preenchimento detalhado por UF |
| NFC-e - capacidades | [Capacidades do SDK](./nfce/capacidades-sdk.md) | in-progress | Requisitos compartilhados e sensiveis a UF consolidados inicialmente |
| Manifestacao do Destinatario | [Visao geral](./manifestacao-destinatario/visao-geral.md) | in-progress | Tema confirmado por fonte oficial; detalhe operacional segue limitado por acesso restrito |
| Manifestacao - capacidades | [Capacidades do SDK](./manifestacao-destinatario/capacidades-sdk.md) | in-progress | Capacidades iniciais consolidadas com restricao publica explicitada |
| NFC-e por UF | [Matriz por UF](./nfce/uf-matrix.md) | in-progress | Todas as 27 UFs possuem status inicial e lacunas explicitas |
| Mudancas recentes | [Mudancas recentes](./mudancas-recentes.md) | in-progress | Primeira rodada de deltas relevantes consolidada |
| Evolucao do projeto | [Roadmap de implantacao](./roadmap-implantacao.md) | done | Organiza a sequencia de implantacao do gerador atual para um SDK operacional |
| Portal Nacional - documentos vigentes | [Documentos oficiais convertidos](./documentos-oficiais-portal-nfe.md) | in-progress | Integra o submenu Documentos do Portal Nacional com snapshots e Markdown local |
| Fontes capturadas e convertidas | [Acervo rastreavel](./_sources/index.md) | done | Torna navegavel o conjunto bruto, convertido e extraido sob `docs/_sources` |

## Pesquisa atual

- Data-base desta rodada: 2026-05-16.
- Fontes primarias iniciais: Portal Nacional da NF-e, FAQ nacional e superficies publicas da SEFAZ/SP.
- Fonte secundaria ativa: `SRC-SEC-001` (`/home/linkiez/Projetos/node-dfe`) como apoio tecnico complementar para NFe e NFC-e.
- Restricoes confirmadas: a funcionalidade especifica de Manifestacao do Destinatario exige certificado digital para acesso direto.
- Proximo aprofundamento necessario: artefatos normativos detalhados, paginas estaduais por UF e consolidacao de mudancas recentes.

## Inventario de uso no repositorio

- Catalogo geral de adocao: [Capacidades do SDK](./capacidades-sdk.md).
- Dossies de estado atual: NFe, NFC-e e Manifestacao do Destinatario.
- Dossies de requisitos: capacidades do SDK por dominio.
- Planejamento de evolucao: [Roadmap de implantacao](./roadmap-implantacao.md).
- Artefatos de apoio: registro de fontes, matriz por UF, mudancas recentes e fluxo de conversao com MarkItDown.
- Acervo rastreavel de captura e conversao: [docs/_sources](./_sources/index.md).

## Atalhos de leitura

- Para decidir adocao do pacote: comecar pelo [Catalogo geral de capacidades do SDK](./capacidades-sdk.md).
- Para validar evidencia e proveniencia: seguir para [Registro de fontes](./_meta/source-registry.md).
- Para aprofundar NFe: usar [NFe: capacidades do SDK](./nfe/capacidades-sdk.md).
- Para aprofundar NFC-e nacional: usar [NFC-e: capacidades do SDK](./nfce/capacidades-sdk.md).
- Para variacoes por UF em NFC-e: usar [NFC-e: matriz por UF](./nfce/uf-matrix.md).
- Para restricoes e pre-requisitos de Manifestacao do Destinatario: usar [Manifestacao do Destinatario: capacidades do SDK](./manifestacao-destinatario/capacidades-sdk.md).

## Riscos abertos

- O catalogo geral ainda depende dos dossies existentes como evidencia primaria; uma futura rodada pode separar melhor o que ja e contrato publico do pacote do que ainda e apenas insumo de planejamento.
- A cobertura estadual detalhada da NFC-e ainda depende de pesquisa individual por UF alem de Sao Paulo.
- A Manifestacao do Destinatario possui superficie funcional com acesso restrito por certificado, limitando o detalhamento imediato via pesquisa publica.
- O conjunto atual prioriza superficies publicas e rastreabilidade; manuais e documentos normativos internos ainda precisam ser aprofundados em rodadas posteriores.

## Validacao desta rodada

- Os artefatos esperados em `docs/` foram gerados.
- As secoes de fontes primarias, fontes secundarias e lacunas estao presentes nos dossies principais.
- A matriz NFC-e registra as 27 UFs com status inicial e lacunas explicitas.
- Nenhum catalogo estruturado adicional em JSON, YAML ou formato equivalente foi introduzido nesta fase.

## Navegacao recomendada

1. Comecar pelo [catalogo geral de capacidades](./capacidades-sdk.md) para avaliar adocao e lacunas.
2. Consultar o dossie principal do tema para detalhes operacionais.
3. Consultar o [registro de fontes](./_meta/source-registry.md) para rastreabilidade.
4. Usar a [matriz NFC-e por UF](./nfce/uf-matrix.md) quando houver dependencia estadual.
5. Revisar [mudancas recentes](./mudancas-recentes.md) antes de inferir impactos futuros no SDK.