import { CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType } from './CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType';

export interface IEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType;
}

export class CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType;

    public constructor(props?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
