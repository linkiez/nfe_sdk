import { TEventoSuframaVistoriaPlV101RetEnvSuframaVistoriaV100RetEnvEvento } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101RetEnvSuframaVistoriaV100RetEnvEvento';

/**
 * Runtime class for CEventoSuframaVistoriaPlV101RetEnvSuframaVistoriaV100.
 */
export class CEventoSuframaVistoriaPlV101RetEnvSuframaVistoriaV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Env Evento.
     */
    public retEnvEvento?: TEventoSuframaVistoriaPlV101RetEnvSuframaVistoriaV100RetEnvEvento;

    /**
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101RetEnvSuframaVistoriaV100 instance.
     * Schema context: Runtime class for CEventoSuframaVistoriaPlV101RetEnvSuframaVistoriaV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101RetEnvSuframaVistoriaV100) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101RetEnvSuframaVistoriaV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
