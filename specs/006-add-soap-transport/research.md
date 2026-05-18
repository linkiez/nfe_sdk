# Research: Add SOAP Transport

## Decision 1: Introduzir o transporte como ampliacao aditiva no import raiz

- **Decision**: A primeira entrega de transporte entrara no import raiz do pacote como duas operacoes publicas additive: `resolveNFeServiceEndpoint` para resolucao de catalogo e `executeNFeSoapService` para execucao da chamada SOAP suportada.
- **Rationale**: Isso preserva o contrato pequeno da fase anterior, mantem a ergonomia do SDK centrada no import raiz e separa claramente resolucao de endpoint de execucao de transporte sem promover subpaths cedo demais.
- **Alternatives considered**:
  - Expor apenas uma funcao monolitica que resolve endpoint e executa transporte sem fronteira de catalogo: rejeitado porque enfraquece a testabilidade do catalogo e contraria a user story 2.
  - Expor subpaths dedicados para a camada de transporte: rejeitado porque amplia cedo demais o contrato publicado.

## Decision 2: Montar SOAP 1.2 manualmente, sem cliente WSDL em runtime

- **Decision**: O slice inicial montara envelopes SOAP 1.2 `Document/Literal` de forma manual e deterministica, com body controlado pelo SDK e sem depender de geracao de cliente WSDL em runtime.
- **Rationale**: O MOC 7.0 ja documenta o formato SOAP 1.2 e, para NF-e 4.00, explicita que a area de header SOAP deixa de ser obrigatoria. Para dois servicos suportados, um envelope handwritten e mais previsivel, testavel e barato do que introduzir uma pilha WSDL completa.
- **Alternatives considered**:
  - Adotar uma biblioteca SOAP/WSDL generica: rejeitado porque adiciona acoplamento, custo de manutencao e surface area desnecessarios para um slice pequeno.
  - Exigir que o consumidor monte o envelope manualmente: rejeitado porque viola a proposta central desta feature.

## Decision 3: Usar um executor de transporte injetavel sobre `fetch` nativo

- **Decision**: O contrato publico aceitara um `requestExecutor` opcional, com implementacao padrao baseada em `fetch` e `AbortController` do Node.js 18, deixando mTLS, proxy e configuracao de rede especializada fora do contrato principal.
- **Rationale**: A spec ja assume que credenciais e precondicoes externas podem ser fornecidas por configuracao externa ao SDK. Um executor injetavel preserva esse limite, simplifica testes deterministas e evita que o pacote precise assumir desde ja o ciclo completo de certificados de transporte.
- **Alternatives considered**:
  - Expor `https.Agent` ou `undici` dispatcher como contrato principal: rejeitado porque acopla a API publica a um detalhe de runtime e de secrets management.
  - Adicionar dependencia HTTP ou SOAP externa so para o transporte inicial: rejeitado porque o baseline de Node 18 ja cobre o necessario.

## Decision 4: Fixar o catalogo inicial em endpoints compartilhados da SVAN para homologacao

- **Decision**: O catalogo inicial sera versionado e handwritten, cobrindo apenas homologacao e apenas os servicos `nfe-status-service` e `nfe-authorization`, ambos resolvidos para endpoints compartilhados da SVAN.
- **Rationale**: O usuario restringiu a feature a endpoints nacionais compartilhados e o contrato da spec ainda nao possui dimensao explicita de autorizador. Escolher a SVAN como baseline do primeiro slice preserva a unicidade da resolucao por combinacao suportada e fica alinhado ao papel de Ambiente Nacional na documentacao oficial.
- **Alternatives considered**:
  - Incluir SVRS simultaneamente: rejeitado porque a mesma combinacao passaria a ter mais de uma rota valida e exigiria nova dimensao publica de selecao de autorizador.
  - Incluir endpoints por UF desde o inicio: rejeitado pela clarificacao de escopo.

## Decision 5: Classificar resultados por sinais de transporte e por um mapeamento minimo de `cStat`

- **Decision**: O `TransportOutcome` distinguira `success`, `usage-error`, `timeout`, `unavailable`, `functional-rejection` e `protocol-error`, usando sinais locais de transporte combinados com um mapeamento minimo de `cStat` oficial para os servicos suportados.
- **Rationale**: O MOC 7.0 ja ancora `107` como servico em operacao, `108/109` como indisponibilidade e `103/104` como estados positivos do fluxo de autorizacao. Isso permite uma taxonomia inicial util sem transformar a camada de transporte em interpretador completo de regras fiscais.
- **Alternatives considered**:
  - Tratar todo `cStat` nao positivo como erro generico: rejeitado porque dilui a diferenca entre rejeicao funcional e indisponibilidade.
  - Embutir toda a semantica de negocio da autorizacao nesta fase: rejeitado porque viola a separacao entre transporte e dominio.

## Decision 6: Preservar a evidencia crua da troca no resultado estruturado

- **Decision**: O resultado publico carregara endpoint selecionado, provider, payload SOAP montado, payload SOAP recebido quando houver, status HTTP observavel, duracao e os campos aplicacionais minimos extraidos para classificacao.
- **Rationale**: A spec pede diagnostico sem parsing manual de XML cru pelo consumidor. Preservar a evidencia no retorno elimina a necessidade de inspecoes paralelas e sustenta regressao automatizada com fixtures de request e response.
- **Alternatives considered**:
  - Expor apenas classificacao e endpoint: rejeitado porque nao entrega diagnostico suficiente para timeout, resposta invalida ou rejeicao funcional.
  - Expor apenas DOM parseado: rejeitado porque dificulta auditoria e smoke do pacote.

## Decision 7: Validar o slice por contrato root, fixtures SOAP e smoke do pacote

- **Decision**: A evidencia minima da feature combinara testes de contrato do import raiz, fixtures de request e response SOAP para os dois servicos suportados, regressao de catalogo e validacao final do pacote publicado.
- **Rationale**: O slice muda o contrato publico e introduz um protocolo de integracao sensivel. A validacao precisa provar tanto a ergonomia do import raiz quanto a corretude do envelope, da classificacao e da publicacao do pacote.
- **Alternatives considered**:
  - Confiar apenas em testes unitarios do parser e do catalogo: rejeitado porque nao prova o fluxo publico completo.
  - Exigir homologacao real contra autorizador nesta fase: rejeitado porque adiciona dependencia operacional e credenciais fora do escopo do slice inicial.