import { TEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformUri } from './TEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformUri';

export interface IEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformUri;
}

export class CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
