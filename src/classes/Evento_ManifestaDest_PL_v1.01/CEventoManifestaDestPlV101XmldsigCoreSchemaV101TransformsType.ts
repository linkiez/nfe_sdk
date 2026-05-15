import { CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType } from './CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType.
 */
export class CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
