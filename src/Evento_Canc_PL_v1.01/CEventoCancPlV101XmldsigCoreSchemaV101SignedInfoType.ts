import { CEventoCancPlV101XmldsigCoreSchemaV101ReferenceType } from './CEventoCancPlV101XmldsigCoreSchemaV101ReferenceType';

export interface IEventoCancPlV101XmldsigCoreSchemaV101SignedInfoType {
  "@class"?: string;
  Reference?: CEventoCancPlV101XmldsigCoreSchemaV101ReferenceType;
  $Id?: string;
}

export class CEventoCancPlV101XmldsigCoreSchemaV101SignedInfoType {
    public "@class"?: string;

    public Reference?: CEventoCancPlV101XmldsigCoreSchemaV101ReferenceType;
    public $Id?: string;

    public constructor(props?: CEventoCancPlV101XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoCancPlV101XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoCancPlV101XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
