import { CPlNfGas100ENfgasTiposBasicoV100AutXml } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100AutXml';

import { CPlNfGas100ENfgasTiposBasicoV100Dest } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100Dest';

import { CPlNfGas100ENfgasTiposBasicoV100Det } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100Det';

import { CPlNfGas100ENfgasTiposBasicoV100Emit } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100Emit';

import { CPlNfGas100ENfgasTiposBasicoV100GAgencia } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100GAgencia';

import { CPlNfGas100ENfgasTiposBasicoV100GFat } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100GFat';

import { CPlNfGas100ENfgasTiposBasicoV100GMed } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100GMed';

import { CPlNfGas100ENfgasTiposBasicoV100GSub } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100GSub';

import { CPlNfGas100ENfgasTiposBasicoV100GVolContrat } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100GVolContrat';

import { CPlNfGas100ENfgasTiposBasicoV100Ide } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100Ide';

import { CPlNfGas100ENfgasTiposBasicoV100InfAdic } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100InfAdic';

import { CPlNfGas100ENfgasTiposBasicoV100Instalacao } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100Instalacao';

import { CPlNfGas100ENfgasTiposBasicoV100RespTec } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100RespTec';

import { CPlNfGas100ENfgasTiposBasicoV100Total } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100Total';

/**
 * Informações da NFGas
 */
export interface IPlNfGas100ENfgasTiposBasicoV100InfNfGas {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação da NFGas
   */
  ide?: CPlNfGas100ENfgasTiposBasicoV100Ide;
  /**
   * Identificação do Emitente do documento fiscal
   */
  emit?: CPlNfGas100ENfgasTiposBasicoV100Emit;
  /**
   * Identificação do destinatário
   */
  dest?: CPlNfGas100ENfgasTiposBasicoV100Dest;
  /**
   * Dados da Instalação OPCIONAL para TpFat=3
   */
  instalacao?: CPlNfGas100ENfgasTiposBasicoV100Instalacao;
  /**
   * Grupo de informações da substituição
   */
  gSub?: CPlNfGas100ENfgasTiposBasicoV100GSub;
  /**
   * Grupo de informações das volumes contratados
   */
  gVolContrat?: CPlNfGas100ENfgasTiposBasicoV100GVolContrat;
  /**
   * Grupo de informações dos Equipamentos de Medição
   */
  gMed?: CPlNfGas100ENfgasTiposBasicoV100GMed;
  /**
   * Detalhamento de Produtos e Serviços
   */
  det?: CPlNfGas100ENfgasTiposBasicoV100Det;
  /**
   * Dados dos totais da NFGas Para Tipo de Faturamento Agregador (tpFat=3) todos os totalizadores devem ser zero, exceto vNF e vTotDFe que devem ser a soma do vTotDFe das notas anteriores informadas no grupo gAgregadora
   */
  total?: CPlNfGas100ENfgasTiposBasicoV100Total;
  /**
   * Grupo de informações de controle da Fatura Obrigatorio para tpFat 1 e 3 (normal e agregador) Vedado para tpFat 2 (agregado)
   */
  gFat?: CPlNfGas100ENfgasTiposBasicoV100GFat;
  /**
   * Grupo de informações da Agência reguladora Obrigatorio para tpFat 1 e 2 (normal e agregada) Vedado para tpFat 3 (agregadora)
   */
  gAgencia?: CPlNfGas100ENfgasTiposBasicoV100GAgencia;
  /**
   * Autorizados para download do XML do DF-e Informar CNPJ ou CPF. Preencher os zeros não significativos.
   */
  autXML?: CPlNfGas100ENfgasTiposBasicoV100AutXml;
  /**
   * Informações Adicionais
   */
  infAdic?: CPlNfGas100ENfgasTiposBasicoV100InfAdic;
  /**
   * Informações do Responsável Técnico pela emissão do DF-e
   */
  gRespTec?: CPlNfGas100ENfgasTiposBasicoV100RespTec;
}
