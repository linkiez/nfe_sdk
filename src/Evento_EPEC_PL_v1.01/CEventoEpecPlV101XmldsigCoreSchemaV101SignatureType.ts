import { CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoEpecPlV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoEpecPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType';

export interface IEventoEpecPlV101XmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CEventoEpecPlV101XmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CEventoEpecPlV101XmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CEventoEpecPlV101XmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CEventoEpecPlV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoEpecPlV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoEpecPlV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
