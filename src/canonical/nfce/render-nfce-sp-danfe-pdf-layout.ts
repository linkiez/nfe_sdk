import type { AuthorizedNFCeIdentity } from './render-nfce-sp-danfe-authorized-projection.js';
import type NFCePresentation from './render-nfce-sp-danfe-model.js';
import danfeTexts from './render-nfce-sp-danfe-texts.js';

/** One printable block of the PDF DANFE NFC-e, top to bottom. */
export type NFCeDanfeBlock =
  | {
      readonly kind: 'text';
      readonly text: string;
      readonly align?: 'center';
      readonly bold?: boolean;
    }
  | { readonly kind: 'pair'; readonly left: string; readonly right: string }
  | { readonly kind: 'rule' }
  | { readonly kind: 'qr' }
  | { readonly kind: 'logo' };

const center = (text: string, bold = false): NFCeDanfeBlock => ({
  kind: 'text',
  text,
  align: 'center',
  bold,
});
const line = (text: string, bold = false): NFCeDanfeBlock => ({
  kind: 'text',
  text,
  bold,
});
const RULE: NFCeDanfeBlock = { kind: 'rule' };

/**
 * Lays out the DANFE NFC-e as printable blocks, with the same sections and legal texts as the
 * HTML DANFE: homologation notice, issuer, consumer, identification, items, totals, payment,
 * consultation (formatted access key, authorization protocol, QR Code and URL) and additional
 * messages.
 *
 * @param presentation - Fiscal fields projected from the authorized XML.
 * @param identity - Validated access key, environment, protocol and QR Code URL.
 * @param hasLogo - Whether the issuer logo is printed at the top.
 * @returns The blocks in print order.
 */
export default function layoutNFCeDanfe(
  presentation: NFCePresentation,
  identity: Pick<
    AuthorizedNFCeIdentity,
    'accessKey' | 'environment' | 'protocolNumber' | 'qrCodeUrl'
  >,
  hasLogo: boolean,
): NFCeDanfeBlock[] {
  const blocks: NFCeDanfeBlock[] = [];
  if (identity.environment === 'homologation') {
    blocks.push(center(danfeTexts.homologationNotice, true), RULE);
  }
  if (hasLogo) blocks.push({ kind: 'logo' });
  blocks.push(
    center(presentation.issuerName, true),
    center(presentation.issuerDocument),
    center(presentation.issuerAddress),
    RULE,
    presentation.consumer === undefined
      ? line(danfeTexts.unidentifiedConsumerNotice)
      : line(`Consumidor: ${presentation.consumer}`),
  );
  if (presentation.deliveryAddress !== undefined) {
    blocks.push(line(`Entrega: ${presentation.deliveryAddress}`));
  }
  blocks.push(
    center(danfeTexts.title, true),
    center(
      `Número ${presentation.documentNumber} - Série ${presentation.documentSeries}`,
    ),
    center(`Emissão: ${presentation.documentDate}`),
    RULE,
    line(`Itens da compra (${presentation.items.length})`, true),
  );
  presentation.items.forEach((item, index) => {
    blocks.push(
      line(`${index + 1}. ${item.description}`, true),
      line(`Código: ${item.code}`),
      line(`Quantidade: ${item.quantity} ${item.unit}`),
      line(`Valor unitário: ${item.unitPrice}`),
      line(`Valor total: ${item.total}`),
    );
  });
  blocks.push(RULE, line('Totais', true));
  for (const { label, value } of presentation.totals) {
    blocks.push({ kind: 'pair', left: label, right: `R$ ${value}` });
  }
  blocks.push(RULE, line('Pagamento', true));
  for (const { method, amount } of presentation.payments) {
    blocks.push(line(`${method}: R$ ${amount}`));
  }
  if (presentation.change !== undefined) {
    blocks.push(line(`Troco: R$ ${presentation.change}`));
  }
  blocks.push(
    RULE,
    center('Consulte pela chave de acesso', true),
    center(danfeTexts.formatAccessKey(identity.accessKey)),
    center(
      `Protocolo de autorização: ${identity.protocolNumber} - ${presentation.authorizationDate ?? ''}`.trimEnd(),
    ),
    { kind: 'qr' },
    center(identity.qrCodeUrl),
  );
  if (presentation.additionalMessages.length > 0) {
    blocks.push(RULE, line('Informações adicionais', true));
    for (const message of presentation.additionalMessages) {
      blocks.push(line(message));
    }
  }

  return blocks;
}
