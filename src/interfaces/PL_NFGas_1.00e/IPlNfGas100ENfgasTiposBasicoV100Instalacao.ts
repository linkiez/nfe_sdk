import { TPlNfGas100ENfgasTiposBasicoV100Classe } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100Classe';

import { TPlNfGas100ENfgasTiposBasicoV100Ligacao } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100Ligacao';

/**
 * Dados da Instalação OPCIONAL para TpFat=3
 */
export interface IPlNfGas100ENfgasTiposBasicoV100Instalacao {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo de Instalação 1 - Cativo 2 - Livre 3 - Parcialmente Livre
   */
  tpInstalacao?: TPlNfGas100ENfgasTiposBasicoV100Ligacao;
  /**
   * Classe de Consumo da Instalação 01 - Comercial 02 - Industrial 03 - Residencial 04 - Térmico 05 - Veicular Posto 06 - Veicular Frota 07 - GNC 08 - GNL 09 - Cogeração 10 - Refinaria 99 - Outros
   */
  tpClasse?: TPlNfGas100ENfgasTiposBasicoV100Classe;
}
