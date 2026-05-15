import { CPlNfGas100EXmldsigCoreSchemaV101ReferenceType } from './CPlNfGas100EXmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType.
 */
export class CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Reference.
     */
    public Reference?: CPlNfGas100EXmldsigCoreSchemaV101ReferenceType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType instance.
     * Schema context: Runtime class for CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CPlNfGas100EXmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
