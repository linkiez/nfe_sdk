import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoEconfV100RetEventoEConfV100RetEnvEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100RetEventoEConfV100RetEnvEvento';

/**
 * Runtime class for CEventoEconfV100RetEventoEConfV100.
 */
export class CEventoEconfV100RetEventoEConfV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Env Evento.
     */
    public retEnvEvento?: TEventoEconfV100RetEventoEConfV100RetEnvEvento;

    /**
     * Creates a new schema-backed CEventoEconfV100RetEventoEConfV100 instance.
     * Schema context: Runtime class for CEventoEconfV100RetEventoEConfV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100RetEventoEConfV100) {
        this["@class"] = ".CEventoEconfV100RetEventoEConfV100";


        if (props) {

            assignSchemaProperties(this, props, ["retEnvEvento"]);
        }
    }
}
