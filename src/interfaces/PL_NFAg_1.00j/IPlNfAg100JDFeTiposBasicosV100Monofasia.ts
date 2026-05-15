import { CPlNfAg100JDFeTiposBasicosV100GMonoDif } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100GMonoDif';

import { CPlNfAg100JDFeTiposBasicosV100GMonoPadrao } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100GMonoPadrao';

import { CPlNfAg100JDFeTiposBasicosV100GMonoRet } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100GMonoRet';

import { CPlNfAg100JDFeTiposBasicosV100GMonoReten } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100GMonoReten';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Monofasia
 */
export interface IPlNfAg100JDFeTiposBasicosV100Monofasia {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Grupo de informações da Tributação Monofásica padrão
   */
  gMonoPadrao?: CPlNfAg100JDFeTiposBasicosV100GMonoPadrao;
  /**
   * Grupo de informações da Tributação Monofásica sujeita a retenção
   */
  gMonoReten?: CPlNfAg100JDFeTiposBasicosV100GMonoReten;
  /**
   * Grupo de informações da Tributação Monofásica retida anteriormente
   */
  gMonoRet?: CPlNfAg100JDFeTiposBasicosV100GMonoRet;
  /**
   * Grupo de informações do diferimento da Tributação Monofásica
   */
  gMonoDif?: CPlNfAg100JDFeTiposBasicosV100GMonoDif;
  /**
   * Total de IBS monofásico do item
   */
  vTotIBSMonoItem?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Total da CBS monofásica do item
   */
  vTotCBSMonoItem?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}
