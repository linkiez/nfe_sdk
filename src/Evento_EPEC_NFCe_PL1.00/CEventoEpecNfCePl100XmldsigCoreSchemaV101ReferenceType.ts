import { CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType } from './CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType';

import { TEventoEpecNfCePl100XmldsigCoreSchemaV101DigestValueType } from './TEventoEpecNfCePl100XmldsigCoreSchemaV101DigestValueType';

export interface IEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType;
  DigestValue?: TEventoEpecNfCePl100XmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TEventoEpecNfCePl100XmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
