import { CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300ProcEventoMdFe } from './CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300ProcEventoMdFe';

import { CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300ProcMdFe } from './CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300ProcMdFe';

/**
 * Tipo Documento Fiscal Eletrônico MDF-e
 */
export class CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300MdFeDFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Autorização de Uso do MDF-e
   */
  public procMDFe?: CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300ProcMdFe;
  /**
   * Demais eventos vinculados ao MDF-e
   */
  public procEventoMDFe?: CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300ProcEventoMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300MdFeDFe instance.
   * Schema context: Tipo Documento Fiscal Eletrônico MDF-e
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300MdFeDFe,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300MdFeDFe';

    if (props) {
      this.procMDFe = props.procMDFe
        ? new CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300ProcMdFe(
            props.procMDFe,
          )
        : undefined;
      this.procEventoMDFe = props.procEventoMDFe
        ? new CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300ProcEventoMdFe(
            props.procEventoMDFe,
          )
        : undefined;
    }
  }
}
