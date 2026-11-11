const NFE_NAMESPACE = 'http://www.portalfiscal.inf.br/nfe';

const tpAmb = (environment: string): '1' | '2' => (environment === 'production' ? '1' : '2');

/**
 * Builds the official `consStatServ` (layout 4.00) service-status request.
 *
 * @param environment - `production` or `homologation`.
 * @param cUF - 2-digit IBGE code of the queried UF.
 * @returns The request XML (without declaration).
 * @throws {Error} When `cUF` is not 2 digits.
 */
export function buildConsStatServXml(environment: string, cUF: string): string {
  if (!/^\d{2}$/u.test(cUF)) {
    throw new Error('cUF must have 2 digits.');
  }

  return `<consStatServ xmlns="${NFE_NAMESPACE}" versao="4.00"><tpAmb>${tpAmb(environment)}</tpAmb><cUF>${cUF}</cUF><xServ>STATUS</xServ></consStatServ>`;
}

/**
 * Builds the official `consSitNFe` (layout 4.00) protocol query.
 *
 * @param environment - `production` or `homologation`.
 * @param accessKey - 44-digit access key.
 * @returns The request XML (without declaration).
 * @throws {Error} When the key is not 44 digits.
 */
export function buildConsSitNFeXml(environment: string, accessKey: string): string {
  if (!/^\d{44}$/u.test(accessKey)) {
    throw new Error('accessKey must have 44 digits.');
  }

  return `<consSitNFe xmlns="${NFE_NAMESPACE}" versao="4.00"><tpAmb>${tpAmb(environment)}</tpAmb><xServ>CONSULTAR</xServ><chNFe>${accessKey}</chNFe></consSitNFe>`;
}

/** Selector of a `distDFeInt` query. */
export type DistDFeSelector =
  | { readonly ultNSU: string }
  | { readonly nsu: string }
  | { readonly accessKey: string };

/**
 * Builds the official `distDFeInt` (layout 1.01) distribution query.
 *
 * @param environment - `production` or `homologation`.
 * @param authorUF - 2-digit IBGE code of the author UF (`cUFAutor`).
 * @param taxId - 14-digit CNPJ or 11-digit CPF of the interested party.
 * @param selector - Last NSU, a single NSU or an access key.
 * @returns The request XML (without declaration).
 * @throws {Error} When any value is malformed.
 */
export function buildDistDFeIntXml(
  environment: string,
  authorUF: string,
  taxId: string,
  selector: DistDFeSelector,
): string {
  if (!/^\d{2}$/u.test(authorUF)) throw new Error('cUFAutor must have 2 digits.');
  if (!/^(?:\d{14}|\d{11})$/u.test(taxId)) throw new Error('taxId must be a 14-digit CNPJ or 11-digit CPF.');
  const idTag = taxId.length === 14 ? 'CNPJ' : 'CPF';
  let choice: string;

  if ('ultNSU' in selector) {
    if (!/^\d{15}$/u.test(selector.ultNSU)) throw new Error('ultNSU must have 15 digits.');
    choice = `<distNSU><ultNSU>${selector.ultNSU}</ultNSU></distNSU>`;
  } else if ('nsu' in selector) {
    if (!/^\d{15}$/u.test(selector.nsu)) throw new Error('NSU must have 15 digits.');
    choice = `<consNSU><NSU>${selector.nsu}</NSU></consNSU>`;
  } else {
    if (!/^\d{44}$/u.test(selector.accessKey)) throw new Error('accessKey must have 44 digits.');
    choice = `<consChNFe><chNFe>${selector.accessKey}</chNFe></consChNFe>`;
  }

  return `<distDFeInt xmlns="${NFE_NAMESPACE}" versao="1.01"><tpAmb>${tpAmb(environment)}</tpAmb><cUFAutor>${authorUF}</cUFAutor><${idTag}>${taxId}</${idTag}>${choice}</distDFeInt>`;
}
