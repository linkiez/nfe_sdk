import { CPlNfGas100ENfgasTiposBasicoV100InfFisco } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100InfFisco';

import { CPlNfGas100ENfgasTiposBasicoV100InfProt } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100InfProt';

import { TPlNfGas100ENfgasTiposBasicoV100VerNfGas } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100VerNfGas';

/**
 * Reposta ao processamento da NFGas
 */
export interface IPlNfGas100ENfgasTiposBasicoV100ProtNfGas {
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
  infProt?: CPlNfGas100ENfgasTiposBasicoV100InfProt;
  /**
   * Mensagem do Fisco
   */
  infFisco?: CPlNfGas100ENfgasTiposBasicoV100InfFisco;
  /**
   * Tipo Versão da NFGas
   */
  $versao?: TPlNfGas100ENfgasTiposBasicoV100VerNfGas;
}
