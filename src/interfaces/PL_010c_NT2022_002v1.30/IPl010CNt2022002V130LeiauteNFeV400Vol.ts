import { CPl010CNt2022002V130LeiauteNFeV400Lacres } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Lacres';

/**
 * Dados dos volumes
 */
export interface IPl010CNt2022002V130LeiauteNFeV400Vol {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Peso líquido (em kg)
   */
  pesoL?: unknown;
  /**
   * Peso bruto (em kg)
   */
  pesoB?: unknown;
  /**
   * Número dos Lacres
   */
  lacres?: CPl010CNt2022002V130LeiauteNFeV400Lacres;
}
