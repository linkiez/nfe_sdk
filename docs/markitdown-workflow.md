# Fluxo Controlado com MarkItDown

## Objetivo

Definir um processo reproduzivel para converter materiais confiaveis em Markdown sem perder rastreabilidade da origem.

## Principios

- Converter apenas arquivos locais ou streams previamente validados.
- Manter o artefato original associado ao Markdown convertido.
- Evitar uso de URLs remotas permissivas diretamente na etapa de conversao.

## Tratamento de fontes

- Fontes primarias oficiais devem ser identificadas antes da conversao e mantidas separadas de qualquer material secundario.
- Fontes secundarias so entram quando a fonte primaria for insuficiente ou inacessivel, e devem ser marcadas como suplemento.
- Restricoes de acesso, exigencia de certificado e falhas de extração devem ser registradas no `docs/_meta/source-registry.md`.

## Passos recomendados

1. Coletar a fonte oficial ou suplementar permitida.
2. Armazenar o artefato original de forma rastreavel.
3. Executar a conversao com MarkItDown em ambiente isolado.
4. Revisar o resultado para remover ruido e manter o contexto normativo.
5. Registrar a fonte convertida no registro central.

## Exemplo

```bash
npm run download:official-docs
markitdown local-source-file.pdf -o converted-source.md
```

## Observacoes

- Paginas com certificado, instabilidade ou bloqueio devem ser registradas como lacunas conhecidas.
- Se a fonte for HTML ou PDF, o Markdown final deve permanecer rastreavel ao artefato original.
- O uso do MarkItDown nao substitui a curadoria normativa: sempre revisar o resultado convertido antes de promover o conteudo para um dossie final.
- O snapshot oficial automatizado e salvo em `docs/_sources/official/`, com manifesto em `docs/_meta/official-download-manifest.json`.
- O acervo navegavel derivado dessas capturas fica publicado em `docs/_sources/markdown/official/` e indexado em `docs/_sources/index.md`.