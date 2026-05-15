import { CEventoEconfV100XmldsigCoreSchemaV101X509DataType } from './CEventoEconfV100XmldsigCoreSchemaV101X509DataType';

export interface IEventoEconfV100XmldsigCoreSchemaV101KeyInfoType {
  "@class"?: string;
  X509Data?: CEventoEconfV100XmldsigCoreSchemaV101X509DataType;
  $Id?: string;
}

export class CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType {
    public "@class"?: string;

    public X509Data?: CEventoEconfV100XmldsigCoreSchemaV101X509DataType;
    public $Id?: string;

    public constructor(props?: CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoEconfV100XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
