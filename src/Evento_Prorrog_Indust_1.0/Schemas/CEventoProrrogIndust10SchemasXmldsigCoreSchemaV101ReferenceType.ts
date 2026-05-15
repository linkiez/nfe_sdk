import { CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType } from './CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType';

import { TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101DigestValueType } from './TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101DigestValueType';

export interface IEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType;
  DigestValue?: TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
