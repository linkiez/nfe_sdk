/**
 * Grupo de informações dos Equipamentos de Medição
 */
export interface IPlNfGas100ENfgasTiposBasicoV100GMed {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Data da leitura anterior Formato AAAA-MM-DD Em caso da 1a leitura do equipamento, informar a data de instalação do hidrômetro
   */
  dMedAnt?: unknown;
  /**
   * Valor da medição (leitura) anterior
   */
  vMedAnt?: unknown;
  /**
   * Data da leitura atual Formato AAAA-MM-DD
   */
  dMedAtu?: unknown;
  /**
   * Valor da medição (leitura) atual
   */
  vMedAtu?: unknown;
}
