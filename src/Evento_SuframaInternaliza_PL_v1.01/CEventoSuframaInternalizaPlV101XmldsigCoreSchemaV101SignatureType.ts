import { CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignedInfoType';

export interface IEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
