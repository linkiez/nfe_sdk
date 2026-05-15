import { CPl010CNt2022002V130LeiauteNFeV400NFe } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400NFe';

import { TPl010CNt2022002V130LeiauteNFeV400IdLote } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400IdLote';

import { TPl010CNt2022002V130LeiauteNFeV400VerNFe } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400VerNFe';

/**
 * Tipo Pedido de Concessão de Autorização da Nota Fiscal Eletrônica
 */
export interface IPl010CNt2022002V130LeiauteNFeV400EnviNFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Identificação de Lote
   */
  idLote?: TPl010CNt2022002V130LeiauteNFeV400IdLote;
  /**
   * Tipo Nota Fiscal Eletrônica
   */
  NFe?: CPl010CNt2022002V130LeiauteNFeV400NFe;
  /**
   * Tipo Versão da NF-e - 4.00
   */
  $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;
}
