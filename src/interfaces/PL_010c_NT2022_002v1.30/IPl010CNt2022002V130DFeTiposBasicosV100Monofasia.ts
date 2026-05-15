import { CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif';

import { CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao';

import { CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet';

import { CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Monofasia
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100Monofasia {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Grupo de informações da Tributação Monofásica padrão
   */
  gMonoPadrao?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao;
  /**
   * Grupo de informações da Tributação Monofásica sujeita a retenção
   */
  gMonoReten?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoReten;
  /**
   * Grupo de informações da Tributação Monofásica retida anteriormente
   */
  gMonoRet?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoRet;
  /**
   * Grupo de informações do diferimento da Tributação Monofásica
   */
  gMonoDif?: CPl010CNt2022002V130DFeTiposBasicosV100GMonoDif;
  /**
   * Total de IBS monofásico do item
   */
  vTotIBSMonoItem?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Total da CBS monofásica do item
   */
  vTotCBSMonoItem?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}
