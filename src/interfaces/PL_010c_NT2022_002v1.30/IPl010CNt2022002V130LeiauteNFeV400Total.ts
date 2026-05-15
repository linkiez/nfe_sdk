import { CPl010CNt2022002V130LeiauteNFeV400IcmsTot } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400IcmsTot';

import { CPl010CNt2022002V130LeiauteNFeV400IssqNtot } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400IssqNtot';

import { CPl010CNt2022002V130LeiauteNFeV400RetTrib } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400RetTrib';

/**
 * Dados dos totais da NF-e
 */
export interface IPl010CNt2022002V130LeiauteNFeV400Total {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Totais referentes ao ICMS
   */
  CPl010CNt2022002V130LeiauteNFeV400IcmsTot?: CPl010CNt2022002V130LeiauteNFeV400IcmsTot;
  /**
   * Totais referentes ao ISSQN
   */
  CPl010CNt2022002V130LeiauteNFeV400IssqNtot?: CPl010CNt2022002V130LeiauteNFeV400IssqNtot;
  /**
   * Retenção de Tributos Federais
   */
  retTrib?: CPl010CNt2022002V130LeiauteNFeV400RetTrib;
  /**
   * Valores totais da NF com Imposto Seletivo
   */
  ISTot?: unknown;
  /**
   * Valores totais da NF com IBS / CBS
   */
  IBSCBSTot?: unknown;
  /**
   * Valor Total da NF considerando os impostos por fora IBS, CBS e IS
   */
  vNFTot?: unknown;
}
