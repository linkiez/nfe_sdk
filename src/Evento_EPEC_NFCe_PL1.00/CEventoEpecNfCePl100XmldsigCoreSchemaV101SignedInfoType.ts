import { CEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType } from './CEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType';

export interface IEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType {
  "@class"?: string;
  Reference?: CEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType;
  $Id?: string;
}

export class CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType {
    public "@class"?: string;

    public Reference?: CEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType;
    public $Id?: string;

    public constructor(props?: CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
