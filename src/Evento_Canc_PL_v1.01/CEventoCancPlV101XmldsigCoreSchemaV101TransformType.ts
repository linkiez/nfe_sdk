import { TEventoCancPlV101XmldsigCoreSchemaV101TransformUri } from './TEventoCancPlV101XmldsigCoreSchemaV101TransformUri';

export interface IEventoCancPlV101XmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TEventoCancPlV101XmldsigCoreSchemaV101TransformUri;
}

export class CEventoCancPlV101XmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TEventoCancPlV101XmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CEventoCancPlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoCancPlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
