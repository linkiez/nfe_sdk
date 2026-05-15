import { CPlNfAg100JXmldsigCoreSchemaV101TransformsType } from './CPlNfAg100JXmldsigCoreSchemaV101TransformsType';

import { TPlNfAg100JXmldsigCoreSchemaV101DigestValueType } from './TPlNfAg100JXmldsigCoreSchemaV101DigestValueType';

export interface IPlNfAg100JXmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CPlNfAg100JXmldsigCoreSchemaV101TransformsType;
  DigestValue?: TPlNfAg100JXmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CPlNfAg100JXmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CPlNfAg100JXmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TPlNfAg100JXmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CPlNfAg100JXmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CPlNfAg100JXmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CPlNfAg100JXmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
