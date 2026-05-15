import { CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType } from './CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType';

export interface IEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType;
}

export class CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType;

    public constructor(props?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
