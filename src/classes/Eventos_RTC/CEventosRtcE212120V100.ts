import { CEventosRtcE212120V100DetEvento } from './CEventosRtcE212120V100DetEvento';

/**
 * Runtime class for CEventosRtcE212120V100.
 */
export class CEventosRtcE212120V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informações do Evento de Manifestação sobre Pedido de Transferência de Créditode CBS em Operação de Sucessão
     */
    public detEvento?: CEventosRtcE212120V100DetEvento;

    /**
     * Creates a new schema-backed CEventosRtcE212120V100 instance.
     * Schema context: Runtime class for CEventosRtcE212120V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE212120V100) {
        this["@class"] = ".CEventosRtcE212120V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE212120V100DetEvento(props.detEvento): undefined;
        }
    }
}
