import { TPlNfGas100EXmldsigCoreSchemaV101Signature } from './TPlNfGas100EXmldsigCoreSchemaV101Signature';

export interface IPlNfGas100EXmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TPlNfGas100EXmldsigCoreSchemaV101Signature;
}

export class CPlNfGas100EXmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TPlNfGas100EXmldsigCoreSchemaV101Signature;

    public constructor(props?: CPlNfGas100EXmldsigCoreSchemaV101) {
        this["@class"] = ".CPlNfGas100EXmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
