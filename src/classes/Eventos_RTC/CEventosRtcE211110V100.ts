import { CEventosRtcE211110V100DetEvento } from './CEventosRtcE211110V100DetEvento';

/**
 * Runtime class for CEventosRtcE211110V100.
 */
export class CEventosRtcE211110V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informações do Evento de Solicitação de Apropriação de crédito presumido
     */
    public detEvento?: CEventosRtcE211110V100DetEvento;

    /**
     * Creates a new schema-backed CEventosRtcE211110V100 instance.
     * Schema context: Runtime class for CEventosRtcE211110V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211110V100) {
        this["@class"] = ".CEventosRtcE211110V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE211110V100DetEvento(props.detEvento): undefined;
        }
    }
}
