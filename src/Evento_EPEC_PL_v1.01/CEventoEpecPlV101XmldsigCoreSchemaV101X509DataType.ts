export interface IEventoEpecPlV101XmldsigCoreSchemaV101X509DataType {
  "@class"?: string;
  X509Certificate?: string;
}

export class CEventoEpecPlV101XmldsigCoreSchemaV101X509DataType {
    public "@class"?: string;

    public X509Certificate?: string;

    public constructor(props?: CEventoEpecPlV101XmldsigCoreSchemaV101X509DataType) {
        this["@class"] = ".CEventoEpecPlV101XmldsigCoreSchemaV101X509DataType";


        if (props) {

        	this.X509Certificate = props.X509Certificate;
        }
    }
}
