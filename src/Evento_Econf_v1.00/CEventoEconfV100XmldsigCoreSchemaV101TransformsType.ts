import { CEventoEconfV100XmldsigCoreSchemaV101TransformType } from './CEventoEconfV100XmldsigCoreSchemaV101TransformType';

export interface IEventoEconfV100XmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CEventoEconfV100XmldsigCoreSchemaV101TransformType;
}

export class CEventoEconfV100XmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CEventoEconfV100XmldsigCoreSchemaV101TransformType;

    public constructor(props?: CEventoEconfV100XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoEconfV100XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoEconfV100XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
