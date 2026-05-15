import { CEventoCCePlV101XmldsigCoreSchemaV101TransformType } from './CEventoCCePlV101XmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CEventoCCePlV101XmldsigCoreSchemaV101TransformsType.
 */
export class CEventoCCePlV101XmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CEventoCCePlV101XmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CEventoCCePlV101XmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CEventoCCePlV101XmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCCePlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoCCePlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoCCePlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
