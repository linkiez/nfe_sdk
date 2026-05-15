import { CEventosRtcE112120V100DetEvento } from './CEventosRtcE112120V100DetEvento';

/**
 * Runtime class for CEventosRtcE112120V100.
 */
export class CEventosRtcE112120V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Informações do Evento de Importação em ALC/ZFM não convertida em isenção
     */
    public detEvento?: CEventosRtcE112120V100DetEvento;

    /**
     * Creates a new schema-backed CEventosRtcE112120V100 instance.
     * Schema context: Runtime class for CEventosRtcE112120V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventosRtcE112120V100) {
        this["@class"] = ".CEventosRtcE112120V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventosRtcE112120V100DetEvento(props.detEvento): undefined;
        }
    }
}
