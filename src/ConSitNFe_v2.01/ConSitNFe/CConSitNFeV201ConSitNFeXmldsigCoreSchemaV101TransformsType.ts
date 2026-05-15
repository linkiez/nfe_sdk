import { CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformType } from './CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformType';

export interface IConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformType;
}

export class CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformType;

    public constructor(props?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
