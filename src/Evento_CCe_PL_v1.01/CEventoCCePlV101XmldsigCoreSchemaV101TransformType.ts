import { TEventoCCePlV101XmldsigCoreSchemaV101TransformUri } from './TEventoCCePlV101XmldsigCoreSchemaV101TransformUri';

export interface IEventoCCePlV101XmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TEventoCCePlV101XmldsigCoreSchemaV101TransformUri;
}

export class CEventoCCePlV101XmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TEventoCCePlV101XmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CEventoCCePlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoCCePlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
