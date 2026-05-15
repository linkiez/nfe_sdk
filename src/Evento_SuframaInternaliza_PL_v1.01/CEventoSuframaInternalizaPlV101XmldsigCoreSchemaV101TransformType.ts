import { TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformUri } from './TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformUri';

export interface IEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformUri;
}

export class CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
