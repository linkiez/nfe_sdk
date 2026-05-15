import { CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType } from './CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType';

import { CEventoEconfV100XmldsigCoreSchemaV101SignatureValueType } from './CEventoEconfV100XmldsigCoreSchemaV101SignatureValueType';

import { CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType } from './CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType';

export interface IEventoEconfV100XmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CEventoEconfV100XmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CEventoEconfV100XmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CEventoEconfV100XmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CEventoEconfV100XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoEconfV100XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoEconfV100XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
