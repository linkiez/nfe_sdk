import { CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType } from './CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType';

export interface IEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType {
  "@class"?: string;
  Reference?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType;
  $Id?: string;
}

export class CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType {
    public "@class"?: string;

    public Reference?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType;
    public $Id?: string;

    public constructor(props?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
