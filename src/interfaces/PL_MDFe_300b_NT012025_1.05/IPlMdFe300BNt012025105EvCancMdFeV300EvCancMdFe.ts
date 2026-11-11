/**
 * Schema XML de validação do evento do cancelamento 110111
 */
export interface IPlMdFe300BNt012025105EvCancMdFeV300EvCancMdFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Número do Protocolo de Status do MDF-e. 1 posição tipo de autorizador (9 -SEFAZ Nacional ); 2 posições ano; 10 seqüencial no ano.
   */
  nProt?: unknown;
  /**
   * Justificativa do Cancelamento
   */
  xJust?: unknown;
}
