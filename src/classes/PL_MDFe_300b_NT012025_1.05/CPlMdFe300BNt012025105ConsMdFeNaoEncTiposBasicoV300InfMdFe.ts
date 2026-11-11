import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Chaves de acesso do MDF-e não encerrado
 */
export class CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300InfMdFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Chaves de acesso do MDF-e não encerrado
   */
  public chMDFe?: unknown;
  /**
   * Número do Protocolo de autorização do MDF-e não encerrado
   */
  public nProt?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300InfMdFe instance.
   * Schema context: Chaves de acesso do MDF-e não encerrado
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300InfMdFe,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300InfMdFe';

    if (props) {
      assignSchemaProperties(this, props, ['chMDFe', 'nProt']);
    }
  }
}
