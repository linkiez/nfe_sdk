import { CEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType } from './CEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType';

export interface IEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType {
  "@class"?: string;
  X509Data?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType;
  $Id?: string;
}

export class CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType {
    public "@class"?: string;

    public X509Data?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType;
    public $Id?: string;

    public constructor(props?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CEventoInsucessoNFePlV102XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
