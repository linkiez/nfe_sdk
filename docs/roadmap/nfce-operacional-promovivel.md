# Recorte Promovivel de NFC-e

## Objetivo

Definir, para a iteracao `3`, qual parte do acervo oficial de `NFC-e` deve ser promovida para `runtime`, qual parte deve permanecer como `tooling` ou `exemplo`, e quais deltas ainda precisam continuar no backlog documental por `UF`.

## Regra de leitura

- `Promover para runtime` significa comportamento elegivel para contrato publico do pacote.
- `Manter como tooling` significa apoio ao integrador, automacao auxiliar ou validacao operacional sem virar API principal.
- `Manter como exemplo/documentacao` significa referencia util ao integrador sem compromisso de execucao pelo SDK.

## Corte recomendado por assunto

| Assunto `NFC-e`                               | Base oficial principal                                                         | Destino recomendado                    | Justificativa curta                                                                |
| --------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------- | ---------------------------------------------------------------------------------- |
| Autorizacao homologada do nucleo comum        | `NT 2023.002`, `PL 010c`, slice atual da spec `010`                            | Promover para `runtime`                | Ja existe base tecnica e contrato inicial no pacote                                |
| Selecao deterministica do cohort `SP` + `PR`  | Evidencia estadual `SP` e `PR`, specs `010` e `015`                            | Promover para `runtime`                | Ja define o primeiro cohort multi-UF pequeno, additive e auditavel do runtime      |
| Rejeicao explicita de `UF` nao suportada      | Matriz por `UF` e profile selection da spec `010`                              | Promover para `runtime`                | Evita transporte remoto em estado sem suporte fechado                              |
| `CSC` e `QR Code`                             | Manual `DANFE NFC-e`, `NT 2018.001`, informe `GO 2025.003`, deltas `PR` e `PB` | Manter em backlog de `runtime`         | Exigem recorte claro entre emissao, pos-autorizacao e variacao por `UF`            |
| Contingencia `offline`                        | Anexo IV do `MOC`, manual `offline NFC-e`                                      | Manter em backlog de `runtime`         | Depende de criterio estadual e boundary de operacao offline ainda nao estabilizado |
| `EPEC NFC-e` e cancelamento por substituicao  | `NT NFC-e 2014.001`, `NT 2018.004`                                             | Manter em backlog de `runtime`         | Sao extensoes operacionais ainda nao reduzidas a slice minima coerente             |
| `DANFE NFC-e` visual e consulta do consumidor | Manual `DANFE NFC-e` e `QR Code`                                               | Manter como `exemplo` + `documentacao` | O documento e essencial como boundary, mas nao exige renderer no runtime atual     |
| Runbooks de credenciamento e onboarding       | `PR`, `PB`, `AC`, `SC`, `SP`, manual de boas praticas `NFC-e`                  | Manter como `tooling` + `documentacao` | Ajudam o integrador sem virarem API fiscal                                         |
| Diagnostico de ambientes e acessos por `UF`   | `SVRS`, `SVAN`, matriz por `UF`, portais estaduais                             | Manter como `tooling`                  | E suporte operacional e de observabilidade, nao contrato fiscal primario           |

## Corte recomendado por tipo de entrega

### O que pode virar API na proxima promocao

- Fluxo de autorizacao homologada do nucleo `NFC-e` ja suportado.
- Selecao do cohort promovido `SP` + `PR` e falha deterministica para `UF` fora do escopo.

### O que deve virar exemplo ou runbook primeiro

- `DANFE NFC-e`, consulta do consumidor e leitura do `QR Code`.
- Credenciamento, onboarding estadual e diferencas de acesso autenticado.

### O que deve ficar fora da promocao imediata

- `CSC`, `QR Code` assinavel, contingencia `offline`, `EPEC NFC-e` e cancelamento por substituicao.
- Qualquer comportamento que dependa de delta estadual sem matriz de `UF` suficientemente fechada.

## Leitura por `UF` mais relevante

| `UF` | Sinal atual                                                             | Efeito no recorte promovivel                                                   |
| ---- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `SP` | Piloto operacional ja promovido no runtime atual                        | Permanece como ancora da promocao inicial                                      |
| `PR` | `CSC`, `QR Code`, contingencia, `homologacao` e `producao` bem visiveis | Primeira `UF` adicional promovida, mantendo o backlog auxiliar fora do runtime |
| `PB` | Consulta publica e geracao de `CSC` observaveis                         | Reforca que `CSC` ainda exige boundary proprio                                 |
| `GO` | Delta especifico de `QR Code` por informe tecnico                       | Reforca risco de variacao por `UF`                                             |
| `SC` | Politica forte de autenticacao e download                               | Mostra que acesso e consulta nao equivalem a suporte operacional uniforme      |
| `CE` | Entrada `NFC-e` em producao e catalogo tecnico parcial                  | Indica potencial de expansao futura, mas ainda com evidencia ruidosa           |

## Fechamento minimo da iteracao `3`

- Existe uma fronteira escrita dizendo o que entra em `runtime` no proximo slice de `NFC-e`.
- `CSC`, `QR Code`, contingencia e extensoes por `UF` ficam explicitamente fora da promocao imediata, e nao apenas esquecidos.
- O roadmap passa a distinguir com clareza `API`, `tooling`, `exemplo` e backlog estadual para `NFC-e`.
