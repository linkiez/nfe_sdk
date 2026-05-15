import { TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101Signature } from './TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101Signature';

export interface IEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101Signature;
}

export class CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101Signature;

    public constructor(props?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
