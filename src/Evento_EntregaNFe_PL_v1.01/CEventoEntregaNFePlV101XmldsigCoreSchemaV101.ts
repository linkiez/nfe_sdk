import { TEventoEntregaNFePlV101XmldsigCoreSchemaV101Signature } from './TEventoEntregaNFePlV101XmldsigCoreSchemaV101Signature';

export interface IEventoEntregaNFePlV101XmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TEventoEntregaNFePlV101XmldsigCoreSchemaV101Signature;
}

export class CEventoEntregaNFePlV101XmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TEventoEntregaNFePlV101XmldsigCoreSchemaV101Signature;

    public constructor(props?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoEntregaNFePlV101XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
