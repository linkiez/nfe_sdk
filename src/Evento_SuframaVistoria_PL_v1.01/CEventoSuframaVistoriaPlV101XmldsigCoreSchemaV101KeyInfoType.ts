import { CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101X509DataType } from './CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101X509DataType';

export interface IEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType {
  "@class"?: string;
  X509Data?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101X509DataType;
  $Id?: string;
}

export class CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType {
    public "@class"?: string;

    public X509Data?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101X509DataType;
    public $Id?: string;

    public constructor(props?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
