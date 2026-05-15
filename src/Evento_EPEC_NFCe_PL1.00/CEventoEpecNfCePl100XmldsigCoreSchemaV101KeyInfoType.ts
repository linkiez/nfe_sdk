import { CEventoEpecNfCePl100XmldsigCoreSchemaV101X509DataType } from './CEventoEpecNfCePl100XmldsigCoreSchemaV101X509DataType';

export interface IEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType {
  "@class"?: string;
  X509Data?: CEventoEpecNfCePl100XmldsigCoreSchemaV101X509DataType;
  $Id?: string;
}

export class CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType {
    public "@class"?: string;

    public X509Data?: CEventoEpecNfCePl100XmldsigCoreSchemaV101X509DataType;
    public $Id?: string;

    public constructor(props?: CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoEpecNfCePl100XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
