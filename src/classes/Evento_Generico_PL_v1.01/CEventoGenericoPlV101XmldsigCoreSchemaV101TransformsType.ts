import { CEventoGenericoPlV101XmldsigCoreSchemaV101TransformType } from './CEventoGenericoPlV101XmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType.
 */
export class CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CEventoGenericoPlV101XmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoGenericoPlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
