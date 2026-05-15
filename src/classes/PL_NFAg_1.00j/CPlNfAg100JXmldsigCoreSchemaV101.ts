import { TPlNfAg100JXmldsigCoreSchemaV101Signature } from '../../types/PL_NFAg_1.00j/TPlNfAg100JXmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CPlNfAg100JXmldsigCoreSchemaV101.
 */
export class CPlNfAg100JXmldsigCoreSchemaV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property signature.
     */
    public signature?: TPlNfAg100JXmldsigCoreSchemaV101Signature;

    /**
     * Creates a new schema-backed CPlNfAg100JXmldsigCoreSchemaV101 instance.
     * Schema context: Runtime class for CPlNfAg100JXmldsigCoreSchemaV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JXmldsigCoreSchemaV101) {
        this["@class"] = ".CPlNfAg100JXmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
