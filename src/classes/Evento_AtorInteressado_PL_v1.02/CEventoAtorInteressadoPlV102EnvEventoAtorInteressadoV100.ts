import { TEventoAtorInteressadoPlV102EnvEventoAtorInteressadoV100EnvEvento } from '../../types/Evento_AtorInteressado_PL_v1.02/TEventoAtorInteressadoPlV102EnvEventoAtorInteressadoV100EnvEvento';

/**
 * Runtime class for CEventoAtorInteressadoPlV102EnvEventoAtorInteressadoV100.
 */
export class CEventoAtorInteressadoPlV102EnvEventoAtorInteressadoV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property env Evento.
     */
    public envEvento?: TEventoAtorInteressadoPlV102EnvEventoAtorInteressadoV100EnvEvento;

    /**
     * Creates a new schema-backed CEventoAtorInteressadoPlV102EnvEventoAtorInteressadoV100 instance.
     * Schema context: Runtime class for CEventoAtorInteressadoPlV102EnvEventoAtorInteressadoV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102EnvEventoAtorInteressadoV100) {
        this["@class"] = ".CEventoAtorInteressadoPlV102EnvEventoAtorInteressadoV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
