import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoSuframaVistoriaPlV101EnvSuframaVistoriaV100EnvEvento } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101EnvSuframaVistoriaV100EnvEvento';

/**
 * Runtime class for CEventoSuframaVistoriaPlV101EnvSuframaVistoriaV100.
 */
export class CEventoSuframaVistoriaPlV101EnvSuframaVistoriaV100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property env Evento.
     */
    public envEvento?: TEventoSuframaVistoriaPlV101EnvSuframaVistoriaV100EnvEvento;

    /**
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101EnvSuframaVistoriaV100 instance.
     * Schema context: Runtime class for CEventoSuframaVistoriaPlV101EnvSuframaVistoriaV100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101EnvSuframaVistoriaV100) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101EnvSuframaVistoriaV100";


        if (props) {

            assignSchemaProperties(this, props, ["envEvento"]);
        }
    }
}
