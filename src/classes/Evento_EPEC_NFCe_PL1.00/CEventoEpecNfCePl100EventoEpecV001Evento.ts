import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CEventoEpecNfCePl100EventoEpecV001InfEvento } from './CEventoEpecNfCePl100EventoEpecV001InfEvento';

/**
 * Evento, um lote pode conter até 20 eventos
 */
export class CEventoEpecNfCePl100EventoEpecV001Evento {
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
    public infEvento?: CEventoEpecNfCePl100EventoEpecV001InfEvento;

    /**
     * Creates a new schema-backed CEventoEpecNfCePl100EventoEpecV001Evento instance.
     * Schema context: Evento, um lote pode conter até 20 eventos
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecNfCePl100EventoEpecV001Evento) {
        this["@class"] = ".CEventoEpecNfCePl100EventoEpecV001Evento";


        if (props) {

            assignSchemaProperties(this, props, ["unknown"]);
        	this.infEvento = (props.infEvento) ? new CEventoEpecNfCePl100EventoEpecV001InfEvento(props.infEvento): undefined;
        }
    }
}
