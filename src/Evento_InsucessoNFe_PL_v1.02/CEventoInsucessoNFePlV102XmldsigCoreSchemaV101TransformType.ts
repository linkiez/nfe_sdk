import { TEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformUri } from './TEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformUri';

export interface IEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformUri;
}

export class CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
