import { CEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType } from './CEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType';

export interface IEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType {
  "@class"?: string;
  Reference?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType;
  $Id?: string;
}

export class CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType {
    public "@class"?: string;

    public Reference?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType;
    public $Id?: string;

    public constructor(props?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
