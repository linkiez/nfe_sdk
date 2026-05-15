import { CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType } from './CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType.
 */
export class CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
