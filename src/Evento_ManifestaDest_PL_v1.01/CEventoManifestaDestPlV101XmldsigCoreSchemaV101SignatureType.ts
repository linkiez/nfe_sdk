import { CEventoManifestaDestPlV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoManifestaDestPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType';

export interface IEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoManifestaDestPlV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
