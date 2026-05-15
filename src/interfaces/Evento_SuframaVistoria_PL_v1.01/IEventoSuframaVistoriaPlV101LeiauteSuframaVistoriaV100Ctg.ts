import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CnpjDest';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100CpfDest';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DiaEmi } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DiaEmi';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfDest } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfDest';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VTotalNFe } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VTotalNFe';

/**
 * Type contract for IEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Ctg.
 */
export interface IEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Ctg {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property n Form Seg.
   */
  nFormSeg?: unknown;
  /**
   * Schema property TEvento Suframa Vistoria Pl V101 Leiaute Suframa Vistoria V100 Uf Dest.
   */
  TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfDest?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfDest;
  /**
   * Schema property tp Emis.
   */
  tpEmis?: unknown;
  /**
   * Schema property v Total NFe.
   */
  vTotalNFe?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VTotalNFe;
  /**
   * Schema property ind ICMS.
   */
  indICMS?: unknown;
  /**
   * Schema property ind ICMSST.
   */
  indICMSST?: unknown;
  /**
   * Schema property dia Emi.
   */
  diaEmi?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DiaEmi;
}
