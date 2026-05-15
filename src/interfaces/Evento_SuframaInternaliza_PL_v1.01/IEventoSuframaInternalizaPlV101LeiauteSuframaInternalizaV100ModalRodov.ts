import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta2 } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta2';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaVeic } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaVeic';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta2 } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta2';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfVeic } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfVeic';

/**
 * Type contract for IEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ModalRodov.
 */
export interface IEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ModalRodov {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property placa Veic.
   */
  placaVeic?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaVeic;
  /**
   * Schema property TEvento Suframa Internaliza Pl V101 Leiaute Suframa Internaliza V100 Uf Veic.
   */
  TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfVeic?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfVeic;
  /**
   * Schema property placa Carreta.
   */
  placaCarreta?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta;
  /**
   * Schema property TEvento Suframa Internaliza Pl V101 Leiaute Suframa Internaliza V100 Uf Carreta.
   */
  TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta;
  /**
   * Schema property placa Carreta2.
   */
  placaCarreta2?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta2;
  /**
   * Schema property TEvento Suframa Internaliza Pl V101 Leiaute Suframa Internaliza V100 Uf Carreta2.
   */
  TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta2?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta2;
}
