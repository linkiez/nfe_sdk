export interface IEventoGenericoPlV101XmldsigCoreSchemaV101X509DataType {
  "@class"?: string;
  X509Certificate?: string;
}

export class CEventoGenericoPlV101XmldsigCoreSchemaV101X509DataType {
    public "@class"?: string;

    public X509Certificate?: string;

    public constructor(props?: CEventoGenericoPlV101XmldsigCoreSchemaV101X509DataType) {
        this["@class"] = ".CEventoGenericoPlV101XmldsigCoreSchemaV101X509DataType";


        if (props) {

        	this.X509Certificate = props.X509Certificate;
        }
    }
}
