import { CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento } from './CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento';

/**
 * Runtime class for CEventoEpecNfCePl100RetEventoEpecV001.
 */
export class CEventoEpecNfCePl100RetEventoEpecV001 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificador de controle do Lote de envio do Evento, conforme informado na mensagem de entrada.
     */
    public retEnvEvento?: CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento;

    /**
     * Creates a new schema-backed CEventoEpecNfCePl100RetEventoEpecV001 instance.
     * Schema context: Runtime class for CEventoEpecNfCePl100RetEventoEpecV001.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecNfCePl100RetEventoEpecV001) {
        this["@class"] = ".CEventoEpecNfCePl100RetEventoEpecV001";


        if (props) {

        	this.retEnvEvento = (props.retEnvEvento) ? new CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento(props.retEnvEvento): undefined;
        }
    }
}
