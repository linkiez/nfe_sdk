import { CPl010CNt2022002V130LeiauteNFeV400Deduc } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Deduc';

import { CPl010CNt2022002V130LeiauteNFeV400ForDia } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400ForDia';

/**
 * Informações de registro aquisições de cana
 */
export interface IPl010CNt2022002V130LeiauteNFeV400Cana {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Fornecimentos diários
   */
  forDia?: CPl010CNt2022002V130LeiauteNFeV400ForDia;
  /**
   * Total do mês
   */
  qTotMes?: unknown;
  /**
   * Total Anterior
   */
  qTotAnt?: unknown;
  /**
   * Total Geral
   */
  qTotGer?: unknown;
  /**
   * Deduções - Taxas e Contribuições
   */
  deduc?: CPl010CNt2022002V130LeiauteNFeV400Deduc;
  /**
   * Valor dos fornecimentos
   */
  vFor?: unknown;
  /**
   * Valor Total das Deduções
   */
  vTotDed?: unknown;
  /**
   * Valor Líquido dos fornecimentos
   */
  vLiqFor?: unknown;
}
