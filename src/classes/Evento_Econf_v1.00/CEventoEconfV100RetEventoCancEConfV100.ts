import { TEventoEconfV100RetEventoCancEConfV100RetEnvEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100RetEventoCancEConfV100RetEnvEvento';

/**
 * Runtime class for CEventoEconfV100RetEventoCancEConfV100.
 */
export class CEventoEconfV100RetEventoCancEConfV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Env Evento.
     */
    public retEnvEvento?: TEventoEconfV100RetEventoCancEConfV100RetEnvEvento;

    /**
     * Creates a new schema-backed CEventoEconfV100RetEventoCancEConfV100 instance.
     * Schema context: Runtime class for CEventoEconfV100RetEventoCancEConfV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100RetEventoCancEConfV100) {
        this["@class"] = ".CEventoEconfV100RetEventoCancEConfV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
