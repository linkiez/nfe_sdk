# src/canonical/recipient/recipient-shared.ts

## Visao geral

Define o contrato tipado compartilhado do slice recipient e utilitarios pequenos de normalizacao e validacao sintatica.

## Responsabilidades

- Declarar atores, requests, outcomes, cursores e envelopes publicos do destinatario.
- Formalizar as classificacoes observaveis de distribuicao e manifestacao.
- Oferecer helpers de normalizacao e validacao usados pelas orquestracoes.

## Entradas e saidas

- Entradas: valores textuais de CPF, CNPJ, NSU, chave de acesso e XML.
- Saidas: tipos TypeScript e helpers booleanos/string para o slice recipient.

## Tratamento de erros e casos-limite

- Restringe atores a `cpf` e `cnpj`.
- Valida `ultNSU` com 15 digitos e chave com 44 digitos.
- Escapa caracteres especiais antes da montagem de payloads XML.

## Dependencias e integracoes

- `../signing/contracts.js`
- `../transport/contracts.js`
- `../transport/request-executor.js`