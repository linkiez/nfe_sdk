import { CConSitNFeLeiauteConsSitNFeV201ProcEvento } from '../../classes/ConSitNFe/CConSitNFeLeiauteConsSitNFeV201ProcEvento';

import { CConSitNFeLeiauteConsSitNFeV201ProtNFe } from '../../classes/ConSitNFe/CConSitNFeLeiauteConsSitNFeV201ProtNFe';

import { CConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107 } from '../../classes/ConSitNFe/CConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107';

import { TConSitNFeLeiauteConsSitNFeV201VerConsSitNFe } from '../../types/ConSitNFe/TConSitNFeLeiauteConsSitNFeV201VerConsSitNFe';

/**
 * Tipo Retorno de Pedido de Consulta da Situação Atual da Nota Fiscal Eletrônica
 */
export interface IConSitNFeLeiauteConsSitNFeV201RetConsSitNFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Versão do Aplicativo que processou a NF-e
   */
  verAplic?: unknown;
  /**
   * Código do status da mensagem enviada.
   */
  cStat?: unknown;
  /**
   * Descrição literal do status do serviço solicitado.
   */
  xMotivo?: unknown;
  /**
   * código da UF de atendimento
   */
  cUF?: unknown;
  /**
   * Chaves de acesso da NF-e consultada
   */
  chNFe?: unknown;
  /**
   * Protocolo de autorização de uso da NF-e
   */
  protNFe?: CConSitNFeLeiauteConsSitNFeV201ProtNFe;
  /**
   * Protocolo de homologação de cancelamento de uso da NF-e
   */
  retCancNFe?: CConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107;
  /**
   * Protocolo de registro de evento da NF-e
   */
  procEventoNFe?: CConSitNFeLeiauteConsSitNFeV201ProcEvento[];
  /**
   * Tipo Versão do Leiaute da Cosulta situação NF-e - 2.01
   */
  $versao?: TConSitNFeLeiauteConsSitNFeV201VerConsSitNFe;
}
