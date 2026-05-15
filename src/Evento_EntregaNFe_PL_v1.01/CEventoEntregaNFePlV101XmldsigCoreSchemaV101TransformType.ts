import { TEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformUri } from './TEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformUri';

export interface IEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformUri;
}

export class CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
