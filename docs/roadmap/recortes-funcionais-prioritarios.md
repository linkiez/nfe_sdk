# Recortes Funcionais Prioritarios

## Objetivo

Traduzir os `RTM-*` e as iteracoes recomendadas em recortes funcionais menores, verificaveis e additive, para que a proxima expansao do roadmap canonico avance por entregas que um integrador consiga reconhecer como fluxo real.

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

| ID        | Recorte funcional                                             | `RTM-*` puxados                 | Classe dominante           | Escopo minimo                                                                                                                         | Fora do recorte                                                                                                      | Fechamento minimo                                                                            |
| --------- | ------------------------------------------------------------- | ------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `RFL-001` | Autorizacao com recibo e protocolo fim a fim                  | `RTM-004`, `RTM-006`            | `runtime`                  | receber `nRec`, consultar recibo, reconciliar protocolo e devolver resultado observavel sem expor XML cru como contrato principal     | polling generico sem boundary, persistencia local e filas longas de backoffice                                       | facade additive, fixture homologada, teste focado de recibo e protocolo                      |
| `RFL-002` | Pos-autorizacao orientada a estado para `NF-e`                | `RTM-006`, `RTM-002`            | `runtime`                  | fechar cancelamento, carta de correcao, inutilizacao e consulta por chave em uma leitura unica de estado do documento                 | gestor completo de ciclo de vida, base local embarcada e reconciliacao multi-documento                               | resultado estruturado por operacao, coverage matrix atualizada e regressao por fluxo         |
| `RFL-003` | Distribuicao e manifestacao com continuidade explicita        | `RTM-008`, `RTM-013`            | `runtime` + `tooling`      | combinar `distNSU`, cursores observaveis, prazos de manifestacao e download posterior como fluxo de integrador                        | `consNSU`, automacao de credenciamento e polling agressivo em producao                                               | boundary publicada, exemplos de continuidade e testes de consumo/retomada                    |
| `RFL-004` | Assinatura expandida para eventos, `NFC-e`, `DV` e `hashCSRT` | `RTM-003`                       | `runtime`                  | fechar a proxima slice de assinatura alem da `NFe` basica, incluindo eventos e os identificadores fiscais ainda pendentes             | cadeia multi-certificado automatica, assinatura de todas as familias paralelas e onboarding completo de certificados | spec fechada para a extensao, fixtures validas e compatibilidade additive declarada          |
| `RFL-005` | Contingencia por ambiente sem emissor embutido                | `RTM-005`, `RTM-012`            | `runtime` + `documentacao` | tornar explicita a degradacao suportada em `SVC`, `EPEC` e contingencia `offline` com diagnostico claro por ambiente                  | UI de emissor, retomada assistida completa e operacao desktop equivalente ao emissor legado                          | boundaries por ambiente, criterio de ativacao e saidas observaveis por fallback              |
| `RFL-006` | `NFC-e` operacional alem do piloto `SP`                       | `RTM-007`, `RTM-011`, `RTM-012` | `runtime` + `exemplo`      | promover um lote pequeno de `UFs` elegiveis, junto com `CSC`, `QR Code` e `DANFE NFC-e` no limite certo entre API e apoio operacional | promessa multi-UF irrestrita, cobertura nacional implicita e automacao de credenciamento                             | lote de `UFs` escolhido com criterio publico e recorte promovivel documentado por superficie |
| `RFL-007` | Trust chain, `WSDL` e downloads como diagnostico tecnico      | `RTM-003`, `RTM-018`            | `tooling`                  | transformar cadeias, downloads oficiais, `WSDL` e artefatos auxiliares em diagnostico repetivel de interoperabilidade                 | dependencia obrigatoria desses utilitarios no runtime e replicacao do assinador legado                               | comandos, exemplos e runbook tecnico conectados aos fluxos homologados                       |

## Sugestao de ordem pratica

1. `RFL-004`, porque a proxima slice de assinatura continua sendo o principal bloqueio tecnico formal aberto.
2. `RFL-001`, porque fecha o maior delta entre transporte homologado e fluxo fiscal completo percebido pelo integrador.
3. `RFL-006`, porque evita que `NFC-e` fique restrita demais ao piloto `SP` sem criterio claro de promocao.
4. `RFL-005`, porque contingencia precisa aparecer como comportamento explicitamente degradado, e nao como expectativa implícita.
5. `RFL-002` e `RFL-003`, para consolidar pos-transmissao e continuidade acima das operacoes basicas.
6. `RFL-007`, para endurecer interoperabilidade e onboarding tecnico sem inflar a API publica.

## Regra de uso

- Toda nova spec runtime deve apontar primeiro para um `RFL-*` deste anexo ou justificar por que exige um recorte funcional novo.
- Se um `RFL-*` nao passar de `documentacao`, isso precisa ficar explicito na iteracao correspondente, para nao virar promessa silenciosa de API futura.
- Quando um recorte cruzar muitas `UFs` ou muitos ambientes, ele deve nascer menor e additive, mesmo que a cobertura documental ja esteja mais ampla.
