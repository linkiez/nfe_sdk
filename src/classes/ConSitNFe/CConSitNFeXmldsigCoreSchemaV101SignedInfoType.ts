import { CConSitNFeXmldsigCoreSchemaV101ReferenceType } from './CConSitNFeXmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CConSitNFeXmldsigCoreSchemaV101SignedInfoType.
 */
export class CConSitNFeXmldsigCoreSchemaV101SignedInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Reference.
     */
    public Reference?: CConSitNFeXmldsigCoreSchemaV101ReferenceType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CConSitNFeXmldsigCoreSchemaV101SignedInfoType instance.
     * Schema context: Runtime class for CConSitNFeXmldsigCoreSchemaV101SignedInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CConSitNFeXmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CConSitNFeXmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CConSitNFeXmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
