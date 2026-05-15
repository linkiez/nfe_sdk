import { TEventoCancPlV101XmldsigCoreSchemaV101Signature } from './TEventoCancPlV101XmldsigCoreSchemaV101Signature';

export interface IEventoCancPlV101XmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TEventoCancPlV101XmldsigCoreSchemaV101Signature;
}

export class CEventoCancPlV101XmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TEventoCancPlV101XmldsigCoreSchemaV101Signature;

    public constructor(props?: CEventoCancPlV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoCancPlV101XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
