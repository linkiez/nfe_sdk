import { CPl010CNt2022002V130LeiauteNFeV400ObsCont } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400ObsCont';

import { CPl010CNt2022002V130LeiauteNFeV400ObsFisco } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400ObsFisco';

/**
 * Grupo de observações de uso livre (para o item da NF-e)
 */
export interface IPl010CNt2022002V130LeiauteNFeV400ObsItem {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Grupo de observações de uso livre (para o item da NF-e)
   */
  obsCont?: CPl010CNt2022002V130LeiauteNFeV400ObsCont;
  /**
   * Grupo de observações de uso livre (para o item da NF-e)
   */
  obsFisco?: CPl010CNt2022002V130LeiauteNFeV400ObsFisco;
}
