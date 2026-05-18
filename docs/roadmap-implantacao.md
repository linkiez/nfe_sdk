# Roadmap de Implantacao do nfe_sdk

## Objetivo

Definir uma sequencia pragmatica de implantacao para evoluir o repositorio de um gerador de artefatos TypeScript baseado em XSD para um SDK utilizavel de NFe, NFC-e e Manifestacao do Destinatario.

## Estado atual do projeto

- O repositorio ja entrega geracao em lote de artefatos TypeScript a partir de XSD, com saida separada por `classes`, `interfaces`, `types` e `enums`.
- A superficie publicada hoje ainda esta concentrada em artefatos gerados e documentacao; nao existe uma camada operacional fechada para montagem, assinatura, transmissao e acompanhamento de documentos fiscais.
- A base documental e normativa evoluiu bastante e ja permite usar o projeto como fonte rastreavel de requisitos para as proximas fases.

## Principios de implantacao

- Priorizar primeiro o contrato publico do pacote antes de ampliar cobertura funcional.
- Separar com clareza o que e capacidade do SDK do que depende de certificado, credenciamento, autorizador e regras por UF.
- Entregar MVPs incrementais por fluxo fiscal, em vez de tentar cobrir NFe, NFC-e e Manifestacao integralmente na mesma fase.
- Manter compatibilidade com ESM, TypeScript estrito e geracao derivada dos XSD como fundamento do pacote.

## Fora do escopo inicial

- Cobertura completa das 27 UFs de NFC-e na primeira entrega operacional.
- Automacao de credenciamento, emissao real em producao ou operacao fiscal sem habilitacao externa.
- Reescrita do pipeline de geracao antes de estabilizar o contrato publico minimo.

## Fases do roadmap

### Fase 1 - Fundacao do pacote

**Meta**: transformar o repositorio em uma base confiavel para evolucao sem ambiguidade sobre o que o pacote publica.

**Entregas**:

- congelar e documentar o contrato publico minimo do pacote em torno de `src/index.ts`;
- estabilizar o build de distribuicao e os artefatos publicados em `dist`;
- criar testes de smoke para importacao ESM e integridade do manifesto gerado;
- revisar colisoes e lacunas do `manifest.json` para identificar familias de schema que ainda exigem tratamento adicional.

**Criterio de saida**: pacote instalavel com contrato publico minimo explicito, build repetivel e validacao automatizada basica.

### Fase 2 - Camada canonica de modelo e XML

**Meta**: sair de artefatos crus gerados para uma camada previsivel de montagem e serializacao.

**Entregas**:

- definir uma camada manual de facades e builders para os documentos mais centrais;
- criar serializacao XML deterministica a partir dos tipos gerados;
- validar XML contra os XSD suportados pelo fluxo;
- normalizar campos criticos compartilhados, como chave de acesso, ambiente, versao e identificadores de evento.

**Criterio de saida**: o SDK consegue montar e serializar documentos canonicos sem depender de manipulacao manual dos tipos gerados pelo consumidor.

### Fase 3 - Assinatura digital e seguranca operacional

**Meta**: habilitar os fluxos que dependem de validade juridica e autenticidade tecnica.

**Entregas**:

- suporte a leitura de certificado A1 em formato compativel com Node.js;
- implementacao de assinatura XMLDSig para NF-e, NFC-e e eventos;
- suporte a calculos auxiliares obrigatorios, incluindo DV da chave de acesso e `hashCSRT` quando aplicavel;
- testes de interoperabilidade com exemplos extraidos dos manuais oficiais.

**Criterio de saida**: o SDK consegue produzir XML assinado e validavel para os fluxos priorizados.

### Fase 4 - Transporte, SOAP e catalogo de servicos

**Meta**: criar a infraestrutura de comunicacao com autorizadores e ambientes nacionais.

**Entregas**:

- cliente SOAP com configuracao por ambiente e timeout;
- catalogo versionado de servicos e endpoints nacionais;
- tratamento estruturado de retorno, rejeicao, indisponibilidade e uso indevido;
- separacao entre camada de transporte, mapeamento de mensagens e regras de dominio.

**Criterio de saida**: o SDK consegue chamar servicos homologados com telemetria e erros compreensiveis.

### Fase 5 - MVP operacional de NFe

**Meta**: fechar o primeiro fluxo fim a fim com maior valor transversal.

**Escopo prioritario**:

- autorizacao de uso;
- consulta de status do servico;
- consulta de protocolo/situacao;
- inutilizacao;
- cancelamento e carta de correcao.

**Entregas**:

- API de alto nivel para emissao e acompanhamento de NFe;
- modelos de resposta orientados a uso de aplicacao, sem expor apenas XML cru;
- exemplos executaveis em homologacao;
- testes de regressao baseados em fixtures XML reais.

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

**Criterio de saida**: o SDK atende o nucleo do ecossistema de eventos e distribuicao sem misturar requisitos emitente e destinatario.

### Fase 7 - NFC-e nacional e extensoes por UF

**Meta**: adicionar NFC-e de forma sustentavel, sem acoplar todas as variacoes estaduais ao nucleo comum.

**Entregas**:

- camada nacional compartilhada para NFC-e;
- arquitetura de extensoes por UF;
- primeira UF piloto com documentacao publica mais consolidada;
- matriz de compatibilidade por UF conectada ao comportamento real do SDK.

**Criterio de saida**: o SDK oferece NFC-e nacional com um modelo claro de extensao estadual e pelo menos uma implementacao piloto robusta.

### Fase 8 - Endurecimento para release e adocao

**Meta**: preparar publicacao consistente, onboarding e manutencao continua.

**Entregas**:

- exemplos completos por fluxo em `examples/` ou area equivalente;
- estrategia de versionamento semantico para mudancas em schemas e contratos;
- pipeline de CI para build, lint, typecheck, testes e verificacao documental;
- guia de migracao para mudancas quebradoras e rotina de atualizacao por nota tecnica.

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

## Riscos principais

- tentar entregar cobertura multi-UF cedo demais antes de estabilizar o nucleo comum;
- expor artefatos gerados como API publica definitiva e dificultar evolucao posterior;
- misturar regra normativa com comportamento de transporte e degradar manutencao;
- depender de validacao apenas documental sem fixtures XML e testes de interoperabilidade.

## Indicadores de progresso

- quantidade de fluxos fim a fim suportados em homologacao;
- percentual de operacoes com fixture XML valido e teste automatizado;
- numero de familias de schema com tratamento estavel no manifesto gerado;
- cobertura documental entre requisito funcional, fonte oficial e API publica do SDK.

## Leitura complementar

- [Catalogo de capacidades do SDK](./capacidades-sdk.md)
- [Emissao de NFe](./nfe/emissao-nfe.md)
- [Emissao de NFC-e](./nfce/emissao-nfce.md)
- [Capacidades para Manifestacao do Destinatario](./manifestacao-destinatario/capacidades-sdk.md)
- [Indice documental](./index.md)