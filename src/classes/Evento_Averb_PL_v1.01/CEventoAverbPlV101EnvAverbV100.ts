import { TEventoAverbPlV101EnvAverbV100EnvEvento } from '../../types/Evento_Averb_PL_v1.01/TEventoAverbPlV101EnvAverbV100EnvEvento';

/**
 * Runtime class for CEventoAverbPlV101EnvAverbV100.
 */
export class CEventoAverbPlV101EnvAverbV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property env Evento.
     */
    public envEvento?: TEventoAverbPlV101EnvAverbV100EnvEvento;

    /**
     * Creates a new schema-backed CEventoAverbPlV101EnvAverbV100 instance.
     * Schema context: Runtime class for CEventoAverbPlV101EnvAverbV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAverbPlV101EnvAverbV100) {
        this["@class"] = ".CEventoAverbPlV101EnvAverbV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
