import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoEconfV100EventoCancEConfV100Evento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100EventoCancEConfV100Evento';

/**
 * Runtime class for CEventoEconfV100EventoCancEConfV100.
 */
export class CEventoEconfV100EventoCancEConfV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property evento.
     */
    public evento?: TEventoEconfV100EventoCancEConfV100Evento;

    /**
     * Creates a new schema-backed CEventoEconfV100EventoCancEConfV100 instance.
     * Schema context: Runtime class for CEventoEconfV100EventoCancEConfV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100EventoCancEConfV100) {
        this["@class"] = ".CEventoEconfV100EventoCancEConfV100";


        if (props) {

            assignSchemaProperties(this, props, ["evento"]);
        }
    }
}
