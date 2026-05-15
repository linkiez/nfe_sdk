import { CPlNfAg100JXmldsigCoreSchemaV101TransformType } from './CPlNfAg100JXmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CPlNfAg100JXmldsigCoreSchemaV101TransformsType.
 */
export class CPlNfAg100JXmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CPlNfAg100JXmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CPlNfAg100JXmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CPlNfAg100JXmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JXmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CPlNfAg100JXmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CPlNfAg100JXmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
