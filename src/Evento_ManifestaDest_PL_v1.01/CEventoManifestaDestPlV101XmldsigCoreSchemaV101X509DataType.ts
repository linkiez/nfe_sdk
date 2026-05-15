export interface IEventoManifestaDestPlV101XmldsigCoreSchemaV101X509DataType {
  "@class"?: string;
  X509Certificate?: string;
}

export class CEventoManifestaDestPlV101XmldsigCoreSchemaV101X509DataType {
    public "@class"?: string;

    public X509Certificate?: string;

    public constructor(props?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101X509DataType) {
        this["@class"] = ".CEventoManifestaDestPlV101XmldsigCoreSchemaV101X509DataType";


        if (props) {

        	this.X509Certificate = props.X509Certificate;
        }
    }
}
