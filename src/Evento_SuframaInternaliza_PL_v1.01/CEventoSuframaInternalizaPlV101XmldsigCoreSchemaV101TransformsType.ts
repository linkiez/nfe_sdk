import { CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType } from './CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType';

export interface IEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType;
}

export class CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType;

    public constructor(props?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
