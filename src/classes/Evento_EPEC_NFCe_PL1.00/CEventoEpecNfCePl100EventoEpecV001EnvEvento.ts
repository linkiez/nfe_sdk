import { CEventoEpecNfCePl100EventoEpecV001Evento } from './CEventoEpecNfCePl100EventoEpecV001Evento';

/**
 * Identificador de controle do Lote de envio do Evento.
 */
export class CEventoEpecNfCePl100EventoEpecV001EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Evento, um lote pode conter até 20 eventos
     */
    public evento?: CEventoEpecNfCePl100EventoEpecV001Evento;

    /**
     * Creates a new schema-backed CEventoEpecNfCePl100EventoEpecV001EnvEvento instance.
     * Schema context: Identificador de controle do Lote de envio do Evento.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecNfCePl100EventoEpecV001EnvEvento) {
        this["@class"] = ".CEventoEpecNfCePl100EventoEpecV001EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoEpecNfCePl100EventoEpecV001Evento(props.evento): undefined;
        }
    }
}
