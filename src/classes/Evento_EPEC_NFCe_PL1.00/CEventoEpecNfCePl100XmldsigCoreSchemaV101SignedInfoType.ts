import { CEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType } from './CEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType.
 */
export class CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Reference.
     */
    public Reference?: CEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType instance.
     * Schema context: Runtime class for CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
