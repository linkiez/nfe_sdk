import { CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101KeyInfoType } from './CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureValueType } from './CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignedInfoType } from './CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignedInfoType';

export interface IEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureType {
  "@class"?: string;
  SignedInfo?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignedInfoType;
  SignatureValue?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureValueType;
  KeyInfo?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101KeyInfoType;
  $Id?: string;
}

export class CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureType {
    public "@class"?: string;

    public SignedInfo?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignedInfoType;
    public SignatureValue?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureValueType;
    public KeyInfo?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101KeyInfoType;
    public $Id?: string;

    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureType) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureType";


        if (props) {

        	this.SignedInfo = (props.SignedInfo) ? new CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignedInfoType(props.SignedInfo): undefined;
        	this.SignatureValue = (props.SignatureValue) ? new CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureValueType(props.SignatureValue): undefined;
        	this.KeyInfo = (props.KeyInfo) ? new CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo): undefined;
        	this.$Id = props.$Id;
        }
    }
}
