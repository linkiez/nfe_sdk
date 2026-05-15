import { TEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformUri } from './TEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformUri';

export interface IEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformUri;
}

export class CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
