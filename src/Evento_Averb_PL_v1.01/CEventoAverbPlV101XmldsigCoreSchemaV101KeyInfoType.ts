import { CEventoAverbPlV101XmldsigCoreSchemaV101X509DataType } from './CEventoAverbPlV101XmldsigCoreSchemaV101X509DataType';

export interface IEventoAverbPlV101XmldsigCoreSchemaV101KeyInfoType {
  "@class"?: string;
  X509Data?: CEventoAverbPlV101XmldsigCoreSchemaV101X509DataType;
  $Id?: string;
}

export class CEventoAverbPlV101XmldsigCoreSchemaV101KeyInfoType {
    public "@class"?: string;

    public X509Data?: CEventoAverbPlV101XmldsigCoreSchemaV101X509DataType;
    public $Id?: string;

    public constructor(props?: CEventoAverbPlV101XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoAverbPlV101XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoAverbPlV101XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
