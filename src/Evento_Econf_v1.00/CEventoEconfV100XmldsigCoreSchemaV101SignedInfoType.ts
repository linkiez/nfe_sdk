import { CEventoEconfV100XmldsigCoreSchemaV101ReferenceType } from './CEventoEconfV100XmldsigCoreSchemaV101ReferenceType';

export interface IEventoEconfV100XmldsigCoreSchemaV101SignedInfoType {
  "@class"?: string;
  Reference?: CEventoEconfV100XmldsigCoreSchemaV101ReferenceType;
  $Id?: string;
}

export class CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType {
    public "@class"?: string;

    public Reference?: CEventoEconfV100XmldsigCoreSchemaV101ReferenceType;
    public $Id?: string;

    public constructor(props?: CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoEconfV100XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
