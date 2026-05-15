import { CEventoAverbPlV101XmldsigCoreSchemaV101TransformType } from './CEventoAverbPlV101XmldsigCoreSchemaV101TransformType';

export interface IEventoAverbPlV101XmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CEventoAverbPlV101XmldsigCoreSchemaV101TransformType;
}

export class CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CEventoAverbPlV101XmldsigCoreSchemaV101TransformType;

    public constructor(props?: CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoAverbPlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
