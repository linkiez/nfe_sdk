import { CEventoCCePlV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoCCePlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoCCePlV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoCCePlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType';

export interface IEventoCCePlV101XmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CEventoCCePlV101XmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CEventoCCePlV101XmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CEventoCCePlV101XmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CEventoCCePlV101XmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CEventoCCePlV101XmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CEventoCCePlV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoCCePlV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoCCePlV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoCCePlV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
