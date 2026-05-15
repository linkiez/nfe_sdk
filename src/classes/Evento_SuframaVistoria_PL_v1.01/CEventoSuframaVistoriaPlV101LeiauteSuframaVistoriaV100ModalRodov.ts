import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta2 } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta2';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaVeic } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaVeic';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta2 } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta2';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfVeic } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfVeic';

/**
 * Runtime class for CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ModalRodov.
 */
export class CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ModalRodov {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property placa Veic.
     */
    public placaVeic?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaVeic;
    /**
     * Schema property TEvento Suframa Vistoria Pl V101 Leiaute Suframa Vistoria V100 Uf Veic.
     */
    public TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfVeic?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfVeic;
    /**
     * Schema property placa Carreta.
     */
    public placaCarreta?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta;
    /**
     * Schema property TEvento Suframa Vistoria Pl V101 Leiaute Suframa Vistoria V100 Uf Carreta.
     */
    public TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta;
    /**
     * Schema property placa Carreta2.
     */
    public placaCarreta2?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100PlacaCarreta2;
    /**
     * Schema property TEvento Suframa Vistoria Pl V101 Leiaute Suframa Vistoria V100 Uf Carreta2.
     */
    public TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta2?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta2;

    /**
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ModalRodov instance.
     * Schema context: Runtime class for CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ModalRodov.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ModalRodov) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ModalRodov";


        if (props) {

        	this.placaVeic = props.placaVeic;
        	this.TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfVeic = props.TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfVeic;
        	this.placaCarreta = props.placaCarreta;
        	this.TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta = props.TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta;
        	this.placaCarreta2 = props.placaCarreta2;
        	this.TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta2 = props.TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100UfCarreta2;
        }
    }
}
