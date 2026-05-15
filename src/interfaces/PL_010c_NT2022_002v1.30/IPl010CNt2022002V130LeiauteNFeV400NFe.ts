import { CPl010CNt2022002V130LeiauteNFeV400InfNFe } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400InfNFe';

import { CPl010CNt2022002V130LeiauteNFeV400InfNFeSupl } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400InfNFeSupl';

/**
 * Tipo Nota Fiscal Eletrônica
 */
export interface IPl010CNt2022002V130LeiauteNFeV400NFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  unknown?: unknown;
  /**
   * Informações da Nota Fiscal eletrônica
   */
  infNFe?: CPl010CNt2022002V130LeiauteNFeV400InfNFe;
  /**
   * Informações suplementares Nota Fiscal
   */
  infNFeSupl?: CPl010CNt2022002V130LeiauteNFeV400InfNFeSupl;
}
