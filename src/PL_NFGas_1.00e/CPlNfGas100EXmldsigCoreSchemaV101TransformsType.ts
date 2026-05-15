import { CPlNfGas100EXmldsigCoreSchemaV101TransformType } from './CPlNfGas100EXmldsigCoreSchemaV101TransformType';

export interface IPlNfGas100EXmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CPlNfGas100EXmldsigCoreSchemaV101TransformType;
}

export class CPlNfGas100EXmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CPlNfGas100EXmldsigCoreSchemaV101TransformType;

    public constructor(props?: CPlNfGas100EXmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CPlNfGas100EXmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CPlNfGas100EXmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
