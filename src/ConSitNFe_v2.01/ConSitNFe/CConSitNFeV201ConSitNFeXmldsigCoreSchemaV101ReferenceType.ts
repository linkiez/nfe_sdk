import { CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformsType } from './CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformsType';

import { TConSitNFeV201ConSitNFeXmldsigCoreSchemaV101DigestValueType } from './TConSitNFeV201ConSitNFeXmldsigCoreSchemaV101DigestValueType';

export interface IConSitNFeV201ConSitNFeXmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformsType;
  DigestValue?: TConSitNFeV201ConSitNFeXmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TConSitNFeV201ConSitNFeXmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
