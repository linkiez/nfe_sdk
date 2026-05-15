import { TEventoEpecNfCePl100XmldsigCoreSchemaV101Signature } from './TEventoEpecNfCePl100XmldsigCoreSchemaV101Signature';

export interface IEventoEpecNfCePl100XmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TEventoEpecNfCePl100XmldsigCoreSchemaV101Signature;
}

export class CEventoEpecNfCePl100XmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TEventoEpecNfCePl100XmldsigCoreSchemaV101Signature;

    public constructor(props?: CEventoEpecNfCePl100XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoEpecNfCePl100XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
