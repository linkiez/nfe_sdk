# Spec 042 — Ciclo completo da NFC-e (modelo 65) no SDK

**Rastreabilidade**: spec JCMAP-1678 do JCMserver3 (`specs/JCMAP-1678-nfce-ciclo-completo`), histórias US1 e US2. **Branch**: `feat/JCMAP-1678-nfce-ciclo-completo`.

## Objetivo

Fechar no SDK toda a lógica fiscal da NFC-e que o servidor consome por `FiscalGateway`, sem lógica fiscal fora dele: montagem do documento, QR Code, DANFE, consulta, status, cancelamento, cancelamento por substituição, inutilização e contingência offline, com a matriz oficial por UF em [nfce-lifecycle-matrix](../../docs/roadmap/nfce-lifecycle-matrix.md).

## Escopo entregue

- `buildNFCeDocument` com as regras do Anexo I do MOC 7.0, `getNFCeAcceptedFiscalCodes`, `isNFCeResendWindowOpen` e `remountNFCeDocument`.
- `authorizeNFCe` sem CSC obrigatório, devolvendo o XML assinado e o `nfeProc`; denegação inexistente (110/301/302 vira `protocol-error`; irregularidade é a rejeição 781).
- `renderNFCeSPDANFE` também a partir do `nfeProc` autorizado (`authorizedXml`).
- Serviços `nfce-status-service`, `nfce-document-situation`, `nfce-event` e `nfce-inutilization`, com os endereços oficiais de SP; `cancelNFe` com `substituteAccessKey` (110112) e inutilização recusada em SP, AC e BA.

## Fora de escopo

EPEC da NFC-e, carta de correção (inexistente), UFs além de SP e PR, e o calendário de dias úteis (fornecido pelo integrador).

## Critérios de aceite

1. Os contratos de NF-e, MDF-e e NFC-e existentes permanecem inalterados (`publicPackageContract`).
2. Cada operação tem teste com executor injetado e, onde há XSD oficial, validação contra ele.
3. Homologação com certificado de teste (T033, execução manual `@homologation`) e publicação da versão (T034) pendentes.
