import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informações dos Documentos fiscais vinculados ao manifesto
 */
export class CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300InfDoc {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Código do Município de Descarregamento
   */
  public cMunDescarga?: unknown;
  /**
   * Nota Fiscal Eletrônica
   */
  public chNFe?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300InfDoc instance.
   * Schema context: Informações dos Documentos fiscais vinculados ao manifesto
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300InfDoc,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300InfDoc';

    if (props) {
      assignSchemaProperties(this, props, ['cMunDescarga', 'chNFe']);
    }
  }
}
