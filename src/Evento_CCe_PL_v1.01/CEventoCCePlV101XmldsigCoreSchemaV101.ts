import { TEventoCCePlV101XmldsigCoreSchemaV101Signature } from './TEventoCCePlV101XmldsigCoreSchemaV101Signature';

export interface IEventoCCePlV101XmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TEventoCCePlV101XmldsigCoreSchemaV101Signature;
}

export class CEventoCCePlV101XmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TEventoCCePlV101XmldsigCoreSchemaV101Signature;

    public constructor(props?: CEventoCCePlV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoCCePlV101XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
