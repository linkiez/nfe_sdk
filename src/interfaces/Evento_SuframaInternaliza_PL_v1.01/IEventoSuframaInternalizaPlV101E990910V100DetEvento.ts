/**
 * Schema XML de validação do evento do Confirmação de Internalização da Mercadoria na SUFRAMA 990910
 */
export interface IEventoSuframaInternalizaPlV101E990910V100DetEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Data de ocorrência da vistoria, formato UTC (AAAA-MM-DDThh:mm:ssTZD, onde TZD = +hh:mm ou -hh:mm)
   */
  dVistoria?: unknown;
}
