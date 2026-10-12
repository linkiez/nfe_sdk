import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoEntregaNFePlV101RetEventoCancEntregaNFeV100RetEnvEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101RetEventoCancEntregaNFeV100RetEnvEvento';

/**
 * Runtime class for CEventoEntregaNFePlV101RetEventoCancEntregaNFeV100.
 */
export class CEventoEntregaNFePlV101RetEventoCancEntregaNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property ret Env Evento.
     */
    public retEnvEvento?: TEventoEntregaNFePlV101RetEventoCancEntregaNFeV100RetEnvEvento;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101RetEventoCancEntregaNFeV100 instance.
     * Schema context: Runtime class for CEventoEntregaNFePlV101RetEventoCancEntregaNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101RetEventoCancEntregaNFeV100) {
        this["@class"] = ".CEventoEntregaNFePlV101RetEventoCancEntregaNFeV100";


        if (props) {

            assignSchemaProperties(this, props, ["retEnvEvento"]);
        }
    }
}
