import { TEventoEconfV100XmldsigCoreSchemaV101TransformUri } from './TEventoEconfV100XmldsigCoreSchemaV101TransformUri';

export interface IEventoEconfV100XmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TEventoEconfV100XmldsigCoreSchemaV101TransformUri;
}

export class CEventoEconfV100XmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TEventoEconfV100XmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CEventoEconfV100XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoEconfV100XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
