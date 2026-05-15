import { CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101KeyInfoType } from './CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101KeyInfoType';

import { CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101SignatureValueType } from './CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101SignatureValueType';

import { CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101SignedInfoType } from './CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101SignedInfoType';

export interface IConSitNFeV201ConSitNFeXmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
