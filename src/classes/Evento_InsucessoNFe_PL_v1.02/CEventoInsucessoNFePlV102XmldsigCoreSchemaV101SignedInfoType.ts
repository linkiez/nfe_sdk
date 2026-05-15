import { CEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType } from './CEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType.
 */
export class CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Reference.
     */
    public Reference?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType instance.
     * Schema context: Runtime class for CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
