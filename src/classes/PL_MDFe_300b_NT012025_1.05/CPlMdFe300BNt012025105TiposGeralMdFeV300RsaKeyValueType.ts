import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Tipo que representa uma chave publica padrão RSA
 */
export class CPlMdFe300BNt012025105TiposGeralMdFeV300RsaKeyValueType {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property Modulus.
   */
  public Modulus?: string;
  /**
   * Schema property Exponent.
   */
  public Exponent?: string;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105TiposGeralMdFeV300RsaKeyValueType instance.
   * Schema context: Tipo que representa uma chave publica padrão RSA
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105TiposGeralMdFeV300RsaKeyValueType,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105TiposGeralMdFeV300RsaKeyValueType';

    if (props) {
      assignSchemaProperties(this, props, ['Modulus', 'Exponent']);
    }
  }
}
