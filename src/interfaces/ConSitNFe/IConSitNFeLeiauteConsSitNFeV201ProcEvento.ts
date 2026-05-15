import { CConSitNFeLeiauteConsSitNFeV201Evento } from '../../classes/ConSitNFe/CConSitNFeLeiauteConsSitNFeV201Evento';

import { CConSitNFeLeiauteConsSitNFeV201RetEvento } from '../../classes/ConSitNFe/CConSitNFeLeiauteConsSitNFeV201RetEvento';

import { TConSitNFeLeiauteConsSitNFeV201VerEvento } from '../../types/ConSitNFe/TConSitNFeLeiauteConsSitNFeV201VerEvento';

/**
 * Tipo procEvento
 */
export interface IConSitNFeLeiauteConsSitNFeV201ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CConSitNFeLeiauteConsSitNFeV201Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CConSitNFeLeiauteConsSitNFeV201RetEvento;
  /**
   * Tipo Versão do Evento 1.00
   */
  $versao?: TConSitNFeLeiauteConsSitNFeV201VerEvento;
}
