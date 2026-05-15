import { TEventoEconfV100EventoEConfV100Evento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100EventoEConfV100Evento';

/**
 * Runtime class for CEventoEconfV100EventoEConfV100.
 */
export class CEventoEconfV100EventoEConfV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property evento.
     */
    public evento?: TEventoEconfV100EventoEConfV100Evento;

    /**
     * Creates a new schema-backed CEventoEconfV100EventoEConfV100 instance.
     * Schema context: Runtime class for CEventoEconfV100EventoEConfV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100EventoEConfV100) {
        this["@class"] = ".CEventoEconfV100EventoEConfV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
