# Pesquisa e Consolidacao de Documentacao SEFAZ

## Escopo

Este conjunto documental consolida referencias oficiais e complementares necessarias para o planejamento do SDK de NFe, NFC-e e Manifestacao do Destinatario. A navegacao abaixo foi reorganizada por camada para separar entrada de adocao, dossies de dominio, planejamento e base oficial consolidada.

## Como navegar

1. Comecar pelo [catalogo geral de capacidades](./capacidades-sdk.md) para entender cobertura, estado e lacunas sem entrar ainda em detalhe tematico.
2. Entrar em [topicos oficiais e destino no roadmap](./roadmap/topicos-oficiais.md), [registro de documentos vigentes](./roadmap/portal-documentos-vigentes.md) ou [matriz de UFs e ambientes](./roadmap/ufs-ambientes.md) quando houver necessidade de aprofundamento tematico.
3. Consultar a [matriz de cobertura do SDK](./roadmap/coverage-matrix.md) para conferir o estado do contrato publicado e das lacunas operacionais visiveis.
4. Consultar primeiro o [roadmap de implantacao](./roadmap/ROADMAP.md), que agora concentra fases, temas, estados, ambientes e mudancas recentes em um unico artefato canonico.
5. Tratar o [roadmap de implantacao](./roadmap/ROADMAP.md) como fonte unica de planejamento, inclusive para UFs, ambientes e mudancas recentes.
6. Descer para [proximas iteracoes recomendadas](./roadmap/proximas-iteracoes-recomendadas.md), [registro de fontes](./_meta/source-registry.md) e [documentos oficiais convertidos](./documentos-oficiais-portal-nfe.md) quando for necessario auditar proveniencia, base normativa e cobertura consolidada.

## Estrutura hierarquica

### Camada 1 - Entrada de adocao

- [Catalogo geral de capacidades do SDK](./capacidades-sdk.md)
- [Matriz de cobertura do SDK](./roadmap/coverage-matrix.md)

### Camada 2 - Topicos e leitura operacional

- [Topicos oficiais e destino no roadmap](./roadmap/topicos-oficiais.md)
- [Registro de documentos vigentes do portal nacional](./roadmap/portal-documentos-vigentes.md)
- [Inventario do portal nacional](./roadmap/portal-nacional-inventario.md)
- [UFs e ambientes observaveis](./roadmap/ufs-ambientes.md)

### Camada 3 - Planejamento e impacto

- [Roadmap de implantacao do SDK](./roadmap/ROADMAP.md)
- [Proximas iteracoes recomendadas](./roadmap/proximas-iteracoes-recomendadas.md)

### Camada 4 - Fontes e acervo

- [Registro de fontes](./_meta/source-registry.md)
- [Documentos oficiais convertidos do Portal Nacional da NF-e](./documentos-oficiais-portal-nfe.md)

## Politica de fontes

- Priorizar fontes primarias oficiais.
- Separar explicitamente fontes secundarias quando forem necessarias.
- Registrar restricoes de acesso, paginas com certificado e lacunas conhecidas.

## Estado consolidado

- Estrutura inicial criada para suportar a pesquisa e a consolidacao dos dossies.
- Catalogo geral de capacidades do SDK consolidado como ponto de entrada orientado a adocao e backlog.
- Matriz de cobertura do SDK adicionada para reconciliar contrato publico, evidencia de teste e lacunas oficiais em um unico artefato.
- Dossies de dominio enxugados para evitar repeticao da mesma taxonomia, compatibilidade e contexto operacional transversal.
- Registro central de fontes iniciado com referencias nacionais e com complemento estadual de Sao Paulo.
- Runbook de continuidade em homologacao adicionado para separar tooling operacional de API runtime.

## Cobertura por camada

- Entrada de adocao: catalogo unico com estado, impacto e lacunas.
- Entrada de adocao: matriz de cobertura com status `stable`, `beta`, `backlog` e `fora-do-escopo` para a superficie publicada.
- Dominio: dossies de NFe, NFC-e e Manifestacao do Destinatario com tabelas de capacidades e leituras relacionadas.
- Planejamento: roadmap unico com fases, temas, cobertura por UF, ambientes e watchlist de deltas.
- Planejamento resumido: arquivos derivados para leitura rapida sem duplicar backlog.
- Continuidade: runbook operacional para importacao, exportacao e recuperacao em homologacao.
- Auditoria: registro de fontes, workflow de conversao e acervo capturado.

## Mapa de leitura

| Camada       | Artefato principal                                                                                                                                                    | Funcao                                                      |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Adocao       | [Capacidades do SDK](./capacidades-sdk.md), [Matriz de cobertura](./roadmap/coverage-matrix.md) | Resumir cobertura, impacto, evidencias e lacunas do projeto |
| Dominio      | [Topicos oficiais](./roadmap/topicos-oficiais.md), [Documentos vigentes](./roadmap/portal-documentos-vigentes.md), [UFs e ambientes](./roadmap/ufs-ambientes.md) | Aprofundar requisitos e recortes por tema, documento e estado |
| Planejamento | [Roadmap](./roadmap/ROADMAP.md), [Proximas iteracoes](./roadmap/proximas-iteracoes-recomendadas.md) | Organizar backlog canonico, cobertura por UF, ambientes, deltas recentes e continuidade |
| Auditoria    | [Registro de fontes](./_meta/source-registry.md), [Documentos oficiais convertidos](./documentos-oficiais-portal-nfe.md)                                              | Validar origem, consolidacao e rastreabilidade              |

## Pesquisa atual

- Data-base desta rodada: 2026-05-16.
- Fontes primarias iniciais: Portal Nacional da NF-e, FAQ nacional e superficies publicas da SEFAZ/SP.
- Fonte secundaria ativa: `SRC-SEC-001` (`/home/linkiez/Projetos/node-dfe`) como apoio tecnico complementar para NFe e NFC-e.
- Restricoes confirmadas: a funcionalidade especifica de Manifestacao do Destinatario exige certificado digital para acesso direto.
- Proximo aprofundamento necessario: artefatos normativos detalhados, paginas estaduais por UF e consolidacao de mudancas recentes.

## Atalhos de leitura

- Para decidir adocao do pacote: comecar pelo [Catalogo geral de capacidades do SDK](./capacidades-sdk.md).
- Para decidir adocao do pacote com a superficie publicada atual: abrir tambem a [Matriz de cobertura do SDK](./roadmap/coverage-matrix.md).
- Para obter cobertura oficial transversal por fonte convertida: usar [Topicos oficiais e destino no roadmap](./roadmap/topicos-oficiais.md).
- Para aprofundar documentos vigentes do portal nacional: usar [Registro de documentos vigentes](./roadmap/portal-documentos-vigentes.md).
- Para variacoes por UF e ambientes: comecar pelo [Roadmap](./roadmap/ROADMAP.md) e aprofundar em [UFs e ambientes observaveis](./roadmap/ufs-ambientes.md).
- Para decidir sequencia de trabalho e fechamento documental: seguir para [Proximas iteracoes recomendadas](./roadmap/proximas-iteracoes-recomendadas.md).
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
