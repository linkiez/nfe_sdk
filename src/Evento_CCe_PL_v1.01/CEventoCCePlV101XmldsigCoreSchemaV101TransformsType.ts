import { CEventoCCePlV101XmldsigCoreSchemaV101TransformType } from './CEventoCCePlV101XmldsigCoreSchemaV101TransformType';

export interface IEventoCCePlV101XmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CEventoCCePlV101XmldsigCoreSchemaV101TransformType;
}

export class CEventoCCePlV101XmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CEventoCCePlV101XmldsigCoreSchemaV101TransformType;

    public constructor(props?: CEventoCCePlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoCCePlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoCCePlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
