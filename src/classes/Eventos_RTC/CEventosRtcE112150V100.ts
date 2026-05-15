import { CEventosRtcE112150V100DetEvento } from './CEventosRtcE112150V100DetEvento';

/**
 * Runtime class for CEventosRtcE112150V100.
 */
export class CEventosRtcE112150V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informações do Evento de Atualização da Data de Previsão de Entrega
     */
    public detEvento?: CEventosRtcE112150V100DetEvento;

    /**
     * Creates a new schema-backed CEventosRtcE112150V100 instance.
     * Schema context: Runtime class for CEventosRtcE112150V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE112150V100) {
        this["@class"] = ".CEventosRtcE112150V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE112150V100DetEvento(props.detEvento): undefined;
        }
    }
}
