import { CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType } from './CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType.
 */
export class CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
