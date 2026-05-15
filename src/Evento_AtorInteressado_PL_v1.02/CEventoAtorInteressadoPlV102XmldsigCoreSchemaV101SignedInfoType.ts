import { CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType } from './CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType';

export interface IEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType {
  "@class"?: string;
  Reference?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType;
  $Id?: string;
}

export class CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType {
    public "@class"?: string;

    public Reference?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType;
    public $Id?: string;

    public constructor(props?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
