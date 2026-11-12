import { CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300MdFeDFe } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300MdFeDFe';

import { TPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300VerMdFeConsultaDFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300VerMdFeConsultaDFe';

/**
 * Tipo Retorno de Pedido de Consulta do Manifesto Eletrônico de Documentos Fiscais
 */
export interface IPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300RetMdFeConsultaDFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Versão do Aplicativo que processou a consulta do MDF-e
   */
  verAplic?: unknown;
  /**
   * Código do status da consulta do MDF-e
   */
  cStat?: unknown;
  /**
   * Descrição literal do status da consulta do MDF-e
   */
  xMotivo?: unknown;
  /**
   * Tipo Documento Fiscal Eletrônico MDF-e
   */
  MDFeDFe?: CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300MdFeDFe;
  /**
   * Tipo Versão do Consulta DFe de MDF-e - 3.00
   */
  $versao?: TPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300VerMdFeConsultaDFe;
}
