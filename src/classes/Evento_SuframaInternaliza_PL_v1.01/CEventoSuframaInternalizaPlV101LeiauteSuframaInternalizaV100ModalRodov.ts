import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta2 } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta2';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaVeic } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaVeic';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta2 } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta2';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfVeic } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfVeic';

/**
 * Runtime class for CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ModalRodov.
 */
export class CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ModalRodov {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property placa Veic.
     */
    public placaVeic?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaVeic;
    /**
     * Schema property TEvento Suframa Internaliza Pl V101 Leiaute Suframa Internaliza V100 Uf Veic.
     */
    public TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfVeic?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfVeic;
    /**
     * Schema property placa Carreta.
     */
    public placaCarreta?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta;
    /**
     * Schema property TEvento Suframa Internaliza Pl V101 Leiaute Suframa Internaliza V100 Uf Carreta.
     */
    public TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta;
    /**
     * Schema property placa Carreta2.
     */
    public placaCarreta2?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100PlacaCarreta2;
    /**
     * Schema property TEvento Suframa Internaliza Pl V101 Leiaute Suframa Internaliza V100 Uf Carreta2.
     */
    public TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta2?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta2;

    /**
     * Creates a new schema-backed CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ModalRodov instance.
     * Schema context: Runtime class for CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ModalRodov.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ModalRodov) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ModalRodov";


        if (props) {

            assignSchemaProperties(this, props, ["placaVeic", "TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfVeic", "placaCarreta", "TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta", "placaCarreta2", "TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100UfCarreta2"]);
        }
    }
}
