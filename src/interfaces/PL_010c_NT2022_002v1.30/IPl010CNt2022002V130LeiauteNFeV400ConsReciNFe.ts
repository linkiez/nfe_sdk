import { TPl010CNt2022002V130LeiauteNFeV400VerNFe } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400VerNFe';

/**
 * Tipo Pedido de Consulta do Recido do Lote de Notas Fiscais Eletrônicas
 */
export interface IPl010CNt2022002V130LeiauteNFeV400ConsReciNFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Número do Recibo
   */
  nRec?: unknown;
  /**
   * Tipo Versão da NF-e - 4.00
   */
  $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;
}
