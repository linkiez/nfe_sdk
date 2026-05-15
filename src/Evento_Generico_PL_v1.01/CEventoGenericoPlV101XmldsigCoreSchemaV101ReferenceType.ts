import { CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType } from './CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoGenericoPlV101XmldsigCoreSchemaV101DigestValueType } from './TEventoGenericoPlV101XmldsigCoreSchemaV101DigestValueType';

export interface IEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType;
  DigestValue?: TEventoGenericoPlV101XmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TEventoGenericoPlV101XmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
