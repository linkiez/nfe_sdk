# Documentos Oficiais Convertidos do Portal Nacional da NF-e

## Escopo

Esta pagina integra ao conjunto `docs/` os documentos vigentes expostos no submenu oficial `Documentos` do Portal Nacional da NF-e.

- Origem oficial: `https://www.nfe.fazenda.gov.br/portal/listaSubMenu.aspx?Id=04BIflQt1aY=`
- Snapshot HTML/PDF original: `docs/_sources/official/`
- Conversao Markdown rastreavel: `docs/_sources/markdown/official/`

## Atualizacao

Para atualizar o acervo local e a conversao Markdown:

```bash
npm run download:official-docs
npm run convert:official-docs
```

## Integracao local

- [Acervo rastreavel em docs/_sources](./_sources/index.md)
- [Indice do acervo Markdown oficial](./_sources/markdown/official/index.md)
- [Indice do Portal Nacional convertido](./_sources/markdown/official/www.nfe.fazenda.gov.br/portal/index.md)

- [Submenu Documentos convertido](./_sources/markdown/official/www.nfe.fazenda.gov.br/portal/listasubmenu-533e06ea86.md)
- [Manuais convertidos](./_sources/markdown/official/www.nfe.fazenda.gov.br/portal/listaconteudo-af7e16abf3.md)
- [Esquemas XML convertidos](./_sources/markdown/official/www.nfe.fazenda.gov.br/portal/listaconteudo-f0fdfae921.md)
- [Notas Tecnicas convertidas](./_sources/markdown/official/www.nfe.fazenda.gov.br/portal/listaconteudo-b62dcde362.md)
- [Informes Tecnicos convertidos](./_sources/markdown/official/www.nfe.fazenda.gov.br/portal/listaconteudo-ed021ccf1b.md)
- [Diversos convertidos](./_sources/markdown/official/www.nfe.fazenda.gov.br/portal/listaconteudo-d5cb6a5f17.md)
- [Manifesto de download oficial](./_meta/official-download-manifest.json)
- [Manifesto de conversao Markdown](./_meta/official-conversion-manifest.json)

## Estado atual

- O crawler ja inclui o submenu `Documentos` como seed oficial do Portal Nacional.
- Os artefatos HTML e PDF vinculados a esse submenu foram baixados para `docs/_sources/official/`.
- A conversao para Markdown gerou `505` arquivos com sucesso e registrou `4` falhas rastreaveis no manifesto de conversao.
- O material extraido de ZIP que tambem gerou Markdown navegavel agora fica concentrado em `docs/_sources/markdown/official/extracted/`.

## Cobertura por categoria

- `Manuais`: MOC, anexos, manuais de NFGas, NF-e ABI, NFAg e outros itens vigentes publicados pelo portal.
- `Esquemas XML`: pacotes de liberacao vigentes para NF-e, NFC-e, NFGas, NFAg e eventos complementares.
- `Notas Tecnicas`: lista vigente consolidada no portal, incluindo NTs publicadas em 2025 e 2026.
- `Informes Tecnicos`: informes vigentes sobre tabelas, meios de pagamento, combustiveis, CBS e QR Code.
- `Diversos`: tabelas vigentes auxiliares publicadas no portal nacional.

## Falhas abertas de conversao

As seguintes paginas foram baixadas, mas produziram Markdown vazio e seguem registradas como falha em `docs/_meta/official-conversion-manifest.json`:

- `docs/_sources/official/nfe.sefaz.ce.gov.br/index-733613fbbb.html`
- `docs/_sources/official/nfe.sefaz.se.gov.br/index-1e479f1558.html`
- `docs/_sources/official/www.fazenda.rj.gov.br/portal-fazenda/index-60535d484b.html`
- `docs/_sources/official/www.sefaz.ap.gov.br/index-ffd138690a.html`

## Observacoes

- Esta integracao privilegia a rastreabilidade: o Markdown convertido permanece associado ao HTML/PDF original correspondente.
- Os documentos listados nas paginas convertidas ainda refletem a classificacao oficial do Portal Nacional da NF-e, nao uma reorganizacao editorial do repositorio.