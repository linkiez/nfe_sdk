import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CnpjDest';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100CpfDest';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DiaEmi } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DiaEmi';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfDest } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfDest';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VTotalNFe } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VTotalNFe';

/**
 * Type contract for IEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Ctg.
 */
export interface IEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Ctg {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property n Form Seg.
   */
  nFormSeg?: unknown;
  /**
   * Schema property TEvento Suframa Internaliza Pl V101 Leiaute Suframa Internaliza V100 Uf Dest.
   */
  TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfDest?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfDest;
  /**
   * Schema property tp Emis.
   */
  tpEmis?: unknown;
  /**
   * Schema property v Total NFe.
   */
  vTotalNFe?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VTotalNFe;
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
  diaEmi?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DiaEmi;
}
