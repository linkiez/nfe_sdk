import { CEventoCCePlV101XmldsigCoreSchemaV101ReferenceType } from './CEventoCCePlV101XmldsigCoreSchemaV101ReferenceType';

export interface IEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType {
  "@class"?: string;
  Reference?: CEventoCCePlV101XmldsigCoreSchemaV101ReferenceType;
  $Id?: string;
}

export class CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType {
    public "@class"?: string;

    public Reference?: CEventoCCePlV101XmldsigCoreSchemaV101ReferenceType;
    public $Id?: string;

    public constructor(props?: CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoCCePlV101XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
