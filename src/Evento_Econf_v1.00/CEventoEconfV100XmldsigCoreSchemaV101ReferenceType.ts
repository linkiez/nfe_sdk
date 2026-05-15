import { CEventoEconfV100XmldsigCoreSchemaV101TransformsType } from './CEventoEconfV100XmldsigCoreSchemaV101TransformsType';

import { TEventoEconfV100XmldsigCoreSchemaV101DigestValueType } from './TEventoEconfV100XmldsigCoreSchemaV101DigestValueType';

export interface IEventoEconfV100XmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CEventoEconfV100XmldsigCoreSchemaV101TransformsType;
  DigestValue?: TEventoEconfV100XmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CEventoEconfV100XmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CEventoEconfV100XmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TEventoEconfV100XmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CEventoEconfV100XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoEconfV100XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoEconfV100XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
