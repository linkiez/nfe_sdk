# Plano 042 — Ciclo completo da NFC-e no SDK

## Decisões

1. **Roteamento pelo modelo**: a chave de acesso (dígitos 21 e 22) escolhe o serviço `nfce-*` em consulta e evento; o status do serviço usa `documentModel: 65`; a inutilização usa `inutilization.model`.
2. **Campos opcionais**: nenhuma assinatura existente muda; `publicPackageContract` ganha só uma nota de compatibilidade.
3. **Endereços**: catálogo próprio em `nfce-lifecycle-catalog-entries.ts` (SP em ambos os ambientes pelo portal da SEFAZ/SP; demais UFs em homologação pelo ambiente nacional), cada entrada com a fonte e a data.
4. **Regras fiscais**: ficam em `nfce-lifecycle-rules.ts` (chave de NFC-e, substituição, UFs com inutilização dispensada).
5. **DANFE**: `renderNFCeSPDANFE` aceita `authorizedXml`; o servidor nunca monta QR Code nem layout.

## Riscos

- Homologação de autorização em SVC-AN versus serviços no host de homologação do SP (ver a matriz).
- Calendário de dias úteis depende da confirmação do responsável fiscal.
