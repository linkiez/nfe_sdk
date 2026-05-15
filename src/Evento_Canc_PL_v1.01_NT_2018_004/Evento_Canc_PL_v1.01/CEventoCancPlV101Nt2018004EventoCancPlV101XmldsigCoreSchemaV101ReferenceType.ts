import { CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformsType } from './CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101DigestValueType } from './TEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101DigestValueType';

export interface IEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101ReferenceType {
  "@class"?: string;
  Transforms?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformsType;
  DigestValue?: TEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101DigestValueType;
  $Id?: string;
  $URI?: any;
  $Type?: string;
}

export class CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101ReferenceType {
    public "@class"?: string;

    public Transforms?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformsType;
    public DigestValue?: TEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101DigestValueType;
    public $Id?: string;
    public $URI?: any;
    public $Type?: string;

    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101ReferenceType) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101ReferenceType";


        if (props) {

        	this.Transforms = (props.Transforms) ? new CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101TransformsType(props.Transforms): undefined;
        	this.DigestValue = props.DigestValue;
        	this.$Id = props.$Id;
        	this.$URI = props.$URI;
        	this.$Type = props.$Type;
        }
    }
}
