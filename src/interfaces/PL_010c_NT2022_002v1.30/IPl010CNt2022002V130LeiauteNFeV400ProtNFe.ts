import { CPl010CNt2022002V130LeiauteNFeV400InfProt } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400InfProt';

import { TPl010CNt2022002V130LeiauteNFeV400VerNFe } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400VerNFe';

/**
 * Protocolo de status resultado do processamento da NF-e
 */
export interface IPl010CNt2022002V130LeiauteNFeV400ProtNFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  unknown?: unknown;
  /**
   * Dados do protocolo de status
   */
  infProt?: CPl010CNt2022002V130LeiauteNFeV400InfProt;
  /**
   * Tipo Versão da NF-e - 4.00
   */
  $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;
}
