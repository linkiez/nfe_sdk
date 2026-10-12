import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoCancPlV101XmldsigCoreSchemaV101TransformUri } from '../../types/Evento_Canc_PL_v1.01/TEventoCancPlV101XmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CEventoCancPlV101XmldsigCoreSchemaV101TransformType.
 */
export class CEventoCancPlV101XmldsigCoreSchemaV101TransformType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property XPath.
     */
    public XPath?: string;
    /**
     * Schema attribute algorithm.
     */
    public $Algorithm?: TEventoCancPlV101XmldsigCoreSchemaV101TransformUri;

    /**
     * Creates a new schema-backed CEventoCancPlV101XmldsigCoreSchemaV101TransformType instance.
     * Schema context: Runtime class for CEventoCancPlV101XmldsigCoreSchemaV101TransformType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoCancPlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

            assignSchemaProperties(this, props, ["XPath", "$Algorithm"]);
        }
    }
}
