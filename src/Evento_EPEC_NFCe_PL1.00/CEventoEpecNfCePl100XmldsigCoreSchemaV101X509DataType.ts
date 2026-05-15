export interface IEventoEpecNfCePl100XmldsigCoreSchemaV101X509DataType {
  "@class"?: string;
  X509Certificate?: string;
}

export class CEventoEpecNfCePl100XmldsigCoreSchemaV101X509DataType {
    public "@class"?: string;

    public X509Certificate?: string;

    public constructor(props?: CEventoEpecNfCePl100XmldsigCoreSchemaV101X509DataType) {
        this["@class"] = ".CEventoEpecNfCePl100XmldsigCoreSchemaV101X509DataType";


        if (props) {

        	this.X509Certificate = props.X509Certificate;
        }
    }
}
