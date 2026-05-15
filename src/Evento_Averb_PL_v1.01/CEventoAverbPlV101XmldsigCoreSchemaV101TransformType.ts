import { TEventoAverbPlV101XmldsigCoreSchemaV101TransformUri } from './TEventoAverbPlV101XmldsigCoreSchemaV101TransformUri';

export interface IEventoAverbPlV101XmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TEventoAverbPlV101XmldsigCoreSchemaV101TransformUri;
}

export class CEventoAverbPlV101XmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TEventoAverbPlV101XmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CEventoAverbPlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoAverbPlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
