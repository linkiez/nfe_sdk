import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoCCePlV101XmldsigCoreSchemaV101TransformUri } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101XmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CEventoCCePlV101XmldsigCoreSchemaV101TransformType.
 */
export class CEventoCCePlV101XmldsigCoreSchemaV101TransformType {
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
    public $Algorithm?: TEventoCCePlV101XmldsigCoreSchemaV101TransformUri;

    /**
     * Creates a new schema-backed CEventoCCePlV101XmldsigCoreSchemaV101TransformType instance.
     * Schema context: Runtime class for CEventoCCePlV101XmldsigCoreSchemaV101TransformType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCCePlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoCCePlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

            assignSchemaProperties(this, props, ["XPath", "$Algorithm"]);
        }
    }
}
