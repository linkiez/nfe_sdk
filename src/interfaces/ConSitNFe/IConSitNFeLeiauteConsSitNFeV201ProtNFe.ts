import { CConSitNFeLeiauteConsSitNFeV201InfProt } from '../../classes/ConSitNFe/CConSitNFeLeiauteConsSitNFeV201InfProt';

import { TConSitNFeLeiauteConsSitNFeV201VerNFe } from '../../types/ConSitNFe/TConSitNFeLeiauteConsSitNFeV201VerNFe';

/**
 * Protocolo de autorização de uso da NF-e
 */
export interface IConSitNFeLeiauteConsSitNFeV201ProtNFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  unknown?: unknown;
  /**
   * Dados do protocolo de status
   */
  infProt?: CConSitNFeLeiauteConsSitNFeV201InfProt;
  /**
   * Tipo Versão da NF-e - 2.00/1.10/1.07
   */
  $versao?: TConSitNFeLeiauteConsSitNFeV201VerNFe;
}
