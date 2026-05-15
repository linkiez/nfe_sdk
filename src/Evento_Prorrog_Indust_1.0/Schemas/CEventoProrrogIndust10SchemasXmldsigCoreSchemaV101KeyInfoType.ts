import { CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType } from './CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType';

export interface IEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType {
  "@class"?: string;
  X509Data?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType;
  $Id?: string;
}

export class CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType {
    public "@class"?: string;

    public X509Data?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType;
    public $Id?: string;

    public constructor(props?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
