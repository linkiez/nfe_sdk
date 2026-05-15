import { TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformUri } from './TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformUri';

export interface IEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformUri;
}

export class CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
