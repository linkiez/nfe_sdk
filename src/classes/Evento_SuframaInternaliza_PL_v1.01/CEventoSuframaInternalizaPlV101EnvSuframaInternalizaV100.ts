import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoSuframaInternalizaPlV101EnvSuframaInternalizaV100EnvEvento } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101EnvSuframaInternalizaV100EnvEvento';

/**
 * Runtime class for CEventoSuframaInternalizaPlV101EnvSuframaInternalizaV100.
 */
export class CEventoSuframaInternalizaPlV101EnvSuframaInternalizaV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property env Evento.
     */
    public envEvento?: TEventoSuframaInternalizaPlV101EnvSuframaInternalizaV100EnvEvento;

    /**
     * Creates a new schema-backed CEventoSuframaInternalizaPlV101EnvSuframaInternalizaV100 instance.
     * Schema context: Runtime class for CEventoSuframaInternalizaPlV101EnvSuframaInternalizaV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaInternalizaPlV101EnvSuframaInternalizaV100) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101EnvSuframaInternalizaV100";


        if (props) {

            assignSchemaProperties(this, props, ["envEvento"]);
        }
    }
}
