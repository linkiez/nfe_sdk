import { CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101X509DataType } from './CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101X509DataType';

export interface IEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101KeyInfoType {
  "@class"?: string;
  X509Data?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101X509DataType;
  $Id?: string;
}

export class CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101KeyInfoType {
    public "@class"?: string;

    public X509Data?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101X509DataType;
    public $Id?: string;

    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
