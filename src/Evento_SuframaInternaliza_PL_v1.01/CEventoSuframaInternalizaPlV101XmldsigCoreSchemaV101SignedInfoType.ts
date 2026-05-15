import { CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101ReferenceType } from './CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101ReferenceType';

export interface IEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignedInfoType {
  "@class"?: string;
  Reference?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101ReferenceType;
  $Id?: string;
}

export class CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignedInfoType {
    public "@class"?: string;

    public Reference?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101ReferenceType;
    public $Id?: string;

    public constructor(props?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
