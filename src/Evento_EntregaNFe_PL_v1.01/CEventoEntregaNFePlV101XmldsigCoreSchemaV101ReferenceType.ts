import { CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType } from './CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoEntregaNFePlV101XmldsigCoreSchemaV101DigestValueType } from './TEventoEntregaNFePlV101XmldsigCoreSchemaV101DigestValueType';

export interface IEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType;
  DigestValue?: TEventoEntregaNFePlV101XmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TEventoEntregaNFePlV101XmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
