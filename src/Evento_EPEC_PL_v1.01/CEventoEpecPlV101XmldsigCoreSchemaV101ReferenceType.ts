import { CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType } from './CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoEpecPlV101XmldsigCoreSchemaV101DigestValueType } from './TEventoEpecPlV101XmldsigCoreSchemaV101DigestValueType';

export interface IEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType;
  DigestValue?: TEventoEpecPlV101XmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TEventoEpecPlV101XmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
