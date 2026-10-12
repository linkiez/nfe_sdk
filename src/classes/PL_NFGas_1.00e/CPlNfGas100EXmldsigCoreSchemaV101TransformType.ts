import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlNfGas100EXmldsigCoreSchemaV101TransformUri } from '../../types/PL_NFGas_1.00e/TPlNfGas100EXmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CPlNfGas100EXmldsigCoreSchemaV101TransformType.
 */
export class CPlNfGas100EXmldsigCoreSchemaV101TransformType {
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
    public $Algorithm?: TPlNfGas100EXmldsigCoreSchemaV101TransformUri;

    /**
     * Creates a new schema-backed CPlNfGas100EXmldsigCoreSchemaV101TransformType instance.
     * Schema context: Runtime class for CPlNfGas100EXmldsigCoreSchemaV101TransformType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EXmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CPlNfGas100EXmldsigCoreSchemaV101TransformType";


        if (props) {

            assignSchemaProperties(this, props, ["XPath", "$Algorithm"]);
        }
    }
}
