import { CEventosRtcE211110V100Gcbs } from '../../classes/Eventos_RTC/CEventosRtcE211110V100Gcbs';

import { CEventosRtcE211110V100Gibs } from '../../classes/Eventos_RTC/CEventosRtcE211110V100Gibs';

/**
 * Informações de crédito presumido por item
 */
export interface IEventosRtcE211110V100GCredPres {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do base de cálculo do item
   */
  vBC?: unknown;
  /**
   * Schema property g IBS.
   */
  gIBS?: CEventosRtcE211110V100Gibs;
  /**
   * Schema property g CBS.
   */
  gCBS?: CEventosRtcE211110V100Gcbs;
}
