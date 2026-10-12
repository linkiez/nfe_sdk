import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfAg100JXmldsigCoreSchemaV101TransformUri } from '../../types/PL_NFAg_1.00j/TPlNfAg100JXmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CPlNfAg100JXmldsigCoreSchemaV101TransformType.
 */
export class CPlNfAg100JXmldsigCoreSchemaV101TransformType {
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
    public $Algorithm?: TPlNfAg100JXmldsigCoreSchemaV101TransformUri;

    /**
     * Creates a new schema-backed CPlNfAg100JXmldsigCoreSchemaV101TransformType instance.
     * Schema context: Runtime class for CPlNfAg100JXmldsigCoreSchemaV101TransformType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JXmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CPlNfAg100JXmldsigCoreSchemaV101TransformType";


        if (props) {

            assignSchemaProperties(this, props, ["XPath", "$Algorithm"]);
        }
    }
}
