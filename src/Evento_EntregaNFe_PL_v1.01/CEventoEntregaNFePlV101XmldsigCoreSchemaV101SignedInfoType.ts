import { CEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType } from './CEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType';

export interface IEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType {
  "@class"?: string;
  Reference?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType;
  $Id?: string;
}

export class CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType {
    public "@class"?: string;

    public Reference?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType;
    public $Id?: string;

    public constructor(props?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
