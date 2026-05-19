# Coverage Matrix – Roadmap Gap Audit

**Audit date**: 2026-05-19
**Formal scope**: specs 001–008
**Context-only**: specs 009–010 (resolve-downstream references only)
**Primary source baseline**: `docs/_sources/markdown/official/www.nfe.fazenda.gov.br/portal/`

Status legend: `covered` | `partial` | `deferred` | `missing` | `resolved-downstream` | `out-of-scope`

---

## Spec 001 – Pesquisa e Consolidação de Documentação SEFAZ

| Topic                                                               | Status  | Primary Sources                                                              | Downstream Context | Notes                                                                                                                      |
| ------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Identificar e consultar fontes oficiais (NF-e, NFC-e, Manifestação) | covered | MOC 7.0 Visão Geral; DANFE NFC-e v6.0; Contingência NF-e; Portal webservices | —                  | Documentos presentes em `docs/`                                                                                            |
| Registrar fontes, tema coberto e data por documento                 | covered | `docs/documentos-oficiais-portal-nfe.md`; `docs/_meta/source-registry.md`    | —                  | —                                                                                                                          |
| Consolidar em Markdown no diretório `docs/`                         | covered | `docs/_sources/markdown/official/`                                           | —                  | —                                                                                                                          |
| Matriz de cobertura NFC-e por UF                                    | covered | `webservices-24c8f3a1fb.md`; `docs/nfce/uf-matrix.md`                        | —                  | CE, SE, RJ, AP com falha de conversão no corpus                                                                            |
| Documentar estado vigente e mudanças recentes (Notas Técnicas)      | partial | `informe-04c66e64b8.md`; portal informes                                     | —                  | GAP-011; informes 2026.002 (CBS), 2026.004 (CNPJ Alfanumérico), 2024.003 v1.10 (Agro) publicados após consolidação inicial |

---

## Spec 002 – Especificação das Features do Projeto

| Topic                                                                           | Status  | Primary Sources                         | Downstream Context | Notes |
| ------------------------------------------------------------------------------- | ------- | --------------------------------------- | ------------------ | ----- |
| Catálogo canônico de capacidades em `docs/capacidades-sdk.md`                   | covered | `docs/capacidades-sdk.md`               | —                  | —     |
| Classificar features: confirmada / parcial / futura / dependente de habilitação | covered | spec própria; `docs/capacidades-sdk.md` | —                  | —     |
| Cobertura NFC-e por UF como feature principal com seção auxiliar                | covered | `docs/nfce/uf-matrix.md`                | —                  | —     |
| Evidência principal por feature ou lacuna declarada                             | covered | spec própria                            | —                  | —     |

---

## Spec 003 – Fundação do Contrato Público do Pacote

| Topic                                                                     | Status  | Primary Sources                            | Downstream Context | Notes |
| ------------------------------------------------------------------------- | ------- | ------------------------------------------ | ------------------ | ----- |
| Contrato público mínimo via `package.json` exports + import raiz          | covered | `src/public-contract.ts`; `src/index.ts`   | —                  | —     |
| Build e empacotamento repetíveis (`npm pack` / `validate:tarball`)        | covered | `package.json`; `tsconfig.build.json`      | —                  | —     |
| `manifest.json` como artefato interno de auditoria (não contrato público) | covered | `src/manifest.json`                        | —                  | —     |
| Distinguir inventário interno de contrato público                         | covered | spec própria; `src/public-contract.doc.md` | —                  | —     |

---

## Spec 004 – Inicio do Desenvolvimento Funcional do SDK

| Topic                                                        | Status   | Primary Sources                     | Downstream Context | Notes                                                            |
| ------------------------------------------------------------ | -------- | ----------------------------------- | ------------------ | ---------------------------------------------------------------- |
| Camada canônica NF-e / enviNFe acima do inventário gerado    | covered  | MOC 7.0 §5.1; `enviNFe_v4.00.xsd`   | —                  | —                                                                |
| Serialização XML determinística                              | covered  | MOC 7.0 §4.2.1; §4.2.1.1–4.2.1.4    | —                  | —                                                                |
| Normalização de campos compartilhados (ambiente, versão, Id) | covered  | MOC 7.0 §4.3.4–4.3.5                | —                  | —                                                                |
| Cálculo da chave de acesso e dígito verificador              | missing  | MOC 7.0 §2.2.6; §2.2.6.1–2.2.6.3    | —                  | GAP-001; scopo excluído explicitamente na spec                   |
| Geração de hashCSRT (Responsável Técnico)                    | missing  | MOC 7.0 §2.2.10; §2.2.10.1–10.3     | —                  | GAP-002; não mencionado na spec                                  |
| Suporte ao campo cBenef e tabelas por UF                     | missing  | MOC 7.0 §2.2.11; §2.2.11.1          | —                  | GAP-013                                                          |
| Validação XSD automática                                     | deferred | MOC 7.0 §4.2.1.4; schemas em `xsd/` | —                  | GAP-014; scopo excluído na spec ("sem obrigar XSD automatizado") |
| Série reservada e numeração por estabelecimento rural        | missing  | MOC 7.0 §2.2.8                      | —                  | GAP-017; não mencionado em nenhuma spec                          |

---

## Spec 005 – Add Digital Signing

| Topic                                                             | Status   | Primary Sources                        | Downstream Context     | Notes                                           |
| ----------------------------------------------------------------- | -------- | -------------------------------------- | ---------------------- | ----------------------------------------------- |
| Assinatura digital da NF-e (modelo 55) com cert A1                | covered  | MOC 7.0 §4.2.4; §4.2.4 padrão XML-DSig | —                      | —                                               |
| Verificação local da assinatura produzida                         | covered  | MOC 7.0 §4.2.5                         | —                      | —                                               |
| Contexto de assinatura reutilizável                               | covered  | spec própria                           | —                      | —                                               |
| Assinatura digital para NFC-e (modelo 65)                         | deferred | MOC 7.0 §4.2.4                         | 010-nfce-national-core | GAP-009; spec 010 endereça                      |
| Assinatura digital para eventos (cancelamento, CCe, manifestação) | deferred | MOC 7.0 §4.2.4                         | 009-generic-event-mvp  | GAP-009; spec 009 endereça                      |
| Suporte a certificado e-CPF para emissão                          | missing  | MOC 7.0 §4.2.4.1                       | —                      | GAP-018; não mencionado em nenhuma spec 001–008 |

---

## Spec 006 – Add SOAP Transport

| Topic                                                                    | Status   | Primary Sources                                              | Downstream Context     | Notes                                                                                            |
| ------------------------------------------------------------------------ | -------- | ------------------------------------------------------------ | ---------------------- | ------------------------------------------------------------------------------------------------ |
| Cliente SOAP para NfeStatusServico (homologação, nacionais)              | covered  | MOC 7.0 §5.x; `webservices-24c8f3a1fb.md`                    | —                      | —                                                                                                |
| Cliente SOAP para NFeAutorizacao (homologação, nacionais)                | covered  | MOC 7.0 §5.1; `webservices-24c8f3a1fb.md`                    | —                      | —                                                                                                |
| Catálogo de endpoints versionado por serviço e ambiente                  | covered  | `webservices-24c8f3a1fb.md`                                  | —                      | Apenas endpoints nacionais compartilhados                                                        |
| Classificação estruturada de retorno (erro, rejeição, indisponibilidade) | covered  | MOC 7.0 §4.3.8; §5.1.6                                       | —                      | —                                                                                                |
| NfeRetAutorizacao (retorno de lote assíncrono)                           | partial  | MOC 7.0 §5.2; `consReciNFe_v4.00.xsd`                        | —                      | GAP-012; spec menciona autorização, mas RetAutorizacao (polling) não recebe tratamento explícito |
| Roteamento multi-UF (AM, BA, GO, MG, MS, MT, PE, PR, RS, SP, SVAN, SVRS) | deferred | `webservices-24c8f3a1fb.md` tabela completa                  | 010-nfce-national-core | GAP-004; deferred explicitamente na spec                                                         |
| Endpoints SVC-AN e SVC-RS (contingência)                                 | deferred | `webservices-24c8f3a1fb.md`; MOC 7.0 §3.3.2                  | —                      | GAP-004                                                                                          |
| Endpoints de produção                                                    | missing  | `webservices-24c8f3a1fb.md`                                  | —                      | GAP-005; scopo excluído ("apenas homologação")                                                   |
| NfeConsultaCadastro service                                              | missing  | `webservices-24c8f3a1fb.md`; `disponibilidade-30f1e6a455.md` | —                      | GAP-010; serviço presente no corpus, não mencionado na spec                                      |
| NFC-e endpoints específicos por UF                                       | deferred | `webservices-24c8f3a1fb.md`                                  | 010-nfce-national-core | GAP-004; parte do roteamento UF                                                                  |

---

## Spec 007 – NFe Operational MVP

| Topic                                                              | Status              | Primary Sources             | Downstream Context              | Notes                                                                                                    |
| ------------------------------------------------------------------ | ------------------- | --------------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Autorização NF-e de alto nível (unitária + lote)                   | covered             | MOC 7.0 §5.1; §5.1.3–5.1.6  | —                               | Homologação apenas                                                                                       |
| Consulta de status do serviço                                      | covered             | MOC 7.0 §5.x                | —                               | —                                                                                                        |
| Consulta de situação / protocolo por chave de acesso               | covered             | MOC 7.0 §5.x                | —                               | —                                                                                                        |
| Inutilização de numeração                                          | covered             | MOC 7.0 §5.x                | —                               | —                                                                                                        |
| Cancelamento de NF-e                                               | covered             | MOC 7.0 §3.1.1; Tabela 3-1  | —                               | —                                                                                                        |
| Carta de Correção Eletrônica (CCe)                                 | covered             | MOC 7.0 §3.1.1; Tabela 3-1  | —                               | —                                                                                                        |
| Fluxo assíncrono de autorização – polling NfeRetAutorizacao        | partial             | MOC 7.0 §5.1.4.2; §5.2      | —                               | GAP-012; API de alto nível não especifica explicitamente polling                                         |
| EPEC – Evento Prévio de Emissão em Contingência                    | missing             | MOC 7.0 §3.3; §3.3.1–3.3.17 | 009-generic-event-mvp (partial) | GAP-003; spec 009 pode endereçar parcialmente; EPEC usa serviço próprio (NfeRecepcaoEvento em SVAN/SVRS) |
| Cancelamento por Substituição                                      | resolved-downstream | MOC 7.0 §3.5                | 009-generic-event-mvp           | Spec 009 declara cobertura de eventos genéricos                                                          |
| Evento Ator Interessado – Transportador                            | resolved-downstream | MOC 7.0 §3.6; Tabela 3-1    | 009-generic-event-mvp           | —                                                                                                        |
| Pedidos de Prorrogação de Suspensão ICMS (remessas interestaduais) | missing             | MOC 7.0 §3.4; §3.4.1–3.4.3  | —                               | GAP-007; nenhuma spec downstream cobre                                                                   |
| Ambiente de produção                                               | missing             | MOC 7.0 §4.3.7              | —                               | GAP-005                                                                                                  |

---

## Spec 008 – Recipient DFe MVP

| Topic                                                 | Status   | Primary Sources                      | Downstream Context | Notes                                                         |
| ----------------------------------------------------- | -------- | ------------------------------------ | ------------------ | ------------------------------------------------------------- |
| Distribuição DFe via distNSU (PJ + PF, homologação)   | covered  | MOC 7.0 §3.2                         | —                  | —                                                             |
| Envelopes estruturados (resumo vs documento completo) | covered  | MOC 7.0 §3.2.2.1; leiaute NFeDistDFe | —                  | —                                                             |
| Cursor observável (ultNSU)                            | covered  | MOC 7.0 §3.2                         | —                  | —                                                             |
| Manifestação – Ciência da Operação                    | covered  | MOC 7.0 §3.2.1.4; Tabela 3-2         | —                  | —                                                             |
| Manifestação – Confirmação da Operação                | covered  | MOC 7.0 §3.2.1.1; Tabela 3-2         | —                  | —                                                             |
| Manifestação – Desconhecimento da Operação            | covered  | MOC 7.0 §3.2.1.2; Tabela 3-2         | —                  | —                                                             |
| Manifestação – Operação Não Realizada                 | covered  | MOC 7.0 §3.2.1.3; Tabela 3-2         | —                  | —                                                             |
| Obrigatoriedade de manifestação (MOC §3.2.3)          | missing  | MOC 7.0 §3.2.3                       | —                  | GAP-016; regra de prazo e obrigatoriedade não modelada no SDK |
| Mudança de manifestação (MOC §3.2.1.5)                | missing  | MOC 7.0 §3.2.1.5                     | —                  | GAP-015; cobre alteração de tipo após registro inicial        |
| consNSU (consulta por NSU específico)                 | deferred | MOC 7.0 §3.2                         | —                  | GAP-008; deferred explicitamente, sem spec downstream         |
| consChNFe (consulta por chave de acesso)              | deferred | MOC 7.0 §3.2                         | —                  | GAP-008; idem                                                 |
| Download automático pós-manifestação                  | deferred | MOC 7.0 §3.2                         | —                  | Deferred explicitamente na spec                               |
| Ambiente de produção                                  | missing  | MOC 7.0 §4.3.7                       | —                  | GAP-005                                                       |

---

## Tópicos Cross-Cutting (fora de qualquer spec 001–008)

| Topic                                                       | Status       | Primary Sources                                                                             | Downstream Context | Notes                                                                            |
| ----------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------- |
| NF-e ABI (modelo 77) – nova família normativa (out/2025)    | missing      | `MOC NFe ABI Visão Geral - v1.00 - minuta.md`; `MOC_NFeABI_Anexo I Leiaute e RV - v2.00.md` | —                  | GAP-006; posterior a todos os specs 001–008                                      |
| Rastreamento contínuo de Notas Técnicas e Informes vigentes | missing      | `informe-04c66e64b8.md` (2026.002 CBS, 2026.004 CNPJ Alfanumérico, 2024.003 Agro v1.10)     | —                  | GAP-011; processo sem spec dedicada                                              |
| NFGas (Nota Fiscal de Gás Natural)                          | out-of-scope | `MOC_NFGas_VisaoGeral_v1.00f.md`                                                            | —                  | Família paralela; fora de escopo do roadmap atual                                |
| NFAg (Nota Fiscal Agrícola)                                 | out-of-scope | `MOC_NFAg_VisaoGeral_v1.00k.md`                                                             | —                  | Família paralela; fora de escopo do roadmap atual                                |
| Agendamento SVC-AN                                          | out-of-scope | Portal: "Agendamento SVC-AN" (`webservices-24c8f3a1fb.md`)                                  | —                  | Serviço de agendamento de janelas de manutenção; não requer implementação de SDK |
