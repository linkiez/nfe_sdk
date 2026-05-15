import { CPl010CNt2022002V130XmldsigCoreSchemaV101TransformType } from './CPl010CNt2022002V130XmldsigCoreSchemaV101TransformType';

export interface IPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CPl010CNt2022002V130XmldsigCoreSchemaV101TransformType;
}

export class CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CPl010CNt2022002V130XmldsigCoreSchemaV101TransformType;

    public constructor(props?: CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CPl010CNt2022002V130XmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
