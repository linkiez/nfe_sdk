import { CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType } from './CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType';

export interface IEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType {
  "@class"?: string;
  Transform?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType;
}

export class CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType {
    public "@class"?: string;

    public Transform?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType;

    public constructor(props?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType) {
        this["@class"] = ".CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType";


        if (props) {

        	this.Transform = (props.Transform) ? new CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType(props.Transform): undefined;
        }
    }
}
