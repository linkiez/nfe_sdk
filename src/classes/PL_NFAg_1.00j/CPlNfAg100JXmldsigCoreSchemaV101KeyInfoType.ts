import { CPlNfAg100JXmldsigCoreSchemaV101X509DataType } from './CPlNfAg100JXmldsigCoreSchemaV101X509DataType';

/**
 * Runtime class for CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType.
 */
export class CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property X509 Data.
     */
    public X509Data?: CPlNfAg100JXmldsigCoreSchemaV101X509DataType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType instance.
     * Schema context: Runtime class for CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CPlNfAg100JXmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
