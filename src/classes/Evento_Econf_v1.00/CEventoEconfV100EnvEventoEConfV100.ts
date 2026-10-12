import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoEconfV100EnvEventoEConfV100EnvEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100EnvEventoEConfV100EnvEvento';

/**
 * Runtime class for CEventoEconfV100EnvEventoEConfV100.
 */
export class CEventoEconfV100EnvEventoEConfV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property env Evento.
     */
    public envEvento?: TEventoEconfV100EnvEventoEConfV100EnvEvento;

    /**
     * Creates a new schema-backed CEventoEconfV100EnvEventoEConfV100 instance.
     * Schema context: Runtime class for CEventoEconfV100EnvEventoEConfV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100EnvEventoEConfV100) {
        this["@class"] = ".CEventoEconfV100EnvEventoEConfV100";


        if (props) {

            assignSchemaProperties(this, props, ["envEvento"]);
        }
    }
}
