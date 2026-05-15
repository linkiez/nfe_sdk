import { CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType } from './CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType';

export interface IEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType {
  "@class"?: string;
  Reference?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType;
  $Id?: string;
}

export class CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType {
    public "@class"?: string;

    public Reference?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType;
    public $Id?: string;

    public constructor(props?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
