# Recortes Funcionais Prioritarios

## Objetivo

Traduzir os `RTM-*` e as iteracoes recomendadas em recortes funcionais menores, verificaveis e additive, para que a proxima expansao do roadmap canonico feche primeiro o fluxo real de `SP` ate `producao` e so depois escale para novas `UFs`.

## Como ler

- `Classe dominante` indica se o recorte deve nascer como `runtime`, `tooling`, `exemplo` ou combinacao curta.
- `Escopo minimo` define o que precisa existir para o recorte ser considerado real e nao apenas editorial.
- `Fora do recorte` impede que uma slice pequena reabra promessas amplas demais na primeira entrega.
- `Fechamento minimo` e o gate pratico para o recorte sair do backlog.

## Relacao com os demais anexos

- Use [proximas-iteracoes-recomendadas](./proximas-iteracoes-recomendadas.md) para decidir a ordem de ataque.
- Use [criterios-promocao](./criterios-promocao.md) para decidir se o recorte deve parar em `documentacao`, `tooling` ou chegar a `runtime`.
- Use [rtm-cobertura-oficial](./rtm-cobertura-oficial.md) para localizar a lacuna oficial que justifica cada recorte.

## Recortes priorizados

| ID        | Recorte funcional                                             | `RTM-*` puxados                            | Classe dominante            | Escopo minimo                                                                                                                                                                                     | Fora do recorte                                                                                                      | Fechamento minimo                                                                                                         |
| --------- | ------------------------------------------------------------- | ------------------------------------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `RFL-001` | Autorizacao com recibo e protocolo fim a fim                  | `RTM-004`, `RTM-006`                       | `runtime`                   | receber `nRec`, consultar recibo, reconciliar protocolo e devolver resultado observavel sem expor XML cru como contrato principal                                                                 | polling generico sem boundary, persistencia local e filas longas de backoffice                                       | facade additive, fixture homologada, teste focado de recibo e protocolo                                                   |
| `RFL-002` | Pos-autorizacao orientada a estado para `NF-e`                | `RTM-006`, `RTM-002`                       | `runtime`                   | fechar cancelamento, carta de correcao, inutilizacao e consulta por chave em uma leitura unica de estado do documento                                                                             | gestor completo de ciclo de vida, base local embarcada e reconciliacao multi-documento                               | resultado estruturado por operacao, coverage matrix atualizada e regressao por fluxo                                      |
| `RFL-003` | Distribuicao e manifestacao com continuidade explicita        | `RTM-008`, `RTM-013`                       | `runtime` + `tooling`       | combinar `distNSU`, cursores observaveis, prazos de manifestacao e download posterior como fluxo de integrador                                                                                    | `consNSU`, automacao de credenciamento e polling agressivo em producao                                               | boundary publicada, exemplos de continuidade e testes de consumo/retomada                                                 |
| `RFL-004` | Assinatura expandida para eventos, `NFC-e`, `DV` e `hashCSRT` | `RTM-003`                                  | `runtime`                   | fechar a proxima slice de assinatura alem da `NFe` basica, incluindo eventos e os identificadores fiscais ainda pendentes                                                                         | cadeia multi-certificado automatica, assinatura de todas as familias paralelas e onboarding completo de certificados | spec fechada para a extensao, fixtures validas e compatibilidade additive declarada                                       |
| `RFL-005` | Contingencia por ambiente com foco em `SP` e `producao`       | `RTM-005`, `RTM-012`                       | `runtime` + `documentacao`  | tornar explicita a degradacao suportada em `SVC`, `EPEC` e contingencia `offline`, com diagnostico claro por ambiente e baseline paulista                                                         | UI de emissor, retomada assistida completa e operacao desktop equivalente ao emissor legado                          | boundaries por ambiente, criterio de ativacao e saidas observaveis por fallback                                           |
| `RFL-006` | `NFC-e` operacional de `SP` ate `producao`                    | `RTM-005`, `RTM-007`, `RTM-011`, `RTM-012` | `runtime` + `tooling`       | incluir autorizacao SP, composicao local do `QR Code` e renderer HTML de DANFE apenas para evidencia autorizada; manter consulta, administracao de `CSC` e contingencia como boundaries separados | promessa multi-UF irrestrita, cobertura nacional implicita e automacao ampla de credenciamento                       | feature `028` valida renderer, superficie publica, leitura do QR e limites de impressao                                   |
| `RFL-007` | Trust chain, `WSDL` e downloads como diagnostico tecnico      | `RTM-003`, `RTM-018`                       | `tooling`                   | transformar cadeias, downloads oficiais, `WSDL` e artefatos auxiliares em diagnostico repetivel de interoperabilidade                                                                             | dependencia obrigatoria desses utilitarios no runtime e replicacao do assinador legado                               | comandos, exemplos e runbook tecnico conectados aos fluxos homologados                                                    |
| `RFL-008` | MDF-e SP com promocao condicionada por evidencia              | `RTM-020`                                  | `documentacao` -> `runtime` | resolver identidade/aplicabilidade dos schemas, cohort de emissores, permissoes por operacao e rollout; somente depois encadear codegen, documento e homologacao conforme `032`-`039`             | selecionar o pacote SVRS conflitante, inferir suporte nacional ou transportar contingencia de `NF-e`/`NFC-e`         | `032` aprovado com fontes primarias e matriz por operacao; cada promocao exige seu proprio gate de homologacao e producao |

## Sugestao de ordem pratica

1. `RFL-004`, porque assinatura, `DV`, `hashCSRT` e `tpAmb` ainda sao o principal bloqueio tecnico para `SP` ate `producao`.
2. `RFL-001`, porque fecha o maior delta entre transporte homologado e fluxo fiscal completo percebido pelo integrador.
3. `RFL-006`, porque o baseline de `NFC-e` em `SP` precisa sair do piloto homologado e chegar a `producao` com `CSC`, `QR Code` e `DANFE NFC-e` posicionados em codigo.
4. `RFL-005`, porque contingencia precisa aparecer como comportamento explicitamente degradado por ambiente, e nao como expectativa implicita.
5. `RFL-002` e `RFL-003`, para consolidar pos-transmissao e continuidade acima das operacoes basicas.
6. `RFL-007`, para endurecer interoperabilidade e onboarding tecnico sem inflar a API publica.
7. `RFL-008`, como trilha documental independente: fechar `032` antes de qualquer XSD/runtime e avancar por operacao, sem presumir producao ou contingencia.

## Regra de uso

- Toda nova spec runtime deve apontar primeiro para um `RFL-*` deste anexo ou justificar por que exige um recorte funcional novo.
- Se um `RFL-*` nao passar de `documentacao`, isso precisa ficar explicito na iteracao correspondente, para nao virar promessa silenciosa de API futura.
- Quando um recorte cruzar muitas `UFs` ou muitos ambientes, ele deve nascer menor e additive, mesmo que a cobertura documental ja esteja mais ampla.
