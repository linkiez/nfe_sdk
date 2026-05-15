import { TEventoManifestaDestPlV101XmldsigCoreSchemaV101Signature } from './TEventoManifestaDestPlV101XmldsigCoreSchemaV101Signature';

export interface IEventoManifestaDestPlV101XmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TEventoManifestaDestPlV101XmldsigCoreSchemaV101Signature;
}

export class CEventoManifestaDestPlV101XmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TEventoManifestaDestPlV101XmldsigCoreSchemaV101Signature;

    public constructor(props?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoManifestaDestPlV101XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
