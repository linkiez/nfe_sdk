import { CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType } from './CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType';

import { TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101DigestValueType } from './TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101DigestValueType';

export interface IEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType;
  DigestValue?: TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
