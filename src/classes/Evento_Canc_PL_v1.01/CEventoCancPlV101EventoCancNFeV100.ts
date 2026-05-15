import { TEventoCancPlV101EventoCancNFeV100Evento } from '../../types/Evento_Canc_PL_v1.01/TEventoCancPlV101EventoCancNFeV100Evento';

/**
 * Runtime class for CEventoCancPlV101EventoCancNFeV100.
 */
export class CEventoCancPlV101EventoCancNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property evento.
     */
    public evento?: TEventoCancPlV101EventoCancNFeV100Evento;

    /**
     * Creates a new schema-backed CEventoCancPlV101EventoCancNFeV100 instance.
     * Schema context: Runtime class for CEventoCancPlV101EventoCancNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101EventoCancNFeV100) {
        this["@class"] = ".CEventoCancPlV101EventoCancNFeV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
