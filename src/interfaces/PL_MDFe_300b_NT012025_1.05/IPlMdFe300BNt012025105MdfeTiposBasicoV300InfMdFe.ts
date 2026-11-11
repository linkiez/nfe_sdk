import { CPlMdFe300BNt012025105MdfeTiposBasicoV300AutXml } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300AutXml';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300Emit } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300Emit';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300Ide } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300Ide';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfAdic } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300InfAdic';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfDoc } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300InfDoc';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfModal } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300InfModal';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPaa } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPaa';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfSolicNff } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300InfSolicNff';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300Lacres } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300Lacres';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300ProdPred } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300ProdPred';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300RespTec } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300RespTec';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300Seg } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300Seg';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300Tot } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300Tot';

/**
 * Informações do MDF-e
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do MDF-e
   */
  ide?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Ide;
  /**
   * Identificação do Emitente do Manifesto
   */
  emit?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Emit;
  /**
   * Informações do modal
   */
  infModal?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfModal;
  /**
   * Informações dos Documentos fiscais vinculados ao manifesto
   */
  infDoc?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfDoc;
  /**
   * Informações de Seguro da Carga
   */
  seg?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Seg;
  /**
   * Produto predominante Informar a descrição do produto predominante, conforme o item de maior valor financeiro conforme Resolução ANTT n° 5.867 de 2020).
   */
  prodPred?: CPlMdFe300BNt012025105MdfeTiposBasicoV300ProdPred;
  /**
   * Totalizadores da carga transportada e seus documentos fiscais
   */
  tot?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Tot;
  /**
   * Lacres do MDF-e Preechimento opcional para os modais Rodoviário e Ferroviário
   */
  lacres?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Lacres;
  /**
   * Autorizados para download do XML do DF-e Informar CNPJ ou CPF. Preencher os zeros não significativos.
   */
  autXML?: CPlMdFe300BNt012025105MdfeTiposBasicoV300AutXml;
  /**
   * Informações Adicionais
   */
  infAdic?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfAdic;
  /**
   * Informações do Responsável Técnico pela emissão do DF-e
   */
  infRespTec?: CPlMdFe300BNt012025105MdfeTiposBasicoV300RespTec;
  /**
   * Grupo de informações do pedido de emissão da Nota Fiscal Fácil
   */
  infSolicNFF?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfSolicNff;
  /**
   * Grupo de Informação do Provedor de Assinatura e Autorização
   */
  infPAA?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPaa;
}
