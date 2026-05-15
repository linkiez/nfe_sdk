import { CEventoAverbPlV101XmldsigCoreSchemaV101TransformType } from './CEventoAverbPlV101XmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType.
 */
export class CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CEventoAverbPlV101XmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoAverbPlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
