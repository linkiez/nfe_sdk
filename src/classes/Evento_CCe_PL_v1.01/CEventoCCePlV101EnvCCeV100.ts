import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoCCePlV101EnvCCeV100EnvEvento } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101EnvCCeV100EnvEvento';

/**
 * Runtime class for CEventoCCePlV101EnvCCeV100.
 */
export class CEventoCCePlV101EnvCCeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property env Evento.
     */
    public envEvento?: TEventoCCePlV101EnvCCeV100EnvEvento;

    /**
     * Creates a new schema-backed CEventoCCePlV101EnvCCeV100 instance.
     * Schema context: Runtime class for CEventoCCePlV101EnvCCeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCCePlV101EnvCCeV100) {
        this["@class"] = ".CEventoCCePlV101EnvCCeV100";


        if (props) {

            assignSchemaProperties(this, props, ["envEvento"]);
        }
    }
}
