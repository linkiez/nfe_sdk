import { CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType';

export interface IEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
