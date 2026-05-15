import { CEventoEpecNfCePl100EventoEpecV001EnvEvento } from './CEventoEpecNfCePl100EventoEpecV001EnvEvento';

/**
 * Runtime class for CEventoEpecNfCePl100EventoEpecV001.
 */
export class CEventoEpecNfCePl100EventoEpecV001 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificador de controle do Lote de envio do Evento.
     */
    public envEvento?: CEventoEpecNfCePl100EventoEpecV001EnvEvento;

    /**
     * Creates a new schema-backed CEventoEpecNfCePl100EventoEpecV001 instance.
     * Schema context: Runtime class for CEventoEpecNfCePl100EventoEpecV001.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecNfCePl100EventoEpecV001) {
        this["@class"] = ".CEventoEpecNfCePl100EventoEpecV001";


        if (props) {

        	this.envEvento = (props.envEvento) ? new CEventoEpecNfCePl100EventoEpecV001EnvEvento(props.envEvento): undefined;
        }
    }
}
