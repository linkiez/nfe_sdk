import { TEventoCancPlV101RetEnvEventoCancNFeV100RetEnvEvento } from '../../types/Evento_Canc_PL_v1.01/TEventoCancPlV101RetEnvEventoCancNFeV100RetEnvEvento';

/**
 * Runtime class for CEventoCancPlV101RetEnvEventoCancNFeV100.
 */
export class CEventoCancPlV101RetEnvEventoCancNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Env Evento.
     */
    public retEnvEvento?: TEventoCancPlV101RetEnvEventoCancNFeV100RetEnvEvento;

    /**
     * Creates a new schema-backed CEventoCancPlV101RetEnvEventoCancNFeV100 instance.
     * Schema context: Runtime class for CEventoCancPlV101RetEnvEventoCancNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101RetEnvEventoCancNFeV100) {
        this["@class"] = ".CEventoCancPlV101RetEnvEventoCancNFeV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
