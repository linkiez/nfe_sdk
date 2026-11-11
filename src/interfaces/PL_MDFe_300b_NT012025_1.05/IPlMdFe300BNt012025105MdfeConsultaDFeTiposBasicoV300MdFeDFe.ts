import { CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300ProcEventoMdFe } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300ProcEventoMdFe';

import { CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300ProcMdFe } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300ProcMdFe';

/**
 * Tipo Documento Fiscal Eletrônico MDF-e
 */
export interface IPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300MdFeDFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Autorização de Uso do MDF-e
   */
  procMDFe?: CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300ProcMdFe;
  /**
   * Demais eventos vinculados ao MDF-e
   */
  procEventoMDFe?: CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300ProcEventoMdFe;
}
