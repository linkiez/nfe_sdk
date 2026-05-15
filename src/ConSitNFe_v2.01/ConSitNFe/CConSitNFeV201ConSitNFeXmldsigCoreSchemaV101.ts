import { TConSitNFeV201ConSitNFeXmldsigCoreSchemaV101Signature } from './TConSitNFeV201ConSitNFeXmldsigCoreSchemaV101Signature';

export interface IConSitNFeV201ConSitNFeXmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TConSitNFeV201ConSitNFeXmldsigCoreSchemaV101Signature;
}

export class CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TConSitNFeV201ConSitNFeXmldsigCoreSchemaV101Signature;

    public constructor(props?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101) {
        this["@class"] = ".CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
