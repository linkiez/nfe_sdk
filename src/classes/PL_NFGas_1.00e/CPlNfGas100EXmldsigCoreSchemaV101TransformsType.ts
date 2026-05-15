import { CPlNfGas100EXmldsigCoreSchemaV101TransformType } from './CPlNfGas100EXmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CPlNfGas100EXmldsigCoreSchemaV101TransformsType.
 */
export class CPlNfGas100EXmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CPlNfGas100EXmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CPlNfGas100EXmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CPlNfGas100EXmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EXmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CPlNfGas100EXmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CPlNfGas100EXmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
