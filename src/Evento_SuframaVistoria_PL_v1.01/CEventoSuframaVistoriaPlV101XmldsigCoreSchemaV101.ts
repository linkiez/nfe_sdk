import { TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101Signature } from './TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101Signature';

export interface IEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101Signature;
}

export class CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101Signature;

    public constructor(props?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
