import { CEventosRtcE211124V100DetEvento } from './CEventosRtcE211124V100DetEvento';

/**
 * Runtime class for CEventosRtcE211124V100.
 */
export class CEventosRtcE211124V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informações do Evento de Perecimento, perda, roubo ou furto durante o transporte contratado pelo adquirente
     */
    public detEvento?: CEventosRtcE211124V100DetEvento;

    /**
     * Creates a new schema-backed CEventosRtcE211124V100 instance.
     * Schema context: Runtime class for CEventosRtcE211124V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211124V100) {
        this["@class"] = ".CEventosRtcE211124V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE211124V100DetEvento(props.detEvento): undefined;
        }
    }
}
