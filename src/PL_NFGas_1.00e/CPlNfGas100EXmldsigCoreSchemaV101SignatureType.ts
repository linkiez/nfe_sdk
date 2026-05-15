import { CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType } from './CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType';

import { CPlNfGas100EXmldsigCoreSchemaV101SignatureValueType } from './CPlNfGas100EXmldsigCoreSchemaV101SignatureValueType';

import { CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType } from './CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType';

export interface IPlNfGas100EXmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CPlNfGas100EXmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CPlNfGas100EXmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CPlNfGas100EXmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CPlNfGas100EXmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CPlNfGas100EXmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CPlNfGas100EXmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
