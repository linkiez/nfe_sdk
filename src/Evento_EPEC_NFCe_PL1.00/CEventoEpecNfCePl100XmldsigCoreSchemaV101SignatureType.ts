import { CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType } from './CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType';

import { CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureValueType } from './CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureValueType';

import { CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType } from './CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType';

export interface IEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
