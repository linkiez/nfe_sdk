import { CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType } from './CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoManifestaDestPlV101XmldsigCoreSchemaV101DigestValueType } from './TEventoManifestaDestPlV101XmldsigCoreSchemaV101DigestValueType';

export interface IEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType;
  DigestValue?: TEventoManifestaDestPlV101XmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TEventoManifestaDestPlV101XmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
