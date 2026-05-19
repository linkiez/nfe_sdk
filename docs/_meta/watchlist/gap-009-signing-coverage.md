# gap-009: Cobertura de Assinatura (e-CPF e Certificados Adicionais)

## Identificador

`gap-009`

## Titulo

Cobertura de assinatura digital — suporte a e-CPF, certificados A3, e assinatura de eventos alem de NF-e principal.

## Status

`em-progresso`

## Fonte primaria

Manual de Orientacao do Contribuinte (MOC) — secao de assinatura digital e requisitos de certificado. Especificacao PKI Brasil para e-CPF e e-CNPJ.

## Data de deteccao

2026-05

## Prazo de vigencia

Sem prazo — requisito funcional continuo.

## Descricao do gap

O SDK possui suporte inicial a assinatura com e-CNPJ (A1/PKCS#12). Esta especificacao acompanha a expansao para:

1. **e-CPF** — certificado de pessoa fisica para emissao de NF-e por MEI e profissionais liberais. Implementado parcialmente em specs/012 (fixture criada, testes de assinatura adicionados).
2. **Certificados A3** — certificados em hardware (token/smartcard) que nao exportam chave privada; requerem interface de assinatura delegada.
3. **Assinatura de eventos** — cancelamento, CCe, manifestacao do destinatario e eventos genericos exigem assinatura proprio-evento (detEvento assinado separadamente do lote).
4. **Multiplos signatarios** — cenarios de procuracao eletronica (NF-e por terceiro autorizado).

## Impacto estimado no SDK

- `SigningContext` ja suporta e-CPF via `createSigningContext` com PKCS#12
- Pendente: interface para A3 (signing callback externo)
- Pendente: validacao de CN do certificado contra CNPJ/CPF do emitente
- Pendente: documentacao explicita de suporte e-CPF

## Spec associada

`specs/005-add-digital-signing/` — parcialmente coberto.
`specs/012-implement-audit-gaps/` — e-CPF fixture e testes adicionados (T039).

## Historico

| Data    | Evento                                                                |
| ------- | --------------------------------------------------------------------- |
| 2026-05 | Identificado como gap; e-CPF fixture implementada em specs/012 (T039) |
| 2026-05 | Status atualizado para em-progresso apos adicao de fixture e-CPF      |
