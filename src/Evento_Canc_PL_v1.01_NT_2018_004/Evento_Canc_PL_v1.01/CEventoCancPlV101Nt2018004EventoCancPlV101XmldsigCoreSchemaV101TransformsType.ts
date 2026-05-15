import { CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformType } from './CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformType';

export interface IEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformType;
}

export class CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformType;

    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
