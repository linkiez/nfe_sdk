import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoEntregaNFePlV101EventoEntregaNFeV100Evento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101EventoEntregaNFeV100Evento';

/**
 * Runtime class for CEventoEntregaNFePlV101EventoEntregaNFeV100.
 */
export class CEventoEntregaNFePlV101EventoEntregaNFeV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property evento.
     */
    public evento?: TEventoEntregaNFePlV101EventoEntregaNFeV100Evento;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101EventoEntregaNFeV100 instance.
     * Schema context: Runtime class for CEventoEntregaNFePlV101EventoEntregaNFeV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101EventoEntregaNFeV100) {
        this["@class"] = ".CEventoEntregaNFePlV101EventoEntregaNFeV100";


        if (props) {

            assignSchemaProperties(this, props, ["evento"]);
        }
    }
}
