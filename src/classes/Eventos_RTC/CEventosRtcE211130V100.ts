import { CEventosRtcE211130V100DetEvento } from './CEventosRtcE211130V100DetEvento';

/**
 * Runtime class for CEventosRtcE211130V100.
 */
export class CEventosRtcE211130V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informações do Evento de Imobilização de Item
     */
    public detEvento?: CEventosRtcE211130V100DetEvento;

    /**
     * Creates a new schema-backed CEventosRtcE211130V100 instance.
     * Schema context: Runtime class for CEventosRtcE211130V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211130V100) {
        this["@class"] = ".CEventosRtcE211130V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE211130V100DetEvento(props.detEvento): undefined;
        }
    }
}
