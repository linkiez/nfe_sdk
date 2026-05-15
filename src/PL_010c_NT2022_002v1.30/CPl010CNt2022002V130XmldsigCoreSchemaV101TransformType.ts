import { TPl010CNt2022002V130XmldsigCoreSchemaV101TransformUri } from './TPl010CNt2022002V130XmldsigCoreSchemaV101TransformUri';

export interface IPl010CNt2022002V130XmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TPl010CNt2022002V130XmldsigCoreSchemaV101TransformUri;
}

export class CPl010CNt2022002V130XmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TPl010CNt2022002V130XmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CPl010CNt2022002V130XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CPl010CNt2022002V130XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
