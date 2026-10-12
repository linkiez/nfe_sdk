import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoEpecPlV101RetEnvEpecV100RetEnvEvento } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101RetEnvEpecV100RetEnvEvento';

/**
 * Runtime class for CEventoEpecPlV101RetEnvEpecV100.
 */
export class CEventoEpecPlV101RetEnvEpecV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Env Evento.
     */
    public retEnvEvento?: TEventoEpecPlV101RetEnvEpecV100RetEnvEvento;

    /**
     * Creates a new schema-backed CEventoEpecPlV101RetEnvEpecV100 instance.
     * Schema context: Runtime class for CEventoEpecPlV101RetEnvEpecV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101RetEnvEpecV100) {
        this["@class"] = ".CEventoEpecPlV101RetEnvEpecV100";


        if (props) {

            assignSchemaProperties(this, props, ["retEnvEvento"]);
        }
    }
}
