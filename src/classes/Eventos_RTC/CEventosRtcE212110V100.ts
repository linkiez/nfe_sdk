import { CEventosRtcE212110V100DetEvento } from './CEventosRtcE212110V100DetEvento';

/**
 * Runtime class for CEventosRtcE212110V100.
 */
export class CEventosRtcE212110V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informações do Evento de Manifestação sobre Pedido de Transferência de Crédito de IBS em Operação de Sucessão
     */
    public detEvento?: CEventosRtcE212110V100DetEvento;

    /**
     * Creates a new schema-backed CEventosRtcE212110V100 instance.
     * Schema context: Runtime class for CEventosRtcE212110V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE212110V100) {
        this["@class"] = ".CEventosRtcE212110V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE212110V100DetEvento(props.detEvento): undefined;
        }
    }
}
