import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoAtorInteressadoPlV102EventoAtorInteressadoV100Evento } from '../../types/Evento_AtorInteressado_PL_v1.02/TEventoAtorInteressadoPlV102EventoAtorInteressadoV100Evento';

/**
 * Runtime class for CEventoAtorInteressadoPlV102EventoAtorInteressadoV100.
 */
export class CEventoAtorInteressadoPlV102EventoAtorInteressadoV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property evento.
     */
    public evento?: TEventoAtorInteressadoPlV102EventoAtorInteressadoV100Evento;

    /**
     * Creates a new schema-backed CEventoAtorInteressadoPlV102EventoAtorInteressadoV100 instance.
     * Schema context: Runtime class for CEventoAtorInteressadoPlV102EventoAtorInteressadoV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102EventoAtorInteressadoV100) {
        this["@class"] = ".CEventoAtorInteressadoPlV102EventoAtorInteressadoV100";


        if (props) {

            assignSchemaProperties(this, props, ["evento"]);
        }
    }
}
