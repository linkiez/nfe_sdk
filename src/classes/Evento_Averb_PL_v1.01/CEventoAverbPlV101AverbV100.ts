import { TEventoAverbPlV101AverbV100Evento } from '../../types/Evento_Averb_PL_v1.01/TEventoAverbPlV101AverbV100Evento';

/**
 * Runtime class for CEventoAverbPlV101AverbV100.
 */
export class CEventoAverbPlV101AverbV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property evento.
     */
    public evento?: TEventoAverbPlV101AverbV100Evento;

    /**
     * Creates a new schema-backed CEventoAverbPlV101AverbV100 instance.
     * Schema context: Runtime class for CEventoAverbPlV101AverbV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAverbPlV101AverbV100) {
        this["@class"] = ".CEventoAverbPlV101AverbV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
