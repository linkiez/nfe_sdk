import { CEventoEpecPlV101XmldsigCoreSchemaV101TransformType } from './CEventoEpecPlV101XmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType.
 */
export class CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CEventoEpecPlV101XmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoEpecPlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
