# Research: Generic Event MVP

## Decision 1: Expor uma única facade root para submissão genérica de eventos

- **Decision**: O slice publicará uma única operação additive no import raiz, proposta aqui como `submitGenericEvents`, em vez de novas facades separadas para cada família de evento incluída no MVP.
- **Rationale**: A fonte oficial descreve um único Web Service genérico de eventos e a spec pede explicitamente uma facade única para reduzir montagem manual de `envEvento`. Isso mantém a superfície pública pequena e coerente com o serviço normativo subjacente.
- **Alternatives considered**:
  - Criar uma facade por família suportada: rejeitado porque replicaria o problema que o slice quer resolver.
  - Reutilizar `manifestRecipientOperation` como porta de entrada genérica: rejeitado porque essa operação já tem semântica própria do slice 008 e não cobre as novas famílias.

## Decision 2: Reutilizar o serviço nacional síncrono `NFeRecepcaoEvento` como eixo técnico do MVP

- **Decision**: A implementação deve partir do envelope oficial `envEvento` e do retorno `retEnvEvento`, assumindo o Web Service nacional e síncrono como transporte normativo desta feature.
- **Rationale**: O MOC ABI internalizado explicita um único serviço genérico, processamento síncrono e retorno estruturado por lote e por item. Isso sustenta um contrato público batch-first com rastreabilidade individual sem inventar uma segunda taxonomia de processamento.
- **Alternatives considered**:
  - Tratar cada família como um fluxo de transporte independente: rejeitado porque conflita com a modelagem oficial comum.
  - Transformar o slice em uma API assíncrona de polling: rejeitado porque não reflete o comportamento descrito pelas fontes primárias deste serviço.

## Decision 3: Tornar o lote atômico antes do transporte

- **Decision**: O SDK deve rejeitar integralmente o lote antes do transporte quando houver mais de 20 eventos, qualquer família fora do recorte publicado ou qualquer falha de validação local obrigatória.
- **Rationale**: O limite de 20 eventos é normativo e as clarificações já aceitas para a spec convergem para rejeição integral em caso de erro local. Isso separa claramente erro de uso local de rejeição funcional remota, evita chamadas sabidamente inválidas e simplifica o contrato do MVP.
- **Alternatives considered**:
  - Fragmentar automaticamente o lote: rejeitado porque introduz comportamento implícito que ainda não foi pedido nem documentado pelo recorte atual.
  - Filtrar apenas os itens inválidos e enviar o restante: rejeitado porque cria um contrato híbrido e menos previsível para o primeiro MVP.

## Decision 4: Limitar o escopo a quatro famílias transversais e manter EPEC fora do MVP

- **Decision**: A fase cobre comprovante de entrega (`110130`), ator interessado na NF-e - transportador (`110150`), insucesso na entrega (`110192`) e conciliação financeira - ECONF (`110750`), mantendo EPEC e demais fluxos excepcionais fora da nova facade.
- **Rationale**: Essas quatro famílias já estão presentes nas fontes oficiais internalizadas e oferecem valor transversal sem misturar contingência, exceções regionais ou facades já especializadas. EPEC aparece nas mesmas fontes como fluxo próprio e, portanto, deve continuar explicitamente fora deste recorte inicial.
- **Alternatives considered**:
  - Incluir EPEC no mesmo MVP: rejeitado porque mistura contingência com o fluxo genérico principal.
  - Começar com apenas uma ou duas famílias: rejeitado porque reduziria em excesso o ganho do slice perante a abstração genérica proposta no roadmap.

## Decision 5: Reutilizar a infraestrutura manual existente e criar uma nova camada dedicada em `src/canonical/generic-event/`

- **Decision**: O comportamento novo ficará em uma camada manual dedicada, com wrappers públicos em `src/canonical/facade/`, reuso das camadas de assinatura e transporte e leitura da árvore gerada apenas como inventário normativo.
- **Rationale**: O repositório já separa facades, recipient, nfe, signing e transport. Adicionar `src/canonical/generic-event/` preserva fronteiras de ownership, reduz risco de regressão nos slices anteriores e mantém a árvore gerada fora da superfície operacional primária.
- **Alternatives considered**:
  - Implementar tudo dentro de `src/canonical/facade/`: rejeitado porque comprimiria validação, mapeamento e transporte em um único ponto.
  - Espalhar cada família em `src/canonical/nfe/`: rejeitado porque o recorte é transversal e não se encaixa bem em operações NF-e já dedicadas.

## Decision 6: Modelar o contrato público por lote e por item, mas manter a validação local como erro de uso separado

- **Decision**: O resultado público deve conter um outcome agregado do lote e outcomes individuais por item apenas quando a operação for efetivamente enviada; erros de validação local devem produzir falha do lote antes do transporte, sem simular resultados remotos por item.
- **Rationale**: Isso preserva a distinção entre erro do consumidor e resposta do autorizador, alinhando-se ao requisito da spec de não colapsar estados operacionais em um único resultado ambíguo.
- **Alternatives considered**:
  - Sempre devolver resultados por item, inclusive para validação local: rejeitado porque mistura erro local com processamento remoto.
  - Devolver apenas outcome agregado do lote: rejeitado porque perderia a rastreabilidade exigida para lotes heterogêneos.

## Decision 7: Usar fixtures e exemplos por família, mais um lote heterogêneo como baseline de validação

- **Decision**: O plano assume fixtures e exemplos executáveis separados para cada família suportada e pelo menos um lote misto, além de testes de contrato, unidade e integração focados no import raiz e na nova taxonomia de outcomes.
- **Rationale**: A constituição exige testes focados em contrato público e fixtures representativos sempre que o pacote amplia sua superfície operacional. Como a feature cruza múltiplas famílias, o lote heterogêneo é parte do comportamento principal, não um caso periférico.
- **Alternatives considered**:
  - Validar apenas com um exemplo unitário por família: rejeitado porque não cobre o principal ganho do slice, que é a abstração por lote.
  - Confiar somente em smoke do tarball: rejeitado porque o contrato batch-first precisa de validação mais específica.

## Implementation evidence

- O contrato root atual já publica facades operacionais additive para autorização, manutenção NF-e e fluxo do destinatário, o que sustenta a introdução de uma nova facade root para eventos genéricos.
- `src/canonical/recipient/` e `src/canonical/nfe/` já mostram o padrão esperado de wrapper público sobre camada manual dedicada, com tipagem e outcomes separados do transporte.
- O repositório já mantém as famílias de schema necessárias no inventário gerado e nas fontes internalizadas, sem depender de nova coleta normativa para este primeiro recorte de implementação.

## Provenance notes after implementation

- O serviço técnico usado pelo slice implementado foi consolidado como `nfe-generic-event`, reaproveitando o endpoint nacional `RecepcaoEvento4` no mesmo catálogo homologado do transporte existente.
- As quatro famílias implementadas no código e nas fixtures permanecem alinhadas às fontes internalizadas: `110130`, `110150`, `110192` e `110750`.
- O comportamento batch-first implementado preserva correlação posicional por item e mantém rejeição integral pre-transport para limite acima de 20 eventos, família fora de escopo e falha local obrigatória.
