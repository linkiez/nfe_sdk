import { CEventosRtcE412120V100DetEvento } from './CEventosRtcE412120V100DetEvento';

/**
 * Runtime class for CEventosRtcE412120V100.
 */
export class CEventosRtcE412120V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informações do Evento de Manifestação do Fisco sobre Pedido de Transferência de Crédito de IBS em Operações de Sucessão
     */
    public detEvento?: CEventosRtcE412120V100DetEvento;

    /**
     * Creates a new schema-backed CEventosRtcE412120V100 instance.
     * Schema context: Runtime class for CEventosRtcE412120V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE412120V100) {
        this["@class"] = ".CEventosRtcE412120V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE412120V100DetEvento(props.detEvento): undefined;
        }
    }
}
