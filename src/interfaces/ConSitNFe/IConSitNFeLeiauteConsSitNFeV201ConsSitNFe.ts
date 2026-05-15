import { TConSitNFeLeiauteConsSitNFeV201VerConsSitNFe } from '../../types/ConSitNFe/TConSitNFeLeiauteConsSitNFeV201VerConsSitNFe';

/**
 * Tipo Pedido de Consulta da Situação Atual da Nota Fiscal Eletrônica
 */
export interface IConSitNFeLeiauteConsSitNFeV201ConsSitNFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Chaves de acesso da NF-e, compostas por: UF do emitente, AAMM da emissão da NFe, CNPJ do emitente, modelo, série e número da NF-e e código numérico + DV.
   */
  chNFe?: unknown;
  /**
   * Tipo Versão do Leiaute da Cosulta situação NF-e - 2.01
   */
  $versao?: TConSitNFeLeiauteConsSitNFeV201VerConsSitNFe;
}
