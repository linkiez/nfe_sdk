import { CEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType } from './CEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType';

export interface IEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType {
  "@class"?: string;
  Reference?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType;
  $Id?: string;
}

export class CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType {
    public "@class"?: string;

    public Reference?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType;
    public $Id?: string;

    public constructor(props?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
