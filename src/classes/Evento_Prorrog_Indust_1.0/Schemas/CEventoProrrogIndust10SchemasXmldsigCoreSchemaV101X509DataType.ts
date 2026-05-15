/**
 * Runtime class for CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType.
 */
export class CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property X509 Certificate.
     */
    public X509Certificate?: string;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType instance.
     * Schema context: Runtime class for CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType) {
        this["@class"] = ".CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType";


        if (props) {

        	this.X509Certificate = props.X509Certificate;
        }
    }
}
