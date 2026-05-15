import { CPl010CNt2022002V130LeiauteNFeV400RetTransp } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400RetTransp';

import { CPl010CNt2022002V130LeiauteNFeV400Transporta } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Transporta';

import { CPl010CNt2022002V130LeiauteNFeV400Vol } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Vol';

/**
 * Dados dos transportes da NF-e
 */
export interface IPl010CNt2022002V130LeiauteNFeV400Transp {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Dados do transportador
   */
  transporta?: CPl010CNt2022002V130LeiauteNFeV400Transporta;
  /**
   * Dados da retenção ICMS do Transporte
   */
  retTransp?: CPl010CNt2022002V130LeiauteNFeV400RetTransp;
  /**
   * Dados dos volumes
   */
  vol?: CPl010CNt2022002V130LeiauteNFeV400Vol;
}
