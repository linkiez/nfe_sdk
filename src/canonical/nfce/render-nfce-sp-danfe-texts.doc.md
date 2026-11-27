# render-nfce-sp-danfe-texts

## Visão geral

Textos fixos e formatos impressos em todo DANFE NFC-e de SP, compartilhados pelo HTML e pelo PDF para que os dois imprimam exatamente os mesmos avisos legais.

## Responsabilidades

- `homologationNotice`: "EMITIDA EM AMBIENTE DE HOMOLOGAÇÃO – SEM VALOR FISCAL".
- `unidentifiedConsumerNotice`: "CONSUMIDOR NÃO IDENTIFICADO" (MOC DANFE NFC-e, bloco VI).
- `title`: titulo do documento auxiliar.
- `formatAccessKey`: chave de acesso em grupos de quatro digitos.

## Entradas e saídas

Objeto constante; `formatAccessKey(chave)` devolve o texto formatado.

## Fluxo principal

Importado por [render-nfce-sp-danfe-html](render-nfce-sp-danfe-html.ts) e [render-nfce-sp-danfe-pdf-layout](render-nfce-sp-danfe-pdf-layout.ts).

## Tratamento de erros e casos-limite

Chave fora do padrao e devolvida sem formatacao.

## Exemplos

```ts
danfeTexts.formatAccessKey('35260512345678000123650020000004561876543219');
// '3526 0512 3456 7800 0123 6500 2000 0004 5618 7654 3219'
```

## Dependências e integrações

Nenhuma.
