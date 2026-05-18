# Pesquisa e Consolidacao de Documentacao SEFAZ

## Escopo

Este conjunto documental consolida referencias oficiais e complementares necessarias para o planejamento do SDK de NFe, NFC-e e Manifestacao do Destinatario. A navegacao abaixo foi reorganizada por camada para separar entrada de adocao, dossies de dominio, planejamento e base oficial consolidada.

## Como navegar

1. Comecar pelo [catalogo geral de capacidades](./capacidades-sdk.md) para entender cobertura, estado e lacunas sem entrar ainda em detalhe tematico.
2. Entrar no [indice de NFe](./nfe/index.md), [indice de NFC-e](./nfce/index.md) ou [indice de Manifestacao do Destinatario](./manifestacao-destinatario/index.md) quando houver necessidade de aprofundamento por dominio.
3. Consultar [mudancas recentes](./mudancas-recentes.md) e [roadmap de implantacao](./roadmap-implantacao.md) para conectar o estado documental ao backlog de evolucao.
4. Descer para [registro de fontes](./_meta/source-registry.md) e [documentos oficiais convertidos](./documentos-oficiais-portal-nfe.md) quando for necessario auditar proveniencia, base normativa e cobertura consolidada.

## Estrutura hierarquica

### Camada 1 - Entrada de adocao

- [Catalogo geral de capacidades do SDK](./capacidades-sdk.md)

### Camada 2 - Dossies de dominio

- [Cobertura oficial de notas fiscais](./notas-fiscais/index.md)
- [NFe](./nfe/index.md)
- [NFC-e](./nfce/index.md)
- [Manifestacao do Destinatario](./manifestacao-destinatario/index.md)

### Camada 3 - Planejamento e impacto

- [Mudancas recentes](./mudancas-recentes.md)
- [Roadmap de implantacao do SDK](./roadmap-implantacao.md)

### Camada 4 - Fontes e acervo

- [Registro de fontes](./_meta/source-registry.md)
- [Fluxo controlado com MarkItDown](./markitdown-workflow.md)
- [Documentos oficiais convertidos do Portal Nacional da NF-e](./documentos-oficiais-portal-nfe.md)

## Politica de fontes

- Priorizar fontes primarias oficiais.
- Separar explicitamente fontes secundarias quando forem necessarias.
- Registrar restricoes de acesso, paginas com certificado e lacunas conhecidas.

## Estado consolidado

- Estrutura inicial criada para suportar a pesquisa e a consolidacao dos dossies.
- Catalogo geral de capacidades do SDK consolidado como ponto de entrada orientado a adocao e backlog.
- Dossies de dominio enxugados para evitar repeticao da mesma taxonomia, compatibilidade e contexto operacional transversal.
- Registro central de fontes iniciado com referencias nacionais e com complemento estadual de Sao Paulo.

## Cobertura por camada

- Entrada de adocao: catalogo unico com estado, impacto e lacunas.
- Dominio: dossies de NFe, NFC-e e Manifestacao do Destinatario com tabelas de capacidades e leituras relacionadas.
- Planejamento: mudancas recentes e roadmap.
- Auditoria: registro de fontes, workflow de conversao e acervo capturado.

## Mapa de leitura

| Camada | Artefato principal | Funcao |
| --- | --- | --- |
| Adocao | [Capacidades do SDK](./capacidades-sdk.md) | Resumir cobertura, impacto e lacunas do projeto |
| Dominio | [Cobertura oficial de notas fiscais](./notas-fiscais/index.md), [NFe](./nfe/index.md), [NFC-e](./nfce/index.md), [Manifestacao](./manifestacao-destinatario/index.md) | Aprofundar requisitos e recortes por fluxo fiscal |
| Planejamento | [Mudancas recentes](./mudancas-recentes.md), [Roadmap](./roadmap-implantacao.md) | Organizar deltas e direcao de implantacao |
| Auditoria | [Registro de fontes](./_meta/source-registry.md), [Documentos oficiais convertidos](./documentos-oficiais-portal-nfe.md) | Validar origem, consolidacao e rastreabilidade |

## Pesquisa atual

- Data-base desta rodada: 2026-05-16.
- Fontes primarias iniciais: Portal Nacional da NF-e, FAQ nacional e superficies publicas da SEFAZ/SP.
- Fonte secundaria ativa: `SRC-SEC-001` (`/home/linkiez/Projetos/node-dfe`) como apoio tecnico complementar para NFe e NFC-e.
- Restricoes confirmadas: a funcionalidade especifica de Manifestacao do Destinatario exige certificado digital para acesso direto.
- Proximo aprofundamento necessario: artefatos normativos detalhados, paginas estaduais por UF e consolidacao de mudancas recentes.

## Atalhos de leitura

- Para decidir adocao do pacote: comecar pelo [Catalogo geral de capacidades do SDK](./capacidades-sdk.md).
- Para obter cobertura oficial transversal por fonte convertida: usar [Cobertura oficial de notas fiscais](./notas-fiscais/index.md).
- Para aprofundar NFe: usar [indice de NFe](./nfe/index.md).
- Para aprofundar NFC-e: usar [indice de NFC-e](./nfce/index.md).
- Para variacoes por UF em NFC-e: usar [NFC-e: matriz por UF](./nfce/uf-matrix.md).
- Para restricoes e pre-requisitos de Manifestacao do Destinatario: usar [indice do dominio](./manifestacao-destinatario/index.md).
- Para validar evidencia e proveniencia: seguir para [Registro de fontes](./_meta/source-registry.md).

## Riscos abertos

- O catalogo geral ainda depende dos dossies existentes como evidencia primaria; uma futura rodada pode separar melhor o que ja e contrato publico do pacote do que ainda e apenas insumo de planejamento.
- A cobertura estadual detalhada da NFC-e ainda depende de pesquisa individual por UF alem de Sao Paulo.
- A Manifestacao do Destinatario possui superficie funcional com acesso restrito por certificado, limitando o detalhamento imediato via pesquisa publica.
- O conjunto atual prioriza superficies publicas e rastreabilidade; manuais e documentos normativos internos ainda precisam ser aprofundados em rodadas posteriores.

## Validacao desta rodada

- Os artefatos esperados em `docs/` foram gerados.
- Os dossies principais agora delegam taxonomia e compatibilidade ao catalogo geral e preservam apenas o contexto especifico do dominio.
- A matriz NFC-e registra as 27 UFs com status inicial e lacunas explicitas.
- Nenhum catalogo estruturado adicional em JSON, YAML ou formato equivalente foi introduzido nesta fase.