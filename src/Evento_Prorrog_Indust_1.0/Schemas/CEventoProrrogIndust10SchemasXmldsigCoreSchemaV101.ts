import { TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101Signature } from './TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101Signature';

export interface IEventoProrrogIndust10SchemasXmldsigCoreSchemaV101 {
  "@class"?: string;
  signature?: TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101Signature;
}

export class CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101 {
    public "@class"?: string;

    public signature?: TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101Signature;

    public constructor(props?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101) {
        this["@class"] = ".CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101";


        if (props) {

        	this.signature = props.signature;
        }
    }
}
