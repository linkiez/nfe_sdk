import { TEventoCCePlV101CCeV100Evento } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101CCeV100Evento';

/**
 * Runtime class for CEventoCCePlV101CCeV100.
 */
export class CEventoCCePlV101CCeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property evento.
     */
    public evento?: TEventoCCePlV101CCeV100Evento;

    /**
     * Creates a new schema-backed CEventoCCePlV101CCeV100 instance.
     * Schema context: Runtime class for CEventoCCePlV101CCeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCCePlV101CCeV100) {
        this["@class"] = ".CEventoCCePlV101CCeV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
