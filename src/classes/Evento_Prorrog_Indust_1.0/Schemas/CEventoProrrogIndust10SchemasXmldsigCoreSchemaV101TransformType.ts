import { TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformUri } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType.
 */
export class CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType {
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
    public $Algorithm?: TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformUri;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType instance.
     * Schema context: Runtime class for CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
