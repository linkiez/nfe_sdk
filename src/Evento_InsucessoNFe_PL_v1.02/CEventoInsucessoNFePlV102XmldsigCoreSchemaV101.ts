import { TEventoInsucessoNFePlV102XmldsigCoreSchemaV101Signature } from './TEventoInsucessoNFePlV102XmldsigCoreSchemaV101Signature';

export interface IEventoInsucessoNFePlV102XmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TEventoInsucessoNFePlV102XmldsigCoreSchemaV101Signature;
}

export class CEventoInsucessoNFePlV102XmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TEventoInsucessoNFePlV102XmldsigCoreSchemaV101Signature;

    public constructor(props?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoInsucessoNFePlV102XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
