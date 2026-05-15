import { CEventoEconfV100E110750V100DetPag } from '../../classes/Evento_Econf_v1.00/CEventoEconfV100E110750V100DetPag';

/**
 * Schema XML de validação do evento de Conciliação Financeira – ECONF
 */
export interface IEventoEconfV100E110750V100DetEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Versão do Aplicativo do Autor do Evento
   */
  verAplic?: unknown;
  /**
   * Grupo de detalhamento da forma de pagamento.
   */
  detPag?: CEventoEconfV100E110750V100DetPag;
}
