import { CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300ProtMdFe } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300ProtMdFe';

import { TPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300VerConsReciMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300VerConsReciMdFe';

/**
 * Tipo Retorno do Pedido de Consulta do Recibo do MDF-e
 */
export interface IPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300RetConsReciMdFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Versão do Aplicativo que processou o MDF-e
   */
  verAplic?: unknown;
  /**
   * Número do Recibo Consultado
   */
  nRec?: unknown;
  /**
   * código do status do retorno da consulta.
   */
  cStat?: unknown;
  /**
   * Descrição literal do status do do retorno da consulta.
   */
  xMotivo?: unknown;
  /**
   * Idntificação da UF
   */
  cUF?: unknown;
  /**
   * Resultado do processamento do MDF-e
   */
  protMDFe?: CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300ProtMdFe;
  /**
   * Tipo Versão do Consulta de MDF-e - 3.00
   */
  $versao?: TPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300VerConsReciMdFe;
}
