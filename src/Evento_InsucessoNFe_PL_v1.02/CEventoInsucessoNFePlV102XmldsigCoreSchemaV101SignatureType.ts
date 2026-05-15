import { CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType } from './CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType';

import { CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureValueType } from './CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureValueType';

import { CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType } from './CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType';

export interface IEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
