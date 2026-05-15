import { CPlNfGas100EXmldsigCoreSchemaV101ReferenceType } from './CPlNfGas100EXmldsigCoreSchemaV101ReferenceType';

export interface IPlNfGas100EXmldsigCoreSchemaV101SignedInfoType {
  "@class"?: string;
  Reference?: CPlNfGas100EXmldsigCoreSchemaV101ReferenceType;
  $Id?: string;
}

export class CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType {
    public "@class"?: string;

    public Reference?: CPlNfGas100EXmldsigCoreSchemaV101ReferenceType;
    public $Id?: string;

    public constructor(props?: CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CPlNfGas100EXmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
