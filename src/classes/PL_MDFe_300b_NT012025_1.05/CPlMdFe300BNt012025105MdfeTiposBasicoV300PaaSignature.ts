import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Assinatura RSA do Emitente para DFe gerados por PAA
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300PaaSignature {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Assinatura digital padrão RSA Converter o atributo Id do DFe para array de bytes e assinar com a chave privada do RSA com algoritmo SHA1 gerando um valor no formato base64.
   */
  public SignatureValue?: string;
  /**
   * Chave Publica no padrão XML RSA Key
   */
  public RSAKeyValue?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300PaaSignature instance.
   * Schema context: Assinatura RSA do Emitente para DFe gerados por PAA
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300PaaSignature,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300PaaSignature';

    if (props) {
      assignSchemaProperties(this, props, ['SignatureValue', 'RSAKeyValue']);
    }
  }
}
