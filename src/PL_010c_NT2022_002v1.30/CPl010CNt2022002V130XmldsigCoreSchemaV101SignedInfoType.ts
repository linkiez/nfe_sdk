import { CPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType } from './CPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType';

export interface IPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType {
  "@class"?: string;
  Reference?: CPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType;
  $Id?: string;
}

export class CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType {
    public "@class"?: string;

    public Reference?: CPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType;
    public $Id?: string;

    public constructor(props?: CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
