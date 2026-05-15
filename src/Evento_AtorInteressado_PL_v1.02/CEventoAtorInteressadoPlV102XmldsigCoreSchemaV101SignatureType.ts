import { CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType } from './CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType';

import { CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureValueType } from './CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureValueType';

import { CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType } from './CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType';

export interface IEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
