import { CPl010CNt2022002V130LeiauteNFeV400NFe } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400NFe';

import { CPl010CNt2022002V130LeiauteNFeV400ProtNFe } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400ProtNFe';

import { TPl010CNt2022002V130LeiauteNFeV400VerNFe } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400VerNFe';

/**
 * Tipo da NF-e processada
 */
export interface IPl010CNt2022002V130LeiauteNFeV400NfeProc {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Nota Fiscal Eletrônica
   */
  NFe?: CPl010CNt2022002V130LeiauteNFeV400NFe;
  /**
   * Protocolo de status resultado do processamento da NF-e
   */
  protNFe?: CPl010CNt2022002V130LeiauteNFeV400ProtNFe;
  /**
   * Tipo Versão da NF-e - 4.00
   */
  $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;
}
