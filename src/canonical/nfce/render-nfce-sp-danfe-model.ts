/**
 * Fiscal fields projected from the authorized NFC-e XML for HTML rendering.
 */
export default interface NFCePresentation {
  readonly additionalMessages: readonly string[];
  readonly authorizationDate?: string;
  readonly change?: string;
  readonly consumer?: string;
  readonly documentDate: string;
  readonly documentNumber: string;
  readonly documentSeries: string;
  readonly deliveryAddress?: string;
  readonly issuerAddress: string;
  readonly issuerDocument: string;
  readonly issuerName: string;
  readonly items: readonly {
    readonly code: string;
    readonly description: string;
    readonly quantity: string;
    readonly unit: string;
    readonly unitPrice: string;
    readonly total: string;
  }[];
  readonly payments: readonly { readonly method: string; readonly amount: string }[];
  readonly totals: readonly { readonly label: string; readonly value: string }[];
}
