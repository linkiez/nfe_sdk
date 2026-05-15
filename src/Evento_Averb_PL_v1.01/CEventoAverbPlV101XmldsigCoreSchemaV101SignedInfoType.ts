import { CEventoAverbPlV101XmldsigCoreSchemaV101ReferenceType } from './CEventoAverbPlV101XmldsigCoreSchemaV101ReferenceType';

export interface IEventoAverbPlV101XmldsigCoreSchemaV101SignedInfoType {
  "@class"?: string;
  Reference?: CEventoAverbPlV101XmldsigCoreSchemaV101ReferenceType;
  $Id?: string;
}

export class CEventoAverbPlV101XmldsigCoreSchemaV101SignedInfoType {
    public "@class"?: string;

    public Reference?: CEventoAverbPlV101XmldsigCoreSchemaV101ReferenceType;
    public $Id?: string;

    public constructor(props?: CEventoAverbPlV101XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoAverbPlV101XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoAverbPlV101XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
