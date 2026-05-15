import { CEventosRtcE211140V100DetEvento } from './CEventosRtcE211140V100DetEvento';

/**
 * Runtime class for CEventosRtcE211140V100.
 */
export class CEventosRtcE211140V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informações do Evento de Solicitação de Apropriação de Crédito de Combustível
     */
    public detEvento?: CEventosRtcE211140V100DetEvento;

    /**
     * Creates a new schema-backed CEventosRtcE211140V100 instance.
     * Schema context: Runtime class for CEventosRtcE211140V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211140V100) {
        this["@class"] = ".CEventosRtcE211140V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE211140V100DetEvento(props.detEvento): undefined;
        }
    }
}
