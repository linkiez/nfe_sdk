import { CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType } from './CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType';

import { CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureValueType } from './CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureValueType';

import { CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType } from './CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType';

export interface IPl010CNt2022002V130XmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
