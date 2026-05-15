import { CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101X509DataType } from './CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101X509DataType';

export interface IConSitNFeV201ConSitNFeXmldsigCoreSchemaV101KeyInfoType {
  "@class"?: string;
  X509Data?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101X509DataType;
  $Id?: string;
}

export class CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101KeyInfoType {
    public "@class"?: string;

    public X509Data?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101X509DataType;
    public $Id?: string;

    public constructor(props?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
