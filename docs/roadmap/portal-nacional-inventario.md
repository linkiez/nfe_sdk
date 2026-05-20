# Inventario do Portal Nacional por Superficie e Documento

## Objetivo

Detalhar o hub `www.nfe.fazenda.gov.br` em nivel mais operacional do que o anexo tematico principal, preservando um mapa pratico das superficies publicas e dos documentos que realmente alimentam o roadmap.

## Anexo complementar

- [Registro de documentos vigentes do portal nacional](./portal-documentos-vigentes.md)

## Superficies publicas do portal

| Superficie | O que aparece oficialmente | Leitura para o roadmap |
| --- | --- | --- |
| `principal.aspx` | Portal institucional com menus, estatisticas, FAQ, atendimento, portais estaduais e atalhos de servicos | Define descoberta publica, suporte institucional e fronteira entre camada nacional e estadual |
| `consultaRecaptcha.aspx` | Consulta resumida por chave de acesso | Base da trilha de consulta publica por chave |
| `consulta.aspx?tipoConsulta=inutilizacao` | Consulta nacional de inutilizacao | Apoia backlog de reconciliacao e pos-autorizacao |
| `disponibilidade.aspx` | Consulta de disponibilidade dos servicos | Alimenta backlog de resiliencia e telemetria |
| `manifestacaoDestinatario.aspx` | Entrada nacional de manifestacao | Marca o eixo de eventos do destinatario |
| `webServices.aspx` | Relacao publica de servicos web | Base para catalogo de endpoints e ambientes |
| `AgendamentoSVC` | Superficie de agendamento da contingencia `SVC-AN` | Materializa a trilha de contingencia nacional |
| `consultaEPECConciliacao.aspx` | Consulta/liberacao de `EPEC` | Separa contingencia de autorizacao normal |
| `perguntasFrequentes.aspx` | FAQ publica | Apoio documental e esclarecimento de limites de uso |
| `download.aspx` | Visualizador `DF-e` e assinador | Apoio ao integrador e evidencia de interoperabilidade |
| `infoEstatisticas.aspx` | Estatisticas agregadas | Contexto de adocao, nao dependencia funcional |
| `arearestrita` | Superficie autenticada do Fisco | Boundary externa e nao promessa de automacao publica |

## Documentos oficiais priorizados por categoria

### Manuais e guias operacionais

| Documento ou familia | Papel documental | Impacto principal no roadmap |
| --- | --- | --- |
| `MOC 7.0` | Manual central de `NF-e` e `NFC-e` | Modelagem canonica, serializacao, validacao, fluxo base |
| Anexo I do `MOC` | Leiaute e regras de validacao | Regras criticas de schema e validacao |
| Anexo II do `MOC` | `DANFE` e codigo de barras | Boundary de representacao auxiliar |
| Anexo III do `MOC` | Contingencia `NF-e` | Trilha de contingencia nacional |
| Anexo IV do `MOC` | Contingencia `NFC-e` | Backlog `offline` e limites estaduais |
| Manual `DANFE NFC-e` e `QR Code` | Documento auxiliar do consumidor | Delimita `QR Code`, consulta do consumidor e apoio visual |
| Manual de contingencia `offline` `NFC-e` | Fallback estadual em falha de comunicacao | Trilha `offline` multi-UF |
| Manual de boas praticas `NFC-e` | Checklist de solucao sistêmica | Apoio ao integrador, runbooks e exemplos |
| Manual `SVAN` | Uso do ambiente nacional virtual | Taxonomia de ambientes compartilhados |
| Manual `SVRS` | Uso da Sefaz Virtual RS | Ambientes, credenciamento e interoperabilidade |
| Manual do emissor de `NF-e` | Operacao assistida, import/export, recuperacao | Base dos runbooks de homologacao |
| Manual de contingencia `NF-e` v1.01 | Tipos de emissao em contingencia | Catalogo de contingencia por documento |
| `NFGas`, `NFAg`, `NF-e ABI` | Familias paralelas e emergentes | Robustez arquitetural e watchlist de familias |

### Esquemas XML e pacotes de liberacao

| Pacote ou familia | Recorte observado | Impacto principal no roadmap |
| --- | --- | --- |
| `010c NF-e/NFC-e` | Baseline vigente de schema nacional | Serializacao e validacao estrutural |
| Eventos `RTC` (`NT 2025.002`) | Events/schema da reforma tributaria | Governanca de mudanca e compatibilidade |
| Distribuicao `DF-e` v1.03 | Schemas de distribuicao | `NSU`, resumos e envelopes do destinatario |
| Consulta publica `GTIN` | Schemas dedicados | Consulta auxiliar e validacao adicional |
| Eventos centrais | Cancelamento, `CCe`, `EPEC`, manifestacao, comprovante, ator interessado, `ECONf`, insucesso, averbação | Trilha additive de eventos |
| Eventos `NFC-e` | Cancelamento por substituicao e `EPEC NFC-e` | Contingencia e delta estadual/operacional |
| `NFGas` e `NFAg` | Pacotes dedicados de schema | Teste de extensibilidade da camada canonica |

### Notas tecnicas vigentes mais sensiveis

| Documento | Topico dominante | Leitura minima exigida |
| --- | --- | --- |
| `NT 2026.004 v1.00` | `CNPJ` alfanumerico | Revisar identificadores e serializacao |
| `NT 2025.002 v1.36` | `RTC` | Revisar schema, eventos e dados externos |
| `NT 2024.003 v1.10` | Regras de validacao | Classificar impacto em validacao |
| `NT 2020.001 v1.60` | Manifestacao do destinatario | Expandir backlog do destinatario |
| `NT 2026.001 v1.00` | `PAA` | Trust chain e assinatura |
| `NT 2022.002 v1.30a` | Exportacao/equiparacao e outras regras | Ajustes de validacao e schema base |
| `NT 2014.002 v1.30` | Distribuicao `DF-e` | Consolidar distribuicao e leitura por `NSU` |
| `NT 2023.002 v1.01` | `NFC-e` por produtor rural, sem denegacao/lote | Ajustar backlog de `NFC-e` operacional |
| `NT 2021.003 v1.40` | `GTIN` | Consulta auxiliar e validacao |
| `NT 2021.002 v1.12` | `NFF` | Familia paralela e impacto arquitetural |
| `NT 2024.002 v1.00` | `ECONf` | Evento adjacente de maior impacto |
| `NT 2023.005 v1.02` | Insucesso na entrega | Evento adjacente de entrega |

### Informes e tabelas recorrentes

| Grupo documental | Exemplos oficiais | Leitura minima exigida |
| --- | --- | --- |
| `CBS` e `IBS` | `IT 2026.002`, `IT 2025.002` e tabelas `cClassTrib`, `cCredPres`, biocombustivel | Politica de dados externos e cadence propria |
| Meios de pagamento | `IT 2026.001`, `IT 2024.002` e tabela de meios de pagamento | Atualizacao controlada de codigos |
| Combustiveis | `IT 2025.004`, `IT 2023.003`, tabela de combustiveis monofasicos | Dados externos recorrentes |
| `NCM`, `uTrib`, `ANP`, municipios, `FCP`, `CFOP`, paises, `GS1` | Informes e tabelas em `Diversos` | Politica de versionamento e ingestao fora do runtime |
| `QR Code` por UF | `IT 2025.003` de `GO` | Delta estadual ligado a `NFC-e` |
| `NF-e ABI` e `NFAg` | Tabelas dedicadas em `Diversos` | Watchlist de familias emergentes |

## Criterio de absorcao no roadmap

- Cada superficie do portal deve cair em um `RTM-*` existente ou justificar um novo tema consolidado.
- Cada documento vigente sensivel precisa ter pelo menos uma classificacao entre `runtime`, `tooling`, `documentacao`, `exemplo` ou `trilha de observacao`.
- Historicos e versoes substituidas permanecem como evidencia de proveniencia no acervo, mas nao devem substituir o baseline vigente do roadmap.