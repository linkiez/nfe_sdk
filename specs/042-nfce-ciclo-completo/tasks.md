# Tarefas 042 — Ciclo completo da NFC-e no SDK

Rastreabilidade: tarefas T016 a T034 e T088 a T090 da spec JCMAP-1678.

- [X] Matriz do ciclo de vida da NFC-e, QR Code, denegação, calendário e conteúdo do DANFE (`docs/roadmap/nfce-lifecycle-matrix.md`).
- [X] Cancelamento e inutilização do modelo 65 (testes `tests/integration/nfce-lifecycle-sp.test.ts`).
- [X] Consulta pela chave e status do serviço do modelo 65.
- [X] Cancelamento por substituição (110112), válido contra o XSD oficial.
- [X] DANFE a partir do `nfeProc` autorizado.
- [X] Testes de contrato: superfície pública inalterada.
- [ ] Rodada de homologação do modelo 65 com certificado de teste (`@homologation`).
- [ ] Publicar a versão no GitHub Packages e atualizar o JCMserver3.
