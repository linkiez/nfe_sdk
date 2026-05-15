/**
 * Informar a chave da nota (NFe ou NFCe) emitida para o fornecimento nos casos em que a legislação obriga a emissão de documento fiscal.
 */
export interface IEventosRtcE211120V100DFeReferenciado {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informar a chave da nota (NFe ou NFCe) emitida para o fornecimento nos casos em que a legislação obriga a emissão de documento fiscal.
   */
  chaveAcesso?: unknown;
  /**
   * Corresponde ao atributo “nItem” do elemento “det” do documento referenciado
   */
  nItem?: unknown;
}
