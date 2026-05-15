import { TEventoEpecPlV101EnvEpecV100EnvEvento } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101EnvEpecV100EnvEvento';

/**
 * Runtime class for CEventoEpecPlV101EnvEpecV100.
 */
export class CEventoEpecPlV101EnvEpecV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property env Evento.
     */
    public envEvento?: TEventoEpecPlV101EnvEpecV100EnvEvento;

    /**
     * Creates a new schema-backed CEventoEpecPlV101EnvEpecV100 instance.
     * Schema context: Runtime class for CEventoEpecPlV101EnvEpecV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101EnvEpecV100) {
        this["@class"] = ".CEventoEpecPlV101EnvEpecV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
