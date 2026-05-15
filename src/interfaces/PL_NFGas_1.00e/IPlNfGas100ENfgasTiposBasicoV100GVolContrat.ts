import { TPlNfGas100ENfgasTiposBasicoV100GrContrat } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100GrContrat';

/**
 * Grupo de informações das volumes contratados
 */
export interface IPlNfGas100ENfgasTiposBasicoV100GVolContrat {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo de volume contratado 1 - Demanda mínima; 2 - Montante de Uso do Sistema de Distribuição; 3 - Encargo de Capacidade; 4 - Volume Contratado
   */
  tpVolContrat?: TPlNfGas100ENfgasTiposBasicoV100GrContrat;
  /**
   * Quantidade Contratada em m3
   */
  qUnidContrat?: unknown;
}
