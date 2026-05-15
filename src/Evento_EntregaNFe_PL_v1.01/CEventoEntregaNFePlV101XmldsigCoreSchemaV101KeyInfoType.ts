import { CEventoEntregaNFePlV101XmldsigCoreSchemaV101X509DataType } from './CEventoEntregaNFePlV101XmldsigCoreSchemaV101X509DataType';

export interface IEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType {
  "@class"?: string;
  X509Data?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101X509DataType;
  $Id?: string;
}

export class CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType {
    public "@class"?: string;

    public X509Data?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101X509DataType;
    public $Id?: string;

    public constructor(props?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoEntregaNFePlV101XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
