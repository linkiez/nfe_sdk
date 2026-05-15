import { CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType } from './CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType';

import { TPl010CNt2022002V130XmldsigCoreSchemaV101DigestValueType } from './TPl010CNt2022002V130XmldsigCoreSchemaV101DigestValueType';

export interface IPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType;
  DigestValue?: TPl010CNt2022002V130XmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TPl010CNt2022002V130XmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
