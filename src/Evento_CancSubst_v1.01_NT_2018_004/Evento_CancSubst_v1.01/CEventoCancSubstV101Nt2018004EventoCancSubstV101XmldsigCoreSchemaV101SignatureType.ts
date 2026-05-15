import { CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignedInfoType';

export interface IEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
