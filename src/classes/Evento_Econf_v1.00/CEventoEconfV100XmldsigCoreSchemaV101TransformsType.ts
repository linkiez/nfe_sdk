import { CEventoEconfV100XmldsigCoreSchemaV101TransformType } from './CEventoEconfV100XmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CEventoEconfV100XmldsigCoreSchemaV101TransformsType.
 */
export class CEventoEconfV100XmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CEventoEconfV100XmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CEventoEconfV100XmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CEventoEconfV100XmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEconfV100XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoEconfV100XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoEconfV100XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
