import { CEventoEpecPlV101XmldsigCoreSchemaV101X509DataType } from './CEventoEpecPlV101XmldsigCoreSchemaV101X509DataType';

export interface IEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType {
  "@class"?: string;
  X509Data?: CEventoEpecPlV101XmldsigCoreSchemaV101X509DataType;
  $Id?: string;
}

export class CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType {
    public "@class"?: string;

    public X509Data?: CEventoEpecPlV101XmldsigCoreSchemaV101X509DataType;
    public $Id?: string;

    public constructor(props?: CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoEpecPlV101XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
