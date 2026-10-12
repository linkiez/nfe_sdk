import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoCancPlV101EnvEventoCancNFeV100EnvEvento } from '../../types/Evento_Canc_PL_v1.01/TEventoCancPlV101EnvEventoCancNFeV100EnvEvento';

/**
 * Runtime class for CEventoCancPlV101EnvEventoCancNFeV100.
 */
export class CEventoCancPlV101EnvEventoCancNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property env Evento.
     */
    public envEvento?: TEventoCancPlV101EnvEventoCancNFeV100EnvEvento;

    /**
     * Creates a new schema-backed CEventoCancPlV101EnvEventoCancNFeV100 instance.
     * Schema context: Runtime class for CEventoCancPlV101EnvEventoCancNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101EnvEventoCancNFeV100) {
        this["@class"] = ".CEventoCancPlV101EnvEventoCancNFeV100";


        if (props) {

            assignSchemaProperties(this, props, ["envEvento"]);
        }
    }
}
