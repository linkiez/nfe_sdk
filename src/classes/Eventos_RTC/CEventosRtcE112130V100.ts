import { CEventosRtcE112130V100DetEvento } from './CEventosRtcE112130V100DetEvento';

/**
 * Runtime class for CEventosRtcE112130V100.
 */
export class CEventosRtcE112130V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informações do Evento de Perecimento, perda, roubo ou furto durante o transporte contratado pelo fornecedor
     */
    public detEvento?: CEventosRtcE112130V100DetEvento;

    /**
     * Creates a new schema-backed CEventosRtcE112130V100 instance.
     * Schema context: Runtime class for CEventosRtcE112130V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE112130V100) {
        this["@class"] = ".CEventosRtcE112130V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE112130V100DetEvento(props.detEvento): undefined;
        }
    }
}
