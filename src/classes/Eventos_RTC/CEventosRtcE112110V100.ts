import { CEventosRtcE112110V100DetEvento } from './CEventosRtcE112110V100DetEvento';

/**
 * Runtime class for CEventosRtcE112110V100.
 */
export class CEventosRtcE112110V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informações do Evento de Informação de efetivo pagamento integral para liberar crédito presumido do adquirente
     */
    public detEvento?: CEventosRtcE112110V100DetEvento;

    /**
     * Creates a new schema-backed CEventosRtcE112110V100 instance.
     * Schema context: Runtime class for CEventosRtcE112110V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE112110V100) {
        this["@class"] = ".CEventosRtcE112110V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE112110V100DetEvento(props.detEvento): undefined;
        }
    }
}
