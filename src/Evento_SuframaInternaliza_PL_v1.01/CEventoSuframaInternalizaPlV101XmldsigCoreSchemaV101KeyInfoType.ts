import { CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101X509DataType } from './CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101X509DataType';

export interface IEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101KeyInfoType {
  "@class"?: string;
  X509Data?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101X509DataType;
  $Id?: string;
}

export class CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101KeyInfoType {
    public "@class"?: string;

    public X509Data?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101X509DataType;
    public $Id?: string;

    public constructor(props?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
