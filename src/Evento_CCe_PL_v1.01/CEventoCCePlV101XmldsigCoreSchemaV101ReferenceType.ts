import { CEventoCCePlV101XmldsigCoreSchemaV101TransformsType } from './CEventoCCePlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoCCePlV101XmldsigCoreSchemaV101DigestValueType } from './TEventoCCePlV101XmldsigCoreSchemaV101DigestValueType';

export interface IEventoCCePlV101XmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CEventoCCePlV101XmldsigCoreSchemaV101TransformsType;
  DigestValue?: TEventoCCePlV101XmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CEventoCCePlV101XmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CEventoCCePlV101XmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TEventoCCePlV101XmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CEventoCCePlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoCCePlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoCCePlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
