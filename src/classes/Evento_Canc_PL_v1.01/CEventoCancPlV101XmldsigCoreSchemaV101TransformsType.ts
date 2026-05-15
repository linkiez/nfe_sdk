import { CEventoCancPlV101XmldsigCoreSchemaV101TransformType } from './CEventoCancPlV101XmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CEventoCancPlV101XmldsigCoreSchemaV101TransformsType.
 */
export class CEventoCancPlV101XmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CEventoCancPlV101XmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CEventoCancPlV101XmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CEventoCancPlV101XmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoCancPlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoCancPlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
