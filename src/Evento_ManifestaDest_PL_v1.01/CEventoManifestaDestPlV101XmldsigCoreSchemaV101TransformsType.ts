import { CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType } from './CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType';

export interface IEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType;
}

export class CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType;

    public constructor(props?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
