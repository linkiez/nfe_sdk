import { TEventoSuframaVistoriaPlV101SuframaVistoriaV100Evento } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101SuframaVistoriaV100Evento';

/**
 * Runtime class for CEventoSuframaVistoriaPlV101SuframaVistoriaV100.
 */
export class CEventoSuframaVistoriaPlV101SuframaVistoriaV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property evento.
     */
    public evento?: TEventoSuframaVistoriaPlV101SuframaVistoriaV100Evento;

    /**
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101SuframaVistoriaV100 instance.
     * Schema context: Runtime class for CEventoSuframaVistoriaPlV101SuframaVistoriaV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101SuframaVistoriaV100) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101SuframaVistoriaV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
