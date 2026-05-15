import { CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType } from './CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoAverbPlV101XmldsigCoreSchemaV101DigestValueType } from './TEventoAverbPlV101XmldsigCoreSchemaV101DigestValueType';

export interface IEventoAverbPlV101XmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType;
  DigestValue?: TEventoAverbPlV101XmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CEventoAverbPlV101XmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TEventoAverbPlV101XmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CEventoAverbPlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoAverbPlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
