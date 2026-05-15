import { CEventoInsucessoNFePlV102Tmp0000DetEvento } from '../../classes/Evento_InsucessoNFe_PL_v1.02/CEventoInsucessoNFePlV102Tmp0000DetEvento';

/**
 * Type contract for IEventoInsucessoNFePlV102Tmp0000.
 */
export interface IEventoInsucessoNFePlV102Tmp0000 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema XML de validação do evento de Comprovante de Entrega da NF-e
   */
  detEvento?: CEventoInsucessoNFePlV102Tmp0000DetEvento;
}
