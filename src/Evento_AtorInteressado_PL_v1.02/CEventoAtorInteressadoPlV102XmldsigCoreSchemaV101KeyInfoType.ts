import { CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101X509DataType } from './CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101X509DataType';

export interface IEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType {
  "@class"?: string;
  X509Data?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101X509DataType;
  $Id?: string;
}

export class CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType {
    public "@class"?: string;

    public X509Data?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101X509DataType;
    public $Id?: string;

    public constructor(props?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
