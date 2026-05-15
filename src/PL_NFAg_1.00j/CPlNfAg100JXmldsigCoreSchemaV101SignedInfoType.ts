import { CPlNfAg100JXmldsigCoreSchemaV101ReferenceType } from './CPlNfAg100JXmldsigCoreSchemaV101ReferenceType';

export interface IPlNfAg100JXmldsigCoreSchemaV101SignedInfoType {
  "@class"?: string;
  Reference?: CPlNfAg100JXmldsigCoreSchemaV101ReferenceType;
  $Id?: string;
}

export class CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType {
    public "@class"?: string;

    public Reference?: CPlNfAg100JXmldsigCoreSchemaV101ReferenceType;
    public $Id?: string;

    public constructor(props?: CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CPlNfAg100JXmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
