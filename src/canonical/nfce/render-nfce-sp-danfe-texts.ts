/**
 * Fixed texts and formats printed on every SP DANFE NFC-e (HTML and PDF), so both renderers
 * print exactly the same legal notices.
 */
const danfeTexts = {
  homologationNotice: 'EMITIDA EM AMBIENTE DE HOMOLOGAÇÃO – SEM VALOR FISCAL',
  /** MOC DANFE NFC-e, block VI: a document without a consumer prints this notice. */
  unidentifiedConsumerNotice: 'CONSUMIDOR NÃO IDENTIFICADO',
  title: 'DANFE NFC-e - Documento Auxiliar da Nota Fiscal de Consumidor Eletrônica',
  /** The access key in groups of four digits, as printed for consultation. */
  formatAccessKey(accessKey: string): string {
    return accessKey.match(/.{4}/gu)?.join(' ') ?? accessKey;
  },
} as const;

export default danfeTexts;
