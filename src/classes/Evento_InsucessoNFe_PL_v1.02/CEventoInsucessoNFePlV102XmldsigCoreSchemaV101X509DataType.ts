/**
 * Runtime class for CEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType.
 */
export class CEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property X509 Certificate.
     */
    public X509Certificate?: string;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType instance.
     * Schema context: Runtime class for CEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType) {
        this["@class"] = ".CEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType";


        if (props) {

        	this.X509Certificate = props.X509Certificate;
        }
    }
}
