import { CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType } from './CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType.
 */
export class CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
