import { CPl010CNt2022002V130LeiauteNFeV400Cofinsst } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Cofinsst';

import { CPl010CNt2022002V130LeiauteNFeV400IcmsufDest } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400IcmsufDest';

import { CPl010CNt2022002V130LeiauteNFeV400Pisst } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Pisst';

/**
 * Tributos incidentes nos produtos ou serviços da NF-e
 */
export interface IPl010CNt2022002V130LeiauteNFeV400Imposto {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor estimado total de impostos federais, estaduais e municipais
   */
  vTotTrib?: unknown;
  /**
   * Dados do PIS Substituição Tributária
   */
  CPl010CNt2022002V130LeiauteNFeV400Pisst?: CPl010CNt2022002V130LeiauteNFeV400Pisst;
  /**
   * Dados do COFINS da Substituição Tributaria;
   */
  CPl010CNt2022002V130LeiauteNFeV400Cofinsst?: CPl010CNt2022002V130LeiauteNFeV400Cofinsst;
  /**
   * Grupo a ser informado nas vendas interestarduais para consumidor final, não contribuinte de ICMS
   */
  CPl010CNt2022002V130LeiauteNFeV400IcmsufDest?: CPl010CNt2022002V130LeiauteNFeV400IcmsufDest;
  /**
   * Grupo de informações do Imposto Seletivo
   */
  IS?: unknown;
  /**
   * Grupo de informações dos tributos IBS, CBS e Imposto Seletivo
   */
  IBSCBS?: unknown;
}
