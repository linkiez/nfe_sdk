import { CEventosRtcE110001V100DetEvento } from './CEventosRtcE110001V100DetEvento';

/**
 * Runtime class for CEventosRtcE110001V100.
 */
export class CEventosRtcE110001V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informações do Cancelamento de evento
     */
    public detEvento?: CEventosRtcE110001V100DetEvento;

    /**
     * Creates a new schema-backed CEventosRtcE110001V100 instance.
     * Schema context: Runtime class for CEventosRtcE110001V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE110001V100) {
        this["@class"] = ".CEventosRtcE110001V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE110001V100DetEvento(props.detEvento): undefined;
        }
    }
}
