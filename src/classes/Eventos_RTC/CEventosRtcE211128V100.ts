import { CEventosRtcE211128V100DetEvento } from './CEventosRtcE211128V100DetEvento';

/**
 * Runtime class for CEventosRtcE211128V100.
 */
export class CEventosRtcE211128V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informações do Evento de Aceite de débito na apuração por emissão de nota de crédito
     */
    public detEvento?: CEventosRtcE211128V100DetEvento;

    /**
     * Creates a new schema-backed CEventosRtcE211128V100 instance.
     * Schema context: Runtime class for CEventosRtcE211128V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211128V100) {
        this["@class"] = ".CEventosRtcE211128V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE211128V100DetEvento(props.detEvento): undefined;
        }
    }
}
