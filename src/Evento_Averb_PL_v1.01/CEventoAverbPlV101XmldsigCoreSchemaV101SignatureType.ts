import { CEventoAverbPlV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoAverbPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoAverbPlV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoAverbPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoAverbPlV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoAverbPlV101XmldsigCoreSchemaV101SignedInfoType';

export interface IEventoAverbPlV101XmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CEventoAverbPlV101XmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CEventoAverbPlV101XmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CEventoAverbPlV101XmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CEventoAverbPlV101XmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CEventoAverbPlV101XmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CEventoAverbPlV101XmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CEventoAverbPlV101XmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CEventoAverbPlV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoAverbPlV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoAverbPlV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoAverbPlV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoAverbPlV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
