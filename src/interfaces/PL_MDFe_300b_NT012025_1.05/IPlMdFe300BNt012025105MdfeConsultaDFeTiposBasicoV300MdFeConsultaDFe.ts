import { TPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300VerMdFeConsultaDFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300VerMdFeConsultaDFe';

/**
 * Tipo Pedido de Consulta do Manifesto Eletrônico de Documentos Fiscais
 */
export interface IPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300MdFeConsultaDFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Serviço Solicitado
   */
  xServ?: unknown;
  /**
   * Chaves de acesso do MDF-e, compostas por: UF do emitente, AAMM da emissão do MDF-e, CNPJ do emitente, modelo, série e número do MDF-e e código numérico + DV.
   */
  chMDFe?: unknown;
  /**
   * Tipo Versão do Consulta DFe de MDF-e - 3.00
   */
  $versao?: TPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300VerMdFeConsultaDFe;
}
