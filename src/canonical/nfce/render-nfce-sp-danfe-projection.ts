import { DOMParser } from '@xmldom/xmldom';

import { NFCeOperationalUsageError } from './errors.js';
import type NFCePresentation from './render-nfce-sp-danfe-model.js';
import xml from './render-nfce-sp-danfe-xml.js';

type XmlElement = NonNullable<
  ReturnType<DOMParser['parseFromString']>['documentElement']
>;
const { child, descendants, requiredText, text } = xml;

const PAYMENT_METHODS: Readonly<Record<string, string>> = {
  '01': 'Dinheiro',
  '02': 'Cheque',
  '03': 'Cartão de crédito',
  '04': 'Cartão de débito',
  '05': 'Crédito loja',
  '10': 'Vale alimentação',
  '11': 'Vale refeição',
  '12': 'Vale presente',
  '13': 'Vale combustível',
  '15': 'Boleto bancário',
  '16': 'Depósito bancário',
  '17': 'Pagamento instantâneo (PIX)',
  '18': 'Transferência bancária',
  '19': 'Programa de fidelidade',
  '90': 'Sem pagamento',
  '99': 'Outros',
};

function postalAddress(address: XmlElement, path: string): string {
  const fields = [
    requiredText(address, 'xLgr', `${path}/xLgr`),
    requiredText(address, 'nro', `${path}/nro`),
    requiredText(address, 'xBairro', `${path}/xBairro`),
    requiredText(address, 'xMun', `${path}/xMun`),
    requiredText(address, 'UF', `${path}/UF`),
  ];
  const complement = text(child(address, 'xCpl'));
  const postalCode = text(child(address, 'CEP'));
  return [
    fields.slice(0, 2).join(', '),
    ...(complement === undefined ? [] : [complement]),
    fields[2],
    `${fields[3]} - ${fields[4]}`,
    ...(postalCode === undefined ? [] : [`CEP ${postalCode}`]),
  ].join(' - ');
}

function issuerAddress(issuer: XmlElement): string {
  const address = child(issuer, 'enderEmit');
  if (address === undefined) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE requires NFC-e issuer address data.',
    );
  }
  return postalAddress(address, 'emit/enderEmit');
}

/**
 * Projects required DANFE fields from an already-validated NFC-e XML document.
 *
 * @param nfe - Parsed fiscal NFe element.
 * @param accessKey - Correlated 44-digit access key.
 * @param authorizationDate - Receipt timestamp from the authorization protocol, when authorized.
 * @returns Immutable data model consumed by the HTML renderer.
 */
export default function projectNFCe(
  nfe: XmlElement,
  accessKey: string,
  authorizationDate?: string,
): NFCePresentation {
  const infNFe = child(nfe, 'infNFe')!;
  const ide = child(infNFe, 'ide')!;
  const issuer = child(infNFe, 'emit');
  if (issuer === undefined) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE requires NFC-e issuer data.',
    );
  }
  const issuerDocument =
    text(child(issuer, 'CNPJ')) ?? text(child(issuer, 'CPF'));
  if (issuerDocument === undefined) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE requires NFC-e issuer CNPJ or CPF.',
    );
  }
  const accessKeyIssuerDocument = accessKey.slice(6, 20);
  const normalizedIssuerDocument =
    issuerDocument.length === 11 ? `000${issuerDocument}` : issuerDocument;
  if (normalizedIssuerDocument !== accessKeyIssuerDocument) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE issuer identifier does not match the access key.',
    );
  }
  const issuerName = requiredText(issuer, 'xNome', 'emit/xNome');
  const items = descendants(infNFe, 'det').map((detail) => {
    const product = child(detail, 'prod');
    if (product === undefined) {
      throw new NFCeOperationalUsageError(
        'renderNFCeSPDANFE requires prod data for every NFC-e item.',
      );
    }
    return {
      code: requiredText(product, 'cProd', 'det/prod/cProd'),
      description: requiredText(product, 'xProd', 'det/prod/xProd'),
      quantity: requiredText(product, 'qCom', 'det/prod/qCom'),
      unit: requiredText(product, 'uCom', 'det/prod/uCom'),
      unitPrice: requiredText(product, 'vUnCom', 'det/prod/vUnCom'),
      total: requiredText(product, 'vProd', 'det/prod/vProd'),
    };
  });
  if (items.length === 0) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE requires at least one NFC-e item.',
    );
  }

  const icmsTotal = descendants(infNFe, 'ICMSTot')[0];
  if (icmsTotal === undefined) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE requires NFC-e totals.',
    );
  }
  const totalFields = [
    ['Valor dos produtos', 'vProd'],
    ['Descontos', 'vDesc'],
    ['Frete', 'vFrete'],
    ['Seguro', 'vSeg'],
    ['Outros acréscimos', 'vOutro'],
    ['Valor a pagar', 'vNF'],
  ] as const;
  const totals: { readonly label: string; readonly value: string }[] =
    totalFields.flatMap(([label, field]) => {
      const value = text(child(icmsTotal, field));
      return value === undefined ? [] : [{ label, value }];
    });
  if (!totals.some(({ label }) => label === 'Valor a pagar')) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE requires NFC-e total amount vNF.',
    );
  }
  const totalTaxes = text(child(icmsTotal, 'vTotTrib'));
  if (totalTaxes !== undefined) {
    totals.push({ label: 'Tributos aproximados', value: totalTaxes });
  }

  const payment = child(infNFe, 'pag');
  if (payment === undefined) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE requires NFC-e payment data.',
    );
  }
  const payments = descendants(payment, 'detPag').map((detail) => {
    const code = requiredText(detail, 'tPag', 'pag/detPag/tPag');
    return {
      method: PAYMENT_METHODS[code] ?? `Forma ${code}`,
      amount: requiredText(detail, 'vPag', 'pag/detPag/vPag'),
    };
  });
  if (payments.length === 0) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE requires at least one payment detail.',
    );
  }

  const consumerElement = child(infNFe, 'dest');
  const consumer =
    consumerElement === undefined
      ? undefined
      : [
          text(child(consumerElement, 'xNome')),
          text(child(consumerElement, 'CNPJ')) ??
            text(child(consumerElement, 'CPF')),
        ]
          .filter((value): value is string => value !== undefined)
          .join(' - ') || undefined;
  const additionalInfo = child(infNFe, 'infAdic');
  const delivery = child(infNFe, 'entrega');

  return {
    ...(authorizationDate === undefined ? {} : { authorizationDate }),
    additionalMessages: additionalInfo
      ? [
          text(child(additionalInfo, 'infAdFisco')),
          text(child(additionalInfo, 'infCpl')),
        ].filter((value): value is string => value !== undefined)
      : [],
    change: text(child(payment, 'vTroco')),
    consumer,
    documentDate: requiredText(ide, 'dhEmi', 'ide/dhEmi'),
    documentNumber: requiredText(ide, 'nNF', 'ide/nNF'),
    documentSeries: requiredText(ide, 'serie', 'ide/serie'),
    deliveryAddress:
      delivery === undefined ? undefined : postalAddress(delivery, 'entrega'),
    issuerAddress: issuerAddress(issuer),
    issuerDocument,
    issuerName,
    items,
    payments,
    totals,
  };
}
