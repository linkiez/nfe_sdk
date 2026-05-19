# Roadmap de Implantacao do nfe_sdk

## Objetivo

Definir uma sequencia pragmatica de implantacao para evoluir o repositorio de um gerador de artefatos TypeScript baseado em XSD para um SDK utilizavel de NFe, NFC-e e Manifestacao do Destinatario.

## Estado atual do projeto

- O repositorio ja entrega geracao em lote de artefatos TypeScript a partir de XSD, com saida separada por `classes`, `interfaces`, `types` e `enums`.
- A superficie publicada hoje ainda esta concentrada em artefatos gerados e documentacao; nao existe uma camada operacional fechada para montagem, assinatura, transmissao e acompanhamento de documentos fiscais.
- A base documental e normativa evoluiu bastante e ja permite usar o projeto como fonte rastreavel de requisitos para as proximas fases.
- O acervo oficial consolidado agora nao cobre apenas schemas e manuais centrais; ele tambem preserva memoria operacional de emissao assistida, contingencia, autorizadores virtuais, DANFE, QR Code, consultas auxiliares, importacao e exportacao de XML e rotinas de recuperacao operacional.

## Principios de implantacao

- Priorizar primeiro o contrato publico do pacote antes de ampliar cobertura funcional.
- Separar com clareza o que e capacidade do SDK do que depende de certificado, credenciamento, autorizador e regras por UF.
- Entregar MVPs incrementais por fluxo fiscal, em vez de tentar cobrir NFe, NFC-e e Manifestacao integralmente na mesma fase.
- Manter compatibilidade com ESM, TypeScript estrito e geracao derivada dos XSD como fundamento do pacote.
- Tratar o acervo oficial em duas camadas: nucleo normativo para runtime e memoria operacional para orientar APIs, exemplos, fixtures, ferramentas e runbooks.
- Explicitar desde cedo a fronteira entre API runtime, utilitarios de apoio ao integrador e artefatos operacionais de exemplo, para nao reproduzir no SDK uma interface de emissor desktop onde basta entregar primitives e facades composiveis.

## Fora do escopo inicial

- Cobertura completa das 27 UFs de NFC-e na primeira entrega operacional.
- Automacao de credenciamento, emissao real em producao ou operacao fiscal sem habilitacao externa.
- Reescrita do pipeline de geracao antes de estabilizar o contrato publico minimo.
- Replicar no pacote uma aplicacao emissora completa com cadastro local, interface grafica, banco embarcado e operacao assistida no estilo do emissor legado.

## Lacunas oficiais agora explicitadas

O roadmap passa a tratar como lacunas reais, extraidas do `Manual do Emissor de NF-e`, do `MOC`, dos manuais de contingencia, dos manuais de `DANFE NFC-e` e do dossie editorial em `docs/notas-fiscais/`, os seguintes pontos que antes apareciam apenas de forma implicita:

- maquina de estados local do documento, incluindo rascunho, validacao, assinatura, processamento, autorizacao, rejeicao, denegacao, cancelamento e pendencia de retorno;
- polling de recibo, consulta de protocolo e tratamento de pendencias de transmissao como parte do fluxo operacional minimo, nao apenas como detalhe do transporte;
- contingencia como trilha arquitetural propria, com separacao entre contingencia de `NF-e`, contingencia `offline` de `NFC-e`, `SVC`, `EPEC` e demais mecanismos por documento;
- representacao auxiliar e pos-autorizacao, incluindo `DANFE`, `DANFE NFC-e`, `QR Code`, impressao e exportacao de XML autorizado como superficie complementar do SDK;
- consultas auxiliares por chave de acesso, inclusive cenarios de documento nao previamente persistido pelo consumidor do SDK;
- requisitos de interoperabilidade alem do XML assinado, como cadeia de certificados, `SSL`, obtencao de `WSDL`, autenticacao mutua e catalogos de autorizadores virtuais;
- portabilidade operacional para fixtures, exemplos e suporte ao integrador, incluindo importacao e exportacao de XML, snapshots de testes e estrategias de recuperacao equivalentes a `backup` e restauracao no contexto do repositorio.

## Mapa tematico consolidado

Para que o roadmap cubra efetivamente todos os topicos ja internalizados no acervo oficial, o projeto passa a reconhecer as seguintes frentes como parte do escopo de implantacao, ainda que nem todas virem API runtime na mesma fase:

- contrato publico, manifesto gerado, build ESM, distribuicao e rastreabilidade documental;
- modelagem canonica, serializacao XML, validacao estrutural e maquina de estados do documento;
- assinatura digital, certificados, cadeia de confianca, `SSL`, `WSDL`, autenticacao mutua e precondicoes tecnicas de comunicacao;
- transporte `SOAP`, autorizadores nacionais e virtuais, disponibilidade, consulta de status, recibo, protocolo e polling;
- contingencia de `NF-e`, contingencia `offline` de `NFC-e`, `SVC`, `EPEC` e mecanismos equivalentes por fluxo;
- pos-autorizacao e reconciliacao, incluindo cancelamento, carta de correcao, inutilizacao, distribuicao, consultas auxiliares e tratamento de rejeicao, denegacao e pendencia;
- representacoes auxiliares, incluindo `DANFE`, `DANFE NFC-e`, `QR Code`, `CSC`, etiqueta simplificada e exportacao previsivel de XMLs do ciclo operacional;
- eventos de maior impacto operacional, como Manifestacao do Destinatario, comprovante de entrega, ator interessado, conciliacao financeira, insucesso na entrega e outros eventos genericos;
- governanca de compatibilidade, incluindo `NTs`, informes tecnicos, series recorrentes de mudancas e versionamento de contratos e schemas;
- tabelas auxiliares e parametros externos, como `NCM`, meios de pagamento, `FCP`, municipios, `ANP`, `CFOP`, classificacao tributaria, `CBS`, `IBS` e demais codificacoes publicadas em informes;
- complementos estaduais, incluindo credenciamento, politicas de consulta, indisponibilidade, `QR Code` por UF, `CSC`, web services, contingencia e regras locais de autorizador;
- tooling e operacao assistida para integradores, incluindo fixtures, importacao e exportacao de XML, snapshots, diagnostico, exemplos e runbooks de continuidade;
- familias documentais paralelas presentes no acervo oficial, como `NFGas`, `NFAg` e `NF-e ABI`, tratadas como trilha de observacao para expansao futura e para validar se o modelo arquitetural continua generico o suficiente.

## Trilhas transversais permanentes

Alguns topicos do acervo oficial nao pertencem a uma unica fase e precisam permanecer como trilhas continuas ao longo de toda a implantacao:

- trilha de compatibilidade normativa: monitorar `NTs`, informes, alteracoes de schema, novas regras de validacao e impactos de semver no contrato do pacote;
- trilha de parametrizacao externa: versionar tabelas auxiliares, codificacoes oficiais e metadados operacionais sem acoplar essas mudancas ao nucleo de serializacao quando nao for necessario;
- trilha de evidencia estadual: promover material por UF somente quando ele fechar lacuna operacional real do SDK ou da matriz de compatibilidade;
- trilha de familias paralelas: usar `NFGas`, `NFAg` e `NF-e ABI` como teste de robustez da arquitetura manual e do manifesto gerado, mesmo antes de qualquer promessa de suporte operacional dedicado;
- trilha de observabilidade e recuperacao: manter exemplos, fixtures, importacao e exportacao de XML e runbooks alinhados ao comportamento esperado dos fluxos homologados.

## Fases do roadmap

### Fase 1 - Fundacao do pacote

**Meta**: transformar o repositorio em uma base confiavel para evolucao sem ambiguidade sobre o que o pacote publica.

**Entregas**:

- congelar e documentar o contrato publico minimo do pacote em torno de `src/index.ts`;
- estabilizar o build de distribuicao e os artefatos publicados em `dist`;
- criar testes de smoke para importacao ESM e integridade do manifesto gerado;
- revisar colisoes e lacunas do `manifest.json` para identificar familias de schema que ainda exigem tratamento adicional.
- consolidar uma matriz de rastreabilidade entre fontes oficiais, fluxos operacionais e futura superficie publica do pacote.
- classificar, no proprio roadmap e nos dossies, o que pertence a runtime, a tooling de apoio e a exemplos operacionais.
- inventariar os topicos oficiais por grupo funcional, cobrindo fluxo operacional, `NTs`, informes, tabelas auxiliares, estados, familias paralelas e requisitos de interoperabilidade.

**Criterio de saida**: pacote instalavel com contrato publico minimo explicito, build repetivel e validacao automatizada basica.

### Fase 2 - Camada canonica de modelo e XML

**Meta**: sair de artefatos crus gerados para uma camada previsivel de montagem e serializacao.

**Entregas**:

- definir uma camada manual de facades e builders para os documentos mais centrais;
- criar serializacao XML deterministica a partir dos tipos gerados;
- validar XML contra os XSD suportados pelo fluxo;
- normalizar campos criticos compartilhados, como chave de acesso, ambiente, versao e identificadores de evento.
- modelar uma maquina de estados canonica para o ciclo local do documento, sem acoplar o consumidor ao comportamento bruto dos tipos gerados.
- explicitar primitives para rascunho, validacao estrutural, assinatura pronta para envio e estados de retorno operacional.
- verificar se a camada manual permanece generica o bastante para acomodar familias proximas ja presentes no acervo, mesmo quando `NFGas`, `NFAg` e `NF-e ABI` ainda nao estiverem promovidas a roadmap operacional proprio.

**Criterio de saida**: o SDK consegue montar e serializar documentos canonicos sem depender de manipulacao manual dos tipos gerados pelo consumidor.

### Fase 3 - Assinatura digital e seguranca operacional

**Meta**: habilitar os fluxos que dependem de validade juridica e autenticidade tecnica.

**Entregas**:

- suporte a leitura de certificado A1 em formato compativel com Node.js;
- implementacao de assinatura XMLDSig para NF-e, NFC-e e eventos;
- suporte a calculos auxiliares obrigatorios, incluindo DV da chave de acesso e `hashCSRT` quando aplicavel;
- testes de interoperabilidade com exemplos extraidos dos manuais oficiais.
- validacao de cadeia de certificados e precondicoes de conexao segura exigidas pelos autorizadores.
- cobertura de requisitos de interoperabilidade observados nos manuais de `SVRS`, `SVAN` e materiais correlatos, incluindo pontos de `SSL`, autenticacao mutua e compatibilidade de consumo `WSDL`.

**Criterio de saida**: o SDK consegue produzir XML assinado e validavel para os fluxos priorizados.

### Fase 4 - Transporte, SOAP e catalogo de servicos

**Meta**: criar a infraestrutura de comunicacao com autorizadores e ambientes nacionais.

**Entregas**:

- cliente SOAP com configuracao por ambiente e timeout;
- catalogo versionado de servicos e endpoints nacionais;
- tratamento estruturado de retorno, rejeicao, indisponibilidade e uso indevido;
- separacao entre camada de transporte, mapeamento de mensagens e regras de dominio.
- suporte a consulta de recibo, consulta de protocolo e agendamento de polling de retorno quando o processamento for assincrono.
- catalogo observavel de autorizadores virtuais, contingenciais e endpoints por ambiente, com fronteiras claras entre regra nacional e complemento estadual.
- pontos de extensao para disponibilidade, contingencia e diagnostico operacional antes de abrir a camada multi-UF.
- pontos de acoplamento controlado para servicos auxiliares que nao sao o fluxo principal de autorizacao, como consultas especificas, distribuicao e servicos administrativos ligados a `CSC` ou validacoes complementares.

**Criterio de saida**: o SDK consegue chamar servicos homologados com telemetria e erros compreensiveis.

### Fase 5 - MVP operacional de NFe

**Meta**: fechar o primeiro fluxo fim a fim com maior valor transversal.

**Escopo prioritario**:

- autorizacao de uso;
- consulta de status do servico;
- consulta de recibo, protocolo e situacao;
- inutilizacao;
- cancelamento e carta de correcao;
- busca de retorno para notas em processamento ou com pendencia de transmissao.

**Entregas**:

- API de alto nivel para emissao e acompanhamento de NFe;
- modelos de resposta orientados a uso de aplicacao, sem expor apenas XML cru;
- exemplos executaveis em homologacao;
- testes de regressao baseados em fixtures XML reais.
- facades que cubram o fluxo operacional observado no emissor legado sem reproduzir sua interface, incluindo validacao, assinatura, transmissao, consulta e cancelamento.
- exportacao previsivel de XML autorizado, cancelado e denegado para testes, auditoria e interoperabilidade.
- base inicial para `DANFE` e consulta por chave de acesso como superficies complementares do fluxo de pos-autorizacao.
- backlog explicitamente aberto para diferenciar o que vira suporte de `DANFE` no SDK do que fica em utilitarios ou exemplos externos.

**Criterio de saida**: um integrador consegue emitir e acompanhar NFe em homologacao com a API do SDK.

### Fase 6 - Eventos, distribuicao DFe e Manifestacao do Destinatario

**Meta**: expandir do fluxo emitente para os fluxos de interesse do destinatario e eventos correlatos.

**Escopo prioritario**:

- recepcao de eventos genericos;
- manifestacao do destinatario;
- distribuicao DFe;
- EPEC e outros eventos de maior impacto operacional.

**Entregas**:

- abstrair eventos por tipo, lote e retorno de processamento;
- modelar manifestacao com foco em ciencia, confirmacao, desconhecimento e operacao nao realizada;
- cobrir regras de distribuicao e leitura de NSU;
- separar o que e suporte do SDK do que depende de permissao operacional externa.
- incorporar consultas auxiliares por chave, resumos e retornos que permitam reconciliar documentos nao previamente persistidos pelo consumidor do SDK.
- planejar a expansao incremental de eventos adjacentes ja mapeados no acervo oficial, como comprovante de entrega, ator interessado, conciliacao financeira e insucesso na entrega.

**Criterio de saida**: o SDK atende o nucleo do ecossistema de eventos e distribuicao sem misturar requisitos emitente e destinatario.

### Fase 7 - NFC-e nacional e extensoes por UF

**Meta**: adicionar NFC-e de forma sustentavel, sem acoplar todas as variacoes estaduais ao nucleo comum.

**Entregas**:

- camada nacional compartilhada para NFC-e;
- arquitetura de extensoes por UF;
- primeira UF piloto com documentacao publica mais consolidada;
- matriz de compatibilidade por UF conectada ao comportamento real do SDK.
- fechamento da trilha operacional propria de `NFC-e`, incluindo `DANFE NFC-e`, `QR Code`, `CSC`, contingencia `offline` e delimitacao do que e exigencia nacional versus provisao estadual.
- estrategia de promocao gradual de UFs ancorada em evidencias publicas de credenciamento, web services, contingencia e politicas de consulta.
- compatibilizacao explicita com `NTs` de `NFC-e` que alteram chave natural, cancelamento por substituicao, eliminacao de denegacao e lote, produtor rural, `CRT=4` e evolucoes de `QR Code` por UF.

**Criterio de saida**: o SDK oferece NFC-e nacional com um modelo claro de extensao estadual e pelo menos uma implementacao piloto robusta.

### Fase 8 - Endurecimento para release e adocao

**Meta**: preparar publicacao consistente, onboarding e manutencao continua.

**Entregas**:

- exemplos completos por fluxo em `examples/` ou area equivalente;
- estrategia de versionamento semantico para mudancas em schemas e contratos;
- pipeline de CI para build, lint, typecheck, testes e verificacao documental;
- guia de migracao para mudancas quebradoras e rotina de atualizacao por nota tecnica.
- fixtures reaproveitaveis de importacao e exportacao de XML e snapshots operacionais para regressao.
- runbooks de recuperacao e continuidade para homologacao, incluindo equivalentes do que o emissor legado tratava como importacao, exportacao, `backup` e restauracao, sem transformar isso em dependencia do runtime.
- matriz viva de cobertura entre fonte oficial, fluxo suportado, lacuna conhecida e fase do roadmap.
- politica de atualizacao para tabelas auxiliares e informes tecnicos com cadence propria, separando mudancas de dados externos das mudancas de contrato runtime.
- watchlist editorial e tecnica para familias paralelas do portal nacional, garantindo que expansoes futuras nao exijam reestruturar o nucleo ja estabilizado.

**Criterio de saida**: pacote pronto para publicacao recorrente e consumo controlado por integradores externos.

## Ordem sugerida de priorizacao

1. Fundacao do pacote.
2. Camada canonica de modelo e XML.
3. Assinatura digital e seguranca operacional.
4. Transporte e catalogo de servicos.
5. MVP operacional de NFe.
6. Eventos, distribuicao DFe e Manifestacao do Destinatario.
7. NFC-e nacional e extensoes por UF.
8. Endurecimento para release e adocao.

## Backlog imediato recomendado

- mapear o contrato publico alvo da primeira versao operacional do SDK;
- escolher um fluxo vertical unico para MVP tecnico, preferencialmente NFe em homologacao;
- transformar requisitos do MOC e dos schemas em fixtures de teste reutilizaveis;
- abrir uma camada manual em `src/` separada dos artefatos gerados para evitar acoplamento direto do consumidor ao output bruto;
- definir como o repositorio vai versionar diferencas entre schemas nacionais e complementos por UF.
- derivar do `Manual do Emissor de NF-e` uma matriz de capacidades operacionais para separar o que vira API, o que vira exemplo e o que fica apenas como contexto historico.
- transformar o dossie `docs/notas-fiscais/` em checklist de cobertura para polling, contingencia, `DANFE`, `QR Code`, consultas auxiliares e interoperabilidade de certificados.
- priorizar desde o MVP de `NF-e` a busca de retorno e a consulta de protocolo, porque o acervo oficial trata esses passos como parte do fluxo normal de emissao.
- abrir um inventario tecnico de `NTs` e informes por impacto: schema, validacao, evento, consulta, tabela auxiliar ou regra estadual.
- separar o backlog de dados auxiliares do backlog de runtime, para que atualizacoes de `NCM`, meios de pagamento, `FCP`, municipios, `ANP` e classificacoes tributarias tenham processo proprio.
- registrar explicitamente quais topicos oficiais permanecem apenas como trilha de observacao arquitetural, como `NFGas`, `NFAg` e `NF-e ABI`.

## Riscos principais

- tentar entregar cobertura multi-UF cedo demais antes de estabilizar o nucleo comum;
- expor artefatos gerados como API publica definitiva e dificultar evolucao posterior;
- misturar regra normativa com comportamento de transporte e degradar manutencao;
- depender de validacao apenas documental sem fixtures XML e testes de interoperabilidade.
- subdimensionar capacidades de pos-transmissao e tratar polling, consulta, contingencia e exportacao de XML como detalhes opcionais, quando as fontes oficiais os apresentam como partes do fluxo operacional basico.
- confundir ergonomia do emissor legado com obrigacao de reproduzir uma aplicacao completa dentro do pacote, inflando indevidamente a superficie runtime.
- misturar atualizacao de tabelas auxiliares e informes tecnicos com alteracoes de contrato runtime, gerando releases mais quebradoras do que o necessario.
- ignorar familias documentais paralelas do portal nacional e descobrir tarde demais que o nucleo ficou especifico demais para a evolucao futura do SDK.

## Indicadores de progresso

- quantidade de fluxos fim a fim suportados em homologacao;
- percentual de operacoes com fixture XML valido e teste automatizado;
- numero de familias de schema com tratamento estavel no manifesto gerado;
- cobertura documental entre requisito funcional, fonte oficial e API publica do SDK.
- percentual das lacunas operacionais oficiais explicitadas no roadmap ja cobertas por API, exemplos ou tooling interno.
- tempo medio entre publicacao de `NT` ou informe relevante e sua classificacao no backlog tecnico correspondente.
- percentual de topicos do mapa tematico consolidado com destino explicito: runtime, tooling, exemplo, backlog ou trilha de observacao.

## Artefato derivado

- [Matriz tematica do roadmap](./matriz-tematica-roadmap.md) transforma o mapa consolidado em backlog navegavel com um destino explicito por tema e fase-alvo inicial.

## Leitura complementar

- [Catalogo de capacidades do SDK](./capacidades-sdk.md)
- [Emissao de NFe](./nfe/emissao-nfe.md)
- [Emissao de NFC-e](./nfce/emissao-nfce.md)
- [Capacidades para Manifestacao do Destinatario](./manifestacao-destinatario/capacidades-sdk.md)
- [Indice documental](./index.md)
