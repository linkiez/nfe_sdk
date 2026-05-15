import { CPl010CNt2022002V130LeiauteNFeV400ObsCont } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400ObsCont';

import { CPl010CNt2022002V130LeiauteNFeV400ObsFisco } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400ObsFisco';

import { CPl010CNt2022002V130LeiauteNFeV400ProcRef } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400ProcRef';

/**
 * Informações adicionais da NF-e
 */
export interface IPl010CNt2022002V130LeiauteNFeV400InfAdic {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Campo de uso livre do contribuinte informar o nome do campo no atributo xCampo e o conteúdo do campo no xTexto
   */
  obsCont?: CPl010CNt2022002V130LeiauteNFeV400ObsCont;
  /**
   * Campo de uso exclusivo do Fisco informar o nome do campo no atributo xCampo e o conteúdo do campo no xTexto
   */
  obsFisco?: CPl010CNt2022002V130LeiauteNFeV400ObsFisco;
  /**
   * Grupo de informações do processo referenciado
   */
  procRef?: CPl010CNt2022002V130LeiauteNFeV400ProcRef;
}
