import { TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformUri } from './TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformUri';

export interface IEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformUri;
}

export class CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
