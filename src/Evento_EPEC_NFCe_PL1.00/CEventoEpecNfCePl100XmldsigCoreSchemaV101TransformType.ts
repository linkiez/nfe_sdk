import { TEventoEpecNfCePl100XmldsigCoreSchemaV101TransformUri } from './TEventoEpecNfCePl100XmldsigCoreSchemaV101TransformUri';

export interface IEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TEventoEpecNfCePl100XmldsigCoreSchemaV101TransformUri;
}

export class CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TEventoEpecNfCePl100XmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
