import { TPlNfGas100ENfgasTiposBasicoV100FatNf } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100FatNf';

import { TPlNfGas100ENfgasTiposBasicoV100FinNf } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100FinNf';

import { TPlNfGas100ENfgasTiposBasicoV100TtpEmis } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100TtpEmis';

/**
 * Identificação da NFGas
 */
export interface IPlNfGas100ENfgasTiposBasicoV100Ide {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código da UF do emitente da NFGas Código da UF do emitente do Documento Fiscal. Utilizar a Tabela do IBGE de código de unidades da federação.
   */
  cUF?: unknown;
  /**
   * Tipo do Ambiente 1 - Produção; 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Modelo da NFGas Utilizar o código 76 para identificação da NFGas
   */
  mod?: unknown;
  /**
   * Série do documento fiscal Informar a série do documento fiscal (informar zero para série única).
   */
  serie?: unknown;
  /**
   * Número do documento fiscal Número que identifica o documento fiscal 1 a 999999999.
   */
  nNF?: unknown;
  /**
   * Data e hora de emissão do documento fiscal Formato AAAA-MM-DDTHH:MM:DD TZD
   */
  dhEmi?: unknown;
  /**
   * Forma de emissão do Documento Fiscal 1 - Normal ; 2 - Contingência Off Line
   */
  tpEmis?: TPlNfGas100ENfgasTiposBasicoV100TtpEmis;
  /**
   * Código do município de ocorrência do fato gerador do IBS/CBS
   */
  cMunFG?: unknown;
  /**
   * Finalidade de emissão da NFGas 0 - NFGas normal; 3 - NFGas substituição;
   */
  finNFGas?: TPlNfGas100ENfgasTiposBasicoV100FinNf;
  /**
   * Tipo de Faturamento da NFGas 1 - Faturamento Normal; 2 - Faturamento Agregado; 3 - Faturamento Agregador
   */
  tpFat?: TPlNfGas100ENfgasTiposBasicoV100FatNf;
  /**
   * Grupo de Compras Governamentais
   */
  gCompraGov?: unknown;
}
