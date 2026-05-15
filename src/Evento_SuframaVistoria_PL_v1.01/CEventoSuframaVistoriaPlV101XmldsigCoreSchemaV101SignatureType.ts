import { CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType';

export interface IEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
