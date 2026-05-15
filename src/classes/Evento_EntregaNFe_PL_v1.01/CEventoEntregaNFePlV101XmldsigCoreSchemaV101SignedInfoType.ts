import { CEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType } from './CEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType.
 */
export class CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Reference.
     */
    public Reference?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType instance.
     * Schema context: Runtime class for CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
