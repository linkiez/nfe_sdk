import { CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType } from './CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101DigestValueType } from './TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101DigestValueType';

export interface IEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType;
  DigestValue?: TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
