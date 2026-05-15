import { CEventosRtcE211150V100DetEvento } from './CEventosRtcE211150V100DetEvento';

/**
 * Runtime class for CEventosRtcE211150V100.
 */
export class CEventosRtcE211150V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informações do Evento de Solicitação de Apropriação de Crédito para bens e serviços que dependem de atividade do adquirente
     */
    public detEvento?: CEventosRtcE211150V100DetEvento;

    /**
     * Creates a new schema-backed CEventosRtcE211150V100 instance.
     * Schema context: Runtime class for CEventosRtcE211150V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE211150V100) {
        this["@class"] = ".CEventosRtcE211150V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE211150V100DetEvento(props.detEvento): undefined;
        }
    }
}
