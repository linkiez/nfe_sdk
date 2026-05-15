import { TEventoSuframaInternalizaPlV101RetEnvSuframaInternalizaV100RetEnvEvento } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101RetEnvSuframaInternalizaV100RetEnvEvento';

/**
 * Runtime class for CEventoSuframaInternalizaPlV101RetEnvSuframaInternalizaV100.
 */
export class CEventoSuframaInternalizaPlV101RetEnvSuframaInternalizaV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Env Evento.
     */
    public retEnvEvento?: TEventoSuframaInternalizaPlV101RetEnvSuframaInternalizaV100RetEnvEvento;

    /**
     * Creates a new schema-backed CEventoSuframaInternalizaPlV101RetEnvSuframaInternalizaV100 instance.
     * Schema context: Runtime class for CEventoSuframaInternalizaPlV101RetEnvSuframaInternalizaV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaInternalizaPlV101RetEnvSuframaInternalizaV100) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101RetEnvSuframaInternalizaV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
