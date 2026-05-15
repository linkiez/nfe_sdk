import { CPlNfAg100JXmldsigCoreSchemaV101X509DataType } from './CPlNfAg100JXmldsigCoreSchemaV101X509DataType';

export interface IPlNfAg100JXmldsigCoreSchemaV101KeyInfoType {
  "@class"?: string;
  X509Data?: CPlNfAg100JXmldsigCoreSchemaV101X509DataType;
  $Id?: string;
}

export class CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType {
    public "@class"?: string;

    public X509Data?: CPlNfAg100JXmldsigCoreSchemaV101X509DataType;
    public $Id?: string;

    public constructor(props?: CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CPlNfAg100JXmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
