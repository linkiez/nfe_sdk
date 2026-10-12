import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoEntregaNFePlV101XmldsigCoreSchemaV101Signature } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101XmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CEventoEntregaNFePlV101XmldsigCoreSchemaV101.
 */
export class CEventoEntregaNFePlV101XmldsigCoreSchemaV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property signature.
     */
    public signature?: TEventoEntregaNFePlV101XmldsigCoreSchemaV101Signature;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101XmldsigCoreSchemaV101 instance.
     * Schema context: Runtime class for CEventoEntregaNFePlV101XmldsigCoreSchemaV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoEntregaNFePlV101XmldsigCoreSchemaV101";


        if (props) {

            assignSchemaProperties(this, props, ["signature"]);
        }
    }
}
