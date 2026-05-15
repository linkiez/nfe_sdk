import { CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType } from './CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType.
 */
export class CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
