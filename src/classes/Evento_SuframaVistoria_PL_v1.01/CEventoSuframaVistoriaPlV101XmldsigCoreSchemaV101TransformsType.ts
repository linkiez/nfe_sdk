import { CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType } from './CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType.
 */
export class CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
