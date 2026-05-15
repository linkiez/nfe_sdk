import { CEventoManifestaDestPlV101XmldsigCoreSchemaV101X509DataType } from './CEventoManifestaDestPlV101XmldsigCoreSchemaV101X509DataType';

export interface IEventoManifestaDestPlV101XmldsigCoreSchemaV101KeyInfoType {
  "@class"?: string;
  X509Data?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101X509DataType;
  $Id?: string;
}

export class CEventoManifestaDestPlV101XmldsigCoreSchemaV101KeyInfoType {
    public "@class"?: string;

    public X509Data?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101X509DataType;
    public $Id?: string;

    public constructor(props?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoManifestaDestPlV101XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoManifestaDestPlV101XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
