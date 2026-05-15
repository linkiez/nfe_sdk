export interface IEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType {
  "@class"?: string;
  X509Certificate?: string;
}

export class CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType {
    public "@class"?: string;

    public X509Certificate?: string;

    public constructor(props?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType) {
        this["@class"] = ".CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType";


        if (props) {

        	this.X509Certificate = props.X509Certificate;
        }
    }
}
