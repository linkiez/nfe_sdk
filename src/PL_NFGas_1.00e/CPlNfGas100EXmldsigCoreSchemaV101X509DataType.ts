export interface IPlNfGas100EXmldsigCoreSchemaV101X509DataType {
  "@class"?: string;
  X509Certificate?: string;
}

export class CPlNfGas100EXmldsigCoreSchemaV101X509DataType {
    public "@class"?: string;

    public X509Certificate?: string;

    public constructor(props?: CPlNfGas100EXmldsigCoreSchemaV101X509DataType) {
        this["@class"] = ".CPlNfGas100EXmldsigCoreSchemaV101X509DataType";


        if (props) {

        	this.X509Certificate = props.X509Certificate;
        }
    }
}
