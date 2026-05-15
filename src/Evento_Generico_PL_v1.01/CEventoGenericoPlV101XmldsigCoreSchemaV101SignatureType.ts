import { CEventoGenericoPlV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoGenericoPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType';

export interface IEventoGenericoPlV101XmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CEventoGenericoPlV101XmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CEventoGenericoPlV101XmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoGenericoPlV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
