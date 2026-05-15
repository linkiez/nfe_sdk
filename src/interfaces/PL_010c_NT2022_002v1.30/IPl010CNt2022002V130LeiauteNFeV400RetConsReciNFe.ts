import { CPl010CNt2022002V130LeiauteNFeV400ProtNFe } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400ProtNFe';

import { TPl010CNt2022002V130LeiauteNFeV400VerNFe } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400VerNFe';

/**
 * Tipo Retorno do Pedido de Consulta do Recido do Lote de Notas Fiscais Eletrônicas
 */
export interface IPl010CNt2022002V130LeiauteNFeV400RetConsReciNFe {
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
   * Número do Recibo Consultado
   */
  nRec?: unknown;
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
   * Data e hora de processamento, no formato AAAA-MM-DDTHH:MM:SSTZD. Em caso de Rejeição, com data e hora do recebimento do Lote de NF-e enviado.
   */
  dhRecbto?: unknown;
  /**
   * Protocolo de status resultado do processamento da NF-e
   */
  protNFe?: CPl010CNt2022002V130LeiauteNFeV400ProtNFe;
  /**
   * Tipo Versão da NF-e - 4.00
   */
  $versao?: TPl010CNt2022002V130LeiauteNFeV400VerNFe;
}
