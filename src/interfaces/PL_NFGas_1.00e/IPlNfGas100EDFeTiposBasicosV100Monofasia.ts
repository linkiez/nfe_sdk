import { CPlNfGas100EDFeTiposBasicosV100GMonoDif } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100GMonoDif';

import { CPlNfGas100EDFeTiposBasicosV100GMonoPadrao } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100GMonoPadrao';

import { CPlNfGas100EDFeTiposBasicosV100GMonoRet } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100GMonoRet';

import { CPlNfGas100EDFeTiposBasicosV100GMonoReten } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100GMonoReten';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Monofasia
 */
export interface IPlNfGas100EDFeTiposBasicosV100Monofasia {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Grupo de informações da Tributação Monofásica padrão
   */
  gMonoPadrao?: CPlNfGas100EDFeTiposBasicosV100GMonoPadrao;
  /**
   * Grupo de informações da Tributação Monofásica sujeita a retenção
   */
  gMonoReten?: CPlNfGas100EDFeTiposBasicosV100GMonoReten;
  /**
   * Grupo de informações da Tributação Monofásica retida anteriormente
   */
  gMonoRet?: CPlNfGas100EDFeTiposBasicosV100GMonoRet;
  /**
   * Grupo de informações do diferimento da Tributação Monofásica
   */
  gMonoDif?: CPlNfGas100EDFeTiposBasicosV100GMonoDif;
  /**
   * Total de IBS monofásico do item
   */
  vTotIBSMonoItem?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Total da CBS monofásica do item
   */
  vTotCBSMonoItem?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}
