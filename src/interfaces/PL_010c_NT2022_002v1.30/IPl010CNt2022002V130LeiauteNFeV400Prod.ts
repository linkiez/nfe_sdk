import { CPl010CNt2022002V130LeiauteNFeV400DetExport } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400DetExport';

import { CPl010CNt2022002V130LeiauteNFeV400Di } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Di';

import { CPl010CNt2022002V130LeiauteNFeV400GCred } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400GCred';

import { CPl010CNt2022002V130LeiauteNFeV400InfProdEmb } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400InfProdEmb';

import { CPl010CNt2022002V130LeiauteNFeV400InfProdNff } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400InfProdNff';

import { CPl010CNt2022002V130LeiauteNFeV400Rastro } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Rastro';

import { TPl010CNt2022002V130LeiauteNFeV400Guid } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400Guid';

/**
 * Dados dos produtos e serviços da NF-e
 */
export interface IPl010CNt2022002V130LeiauteNFeV400Prod {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Grupo de informações sobre o CréditoPresumido
   */
  gCred?: CPl010CNt2022002V130LeiauteNFeV400GCred;
  /**
   * Classificação para subapuração do IBS na ZFM
   */
  tpCredPresIBSZFM?: unknown;
  /**
   * Quantidade Comercial do produto, alterado para aceitar de 0 a 4 casas decimais e 11 inteiros.
   */
  qCom?: unknown;
  /**
   * Valor unitário de comercialização - alterado para aceitar 0 a 10 casas decimais e 11 inteiros
   */
  vUnCom?: unknown;
  /**
   * Valor bruto do produto ou serviço.
   */
  vProd?: unknown;
  /**
   * Quantidade Tributável - alterado para aceitar de 0 a 4 casas decimais e 11 inteiros
   */
  qTrib?: unknown;
  /**
   * Valor unitário de tributação - alterado para aceitar 0 a 10 casas decimais e 11 inteiros
   */
  vUnTrib?: unknown;
  /**
   * Valor Total do Frete
   */
  vFrete?: unknown;
  /**
   * Valor Total do Seguro
   */
  vSeg?: unknown;
  /**
   * Valor do Desconto
   */
  vDesc?: unknown;
  /**
   * Outras despesas acessórias
   */
  vOutro?: unknown;
  /**
   * Declaração de Importação (NT 2011/004)
   */
  CPl010CNt2022002V130LeiauteNFeV400Di?: CPl010CNt2022002V130LeiauteNFeV400Di;
  /**
   * Detalhe da exportação
   */
  detExport?: CPl010CNt2022002V130LeiauteNFeV400DetExport;
  /**
   * Número de controle da FCI - Ficha de Conteúdo de Importação.
   */
  nFCI?: TPl010CNt2022002V130LeiauteNFeV400Guid;
  /**
   * Número do lote do produto.
   */
  rastro?: CPl010CNt2022002V130LeiauteNFeV400Rastro;
  /**
   * Informações mais detalhadas do produto (usada na NFF)
   */
  infProdNFF?: CPl010CNt2022002V130LeiauteNFeV400InfProdNff;
  /**
   * Informações mais detalhadas do produto (usada na NFF)
   */
  infProdEmb?: CPl010CNt2022002V130LeiauteNFeV400InfProdEmb;
}
