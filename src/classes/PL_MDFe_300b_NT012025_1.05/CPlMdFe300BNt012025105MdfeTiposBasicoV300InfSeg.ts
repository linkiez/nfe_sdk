import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informações da seguradora
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300InfSeg {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Número do CNPJ da seguradora Obrigatório apenas se responsável pelo seguro for (2) responsável pela contratação do transporte - pessoa jurídica
   */
  public CNPJ?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300InfSeg instance.
   * Schema context: Informações da seguradora
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfSeg) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300InfSeg';

    if (props) {
      assignSchemaProperties(this, props, ['CNPJ']);
    }
  }
}
