import { TEventoEntregaNFePlV101EnvEventoCancEntregaNFeV100EnvEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101EnvEventoCancEntregaNFeV100EnvEvento';

/**
 * Runtime class for CEventoEntregaNFePlV101EnvEventoCancEntregaNFeV100.
 */
export class CEventoEntregaNFePlV101EnvEventoCancEntregaNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property env Evento.
     */
    public envEvento?: TEventoEntregaNFePlV101EnvEventoCancEntregaNFeV100EnvEvento;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101EnvEventoCancEntregaNFeV100 instance.
     * Schema context: Runtime class for CEventoEntregaNFePlV101EnvEventoCancEntregaNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101EnvEventoCancEntregaNFeV100) {
        this["@class"] = ".CEventoEntregaNFePlV101EnvEventoCancEntregaNFeV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
