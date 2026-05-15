import { CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101ReferenceType } from './CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101ReferenceType';

export interface IConSitNFeV201ConSitNFeXmldsigCoreSchemaV101SignedInfoType {
  "@class"?: string;
  Reference?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101ReferenceType;
  $Id?: string;
}

export class CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101SignedInfoType {
    public "@class"?: string;

    public Reference?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101ReferenceType;
    public $Id?: string;

    public constructor(props?: CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CConSitNFeV201ConSitNFeXmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
