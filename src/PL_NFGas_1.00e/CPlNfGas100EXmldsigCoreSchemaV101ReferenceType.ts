import { CPlNfGas100EXmldsigCoreSchemaV101TransformsType } from './CPlNfGas100EXmldsigCoreSchemaV101TransformsType';

import { TPlNfGas100EXmldsigCoreSchemaV101DigestValueType } from './TPlNfGas100EXmldsigCoreSchemaV101DigestValueType';

export interface IPlNfGas100EXmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CPlNfGas100EXmldsigCoreSchemaV101TransformsType;
  DigestValue?: TPlNfGas100EXmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CPlNfGas100EXmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CPlNfGas100EXmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TPlNfGas100EXmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CPlNfGas100EXmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CPlNfGas100EXmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CPlNfGas100EXmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
