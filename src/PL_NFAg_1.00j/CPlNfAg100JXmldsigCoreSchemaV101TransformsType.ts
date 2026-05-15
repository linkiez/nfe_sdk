import { CPlNfAg100JXmldsigCoreSchemaV101TransformType } from './CPlNfAg100JXmldsigCoreSchemaV101TransformType';

export interface IPlNfAg100JXmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CPlNfAg100JXmldsigCoreSchemaV101TransformType;
}

export class CPlNfAg100JXmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CPlNfAg100JXmldsigCoreSchemaV101TransformType;

    public constructor(props?: CPlNfAg100JXmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CPlNfAg100JXmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CPlNfAg100JXmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
