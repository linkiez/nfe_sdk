import { CEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType } from './CEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType.
 */
export class CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Reference.
     */
    public Reference?: CEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType instance.
     * Schema context: Runtime class for CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
