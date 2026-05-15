import { CEventoInsucessoNFePlV102E110192V100DetEvento } from '../../classes/Evento_InsucessoNFe_PL_v1.02/CEventoInsucessoNFePlV102E110192V100DetEvento';

/**
 * Type contract for IEventoInsucessoNFePlV102E110192V100.
 */
export interface IEventoInsucessoNFePlV102E110192V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema XML de validação do evento de Comprovante de Entrega da NF-e
   */
  detEvento?: CEventoInsucessoNFePlV102E110192V100DetEvento;
}
