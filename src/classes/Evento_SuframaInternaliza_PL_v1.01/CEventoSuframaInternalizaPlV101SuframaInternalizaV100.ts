import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoSuframaInternalizaPlV101SuframaInternalizaV100Evento } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101SuframaInternalizaV100Evento';

/**
 * Runtime class for CEventoSuframaInternalizaPlV101SuframaInternalizaV100.
 */
export class CEventoSuframaInternalizaPlV101SuframaInternalizaV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property evento.
     */
    public evento?: TEventoSuframaInternalizaPlV101SuframaInternalizaV100Evento;

    /**
     * Creates a new schema-backed CEventoSuframaInternalizaPlV101SuframaInternalizaV100 instance.
     * Schema context: Runtime class for CEventoSuframaInternalizaPlV101SuframaInternalizaV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaInternalizaPlV101SuframaInternalizaV100) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101SuframaInternalizaV100";


        if (props) {

            assignSchemaProperties(this, props, ["evento"]);
        }
    }
}
