import { CPl010CNt2022002V130LeiauteNFeV400Avulsa } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Avulsa';

import { CPl010CNt2022002V130LeiauteNFeV400Cana } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Cana';

import { CPl010CNt2022002V130LeiauteNFeV400Cobr } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Cobr';

import { CPl010CNt2022002V130LeiauteNFeV400Compra } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Compra';

import { CPl010CNt2022002V130LeiauteNFeV400Dest } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Dest';

import { CPl010CNt2022002V130LeiauteNFeV400Det } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Det';

import { CPl010CNt2022002V130LeiauteNFeV400Emit } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Emit';

import { CPl010CNt2022002V130LeiauteNFeV400Exporta } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Exporta';

import { CPl010CNt2022002V130LeiauteNFeV400Ide } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Ide';

import { CPl010CNt2022002V130LeiauteNFeV400InfAdic } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400InfAdic';

import { CPl010CNt2022002V130LeiauteNFeV400InfIntermed } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400InfIntermed';

import { CPl010CNt2022002V130LeiauteNFeV400InfRespTec } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400InfRespTec';

import { CPl010CNt2022002V130LeiauteNFeV400InfSolicNff } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400InfSolicNff';

import { CPl010CNt2022002V130LeiauteNFeV400Local } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Local';

import { CPl010CNt2022002V130LeiauteNFeV400Pag } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Pag';

import { CPl010CNt2022002V130LeiauteNFeV400Total } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Total';

import { CPl010CNt2022002V130LeiauteNFeV400Transp } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Transp';

/**
 * Informações da Nota Fiscal eletrônica
 */
export interface IPl010CNt2022002V130LeiauteNFeV400InfNFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * identificação da NF-e
   */
  ide?: CPl010CNt2022002V130LeiauteNFeV400Ide;
  /**
   * Identificação do emitente
   */
  emit?: CPl010CNt2022002V130LeiauteNFeV400Emit;
  /**
   * Emissão de avulsa, informar os dados do Fisco emitente
   */
  avulsa?: CPl010CNt2022002V130LeiauteNFeV400Avulsa;
  /**
   * Identificação do Destinatário
   */
  dest?: CPl010CNt2022002V130LeiauteNFeV400Dest;
  /**
   * Identificação do Local de Retirada (informar apenas quando for diferente do endereço do remetente)
   */
  retirada?: CPl010CNt2022002V130LeiauteNFeV400Local;
  /**
   * Identificação do Local de Entrega (informar apenas quando for diferente do endereço do destinatário)
   */
  entrega?: CPl010CNt2022002V130LeiauteNFeV400Local;
  /**
   * Dados dos detalhes da NF-e
   */
  det?: CPl010CNt2022002V130LeiauteNFeV400Det;
  /**
   * Dados dos totais da NF-e
   */
  total?: CPl010CNt2022002V130LeiauteNFeV400Total;
  /**
   * Dados dos transportes da NF-e
   */
  transp?: CPl010CNt2022002V130LeiauteNFeV400Transp;
  /**
   * Dados da cobrança da NF-e
   */
  cobr?: CPl010CNt2022002V130LeiauteNFeV400Cobr;
  /**
   * Dados de Pagamento. Obrigatório apenas para (NFC-e) NT 2012/004
   */
  pag?: CPl010CNt2022002V130LeiauteNFeV400Pag;
  /**
   * Grupo de Informações do Intermediador da Transação
   */
  infIntermed?: CPl010CNt2022002V130LeiauteNFeV400InfIntermed;
  /**
   * Informações adicionais da NF-e
   */
  infAdic?: CPl010CNt2022002V130LeiauteNFeV400InfAdic;
  /**
   * Informações de exportação
   */
  exporta?: CPl010CNt2022002V130LeiauteNFeV400Exporta;
  /**
   * Informações de compras (Nota de Empenho, Pedido e Contrato)
   */
  compra?: CPl010CNt2022002V130LeiauteNFeV400Compra;
  /**
   * Informações de registro aquisições de cana
   */
  cana?: CPl010CNt2022002V130LeiauteNFeV400Cana;
  /**
   * Informações do Responsável Técnico pela emissão do DF-e
   */
  infRespTec?: CPl010CNt2022002V130LeiauteNFeV400InfRespTec;
  /**
   * Grupo para informações da solicitação da NFF
   */
  infSolicNFF?: CPl010CNt2022002V130LeiauteNFeV400InfSolicNff;
}
