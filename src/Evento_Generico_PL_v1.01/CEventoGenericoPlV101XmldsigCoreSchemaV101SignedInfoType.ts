import { CEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType } from './CEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType';

export interface IEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType {
  "@class"?: string;
  Reference?: CEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType;
  $Id?: string;
}

export class CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType {
    public "@class"?: string;

    public Reference?: CEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType;
    public $Id?: string;

    public constructor(props?: CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
