import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100EnteGov } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100EnteGov';

import { TPlNfAg100JDFeTiposBasicosV100OperCompraGov } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100OperCompraGov';

/**
 * Tipo Compras Governamentais
 */
export interface IPlNfAg100JDFeTiposBasicosV100CompraGovReduzido {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Para administração pública direta e suas autarquias e fundações: 1=União 2=Estados 3=Distrito Federal 4=Municípios 5=Consórcio Público 6=Comitê Gestor do IBS
   */
  tpEnteGov?: TPlNfAg100JDFeTiposBasicosV100EnteGov;
  /**
   * Percentual de redução de aliquota em compra governamental
   */
  pRedutor?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Tipo da operação com ente governamental: 1 – Fornecimento com pagamento posterior; 2 - Recebimento do pagamento com fornecimento já realizado; 3 – Fornecimento com pagamento já realizado; 4 – Recebimento do pagamento com fornecimento posterior;
   */
  tpOperGov?: TPlNfAg100JDFeTiposBasicosV100OperCompraGov;
}
