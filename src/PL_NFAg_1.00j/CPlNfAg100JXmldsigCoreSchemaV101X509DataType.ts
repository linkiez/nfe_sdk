export interface IPlNfAg100JXmldsigCoreSchemaV101X509DataType {
  "@class"?: string;
  X509Certificate?: string;
}

export class CPlNfAg100JXmldsigCoreSchemaV101X509DataType {
    public "@class"?: string;

    public X509Certificate?: string;

    public constructor(props?: CPlNfAg100JXmldsigCoreSchemaV101X509DataType) {
        this["@class"] = ".CPlNfAg100JXmldsigCoreSchemaV101X509DataType";


        if (props) {

        	this.X509Certificate = props.X509Certificate;
        }
    }
}
