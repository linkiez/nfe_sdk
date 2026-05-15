import { TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformUri } from './TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformUri';

export interface IEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType {
  "@class"?: string;
  XPath?: string;
  $Algorithm?: TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformUri;
}

export class CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType {
    public "@class"?: string;

    public XPath?: string;
    public $Algorithm?: TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformUri;

    public constructor(props?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType) {
        this["@class"] = ".CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformType";


        if (props) {

        	this.XPath = props.XPath;
        	this.$Algorithm = props.$Algorithm;
        }
    }
}
