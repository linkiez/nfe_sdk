import { CEventoCancPlV101XmldsigCoreSchemaV101TransformType } from './CEventoCancPlV101XmldsigCoreSchemaV101TransformType';

export interface IEventoCancPlV101XmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CEventoCancPlV101XmldsigCoreSchemaV101TransformType;
}

export class CEventoCancPlV101XmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CEventoCancPlV101XmldsigCoreSchemaV101TransformType;

    public constructor(props?: CEventoCancPlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoCancPlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoCancPlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
