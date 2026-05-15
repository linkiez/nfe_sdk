import { CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado';

import { CPl010CNt2022002V130LeiauteNFeV400Imposto } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Imposto';

import { CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol';

import { CPl010CNt2022002V130LeiauteNFeV400ObsItem } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400ObsItem';

import { CPl010CNt2022002V130LeiauteNFeV400Prod } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Prod';

/**
 * Dados dos detalhes da NF-e
 */
export interface IPl010CNt2022002V130LeiauteNFeV400Det {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Dados dos produtos e serviços da NF-e
   */
  prod?: CPl010CNt2022002V130LeiauteNFeV400Prod;
  /**
   * Tributos incidentes nos produtos ou serviços da NF-e
   */
  imposto?: CPl010CNt2022002V130LeiauteNFeV400Imposto;
  /**
   * Percentual de mercadoria devolvida
   */
  impostoDevol?: CPl010CNt2022002V130LeiauteNFeV400ImpostoDevol;
  /**
   * Grupo de observações de uso livre (para o item da NF-e)
   */
  obsItem?: CPl010CNt2022002V130LeiauteNFeV400ObsItem;
  /**
   * Valor total do Item, correspondente à sua participação no total da nota. A soma dos itens deverá corresponder ao total da nota.
   */
  vItem?: unknown;
  /**
   * Referenciamento de item de outros DFe
   */
  CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado?: CPl010CNt2022002V130LeiauteNFeV400DFeReferenciado;
}
