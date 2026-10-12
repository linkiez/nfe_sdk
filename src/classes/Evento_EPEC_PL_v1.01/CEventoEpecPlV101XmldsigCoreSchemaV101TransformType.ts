import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TEventoEpecPlV101XmldsigCoreSchemaV101TransformUri } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101XmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CEventoEpecPlV101XmldsigCoreSchemaV101TransformType.
 */
export class CEventoEpecPlV101XmldsigCoreSchemaV101TransformType {
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
    public $Algorithm?: TEventoEpecPlV101XmldsigCoreSchemaV101TransformUri;

    /**
     * Creates a new schema-backed CEventoEpecPlV101XmldsigCoreSchemaV101TransformType instance.
     * Schema context: Runtime class for CEventoEpecPlV101XmldsigCoreSchemaV101TransformType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoEpecPlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

            assignSchemaProperties(this, props, ["XPath", "$Algorithm"]);
        }
    }
}
