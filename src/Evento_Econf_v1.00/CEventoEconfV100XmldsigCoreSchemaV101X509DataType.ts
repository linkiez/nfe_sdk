export interface IEventoEconfV100XmldsigCoreSchemaV101X509DataType {
  "@class"?: string;
  X509Certificate?: string;
}

export class CEventoEconfV100XmldsigCoreSchemaV101X509DataType {
    public "@class"?: string;

    public X509Certificate?: string;

    public constructor(props?: CEventoEconfV100XmldsigCoreSchemaV101X509DataType) {
        this["@class"] = ".CEventoEconfV100XmldsigCoreSchemaV101X509DataType";


        if (props) {

        	this.X509Certificate = props.X509Certificate;
        }
    }
}
