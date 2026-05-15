import { CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformType } from './CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformType';

export interface IEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformType;
}

export class CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformType;

    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
