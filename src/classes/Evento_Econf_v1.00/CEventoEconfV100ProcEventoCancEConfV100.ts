import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoEconfV100ProcEventoCancEConfV100ProcEventoNFe } from '../../types/Evento_Econf_v1.00/TEventoEconfV100ProcEventoCancEConfV100ProcEventoNFe';

/**
 * Runtime class for CEventoEconfV100ProcEventoCancEConfV100.
 */
export class CEventoEconfV100ProcEventoCancEConfV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property proc Evento NFe.
     */
    public procEventoNFe?: TEventoEconfV100ProcEventoCancEConfV100ProcEventoNFe;

    /**
     * Creates a new schema-backed CEventoEconfV100ProcEventoCancEConfV100 instance.
     * Schema context: Runtime class for CEventoEconfV100ProcEventoCancEConfV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100ProcEventoCancEConfV100) {
        this["@class"] = ".CEventoEconfV100ProcEventoCancEConfV100";


        if (props) {

            assignSchemaProperties(this, props, ["procEventoNFe"]);
        }
    }
}
