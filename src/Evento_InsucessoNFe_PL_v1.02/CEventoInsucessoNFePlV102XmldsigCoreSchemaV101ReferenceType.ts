import { CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType } from './CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType';

import { TEventoInsucessoNFePlV102XmldsigCoreSchemaV101DigestValueType } from './TEventoInsucessoNFePlV102XmldsigCoreSchemaV101DigestValueType';

export interface IEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType;
  DigestValue?: TEventoInsucessoNFePlV102XmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TEventoInsucessoNFePlV102XmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
