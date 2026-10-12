import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TConSitNFeXmldsigCoreSchemaV101TransformUri } from '../../types/ConSitNFe/TConSitNFeXmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CConSitNFeXmldsigCoreSchemaV101TransformType.
 */
export class CConSitNFeXmldsigCoreSchemaV101TransformType {
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
    public $Algorithm?: TConSitNFeXmldsigCoreSchemaV101TransformUri;

    /**
     * Creates a new schema-backed CConSitNFeXmldsigCoreSchemaV101TransformType instance.
     * Schema context: Runtime class for CConSitNFeXmldsigCoreSchemaV101TransformType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CConSitNFeXmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CConSitNFeXmldsigCoreSchemaV101TransformType";


        if (props) {

            assignSchemaProperties(this, props, ["XPath", "$Algorithm"]);
        }
    }
}
