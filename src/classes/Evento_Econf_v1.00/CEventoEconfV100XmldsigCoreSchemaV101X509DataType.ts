import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Runtime class for CEventoEconfV100XmldsigCoreSchemaV101X509DataType.
 */
export class CEventoEconfV100XmldsigCoreSchemaV101X509DataType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property X509 Certificate.
     */
    public X509Certificate?: string;

    /**
     * Creates a new schema-backed CEventoEconfV100XmldsigCoreSchemaV101X509DataType instance.
     * Schema context: Runtime class for CEventoEconfV100XmldsigCoreSchemaV101X509DataType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100XmldsigCoreSchemaV101X509DataType) {
        this["@class"] = ".CEventoEconfV100XmldsigCoreSchemaV101X509DataType";


        if (props) {

            assignSchemaProperties(this, props, ["X509Certificate"]);
        }
    }
}
