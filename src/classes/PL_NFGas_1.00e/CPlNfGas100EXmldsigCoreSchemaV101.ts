import { TPlNfGas100EXmldsigCoreSchemaV101Signature } from '../../types/PL_NFGas_1.00e/TPlNfGas100EXmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CPlNfGas100EXmldsigCoreSchemaV101.
 */
export class CPlNfGas100EXmldsigCoreSchemaV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property signature.
     */
    public signature?: TPlNfGas100EXmldsigCoreSchemaV101Signature;

    /**
     * Creates a new schema-backed CPlNfGas100EXmldsigCoreSchemaV101 instance.
     * Schema context: Runtime class for CPlNfGas100EXmldsigCoreSchemaV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EXmldsigCoreSchemaV101) {
        this["@class"] = ".CPlNfGas100EXmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
