import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101Signature } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101.
 */
export class CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property signature.
     */
    public signature?: TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101Signature;

    /**
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101 instance.
     * Schema context: Runtime class for CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101";


        if (props) {

            assignSchemaProperties(this, props, ["signature"]);
        }
    }
}
