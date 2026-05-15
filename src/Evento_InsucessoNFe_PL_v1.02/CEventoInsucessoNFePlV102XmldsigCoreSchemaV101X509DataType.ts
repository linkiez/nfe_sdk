export interface IEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType {
  "@class"?: string;
  X509Certificate?: string;
}

export class CEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType {
    public "@class"?: string;

    public X509Certificate?: string;

    public constructor(props?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType) {
        this["@class"] = ".CEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType";


        if (props) {

        	this.X509Certificate = props.X509Certificate;
        }
    }
}
