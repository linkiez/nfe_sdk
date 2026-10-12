import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoEconfV100EnvEventoCancEConfV100EnvEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100EnvEventoCancEConfV100EnvEvento';

/**
 * Runtime class for CEventoEconfV100EnvEventoCancEConfV100.
 */
export class CEventoEconfV100EnvEventoCancEConfV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property env Evento.
     */
    public envEvento?: TEventoEconfV100EnvEventoCancEConfV100EnvEvento;

    /**
     * Creates a new schema-backed CEventoEconfV100EnvEventoCancEConfV100 instance.
     * Schema context: Runtime class for CEventoEconfV100EnvEventoCancEConfV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100EnvEventoCancEConfV100) {
        this["@class"] = ".CEventoEconfV100EnvEventoCancEConfV100";


        if (props) {

            assignSchemaProperties(this, props, ["envEvento"]);
        }
    }
}
