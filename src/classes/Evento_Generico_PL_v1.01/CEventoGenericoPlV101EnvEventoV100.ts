import { TEventoGenericoPlV101EnvEventoV100EnvEvento } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101EnvEventoV100EnvEvento';

/**
 * Runtime class for CEventoGenericoPlV101EnvEventoV100.
 */
export class CEventoGenericoPlV101EnvEventoV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property env Evento.
     */
    public envEvento?: TEventoGenericoPlV101EnvEventoV100EnvEvento;

    /**
     * Creates a new schema-backed CEventoGenericoPlV101EnvEventoV100 instance.
     * Schema context: Runtime class for CEventoGenericoPlV101EnvEventoV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoGenericoPlV101EnvEventoV100) {
        this["@class"] = ".CEventoGenericoPlV101EnvEventoV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
