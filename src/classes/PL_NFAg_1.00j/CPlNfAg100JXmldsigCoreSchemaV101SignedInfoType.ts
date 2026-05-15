import { CPlNfAg100JXmldsigCoreSchemaV101ReferenceType } from './CPlNfAg100JXmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType.
 */
export class CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Reference.
     */
    public Reference?: CPlNfAg100JXmldsigCoreSchemaV101ReferenceType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType instance.
     * Schema context: Runtime class for CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CPlNfAg100JXmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
