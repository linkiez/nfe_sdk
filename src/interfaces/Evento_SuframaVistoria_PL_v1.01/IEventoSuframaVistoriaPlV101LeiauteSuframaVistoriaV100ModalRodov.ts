import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta2 } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta2';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaVeic } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaVeic';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta2 } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta2';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfVeic } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfVeic';

/**
 * Type contract for IEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ModalRodov.
 */
export interface IEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ModalRodov {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property placa Veic.
   */
  placaVeic?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaVeic;
  /**
   * Schema property TEvento Suframa Vistoria Pl V101 Leiaute Suframa Vistoria V100 Uf Veic.
   */
  TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfVeic?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfVeic;
  /**
   * Schema property placa Carreta.
   */
  placaCarreta?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta;
  /**
   * Schema property TEvento Suframa Vistoria Pl V101 Leiaute Suframa Vistoria V100 Uf Carreta.
   */
  TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta;
  /**
   * Schema property placa Carreta2.
   */
  placaCarreta2?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta2;
  /**
   * Schema property TEvento Suframa Vistoria Pl V101 Leiaute Suframa Vistoria V100 Uf Carreta2.
   */
  TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta2?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta2;
}
