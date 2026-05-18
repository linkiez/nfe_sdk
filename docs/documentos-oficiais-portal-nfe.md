# Documentos Oficiais Convertidos do Portal Nacional da NF-e

## Escopo

Esta pagina integra ao conjunto `docs/` os documentos vigentes expostos no submenu oficial `Documentos` do Portal Nacional da NF-e, ja curados em forma editorial para uso interno.

- Origem oficial: `https://www.nfe.fazenda.gov.br/portal/listaSubMenu.aspx?Id=04BIflQt1aY=`
- Base interna consolidada: capturas oficiais, conversoes Markdown e extrações de ZIP internalizadas no repositorio.

## Atualizacao

Para atualizar o acervo local e a conversao Markdown:

```bash
npm run download:official-docs
npm run convert:official-docs
```

## Integracao local

- [Cobertura oficial de notas fiscais](./notas-fiscais/index.md)
- [Registro de fontes](./_meta/source-registry.md)
- [Manifesto de download oficial](./_meta/official-download-manifest.json)
- [Manifesto de conversao Markdown](./_meta/official-conversion-manifest.json)

## Estado atual

- O crawler ja inclui o submenu `Documentos` como seed oficial do Portal Nacional.
- Os artefatos vinculados a esse submenu ja foram internalizados e consolidados no repositorio.
- A conversao para Markdown gerou `505` arquivos com sucesso e registrou `4` falhas rastreaveis no manifesto de conversao.
- O material extraido de ZIP tambem foi incorporado a essa base consolidada quando agregou leitura navegavel.

## Cobertura por categoria

- `Manuais`: MOC, anexos, manuais de NFGas, NF-e ABI, NFAg e outros itens vigentes publicados pelo portal.
- `Esquemas XML`: pacotes de liberacao vigentes para NF-e, NFC-e, NFGas, NFAg e eventos complementares.
- `Notas Tecnicas`: lista vigente consolidada no portal, incluindo NTs publicadas em 2025 e 2026.
- `Informes Tecnicos`: informes vigentes sobre tabelas, meios de pagamento, combustiveis, CBS e QR Code.
- `Diversos`: tabelas vigentes auxiliares publicadas no portal nacional.

### Exemplos absorvidos na camada editorial

- `Manuais`: MOC 7.0, seus anexos estruturais, contingencia NF-e e NFC-e, DANFE NFC-e e QR Code, boas praticas de emissor, SVAN, Sefaz Virtual RS, emissor legado e familias paralelas de `NFGas`, `NF-e ABI` e `NFAg`.
- `Esquemas XML`: pacote `010c` de NF-e/NFC-e, RTC, NFGas `1.00e`, NFAg `1.00j` e eventos como conciliacao financeira, insucesso na entrega, carta de correcao, EPEC, cancelamento e manifesta destinatario.
- `Notas Tecnicas`: CNPJ alfanumerico, RTC, Manifestacao do Destinatario, GTIN, comprovante de entrega, ECONF, insucesso na entrega e produtor rural em NFC-e.
- `Informes Tecnicos`: CBS, meios de pagamento, combustiveis, NCM, FCP, QR Code por UF, municipios e ANP.
- `Diversos`: cadeias de certificados, tabelas de CFOP, cBenef, paises, GS1, unidades de medida e listas auxiliares de servicos.

## Sintese editorial absorvida

- A pagina [Cobertura nacional](./notas-fiscais/cobertura-nacional.md) absorve a estrutura publica de servicos, FAQ e divisao institucional do portal.
- A pagina [Manuais e esquemas](./notas-fiscais/manuais-e-esquemas.md) absorve o MOC, anexos, contingencia, QR Code, boas praticas e esquemas.
- A mesma pagina tambem organiza familias documentais paralelas, como `NFGas`, `NF-e ABI` e `NFAg`, alem de agrupar os esquemas por trilha funcional.
- A pagina [Notas tecnicas e informes](./notas-fiscais/notas-tecnicas-e-informes.md) absorve a camada de mudancas, tabelas auxiliares e impactos recorrentes.
- A pagina [Cobertura estadual](./notas-fiscais/cobertura-estadual.md) absorve o complemento operacional por UF ja consolidado.

## Falhas abertas de conversao

As seguintes origens produziram Markdown vazio e seguem registradas como falha em `docs/_meta/official-conversion-manifest.json`:

- `nfe.sefaz.ce.gov.br`
- `nfe.sefaz.se.gov.br`
- `www.fazenda.rj.gov.br/portal-fazenda`
- `www.sefaz.ap.gov.br`

## Observacoes

- Esta integracao privilegia a rastreabilidade: o Markdown convertido permanece associado ao HTML/PDF original correspondente.
- Os documentos listados nas paginas convertidas ainda refletem a classificacao oficial do Portal Nacional da NF-e, nao uma reorganizacao editorial do repositorio.