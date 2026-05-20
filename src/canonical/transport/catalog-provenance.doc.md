# src/canonical/transport/catalog-provenance.ts

## Visao geral

Concentra a proveniencia normativa do catalogo de transporte e os placeholders internos que ainda sobrarem para expansoes futuras.

## Responsabilidades

- Evitar duplicacao de fontes do catalogo compartilhado.
- Registrar placeholders residuais apenas quando alguma operacao ainda nao estiver publicada.
- Fornecer notas de proveniencia reutilizaveis para o catalogo e para os testes.

## Entradas e saidas

- Entradas: nenhuma.
- Saidas: fontes oficiais e placeholders internos de servico.

## Fluxo principal

```mermaid
flowchart TD
  A[service-catalog.ts] --> B[catalog-provenance.ts]
  A --> C[Fontes oficiais]
  B --> D[Placeholders operacionais]
```

## Tratamento de erros e casos-limite

- O modulo nao faz IO nem resolve endpoints.
- Quando todos os servicos planejados de uma fase ja estao publicados, a lista de placeholders pode ficar vazia sem alterar a proveniencia das entradas reais.
- O slice `015` adiciona proveniencia dedicada para `nfce-authorization-pr`, registrando que `PR` reaproveita o endpoint homologado compartilhado enquanto deltas auxiliares estaduais permanecem fora do runtime.
- O slice `016` adiciona placeholders diagnosticos de contingencia para `SVC-AN` e `SVC-RS`, preservando `EPEC` e `offline` como trilhas normativas ainda deferidas.

## Exemplos

```ts
import { getOperationalTransportCatalogPlaceholders } from './catalog-provenance.js';
```

## Dependencias e integracoes

- `service-catalog.ts`
- `supported-services.ts`
- `specs/006-add-soap-transport/research.md`
- `specs/007-nfe-operational-mvp/research.md`
- `specs/015-nfce-uf-promotion/research.md`