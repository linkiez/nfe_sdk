import { CPlNfAg100JNfagTiposBasicoV100AutXml } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100AutXml';

import { CPlNfAg100JNfagTiposBasicoV100Dest } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100Dest';

import { CPlNfAg100JNfagTiposBasicoV100Det } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100Det';

import { CPlNfAg100JNfagTiposBasicoV100Emit } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100Emit';

import { CPlNfAg100JNfagTiposBasicoV100GAgencia } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100GAgencia';

import { CPlNfAg100JNfagTiposBasicoV100GFat } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100GFat';

import { CPlNfAg100JNfagTiposBasicoV100GFatConjunto } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100GFatConjunto';

import { CPlNfAg100JNfagTiposBasicoV100GMed } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100GMed';

import { CPlNfAg100JNfagTiposBasicoV100GQualiAgua } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100GQualiAgua';

import { CPlNfAg100JNfagTiposBasicoV100GSub } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100GSub';

import { CPlNfAg100JNfagTiposBasicoV100Ide } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100Ide';

import { CPlNfAg100JNfagTiposBasicoV100InfAdic } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100InfAdic';

import { CPlNfAg100JNfagTiposBasicoV100InfPaa } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100InfPaa';

import { CPlNfAg100JNfagTiposBasicoV100Ligacao } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100Ligacao';

import { CPlNfAg100JNfagTiposBasicoV100RespTec } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100RespTec';

import { CPlNfAg100JNfagTiposBasicoV100Total } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100Total';

/**
 * Informações da NFAg
 */
export interface IPlNfAg100JNfagTiposBasicoV100InfNfAg {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação da NFAg
   */
  ide?: CPlNfAg100JNfagTiposBasicoV100Ide;
  /**
   * Identificação do Emitente do documento fiscal
   */
  emit?: CPlNfAg100JNfagTiposBasicoV100Emit;
  /**
   * Identificação do destinatário
   */
  dest?: CPlNfAg100JNfagTiposBasicoV100Dest;
  /**
   * Dados da Ligação
   */
  ligacao?: CPlNfAg100JNfagTiposBasicoV100Ligacao;
  /**
   * Grupo de informações da substituição
   */
  gSub?: CPlNfAg100JNfagTiposBasicoV100GSub;
  /**
   * Grupo de informações dos Medidores
   */
  gMed?: CPlNfAg100JNfagTiposBasicoV100GMed;
  /**
   * Grupo de Informações do Faturamento conjunto
   */
  gFatConjunto?: CPlNfAg100JNfagTiposBasicoV100GFatConjunto;
  /**
   * Detalhamento de Produtos e Serviços
   */
  det?: CPlNfAg100JNfagTiposBasicoV100Det;
  /**
   * Dados dos totais da NFAg
   */
  total?: CPlNfAg100JNfagTiposBasicoV100Total;
  /**
   * Grupo de informações de controle da Fatura Obrigatorio para tpFat 1 e 3 Vedado para tpFat 2
   */
  gFat?: CPlNfAg100JNfagTiposBasicoV100GFat;
  /**
   * Grupo de informações da Agência reguladora
   */
  gAgencia?: CPlNfAg100JNfagTiposBasicoV100GAgencia;
  /**
   * Informações sobre a qualidade de água
   */
  gQualiAgua?: CPlNfAg100JNfagTiposBasicoV100GQualiAgua;
  /**
   * Autorizados para download do XML do DF-e Informar CNPJ ou CPF. Preencher os zeros não significativos.
   */
  autXML?: CPlNfAg100JNfagTiposBasicoV100AutXml;
  /**
   * Informações Adicionais
   */
  infAdic?: CPlNfAg100JNfagTiposBasicoV100InfAdic;
  /**
   * Grupo de Informação do Provedor de Assinatura e Autorização
   */
  infPAA?: CPlNfAg100JNfagTiposBasicoV100InfPaa;
  /**
   * Informações do Responsável Técnico pela emissão do DF-e
   */
  gRespTec?: CPlNfAg100JNfagTiposBasicoV100RespTec;
}
