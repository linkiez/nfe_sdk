import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoEntregaNFePlV101EnvEventoEntregaNFeV100EnvEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101EnvEventoEntregaNFeV100EnvEvento';

/**
 * Runtime class for CEventoEntregaNFePlV101EnvEventoEntregaNFeV100.
 */
export class CEventoEntregaNFePlV101EnvEventoEntregaNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property env Evento.
     */
    public envEvento?: TEventoEntregaNFePlV101EnvEventoEntregaNFeV100EnvEvento;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101EnvEventoEntregaNFeV100 instance.
     * Schema context: Runtime class for CEventoEntregaNFePlV101EnvEventoEntregaNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101EnvEventoEntregaNFeV100) {
        this["@class"] = ".CEventoEntregaNFePlV101EnvEventoEntregaNFeV100";


        if (props) {

            assignSchemaProperties(this, props, ["envEvento"]);
        }
    }
}
