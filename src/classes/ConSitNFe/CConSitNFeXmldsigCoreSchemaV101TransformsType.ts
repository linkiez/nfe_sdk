import { CConSitNFeXmldsigCoreSchemaV101TransformType } from './CConSitNFeXmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CConSitNFeXmldsigCoreSchemaV101TransformsType.
 */
export class CConSitNFeXmldsigCoreSchemaV101TransformsType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Transform.
     */
    public Transform?: CConSitNFeXmldsigCoreSchemaV101TransformType;

    /**
     * Creates a new schema-backed CConSitNFeXmldsigCoreSchemaV101TransformsType instance.
     * Schema context: Runtime class for CConSitNFeXmldsigCoreSchemaV101TransformsType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CConSitNFeXmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CConSitNFeXmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CConSitNFeXmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
