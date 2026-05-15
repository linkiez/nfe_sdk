import { CPlNfGas100ENfgasTiposBasicoV100GHistCons } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100GHistCons';

/**
 * Grupo de informações da Agência reguladora Obrigatorio para tpFat 1 e 2 (normal e agregada) Vedado para tpFat 3 (agregadora)
 */
export interface IPlNfGas100ENfgasTiposBasicoV100GAgencia {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Histórico de Consumo
   */
  gHistCons?: CPlNfGas100ENfgasTiposBasicoV100GHistCons;
}
