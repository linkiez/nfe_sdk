import { TEventoEpecPlV101XmldsigCoreSchemaV101Signature } from './TEventoEpecPlV101XmldsigCoreSchemaV101Signature';

export interface IEventoEpecPlV101XmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TEventoEpecPlV101XmldsigCoreSchemaV101Signature;
}

export class CEventoEpecPlV101XmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TEventoEpecPlV101XmldsigCoreSchemaV101Signature;

    public constructor(props?: CEventoEpecPlV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoEpecPlV101XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
