import { TPlNfAg100JXmldsigCoreSchemaV101Signature } from './TPlNfAg100JXmldsigCoreSchemaV101Signature';

export interface IPlNfAg100JXmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TPlNfAg100JXmldsigCoreSchemaV101Signature;
}

export class CPlNfAg100JXmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TPlNfAg100JXmldsigCoreSchemaV101Signature;

    public constructor(props?: CPlNfAg100JXmldsigCoreSchemaV101) {
        this["@class"] = ".CPlNfAg100JXmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
