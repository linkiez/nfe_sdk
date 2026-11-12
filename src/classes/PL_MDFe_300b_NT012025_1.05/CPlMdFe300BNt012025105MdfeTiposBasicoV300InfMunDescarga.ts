import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfCTe } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfCTe';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeTransp } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeTransp';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfNFe } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfNFe';

/**
 * Informações dos Municípios de descarregamento
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunDescarga {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Código do Município de Descarregamento
   */
  public cMunDescarga?: unknown;
  /**
   * Conhecimentos de Tranporte - usar este grupo quando for prestador de serviço de transporte
   */
  public infCTe?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfCTe;
  /**
   * Nota Fiscal Eletronica
   */
  public infNFe?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfNFe;
  /**
   * Manifesto Eletrônico de Documentos Fiscais. Somente para modal Aquaviário (vide regras MOC)
   */
  public infMDFeTransp?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeTransp;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunDescarga instance.
   * Schema context: Informações dos Municípios de descarregamento
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunDescarga,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunDescarga';

    if (props) {
      assignSchemaProperties(this, props, ['cMunDescarga']);
      this.infCTe = props.infCTe
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfCTe(props.infCTe)
        : undefined;
      this.infNFe = props.infNFe
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfNFe(props.infNFe)
        : undefined;
      this.infMDFeTransp = props.infMDFeTransp
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeTransp(
            props.infMDFeTransp,
          )
        : undefined;
    }
  }
}
