import { CEventosRtcE412130V100DetEvento } from './CEventosRtcE412130V100DetEvento';

/**
 * Runtime class for CEventosRtcE412130V100.
 */
export class CEventosRtcE412130V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informações do Evento de Manifestação do Fisco sobre Pedido de Transferência de Crédito de CBS em Operação de Sucessão
     */
    public detEvento?: CEventosRtcE412130V100DetEvento;

    /**
     * Creates a new schema-backed CEventosRtcE412130V100 instance.
     * Schema context: Runtime class for CEventosRtcE412130V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE412130V100) {
        this["@class"] = ".CEventosRtcE412130V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE412130V100DetEvento(props.detEvento): undefined;
        }
    }
}
