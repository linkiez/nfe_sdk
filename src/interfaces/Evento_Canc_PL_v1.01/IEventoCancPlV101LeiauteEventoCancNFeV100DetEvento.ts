/**
 * Schema XML de validação do evento do cancelamento 1101111
 */
export interface IEventoCancPlV101LeiauteEventoCancNFeV100DetEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Número do Protocolo de Status da NF-e. 1 posição (1 – Secretaria de Fazenda Estadual 2 – Receita Federal); 2 posições ano; 10 seqüencial no ano.
   */
  nProt?: unknown;
  /**
   * Justificativa do cancelamento
   */
  xJust?: unknown;
}
