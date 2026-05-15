import { CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType } from './CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType.
 */
export class CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema property Reference.
     */
    public Reference?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType;
    /**
     * Schema attribute id.
     */
    public $Id?: string;

    /**
     * Creates a new schema-backed CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType instance.
     * Schema context: Runtime class for CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType) {
        this["@class"] = ".CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType";


        if (props) {

        	this.Reference = (props.Reference) ? new CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType(props.Reference): undefined;
        	this.$Id = props.$Id;
        }
    }
}
