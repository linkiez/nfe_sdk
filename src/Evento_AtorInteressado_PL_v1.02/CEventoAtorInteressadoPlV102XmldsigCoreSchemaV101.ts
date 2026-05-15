import { TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101Signature } from './TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101Signature';

export interface IEventoAtorInteressadoPlV102XmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101Signature;
}

export class CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101Signature;

    public constructor(props?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
