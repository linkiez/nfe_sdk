# Pesquisa e Consolidacao de Documentacao SEFAZ

## Escopo

Este conjunto documental consolida referencias oficiais e complementares necessarias para o planejamento do SDK de NFe, NFC-e e Manifestacao do Destinatario. O foco desta feature e registrar o estado efetivo atual, mudancas recentes relevantes e impactos futuros no SDK sem alterar a superficie publicada do pacote.

## Entregaveis

- [NFe: emissao](./nfe/emissao-nfe.md)
- [NFe: capacidades do SDK](./nfe/capacidades-sdk.md)
- [NFC-e: emissao nacional](./nfce/emissao-nfce.md)
- [NFC-e: capacidades do SDK](./nfce/capacidades-sdk.md)
- [Manifestacao do Destinatario: visao geral](./manifestacao-destinatario/visao-geral.md)
- [Manifestacao do Destinatario: capacidades do SDK](./manifestacao-destinatario/capacidades-sdk.md)
- [NFC-e: matriz por UF](./nfce/uf-matrix.md)
- [Mudancas recentes](./mudancas-recentes.md)
- [Registro de fontes](./_meta/source-registry.md)
- [Fluxo controlado com MarkItDown](./markitdown-workflow.md)

## Politica de fontes

- Priorizar fontes primarias oficiais.
- Separar explicitamente fontes secundarias quando forem necessarias.
- Registrar restricoes de acesso, paginas com certificado e lacunas conhecidas.

## Status atual

- Estrutura inicial criada para suportar a pesquisa e a consolidacao dos dossies.
- Dossies iniciais de NFe, NFC-e e Manifestacao do Destinatario agora registram o estado efetivo atual observavel por fontes publicas oficiais em 2026-05-16.
- Registro central de fontes iniciado com referencias nacionais e com complemento estadual de Sao Paulo.

## Cobertura prevista

- NFe: fluxo de emissao, requisitos e mudancas recentes.
- NFC-e: fluxo nacional, regras compartilhadas e matriz completa das 27 UFs.
- Manifestacao do Destinatario: eventos, pre-requisitos e riscos conhecidos.

## Resumo de cobertura

| Area | Artefato principal | Status | Observacoes |
| --- | --- | --- | --- |
| NFe | [Emissao de NFe](./nfe/emissao-nfe.md) | in-progress | Superficie publica oficial consolidada com fontes nacionais e complemento SP |
| NFe - capacidades | [Capacidades do SDK](./nfe/capacidades-sdk.md) | in-progress | Primeira lista de capacidades e validacoes derivadas das fontes oficiais |
| NFC-e nacional | [Emissao de NFC-e](./nfce/emissao-nfce.md) | in-progress | Regras nacionais resumidas; falta preenchimento detalhado por UF |
| NFC-e - capacidades | [Capacidades do SDK](./nfce/capacidades-sdk.md) | in-progress | Requisitos compartilhados e sensiveis a UF consolidados inicialmente |
| Manifestacao do Destinatario | [Visao geral](./manifestacao-destinatario/visao-geral.md) | in-progress | Tema confirmado por fonte oficial; detalhe operacional segue limitado por acesso restrito |
| Manifestacao - capacidades | [Capacidades do SDK](./manifestacao-destinatario/capacidades-sdk.md) | in-progress | Capacidades iniciais consolidadas com restricao publica explicitada |
| NFC-e por UF | [Matriz por UF](./nfce/uf-matrix.md) | in-progress | Todas as 27 UFs possuem status inicial e lacunas explicitas |
| Mudancas recentes | [Mudancas recentes](./mudancas-recentes.md) | in-progress | Primeira rodada de deltas relevantes consolidada |

## Pesquisa atual

- Data-base desta rodada: 2026-05-16.
- Fontes primarias iniciais: Portal Nacional da NF-e, FAQ nacional e superficies publicas da SEFAZ/SP.
- Fonte secundaria ativa: `SRC-SEC-001` (`/home/linkiez/Projetos/node-dfe`) como apoio tecnico complementar para NFe e NFC-e.
- Restricoes confirmadas: a funcionalidade especifica de Manifestacao do Destinatario exige certificado digital para acesso direto.
- Proximo aprofundamento necessario: artefatos normativos detalhados, paginas estaduais por UF e consolidacao de mudancas recentes.

## Inventario de uso no repositorio

- Dossies de estado atual: NFe, NFC-e e Manifestacao do Destinatario.
- Dossies de requisitos: capacidades do SDK por dominio.
- Artefatos de apoio: registro de fontes, matriz por UF, mudancas recentes e fluxo de conversao com MarkItDown.

## Riscos abertos

- A cobertura estadual detalhada da NFC-e ainda depende de pesquisa individual por UF alem de Sao Paulo.
- A Manifestacao do Destinatario possui superficie funcional com acesso restrito por certificado, limitando o detalhamento imediato via pesquisa publica.
- O conjunto atual prioriza superficies publicas e rastreabilidade; manuais e documentos normativos internos ainda precisam ser aprofundados em rodadas posteriores.

## Validacao desta rodada

- Os artefatos esperados em `docs/` foram gerados.
- As secoes de fontes primarias, fontes secundarias e lacunas estao presentes nos dossies principais.
- A matriz NFC-e registra as 27 UFs com status inicial e lacunas explicitas.

## Navegacao recomendada

1. Comecar pelo dossie principal do tema.
2. Consultar o [registro de fontes](./_meta/source-registry.md) para rastreabilidade.
3. Usar a [matriz NFC-e por UF](./nfce/uf-matrix.md) quando houver dependencia estadual.
4. Revisar [mudancas recentes](./mudancas-recentes.md) antes de inferir impactos futuros no SDK.