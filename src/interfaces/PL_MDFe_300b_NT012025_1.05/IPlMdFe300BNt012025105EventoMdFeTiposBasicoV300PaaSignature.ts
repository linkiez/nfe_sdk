/**
 * Assinatura RSA do Emitente para DFe gerados por PAA
 */
export interface IPlMdFe300BNt012025105EventoMdFeTiposBasicoV300PaaSignature {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Assinatura digital padrão RSA Converter o atributo Id do DFe para array de bytes e assinar com a chave privada do RSA com algoritmo SHA1 gerando um valor no formato base64.
   */
  SignatureValue?: string;
  /**
   * Chave Publica no padrão XML RSA Key
   */
  RSAKeyValue?: unknown;
}
