import { CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType } from './CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType';

import { CPlNfAg100JXmldsigCoreSchemaV101SignatureValueType } from './CPlNfAg100JXmldsigCoreSchemaV101SignatureValueType';

import { CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType } from './CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType';

export interface IPlNfAg100JXmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CPlNfAg100JXmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CPlNfAg100JXmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CPlNfAg100JXmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CPlNfAg100JXmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CPlNfAg100JXmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CPlNfAg100JXmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
