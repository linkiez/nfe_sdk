/**
 * Grupo de informações dos Medidores
 */
export interface IPlNfAg100JNfagTiposBasicoV100GMed {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Data da leitura anterior Formato AAAA-MM-DD Em caso da 1a leitura do hidrometro, informar a data de instalação do hidrômetro
   */
  dMedAnt?: unknown;
  /**
   * Data da leitura atual Formato AAAA-MM-DD
   */
  dMedAtu?: unknown;
}
