import { CEventoGenericoPlV101XmldsigCoreSchemaV101X509DataType } from './CEventoGenericoPlV101XmldsigCoreSchemaV101X509DataType';

export interface IEventoGenericoPlV101XmldsigCoreSchemaV101KeyInfoType {
  "@class"?: string;
  X509Data?: CEventoGenericoPlV101XmldsigCoreSchemaV101X509DataType;
  $Id?: string;
}

export class CEventoGenericoPlV101XmldsigCoreSchemaV101KeyInfoType {
    public "@class"?: string;

    public X509Data?: CEventoGenericoPlV101XmldsigCoreSchemaV101X509DataType;
    public $Id?: string;

    public constructor(props?: CEventoGenericoPlV101XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoGenericoPlV101XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoGenericoPlV101XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
