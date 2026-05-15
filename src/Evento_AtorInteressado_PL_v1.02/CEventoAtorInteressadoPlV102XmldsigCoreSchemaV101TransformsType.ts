import { CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType } from './CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType';

export interface IEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType;
}

export class CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType;

    public constructor(props?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
