import { CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType } from './CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType';

/**
 * Runtime class for CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType.
 */
export class CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property X509 Data.
     */
    public X509Data?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType instance.
     * Schema context: Runtime class for CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
