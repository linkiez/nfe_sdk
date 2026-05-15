import { TEventoAverbPlV101XmldsigCoreSchemaV101Signature } from './TEventoAverbPlV101XmldsigCoreSchemaV101Signature';

export interface IEventoAverbPlV101XmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TEventoAverbPlV101XmldsigCoreSchemaV101Signature;
}

export class CEventoAverbPlV101XmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TEventoAverbPlV101XmldsigCoreSchemaV101Signature;

    public constructor(props?: CEventoAverbPlV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoAverbPlV101XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
