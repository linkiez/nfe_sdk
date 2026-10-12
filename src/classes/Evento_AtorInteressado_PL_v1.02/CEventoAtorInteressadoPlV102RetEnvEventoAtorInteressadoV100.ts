import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoAtorInteressadoPlV102RetEnvEventoAtorInteressadoV100RetEnvEvento } from '../../types/Evento_AtorInteressado_PL_v1.02/TEventoAtorInteressadoPlV102RetEnvEventoAtorInteressadoV100RetEnvEvento';

/**
 * Runtime class for CEventoAtorInteressadoPlV102RetEnvEventoAtorInteressadoV100.
 */
export class CEventoAtorInteressadoPlV102RetEnvEventoAtorInteressadoV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Env Evento.
     */
    public retEnvEvento?: TEventoAtorInteressadoPlV102RetEnvEventoAtorInteressadoV100RetEnvEvento;

    /**
     * Creates a new schema-backed CEventoAtorInteressadoPlV102RetEnvEventoAtorInteressadoV100 instance.
     * Schema context: Runtime class for CEventoAtorInteressadoPlV102RetEnvEventoAtorInteressadoV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102RetEnvEventoAtorInteressadoV100) {
        this["@class"] = ".CEventoAtorInteressadoPlV102RetEnvEventoAtorInteressadoV100";


        if (props) {

            assignSchemaProperties(this, props, ["retEnvEvento"]);
        }
    }
}
