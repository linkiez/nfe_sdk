import { CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType } from './CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType.
 */
export class CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
