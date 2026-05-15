import { TEventoGenericoPlV101XmldsigCoreSchemaV101Signature } from './TEventoGenericoPlV101XmldsigCoreSchemaV101Signature';

export interface IEventoGenericoPlV101XmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TEventoGenericoPlV101XmldsigCoreSchemaV101Signature;
}

export class CEventoGenericoPlV101XmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TEventoGenericoPlV101XmldsigCoreSchemaV101Signature;

    public constructor(props?: CEventoGenericoPlV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoGenericoPlV101XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
