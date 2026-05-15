import { TEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101Signature } from './TEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101Signature';

export interface IEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101Signature;
}

export class CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101Signature;

    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
