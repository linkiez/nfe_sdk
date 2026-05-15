import { TEventoEconfV100XmldsigCoreSchemaV101Signature } from './TEventoEconfV100XmldsigCoreSchemaV101Signature';

export interface IEventoEconfV100XmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TEventoEconfV100XmldsigCoreSchemaV101Signature;
}

export class CEventoEconfV100XmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TEventoEconfV100XmldsigCoreSchemaV101Signature;

    public constructor(props?: CEventoEconfV100XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoEconfV100XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
