export interface IPl010CNt2022002V130XmldsigCoreSchemaV101X509DataType {
  "@class"?: string;
  X509Certificate?: string;
}

export class CPl010CNt2022002V130XmldsigCoreSchemaV101X509DataType {
    public "@class"?: string;

    public X509Certificate?: string;

    public constructor(props?: CPl010CNt2022002V130XmldsigCoreSchemaV101X509DataType) {
        this["@class"] = ".CPl010CNt2022002V130XmldsigCoreSchemaV101X509DataType";


        if (props) {

        	this.X509Certificate = props.X509Certificate;
        }
    }
}
