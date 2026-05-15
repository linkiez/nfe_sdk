import { TEventoGenericoPlV101RetEnvEventoV100RetEnvEvento } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101RetEnvEventoV100RetEnvEvento';

/**
 * Runtime class for CEventoGenericoPlV101RetEnvEventoV100.
 */
export class CEventoGenericoPlV101RetEnvEventoV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Env Evento.
     */
    public retEnvEvento?: TEventoGenericoPlV101RetEnvEventoV100RetEnvEvento;

    /**
     * Creates a new schema-backed CEventoGenericoPlV101RetEnvEventoV100 instance.
     * Schema context: Runtime class for CEventoGenericoPlV101RetEnvEventoV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoGenericoPlV101RetEnvEventoV100) {
        this["@class"] = ".CEventoGenericoPlV101RetEnvEventoV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
