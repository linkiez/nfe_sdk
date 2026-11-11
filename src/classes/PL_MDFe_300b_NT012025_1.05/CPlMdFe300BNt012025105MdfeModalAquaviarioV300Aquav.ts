import { CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfEmbComb } from './CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfEmbComb';

import { CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfTermCarreg } from './CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfTermCarreg';

import { CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfTermDescarreg } from './CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfTermDescarreg';

import { CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidCargaVazia } from './CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidCargaVazia';

import { CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidTranspVazia } from './CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidTranspVazia';

/**
 * Informações do modal Aquaviário
 */
export class CPlMdFe300BNt012025105MdfeModalAquaviarioV300Aquav {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Grupo de informações dos terminais de carregamento.
   */
  public infTermCarreg?: CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfTermCarreg;
  /**
   * Grupo de informações dos terminais de descarregamento.
   */
  public infTermDescarreg?: CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfTermDescarreg;
  /**
   * Informações das Embarcações do Comboio
   */
  public infEmbComb?: CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfEmbComb;
  /**
   * Informações das Undades de Carga vazias
   */
  public infUnidCargaVazia?: CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidCargaVazia;
  /**
   * Informações das Undades de Transporte vazias
   */
  public infUnidTranspVazia?: CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidTranspVazia;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalAquaviarioV300Aquav instance.
   * Schema context: Informações do modal Aquaviário
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeModalAquaviarioV300Aquav,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeModalAquaviarioV300Aquav';

    if (props) {
      this.infTermCarreg = props.infTermCarreg
        ? new CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfTermCarreg(
            props.infTermCarreg,
          )
        : undefined;
      this.infTermDescarreg = props.infTermDescarreg
        ? new CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfTermDescarreg(
            props.infTermDescarreg,
          )
        : undefined;
      this.infEmbComb = props.infEmbComb
        ? new CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfEmbComb(
            props.infEmbComb,
          )
        : undefined;
      this.infUnidCargaVazia = props.infUnidCargaVazia
        ? new CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidCargaVazia(
            props.infUnidCargaVazia,
          )
        : undefined;
      this.infUnidTranspVazia = props.infUnidTranspVazia
        ? new CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidTranspVazia(
            props.infUnidTranspVazia,
          )
        : undefined;
    }
  }
}
