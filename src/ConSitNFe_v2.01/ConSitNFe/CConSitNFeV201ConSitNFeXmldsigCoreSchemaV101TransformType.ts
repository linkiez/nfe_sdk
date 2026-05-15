import { TConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformUri } from './TConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformUri';

export interface IConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformUri;
}

export class CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
