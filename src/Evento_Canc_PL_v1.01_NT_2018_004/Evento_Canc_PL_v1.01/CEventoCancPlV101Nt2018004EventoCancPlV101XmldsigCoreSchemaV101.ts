import { TEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101Signature } from './TEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101Signature';

export interface IEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101Signature;
}

export class CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101Signature;

    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
