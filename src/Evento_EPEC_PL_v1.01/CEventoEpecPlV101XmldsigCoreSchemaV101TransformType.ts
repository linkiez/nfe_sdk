import { TEventoEpecPlV101XmldsigCoreSchemaV101TransformUri } from './TEventoEpecPlV101XmldsigCoreSchemaV101TransformUri';

export interface IEventoEpecPlV101XmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TEventoEpecPlV101XmldsigCoreSchemaV101TransformUri;
}

export class CEventoEpecPlV101XmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TEventoEpecPlV101XmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CEventoEpecPlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoEpecPlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
