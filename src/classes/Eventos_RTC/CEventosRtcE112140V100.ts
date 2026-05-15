import { CEventosRtcE112140V100DetEvento } from './CEventosRtcE112140V100DetEvento';

/**
 * Runtime class for CEventosRtcE112140V100.
 */
export class CEventosRtcE112140V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informações do Evento de Fornecimento não realizado com pagamento antecipado
     */
    public detEvento?: CEventosRtcE112140V100DetEvento;

    /**
     * Creates a new schema-backed CEventosRtcE112140V100 instance.
     * Schema context: Runtime class for CEventosRtcE112140V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE112140V100) {
        this["@class"] = ".CEventosRtcE112140V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE112140V100DetEvento(props.detEvento): undefined;
        }
    }
}
