/**
 * Schema XML de validação do evento do cancelamento por substituição 110112
 */
export interface IEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100DetEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do Órgão Autor do Evento. Informar o Código da UF para este Evento.
   */
  cOrgaoAutor?: unknown;
  /**
   * Versão do Aplicativo que recebeu o Evento
   */
  verAplic?: unknown;
  /**
   * Número do Protocolo de Status da NF-e. 1 posição (1 – Secretaria de Fazenda Estadual 2 – Receita Federal); 2 posições ano; 10 seqüencial no ano.
   */
  nProt?: unknown;
  /**
   * Justificativa do cancelamento
   */
  xJust?: unknown;
  /**
   * Chave de Acesso NF-e vinculada
   */
  chNFeRef?: unknown;
}
