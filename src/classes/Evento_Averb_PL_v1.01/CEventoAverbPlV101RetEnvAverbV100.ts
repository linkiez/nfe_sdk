import { TEventoAverbPlV101RetEnvAverbV100RetEnvEvento } from '../../types/Evento_Averb_PL_v1.01/TEventoAverbPlV101RetEnvAverbV100RetEnvEvento';

/**
 * Runtime class for CEventoAverbPlV101RetEnvAverbV100.
 */
export class CEventoAverbPlV101RetEnvAverbV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Env Evento.
     */
    public retEnvEvento?: TEventoAverbPlV101RetEnvAverbV100RetEnvEvento;

    /**
     * Creates a new schema-backed CEventoAverbPlV101RetEnvAverbV100 instance.
     * Schema context: Runtime class for CEventoAverbPlV101RetEnvAverbV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAverbPlV101RetEnvAverbV100) {
        this["@class"] = ".CEventoAverbPlV101RetEnvAverbV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
