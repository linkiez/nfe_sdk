import { CEventoAverbPlV101E790700V100Enquad } from '../../classes/Evento_Averb_PL_v1.01/CEventoAverbPlV101E790700V100Enquad';

/**
 * Informações dos itens da NF-e do evento.
 */
export interface IEventoAverbPlV101E790700V100ItensAverbados {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Data do Embarque no formato AAAA-MM-DDThh:mm:ssTZD
   */
  dhEmbarque?: unknown;
  /**
   * Data da averbação no formato AAAA-MM-DDThh:mm:ssTZD
   */
  dhAverbacao?: unknown;
  /**
   * Quantidade averbada do item na unidade tributária (campo uTrib)
   */
  qItem?: unknown;
  /**
   * Grupo de informações do enquadramento do item
   */
  enquad?: CEventoAverbPlV101E790700V100Enquad;
}
