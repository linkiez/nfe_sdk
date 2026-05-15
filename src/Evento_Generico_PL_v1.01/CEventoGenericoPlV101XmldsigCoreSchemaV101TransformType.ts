import { TEventoGenericoPlV101XmldsigCoreSchemaV101TransformUri } from './TEventoGenericoPlV101XmldsigCoreSchemaV101TransformUri';

export interface IEventoGenericoPlV101XmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TEventoGenericoPlV101XmldsigCoreSchemaV101TransformUri;
}

export class CEventoGenericoPlV101XmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TEventoGenericoPlV101XmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CEventoGenericoPlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoGenericoPlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
