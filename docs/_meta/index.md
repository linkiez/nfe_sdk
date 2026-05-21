# Indice de Metadados e Governanca

## Papel desta pasta

`docs/_meta/` concentra manifestos, rastreabilidade de fontes, processos de curadoria e watchlists de continuidade. Esta pasta separa governanca do acervo da leitura editorial principal e evita que manifestos tecnicos se misturem com o roadmap.

## Como navegar

1. Abrir [source-registry](./source-registry.md) quando a necessidade for auditar proveniencia, classificacao de fontes e relacao com a documentacao consolidada.
2. Consultar os manifestos JSON quando for preciso rastrear downloads ou conversoes automatizadas.
3. Usar processos e watchlists desta pasta para manutencao do acervo, nao como backlog funcional do SDK.

## Conteudo principal

- [source-registry](./source-registry.md): registro canonico de proveniencia e lastro documental.
- [nt-tracking-process](./nt-tracking-process.md): processo operacional para absorver novas notas tecnicas e deltas normativos.
- [official-download-manifest.json](./official-download-manifest.json): manifesto de downloads oficiais capturados.
- [official-conversion-manifest.json](./official-conversion-manifest.json): manifesto de conversao para Markdown.

## Watchlists

Os arquivos sob `watchlist/` registram lacunas e trilhas de observacao que ainda nao foram absorvidas por uma spec ou por um anexo canonicamente consolidado no roadmap.

## Regra pratica de organizacao

- Metadados de captura, manifests, inventarios tecnicos e processos de curadoria ficam aqui.
- Documentos voltados a leitura humana de planejamento devem ir para [../roadmap/index.md](../roadmap/index.md) ou para a raiz de `docs/` quando forem pontos de entrada.
- Acervo bruto, convertido ou extraido continua em [../\_sources/index.md](../_sources/index.md).
