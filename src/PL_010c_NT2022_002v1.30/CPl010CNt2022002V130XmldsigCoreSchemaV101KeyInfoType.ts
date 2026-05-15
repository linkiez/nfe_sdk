import { CPl010CNt2022002V130XmldsigCoreSchemaV101X509DataType } from './CPl010CNt2022002V130XmldsigCoreSchemaV101X509DataType';

export interface IPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType {
  "@class"?: string;
  X509Data?: CPl010CNt2022002V130XmldsigCoreSchemaV101X509DataType;
  $Id?: string;
}

export class CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType {
    public "@class"?: string;

    public X509Data?: CPl010CNt2022002V130XmldsigCoreSchemaV101X509DataType;
    public $Id?: string;

    public constructor(props?: CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType) {
        this["@class"] = ".CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType";


        if (props) {

        	this.X509Data = (props.X509Data) ? new CPl010CNt2022002V130XmldsigCoreSchemaV101X509DataType(props.X509Data): undefined;
        	this.$Id = props.$Id;
        }
    }
}
