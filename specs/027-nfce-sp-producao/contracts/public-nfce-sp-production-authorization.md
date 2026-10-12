# Public Contract: NFC-e SP Production Authorization

## Entry point

Use the existing root ESM export `authorizeNFCe` from `nfe-sdk`. This feature adds no import path or second authorization facade.

## Request

The request retains the existing `NFCeAuthorizationRequest` shape and gains additive optional `csc` and `unsignedXml` fields. `csc` uses the existing `NFCeCSCInput` type; `unsignedXml` is required for production so the SDK can sign the actual fiscal document instead of serializing the canonical placeholder.

- `environment` accepts `production` for SP model 65 and retains existing `homologation` behavior for the currently promoted SP+PR cohort.
- Production requests are SP-only, contain one document, and provide unsigned fiscal XML whose `infNFe@Id`, emitter CNPJ/CPF, `cUF`, emission year/month, `mod`, `serie`, `nNF`, `tpEmis`, `cNF`, and `cDV` match the requested access key, and whose `tpAmb` matches production. The XML is signed with the SDK `SigningContext` before transport.
- Production requests provide an injected mTLS-capable `RequestExecutor`.
- Production requests provide the issuer's externally provisioned `{ cscId, cscToken }` so the successful outcome can include the existing SP QR Code v3 URL. The token must never be returned, logged, placed in transport evidence, or included in the URL.
- Existing homologation callers may omit `csc`; when it is supplied and authorization succeeds, the outcome may include the QR URL.

The production endpoint is `https://nfce.fazenda.sp.gov.br/ws/NFeAutorizacao4.asmx`. It is distinct from the NF-e model 55 endpoint, the homologation host, and contingency services.

## Response

Return the existing `NFCeAuthorizationOutcome` classifications and transport evidence. Add optional `qrCodeUrl` and `nextAction` to that response contract. An authorized production response includes the exact 17- or 15-digit protocol string as returned and a QR URL composed from the same 44-digit access key and `production` (`tpAmb=1`). A `received` response with a receipt exposes `nextAction: 'reconcileNFeReceipt'`; this is caller guidance only and does not trigger automatic reconciliation. A rejected or uncertain response is never described as authorized. Pending results do not trigger automatic receipt polling or retry.

The QR URL uses the existing v3 helper and official SP production consultation base. CSC remains an SDK-local input prerequisite to producing this field; it is not a v3 URL parameter. QR URL composition does not prove authorization or consumer consultation availability.

## Error and boundary behavior

- Unsupported production UF, model mismatch, document/key/emitter/UF/environment mismatch, any access-key/XML fiscal field mismatch, missing signing context, missing production mTLS executor, or missing production CSC is rejected before any SOAP request.
- Transport timeout/unavailability and SOAP/protocol errors preserve their existing non-authorized classifications; uncertain submissions are not retried automatically.
- Production never falls back to SVC-AN/SVC-RS or homologation.
- Credentialing, certificate issuance, CSC issuance, DANFE rendering, consumer consultation health, and offline contingency remain external or separately scoped.

## Compatibility

This is an additive root-contract change: optional request and response fields only; existing root identifiers, ESM package metadata, import path, and homologation behavior remain stable. Production sends the caller's signed fiscal XML in the synchronous envelope; the canonical placeholder serialization is not used for this route. The checked-in XSD accepts 15- and 17-digit protocol numbers and validates the signed model 65 fixture. No generated schema changes are needed.

## Validation contract

Tests use deterministic fixtures and an injected executor; no real production SEFAZ request is performed. Verify the selected endpoint/environment/provider, one-document synchronous behavior, signature and preflight boundaries, response outcome mapping, QR key/environment match, token redaction, and 17-digit protocol preservation.
