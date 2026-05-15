import { CEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType } from './CEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType';

export interface IEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType {
  "@class"?: string;
  Reference?: CEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType;
  $Id?: string;
}

export class CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType {
    public "@class"?: string;

    public Reference?: CEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType;
    public $Id?: string;

    public constructor(props?: CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
