import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPl010CNt2022002V130XmldsigCoreSchemaV101TransformUri } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130XmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CPl010CNt2022002V130XmldsigCoreSchemaV101TransformType.
 */
export class CPl010CNt2022002V130XmldsigCoreSchemaV101TransformType {
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
    public $Algorithm?: TPl010CNt2022002V130XmldsigCoreSchemaV101TransformUri;

    /**
     * Creates a new schema-backed CPl010CNt2022002V130XmldsigCoreSchemaV101TransformType instance.
     * Schema context: Runtime class for CPl010CNt2022002V130XmldsigCoreSchemaV101TransformType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CPl010CNt2022002V130XmldsigCoreSchemaV101TransformType";


        if (props) {

            assignSchemaProperties(this, props, ["XPath", "$Algorithm"]);
        }
    }
}
