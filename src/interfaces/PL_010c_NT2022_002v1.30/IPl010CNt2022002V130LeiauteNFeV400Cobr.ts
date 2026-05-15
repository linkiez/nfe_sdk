import { CPl010CNt2022002V130LeiauteNFeV400Dup } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Dup';

import { CPl010CNt2022002V130LeiauteNFeV400Fat } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Fat';

/**
 * Dados da cobrança da NF-e
 */
export interface IPl010CNt2022002V130LeiauteNFeV400Cobr {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Dados da fatura
   */
  fat?: CPl010CNt2022002V130LeiauteNFeV400Fat;
  /**
   * Dados das duplicatas NT 2011/004
   */
  dup?: CPl010CNt2022002V130LeiauteNFeV400Dup;
}
