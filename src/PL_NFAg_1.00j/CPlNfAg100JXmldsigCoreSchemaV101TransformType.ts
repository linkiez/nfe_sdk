import { TPlNfAg100JXmldsigCoreSchemaV101TransformUri } from './TPlNfAg100JXmldsigCoreSchemaV101TransformUri';

export interface IPlNfAg100JXmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TPlNfAg100JXmldsigCoreSchemaV101TransformUri;
}

export class CPlNfAg100JXmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TPlNfAg100JXmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CPlNfAg100JXmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CPlNfAg100JXmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
