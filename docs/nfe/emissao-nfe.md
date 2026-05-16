# Emissao de NFe

## Escopo

Documento-base para consolidar o estado efetivo atual da emissao de NFe, fontes primarias relacionadas, impactos futuros no SDK e lacunas ainda abertas.

## Estado efetivo atual

O Portal Nacional da NF-e permanece como a base normativa e operacional publica para emissao, consulta, inutilizacao, disponibilidade e acompanhamento de informes. A superficie publica observada em 2026-05-16 continua organizada em areas de `Servicos`, `Legislacao`, `Documentos`, `Downloads`, `Perguntas Frequentes` e `Informes`, com consultas publicas de NF-e e inutilizacao disponiveis diretamente no portal nacional.

Na camada estadual, o portal da SEFAZ/SP confirma a definicao operacional da NF-e como documento exclusivamente digital, com validade juridica garantida por assinatura digital do emitente e recepcao previa pelo Fisco. O mesmo portal tambem expõe paginas publicas de servicos, downloads, legislacao, perguntas frequentes, contatos de atendimento e avisos de indisponibilidade ou contingencia, o que o torna uma referencia complementar util para verificar material publico por UF.

## Mudancas recentes relevantes

- O portal nacional publica informes e notas tecnicas recentes ainda relevantes para implementacao, incluindo referencias visiveis em 2026-05-16 para o Informe Tecnico 2026.002 v1.00, a NT 2024.003 v1.10, a NT 2026.004 v1.00 e a NT 2025.002 v1.36 sobre leiautes de NF-e e NFC-e relacionados a RTC.
- A pagina publica da SEFAZ/SP registra eventos operacionais recentes, como manutencao programada, indisponibilidade e uso de contingencia SVC-AN, que impactam operacao e tratamento de excecao no ecossistema de emissao.
- A SEFAZ/SP tambem registra postergação de obrigatoriedade para produtor rural em 2025 e 2026, ponto relevante para entender cenarios de adoção e canais simplificados como a NFF.

## Capacidades necessarias no SDK

- Representar documentos fiscais assinados digitalmente e aptos a autorizacao previa pelo ambiente fiscal.
- Apoiar consultas de status e disponibilidade, inclusive cenarios de inutilizacao e verificacao de contingencia.
- Manter compatibilidade com notas tecnicas e informes recentes que alterem schema, campos, validacoes ou regras operacionais.
- Separar claramente regras nacionais das verificacoes complementares por UF quando o fluxo nacional remeter a portais estaduais.
- Permitir rastrear origem normativa de cada requisito funcional para futuras evolucoes do SDK.

## Fontes primarias

- `SRC-NFE-001` Portal Nacional da NF-e - pagina principal e navegacao publica.
- `SRC-NFE-002` Perguntas Frequentes do Portal Nacional da NF-e.
- `SRC-NFE-003` Portal SEFAZ/SP - Sobre a NF-e.
- `SRC-NFE-004` Portal SEFAZ/SP - Servicos da NF-e.
- `SRC-NFE-005` Portal SEFAZ/SP - Downloads da NF-e.

## Fontes secundarias

- `SRC-SEC-001` node-dfe - referencia tecnica complementar para capacidades praticas e lacunas de implementacao em Node.js, sem valor normativo.

## Lacunas e riscos abertos

- Esta etapa confirmou a superficie publica oficial, mas nao consolidou ainda o detalhamento completo de cada manual ou NT a partir das paginas internas de `Documentos` e `Downloads` do portal nacional.
- Regras finas de obrigatoriedade, excecoes setoriais e cenarios detalhados de contingencia ainda precisam ser extraidos de artefatos normativos especificos.