import { CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType } from './CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType';

export interface IEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType;
}

export class CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType;

    public constructor(props?: CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
