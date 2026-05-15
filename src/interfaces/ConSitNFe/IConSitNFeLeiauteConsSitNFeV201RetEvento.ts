import { CConSitNFeLeiauteConsSitNFeV201InfEvento } from '../../classes/ConSitNFe/CConSitNFeLeiauteConsSitNFeV201InfEvento';

import { TConSitNFeLeiauteConsSitNFeV201VerEvento } from '../../types/ConSitNFe/TConSitNFeLeiauteConsSitNFeV201VerEvento';

/**
 * Tipo retorno do Evento
 */
export interface IConSitNFeLeiauteConsSitNFeV201RetEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  unknown?: unknown;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  infEvento?: CConSitNFeLeiauteConsSitNFeV201InfEvento;
  /**
   * Tipo Versão do Evento 1.00
   */
  $versao?: TConSitNFeLeiauteConsSitNFeV201VerEvento;
}
