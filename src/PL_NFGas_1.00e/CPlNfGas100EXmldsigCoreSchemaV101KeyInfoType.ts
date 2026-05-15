import { CPlNfGas100EXmldsigCoreSchemaV101X509DataType } from './CPlNfGas100EXmldsigCoreSchemaV101X509DataType';

export interface IPlNfGas100EXmldsigCoreSchemaV101KeyInfoType {
  "@class"?: string;
  X509Data?: CPlNfGas100EXmldsigCoreSchemaV101X509DataType;
  $Id?: string;
}

export class CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType {
    public "@class"?: string;

    public X509Data?: CPlNfGas100EXmldsigCoreSchemaV101X509DataType;
    public $Id?: string;

    public constructor(props?: CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CPlNfGas100EXmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
