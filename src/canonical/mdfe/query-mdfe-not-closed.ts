import type { RequestExecutor } from '../transport/request-executor.js';

import type { MDFeEnvironment, MDFeOperationResult } from './contracts.js';
import { MDFE_LAYOUT_VERSION } from './contracts.js';
import { executeMDFeSoapService } from './execute-mdfe-soap-service.js';

const MDFE_NAMESPACE = 'http://www.portalfiscal.inf.br/mdfe';

/** Input of `queryMDFeNotClosed`. */
export interface MDFeNotClosedQueryRequest {
  /** CNPJ (14 digits) or CPF (11 digits) of the issuer; the service only answers the issuer. */
  readonly taxId: string;
  readonly environment: MDFeEnvironment;
  readonly requestExecutor?: RequestExecutor;
  readonly timeoutMs?: number;
}

/** One MDF-e that is authorized and not yet closed. */
export interface MDFeNotClosedItem {
  readonly accessKey: string;
  readonly protocol: string;
}

/** Result of `queryMDFeNotClosed`. */
export interface MDFeNotClosedQueryResult extends MDFeOperationResult {
  readonly items: readonly MDFeNotClosedItem[];
}

/**
 * Lists the issuer's authorized MDF-e that were not closed (`consMDFeNaoEnc`). cStat 111 lists
 * them and 112 means there are none. Access is restricted to the issuer's own CNPJ/CPF.
 *
 * @param input - Issuer id, environment and mutual-TLS executor.
 * @returns The classified answer with the access keys and protocols.
 */
export async function queryMDFeNotClosed(
  input: MDFeNotClosedQueryRequest,
): Promise<MDFeNotClosedQueryResult> {
  const idTag = /^\d{14}$/u.test(input.taxId) ? 'CNPJ' : /^\d{11}$/u.test(input.taxId) ? 'CPF' : undefined;
  if (idTag === undefined) {
    return {
      classification: 'usage-error',
      failureReason: 'taxId must be a CNPJ (14 digits) or a CPF (11 digits).',
      items: [],
    };
  }

  const tpAmb = input.environment === 'production' ? '1' : '2';
  const outcome = await executeMDFeSoapService({
    service: 'mdfe-not-closed',
    environment: input.environment,
    payloadXml: `<consMDFeNaoEnc xmlns="${MDFE_NAMESPACE}" versao="${MDFE_LAYOUT_VERSION}"><tpAmb>${tpAmb}</tpAmb><xServ>CONSULTAR NÃO ENCERRADOS</xServ><${idTag}>${input.taxId}</${idTag}></consMDFeNaoEnc>`,
    requestExecutor: input.requestExecutor,
    timeoutMs: input.timeoutMs,
  });
  const { responseXml, ...result } = outcome;
  const items = [...(responseXml ?? '').matchAll(/<infMDFe>([\s\S]*?)<\/infMDFe>/gu)].flatMap(([, block]) => {
    const accessKey = /<chMDFe>(\d{44})<\/chMDFe>/u.exec(block)?.[1];
    const protocol = /<nProt>(\d+)<\/nProt>/u.exec(block)?.[1];
    return accessKey === undefined || protocol === undefined ? [] : [{ accessKey, protocol }];
  });

  return { ...result, items };
}
