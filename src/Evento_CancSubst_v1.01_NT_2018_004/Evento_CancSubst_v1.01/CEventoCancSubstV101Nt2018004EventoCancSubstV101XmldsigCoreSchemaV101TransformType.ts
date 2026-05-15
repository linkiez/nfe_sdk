import { TEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformUri } from './TEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformUri';

export interface IEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformUri;
}

export class CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
