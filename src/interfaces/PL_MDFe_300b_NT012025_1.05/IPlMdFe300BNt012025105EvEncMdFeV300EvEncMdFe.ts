/**
 * Schema XML de validação do evento do encerramento 110112
 */
export interface IPlMdFe300BNt012025105EvEncMdFeV300EvEncMdFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Número do Protocolo de Status do MDF-e. 1 posição tipo de autorizador (9 - SEFAZ Nacional ); 2 posições ano; 10 seqüencial no ano.
   */
  nProt?: unknown;
  /**
   * Data que o Manifesto foi encerrado
   */
  dtEnc?: unknown;
  /**
   * UF de encerramento do Manifesto
   */
  cUF?: unknown;
  /**
   * Código do Município de Encerramento do manifesto
   */
  cMun?: unknown;
}
