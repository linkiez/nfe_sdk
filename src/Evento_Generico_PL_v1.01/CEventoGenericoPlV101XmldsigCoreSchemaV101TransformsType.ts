import { CEventoGenericoPlV101XmldsigCoreSchemaV101TransformType } from './CEventoGenericoPlV101XmldsigCoreSchemaV101TransformType';

export interface IEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CEventoGenericoPlV101XmldsigCoreSchemaV101TransformType;
}

export class CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CEventoGenericoPlV101XmldsigCoreSchemaV101TransformType;

    public constructor(props?: CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoGenericoPlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
