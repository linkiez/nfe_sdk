import { CEventoEpecPlV101XmldsigCoreSchemaV101TransformType } from './CEventoEpecPlV101XmldsigCoreSchemaV101TransformType';

export interface IEventoEpecPlV101XmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CEventoEpecPlV101XmldsigCoreSchemaV101TransformType;
}

export class CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CEventoEpecPlV101XmldsigCoreSchemaV101TransformType;

    public constructor(props?: CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoEpecPlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
