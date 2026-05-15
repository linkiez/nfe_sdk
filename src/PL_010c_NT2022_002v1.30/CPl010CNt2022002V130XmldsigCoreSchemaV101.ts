import { TPl010CNt2022002V130XmldsigCoreSchemaV101Signature } from './TPl010CNt2022002V130XmldsigCoreSchemaV101Signature';

export interface IPl010CNt2022002V130XmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TPl010CNt2022002V130XmldsigCoreSchemaV101Signature;
}

export class CPl010CNt2022002V130XmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TPl010CNt2022002V130XmldsigCoreSchemaV101Signature;

    public constructor(props?: CPl010CNt2022002V130XmldsigCoreSchemaV101) {
        this["@class"] = ".CPl010CNt2022002V130XmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
