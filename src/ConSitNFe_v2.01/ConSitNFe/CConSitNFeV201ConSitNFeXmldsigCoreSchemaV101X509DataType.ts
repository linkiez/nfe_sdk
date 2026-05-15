export interface IConSitNFeV201ConSitNFeXmldsigCoreSchemaV101X509DataType {
  "@class"?: string;
  X509Certificate?: string;
}

export class CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101X509DataType {
    public "@class"?: string;

    public X509Certificate?: string;

    public constructor(props?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101X509DataType) {
        this["@class"] = ".CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101X509DataType";


        if (props) {

        	this.X509Certificate = props.X509Certificate;
        }
    }
}
