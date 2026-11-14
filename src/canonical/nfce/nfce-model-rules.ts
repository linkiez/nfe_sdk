/**
 * Validation rules of the NFC-e (model 65), taken from MOC 7.0 Annex I (research R18 of the
 * JCMAP-1678 spec). Each rule names the SEFAZ rejection it anticipates. The functions are pure
 * and work on the draft, before anything is signed or sent.
 */

const ACCEPTED_CFOP = ['5101', '5102', '5103', '5104', '5115', '5405', '5656', '5667', '5933'] as const;
const ACCEPTED_ICMS_CST = ['00', '20', '40', '41', '60'] as const;
const ACCEPTED_CSOSN = ['102', '103', '300', '400', '500'] as const;

const HOMOLOGATION_FIRST_ITEM =
  'NOTA FISCAL EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL';
const MAX_TOTAL_CENTS = 20_000_000n;
const CONSUMER_REQUIRED_ABOVE_CENTS = 1_000_000n;
const CARD_PAYMENTS = ['03', '04', '17'];
const REFUSED_PAYMENTS: Readonly<Record<string, [string, string]>> = {
  '14': ['857', 'duplicata mercantil'],
  '90': ['899', 'sem pagamento'],
  '99': ['436', 'outros'],
};
/** Item groups the NFC-e does not admit, with the rejection each one triggers. */
const REFUSED_TAX_GROUPS: ReadonlyArray<[string, string]> = [
  ['IPI', '746'],
  ['II', '749'],
  ['PISST', '742'],
  ['COFINSST', '743'],
  ['ICMSUFDest', '807'],
];
const REFUSED_PRODUCT_GROUPS: ReadonlyArray<[string, string]> = [
  ['veicProd', '736'],
  ['arma', '738'],
];
const REFUSED_ROOT_GROUPS: ReadonlyArray<[string, string]> = [
  ['exporta', '814'],
  ['compra', '762'],
  ['cana', '763'],
];

type Rec = Record<string, unknown>;

/**
 * Lists the fiscal codes the NFC-e accepts, so a client can restrict its choices without
 * repeating the rule.
 *
 * @returns Independent copies of the accepted CFOP, ICMS CST and CSOSN lists.
 */
export function getNFCeAcceptedFiscalCodes(): {
  cfop: string[];
  icmsCst: string[];
  csosn: string[];
} {
  return {
    cfop: [...ACCEPTED_CFOP],
    csosn: [...ACCEPTED_CSOSN],
    icmsCst: [...ACCEPTED_ICMS_CST],
  };
}

function asRecord(value: unknown): Rec {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? (value as Rec)
    : {};
}

function text(value: unknown): string | undefined {
  return typeof value === 'string' ? value : typeof value === 'number' ? String(value) : undefined;
}

/** Parses a decimal with up to two places into cents; `undefined` when it is not one. */
function cents(value: unknown): bigint | undefined {
  const raw = text(value);
  const match = raw === undefined ? null : /^(\d+)(?:\.(\d{1,2}))?$/u.exec(raw);

  return match ? BigInt(match[1]) * 100n + BigInt((match[2] ?? '').padEnd(2, '0') || '0') : undefined;
}

function issue(path: string, message: string, code: string): string {
  return `${path}: ${message} (rejeicao ${code})`;
}

function identityRules(infNFe: Rec, issues: string[]): void {
  const ide = asRecord(infNFe.ide);
  const emit = asRecord(infNFe.emit);

  if (ide.dhSaiEnt !== undefined) {
    issues.push(issue('infNFe.ide.dhSaiEnt', 'a NFC-e nao tem data de saida', '705'));
  }
  if (ide.NFref !== undefined) {
    issues.push(issue('infNFe.ide.NFref', 'a NFC-e nao referencia documentos', '708'));
  }
  const serie = text(ide.serie);

  if (serie !== undefined && /^\d+$/u.test(serie)) {
    const number = Number(serie);
    const cpfIssuer = text(emit.CPF) !== undefined;
    const valid = cpfIssuer ? number >= 920 && number <= 969 : number <= 889;

    if (!valid) {
      issues.push(
        issue(
          'infNFe.ide.serie',
          cpfIssuer
            ? 'emitente CPF usa serie de 920 a 969'
            : 'emitente CNPJ usa serie de 0 a 889',
          cpfIssuer ? '503' : '244',
        ),
      );
    }
  }
  if (emit.IEST !== undefined) {
    issues.push(issue('infNFe.emit.IEST', 'emitente nao pode ser substituto tributario', '718'));
  }
}

function consumerRules(infNFe: Rec, issues: string[]): void {
  const dest = infNFe.dest === undefined ? undefined : asRecord(infNFe.dest);
  const total = cents(asRecord(asRecord(infNFe.total).ICMSTot).vNF);

  if (dest === undefined) {
    if (total !== undefined && total > CONSUMER_REQUIRED_ABOVE_CENTS) {
      issues.push(issue('infNFe.dest', 'consumidor obrigatorio acima de R$ 10.000,00', '750'));
    }
    if (text(asRecord(infNFe.ide).indPres) === '4') {
      issues.push(issue('infNFe.dest', 'consumidor obrigatorio na entrega a domicilio', '787'));
    }

    return;
  }
  if (text(dest.indIEDest) !== '9') {
    issues.push(issue('infNFe.dest.indIEDest', 'consumidor e nao contribuinte (9)', '789'));
  }
  if (dest.IE !== undefined) {
    issues.push(issue('infNFe.dest.IE', 'consumidor nao informa IE', '729'));
  }
  if (dest.ISUF !== undefined) {
    issues.push(issue('infNFe.dest.ISUF', 'consumidor nao informa inscricao SUFRAMA', '730'));
  }
  const emitCnpj = text(asRecord(infNFe.emit).CNPJ);

  if (emitCnpj !== undefined && text(dest.CNPJ) === emitCnpj) {
    issues.push(issue('infNFe.dest', 'o CNPJ do consumidor nao pode ser o do emitente', '220'));
  }
}

function icmsRules(path: string, icms: Rec, issues: string[]): void {
  const [group, node] = Object.entries(icms)[0] ?? [];

  if (group === undefined) {
    return;
  }
  const body = asRecord(node);
  const code = group.startsWith('ICMSSN') ? '383' : '766';
  const cst = text(body.CST);
  const csosn = text(body.CSOSN);
  const known: Readonly<Record<string, readonly string[]>> = {
    ICMS00: ['00'],
    ICMS20: ['20'],
    ICMS40: ['40', '41'],
    ICMS60: ['60'],
  };
  const allowed =
    group in known
      ? cst !== undefined && known[group].includes(cst)
      : group === 'ICMSSN102'
        ? csosn !== undefined && ['102', '103', '300', '400'].includes(csosn)
        : group === 'ICMSSN500'
          ? csosn === '500'
          : false;

  if (!allowed) {
    issues.push(
      issue(
        path,
        `${group}${cst ?? csosn ? ` (${cst ?? csosn})` : ''} nao e aceito na NFC-e; aceitos: CST ${ACCEPTED_ICMS_CST.join(', ')} e CSOSN ${ACCEPTED_CSOSN.join(', ')}`,
        code,
      ),
    );
  }
}

function itemRules(infNFe: Rec, issues: string[]): void {
  const homologation = text(asRecord(infNFe.ide).tpAmb) === '2';
  const items = Array.isArray(infNFe.det) ? infNFe.det : [];

  items.forEach((raw, index) => {
    const item = asRecord(raw);
    const prod = asRecord(item.prod);
    const tax = asRecord(item.imposto);
    const path = `infNFe.det[${index}]`;
    const cfop = text(prod.CFOP);

    if (text(prod.indTot) !== '1') {
      issues.push(issue(`${path}.prod.indTot`, 'o item compoe o total da nota (1)', '774'));
    }
    if (cfop !== undefined && !(ACCEPTED_CFOP as readonly string[]).includes(cfop)) {
      issues.push(issue(`${path}.prod.CFOP`, `CFOP ${cfop} nao e aceito; aceitos: ${ACCEPTED_CFOP.join(', ')}`, '725'));
    }
    if ((cfop === '5933') !== (tax.ISSQN !== undefined)) {
      issues.push(
        issue(
          `${path}.imposto.ISSQN`,
          cfop === '5933' ? 'CFOP 5933 exige o grupo ISSQN' : 'so o CFOP 5933 aceita o grupo ISSQN',
          '374',
        ),
      );
    }
    if (text(prod.NCM) === undefined || !/^\d{8}$/u.test(text(prod.NCM) ?? '')) {
      issues.push(issue(`${path}.prod.NCM`, 'NCM completo de 8 digitos', '777'));
    }
    if (homologation && index === 0 && text(prod.xProd) !== HOMOLOGATION_FIRST_ITEM) {
      issues.push(issue(`${path}.prod.xProd`, `em homologacao a descricao do primeiro item e "${HOMOLOGATION_FIRST_ITEM}"`, '373'));
    }
    const vProd = cents(prod.vProd);
    const vDesc = cents(prod.vDesc);

    if (vProd !== undefined && vDesc !== undefined && vDesc > vProd) {
      issues.push(issue(`${path}.prod.vDesc`, 'desconto maior que o valor do produto', '483'));
    }
    for (const [group, code] of REFUSED_PRODUCT_GROUPS) {
      if (prod[group] !== undefined) {
        issues.push(issue(`${path}.prod.${group}`, 'grupo inexistente na NFC-e', code));
      }
    }
    for (const [group, code] of REFUSED_TAX_GROUPS) {
      if (tax[group] !== undefined) {
        issues.push(issue(`${path}.imposto.${group}`, 'grupo inexistente na NFC-e', code));
      }
    }
    if (item.impostoDevol !== undefined) {
      issues.push(issue(`${path}.impostoDevol`, 'a NFC-e nao tem devolucao de tributos', '390'));
    }
    icmsRules(`${path}.imposto.ICMS`, asRecord(tax.ICMS), issues);
  });
}

function totalRules(infNFe: Rec, issues: string[]): void {
  const totals = asRecord(asRecord(infNFe.total).ICMSTot);
  const vNF = cents(totals.vNF);
  const declaredProducts = cents(totals.vProd);
  const items = Array.isArray(infNFe.det) ? infNFe.det : [];
  const summed = items.reduce<bigint | undefined>((sum, raw) => {
    const value = cents(asRecord(asRecord(raw).prod).vProd);

    return sum === undefined || value === undefined ? undefined : sum + value;
  }, 0n);

  if (vNF !== undefined && vNF > MAX_TOTAL_CENTS) {
    issues.push(issue('infNFe.total.ICMSTot.vNF', 'valor total acima de R$ 200.000,00', '780'));
  }
  if (summed !== undefined && declaredProducts !== undefined && summed !== declaredProducts) {
    issues.push(issue('infNFe.total.ICMSTot.vProd', 'difere da soma dos itens', '531'));
  }
}

function paymentRules(infNFe: Rec, issues: string[]): void {
  const pag = asRecord(infNFe.pag);
  const payments = Array.isArray(pag.detPag) ? pag.detPag : [];
  const vNF = cents(asRecord(asRecord(infNFe.total).ICMSTot).vNF);
  let paid: bigint | undefined = 0n;

  payments.forEach((raw, index) => {
    const payment = asRecord(raw);
    const tPag = text(payment.tPag) ?? '';
    const path = `infNFe.pag.detPag[${index}]`;
    const refused = REFUSED_PAYMENTS[tPag];

    if (refused !== undefined) {
      issues.push(issue(`${path}.tPag`, `forma de pagamento ${tPag} (${refused[1]}) nao e aceita na NFC-e`, refused[0]));
    }
    if (CARD_PAYMENTS.includes(tPag) && payment.card === undefined) {
      issues.push(issue(`${path}.card`, `a forma ${tPag} exige o grupo de cartao`, '391'));
    }
    const value = cents(payment.vPag);

    paid = paid === undefined || value === undefined ? undefined : paid + value;
  });

  if (paid === undefined || vNF === undefined || payments.length === 0) {
    return;
  }
  if (paid < vNF) {
    issues.push(issue('infNFe.pag', 'a soma dos pagamentos nao cobre o valor da nota', '865'));
  } else if (paid > vNF && cents(pag.vTroco) !== paid - vNF) {
    issues.push(issue('infNFe.pag.vTroco', 'informe o troco igual a soma dos pagamentos menos o valor da nota', '866'));
  }
}

/**
 * Applies the NFC-e model rules to a draft.
 *
 * @param infNFe - The `infNFe` content of the draft (official element names).
 * @returns One message per violated rule, each with its path and the SEFAZ rejection code.
 */
export function validateNFCeModelRules(infNFe: unknown): string[] {
  const draft = asRecord(infNFe);
  const issues: string[] = [];

  identityRules(draft, issues);
  consumerRules(draft, issues);
  itemRules(draft, issues);
  totalRules(draft, issues);
  paymentRules(draft, issues);
  for (const [group, code] of REFUSED_ROOT_GROUPS) {
    if (draft[group] !== undefined) {
      issues.push(issue(`infNFe.${group}`, 'grupo inexistente na NFC-e', code));
    }
  }

  return issues;
}
