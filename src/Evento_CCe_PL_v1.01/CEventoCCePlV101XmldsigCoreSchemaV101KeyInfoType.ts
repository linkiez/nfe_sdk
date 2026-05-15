import { CEventoCCePlV101XmldsigCoreSchemaV101X509DataType } from './CEventoCCePlV101XmldsigCoreSchemaV101X509DataType';

export interface IEventoCCePlV101XmldsigCoreSchemaV101KeyInfoType {
  "@class"?: string;
  X509Data?: CEventoCCePlV101XmldsigCoreSchemaV101X509DataType;
  $Id?: string;
}

export class CEventoCCePlV101XmldsigCoreSchemaV101KeyInfoType {
    public "@class"?: string;

    public X509Data?: CEventoCCePlV101XmldsigCoreSchemaV101X509DataType;
    public $Id?: string;

    public constructor(props?: CEventoCCePlV101XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoCCePlV101XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoCCePlV101XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
