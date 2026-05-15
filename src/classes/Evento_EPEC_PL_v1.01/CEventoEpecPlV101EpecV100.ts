import { TEventoEpecPlV101EpecV100Evento } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101EpecV100Evento';

/**
 * Runtime class for CEventoEpecPlV101EpecV100.
 */
export class CEventoEpecPlV101EpecV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property evento.
     */
    public evento?: TEventoEpecPlV101EpecV100Evento;

    /**
     * Creates a new schema-backed CEventoEpecPlV101EpecV100 instance.
     * Schema context: Runtime class for CEventoEpecPlV101EpecV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101EpecV100) {
        this["@class"] = ".CEventoEpecPlV101EpecV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
