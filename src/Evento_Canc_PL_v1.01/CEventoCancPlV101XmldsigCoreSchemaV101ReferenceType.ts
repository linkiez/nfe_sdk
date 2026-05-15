import { CEventoCancPlV101XmldsigCoreSchemaV101TransformsType } from './CEventoCancPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoCancPlV101XmldsigCoreSchemaV101DigestValueType } from './TEventoCancPlV101XmldsigCoreSchemaV101DigestValueType';

export interface IEventoCancPlV101XmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CEventoCancPlV101XmldsigCoreSchemaV101TransformsType;
  DigestValue?: TEventoCancPlV101XmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CEventoCancPlV101XmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CEventoCancPlV101XmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TEventoCancPlV101XmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CEventoCancPlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoCancPlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoCancPlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
