import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoEntregaNFePlV101RetEventoEntregaNFeV100RetEnvEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101RetEventoEntregaNFeV100RetEnvEvento';

/**
 * Runtime class for CEventoEntregaNFePlV101RetEventoEntregaNFeV100.
 */
export class CEventoEntregaNFePlV101RetEventoEntregaNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Env Evento.
     */
    public retEnvEvento?: TEventoEntregaNFePlV101RetEventoEntregaNFeV100RetEnvEvento;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101RetEventoEntregaNFeV100 instance.
     * Schema context: Runtime class for CEventoEntregaNFePlV101RetEventoEntregaNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101RetEventoEntregaNFeV100) {
        this["@class"] = ".CEventoEntregaNFePlV101RetEventoEntregaNFeV100";


        if (props) {

            assignSchemaProperties(this, props, ["retEnvEvento"]);
        }
    }
}
