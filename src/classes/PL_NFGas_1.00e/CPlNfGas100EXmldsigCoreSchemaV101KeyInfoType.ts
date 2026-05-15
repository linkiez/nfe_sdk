import { CPlNfGas100EXmldsigCoreSchemaV101X509DataType } from './CPlNfGas100EXmldsigCoreSchemaV101X509DataType';

/**
 * Runtime class for CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType.
 */
export class CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property X509 Data.
     */
    public X509Data?: CPlNfGas100EXmldsigCoreSchemaV101X509DataType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType instance.
     * Schema context: Runtime class for CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CPlNfGas100EXmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
