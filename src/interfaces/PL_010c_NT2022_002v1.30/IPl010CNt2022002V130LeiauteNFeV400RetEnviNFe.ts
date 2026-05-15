import { CPl010CNt2022002V130LeiauteNFeV400ProtNFe } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400ProtNFe';

import { TPl010CNt2022002V130LeiauteNFeV400VerNFe } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400VerNFe';

/**
 * Tipo Retorno do Pedido de Autorização da Nota Fiscal Eletrônica
 */
export interface IPl010CNt2022002V130LeiauteNFeV400RetEnviNFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Versão do Aplicativo que recebeu o Lote.
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
   * Data e hora do recebimento, no formato AAAA-MM-DDTHH:MM:SSTZD
   */
  dhRecbto?: unknown;
  /**
   * Tipo Versão da NF-e - 4.00
   */
  $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;
}
