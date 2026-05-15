import { CConSitNFeLeiauteConsSitNFeV201InfCanc } from '../../classes/ConSitNFe/CConSitNFeLeiauteConsSitNFeV201InfCanc';

import { TConSitNFeLeiauteConsSitNFeV201VerCancNFeV200107 } from '../../types/ConSitNFe/TConSitNFeLeiauteConsSitNFeV201VerCancNFeV200107';

/**
 * Tipo retorno Pedido de Cancelamento da Nota Fiscal Eletrônica
 */
export interface IConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  unknown?: unknown;
  /**
   * Dados do Resultado do Pedido de Cancelamento da Nota Fiscal Eletrônica
   */
  infCanc?: CConSitNFeLeiauteConsSitNFeV201InfCanc;
  /**
   * Tipo Versão do leiaute de Cancelamento de NF-e - 2.00/1.07
   */
  $versao?: TConSitNFeLeiauteConsSitNFeV201VerCancNFeV200107;
}
