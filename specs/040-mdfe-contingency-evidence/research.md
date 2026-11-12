# Research: MDF-e contingency evidence (spec 040)

Documentation only (FR-005): no runtime behavior, no change to the published contract (CC-001). Consulted on 2026-11-12.

## Source register

| # | Source | Kind | Locator | Status |
|---|---|---|---|---|
| S1 | MOC Online MDF-e — "Contingência do MDF-e" (consolidation of the MOC v3.00b and later official documents, published by the SEFAZ-PR SPED portal) <http://moc.sped.fazenda.pr.gov.br/MDFe/Contingencia.html> | Official consolidation of the primary MOC | Sections 1–4 | Consulted |
| S2 | Manual de Orientação do Contribuinte do MDF-e v3.00a/3.00b (RFB SPED portal) <http://sped.rfb.gov.br/pasta/show/1749> | Primary (MOC, Anexo I layout, Anexo II DAMDFE) | Not read here | **Pending**: confirm the S1 text against the primary PDF |
| S3 | NT/ENCAT notes on MDF-e contingency, SVRS MDF-e portal, Fazenda SP publications | Primary | Not consulted | **Pending** (FR-001 requires them) |
| S4 | Vendor help pages (IOB "Aprendo", Tecnospeed contingency flow) | Secondary | — | Not authority (FR-003); only confirm the 168 h window in common practice |

## Findings per required step (FR-002)

| Step | Evidence in S1 | Verdict |
|---|---|---|
| Mode and eligibility | MDF-e has **Contingência Off-line**. Only for technical communication/processing problems that prevent real-time authorization; normal issuance remains the rule. The tax authority may ask for explanations or restrict the mode on excessive, unjustified use. | Evidenced |
| Activation | The decision is the taxpayer's, **no prior authorization**. Set `tpEmis = 2`, generate a **new access key with `tpEmis = 2` keeping the same `cMDF`**, generate the DAMDFE QR Code with the `sign` parameter, print the DAMDFE with "EMISSÃO EM CONTINGÊNCIA". | Evidenced (confirm layout details in S2) |
| Endpoint / routing | The document is **transmitted to the normal authorization service** once the problem is over. S1 describes no separate contingency endpoint. | Evidenced by absence; confirm in S2/S3 |
| Payload / issuance changes | `tpEmis = 2`; no special series or paper; recommended to advance one number in the sequence on entering contingency (duplicate-rejection risk). | Evidenced |
| Duration / deadline | Transmit within **168 hours** counted from the contingency issuance. | Evidenced |
| Recovery / reconciliation | Transmission keeps the same access key and original `cMDF`; it may be **rejected if the cargo is already in circulation** and public/QR consultation exist only after authorization; until the document is in the tax authority database the taxpayer bears the risk of losing the data. A rejected or invalid contingency XML cannot be corrected afterwards (secondary source S4). | Evidenced |
| SP applicability | S1 is national (MOC/ENCAT) and states no UF restriction. No SP-specific publication was consulted. | **Unresolved** (needs S3) |
| Effective interval | Not stated in S1. | **Unresolved** |

## Conclusion

1. The premise recorded in spec 030 ("no verified MDF-e contingency procedure") is **not supported** by S1: the MOC describes an off-line contingency. It is still a single consolidated source; the primary MOC (S2), the notes/SVRS/SP publications (S3) and the effective interval are not yet checked.
2. Gate result: **partially evidenced, still excluded from runtime**. Per FR-004 it stays excluded until every step has primary support, and per CC-003 a positive result does not authorize implementation.
3. This tenant's scope (spec JCMAP-1502) only **receives** MDF-e (download and consultation); it neither issues nor closes MDF-e, so contingency has no consumer in this delivery.
4. If MDF-e issuance is ever scoped, a separate specification is required, which must address: the key regeneration with the same `cMDF`; the 168 h deadline and reconciliation by key; the QR Code `sign` parameter and DAMDFE legend; and the rejection risk when the cargo is already moving. Normal authorization must never switch to contingency silently (CC-002).

## Open items

- Read S2 and confirm each row above against the primary text; record page/section locators.
- Consult S3 for SP applicability and the effective interval; update the Feature 030 source register/matrix with the result (FR-006).
- Independent source/procedure review (CC-004) before closing the gate.
