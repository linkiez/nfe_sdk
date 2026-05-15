import { CEventoEpecNfCePl100RetEventoEpecV001InfEvento } from './CEventoEpecNfCePl100RetEventoEpecV001InfEvento';

/**
 * TAG de grupo do resultado do processamento do Evento
 */
export class CEventoEpecNfCePl100RetEventoEpecV001RetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Referenced or wildcard schema content not fully resolved by the generator.
     */
    public unknown?: unknown;
    /**
     * Grupo de informações do registro do Evento
     */
    public infEvento?: CEventoEpecNfCePl100RetEventoEpecV001InfEvento;

    /**
     * Creates a new schema-backed CEventoEpecNfCePl100RetEventoEpecV001RetEvento instance.
     * Schema context: TAG de grupo do resultado do processamento do Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecNfCePl100RetEventoEpecV001RetEvento) {
        this["@class"] = ".CEventoEpecNfCePl100RetEventoEpecV001RetEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoEpecNfCePl100RetEventoEpecV001InfEvento(props.infEvento): undefined;
        }
    }
}
