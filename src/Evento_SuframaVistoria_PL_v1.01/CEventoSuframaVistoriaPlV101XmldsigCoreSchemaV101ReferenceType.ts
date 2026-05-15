import { CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType } from './CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101DigestValueType } from './TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101DigestValueType';

export interface IEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType;
  DigestValue?: TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
