import { CEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType } from './CEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType.
 */
export class CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Reference.
     */
    public Reference?: CEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType instance.
     * Schema context: Runtime class for CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
